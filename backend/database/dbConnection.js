import mongoose from "mongoose";
export const dbConnection = async () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      dbName: "FullStackProject",
    })
    .then(() => {
      console.log("Connected to the database");
    })
    .catch((err) => {
      console.log("Something went wrong", err);
    });
};
