package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import model.User;

public class UserDAO {
	
	public static User getUser(int userID) {
		Connection con = null;
		PreparedStatement statement = null;
		ResultSet result = null;
		User user = null;
		
		String sql = "SELECT A.* FROM Account as A WHERE A.accountID = ?";
		
		try {
			DBConnection dbCon = DBConnection.getDBConnection();
			con = dbCon.connectToDB();
			
			statement = con.prepareStatement(sql);
			statement.setInt(1, userID);
			result = statement.executeQuery();
			
			if(result.next()) {
				int id = result.getInt("accountID");
				String username = result.getString("username");
				String password = result.getString("password");
				String avatar = result.getString("avatar");
				user = new User(id, username, password, avatar);
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
		
		return user;
	}
	
	
	public static User getPostUser(int postID) {
		Connection con = null;
		PreparedStatement statement = null;
		ResultSet result = null;
		User user = null;
		
		String sql = "SELECT A.* FROM Account as A, PostAccount as PA WHERE  PA.postID = ? AND A.accountID = PA.accountID";
		
		try {
			DBConnection dbCon = DBConnection.getDBConnection();
			con = dbCon.connectToDB();
			
			statement = con.prepareStatement(sql);
			statement.setInt(1, postID);
			result = statement.executeQuery();
			
			while(result.next()) {
				int id = result.getInt("accountID");
				String username = result.getString("username");
				String password = result.getString("password");
				String avatar = result.getString("avatar");
				user = new User(id, username, password, avatar);
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
		
		return user;
	}
	
	public static User getCommentUser(int commentID) {
		Connection con = null;
		PreparedStatement statement = null;
		ResultSet result = null;
		User user = null;
		
		String sql = "SELECT A.* FROM Account as A, CommentAccount as CA WHERE  CA.commentID = ? AND A.accountID = CA.accountID";
		
		try {
			DBConnection dbCon = DBConnection.getDBConnection();
			con = dbCon.connectToDB();
			
			statement = con.prepareStatement(sql);
			statement.setInt(1, commentID);
			result = statement.executeQuery();
			
			while(result.next()) {
				int id = result.getInt("accountID");
				String username = result.getString("username");
				String password = result.getString("password");
				String avatar = result.getString("avatar");
				user = new User(id, username, password, avatar);
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
		
		return user;
	}
}
