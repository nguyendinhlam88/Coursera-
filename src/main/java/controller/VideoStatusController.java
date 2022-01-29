package controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;
import com.google.gson.Gson;
import dao.VideoDAO;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class VideoStatusController extends HttpServlet {
	@Override
	protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("text/plain; charset=UTF-8");
		resp.addHeader("Access-Control-Allow-Origin", "*");
		Map<String, String> map = new HashMap<>();
		int videoID = Integer.valueOf(req.getParameter("videoID"));
		int userID = Integer.valueOf(req.getParameter("userID"));
		int status = Integer.valueOf(req.getParameter("status"));
		PrintWriter printWriter = resp.getWriter();
		Gson gson = new Gson();
		String status1 = VideoDAO.updateVideoStatus(videoID, userID, status);
		map.put("status", status1);
		printWriter.println(gson.toJson(map));
		printWriter.close();
	}
}
