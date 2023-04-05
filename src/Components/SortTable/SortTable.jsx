import React, {useState} from 'react';
import marathonResults from '../../Data/MarathonResults.json';


function SortTable() {
  const [athletes, setAthletes] = useState(marathonResults.results.athletes);

  return (
    <div>
      <table>
        <thead>
          <th>First Name</th>
          <th>Surname</th>
          <th>Athlete ID</th>
          <th>Finish Time</th>
        </thead>

        <tbody>
          { athletes.map((athlete)=>(
            <tr key={athlete.id}>
              <td>{athlete.rank}</td>
              <td>{athlete.firstname}</td>
              <td>{athlete.surname}</td>
            </tr>
          ))}

        </tbody>
      </table>


    </div>
  )







}

export default SortTable
