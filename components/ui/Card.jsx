import React from "react";
import { View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

export default function Card({ children }) {
	return <View style={styles.inputContainer}>{children}</View>;
}

const styles = StyleSheet.create({
	inputContainer: {
		justifyContent: "center",
		alignItems: "center",
		marginTop: 36,
		marginHorizontal: 24,
		padding: 16,
		backgroundColor: Colors.primary800,
		borderRadius: 8,
		elevation: 4, //android only
		//shadow property is IOS only
		shadowColor: "black",
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 0.25,
	},
});
