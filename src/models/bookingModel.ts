// db doc/schema
import { Schema, Types, model, Model } from "mongoose";
import { Booking } from "../interfaces/bookingsInterface";

const BookingSchema = new Schema<Booking>(
    {
        name: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const BookingModel = model('Bookings', BookingSchema);

export default BookingModel;