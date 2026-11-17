import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";

import '../Styles/Footer.css'
const Footer = () => {
    return(
        <div className='footer'>
            <div className="socialMedia">
                <FacebookIcon/><InstagramIcon/><WhatsAppIcon/>
            </div>
            <p> &copy; 2026 - Queen's Handmade</p>
        </div>
    )
} 
export default Footer;