import Student from '../models/Student';

export const createStudent = (request, response, next) => {
  const student = {
    studentId: request.body.studentId,
    name: request.body.name,
    lastname: request.body.lastname
  };

  Student.create(student, (error, student) => {
    if (error) {
      response.status(500).send({ error });
    } else {
      response.status(201).send({ student });
    }
  });
};

export const getStudents = (request, response, next) => {
  Student.get({}, (error, students) => {
    if (error) {
      response.status(500).send({ error });
    } else {
      response.status(200).send(students);
    }
  });
};

export const getStudent = (request, response, next) => {
  const studentId = request.params.studentId;
  Student.get({ _id: studentId }, (error, student) => {
    if (error) {
      response.status(500).send({ error });
    } else {
      response.json({
        student: student
      });
    }
  });
};

export const editStudent = (request, response, next) => {
  const studentId = request.params.studentId;
  const student = {
    name: request.body.name,
    lastname: request.body.lastname
  };

  Student.update({ _id: studentId }, student, (error, student) => {
    if (error) {
      response.status(500).send({ error });
    } else {
      response.status(200).send({ student });
    }
  });
};

export const deleteStudent = (request, response, next) => {
  const studentId = request.params.studentId;

  Student.deleteOne({ _id: studentId }, (error, student) => {
    if (error) {
      response.status(500).send({ error });
    } else {
      response.status(204);
    }
  });
};

export const getStudentClasses = (request, response, next) => {
  const studentId = request.params.studentId;
  const classes = Student.getClasses(studentId);
  response.status(200).send(classes);
};
