import { useState, useEffect, useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from './data';
import NavLinks from './NavLinks';
import SocialLinks from './SocialLinks';
import logo from './logo.svg';

const Navbar = () => {
    
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);

    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        if (showLinks) {
            linksContainerRef.current.style.height = `${linksHeight}px`;
        } else {
            linksContainerRef.current.style.height = '0px';
        }
    },[showLinks])

    const hideList = () => {
        if (window.innerWidth >= 800) {
            setShowLinks(false);
        }
    }

    useEffect(() => {
        hideList();
    },[]);
    
    window.addEventListener('resize', hideList);

    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <img src={ logo } alt="logo" className="logo"/>
                    <button className={`${ showLinks ? 'nav-toggle active' : 'nav-toggle' }`} onClick={ () => setShowLinks(!showLinks) }><FaBars /></button>
                </div>
                <div className="links-container" ref={ linksContainerRef }>
                    <ul className="links" ref={ linksRef }>
                        { links.map(link => <NavLinks key={ link.id } {...link}/>) }
                    </ul>
                </div>
                <ul className="social-icons">
                    { social.map(icon => <SocialLinks key={ icon.id } {...icon}/>) }
                </ul>
            </div>
        </nav>
    );
}
 
export default Navbar;