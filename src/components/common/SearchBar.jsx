import React, { useState } from "react";
import { Link } from "react-router-dom";
import { autocompleteSearch } from "../../services/appService";
import { useSelector } from "react-redux";
import "../../css/searchBar.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isEnglishLetter } from "../../utils";
import debounce from "lodash.debounce";

export default function SearchBar() {
  const inDarkMood = useSelector((state) => state.Settings.darkMode);

  const [searchedValues, setSearchedValues] = useState([]);
  const [request, setrequest] = useState(0);

  const searchLocation = async (txt) => {
    console.log(txt);
    console.log(txt.length);

    try {
      console.log("auto complite run ");
      const { data } = await autocompleteSearch(txt);
      setSearchedValues([...data]);
    } catch (e) {
      if (e.response.status === 400) {
        toast.error("error - bad request ", {
          position: "top-right",
          autoClose: 3500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else if (e.response.status > 210) {
        toast.warn("error - most probably run out of api credit ", {
          position: "top-right",
          autoClose: 3500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }

    setrequest(request + 1);
  };

  const debouncedFetchData = debounce((TXT) => {
    searchLocation(TXT);
  }, 334);

  const searchFunction = (txt) => {
    if (isEnglishLetter(txt)) {
      debouncedFetchData(txt);
    }
  };

  return (
    <div className="">
      <form className="d-flex">
        <input
          className={
            inDarkMood
              ? "form-control me-2 bg-dark text-light searchBar"
              : "form-control me-2 searchBar"
          }
          type="search"
          placeholder="Search location"
          aria-label="Search"
          onChange={(e) => searchFunction(e.target.value)}
          list={"searchBar"}
        />
        <Link to={`/elad-dadon-24-3-2022/location/${searchedValues[0]?.Key}`}>
          <button
            className={
              inDarkMood ? "btn btn-success " : "btn btn-outline-success"
            }
            type="button"
          >
            Search
          </button>
        </Link>
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
