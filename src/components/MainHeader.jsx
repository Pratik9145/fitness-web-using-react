import {Link} from 'react-router-dom'
import Image from '../images/main.jpg'


const MainHeader = () => {
  return (
    <header className="main_header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#100DaysOfWorkOut</h4>
          <h1>Join The Legends Of The Fitness World</h1>
          <p>
             Commit to the challenge. Transform your body, sharpen your mind, and become the strongest version of yourself.
          </p>
          <Link to="/plans" className='btn lg'>Get Started</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="Main Image" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader
