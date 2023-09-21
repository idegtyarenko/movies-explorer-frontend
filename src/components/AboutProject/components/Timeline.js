import "./Timeline.css";

export default function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline__segment">
        <p className="timeline__bar timeline__bar_highlighted">1 неделя</p>
        <p className="timeline__caption">Back-end</p>
      </div>
      <div className="timeline__segment">
        <p className="timeline__bar">4 недели</p>
        <p className="timeline__caption">Front-end</p>
      </div>
    </div>
  );
}
