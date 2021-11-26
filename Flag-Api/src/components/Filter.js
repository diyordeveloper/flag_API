import React, { useEffect, useState } from "react";
import { Search } from "@material-ui/icons";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
function Filter({ onSearch,value,valuee,onQidir}) {
  // const url = `https://restcountries.com/v2/region/${region}`;
  // const { region } = useParams();
  // let [currentuser, setCurrentUser] = useState("");
  // const [select, setSelect] = useState([]);
  // function getApi() {
  //   axios.get('https://restcountries.com/v2/all').then((res) => {
  //     setSelect(res.data);
  //     console.log(res); 
  //   });
  // }
  // useEffect(() => {
  //   getApi();
  // }, []); 
 
  return ( 
        <>
          <div className={'inputdiv'}>
            <Search className={'icon'}/>
          <input
          type="text"
          name="serach"
          className="serach"
          placeholder="Search for a country..."
          onChange={onSearch}
          value={value}
        /> 
          </div>
          <div className="sel">
          <select name="select" className="select" value={valuee}   onChange={onQidir} >
          <option value="">All</option>
              <option value="Africa">Africa</option>
              <option value="America">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
               
          </select>
          </div>
        </> 
  );
}

export default Filter;
