import React, { Component } from 'react';

class ExportButton extends Component {
  /*const onExportLocal=()=>{

  }*/

  render() {
    return(
      <button onClick={this.onExportLocal}>Export to CSV</button>
    )
  }
}

export default ExportButton;
