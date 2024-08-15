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

/**
 * @route GET /api/courses
 * @description Retrieves a list of all courses.
 * @handler handleGetCourses
 * @returns {Array<Course>} An array of course objects.
 */
router.get("/", handleGetCourses);

/**
 * @route GET /api/courses/:courseName
 * @description Retrieves a specific course by its name.
 * @param {string} courseName - The name of the course to retrieve.
 * @handler handleGetCourse
 * @returns {Course} The course object matching the provided name.
 */
router.get("/:courseName", handleGetCourse);

/**
 * @route POST /api/courses
 * @description Creates a new course.
 * @body {Course} - The course object to create.
 * @handler handlePostCourse
 * @returns {Course} The created course object.
 */
router.post("/", handlePostCourse);

/**
 * @route PUT /api/courses/:courseName
 * @description Updates an existing course by its name.
 * @param {string} courseName - The name of the course to update.
 * @body {Partial<Course>} - The fields of the course to update.
 * @handler handleUpdateCourse
 * @returns {Course} The updated course object.
 */
router.put("/:courseName", handleUpdateCourse);

/**
 * @route DELETE /api/courses/:courseName
 * @description Deletes a specific course by its name.
 * @param {string} courseName - The name of the course to delete.
 * @handler handleDeleteCourse
 * @returns {string} A message indicating the result of the operation.
 */
router.delete("/:courseName", handleDeleteCourse);

export { router };
