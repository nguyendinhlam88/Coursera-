package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import model.Material;
import model.NoteBook;
import model.Post;
import model.Video;

public class VideoDAO {
	
	public static List<Video> getVideoList(int sectionID, int userID) {
		Connection con = null;
		PreparedStatement statement = null;
		ResultSet result = null;
		List<Video> videoList = new ArrayList<>();
		
		String sql = "SELECT V.* FROM Video as V, VideoSupply as VS WHERE  VS.sectionID = ? AND V.videoID = VS.videoID";
		
		try {
			DBConnection dbCon = DBConnection.getDBConnection();
			con = dbCon.connectToDB();
			
			statement = con.prepareStatement(sql);
			statement.setInt(1, sectionID);
			result = statement.executeQuery();
			
			while(result.next()) {
				int id = result.getInt("videoID");
				String title = result.getString("title");
				String path = result.getString("path");
				String description = result.getString("description");
				String duration = result.getString("duration");
				List<Post> postList = PostDAO.getPostList(id);
				List<Material> materialList = MaterialDAO.getMaterialList(id);
				List<NoteBook> noteBookList = NoteBookDAO.getNoteBookList(userID, id);
				int status = VideoDAO.getVideoStatus(id, userID);
				Video video = new Video(id, title, path, description, duration, postList, materialList, noteBookList, status);
				videoList.add(video);
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
		
		return videoList;
	}

	public static int getVideoStatus(int videoID, int userID) {
		int status = 0;
		Connection con = null;
		PreparedStatement statement = null;
		ResultSet result = null;
		
		String sql = "SELECT VA.status FROM VideoAccount as VA WHERE  VA.accountID = ? AND VA.videoID = ?";
		
		try {
			DBConnection dbCon = DBConnection.getDBConnection();
			con = dbCon.connectToDB();
			
			statement = con.prepareStatement(sql);
			statement.setInt(1, userID);
			statement.setInt(2, videoID);
			result = statement.executeQuery();
			
			while(result.next()) {
				status = result.getInt("status");
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
		
		return status;
	}
	
	public static String updateVideoStatus(int videoID, int userID, int status) {
		Connection con = null;
		PreparedStatement statement = null;
		
		String sql = "UPDATE VideoAccount SET status = ? WHERE  accountID = ? AND videoID = ?";
		
		try {
			DBConnection dbCon = DBConnection.getDBConnection();
			con = dbCon.connectToDB();
			
			statement = con.prepareStatement(sql);
			statement.setInt(1, status);
			statement.setInt(2, userID);
			statement.setInt(3, videoID);
			statement.executeUpdate();
			
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
		    try { statement.close(); } catch (Exception e) { /* Ignored */ }
		    try { con.close(); } catch (Exception e) { /* Ignored */ }
		}
		
		return "SUCCESS";
	}
}
