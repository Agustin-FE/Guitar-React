import React from "react";

const SearchBar = () => {
  return (
    <div className = "container is-fullhd fixed" >
      <input
        className="input is-primary"
        type="text"
        placeholder="Find Out you Guitar Inspiration"
      ></input>
    </div>
  );
};

export default SearchBar;
