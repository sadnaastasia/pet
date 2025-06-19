import { IoInformationCircleOutline } from 'react-icons/io5';
import { RiBook2Line } from 'react-icons/ri';

function AboutMainCourse() {
  return (
    <div className="about-course_container">
      <div className="about-course_content">
        <div className="content_item1">
          <div className="item1_container">
            <div className="item1_video-container">
              <video autoPlay muted loop>
                <source src="../../public/video.mp4" type="video/mp4" />
              </video>
              <button className="item1_button">Try for free</button>
            </div>
          </div>
        </div>
        <div className="content_item2">
          <div className="item2_container">
            <h2>
              We will help <span>you</span> and <span>your clients</span> to get
              out of the cycle
            </h2>
          </div>
          <img src="../../public/cycle.jpg" className="image" alt="" />
        </div>
        <div className="content_item3">
          <button className="item3_button">
            <div className="button_info">
              <IoInformationCircleOutline />
              <span>Learn more about the course</span>
            </div>
          </button>
          <hr />
          <button className="item3_button">
            <div className="button_info">
              <RiBook2Line />
              <span>Check out other courses</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutMainCourse;
