import { Link } from 'react-router';

function MainCourse() {
  return (
    <div className="main-course">
      <h1>
        Theory and Practice of Cognitive-Behavioral Therapy: a clinical course
        with pre-accreditation status
      </h1>
      <div className="main-course_buttons">
        <button className="main-course_buttons_white">Get started</button>
        <Link className="no-underline" to="/maincourse">
          <button className="main-course_buttons_blur">More info</button>
        </Link>
      </div>
    </div>
  );
}

export default MainCourse;
