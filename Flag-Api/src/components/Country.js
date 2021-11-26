import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Load from "./Load";
function Country() {
  // const url = `https://restcountries.com/v2/all/${name}`;
  const [country, setCountry] = useState([]);
  const [load, setLoad] = useState(true);
  const { name } = useParams();
  useEffect(() => {
    function getAxios() {
      axios.get(`https://restcountries.com/v2/name/${name}`).then((res) => {
        setCountry(res.data);
        setLoad(false);
        console.log(res);
      });
    }
    getAxios();
  }, [name]);
  return (
    <>
      {load ? (
        <Load />
      ) : (
        <section className={"page"}>
          <Link to="/" className={"back"}>
            {" "}
            &larr; Back{" "}
          </Link>
          {country.map(
            ({
              callingCodes,
              area,
              subregion,
              nativeName,
              name,
              population,
              region,
              capital,
              borders,
              languages,
              flag,
              currencies,
              timezones,
              altSpellings,
            }) => (
              <article className={"artikl"} key={name}>
                <div className="flag">
                  <img src={flag} alt="Error!" />
                </div>
                <div className="div1">
                  <h2>{name}</h2>
                  <h4>
                    Native Name : <span> {nativeName}</span>
                  </h4>
                  <h4>
                    AltSpellings: <span> {altSpellings[1]}</span>
                  </h4>
                  <h4>
                    Population: <span> {population}</span>
                  </h4>

                  <h4>
                    Languages : <span> {languages[0].name} </span>
                  </h4>
                  <h4>
                    Region: <span> {region}</span>
                  </h4>
                  <h4>
                    Sub Region : <span> {subregion}</span>
                  </h4>
                </div>
                <div className="div2">
                  <h4>
                    Capital : <span> {capital}</span>
                  </h4>
                  <h4>
                    Area : <span> {area}</span>
                  </h4>

                  <h4>
                    CallingCodes : <span> {callingCodes}</span>
                  </h4>
                  <h4>
                    Timezones : <span> {timezones}</span>
                  </h4>

                  <h4>
                    CurrenciesCode : <span> {currencies[0].code}</span>
                  </h4>

                  <h4>
                    CurrenciesName : <span> {currencies[0].name}</span>
                  </h4>
                  <h4>
                    CurrenciesSymbol : {" "}
                    <span> {currencies[0].symbol}</span>
                  </h4>
                </div>
              </article>
            )
          )}
        </section>
      )}
    </>
  );
}

export default Country;
