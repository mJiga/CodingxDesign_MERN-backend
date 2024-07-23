import { Booking } from "../interfaces/bookingsInterface";
import BookingModel from "../models/bookingModel";

const postBooking = async (booking: Booking) => {
    const responsePost = await BookingModel.create(booking);
    return responsePost;
};

const getBooking = async (id: string) => {
    const responseGet = await BookingModel.findOne({_id: id});
    return responseGet;
}

const getBookings = async () => {
    const responseGets = await BookingModel.find({});
    return responseGets;
}

export { postBooking, getBooking, getBookings };