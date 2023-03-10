import "./Footer.css";
import footerlogo from "../../assets/footerlogo.svg";
import facebook from "../../assets/facebook.svg";
import google from "../../assets/google.svg";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/twitter.svg";

const Footer = () => {
	return (
		<div className="footer">
			<div className="firstrow">
				<div className="logo">
					<img src={footerlogo} alt="footerlogo" />
					<h1 className="footertitle">Swift Rider</h1>
				</div>
				<div className="links">
					<p className="cardTitle1">Home</p>
					<p className="cardTitle1">About Us</p>
					<p className="cardTitle1">FAQ</p>
					<p className="cardTitle1">Contact Us</p>
				</div>
				<div className="icons">
					<img src={facebook} alt="facebook" />
					<img src={twitter} alt="twitter" />
					<img src={linkedin} alt="linkedin" />
					<img src={google} alt="google" />
				</div>
			</div>
			<div className="secondrow">
				<div className="copyright">
					<p className="cardTitle2">All rights reserved</p>
				</div>
				<div className="links">
					<p className="cardTitle2">Privacy Policy</p>
					<p className="cardTitle2">Terms and Conditions</p>
					<p className="cardTitle2">Legal</p>
					<p className="cardTitle2">Help</p>
				</div>
				<div className="version">
					<p className="cardTitle2">English version</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
