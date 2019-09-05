import mongoose from 'mongoose';
import { studentSchema } from '../schemas/StudentSchema';

studentSchema.statics = {
  create: function(data, cb) {
    const student = new this(data);
    student.save(cb);
  },

  get: function(query, cb) {
    this.find(query, cb);
  },

  getByName: function(query, cb) {
    this.find(query, cb);
  },

  update: function(query, updateData, cb) {
    this.findOneAndUpdate(query, { $set: updateData }, { new: true }, cb);
  },

  delete: function(query, cb) {
    this.findOneAndDelete(query, cb);
  }
};

const Student = mongoose.model('Student', studentSchema);
export default Student;
