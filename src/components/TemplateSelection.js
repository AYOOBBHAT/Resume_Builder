// src/components/TemplateSelection.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function TemplateSelection() {
  const navigate = useNavigate();

  const handleSelectTemplate = (templateId) => {
    // Handle template selection logic
    // For example, you might save the selected template ID to state or perform other actions

    // After selecting a template, navigate to the resume sections or other appropriate route
    navigate('/resume'); // Example: Navigate to resume sections after selecting a template
  };

  return (
    <div>
      <h2>Select Template</h2>
      <div>
        {/* Replace with actual template selection UI */}
        <p>Select a template:</p>
        <button onClick={() => handleSelectTemplate(1)}>Template 1</button>
        <button onClick={() => handleSelectTemplate(2)}>Template 2</button>
        <button onClick={() => handleSelectTemplate(3)}>Template 3</button>
      </div>
    </div>
  );
}

export default TemplateSelection;
