package controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

import com.google.gson.Gson;

import dao.NoteBookDAO;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import model.NoteBook;

public class NoteBookController extends HttpServlet {

	private static final long serialVersionUID = 1L;

	@Override
	protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("text/plain; charset=UTF-8");
		resp.addHeader("Access-Control-Allow-Origin", "*");
		Map<String, String> map = new HashMap<>();
		PrintWriter printWriter = resp.getWriter();
		Gson gson = new Gson();
		NoteBook notebook = gson.fromJson(req.getReader(), NoteBook.class);
		String status = NoteBookDAO.delNoteBook(notebook);
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
		int videoID = Integer.valueOf(req.getParameter("videoID"));
		int userID = Integer.valueOf(req.getParameter("userID"));
		PrintWriter printWriter = resp.getWriter();
		Gson gson = new Gson();
		NoteBook notebook = gson.fromJson(req.getReader(), NoteBook.class);
		int notebookID = NoteBookDAO.addNoteBook(videoID, userID, notebook);
		map.put("notebookID", notebookID);
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
		NoteBook notebook = gson.fromJson(req.getReader(), NoteBook.class);
		String status = NoteBookDAO.editNoteBook(notebook);
		map.put("status", status);
		printWriter.println(gson.toJson(map));
		printWriter.close();
	}
}
