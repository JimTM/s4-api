export default router => {
  router.get('/classes', getClasses);
  router.get('/classes/:studentId', getClass);
  router.post('/classes', createClass);
  router.put('/classes/:studentId', editClass);
  router.delete('/classes/:studentId', deleteClass);
  router.get('/classes/:studentId/classes', getClassStudents);
};
