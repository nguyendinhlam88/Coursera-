package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import model.NoteBook;

public class NoteBookDAO {

	public static List<NoteBook> getNoteBookList(int accountID, int videoID) {
		Connection con = null;
		PreparedStatement statement = null;
		ResultSet result = null;
		List<NoteBook> noteBookList = new ArrayList<>();
		
		String sql = "SELECT NB.* FROM NoteBook as NB, NoteBookSupply as NBS WHERE  NBS.accountID = ? AND NBS.videoID = ? AND NB.notebookID = NBS.notebookID";
		
		try {
			DBConnection dbCon = DBConnection.getDBConnection();
			con = dbCon.connectToDB();
			
			statement = con.prepareStatement(sql);
			statement.setInt(1, accountID);
			statement.setInt(2, videoID);
			result = statement.executeQuery();
			
			while(result.next()) {
				int id = result.getInt("notebookID");
				String content = result.getString("content");
				String duration = result.getString("duration");
				NoteBook noteBook = new NoteBook(id, content, duration);
				noteBookList.add(noteBook);
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
		
		return noteBookList;
	}
	
	public static int addNoteBook(int videoID, int userID, NoteBook notebook) {
		Connection con = null;
		PreparedStatement statement = null;
		ResultSet result = null;
		int notebookID = 0;
		
		
		String sql = "INSERT INTO `NoteBook`(`content`, `duration`) VALUES (?, ?)";
		
		try {
			DBConnection dbCon = DBConnection.getDBConnection();
			con = dbCon.connectToDB();
			
			statement = con.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
			statement.setString(1, notebook.getContent());
			statement.setString(2, notebook.getDuration());
			statement.executeUpdate();
			
			result = statement.getGeneratedKeys();
			if (result.next()) {
				notebookID = result.getInt(1);
			}
			
			// Cập nhật VIDEO-POST.
			sql = "INSERT INTO `NoteBookSupply`(`notebookID`, `accountID`, `videoID`) VALUES (?, ?, ?)";
			statement = con.prepareStatement(sql);
			statement.setInt(1, notebookID);
			statement.setInt(2, userID);
			statement.setInt(3, videoID);
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
		
		return notebookID;
	}
	
	public static String editNoteBook(NoteBook notebook) {
		Connection con = null;
		PreparedStatement statement = null;
		ResultSet result = null;
		
		String sql = "UPDATE NoteBook SET content = ?, duration = ? WHERE notebookID = ?";
		
		try {
			DBConnection dbCon = DBConnection.getDBConnection();
			con = dbCon.connectToDB();
			
			statement = con.prepareStatement(sql);
			
			statement.setString(1, notebook.getContent());
			statement.setString(2, notebook.getDuration());
			statement.setInt(3, notebook.getId());
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
	
	public static String delNoteBook(NoteBook notebook) {
		Connection con = null;
		PreparedStatement statement = null;
		ResultSet result = null;
		
		String sql = "DELETE FROM NoteBookSupply  WHERE notebookID = ?";
		
		try {
			DBConnection dbCon = DBConnection.getDBConnection();
			con = dbCon.connectToDB();
			
			statement = con.prepareStatement(sql);
			statement.setInt(1, notebook.getId());
			statement.executeUpdate();
			
			sql = "DELETE FROM NoteBook  WHERE notebookID = ?";
			statement = con.prepareStatement(sql);
			statement.setInt(1, notebook.getId());
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
