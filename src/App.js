import './App.css';
import React, {useState} from 'react';
import Navbar from './Components/Navbar/Navbar';
import Eventbar from './Components/Eventbar/Eventbar';
import SortTable from './Components/SortTable/SortTable';
import ExportButton from './Components/ExportButton/ExportButton';
import marathonResults from './Data/MarathonResults.json';

function App() {
  const [athletes, setAthletes] = useState(marathonResults.results.athletes);

  return (
    <div className='App'>
      <Navbar/>
      <Eventbar/>
      <SortTable athletes={athletes} setAthletes={setAthletes} />
      <ExportButton athletes={athletes}/>
    </div>


  );
}

export default App;
