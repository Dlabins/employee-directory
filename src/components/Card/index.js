import React from "react";


  function Card(props) { 
    
    return (
         
        <div class="card text-white bg-warning mb-3" style={{maxwidth: "540px"}}>
         <div class="row g-0">
          <div class="col-md-4">
            <img
                src={props.image}
                alt="employee"
            />
            </div>
            <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Employee Info</h5>
        <p class="card-text">{props.name}</p>
        <p>{props.dept}</p>
        <p class="card-text">{props.email}</p>
        <p>{props.phone}</p>
      </div>
    </div>
    </div>
    </div>
       
)};
export default Card;



