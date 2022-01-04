import * as React from "react";
/* ADD IMPORTS FROM TODO ON THE NEXT LINE */


/**
* The About function defines the component that makes up the About page
* This component is attached to the /about path in router.jsx
*/

export default function Main() {
  /* DECLARE STYLE AND TRIGGER FOR WIGGLE EFFECT FROM TODO ON NEXT LINE */
  
   const backendData = [
    { name: "Bob White", points: "260", potPoints: "400" },
    { name: "Reggie Davis", points: "228", potPoints: "450" },
    { name: "Faith Durrwatcher", points: "190", potPoints: "410" }
  ]

  const noteRootStyle = {
    border: "2px #0af solid",
    borderRadius: 9,
    margin: 20,
    backgroundColor: "#efefef",
    padding: 6,
  }; 
  
  return (
    <div className="main">
      {/* REPLACE H1 ELEMENT BELOW WITH CODE FROM TODO */}
      <h1 className="title">
        The Leaderboard
      </h1>
      {/* REPLACE OPENING P TAG BELOW WITH CODE FROM TODO */}
      <p>
        Below will hold either the leaderboard or the task to fill out a bracket.
      </p>
      <div style={{ width: 400 }}>
      {backendData.map(ele => 
        <div style={noteRootStyle}>
          <h3>{ele.name}</h3>
          <p><strong>Points: </strong>{ele.points}</p>
          <small>Potential remaining points: <i>{ele.potPoints}</i></small>
        </div>
      )}
    </div>

    </div>
  );
}
