// src/components/TemplateSelection.js
import { useState } from 'react';

function TemplateSelection() {
  const [template, setTemplate] = useState('simple');

  const templates = [
    { id: 'simple', name: 'Simple' },
    // Add more templates as needed
  ];

  return (
    <div className="flex flex-col gap-4">
      <h2>Select a Template</h2>
      <div className="flex gap-4">
        {templates.map((tmpl) => (
          <button
            key={tmpl.id}
            className={`p-2 ${template === tmpl.id ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setTemplate(tmpl.id)}
          >
            {tmpl.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TemplateSelection;
