import { useState } from "react";
import { genTicket, sum } from "./ticket";
import "./ticket.css";
import Ticket from "./ticket.jsx";
export default function LotteryGame({n = 3, winCondition}) {
  let [ticket, setTicket] = useState(genTicket(n));
  let isWinning = winCondition(ticket);

  let newTicket = () => {
    setTicket(genTicket(n));
  };

  return (
    <div>
      <h1>Lottery Game!</h1>
      <Ticket ticket={ticket}/>
      <button onClick={newTicket}>Buy new ticket</button>
      {isWinning ? <h4>CONGRATULATIONS YOU WON!</h4> : null}
    </div>
  );
}
