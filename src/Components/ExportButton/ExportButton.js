import React from 'react';
import { CSVLink } from "react-csv";
import './ExportButton.css'

function ExportButton(props){
  const {athletes} = props;

  // Using reduce to convert athetes array into an array of rows.
  const data = athletes.reduce((rows, athlete) => {
    const newRow = [athlete.rank, `${athlete.firstname} ${athlete.surname}`, athlete.finishtime, athlete.flag]
    rows.push(newRow)
    return rows;
  }, [["Rank", "Full Name", "Finish Time", "Country Code"]])

  return (
    <div className='button-container'>
      <CSVLink
        className='csv-button'
        filename={"race_results.csv"}
        data={data}
      >
        Download CSV
      </CSVLink>
    </div>
  );
}

export default ExportButton;
