import api from "../base";

// Create Student
export const createStudent = (data) =>{
 const response =  api.post("/students/post", data);

 return response
}
// Get All Students
export const getAllStudents = () =>
  api.get("/students/get");

// Get Student By ID
export const getStudentById = (id) =>
  api.get(`/students/get/${id}`);

// Delete Student
export const deleteStudent = (id) =>
  api.delete(`/students/delete/${id}`);
