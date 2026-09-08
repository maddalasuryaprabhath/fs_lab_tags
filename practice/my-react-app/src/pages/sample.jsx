import React from "react";
import {useNavigate} from "react-router-dom";

function Sample() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Sample Page</h1>  
    <button onClick={() => navigate("/")}>Go to Home</button>
    </div>
    );

}
export default Sample;