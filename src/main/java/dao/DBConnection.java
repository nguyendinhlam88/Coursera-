package dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBConnection {
	private String dbDriver;
	private String dbURL;
	private String dbName;
	private String dbUsername;
	private String dbPassword;
	public static DBConnection dbCon;
	
	private DBConnection() {
		this.dbDriver = "com.mysql.cj.jdbc.Driver";
		this.dbURL = "jdbc:mysql://192.168.64.2/";
		this.dbName = "OnlineCourseWeb";
		this.dbUsername = "test123";
		this.dbPassword = "test123";
	}
	
	public Connection connectToDB() throws SQLException, ClassNotFoundException {
		Class.forName(this.dbDriver);
        Connection con = DriverManager.getConnection(dbURL + this.dbName, this.dbUsername, this.dbPassword);
        
        return con;
	}
	
	public static DBConnection getDBConnection() {
		if(dbCon == null) {
			dbCon = new DBConnection();
		}
		return dbCon;
	}
}
