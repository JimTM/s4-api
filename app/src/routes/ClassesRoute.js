export default router => {
  router.get('/classes', getClasses);
  router.get('/classes/:classId', getClass);
  router.post('/classes', createClass);
  router.put('/classes/:classId', editClass);
  router.delete('/classes/:classId', deleteClass);
  router.get('/classes/:classId/classes', getClassStudents);
};
