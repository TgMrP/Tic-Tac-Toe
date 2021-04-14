import React, { ReactElement } from "react";
import { Text, Button, ScrollView } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "@config/navigator";

import styles from "./home.styles";
import { GradientBackground } from "@components";

type HomeProps = {
    navigation: StackNavigationProp<StackNavigatorParams, "Home">;
};

export default function Home({ navigation }: HomeProps): ReactElement {
    return (
        <GradientBackground>
            <ScrollView contentContainerStyle={styles.container}>
                <Text>Home</Text>
                <Button
                    title="Game"
                    onPress={() => {
                        navigation.navigate("Game", { gameId: "1" });
                    }}
                />
            </ScrollView>
        </GradientBackground>
    );
}
