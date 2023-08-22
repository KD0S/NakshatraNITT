import "./Navbar.css";

function Navbar() {
   return (
      <ul className="navbar-main">
         <div className="navbar-container glassmorphism">
            <li>
               <a href="#about">About</a>
            </li>
            <li>
               <a href="#projects">Projects</a>
            </li>
            <li>
               <a href="#events">Events</a>
            </li>
            <li>
               <a href="#achievments">Achievements</a>
            </li>
         </div>
      </ul>
   );
}

export default Navbar;
