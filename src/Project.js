import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const API_URL = "https://student-management-backend-production-e28a.up.railway.app/api/students";
function Project() {
  
  const [students, setStudents] = useState([]); // Start with an empty list!

  // This runs once when the page loads
  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(API_URL);
      setStudents(response.data); // This fills your table with DB data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const [student, setStudent] = useState({
  firstName: "",
  lastName: "",
  email: "",
  course: "",
  phone: "",
  address: ""
});
  const saveStudent = async () => {
  try {
    if (editId) {
      // UPDATE: Send data to backend
      await axios.put(`${API_URL}/${editId}`, student);
    } else {
      // CREATE: Send data to backend
      await axios.post(API_URL, student);
    }
    fetchStudents(); // Refresh the list from the DB
    setEditId(null);
    setStudent({ firstName: "", lastName: "", email: "", course: "", phone: "", address: "" });
  } catch (error) {
    alert("Error saving student. Check if backend is running!");
  }
};


  const deleteStudent = async (id) => {
  if (window.confirm(`Are you sure you want to delete student with ID: ${id}?`)) {
    try {
      // 1. Send the delete request to the Backend
      await axios.delete(`${API_URL}/${id}`);
      
      // 2. Refresh the table from the Database
      fetchStudents(); 
      alert("Student deleted successfully!");
    } catch (error) {
      console.error("Delete Error:", error);
      alert("Could not delete. Make sure the backend is running and CORS is enabled.");
    }
  }
};


  const [editId, setEditId] = useState(null);

  const editStudent = (studentObj) => {
  // Filling the form with the object received from the Database
  setStudent({
    firstName: studentObj.firstName,
    lastName: studentObj.lastName,
    email: studentObj.email,
    course: studentObj.course,
    phone: studentObj.phone,
    address: studentObj.address
  });
  setEditId(studentObj.id); // Storing the database ID to use in the PUT request
};


  const [isTableVisible, setIsTableVisible] = useState(false); 
  return (
    <>
      <div className="project-container">
        <h1>Student Database</h1>
      {/* <h2>Table : {2+2}</h2> */}
      {/* <button onClick={() => setIsTableVisible(!isTableVisible)}>{isTableVisible ? "Hide" : "Show"}</button> */}
        
        <hr/>
        <table>
          <thead>
            <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Action</th>
            </tr>
          </thead>
          <tbody>
            
            {students.map((student) => (
              <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.email}</td>
              <td>{student.course}</td>
              <td>{student.phone}</td>
              <td>{student.address}</td>
              <td><button onClick={() => editStudent(student)}>Update</button></td>
              <td><button onClick={() => deleteStudent(student.id)}>Delete</button></td>
            </tr>
            ) )}
          </tbody>
        </table>
        <hr/>
        <br/>
        
        <div>
          <input type="text" placeholder="First Name" value={student.firstName} onChange={(e) => setStudent({...student, firstName: e.target.value})}/>
          <input type="text" placeholder="Last Name" value={student.lastName} onChange={(e) => setStudent({...student, lastName: e.target.value})}/>
          <input type="text" placeholder="Email" value={student.email} onChange={(e) => setStudent({...student, email: e.target.value})}/>
          <input type="text" placeholder="Course" value={student.course} onChange={(e) => setStudent({...student, course: e.target.value})}/>
          <input type="number" placeholder="Phone" value={student.phone} onChange={(e) => setStudent({...student, phone: e.target.value})}/>
          <input type="text" placeholder="First Address" value={student.address} onChange={(e) => setStudent({...student, address: e.target.value})}/>
          
        </div>
        <button onClick={saveStudent}>{editId ? "Save" : "Add"}</button>
        </div>
    </>
  );
}

export default Project;