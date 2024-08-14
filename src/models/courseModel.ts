// db doc/schema
import { Schema, Types, model, Model } from "mongoose";
import { Course } from "../interfaces/Course";

const CourseSchema = new Schema<Course>(
  {
    className: {
      type: String,
      required: true,
    },
    classification: {
      type: Number,
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
    timestamps: true,
    versionKey: false,
  }
);

const CourseModel = model<Course>("Bookings", CourseSchema);

export default CourseModel;
