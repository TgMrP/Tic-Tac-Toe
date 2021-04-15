import React, { ReactElement, useEffect, useState } from "react";
import { SafeAreaView } from "react-native";

import { Board, GradientBackground } from "@components";
import { BoardState, isTerminal, getBestMove, isEmpty, Cell, UseSounds } from "@utils";

import styles from "./single-player-game.styles";

export default function SinglePlayerGame(): ReactElement {
  // prettier-ignore
  const [state, setState] = useState<BoardState>([
    null, null, null,
    null, null, null,
    null, null, null
  ])

  const [turn, setTurn] = useState<"HUMAN" | "BOT">(Math.random() < 0.5 ? "HUMAN" : "BOT");
  const [isHumanMaximizing, setIsHumanMaximizing] = useState<boolean>(true);
  const playSound = UseSounds();

  const gameResult = isTerminal(state);

  const insertCell = (cell: number, symbol: "x" | "o"): void => {
    const stateCopy: BoardState = [...state];
    if (stateCopy[cell] || isTerminal(stateCopy)) return;
    stateCopy[cell] = symbol;
    setState(stateCopy);
    symbol === "x" ? playSound("pop1") : playSound("pop2");
  };

  const handleOnCellPressed = (cell: number): void => {
    if (turn !== "HUMAN") return;
    insertCell(cell, isHumanMaximizing ? "x" : "o");
    setTurn("BOT");
  };

  const getWinner = (winnerSymbol: Cell): "HUMAN" | "BOT" | "DRAW" => {
    if (winnerSymbol === "x") {
      return isHumanMaximizing ? "HUMAN" : "BOT";
    } else if (winnerSymbol === "o") {
      return isHumanMaximizing ? "BOT" : "HUMAN";
    } else {
      return "DRAW";
    }
  };

  useEffect(() => {
    if (gameResult) {
      //handle game finished
      const winner = getWinner(gameResult.winner);
      if (winner === "HUMAN") {
        playSound("win");
      } else if (winner === "BOT") {
        playSound("loss");
      } else {
        playSound("draw");
      }
    } else {
      if (turn === "BOT") {
        if (isEmpty(state)) {
          const centerAndCorners = [0, 2, 6, 8, 4];
          const firstMove = centerAndCorners[Math.floor(Math.random() * centerAndCorners.length)];
          insertCell(firstMove, "x");
          setIsHumanMaximizing(false);
          setTurn("HUMAN");
        } else {
          const bestMove = getBestMove(state, !isHumanMaximizing, 0, -1);
          insertCell(bestMove, isHumanMaximizing ? "o" : "x");
          setTurn("HUMAN");
        }
      }
    }
  }, [state, turn]);

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <Board
          disabled={Boolean(isTerminal(state)) || turn !== "HUMAN"}
          onCellPressed={cell => {
            handleOnCellPressed(cell);
          }}
          state={state}
          gameResult={gameResult}
          size={300}
        />
      </SafeAreaView>
    </GradientBackground>
  );
}
