import React, { ReactElement } from "react";
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
  const b: BoardState = [
    "o", "x", "x",
    "x", "o", "o",
    "o", "o", "x"
  ];
  printFormattedBoard(b);
  // console.log(isEmpty(b));
  // console.log(isFull(b));
  // console.log(getAvailableMoves(b));
  console.log(isTerminal(b));

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <Board
          onCellPressed={index => {
            alert(index);
          }}
          state={b}
          size={300}
        />
      </SafeAreaView>
    </GradientBackground>
  );
}
