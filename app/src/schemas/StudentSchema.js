import mongoose from 'mongoose';
import ClassSchema from './ClassSchema';

const Schema = mongoose.Schema;
export const studentSchema = new Schema(
  {
    studentId: {
      type: String,
      unique: true,
      required: true
    },
    name: {
      type: String,
      unique: false,
      required: true
    },
    lastname: {
      type: String,
      unique: false,
      required: true
    },
    classes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'ClassSchema'
      }
    ]
  },
  {
    timestamps: true
  }
);
