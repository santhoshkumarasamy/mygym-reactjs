import { Link } from "react-router-dom";

import Logo from "../images/logo.png";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";

import './footer.css'
function Footer() {
  return (
    <footer>
      <div className="container footer__container">
        <article>
            <Link to="/" className="logo">
                <img src={Logo} alt="Footer logo" />
            </Link>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aspernatur sed aperiam aliquid repellat repellendus rerum reiciendis iure, possimus vitae
            </p>
            <div className="footer__socials">
                <a href="https://linkedin.com" target="_blank" rel='noreferrer noopener'>
                    <FaLinkedinIn/>
                </a>
                <a href="https://facebook.com" target="_blank" rel='noreferrer noopener'>
                    <FaFacebookF/>
                </a>
                <a href="https://twitter.com" target="_blank" rel='noreferrer noopener'>
                    <AiOutlineTwitter/>
                </a>
                <a href="https://instagram.com" target="_blank" rel='noreferrer noopener'>
                    <AiFillInstagram/>
                </a>
            </div>
        </article>
        <article>
            <h4>Permalinks</h4>
            <Link to="/about">About</Link>
            <Link to="/plans">Plans</Link>
            <Link to="/trainers">Trainers</Link>
            <Link to="/Gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
        </article>
        <article>
            <h4>Insights</h4>
            <Link to="/s">Blogs</Link>
            <Link to="/s">Case Studies</Link>
            <Link to="/s">Events</Link>
            <Link to="/s">Communities</Link>
            <Link to="/s">FAQs</Link>
        </article>
        <article>
            <h4>Get in Touch</h4>
            <Link to="/contact">About</Link>
            <Link to="/s">Plans</Link>
        </article>
      </div>
      <div className="footer__copyright">
        <small>2022 KSK &copy; All rights reserved</small>
      </div>
    </footer>
  );
}

export default Footer;
