package controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

import com.google.gson.Gson;

import dao.PostDAO;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import model.Post;

public class PostController extends HttpServlet {

	private static final long serialVersionUID = 1L;

	@Override
	protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
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
		String videoID = req.getParameter("videoID");
		PrintWriter printWriter = resp.getWriter();
		Gson gson = new Gson();
		Post post = gson.fromJson(req.getReader(), Post.class);
		int postID = PostDAO.addPost(Integer.valueOf(videoID), post);
		map.put("postID", postID);
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
		Post post = gson.fromJson(req.getReader(), Post.class);
		String status = PostDAO.updatePost(post);
		map.put("status", status);
		printWriter.println(gson.toJson(map));
		printWriter.close();
	}
}
