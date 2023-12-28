import React, { useState, useEffect } from 'react';

const QAT = () => {
  const [iqacMembers, setIQACMembers] = useState([]);

  useEffect(() => {
    // Load data from JSON file
    fetch('/path/to/iqacMembers.json')
      .then((response) => response.json())
      .then((data) => setIQACMembers(data))
      .catch((error) => console.error('Error loading IQAC members:', error));
  }, []);

  // Render table rows
  const renderTableRows = () => {
    return iqacMembers.map((member) => (
      <tr key={member.sno}>
        <td>{member.sno}</td>
        <td>{member.name}</td>
        <td>{member.designation}</td>
        <td>{member.role}</td>
      </tr>
    ));
  };

  return (
    <div>
      <h2>IQAC Members</h2>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name of the Member</th>
            <th>Designation</th>
            <th>Role in IQAC</th>
          </tr>
        </thead>
        <tbody>
          {renderTableRows()}
        </tbody>
      </table>
    </div>
  );
};

export default QAT;
