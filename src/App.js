import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Eventbar from './Components/Eventbar/Eventbar';
import SortTable from './Components/SortTable/SortTable';
//import ExportButton from './Components/ExportButton/ExportButton';



function App() {
  return (

    <div className='App'>
      <Navbar/>
      <Eventbar/>
      <SortTable/>
    </div>


  );
}

export default App;
