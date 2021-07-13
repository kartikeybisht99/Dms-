import mongoose from "mongoose";
const fileSchema = new mongoose.Schema({
    createdAt: {
      type: Date,
      default: Date.now,
    },
    name: {
      type: String,
      required: [true, "Uploaded file must have a name"],
    },
  });
  
  // Creating a Model from that Schema
  export default mongoose.model("File", fileSchema);
  
  // Exporting the Model to use it in app.js File.
  