package dao;

import java.util.List;

import model.Section;

public class CourseDAO {
	
	public static List<Section> getResources(int courseID, int userID) {
		return SectionDAO.getSectionList(courseID, userID);
	}
}
