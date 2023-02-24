import "./App.css";

import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import axios from "axios";
 
import Navbar from "./components/Navbar";
import ApartmentsPage from "./pages/ApartmentsPage";
import AddApartmentPage from "./pages/AddApartmentPage";
 
 
function App() {

  const [apartments, setApartments] = useState([])

 
  useEffect(() => {  

    if (!apartments.length) {

      axios
        .get("https://ironbnb-m3.herokuapp.com/apartments")
        .then((response) => {
          console.log('response.data', response.data);
          setApartments(response.data)
        })
        .catch((err) => {
          console.log(err)
        });


    }

    // <== ADD THE EFFECT
    
  }, [] )


  return (
    <div className="App">
      <Navbar />

      {
       apartments.length ? 

        <Routes>
          <Route path="/" element={<ApartmentsPage apartments={apartments} />} />
          <Route path="/apartments/new" element={<AddApartmentPage apartments={apartments} setApartments={setApartments} />} />
        </Routes>

       : <h3>Loading....</h3> 
      }
      
    </div>
  );
}
 
export default App;
