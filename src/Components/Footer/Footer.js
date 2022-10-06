import act from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-main-container">
      <div className="footer-sub-container-1"></div>

      <div className="footer-sub-container-2">
        <div className="contact-row">
          <div className="contact-row-content">
            <h4>Address :</h4>Manikchand Sky One, Kalyani Nagar, Pune, 411006
          </div>
        </div>
        <div className="contact-row">
          <div className="contact-row-content">
            <h4>Mobile No :</h4>9405829407 - 7767983330
          </div>
        </div>
        <div className="contact-row">
          <div className="contact-row-content">
            <h4>Email-Id :</h4>Bhoitemukul183@gmail.Com
          </div>
        </div>
      </div>

      {/* <div className="chat"></div> */}
    </div>
  );
}

export default Footer;
