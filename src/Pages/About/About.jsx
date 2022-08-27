import "./about.css";
import AboutHeaderImage from "../../images/header_bg_1.jpg";
import Header from "../../Components/Header";
import OurStoryImage from '../../images/about1.jpg'
import OurVisionImage from '../../images/about2.jpg'
import OurMissionImage from '../../images/about3.jpg'
function About() {
  return (
    <>
      <Header title={"About Us"} image={AboutHeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In aliquid
        officia quia adipisci ipsam dolore facilis laborum qui porro nobis?
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={OurStoryImage} alt="Our Story img" />
          </div>
          <div className="about__section-content">
            <h1>
              Our Story
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aspernatur harum blanditiis debitis earum asperiores eveniet nobis beatae ea rerum veritatis, quisquam consequuntur, quia eaque?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laudantium nesciunt possimus cumque et eius officiis doloribus adipisci beatae aperiam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ex nulla incidunt, quae eaque magni!
            </p>
          </div>
        </div>
      </section>


      <section className="about__story">
        <div className="container about__vision-container">

          <div className="about__section-content">
            <h1>
              Our Vision
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aspernatur harum blanditiis debitis earum asperiores eveniet nobis beatae ea rerum veritatis, quisquam consequuntur, quia eaque?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laudantium nesciunt possimus cumque et eius officiis doloribus adipisci beatae aperiam.
            </p>
            
          </div>
          <div className="about__section-image">
            <img src={OurVisionImage} alt="Our Vision img" />
          </div>
        </div>
      </section>

      <section className="about__story">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={OurMissionImage} alt="Our Vision img" />
          </div>
          <div className="about__section-content">
            <h1>
              Our Mission
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aspernatur harum blanditiis debitis earum asperiores eveniet nobis beatae ea rerum veritatis, quisquam consequuntur, quia eaque?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laudantium nesciunt possimus cumque et eius officiis doloribus adipisci beatae aperiam.
            </p>
            
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
