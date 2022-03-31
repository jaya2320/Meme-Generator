import React, { useEffect, useState } from "react";

import { Routes, Route } from "react-router-dom";
import Home from'./Components/Home';

function App() {
  
  const [data, setData] = useState([]);


  useEffect(() => {
      fetch(`http://127.0.0.1:8000/getMemes/`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `This is an HTTP error: The status is ${response.status}`
            );
          }
          return response.json();
        })
        .then((actualData) => {
          setData(actualData);
        })
        
    }, []);

  return (
    <>

    <Routes>
      <Route exact path="/" element={<Home   />} />

    </Routes>
    </>
  );
}
export default App;