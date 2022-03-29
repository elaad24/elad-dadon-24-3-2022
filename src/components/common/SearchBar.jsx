import React, { useState } from "react";
import { Link } from "react-router-dom";
import { autocompleteSearch } from "../../services/appService";
import { useSelector, useDispatch } from "react-redux";
import "../../css/searchBar.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SearchBar() {
  const inDarkMood = useSelector((state) => state.Settings.darkMode);

  const [searchedTxt, setSearchedTxt] = useState("");
  const [searchedValues, setSearchedValues] = useState([]);
  const [inTimeOut, setInTimeOut] = useState(false);
  const [request, setrequest] = useState(0);

  //console.log(searchedData);

  const searchLocation = async (txt) => {
    console.log(txt);

    if (txt.length > 5) {
      const inSearched = searchedValues.filter(
        (item) => item.LocalizedName == txt.split(" ")[0]
      );
      txt = inSearched[0].Key;
    }
    try {
      const { data } = await autocompleteSearch(txt);
      console.log(data);
      setSearchedValues([...data]);
    } catch (e) {
      console.dir(e.response.status);
      console.log();
      if (e.response.status == 400) {
        toast.error("error - bad request ", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else if (e.response.status > 210) {
        toast.warn("error - most probably run out of api credit ", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }

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
          // onBlur={(e) => (e.target.value = "")}
        />
        <Link to={`/location/${searchedValues[0]?.Key}`}>
          <button
            className={
              inDarkMood ? "btn btn-success " : "btn btn-outline-success"
            }
            type="button"
            onClick={() =>
              console.log(
                `chose- ${searchedValues[0].LocalizedName}, id- ${searchedValues[0].Key}`
              )
            }
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
