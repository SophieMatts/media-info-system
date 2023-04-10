import './App.css';
import React, {useState} from 'react';
import Navbar from './Components/Navbar/Navbar';
import Eventbar from './Components/Eventbar/Eventbar';
import SearchBox from './Components/SearchBox/SearchBox';
import SortTable from './Components/SortTable/SortTable';
import ExportButton from './Components/ExportButton/ExportButton';
import marathonResults from './Data/MarathonResults.json';

const filterAthletes = (athletes, searchText) => {
  if (searchText === "") {
    return athletes;
  }

  const filteredAthletes = []

  athletes.forEach(athlete => {
    const fullName = `${athlete.firstname} ${athlete.surname}`;
    if (fullName.toLowerCase().includes(searchText.toLowerCase())) {
      filteredAthletes.push(athlete)
    }
  });

  return filteredAthletes;
}

function App() {
  const [athletes, setAthletes] = useState(marathonResults.results.athletes);
  const [searchText, setSearchText] = useState("");

  const filteredAthletes = filterAthletes(athletes, searchText)

  return (
    <div className='App'>
      <Navbar/>
      <Eventbar/>
      <SearchBox searchText={searchText} setSearchText={setSearchText}/>
      <SortTable athletes={filteredAthletes} setAthletes={setAthletes} />
      <ExportButton athletes={filteredAthletes}/>
    </div>


  );
}

export default App;
