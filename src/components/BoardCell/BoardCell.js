import './BoardCell.css';
import Flippable from "../Flippable/Flippable";

function BoardCell({ phrase, selected }) {
  return (
    <div className="boardCell">
      <Flippable
        front={(
          <div className="cell-front">
            <div>{phrase}</div>
          </div>
        )}
        back={(
          <div className="cell-back">
            <div>Bingo</div>
          </div>
        )}
        flipped={selected}
      />
    </div>
  );
}

export default BoardCell;


