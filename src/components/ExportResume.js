// src/components/ExportResume.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import { saveAs } from 'file-saver';

function ExportResume({ resumeData }) {
  const navigate = useNavigate();
  const [selectedFormat, setSelectedFormat] = useState('pdf'); // Default format

  const handleExport = () => {
    if (selectedFormat === 'pdf') {
      exportToPDF();
    } else if (selectedFormat === 'docx') {
      exportToDOCX();
    }
    // Optionally, you can save the exported file to Firestore or other storage
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text('Resume', 20, 20); // Title
    // Add resume content here using doc.text() or other methods

    doc.save('resume.pdf'); // Save PDF file using jsPDF save method
  };

  const exportToDOCX = () => {
    // Implement DOCX export logic using a library like docx or similar
    // Example: You can use a third-party library to generate a DOCX file
    // This implementation can vary based on the library you choose
    // For simplicity, I'm using a placeholder here

    const blob = new Blob(['Resume content'], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
    saveAs(blob, 'resume.docx'); // Save DOCX file using file-saver library
  };

  return (
    <div>
      <h2>Export Resume</h2>
      <div>
        <label>
          Select Export Format:
          <select value={selectedFormat} onChange={(e) => setSelectedFormat(e.target.value)}>
            <option value="pdf">PDF</option>
            <option value="docx">DOCX</option>
          </select>
        </label>
      </div>
      <button onClick={handleExport}>Export</button>
      <button onClick={() => navigate('/resume')}>Back to Resume Sections</button>
    </div>
  );
}

export default ExportResume;
