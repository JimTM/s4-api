import Class from '../models/Class';

export const createClass = (request, response, next) => {
  const aClass = { ...request.body };

  Class.create(aClass, (error, aClass) => {
    if (error) {
      response.status(500).send({ error });
    } else {
      response.status(201).send({ aClass });
    }
  });
};

export const getClasses = (request, response, next) => {
  const query = { ...request.query };
  Class.get(query, (error, classes) => {
    if (error) {
      response.status(500).send({ error });
    } else {
      response.status(200).send({ classes });
    }
  });
};

export const getClass = (request, response, next) => {
  const classId = request.params.classId;
  Class.get({ _id: classId }, (error, aClass) => {
    if (error) {
      response.status(500).send({ error });
    } else {
      response.status(200).send({ aClass });
    }
  });
};

export const editClass = (request, response, next) => {
  const classId = request.params.classId;
  const aClass = {
    code: request.body.code,
    title: request.body.title,
    description: request.body.description
  };

  Class.update({ _id: classId }, aClass, (error, aClass) => {
    if (error) {
      response.status(500).send({ error });
    } else {
      response.status(200).send({ aClass });
    }
  });
};

export const deleteClass = (request, response, next) => {
  const classId = request.params.classId;

  Class.deleteOne({ _id: classId }, (error, aClass) => {
    if (error) {
      response.status(500).send({ error });
    } else {
      response.status(204);
    }
  });
};

export const getClassStudents = (request, response, next) => {
  const { classId } = request.params;
  Class.get({ _id: classId }, 'students', (error, students) => {
    if (error) {
      response.status(500).send({ error });
    } else {
      response.status(200).send({ students });
    }
  });
};

export const addEstudent = (request, response, next) => {
  const { classId } = request.params;
  const { student } = request.body;
  let students = [];
  Class.get({ _id: classId }, 'students', (error, aClass) => {
    if (!error) {
      students = aClass[0].students;
    }
  });
  students.push(student);
  Class.addStudent({ _id: classId, students }, (error, aClass) => {
    if (error) {
      response.status(500).send({ error });
    } else {
      response.status(201).send(aClass);
    }
  });
};
