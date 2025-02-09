import Header from '../../components/Header'
import HeaderImage from '../../images/header1.jpg'
import StoryImage from'../../images/about1.jpg'
import VisionImage from'../../images/about2.jpg'
import MissionImage from'../../images/about3.jpg'
import './about.css'

const about = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit, amet  adipisicing elit. Dolores nesciunt fugit ducimus. Nobis tempora deserunt ut pariatur eaque necessitatibus exercitationem!
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story Img" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi expedita deleniti architecto, numquam odit beatae eos voluptatem quia reprehenderit sed voluptate maiores ab quisquam exercitationem?

            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat nobis nemo corrupti deleniti consequatur commodi amet assumenda ducimus dicta cupiditate?

            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, aliquam?
            </p>
          </div>
        </div>
      </section>

      <section className="about__Vision">
        <div className="container about__Vision-container">
          
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi expedita deleniti architecto, numquam odit beatae eos voluptatem quia reprehenderit sed voluptate maiores ab quisquam exercitationem?

            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat nobis nemo corrupti deleniti consequatur commodi amet assumenda ducimus dicta cupiditate?

            </p>
            
          </div>
          <div className="about__section-image">
          <img src={VisionImage} alt="Our vision Img" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Mission Img" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi expedita deleniti architecto, numquam odit beatae eos voluptatem quia reprehenderit sed voluptate maiores ab quisquam exercitationem?

            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat nobis nemo corrupti deleniti consequatur commodi amet assumenda ducimus dicta cupiditate?

            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, aliquam?
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default about
