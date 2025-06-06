import { beckoningInfo_button, impactScroll } from '../data/data';

function BeckoningInfo() {
  return (
    <div className="beckoningInfo">
      <div className="verticalMarquee">
        <ul className="verticalTrack">
          {impactScroll.map((elem) => (
            <li key={elem.id} style={{ color: elem.style }}>
              {elem.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="blockWithMarquee_mediumText">in your life</div>
      <div className="blockWithMarquee_smallText">
        Today is the best time to start
      </div>
      <div className="beckoningInfo_moreInfo">
        {beckoningInfo_button.map((elem) => (
          <button
            className={elem.class}
            key={elem.id}
            style={{ backgroundImage: elem.style }}
          >
            {elem.title}
          </button>
        ))}
      </div>
    </div>
  );
}

export default BeckoningInfo;
