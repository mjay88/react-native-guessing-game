import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";

export default function Card({ children }) {
	return <View style={styles.inputContainer}>{children}</View>;
}

const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
	inputContainer: {
		justifyContent: "center",
		alignItems: "center",
		marginTop: deviceWidth < 380 ? 18 : 36,
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
