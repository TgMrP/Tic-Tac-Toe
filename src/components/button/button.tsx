import React, { ReactElement } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Text } from "@components";

import styles from "./button.style";

type ButtonProps = {
  title: string;
} & TouchableOpacityProps;

export default function Button({ title, style, ...props }: ButtonProps): ReactElement {
  return (
    <TouchableOpacity {...props} style={[styles.container, style]}>
      <Text style={styles.button}>{title}</Text>
    </TouchableOpacity>
  );
}
