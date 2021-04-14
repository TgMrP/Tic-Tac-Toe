import React, { ReactElement, useState } from "react";
import { SafeAreaView } from "react-native";

import { Board, GradientBackground } from "@components";
import {
  printFormattedBoard,
  BoardState,
  isFull,
  isEmpty,
  getAvailableMoves,
  isTerminal
} from "@utils";

import styles from "./single-player-game.styles";

export default function SinglePlayerGame(): ReactElement {
  // prettier-ignore
  const [state, setState] = useState<BoardState>([
    null, null, null,
    null, null, null,
    null, null, null
  ])

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
