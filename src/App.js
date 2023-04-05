import logo from './logo.svg';
import './App.css';
import SortTable from './Components/SortTable/SortTable';
import ExportButton from './Components/ExportButton/ExportButton';

function App() {
  return (
    <div className="App">
      <SortTable/>
      <ExportButton/>
    </div>
  );
}

export default App;
