import React, {useState} from 'react';
import Data from 'src/Data/MarathonResults.json';


function SortTable() {
  const [data, setdata] = useState(Data);

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
          { data.map((d)=>(
            <tr key={d.id}>
              <td>{d.rank}</td>
              <td>{d.firstname}</td>
              <td>{d.surname}</td>
            </tr>
          ))}

        </tbody>
      </table>


    </div>
  )







}

export default SortTable
