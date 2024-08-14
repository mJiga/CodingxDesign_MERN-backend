import { Router } from "express";
import { Request, Response } from "express";
import {
  handlePostCourse,
  handleDeleteCourse,
  handleGetCourse,
  handleGetCourses,
  handleUpdateCourse,
} from "../controllers/courseController";

const router = Router();

router.get("/", handleGetCourses);
router.get("/:courseName", handleGetCourse);
router.post("/", handlePostCourse);
router.put("/:courseName", handleUpdateCourse);
router.delete("/:courseName", handleDeleteCourse);

export { router };
