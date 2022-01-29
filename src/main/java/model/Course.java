package model;

import java.util.List;

public class Course {
	private int id;
	private String title;
	private String description;
	private List<Section> sectionList;
	
	public Course() {
		
	}

	public Course(int id, String title, String description, List<Section> sectionList) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.sectionList = sectionList;
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

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public List<Section> getSectionList() {
		return sectionList;
	}

	public void setSectionList(List<Section> sectionList) {
		this.sectionList = sectionList;
	}
}
