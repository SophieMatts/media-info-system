import React from 'react';
import { CSVLink } from "react-csv";
import './ExportButton.css'

function ExportButton(props){
  const {athletes} = props;

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
        Download
      </CSVLink>
    </div>
  );
}

export default ExportButton;
