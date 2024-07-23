import 'dotenv/config';
import mongoose, { mongo } from 'mongoose';

// mongoose db connection -> async-await
const mongoConnection = async (): Promise<void> =>  {
    const connectionConst = process.env.mongooseDBConnection as string;
    await mongoose.connect(connectionConst);
}

export default mongoConnection;