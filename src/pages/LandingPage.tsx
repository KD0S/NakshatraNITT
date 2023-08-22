import "./LandingPage.css";
import Navbar from "../components/Navbar/Navbar";
import Title from "../components/Title/Title";

function LandingPage() {
   return (
      <div className="landing-main">
         <Navbar />
         <Title />
      </div>
   );
}

export default LandingPage;
