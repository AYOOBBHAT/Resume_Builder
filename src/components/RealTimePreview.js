// src/components/RealTimePreview.js
import { useState, useEffect } from 'react';

function RealTimePreview({ sections }) {
  const [content, setContent] = useState('');

  useEffect(() => {
    // Generate resume content based on sections
    let resumeContent = '';
    Object.keys(sections).forEach((section) => {
      resumeContent += `${section.charAt(0).toUpperCase() + section.slice(1)}\n`;
      sections[section].forEach((entry) => {
        resumeContent += `${entry.text}\n`;
      });
    });
    setContent(resumeContent);
  }, [sections]);

  return (
    <pre className="border p-4">
      {content}
    </pre>
  );
}

export default RealTimePreview;
