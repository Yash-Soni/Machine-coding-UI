import { NavLink } from "react-router-dom"
import DarkMode from "./DarkMode"
import '../App.css'

const Navbar = () => {
  return (
    <nav className="navBar">
      <NavLink to='accordion' className="navlink">Accordion</NavLink>
      <NavLink to='autocomplete' className="navlink">SearchBar</NavLink>
      <NavLink to='imageSlider' className="navlink">ImageSlider</NavLink>
      <NavLink to='tictactoe' className="navlink">TicTacToe</NavLink>
      <DarkMode />
    </nav>
  )
}

export default Navbar