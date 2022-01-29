package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import model.Material;

public class MaterialDAO {

	public static List<Material> getMaterialList(int videoID) {
		Connection con = null;
		PreparedStatement statement = null;
		ResultSet result = null;
		List<Material> materialList = new ArrayList<>();
		
		String sql = "SELECT M.* FROM Material as M, VideoMaterial as VM WHERE  VM.videoID = ? AND M.materialID = VM.materialID";
		
		try {
			DBConnection dbCon = DBConnection.getDBConnection();
			con = dbCon.connectToDB();
			
			statement = con.prepareStatement(sql);
			statement.setInt(1, videoID);
			result = statement.executeQuery();
			
			while(result.next()) {
				int id = result.getInt("materialID");
				String materialName = result.getString("name");
				String path = result.getString("path");
				Material material = new Material(id, materialName, path);
				materialList.add(material);
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
		
		return materialList;
	}
}
