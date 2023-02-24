
function ApartmentsPage({ apartments }) {

   // <- [] means: Run the effect only once, after initial render
 
  
  return (
    <div>
      <h3>List of apartments</h3>
 
      {/*      ADD     */}
      {apartments.map((apartment) => (
        <div key={apartment._id} className="card">
          <img src={apartment.img} alt="apartment" />
          <h3>{apartment.title}</h3>
          <p>Price: {apartment.pricePerDay}</p>
        </div>
      ))}
      
    </div>
  );
}
 
export default ApartmentsPage;