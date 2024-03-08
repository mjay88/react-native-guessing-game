import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
import Colors from "../../constants/colors";

export default function Title({ children }) {
	return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
	title: {
		fontFamily: "open-sans-bold",
		fontSize: 24,
		color: "white",
		textAlign: "center",
		// borderWidth: Platform.OS === "android" ? 2 : 0,
		// borderWidth: Platform.select({ ios: 0, android: 2 }),
		borderWidth: 2,
		borderColor: Colors.accent500,
		padding: 12,
		//use max and min to create more responsive sizes (doesn't cascade), precentage setting always refer to the parent container, 80% of the space taken up by the parent container
		maxWidth: "80%",
		width: 300,
	},
});
