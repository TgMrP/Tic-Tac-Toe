import React, { ReactElement } from "react";
import { ScrollView, View, TouchableOpacity, Switch } from "react-native";
import { GradientBackground, Text } from "@components";

import styles from "./settings.styles";
import { colors } from "@utils";

export default function settings(): ReactElement | null {
  return (
    <GradientBackground>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.label}>Bot Difficulty</Text>
      </ScrollView>
    </GradientBackground>
  );
}
