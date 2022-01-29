package controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

import com.google.gson.Gson;

import dao.CommentDAO;
import dao.PostDAO;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import model.Comment;
import model.Post;

public class CommentController extends HttpServlet {

	private static final long serialVersionUID = 1L;

	@Override
	protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("text/plain; charset=UTF-8");
		resp.addHeader("Access-Control-Allow-Origin", "*");
		Map<String, String> map = new HashMap<>();
		PrintWriter printWriter = resp.getWriter();
		Gson gson = new Gson();
		Comment comment = gson.fromJson(req.getReader(), Comment.class);
		String status = CommentDAO.delComment(comment);
		map.put("status", status);
		printWriter.println(gson.toJson(map));
		printWriter.close();
	}

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		doPost(req, resp);
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("text/plain; charset=UTF-8");
		resp.addHeader("Access-Control-Allow-Origin", "*");
		Map<String,Integer> map = new HashMap<>();
		String postID = req.getParameter("postID");
		PrintWriter printWriter = resp.getWriter();
		Gson gson = new Gson();
		Comment comment = gson.fromJson(req.getReader(), Comment.class);
		int commentID = CommentDAO.addComment(Integer.valueOf(postID), comment);
		map.put("commentID", commentID);
		printWriter.println(gson.toJson(map));
		printWriter.close();
	}

	@Override
	protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("text/plain; charset=UTF-8");
		resp.addHeader("Access-Control-Allow-Origin", "*");
		Map<String, String> map = new HashMap<>();
		PrintWriter printWriter = resp.getWriter();
		Gson gson = new Gson();
		Comment comment = gson.fromJson(req.getReader(), Comment.class);
		String status = CommentDAO.editComment(comment);
		map.put("status", status);
		printWriter.println(gson.toJson(map));
		printWriter.close();
	}
}
