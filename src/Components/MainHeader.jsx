import {Link} from 'react-router-dom';

import HeaderImage from '../images/main_header.png';

function MainHeader() {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#100DaysOfFitness</h4>
          <h1>Join The Legends of the Fitness</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magnam beatae, ipsam modi totam similique.
          </p>
          <Link to='/plans' className='btn lg'>Get Started</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={HeaderImage} alt="Header" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader
