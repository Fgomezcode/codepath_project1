import React from "react";




const EventCard = (props) => {
    return (
      <div className="EventCard">
        <div>
            <h3>{props.location}</h3>
           <img className="card-image" src={props.imagePath} alt={props.location}></img>
            <p>{props.notable}</p>
            <p>{props.rating}/5</p>
            < a href={props.website}>
            <button>View More</button>
            </a>
        </div>
      </div>
    )
}

export default EventCard