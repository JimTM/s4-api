import {
  addEstudent,
  createClass,
  deleteClass,
  editClass,
  getClass,
  getClasses,
  getClassStudents
} from '../controllers/ClassController';

export default router => {
  router.get('/classes', getClasses);
  router.get('/classes/:classId', getClass);
  router.post('/classes', createClass);
  router.put('/classes/:classId', editClass);
  router.delete('/classes/:classId', deleteClass);
  router.get('/classes/:classId/students', getClassStudents);
  router.put('/classes/:classId/students', addEstudent);
};
