// main CRUD operation API calls / just waits for API CALL BUT DOES NOT PERFORM BUSINESS LOGIC => SEE SERVICES FOLDER
import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handler";
import { postCourse, getCourse, getCourses } from "../services/courseService";

const handlePostCourse = async ({ body }: Request, res: Response) => {
  try {
    const responseBooking = await postCourse(body);
    res.send(responseBooking);
    postCourse;
  } catch (e) {
    handleHttp(res, "ERROR_POST_ITEM", e);
  }
};

const handleGetCourse = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const responseBooking = await getCourse(id);
    res.send(responseBooking);
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEM", e);
  }
};

const handleGetCourses = async (req: Request, res: Response) => {
  try {
    const responseBooking = await getCourses();
    res.send(responseBooking);
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEMS", e);
  }
};

const handleUpdateCourse = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_ITEM", e);
  }
};

const handleDeleteCourse = (req: Request, res: Response) => {
  try {
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
