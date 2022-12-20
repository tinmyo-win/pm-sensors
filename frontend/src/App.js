import logo from './logo.svg';
import './App.css';
import SimpleMap from './SimpleMap';
import axios from 'axios';

import { saveAs } from 'file-saver';


function App() {
  async function downloadPDF() {
    try {

      const response = await fetch('http://localhost:8888/api/sensors/export');

      const blob = await response.blob();

      saveAs(blob, 'sensors.pdf');
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
      <SimpleMap />
      <div style={{width: '200px', height: '100px', backgroundColor: 'black'}}>
      <button style={{width: '200px', height: '100px', backgroundColor: 'black', color: 'white', fontSize: '30px'}}  onClick={downloadPDF}>
        Export
      </button>
      </div>
    </div>
  );
}

export default App;
