// src/components/ResumeSections.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ResumeSections() {
  const navigate = useNavigate();

  const [workExperience, setWorkExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);
  const [achievements, setAchievements] = useState([]);

  const handleAddWorkExperience = () => {
    setWorkExperience([...workExperience, { company: '', position: '', startDate: '', endDate: '', description: '' }]);
  };

  const handleAddEducation = () => {
    setEducation([...education, { institution: '', degree: '', startDate: '', endDate: '', description: '' }]);
  };

  const handleAddSkill = () => {
    setSkills([...skills, '']);
  };

  const handleAddAchievement = () => {
    setAchievements([...achievements, '']);
  };

  const handleSave = () => {
    // Save resume sections data (workExperience, education, skills, achievements) to Firestore or state management
    // Optionally, navigate to ExportResume or another page after saving
    navigate('/export');
  };

  return (
    <div>
      <h2>Resume Sections</h2>

      <div>
        <h3>Work Experience</h3>
        {workExperience.map((item, index) => (
          <div key={index}>
            <input
              type="text"
              value={item.company}
              onChange={(e) => {
                const updatedWorkExperience = [...workExperience];
                updatedWorkExperience[index].company = e.target.value;
                setWorkExperience(updatedWorkExperience);
              }}
              placeholder="Company"
            />
            <input
              type="text"
              value={item.position}
              onChange={(e) => {
                const updatedWorkExperience = [...workExperience];
                updatedWorkExperience[index].position = e.target.value;
                setWorkExperience(updatedWorkExperience);
              }}
              placeholder="Position"
            />
            {/* Add more fields (startDate, endDate, description) as needed */}
          </div>
        ))}
        <button onClick={handleAddWorkExperience}>Add Work Experience</button>
      </div>

      <div>
        <h3>Education</h3>
        {education.map((item, index) => (
          <div key={index}>
            <input
              type="text"
              value={item.institution}
              onChange={(e) => {
                const updatedEducation = [...education];
                updatedEducation[index].institution = e.target.value;
                setEducation(updatedEducation);
              }}
              placeholder="Institution"
            />
            <input
              type="text"
              value={item.degree}
              onChange={(e) => {
                const updatedEducation = [...education];
                updatedEducation[index].degree = e.target.value;
                setEducation(updatedEducation);
              }}
              placeholder="Degree"
            />
            {/* Add more fields (startDate, endDate, description) as needed */}
          </div>
        ))}
        <button onClick={handleAddEducation}>Add Education</button>
      </div>

      <div>
        <h3>Skills</h3>
        {skills.map((skill, index) => (
          <div key={index}>
            <input
              type="text"
              value={skill}
              onChange={(e) => {
                const updatedSkills = [...skills];
                updatedSkills[index] = e.target.value;
                setSkills(updatedSkills);
              }}
              placeholder="Skill"
            />
          </div>
        ))}
        <button onClick={handleAddSkill}>Add Skill</button>
      </div>

      <div>
        <h3>Achievements</h3>
        {achievements.map((achievement, index) => (
          <div key={index}>
            <input
              type="text"
              value={achievement}
              onChange={(e) => {
                const updatedAchievements = [...achievements];
                updatedAchievements[index] = e.target.value;
                setAchievements(updatedAchievements);
              }}
              placeholder="Achievement"
            />
          </div>
        ))}
        <button onClick={handleAddAchievement}>Add Achievement</button>
      </div>

      <button onClick={handleSave}>Save and Proceed to Export</button>
    </div>
  );
}

export default ResumeSections;
