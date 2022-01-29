package model;

import java.util.List;

public class Video {
	private int id;
	private String title;
	private String path;
	private String description;
	private String duration;
	private int status;
	private List<Post> postList;
	private List<Material> materialList;
	private List<NoteBook> noteBookList;
	
	public Video() {
		
	}
	
	public Video(int id, String title, String path, String description, String duration, List<Post> postList, List<Material> materialList, List<NoteBook> noteBookList, int status) {
		this.id = id;
		this.title = title;
		this.path = path;
		this.description = description;
		this.duration = duration;
		this.postList = postList;
		this.materialList = materialList;
		this.noteBookList = noteBookList;
		this.status = status;
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

	public String getPath() {
		return path;
	}

	public void setPath(String path) {
		this.path = path;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getDuration() {
		return duration;
	}

	public void setDuration(String duration) {
		this.duration = duration;
	}

	public List<Post> getPostList() {
		return postList;
	}

	public void setPostList(List<Post> postList) {
		this.postList = postList;
	}

	public List<NoteBook> getNoteBookList() {
		return noteBookList;
	}

	public void setNoteBook(List<NoteBook> noteBookList) {
		this.noteBookList = noteBookList;
	}

	public List<Material> getMaterialList() {
		return materialList;
	}

	public void setMaterialList(List<Material> materialList) {
		this.materialList = materialList;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}
}
