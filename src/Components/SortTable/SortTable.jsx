import React, {useState} from 'react';
import marathonResults from '../../Data/MarathonResults.json';

function SortTable() {
  const [athletes, setAthletes] = useState(marathonResults.results.athletes);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>First Name</th>
            <th>Surname</th>
            <th>Athlete ID</th>
            <th>Finish Time</th>
            <th>Race Progress</th>
            <th>Team Name</th>
            <th>Bib Number</th>
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
