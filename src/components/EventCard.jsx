import React from "react";




const EventCard = (props) => {
    return (
      <div className="EventCard">
        <div>
           <img className="card-image" src={props.imagePath} alt={props.location}></img>
            <h3>{props.location}</h3>
            <p>{props.notable}</p>
            <p>{props.rating}/5</p>
            <button>View More</button>
        </div>
      </div>
    )
}

export default EventCard