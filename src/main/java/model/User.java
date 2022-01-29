package model;

import java.util.List;

public class User {
	private int id;
	private String username;
	private String password;
	private String avatar;
	private List<Course> courseList;
	private List<Oder> oderList;
	
	public User(int id, String username, String password, String avatar) {
		this.id = id;
		this.username = username;
		this.password = password;
		this.avatar = avatar;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getAvatar() {
		return avatar;
	}

	public void setAvatar(String avatar) {
		this.avatar = avatar;
	}

	public List<Course> getCourseList() {
		return courseList;
	}

	public void setCourseList(List<Course> courseList) {
		this.courseList = courseList;
	}

	public List<Oder> getOderList() {
		return oderList;
	}

	public void setOderList(List<Oder> oderList) {
		this.oderList = oderList;
	}
}
