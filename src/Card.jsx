import React from "react";

const Card = (props) => {
    
    return(
        <>
        <div className="cards">
           <div className="content">
             <div className="top_content">
                <div className="poster">
                    <img src={props.poster}/>
                </div>
                <div className="text">
                    <h1>{props.title}</h1>
                    <p>{props.year}, {props.director}</p>
                    <span> <button> {props.time}</button> {props.genre}</span>
                </div>
             </div>
             <div className="description">
                <p> {props.desc}</p>
             </div>
             <div className="icons">
             <i class="fa-solid fa-share-nodes"></i>
             <i class="fa-solid fa-heart"></i>
             <i class="fa-solid fa-message"></i>
             </div>
           </div>
           <div className="image">
              <img src=""/>
           </div>
        </div>
        </>
    )
}

export default Card;