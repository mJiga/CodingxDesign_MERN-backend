import { Course } from "../interfaces/Course";
import CourseModel from "../models/courseModel";

const postCourse = async (course: Course) => {
  const responsePost = await CourseModel.create(course);
  return responsePost;
};

const getCourse = async (courseName: string) => {
  const responseGet = await CourseModel.findOne({ courseName });
  return responseGet;
};

const getCourses = async () => {
  const responseGets = await CourseModel.find({});
  return responseGets;
};

const updateCourse = async (
  courseName: string,
  newInformation: Partial<Course>
) => {
  const responseUpdate = await CourseModel.findOneAndUpdate(
    { courseName: courseName },
    newInformation,
    { new: true }
  );
  return responseUpdate;
};

const deleteCourse = async (courseName: string) => {
  const responseDelete = await CourseModel.deleteOne({ courseName });
  return responseDelete;
};

export { postCourse, getCourse, getCourses, updateCourse, deleteCourse };
