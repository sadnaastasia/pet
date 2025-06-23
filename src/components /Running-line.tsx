import { runningLineArray } from '../data/data';

function RunningLine() {
  const contentElement = runningLineArray.map((elem) => (
    <li key={elem.id} className="content_element">
      <div className="element_pic">{elem.icon}</div>
      {elem.title}
    </li>
  ));
  return (
    <div className="running-line">
      <div className="running-line_text">Why CBT?</div>
      <hr />
      <div className="running-line_marquee">
        <div className="running-line_track">
          <ul className="track_content">{contentElement}</ul>
          <ul className="track_content">{contentElement}</ul>
          <ul className="track_content">{contentElement}</ul>
        </div>
      </div>
    </div>
  );
}

export default RunningLine;
