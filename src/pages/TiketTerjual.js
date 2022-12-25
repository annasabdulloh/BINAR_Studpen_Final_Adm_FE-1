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
function TiketTerjual() {
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
function getNumberOfSoldTickets(ticket) {
    return ticket.no_chair - ticket.available.length;
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
            <p>Number of tickets sold: {getNumberOfSoldTickets(ticket)}</p>
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
      </>
      
    ): (<div>  
         {/* <p>Number of remaining seats: {remainingSeats.remaining}</p> */}
         </div>)}
  </div>
  </>

)
}

export default TiketTerjual;
