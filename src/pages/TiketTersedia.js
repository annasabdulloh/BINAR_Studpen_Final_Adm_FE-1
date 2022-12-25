import { useState, useCallback, useEffect} from "react";
import axios from "axios";

let Tiket = []
const calculateRemainingSeats = (tickets) => {
  // Assume that tickets is an array of objects, with each object representing a ticket
  // The number of remaining seats is calculated by counting the number of tickets with the 'available' property set to true
//   const remainingSeats = tickets.filter(ticket => ticket.available).length
//   return { remaining: remainingSeats }
}
// const calculateRemainingSeats = (tickets) => {
//   const seatsInitial = tickets[0].no_chair // dari available
//   // Tiket awal dikurangi tiket yang tersedia dengan melihat jumlah atribut avalaible
//   const remainingSeats = seatsInitial - tickets[0].available.length
//   // Menghitung jumlah kursi yang belum dipesan
//   const availableSeats = seatsInitial - remainingSeats
//   // Menghitung jumlah kursi yang telah terjual
//   const seatsSold = seatsInitial - remainingSeats
//   return { no_chair: seatsInitial, remaining: remainingSeats, not_available: seatsSold, available: availableSeats }
// }


let tiket = [ ]
function TiketTersedia() {
 const url = `${process.env.REACT_APP_API_SERVER_URL}`;
  const [paramShow, setParamShow] = useState(false);
    useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`${url}/api/v1/tickets`, {
        headers: {
          'x-access-token': localStorage.getItem('x-access-token')
        }
      });
      console.log(result);
      tiket = result.data;

      setParamShow(true);
    };

    fetchData();
  }, []);
    //   const remainingSeats = calculateRemainingSeats(tiket.tickets);

function getNumberOfAvailableTickets(ticket) {
    return ticket.available.length;
}

return (
  <>
   <div>
    <h1>Ticket Details</h1>
 
    {paramShow ? (
     <>
      <ul>
        {console.log(tiket)}
        {tiket.tickets.map(ticket => {
            return(
            <li key={ticket.id}>{ticket.id}</li>
            )
        })}
      </ul> 

      <ul>
        {console.log(tiket)}
        {tiket.tickets.map(ticket => {
            return(
            <li key={ticket.id}>{ticket.name}</li>
            )
        })}
      </ul> 

      <ul>
        {console.log(tiket)}
        {tiket.tickets.map(ticket => {
            return(
             <p>Number of tickets available: {getNumberOfAvailableTickets(ticket)}</p>
            )
        })}
      </ul> 

      <ul>
        {console.log(tiket)}
        {tiket.tickets.map(ticket => {
            return(
            <li key={ticket.id}>{ticket.price}</li>
            )
        })}
      </ul> 
        
      <div>
      {tiket.tickets.map(ticket => (
        <div key={ticket.id}>
          <h3>{ticket.name}</h3>
          <p>From: {ticket.from}</p>
          <p>Destination: {ticket.dest}</p>
          <p>Date: {ticket.date_air}</p>
          <p>Price: {ticket.price}</p>
          <p>Number of chairs: {ticket.no_chair}</p>
          <p>Type: {ticket.type}</p>
          <p>Trip type: {ticket.trip_type}</p>
          <p>Deleted: {ticket.deleted ? 'Yes' : 'No'}</p>
          <p>Logo: {ticket.logo}</p>
          <p>Flight number: {ticket.flight_number}</p>
          <p>Kelas: {ticket.kelas}</p>
          <p>Estimated up destination: {ticket.estimated_up_dest}</p>
          <p>Created at: {ticket.createdAt}</p>
          <p>Updated at: {ticket.updatedAt}</p>
        </div>
      ))}
    </div>

      </>
      
    ): (<div>  
         {/* <p>Number of remaining seats: {remainingSeats.remaining}</p> */}
         </div>)}
  </div>
  </>

)
}

export default TiketTersedia;
