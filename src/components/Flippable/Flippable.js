import './Flippable.css';

function Flippable({ front, back, flipped }) {
  return (
    <div className={`flip-card ${flipped ? 'flipped' : ''}`}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          { front }
        </div>
        <div className="flip-card-back">
          { back }
        </div>
      </div>
    </div>
  );
}

export default Flippable;


