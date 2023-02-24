import { useState } from "react";  
import { useNavigate } from "react-router-dom";        // <== IMPORT
import axios from "axios";
 
function AddApartmentPage({ apartments, setApartments}) {
  const [headline, setHeadline] = useState("");     // <== ADD
  const [price, setPrice] = useState(1);            // <== ADD

  const navigate = useNavigate()

  const handleSubmit = (e) => {          // <== HANDLER FUNCTION
    // Prevent page reload on submit
    e.preventDefault();
    // Create the body for the POST request
    const body = { title: headline, pricePerDay: price };
    
    axios
      .post("https://ironbnb-m3.herokuapp.com/apartments", body)
      .then((response) => {
        console.log("Created Apartment", response.data)
        setApartments([response.data, ...apartments])
        navigate('/')
        // Reset the state
        setHeadline("");
        setPrice(1);
      });
  };
 
 
  return (
    <div className="AddApartmentPage">
      <h3>Add New Apartment</h3>
      
      {/*    ADD   */}
      <form onSubmit={handleSubmit} >
        <label>Title</label>
        <input
          type="text"
          name="headline"
          onChange={(e) => setHeadline(e.target.value)}
          value={headline}
        />
 
        <label>Price per Day</label>
        <input
          type="number"
          name="pricePerDay"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
        
        <button type="submit">Create Apartment</button>
        
      </form>
    </div>
  );
}
 
export default AddApartmentPage;