import mongoose from 'mongoose';
import StudentSchema from './StudentSchema';

const Schema = mongoose.Schema;
export const classSchema = new Schema(
  {
    code: {
      type: String,
      unique: true,
      required: true
    },
    title: {
      type: String,
      unique: false,
      required: true
    },
    description: {
      type: String,
      unique: false,
      required: false
    },
    students: [
      {
        type: Schema.Types.ObjectId,
        ref: 'StudentSchema'
      }
    ]
  },
  {
    timestamps: true
  }
);
