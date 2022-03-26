import React, { useState } from "react";
import { autocompleteSearch } from "../../services/appService";

import searchedData from "../../toDelete/mockDataSearchedLocaion";

export default function SearchBar() {
  const [searchedTxt, setSearchedTxt] = useState("");
  const [searchedValues, setSearchedValues] = useState([]);
  const [inTimeOut, setInTimeOut] = useState(false);
  const [request, setrequest] = useState(0);

  //console.log(searchedData);

  const searchLocation = async (txt) => {
    console.log(txt);
    const { data } = await autocompleteSearch(txt);
    setSearchedValues([...data]);
    // ?  dispach action and data to redux
    setrequest(request + 1);
    console.log(request);
  };

  const delaySearch = (txt) => {
    setInTimeOut(true);
    setTimeout(() => {
      setInTimeOut(false);
      searchLocation(txt);
    }, 750);
  };

  const searchFunction = (txt) => {
    setSearchedTxt(txt);
    if (txt.length == 1) {
      searchLocation(txt);
    } else if (txt.length > 1) {
      if (!inTimeOut) {
        delaySearch(txt);
      }
    }
  };

  return (
    <div>
      <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search location"
          aria-label="Search"
          onChange={(e) => searchFunction(e.target.value)}
          list={"searchBar"}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
      <datalist id="searchBar">
        {searchedValues.map((item) => (
          <option
            value={`${item.LocalizedName} - ${item.Country.LocalizedName}`}
            key={item.Key}
          ></option>
        ))}
      </datalist>
    </div>
  );
}
