import "./Navmenu.css";

interface NavmenuInterface {
   isMenuOpen: boolean;
}

function Navmenu({ isMenuOpen }: NavmenuInterface) {
   return (
      <div
         className={
            isMenuOpen
               ? "navmenu menu-drop-animation"
               : "navmenu reverse-menu-drop-animation"
         }
      >
         <a href="#about">About</a>
         <a href="#projects">Projects</a>
         <a href="#events">Events</a>
         <a href="#achievments">Achievements</a>
         <a href="#members">Members</a>
      </div>
   );
}

export default Navmenu;
