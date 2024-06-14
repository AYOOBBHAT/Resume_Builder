// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Register from './components/Register';
// import Login from './components/Login';
// import Profile from './components/Profile';
// import TemplateSelection from './components/TemplateSelection';
// import ResumeSections from './components/ResumeSections';
// import ExportResume from './components/ExportResume';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<Profile />} /> {/* Add a default route */}
//           <Route path="/register" element={<Register />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/templates" element={<TemplateSelection />} />
//           <Route path="/resume" element={<ResumeSections />} />
//           <Route path="/export" element={<ExportResume />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import TemplateSelection from './components/TemplateSelection';
import ResumeSections from './components/ResumeSections';
import ExportResume from './components/ExportResume';
import Home from './components/Home'; // Assuming a simple Home component

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Default route */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/templates" element={<TemplateSelection />} />
          <Route path="/resume" element={<ResumeSections />} />
          <Route path="/export" element={<ExportResume />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

