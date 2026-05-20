import './App.css';

import prachi from './prachi.png';
import bhavik from './bhavik.png';
import sachin from './sachin.png';

function Home() {
  return (
    <>
      <div className='home-page'>
        <div className="hero-section">
        <h1>Student Database Management System</h1>
        </div>
        <div><br/></div>
        <div className='ops'>
          <h2>Operations : </h2>
          <div className='ops-grid'>
          <div className="op-item"><strong>Create:</strong><br/> Used to add a new student.</div>
          <div className="op-item"><strong>Read:</strong><br/> Used to display all students data.</div>
          <div className="op-item"><strong>Update:</strong><br/> Used to change student data.</div>
          <div className="op-item"><strong>Delete:</strong><br/> Used to remove student data.</div>
      </div>
        </div>
        <div className="dev-sec">
          <h2>Developed by : </h2>
          <div className='dev-cont'>

          <div className='dev-card-1'>
            <img src={bhavik} width="100" alt="Bhavik Sapat" />
            <h3>Bhavik Sapat</h3>
            <h4 className='hfour-1'> Frontend (React Js)</h4>
          </div>
          
          <div className='dev-card-2'>
            <img src={prachi} width="100" alt="Sachin Gupta" />
            <h3>Prachi Katkar</h3>
            <h4 className='hfour'> Backend (SpringBoot)</h4>
          </div>

          <div className='dev-card-3'>
            <img src={sachin} width="100" alt="Sachin Gupta" />
            <h3>Sachin Gupta</h3>
            <h4 className='hfour'> Backend (SpringBoot)</h4>
          </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
