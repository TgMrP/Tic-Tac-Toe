import React, { ReactElement } from "react";
import { ScrollView, Image, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "@config/navigator";
import { Button } from "@components";
import styles from "./home.styles";
import { GradientBackground } from "@components";

type HomeProps = {
  navigation: StackNavigationProp<StackNavigatorParams, "Home">;
};

export default function Home({ navigation }: HomeProps): ReactElement {
  return (
    <GradientBackground>
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={require("@assets/Logo.png")} style={styles.logo} />
        <View style={styles.buttons}>
          <Button style={styles.button} title="Single Player" onPress={() => navigation.navigate("SinglePlayerGame")} />
          <Button style={styles.button} title="Multiplayer" />
          <Button style={styles.button} title="Login" />
          <Button style={styles.button} title="Settings" onPress={() => navigation.navigate("Settings")} />
        </View>
      </ScrollView>
    </GradientBackground>
  );
}
