// main CRUD operation API calls / just waits for API CALL BUT DOES NOT PERFORM BUSINESS LOGIC => SEE SERVICES FOLDER
import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handler";
import {
  postCourse,
  getCourse,
  getCourses,
  deleteCourse,
  updateCourse,
} from "../services/courseService";

const handlePostCourse = async ({ body }: Request, res: Response) => {
  try {
    const responseCourse = await postCourse(body);
    res.send(responseCourse);
  } catch (e) {
    handleHttp(res, "ERROR_POST_ITEM", e);
  }
};

const handleGetCourse = async ({ params }: Request, res: Response) => {
  try {
    const { courseName } = params;
    const responseCourse = await getCourse(courseName);
    res.send(responseCourse);
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEM", e);
  }
};

const handleGetCourses = async (req: Request, res: Response) => {
  try {
    const responseCourse = await getCourses();
    res.send(responseCourse);
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEMS", e);
  }
};

const handleUpdateCourse = async (req: Request, res: Response) => {
  try {
    const { courseName } = req.params;
    const newInformation = req.body;
    const responseCourse = await updateCourse(courseName, newInformation);
    res.send(responseCourse);
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_ITEM", e);
  }
};

const handleDeleteCourse = async ({ params }: Request, res: Response) => {
  try {
    const { courseName } = params;
    const responseCourse = await deleteCourse(courseName);
    res.send(responseCourse);
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_ITEM", e);
  }
};

export {
  handlePostCourse,
  handleDeleteCourse,
  handleGetCourse,
  handleGetCourses,
  handleUpdateCourse,
};
