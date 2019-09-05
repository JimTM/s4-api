import mongoose from 'mongoose';
import { studentSchema } from '../schemas/StudentSchema';

studentSchema.statics = {
  create: function(data, cb) {
    const student = new this(data);
    student.save(cb);
  },

  get: function(query, field, cb) {
    this.find(query, field, cb);
  },

  update: function(query, updateData, cb) {
    this.findOneAndUpdate(query, { $set: updateData }, { new: true }, cb);
  },

  delete: function(query, cb) {
    this.findOneAndDelete(query, cb);
  },

  addClass: function(query, cb) {
    const { _id, classes } = query;
    this.findOneAndUpdate({ _id }, { classes }, cb);
  }
};

const Student = mongoose.model('Student', studentSchema);
export default Student;
