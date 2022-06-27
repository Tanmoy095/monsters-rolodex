import React from "react";

const SearchBox = (props) => {
  return (
    <div>
      <input
        className="search-box"
        type="search"
        placeholder={props.placeholder}
        onChange={props.onChangeHandler}
        //onChange={props.handleChange}
      />
    </div>
  );
};

export default SearchBox;
