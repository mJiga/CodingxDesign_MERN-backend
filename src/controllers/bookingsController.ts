// main CRUD operation API calls / just waits for API CALL BUT DOES NOT PERFORM BUSINESS LOGIC => SEE SERVICES FOLDER
import { Request, Response } from 'express';
import { handleHttp } from '../utils/error.handler';
import { postBooking, getBooking, getBookings } from '../services/bookingService';

const handlePostBooking = async ({ body }: Request, res: Response) => {
    try {
        const responseBooking = await postBooking(body);
        res.send(responseBooking);
    } catch (e) {
        handleHttp(res, 'ERROR_POST_ITEM', e);
    }
}

const handleGetBooking = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const responseBooking = await getBooking(id);
        res.send(responseBooking);
    } catch (e) {
        handleHttp(res, 'ERROR_GET_ITEM', e);
    }
}

const handleGetBookings = async (req: Request, res: Response) => {
    try {
        const responseBooking = await getBookings();
        res.send(responseBooking);
    } catch (e) {
        handleHttp(res, 'ERROR_GET_ITEMS', e);
    }
}

const handleUpdateBooking = (req: Request, res: Response) => {
    try {
        
    } catch (e) {
        handleHttp(res, 'ERROR_UPDATE_ITEM', e);
    }
}


const handleDeleteBooking = (req: Request, res: Response) => {
    try {
        
    } catch (e) {
        handleHttp(res, 'ERROR_DELETE_ITEM', e);
    }
}

export { handlePostBooking, handleDeleteBooking, handleGetBooking, handleGetBookings, handleUpdateBooking };