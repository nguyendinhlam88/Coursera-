package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import model.Comment;
import model.Post;
import model.User;

public class PostDAO {
	
	public static List<Post> getPostList(int videoID) {
		Connection con = null;
		ResultSet result = null;
		PreparedStatement statement = null;
		
		List<Post> postList = new ArrayList<>();
		
		String sql = "SELECT P.* FROM Post as P, VideoPost as VP WHERE  VP.videoID = ? AND P.postID = VP.postID";
		
		try {
			DBConnection dbCon = DBConnection.getDBConnection();
			con = dbCon.connectToDB();
			
			statement = con.prepareStatement(sql);
			statement.setInt(1, videoID);
			result = statement.executeQuery();
			
			while(result.next()) {
				int id = result.getInt("postID");
				String title = result.getString("title");
				String body = result.getString("body");
				int views = result.getInt("views");
				long likes = result.getLong("likes");
				long dislikes = result.getLong("dislikes");
				long time = result.getLong("time");
				User user = UserDAO.getPostUser(id);
				List<Comment> commentList = CommentDAO.getCommentList(id); 
				Post post = new Post(id, title, body, views, likes, dislikes, time, user, commentList);
				postList.add(post);
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
		
		return postList;
	}
	
	public static int addPost(int videoID, Post post) {
		Connection con = null;
		PreparedStatement statement = null;
		ResultSet result = null;
		int postID = 0;
		
		
		String sql = "INSERT INTO `Post`(`title`, `views`, `time`, `body`, `likes`, `dislikes`) VALUES (?, ?, ?, ?, ?, ?)";
		
		try {
			DBConnection dbCon = DBConnection.getDBConnection();
			con = dbCon.connectToDB();
			
			statement = con.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
			statement.setString(1, post.getTitle());
			statement.setInt(2, post.getViews());
			statement.setLong(3, post.getTime());
			statement.setString(4, post.getBody());
			statement.setLong(5, post.getLikes());
			statement.setLong(6, post.getDislikes());
			statement.executeUpdate();
			
			result = statement.getGeneratedKeys();
			if (result.next()) {
				postID = result.getInt(1);
			}
			
			// Cập nhật VIDEO-POST.
			sql = "INSERT INTO `VideoPost`(`videoID`, `postID`) VALUES (?, ?)";
			statement = con.prepareStatement(sql);
			statement.setInt(1, videoID);
			statement.setInt(2, postID);
			statement.executeUpdate();
			
			sql = "INSERT INTO `PostAccount`(`postID`, `accountID`) VALUES (?, ?)";
			statement = con.prepareStatement(sql);
			statement.setInt(1, postID);
			statement.setInt(2, post.getUser().getId());
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
		
		return postID;
	}

	public static String updatePost(Post post) {
		Connection con = null;
		PreparedStatement statement = null;
		
		String sql = "UPDATE Post SET views = ?, likes = ?, dislikes = ? WHERE postID = ?";
		
		try {
			DBConnection dbCon = DBConnection.getDBConnection();
			con = dbCon.connectToDB();
			
			statement = con.prepareStatement(sql);
			statement.setInt(1, post.getViews());
			statement.setLong(2, post.getLikes());
			statement.setLong(3, post.getDislikes());
			statement.setInt(4, post.getId());
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
