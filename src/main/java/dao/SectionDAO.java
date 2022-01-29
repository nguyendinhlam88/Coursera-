package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import model.Section;
import model.Video;

public class SectionDAO {
	
	public static List<Section> getSectionList(int courseID, int userID) {
		Connection con = null;
		PreparedStatement statement = null;
		ResultSet result = null;
		List<Section> sectionList = new ArrayList<>();
		
		String sql = "SELECT S.* FROM Section as S, SectionSupply as SS WHERE  SS.courseID = ? AND S.sectionID = SS.sectionID";
		
		try {
			DBConnection dbCon = DBConnection.getDBConnection();
			con = dbCon.connectToDB();
			
			statement = con.prepareStatement(sql);
			statement.setInt(1, courseID);
			result = statement.executeQuery();
			
			while(result.next()) {
				int id = result.getInt("sectionID");
				String title = result.getString("title");
				List<Video> videoList = VideoDAO.getVideoList(id, userID);
				Section section = new Section(id, title, videoList);
				sectionList.add(section);
			}
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
		    try { result.close(); } catch (Exception e) { /* Ignored */ }
		    try { statement.close(); } catch (Exception e) { /* Ignored */ }
		    try { con.close(); } catch (Exception e) { /* Ignored */ }
		}
		
		return sectionList;
	}
}
