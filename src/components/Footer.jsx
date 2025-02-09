import{Link} from 'react-router-dom'
import Logo from '../images/logo.png'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import { AiFillInstagram, AiOutlineX } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to="/">
                    <img src={Logo} alt="Footer Logo" />
                </Link>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis repellat atque ducimus cum, non nemo!
                </p>
                <div className="footer__socials">
                    <a href="https://linkedin.com" target="_blank" rel='noreferrer noopener'><FaLinkedin/></a>
                    <a href="https://facebook.com" target="_blank" rel='noreferrer noopener'><FaFacebook/></a>
                    <a href="https://x.com" target="_blank" rel='noreferrer noopener'><AiOutlineX/></a>
                    <a href="https://instagram.com" target="_blank" rel='noreferrer noopener'><AiFillInstagram/></a>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/trainers">Trainers</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </article>

            <article>
                <h4>Insight</h4>
                <Link to="/s">Blog</Link>
                <Link to="/s">Case Studies</Link>
                <Link to="/s">Events</Link>
                <Link to="/s">Communities</Link>
                <Link to="/s">FAQs</Link>
            </article>

            <article>
                <h4>Get In Touch</h4>
                <Link to="/contact">Contact</Link>
                <Link to="/s">Support</Link>
                
            </article>

      
        </div>
        <div className="footer__copyright">
            <small>2017 Pratik C. &copy; All Rights Reserved</small>
        </div>
    </footer>
  )
}

export default Footer
