package model;

import java.util.List;

public class Post {
	private int id;
	private String title;
	private String body;
	private int views;
	private long likes;
	private long dislikes;
	private long time;
	private User user;
	private List<Comment> commentList;

	public Post(int id, String title, String body, int views, long likes, long dislikes, long time, User user, List<Comment> commentList) {
		this.id = id;
		this.title = title;
		this.body = body;
		this.views = views;
		this.likes = likes;
		this.dislikes = dislikes;
		this.time = time;
		this.user = user;
		this.commentList = commentList;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public int getViews() {
		return views;
	}

	public void setViews(int views) {
		this.views = views;
	}

	public long getTime() {
		return time;
	}

	public void setTime(long time) {
		this.time = time;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public List<Comment> getCommentList() {
		return commentList;
	}

	public void setCommentList(List<Comment> commentList) {
		this.commentList = commentList;
	}

	public String getBody() {
		return body;
	}

	public void setBody(String body) {
		this.body = body;
	}

	public long getLikes() {
		return likes;
	}

	public void setLikes(long likes) {
		this.likes = likes;
	}

	public long getDislikes() {
		return dislikes;
	}

	public void setDislikes(long dislikes) {
		this.dislikes = dislikes;
	}
}
