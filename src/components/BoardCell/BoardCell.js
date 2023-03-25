import './BoardCell.css';
import centerIcon from './center-icon.png';
import Flippable from "../Flippable/Flippable";

function BoardCell({ phrase, selected, center }) {
  function renderCenter() {
    return (
      <div className="center-cell">
        <img src={centerIcon} alt="" />
      </div>
    )
  }

  return (
    <div className="boardCell">
      <Flippable
        front={(
          center
            ? renderCenter()
            : (
              <div className="cell-front">
                <div>{phrase}</div>
              </div>
            )
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


