import mongoose from "mongoose";
import { Color } from "colors";

const config = {
  isConnected: 0,
};

export const connectDB = async () => {
  console.log("Click");
  try {
    if (config.isConnected) {
      return;
    }
    const dbConnection = await mongoose.connect(process.env.MONGO_URI, {
      dbName: "data_table",
    });

    dbConnection.connection.on("connected", () => {
      console.log(`MongoDB connected on ${dbConnection.connection.host}`.green);
    });

    // Event listener for connection error
    dbConnection.connection.on("error", (err) => {
      console.error(`MongoDB connection error: ${err}`.red);
    });

    // Event listener for disconnected
    dbConnection.connection.on("disconnected", () => {
      console.log("MongoDB disconnected".yellow);
    });
  } catch (error) {
    console.log(`Error connecting to MongoDB: ${error.message}`);
  }
};

