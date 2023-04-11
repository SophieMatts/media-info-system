import React from 'react';

function SearchBox(props) {
  const {searchText, setSearchText} = props;

  const onChange = event => {
    setSearchText(event.target.value)
  }

  return (
    <>
      <input name="myInput" value={searchText} onChange={onChange} placeholder="🔍 Search Name..." />
    </>
  );
}

export default SearchBox;
