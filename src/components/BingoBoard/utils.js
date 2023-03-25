import {shuffleArray} from "../../utils";

const TABLE_WIDTH = 5;

export function isWin(table, selectedCell) {
  return checkRowWin() || checkColumnWin() || checkDiagonalWin();

  function checkRowWin() {
    const rowCells = [];
    for (let i = 0; i < TABLE_WIDTH; i++) {
      rowCells.push(table[selectedCell[0]][i]);
    }
    return rowCells.every(cell => cell.selected)
  }

  function checkColumnWin() {
    const columnCells = [];
    for (let i = 0; i < TABLE_WIDTH; i++) {
      columnCells.push(table[i][selectedCell[1]]);
    }
    return columnCells.every(cell => cell.selected)
  }

  function checkDiagonalWin() {
    if (selectedCell[0] === selectedCell[1]) {
      const diagonalCells = []
      for (let i = 0; i < TABLE_WIDTH; i++) {
        diagonalCells.push(table[i][i]);
      }
      return diagonalCells.every(cell => cell.selected)
    } else if (selectedCell[0] + selectedCell[1] === TABLE_WIDTH - 1) {
      const diagonalCells = []
      for (let i = 0; i < TABLE_WIDTH; i++) {
        diagonalCells.push(table[i][TABLE_WIDTH - 1 - i]);
      }
      return diagonalCells.every(cell => cell.selected)
    }
    return false;
  }
}

export function toggleTableCell(board, selectedCell) {
  return board.map((row, i) => {
    if (selectedCell[0] === i) {
      return row.map((cell, j) => {
        if (selectedCell[1] === j) {
          return { ...cell, selected: !cell.selected };
        }
        return cell;
      })
    }
    return row;
  })
}

export function getBoardTable() {
  const shuffledPhrases = shuffleArray(getBingoPhrases());
  const finalPhrases = addCenterCell(shuffledPhrases);

  const table = [];
  for (let i = 0; i < TABLE_WIDTH; i++) {
    table[i] = [];
    for (let j = 0; j < TABLE_WIDTH; j++) {
      const isCenterCell = i === Math.floor(TABLE_WIDTH / 2) && j === Math.floor(TABLE_WIDTH / 2);
      table[i][j] = {
        phrase: finalPhrases[i * TABLE_WIDTH + j],
        selected: isCenterCell,
        centered: isCenterCell,
      };
    }
  }

  return table;


  function addCenterCell(phrases) {
    const finalPhrases = []
    for (let i = 0; i < TABLE_WIDTH * TABLE_WIDTH; i++) {
      const tableMidIndex = Math.floor(TABLE_WIDTH * TABLE_WIDTH / 2);
      if (i < tableMidIndex) {
        finalPhrases[i] = phrases[i];
      } else if (i === tableMidIndex) {
        finalPhrases[i] = 'CONF CALL BINGO'
      } else {
        finalPhrases[i] = phrases[i - 1]
      }
    }
    return finalPhrases;
  }
}

function getBingoPhrases() {
  return [
    '(Child noises in the background)',
    'Hello, hello?',
    'I need to jump in another call',
    'can everyone go on mute',
    'could please get closer to the mic',
    '(load painful echo / feedback)',
    'Next slide please',
    'can we take this offline',
    'is ___ on the call',
    'Could you share this slides afterwards?',
    'Can somebody grant presenter rights?',
    'can you email that to everyone?',
    'Sorry I had problems logging in',
    '(animal noises in the background)',
    'Sorry, I didn\'t find the conference id',
    'I was having connection issues',
    'I\'ll have to get back to you',
    'who just joined?',
    'sorry, something ___ with my calendar',
    'do you see my screen?',
    'lets wait for ___!',
    'You will send the minutes?',
    'Sorry, I was on mute',
    'can you repeat please?',
    'Thank you for joining us today',
    'How is everyone?',
    '___ is absent today.',
    'The main objective today is ___',
    'Could you please speak one at a time?',
    'Could you dial in again?',
    'What do you mean by ___',
    'Let me explain that in another way.',
  ]
}