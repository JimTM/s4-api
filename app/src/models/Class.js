import mongoose from 'mongoose';
import { classSchema } from '../schemas/ClassSchema';

classSchema.statics = {
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

  addStudent: function(query, cb) {
    const { _id, students } = query;
    this.findOneAndUpdate({ _id }, { students }, cb);
  }
};

const Class = mongoose.model('Class', classSchema);
export default Class;
