package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import model.Comment;
import model.User;

public class CommentDAO {

	public static List<Comment> getCommentList(int postID) {
		Connection con = null;
		PreparedStatement statement = null;
		ResultSet result = null;
		List<Comment> commentList = new ArrayList<>();
		
		String sql = "SELECT C.* FROM Comment as C, CommentPost as CP WHERE  CP.postID = ? AND C.commentID = CP.commentID";
		
		try {
			DBConnection dbCon = DBConnection.getDBConnection();
			con = dbCon.connectToDB();
			
			statement = con.prepareStatement(sql);
			statement.setInt(1, postID);
			result = statement.executeQuery();
			
			while(result.next()) {
				int id = result.getInt("commentID");
				String content = result.getString("content");
				long time = result.getLong("time");
				User user = UserDAO.getCommentUser(id);
				Comment comment = new Comment(id, content, time, user);
				commentList.add(comment);
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
		
		return commentList;
	}
	
	public static int addComment(int postID, Comment comment) {
		Connection con = null;
		PreparedStatement statement = null;
		ResultSet result = null;
		int commentID = 0;
		
		
		String sql = "INSERT INTO `Comment`(`content`, `time`) VALUES (?, ?)";
		
		try {
			DBConnection dbCon = DBConnection.getDBConnection();
			con = dbCon.connectToDB();
			
			statement = con.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
			statement.setString(1, comment.getContent());
			statement.setLong(2, comment.getTime());
			statement.executeUpdate();
			
			result = statement.getGeneratedKeys();
			if (result.next()) {
				commentID = result.getInt(1);
			}
			
			// Cập nhật VIDEO-POST.
			sql = "INSERT INTO `CommentPost`(`commentID`, `postID`) VALUES (?, ?)";
			statement = con.prepareStatement(sql);
			statement.setInt(1, commentID);
			statement.setInt(2, postID);
			statement.executeUpdate();
			
			sql = "INSERT INTO `CommentAccount`(`commentID`, `accountID`) VALUES (?, ?)";
			statement = con.prepareStatement(sql);
			statement.setInt(1, commentID);
			statement.setInt(2, comment.getUser().getId());
			statement.executeUpdate();
			
			
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
		    try { result.close(); } catch (Exception e) { /* Ignored */ }
		    try { statement.close(); } catch (Exception e) { /* Ignored */ }
		    try { con.close(); } catch (Exception e) { /* Ignored */ }
		}
		
		return commentID;
	}
	
	public static String delComment(Comment comment) {
		Connection con = null;
		PreparedStatement statement = null;
		
		String sql = "DELETE FROM CommentAccount  WHERE commentID = ?";
		
		try {
			DBConnection dbCon = DBConnection.getDBConnection();
			con = dbCon.connectToDB();
			
			statement = con.prepareStatement(sql);
			statement.setInt(1, comment.getId());
			statement.executeUpdate();
			
			sql = "DELETE FROM CommentPost  WHERE commentID = ?";
			statement = con.prepareStatement(sql);
			statement.setInt(1, comment.getId());
			statement.executeUpdate();
			
			sql = "DELETE FROM Comment  WHERE commentID = ?";
			statement = con.prepareStatement(sql);
			statement.setInt(1, comment.getId());
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
	
	public static String editComment(Comment comment) {
		Connection con = null;
		PreparedStatement statement = null;
		
		String sql = "UPDATE Comment SET content = ?, time = ? WHERE commentID = ?";
		
		try {
			DBConnection dbCon = DBConnection.getDBConnection();
			con = dbCon.connectToDB();
			
			statement = con.prepareStatement(sql);
			statement.setString(1, comment.getContent());
			statement.setLong(2, comment.getTime());
			statement.setInt(3, comment.getId());
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
