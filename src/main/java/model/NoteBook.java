package model;

public class NoteBook {
	private int id;
	private String content;
	private String duration;
	
	public NoteBook(int id, String content, String duration) {
		this.id = id;
		this.content = content;
		this.duration = duration;
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

	public String getDuration() {
		return duration;
	}

	public void setDuration(String duration) {
		this.duration = duration;
	}
}
