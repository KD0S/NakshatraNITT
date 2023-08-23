import "./LandingPage.css";
import Navbar from "../components/Navbar/Navbar";
import Title from "../components/Title/Title";
import SocialHandles from "../components/SocialHandles/SocialHandles";

function LandingPage() {
   return (
      <div className="landing-main">
         <Navbar />
         <Title />
         <SocialHandles />


      </div>
   );
}

export default LandingPage;
