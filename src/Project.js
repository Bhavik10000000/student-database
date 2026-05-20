import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = "https://student-management-backend-production-e28a.up.railway.app/api/students";

function Project() {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filterCourse, setFilterCourse] = useState("");
  const [editId, setEditId] = useState(null);

  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    course: "",
    phone: "",
    address: ""
  });

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(API_URL);
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const saveStudent = async () => {
    try {
      if (editId) {
        await axios.put(`${API_URL}/${editId}`, student);
        alert(`ID: ${editId} updated successfully.`);
      } else {
        await axios.post(API_URL, student);
        alert("Student added successfully.");
      }

      fetchStudents();
      setEditId(null);

      setStudent({
        firstName: "",
        lastName: "",
        email: "",
        course: "",
        phone: "",
        address: ""
      });

    } catch (error) {
      alert("Error saving student.");
    }
  };

  const deleteStudent = async (id) => {
    if (window.confirm(`Are you sure you want to delete student with ID: ${id}?`)) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        fetchStudents();
        alert(`ID: ${id} deleted successfully.`);
      } catch (error) {
        console.error("Delete Error:", error);
        alert("Could not delete.");
      }
    }
  };

  const editStudent = (studentObj) => {
    setStudent({
      firstName: studentObj.firstName,
      lastName: studentObj.lastName,
      email: studentObj.email,
      course: studentObj.course,
      phone: studentObj.phone,
      address: studentObj.address
    });

    setEditId(studentObj.id);
  };

  return (
    <>
      <div className='project-page'>

        <div className='project-cont'>

          <h1>Student Database Table</h1>

          <div className='top-bar'>

<div className='filter-box' style={{ position: 'relative' }}>              <button className='search-btn-icon'>☰</button>
              <button
                className='search-btn'
                onClick={() => setShowDropdown(!showDropdown)}
              >
                Filter ▾
              </button>

              {showDropdown && (
                <div className='drop-sty'>
                  <button
                    className='dropStyle'
                    onClick={() => {
                      setFilterCourse("");
                      setShowDropdown(false);
                    }}
                  >
                    All
                  </button>

                  <button
                    className='dropStyle'
                    onClick={() => {
                      setFilterCourse("ReactJS");
                      setShowDropdown(false);
                    }}
                  >
                    ReactJS
                  </button>

                  <button
                    className='dropStyle'
                    onClick={() => {
                      setFilterCourse("SpringBoot");
                      setShowDropdown(false);
                    }}
                  >
                    SpringBoot
                  </button>

                  <button
                    className='dropStyle'
                    onClick={() => {
                      setFilterCourse("PowerBI");
                      setShowDropdown(false);
                    }}
                  >
                    PowerBI
                  </button>
                </div>
              )}
            </div>

            <div className='search-box'>
              <button className='search-btn-icon'>🔍</button>
              <input
                className='project-add-search'
                type="text"
                placeholder='Search anything...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

          </div>

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

              {students
                .filter((s) => {

                  const matchesSearch = Object.values(s)
                    .join(" ")
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase());

                  const matchesFilter =
                    filterCourse === "" || s.course === filterCourse;

                  return matchesSearch && matchesFilter;
                })

                .map((student) => (
                  <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.firstName}</td>
                    <td>{student.lastName}</td>
                    <td>{student.email}</td>
                    <td>{student.course}</td>
                    <td>{student.phone}</td>
                    <td>{student.address}</td>

                    <td className='btn-both'>

                      <button
                        className='btn-upd'
                        onClick={() => editStudent(student)}
                      >
                        Update
                      </button>

                      <button
                        className='btn-del'
                        onClick={() => deleteStudent(student.id)}
                      >
                        Delete
                      </button>

                    </td>
                  </tr>
                ))}

            </tbody>
          </table>

        </div>

        <br />

        <div className='project-add'>

          <input
            type="text"
            placeholder=" First Name"
            value={student.firstName}
            onChange={(e) =>
              setStudent({ ...student, firstName: e.target.value })
            }
          />

          <input
            type="text"
            placeholder=" Last Name"
            value={student.lastName}
            onChange={(e) =>
              setStudent({ ...student, lastName: e.target.value })
            }
          />

          <input
            type="text"
            placeholder=" Email"
            value={student.email}
            onChange={(e) =>
              setStudent({ ...student, email: e.target.value })
            }
          />

          <select
            className={student.course === "" ? "placeholder-active" : ""}
            value={student.course}
            onChange={(e) => setStudent({ ...student, course: e.target.value })}
          >
            <option value="" disabled hidden>Select Course</option>
            <option value="ReactJS">ReactJS</option>
            <option value="SpringBoot">SpringBoot</option>
            <option value="PowerBI">PowerBI</option>
          </select>


          <input
            type="number"
            placeholder=" Phone"
            value={student.phone}
            onChange={(e) =>
              setStudent({ ...student, phone: e.target.value })
            }
          />

          <input
            type="text"
            placeholder=" Address"
            value={student.address}
            onChange={(e) =>
              setStudent({ ...student, address: e.target.value })
            }
          />

          <button
            className='project-add-btn'
            onClick={saveStudent}
          >
            {editId ? "Save" : "Add"}
          </button>

        </div>

      </div>
    </>
  );
}

export default Project;