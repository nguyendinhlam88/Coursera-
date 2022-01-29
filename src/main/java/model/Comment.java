package model;

public class Comment {
	private int id;
	private String content;
	private long time;
	private User user;
		
	public Comment(int id, String content, long time, User user) {
		this.id = id;
		this.content = content;
		this.time = time;
		this.user = user;
	}

	public int getId() {
		return id;
	}
	
	public void setId(int id) {
		this.id = id;
	}
	
	public String getContent() {
		return content;
	}
	
	public void setContent(String content) {
		this.content = content;
	}
	
	public User getUser() {
		return user;
	}
	
	public void setUser(User user) {
		this.user = user;
	}

	public long getTime() {
		return time;
	}

	public void setTime(long time) {
		this.time = time;
	}
}
