package controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import dao.CourseDAO;
import dao.UserDAO;
import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import model.Section;
import model.User;

public class Learn extends HttpServlet {

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("text/html; charset=UTF-8");
		
		// Khi load trang web xem video thì sẽ gửi userID và courseID.
		// Gửi trang learn cho user kèm theo userID, courseID trong thẻ input hidden.
		PrintWriter printWriter = resp.getWriter();
			
//		int userID = Integer.parseInt(req.getParameter("userID"));
//		int courseID = Integer.parseInt(req.getParameter("courseID"));
		
		try {
			User user = UserDAO.getUser(1); // Chỉnh sửa ở đây -- đang test.
			req.getSession().setAttribute("user", user);
			req.getSession().setAttribute("courseID", 1); // Chỉnh sửa ở đây -- đang test.
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		RequestDispatcher view = req.getRequestDispatcher("views/user/learn/learn.jsp");
		view.forward(req, resp);
		
		printWriter.close();
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		super.doPost(req, resp);
	}
}
