import axios from 'axios';

// Replace '8080' with your friend's backend port if different
const BASE_URL = "https://student-management-backend-production-e28a.up.railway.app";

export const getAllStudents = () => axios.get(BASE_URL);
export const createStudentAPI = (student) => axios.post(BASE_URL, student);
export const deleteStudentAPI = (id) => axios.delete(`${BASE_URL}/${id}`);
export const updateStudentAPI = (id, student) => axios.put(`${BASE_URL}/${id}`, student);
