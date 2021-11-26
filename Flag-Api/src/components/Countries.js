import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Load from "./Load";
import Filter from "./Filter";
const Countries = () => {
  const url = "https://restcountries.com/v2/all";
  const [countries, setCountries] = useState([]);
  const [load, setLoad] = useState(true);
  const [filter, setFilter] = useState([]);
  const [input, setInput] = useState("");
  // const [qidir, setQidir] = useState("");
  function onSearch(e) {
    setInput(e.target.value);
  }
 function  onQidir(e){
  setInput(e.target.value);
 }
  useEffect(() => {
    function getApi() {
      axios.get(url).then((res) => {
        setCountries(res.data);
        console.log(res);
        setLoad(false);
      });
    }
    getApi();
  }, []);
  return (
    <>
      {load ? (
        <Load />
      ) : (
        <>
          <div className="filter">
            <Filter    onSearch={onSearch} onQidir={onQidir} valuee={countries.region} value={countries.name} />
          </div>
          <section className={"grid"}>
            {countries 
              .filter((val) => {
                if (input === "") {
                  return val;
                } else if (
                  val.name.toUpperCase().includes(input.toUpperCase())
                ) {
                  return val;
                } 
                else if (
                  val.region.toUpperCase().includes(input.toUpperCase())
                ) {
                  return val;
                } 
              })
              .map(
                ({ numericCode, name, population, region, capital, flag }) => (
                  <Link to={`/${name}`} key={name}>
                    <article>
                      <div className={"card"} key={numericCode}>
                        <div className="cardimg">
                          <img src={flag} alt="Error!" />
                        </div>
                        <div className="details">
                          <h3>{name}</h3>
                          <h4>
                            Capital : <span> {capital}</span>
                          </h4>
                          <h4>
                            Region : <span> {region}</span>
                          </h4>
                          <h4>
                            Population : <span> {population}</span>
                          </h4>
                        </div>
                      </div>
                    </article>
                  </Link>
                )
              )}
          </section>
        </>
      )}
    </>
  );
};

export default Countries;
