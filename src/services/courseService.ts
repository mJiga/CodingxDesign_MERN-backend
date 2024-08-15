import { Course } from "../interfaces/Course";
import CourseModel from "../models/courseModel";

/**
 * Creates a new course in the database.
 *
 * @param {Course} course - The course object to be created.
 * @returns {Promise<Course>} - The created course object.
 */
const postCourse = async (course: Course): Promise<Course> => {
  const responsePost = await CourseModel.create(course);
  return responsePost;
};

/**
 * Retrieves a course from the database by its name.
 *
 * @param {string} courseName - The name of the course to retrieve.
 * @returns {Promise<Course | null>} - The course object if found, otherwise null.
 */
const getCourse = async (courseName: string): Promise<Course | null> => {
  const responseGet = await CourseModel.findOne({ courseName });
  return responseGet;
};

/**
 * Retrieves all courses from the database.
 *
 * @returns {Promise<Course[]>} - An array of all course objects.
 */
const getCourses = async (): Promise<Course[]> => {
  const responseGets = await CourseModel.find({});
  return responseGets;
};

/**
 * Updates a course in the database with new information.
 *
 * @param {string} courseName - The name of the course to update.
 * @param {Partial<Course>} newInformation - The new information to update the course with.
 * @returns {Promise<Course | null>} - The updated course object if found and updated, otherwise null.
 */
const updateCourse = async (
  courseName: string,
  newInformation: Partial<Course>
): Promise<Course | null> => {
  const responseUpdate = await CourseModel.findOneAndUpdate(
    { courseName: courseName },
    newInformation,
    { new: true }
  );
  return responseUpdate;
};

/**
 * Deletes a course from the database by its name.
 *
 * @param {string} courseName - The name of the course to delete.
 * @returns {Promise<{ deletedCount: number }>} - The result object with the number of deleted documents.
 */
const deleteCourse = async (
  courseName: string
): Promise<{ deletedCount: number }> => {
  const responseDelete = await CourseModel.deleteOne({ courseName });
  return responseDelete;
};

export { postCourse, getCourse, getCourses, updateCourse, deleteCourse };
