// db doc/schema
import { Schema, Types, model, Model } from "mongoose";
import { Course } from "../interfaces/bookingsInterface";

const BookingSchema = new Schema<Course>(
  {
    courseId: {
      type: String,
      required: true,
    },
    courseName: {
      type: String,
      required: true,
    },
    classification: {
      type: Number,
      required: true,
    },
    semester: {
      type: Number,
      required: true,
    },
    optative: {
      type: Boolean,
      required: true,
    },
    meetingTime: {
      type: String,
      required: true,
    },
    courseCode: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const BookingModel = model("Bookings", BookingSchema);

export default BookingModel;
