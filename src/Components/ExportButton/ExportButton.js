import React, { Component } from 'react';
import { CSVLink, CSVDownload } from "react-csv";

const headers = [
  { label: 'Rank', key: 'setAthletes.rank'},
  { label: 'First Name', key: 'setAthletes.firstname'},
  { label: 'Last Name', key: 'setAthletes.lastname'},
  //{ label: 'Finish Time , key: 'setAthletes.finishtime'},
  //{ label: 'Country Code , key: 'setAthletes.flag'}

];



class ExportButton extends Component {




  render() {
    const { data } = this.state;

    return (
      <div>
        <input type="button" value="Export to CSV" onClick={this.downloadReport} />
        <CSVLink
          headers={headers}
          filename={"race_results.csv"}
          data={data}
          ref={this.csvLinkEl}
        />
      </div>
    );
  }
}

export default ExportButton;
