import footerLogo from '../assets/images/logo_footer.png'
import { NavItem, ROUTES } from "./NavItem";

export default function Footer() {
    return <footer >
        <img src={footerLogo}></img>
        <ul>
            <li>Doormat Navigation</li>
            {ROUTES.map((item) => {
            return (
                <NavItem
                key={item.name}
                name={item.name}
                route={item.route}
                />
            );
            })}
        </ul>
        <ul>
            <li>Contact Us</li>
            <li>Adress</li>
            <li>Phone Number</li>
            <li style={{cursor:'pointer'}}>Email@little-lemon.com</li>
        </ul>
        <ul>
            <li>Social Media</li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li style={{cursor:'pointer'}}>TickTock</li>
        </ul>
    </footer>
}