import Header from '../../components/Header'
import HeaderImage from '../../images/header1.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessager, BsMessenger} from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'

import './contact.css'
const Contact = () => {
  return (
    <div>
      <Header title="Get In Touch" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, perspiciatis consequatur! Sunt nulla voluptate architecto!

      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="mailto:support@gmail.com" target="_blank" rel="noreferrer noopener"><MdEmail/></a>
            <a href="http://m.me/big_bang" target="_blank" rel="noreferrer noopener"><BsMessenger/></a>
            <a href="https://wa.me/+91 9145748021" target="_blank" rel="noreferrer noopener"><IoLogoWhatsapp/></a>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Contact
