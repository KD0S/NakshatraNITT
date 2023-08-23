import "./Title.css";

function Title() {
   return (
      <div className="title-main">
         <div className="logo-container">
            <img src={require("./nakshatra-logo.png")} alt="not supported" />
         </div>

         <div className="title-container">
            <h1>Nakshatra</h1>
            <p>The astronomy and science club of nitt</p>
         </div>

         {/* <button className="join-btn">Join</button> */}
      </div>
   );
}

export default Title;


