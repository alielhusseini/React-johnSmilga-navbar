import { Link } from 'react-router-dom';

const SocialLinks = ({ url, icon }) => {
    return <li><Link to={ url }>{ icon }</Link></li>;
}
 
export default SocialLinks;