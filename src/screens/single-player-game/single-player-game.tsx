import React, { ReactElement, useState } from "react";
import { SafeAreaView } from "react-native";

import { Board, GradientBackground } from "@components";
import { printFormattedBoard, BoardState, isFull, isEmpty, getAvailableMoves, isTerminal, getBestMove } from "@utils";

import styles from "./single-player-game.styles";

export default function SinglePlayerGame(): ReactElement {
  // prettier-ignore
  const [state, setState] = useState<BoardState>([
    null, "x", null,
    "o", null, "x",
    "o", "o", "x"
  ])
  const bestMove = getBestMove(state, true);
  console.log("getBestMove", bestMove);

  const handleOnCellPressed = (cell: number): void => {
    const stateCopy: BoardState = [...state];
    if (stateCopy[cell] || isTerminal(stateCopy)) return;
    stateCopy[cell] = "x";
    setState(stateCopy);
  };

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <Board
          disabled={Boolean(isTerminal(state))}
          onCellPressed={cell => {
            handleOnCellPressed(cell);
          }}
          state={state}
          size={300}
        />
      </SafeAreaView>
    </GradientBackground>
  );
}
