import {
  createStudent,
  deleteStudent,
  editStudent,
  getStudent,
  getStudents,
  getStudentClasses
} from '../controllers/StudentController';

export default router => {
  router.get('/students', getStudents);
  router.get('/students/:studentId', getStudent);
  router.post('/students/', createStudent);
  router.put('/students/:studentId', editStudent);
  router.delete('/students/:studentId', deleteStudent);
  router.get('/students/:studentId/classes', getStudentClasses);
};
