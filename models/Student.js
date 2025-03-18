import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema(
  {
    student_id: String,
    name: String,
    email: String,
    quiz_scores: [
      {
        topic: String,
        score: Number,
        date: String,
      },
    ],
    assignments: [
      {
        title: String,
        submitted_on: String,
        score: Number,
      },
    ],
    learning_time: {
      DSA: Number,
      Math: Number,
    },
    common_mistakes: [String],
    interaction_logs: [
      {
        question: String,
        timestamp: String,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.Student || mongoose.model("Student", StudentSchema);
