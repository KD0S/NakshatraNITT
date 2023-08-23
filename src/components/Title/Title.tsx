import { useState } from "react";
import "./Title.css";

function Title() {
   const [rocketLandStatus, setRocketLandStatus] = useState(false);

   return (
      <div className="title-main">
         {!rocketLandStatus && (
            <img
               src={process.env.PUBLIC_URL + 'assets/images/rocket.jpg'}
               alt="not supported"
               width={180}
               className="rocket"
               onAnimationEnd={() => setRocketLandStatus(true)}
            />
         )}

         {rocketLandStatus && (
            <div className="title-container">
               <img
                  src={process.env.PUBLIC_URL + 'assets/images/nakshatra-logo.jpg'}
                  alt="not supported"
                  width={180}
                  className="nakshatra-logo"
               />
               <h1>Nakshatra</h1>
               <p>The astronomy and science club of nitt</p>
               <button className="join-btn">Join</button>
            </div>
         )}
      </div>
   );
}

export default Title;
