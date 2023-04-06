import React, {useState} from 'react';
import marathonResults from '../../Data/MarathonResults.json';
import './SortTable.css'

function SortTable() {
  const [athletes, setAthletes] = useState(marathonResults.results.athletes);
  const [order, setOrder] = useState("ASC");

  const sorting =(col)=>{

    if (order === "ASC"){
      const sorted = [...athletes].sort((a,b)=>
        parseInt(a[col], 10) > parseInt(b[col], 10) ? 1 : -1
      );
      setAthletes(sorted);
      setOrder("DSC");
    }
    if (order === "DSC"){
      const sorted = [...athletes].sort((a,b)=>
        parseInt(a[col], 10) < parseInt(b[col], 10) ? 1 : -1
      );
      setAthletes(sorted);
      setOrder("ASC");
    }
  }

  return (
    <div className='container'>
      <table className='table table-dark table-bordered table-striped table-hover table-sm'>
        <thead className='thead-dark'>
          <tr>
            <th onClick={()=>sorting("rank")}>Rank ▼</th>
            <th>First Name</th>
            <th>Surname</th>
            <th>Athlete ID</th>
            <th>Finish Time</th>
            <th>Race Progress</th>
            <th>Team Name</th>
            <th onClick={()=>sorting("bibnumber")}>Bib Number ▼</th>
            <th>Flag</th>
            <th>Country</th>
          </tr>
        </thead>

        <tbody>
          { athletes.map((athlete)=>(
            <tr key={athlete.rank}>
              <td>{athlete.rank}</td>
              <td>{athlete.firstname}</td>
              <td>{athlete.surname}</td>
              <td>{athlete.athleteid}</td>
              <td>{athlete.finishtime}</td>
              <td>{athlete.raceprogress}</td>
              <td>{athlete.teamname}</td>
              <td>{athlete.bibnumber}</td>
              <td>{athlete.flag}</td>
              <td>{athlete.countryname}</td>
            </tr>
          ))}

        </tbody>
      </table>


    </div>
  )







}

export default SortTable
