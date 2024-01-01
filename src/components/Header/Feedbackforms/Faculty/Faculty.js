import React, { useState } from 'react';
import './Faculty.css';

const Faculty = () => {
  const [facultyDetails, setFacultyDetails] = useState({
    facultyName: '',
    department: '',
    contactNo: '',
    email: '',
    degree: '',
    specialization: '',
    academicYear: '',
    subjectsTaught: '',
    suggestions: {
      topicsToAdd: '',
      topicsToDelete: '',
      subjectsToAdd: '',
      subjectsToDelete: '',
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFacultyDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Add your save logic here
    console.log('Saved:', facultyDetails);

    // Reload the page
    window.location.reload();
  };

  const handleCancel = () => {
    // Add your cancel logic here
    console.log('Cancelled');
  };

  return (
    <form className='FFF' onSubmit={handleSave}>
      <h2 className='FFF2'>FACULTY FEEDBACK FORM</h2>
      <label>
        1. Name : &nbsp;
        <input type="text" name="facultyName" value={facultyDetails.facultyName} onChange={handleChange} />
      </label>

      <label>
        2. Department : &nbsp;
        <input type="text" name="department" value={facultyDetails.department} onChange={handleChange} />
      </label>

      <label>
        3. Contact Number : &nbsp;
        <input type="text" name="contactNumber" value={facultyDetails.contactNumber} onChange={handleChange} />
      </label>

      <label>
        4. Email ID : &nbsp;
        <input type="text" name="email" value={facultyDetails.email} onChange={handleChange} />
      </label>

      <label>
        5. Degree : &nbsp;
        <input type="text" name="degree" value={facultyDetails.degree} onChange={handleChange} />
      </label>

      <label>
        6. Specialization : &nbsp;
        <input type="text" name="specialization" value={facultyDetails.specialization} onChange={handleChange} />
      </label>

      <label>
        7. Academic Year : &nbsp;
        <input type="text" name="academicYear" value={facultyDetails.academicYear} onChange={handleChange} />
      </label>

      <label>
        8. Subjects Taught : &nbsp;
        <input type="text" name="subjectsTaught" value={facultyDetails.subjectsTaught} onChange={handleChange} />
      </label>

      <label>
        9. Suggestions related to syllabus:
      </label>

      <label>
        A. Topics in a subject suggested to be Added / Updated : &nbsp;
        <input
          type="text"
          name="suggestions.topicsToAdd"
          value={facultyDetails.suggestions.topicsToAdd}
          onChange={handleChange}
        />
      </label>

      <label>
        B. Topics in a subject suggested to be Deleted : &nbsp;
        <input
          type="text"
          name="suggestions.topicsToDelete"
          value={facultyDetails.suggestions.topicsToDelete}
          onChange={handleChange}
        />
      </label>

      <label>
        C. New Subject / Subjects proposed for Addition into the New syllabus : &nbsp;
        <input
          type="text"
          name="suggestions.subjectsToAdd"
          value={facultyDetails.suggestions.subjectsToAdd}
          onChange={handleChange}
        />
      </label>

      <label>
        D. Subject / Subjects proposed for Deletion from the current syllabus : &nbsp;
        <input
          type="text"
          name="suggestions.subjectsToDelete"
          value={facultyDetails.suggestions.subjectsToDelete}
          onChange={handleChange}
        />
      </label>
      <br /> <br />

      <div className="button-container">
        <button type="submit">Save</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Faculty;
