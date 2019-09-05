import Student from '../models/Student';

export const createStudent = (request, response, next) => {
  const student = { ...request.body };

  Student.create(student, (error, student) => {
    if (error) {
      response.status(500).send({ error });
    } else {
      response.status(201).send({ student });
    }
  });
};

export const getStudents = (request, response, next) => {
  const query = { ...request.query };
  Student.get(query, (error, students) => {
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
  const { studentId } = request.params;
  Class.get({ _id: studentId }, 'classes', (error, classes) => {
    if (error) {
      response.status(500).send({ error });
    } else {
      response.status(200).send({ classes });
    }
  });
};

export const addClass = (request, response, next) => {
  const { studentId } = request.params;
  const { aClass } = request.body;
  let classes = [];
  Class.get({ _id: classId }, 'students', (error, student) => {
    if (!error) {
      classes = student[0].classes;
    }
  });
  classes.push(aClass);
  Student.addClass({ _id: studentId, students }, (error, student) => {
    if (error) {
      response.status(500).send({ error });
    } else {
      response.status(201).send(student);
    }
  });
};
