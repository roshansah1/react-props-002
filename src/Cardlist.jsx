import React from "react";
import {Data} from './Data';
import Card from './Card'
const Cardlist = () => {
    return(
        <>
          <div className="main_div">
             {Data.map((ele) => {
               return (  <Card 
                name = "Roshan sah"
                 title = {ele.Title}
                 poster = {ele.Poster}
                 year = {ele.Year}
                 director = {ele.Director}
                 time = {ele.Runtime}
                 genre = {ele.Genre}
                 desc = {ele.Plot}
                 />)
             })}
          </div>
        </>
    )
}


export default Cardlist;