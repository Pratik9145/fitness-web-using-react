import Header from '../../components/Header'
import HeaderImage from '../../images/gallery15.jpg'
import { trainers } from '../../data'
import { BsInstagram } from 'react-icons/bs'
import { AiOutlineX } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import Trainer from '../../components/Trainer'
import './trainers.css'
import Icon from '@ant-design/icons'
const Trainers = () => {
  return (
    <>
    <Header title="Our Trainers" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ab explicabo natus repellat vero ea ipsum facere iste adipisci labore?

    </Header>

    <section className="trainers">
      <div className="container trainers__container">
        {
          trainers.map(({id, image, name, job, socials})=>{
            return<Trainer key={id} image={image} name={name} job={job} socials={
            [
              {icon: <BsInstagram/>, link: socials[0]},
              {icon: <AiOutlineX/>, link: socials[1]},
              {icon: <FaFacebook/>, link: socials[2]},
              {icon: <FaLinkedin/>, link: socials[3]}
            ]
          }/>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Trainers
