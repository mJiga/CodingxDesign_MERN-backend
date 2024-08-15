import { Schema, Types, model, Model } from "mongoose";
import { Course } from "../interfaces/Course";

/**
 * CourseSchema
 *
 * Defines the schema for a course in the database. This schema specifies the structure and validation rules
 * for the course documents. Each course document will include the following fields:
 * - `courseName`: The name of the course (required, string).
 * - `classification`: The classification of the course (required, string).
 * - `meetingTime`: The time the course meets (required, string).
 * - `courseNumber`: The unique identifier for the course (required, string).
 *
 * @type {Schema<Course>}
 */
const CourseSchema = new Schema<Course>(
  {
    courseName: {
      type: String,
      required: true,
    },
    classification: {
      type: String,
      required: true,
    },
    meetingTime: {
      type: String,
      required: true,
    },
    courseNumber: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Automatically add `createdAt` and `updatedAt` timestamps
    versionKey: false, // Disable the version key (__v)
  }
);

/**
 * CourseModel
 *
 * A Mongoose model for interacting with the "Bookings" collection in MongoDB. This model uses the
 * `CourseSchema` to perform CRUD operations on course documents.
 *
 * @type {Model<Course>}
 */
const CourseModel = model<Course>("Bookings", CourseSchema);

export default CourseModel;
