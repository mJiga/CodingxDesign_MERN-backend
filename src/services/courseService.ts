import { Course } from "../interfaces/Course";
import CourseModel from "../models/courseModel";

const postCourse = async (course: Course) => {
  const responsePost = await CourseModel.create(course);
  return responsePost;
};

const getCourse = async (id: string) => {
  const responseGet = await CourseModel.findOne({ _id: id });
  return responseGet;
};

const getCourses = async () => {
  const responseGets = await CourseModel.find({});
  return responseGets;
};

export { postCourse, getCourse, getCourses };
