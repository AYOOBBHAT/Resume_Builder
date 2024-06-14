// src/components/ResumeSections.js
import React, { useState } from 'react';

import RealTimePreview from './RealTimePreview';

function ResumeSections() {
  const [sections, setSections] = useState({
    workExperience: [],
    education: [],
    skills: [],
    achievements: [],
  });

  const addEntry = (section) => {
    setSections({
      ...sections,
      [section]: [...sections[section], { id: Date.now(), text: '' }],
    });
  };

  const updateEntry = (section, id, text) => {
    setSections({
      ...sections,
      [section]: sections[section].map((entry) =>
        entry.id === id ? { ...entry, text } : entry
      ),
    });
  };

  const deleteEntry = (section, id) => {
    setSections({
      ...sections,
      [section]: sections[section].filter((entry) => entry.id !== id),
    });
  };

  return (
    <div className="flex gap-4">
      <div className="flex-1">
        {Object.keys(sections).map((section) => (
          <div key={section}>
            <h2>{section.charAt(0).toUpperCase() + section.slice(1)}</h2>
            {sections[section].map((entry) => (
              <div key={entry.id} className="flex gap-4 items-center">
                <input
                  type="text"
                  value={entry.text}
                  onChange={(e) => updateEntry(section, entry.id, e.target.value)}
                  className="border p-2 flex-1"
                />
                <button onClick={() => deleteEntry(section, entry.id)} className="bg-red-500 text-white p-2">Delete</button>
              </div>
            ))}
            <button onClick={() => addEntry(section)} className="bg-green-500 text-white p-2 mt-2">Add {section.charAt(0).toUpperCase() + section.slice(1)}</button>
          </div>
        ))}
      </div>
      <div className="flex-1">
        <RealTimePreview sections={sections} />
      </div>
    </div>
  );
}

export default ResumeSections;
// src/components/ResumeSections.js
// import React, { useState } from 'react';
// import RealTimePreview from './RealTimePreview';

// function ResumeSections() {
//   const [sections, setSections] = useState({
//     workExperience: [],
//     education: [],
//     skills: [],
//     achievements: [],
//   });

//   const addEntry = (section) => {
//     setSections({
//       ...sections,
//       [section]: [...sections[section], { id: Date.now(), text: '' }],
//     });
//   };

//   const updateEntry = (section, id, text) => {
//     setSections({
//       ...sections,
//       [section]: sections[section].map((entry) =>
//         entry.id === id ? { ...entry, text } : entry
//       ),
//     });
//   };

//   const deleteEntry = (section, id) => {
//     setSections({
//       ...sections,
//       [section]: sections[section].filter((entry) => entry.id !== id),
//     });
//   };

//   return (
//     <div className="flex gap-4">
//       <div className="flex-1">
//         {Object.keys(sections).map((section) => (
//           <div key={section}>
//             <h2>{section.charAt(0).toUpperCase() + section.slice(1)}</h2>
//             {sections[section].map((entry) => (
//               <div key={entry.id} className="flex gap-4 items-center">
//                 <input
//                   type="text"
//                   value={entry.text}
//                   onChange={(e) => updateEntry(section, entry.id, e.target.value)}
//                   className="border p-2 flex-1"
//                 />
//                 <button onClick={() => deleteEntry(section, entry.id)} className="bg-red-500 text-white p-2">
//                   Delete
//                 </button>
//               </div>
//             ))}
//             <button onClick={() => addEntry(section)} className="bg-green-500 text-white p-2 mt-2">
//               Add {section.charAt(0).toUpperCase() + section.slice(1)}
//             </button>
//           </div>
//         ))}
//       </div>
//       <div className="flex-1">
//         <RealTimePreview sections={sections} />
//       </div>
//     </div>
//   );
// }

// export default ResumeSections;
