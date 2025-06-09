import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faFileAlt, faTimes } from '@fortawesome/free-solid-svg-icons';

 
 /* const [modulesData] = useState({
    "Week 1 - DC Machines": [
      { title: "Introduction to Electric Motors", type: "article", url: "https://www.electricaltechnology.org/2020/04/dc-machine-types-working-applications.html" },
      { title: "DC Motors", type: "video", url: "https://www.youtube.com/embed/CWulQ1ZSE3c" }, 
      { title: "DC Generators", type: "video", url: "https://www.youtube.com/embed/mq2zjmS8UMI" }
    ],
    "Week 2 - Induction Machines": [
      { title: "Introduction to Induction Machines", type: "article", url: "https://www.mangoengineer.in/2020/11/induction-machine.html" },
      { title: "Induction Motor", type: "video", url: "https://www.youtube.com/embed/AQqyGNOP_3o" },
      { title: "Asynchronous Generator", type: "article", url: "https://www.tutorialspoint.com/electrical_machines/induction_generator_asynchronous_generator.htm" },
      
    ],
    "Week 3 - Synchronous Machines": [
      { title: "Introduction to Synchronous Machines", type: "article", url: "https://www.tutorialspoint.com/electrical_machines/electrical_machines_introduction_to_3phase_synchronous_machines.htm"},
      { title: "Synchronous Motor", type: "video", url: "https://www.youtube.com/embed/Tk3lNBSAgEg" },
      { title: "Alternator", type: "video", url: "https://www.youtube.com/embed/tiKH48EMgKE" },
    ]
  })*/
  const courseData = [
  {
    week: 'Week 1 - DC Machines',
    resources: [
      { title: 'Introduction to Electric Motors', type: 'Article' , url: "https://www.electricaltechnology.org/2020/04/dc-machine-types-working-applications.html"},
      { title: 'DC Motors', type: 'Video' },
      { title: 'DC Generators', type: 'Video' },
    ],
  },
  {
    week: 'Week 2 - Induction Machines',
    resources: [
      { title: 'Introduction to Induction Machines', type: 'Article' },
      { title: 'Induction Motor', type: 'Video' },
      { title: 'Asynchronous Generator', type: 'Article' },
    ],
  },
];

function ElectricMachines() {
  return (
    <div className="container">
      <h1>Electric Machines</h1>
      {courseData.map((weekData, index) => (
        <div key={index} className="week-section">
          <h2>{weekData.week}</h2>
          <table className="resource-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {weekData.resources.map((resource, idx) => (
                <tr key={idx}>
                  <td>{resource.title}</td>
                  <td>{resource.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );





  const [modalOpen, setModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState({ title: '', url: '' });

  const openVideoModal = (title, url) => {
    setCurrentVideo({ title, url });
    setModalOpen(true);
  };

  const closeVideoModal = () => {
    setCurrentVideo({ title: '', url: '' });
    setModalOpen(false);
  };

  const handleResourceClick = (resource) => {
    if (resource.type === 'video') {
      openVideoModal(resource.title, resource.url);
    } else {
      window.open(resource.url, '_blank');
    }
  };

  

      {/* Video Modal */}
      {modalOpen && (
        <div className="modal" onClick={closeVideoModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-modal" onClick={closeVideoModal}>
              <FontAwesomeIcon icon={faTimes} />
            </span>
            <h2>{currentVideo.title}</h2>
            <div className="video-container">
              <iframe
                title={currentVideo.title}
                src={currentVideo.url}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      
  );
};
};
export default ElectricMachines;
//export default App;