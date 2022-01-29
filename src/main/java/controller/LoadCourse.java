package controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import com.google.gson.Gson;

import dao.CourseDAO;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import model.Section;

public class LoadCourse extends HttpServlet {

	private static final long serialVersionUID = 1L;

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("application/json");
		resp.addHeader("Access-Control-Allow-Origin", "*");
		PrintWriter printWriter = resp.getWriter();
		
		int userID = Integer.parseInt(req.getParameter("userID"));
		int courseID = Integer.parseInt(req.getParameter("courseID"));
				
		try {
			List<Section> sectionList = CourseDAO.getResources(userID, courseID);
			Gson gson = new Gson();
			printWriter.println(gson.toJson(sectionList));
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		printWriter.close();
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		super.doPost(req, resp);
	}
}
