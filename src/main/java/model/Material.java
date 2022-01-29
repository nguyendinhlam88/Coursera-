package model;

public class Material {
	private int id;
	private String fileName;
	private String path;
	
	public Material(int id, String fileName, String path) {
		this.id = id;
		this.fileName = fileName;
		this.path = path;
	}
	
	public int getId() {
		return id;
	}
	
	public void setId(int id) {
		this.id = id;
	}
	
	public String getPath() {
		return path;
	}
	
	public void setPath(String path) {
		this.path = path;
	}

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}
}
