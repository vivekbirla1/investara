import React, { useState } from "react";

function TeamMembers() {
  const [team, setTeam] = useState([]);
  const [newMember, setNewMember] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTeam([...team, newMember]);
    setNewMember("");
  };

  const handleDelete = (index) => {
    setTeam(team.filter((member, i) => i !== index));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          placeholder="Enter team member name"
          value={newMember}
          onChange={(e) => setNewMember(e.target.value)}
        />
        <button className="btn btn-primary " type="submit">
          Add
        </button>
      </form>
      <ul>
        {team.map((member, index) => (
          <li key={member}>
            {member}
            <button
              className="btn btn-warning"
              type="button"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TeamMembers;
