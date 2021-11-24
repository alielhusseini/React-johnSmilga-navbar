import { NavLink } from 'react-router-dom';

const NavLinks = ({ url, text }) => {
    return <li><NavLink to={ url }>{ text }</NavLink></li>;
}
 
export default NavLinks;