import mongoose from "mongoose"


export const connectWithDB = async () => {
    const conn = await mongoose.connect(`${process.env.MONGODB_URI}`);

    if(!conn) throw Error("Mongodb Connection Error");

    console.log(`DB Connected Successfully ⚙️ ⚙️ ⚙️`);

    console.log(`DB Name - ${conn.connection.host}`);
}

export default connectWithDB;