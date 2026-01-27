import { NavLink } from "react-router";

export const ROUTES = [
  { name: "Home", route: "/" },
  { name: "About", route: "/about" },
  { name: "Menu", route: "/menu" },
  { name: "Reservations", route: "/booking" },
  { name: "Order Online", route: "/order" },
  { name: "Login", route: "/login" },
];

export function NavItem({ name, route, setMenuOpen=null }) {
  return (
    <li>
      <NavLink
        className="navLink"
        to={route}
        onClick={() => setMenuOpen? setMenuOpen(false): null}
      >
        {({isActive}) => (
          <span className={isActive ? "activeNavItem" : 'navItem'}>{name}</span>
        )}
      </NavLink>
    </li>
  );
}
