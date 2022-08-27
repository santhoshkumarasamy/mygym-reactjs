import "./contact.css";

import Header from "../../Components/Header";
import HeaderImage from "../../images/header_bg_2.jpg";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

function Contact() {
  return (
    <>
      <Header title={"Contact Us"} image={HeaderImage}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos dolorem
        quae tempore, nulla enim sed!
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="mailto:santhoshkumarkumarasamy850@gmail.com" target="_blank" rel="noreferrer noopener">
              <MdEmail />              
            </a>
            <a href="https://messenger.com" target="_blank" rel="noreferrer noopener">
              <BsMessenger />              
            </a>
            <a href="https://web.whatsapp.com" target="_blank" rel="noreferrer noopener">
              <IoLogoWhatsapp />              
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
