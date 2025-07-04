import Header from '../../components/Header';
import HeaderImage from '../../images/header1.jpg';
import StoryImage from '../../images/about1.jpg';
import VisionImage from '../../images/about2.jpg';
import MissionImage from '../../images/about3.jpg';
import './about.css';

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        We’re more than just a gym — we’re a movement. Our mission is to help individuals of all fitness levels unlock their potential, embrace strength, and live healthier, stronger lives.
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story Img" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Founded with a passion for fitness and a dedication to transformation, our gym began as a small community space focused on real results. What started with a few members and a vision has now grown into a thriving fitness hub for people from all walks of life.
            </p>
            <p>
              Our goal has always been to provide a welcoming, motivating environment that empowers people to take control of their health and reach new heights.
            </p>
            <p>
              Whether you're just starting your journey or you're an experienced athlete, we’re here to support you every step of the way.
            </p>
          </div>
        </div>
      </section>

      <section className="about__Vision">
        <div className="container about__Vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              We envision a world where fitness is accessible, enjoyable, and transformative for everyone. Our goal is to build stronger bodies, sharper minds, and more confident individuals — one workout at a time.
            </p>
            <p>
              Through innovation, community, and dedication, we aim to set a new standard in fitness — one that inspires a lifetime commitment to health and personal growth.
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision Img" />
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
              Our mission is to empower individuals through fitness, providing tools, training, and support to help them reach their goals — both inside and outside the gym.
            </p>
            <p>
              We focus on building community, fostering discipline, and creating a positive space where everyone feels encouraged to grow and succeed.
            </p>
            <p>
              By staying true to our values of integrity, excellence, and inclusion, we strive to make fitness a rewarding and life-changing experience for all.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
