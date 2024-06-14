// src/components/ExportResume.js
import jsPDF from 'jspdf';

function ExportResume() {
  const exportAsPDF = () => {
    const doc = new jsPDF();
    doc.text("Resume Content Here", 10, 10);
    doc.save("resume.pdf");
  };

  return (
    <button onClick={exportAsPDF} className="bg-blue-500 text-white p-2">
      Export as PDF
    </button>
  );
}

export default ExportResume;
