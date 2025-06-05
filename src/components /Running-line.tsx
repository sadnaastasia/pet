import runningLineArray from '../data/Running-line_data';
import { useMemo } from 'react';

function RunningLine() {
  const contentElement = useMemo(() => {
    return runningLineArray.map((elem) => (
      <li key={elem.id} className="content_element">
        <div className="content_element_pic">{elem.icon}</div>
        {elem.title}
      </li>
    ));
  }, []);
  return (
    <div className="running-line">
      <div className="running-line_minor">Why CBT?</div>
      <hr />
      <div className="marquee">
        <div className="track">
          <ul className="content">{contentElement}</ul>
          <ul className="content">{contentElement}</ul>
          <ul className="content">{contentElement}</ul>
        </div>
      </div>
    </div>
  );
}

export default RunningLine;
