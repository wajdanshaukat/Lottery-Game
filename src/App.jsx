import LudoBoard from "./Ludo-Board";
import "./App.css";
import TodoApp from "./Todo-app";
import Ticket from "./ticket.jsx";
import LotteryGame from "./lotteryGame.jsx";
function App() {

  let winCondition = (ticket) => {
    return ticket.every((num) => num === ticket[0]);
  };


  return (
    <>
     <LotteryGame n = {3} winCondition = {winCondition}/>
    </>
  );
}

export default App;
