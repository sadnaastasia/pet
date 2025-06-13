function AboutMainCourse() {
  return (
    <div className="aboutMainCourse_container">
      <div className="aboutMainCourse-banner">
        <div className="aboutMainCourse-banner_item1">
          <div className="aboutMainCourse-banner_item1_background">
            <div className="aboutMainCourse-banner_item1_videoContainer">
              <video autoPlay muted loop>
                <source src="../../public/video.mp4" type="video/mp4" />
              </video>
              <button className="aboutMainCourse_button">Try for free</button>
            </div>
          </div>
        </div>
        <div className="aboutMainCourse-banner_item2"></div>
        <div className="aboutMainCourse-banner_item3"></div>
        <div className="aboutMainCourse-banner_item4"></div>
      </div>
    </div>
  );
}

export default AboutMainCourse;
