package model;

public class Notification {
	private int id;
	private int content;
	private int user;
	
	public Notification(int id, int content, int user) {
		this.id = id;
		this.content = content;
		this.user = user;
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getContent() {
		return content;
	}
	public void setContent(int content) {
		this.content = content;
	}
	public int getUser() {
		return user;
	}
	public void setUser(int user) {
		this.user = user;
	}
}
