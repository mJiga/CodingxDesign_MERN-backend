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
router.get("/:id", handleGetCourse);
router.post("/", handlePostCourse);
router.put("/:id", handleUpdateCourse);
router.delete("/:id", handleDeleteCourse);

export { router };
