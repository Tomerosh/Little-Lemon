import logo from "../assets/images/Logo.svg";
import Basket from "../assets/images/Basket.svg";
import hamburger from "../assets/images/icon _hamburger menu.svg";
import footerLogo from "../assets/images/logo_footer.png";
import { useEffect, useState } from "react";
import { NavItem, ROUTES } from "./NavItem";
import { Link } from "react-router";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  
    useEffect(() => {
        console.log(menuOpen)
    }, [menuOpen])

  return (
    <nav style={{ position: menuOpen ? "sticky" : "relative" }}>
        <div className={menuOpen? 'showNavBg': 'hideBg'}
        onClick={() => setMenuOpen(false)}/>
      <img
        className="hamburger"
        src={hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
      />
      <Link id='logoLink' to='/'><img id="logo" src={logo}/></Link>
      <ul id="menu" className={menuOpen ? "menu-open" : "menu-closed"}>
        <img
          className="hamburger"
          src={hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        />
        {ROUTES.map((item) => {
          return (
            <NavItem
            key={item.name}
              name={item.name}
              route={item.route}
              setMenuOpen={setMenuOpen}
            />
          );
        })}
        <img
          className="footerLogo"
          src={footerLogo}
        />
      </ul>
      <img className="basket" src={Basket}></img>
    </nav>
  );
}
