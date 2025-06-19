import { beckoningInfo_button, impactScroll } from '../data/data';

function BeckoningInfo() {
  return (
    <div className="beckoning-info">
      <div className="beckoning-info_vertical-marquee">
        <ul className="beckoning-info_vertical-track">
          {impactScroll.map((elem) => (
            <li key={elem.id} style={{ color: elem.style }}>
              {elem.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="beckoning-info_medium-text">in your life</div>
      <div className="beckoning-info_small-text">
        Today is the best time to start
      </div>
      <div className="beckoning-info_articles">
        {beckoningInfo_button.map((elem) => (
          <button className={elem.class} key={elem.id}>
            {elem.title}
          </button>
        ))}
      </div>
    </div>
  );
}

export default BeckoningInfo;
