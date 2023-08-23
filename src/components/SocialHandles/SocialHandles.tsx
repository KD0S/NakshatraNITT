import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faInstagram,
   faXTwitter,
   faMedium,
   faYoutube,
   faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./SocialHandles.css";

function SocialHandles() {
   return (
      <div className="socials-main">
         <FontAwesomeIcon icon={faInstagram} className="socials-icon" />
         <FontAwesomeIcon icon={faXTwitter} className="socials-icon" />
         <FontAwesomeIcon icon={faMedium} className="socials-icon" />
         <FontAwesomeIcon icon={faYoutube} className="socials-icon" />
         <FontAwesomeIcon icon={faLinkedin} className="socials-icon" />
      </div>
   );
}

export default SocialHandles;
