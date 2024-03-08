import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground } from "react-native";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native";
import AppLoading from "expo-app-loading";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import Colors from "./constants/colors";

//views only take up as much space as they need to fit the content inside of them
//you can replicate cascading styles by passing props specifically to the style property
export default function App() {
	const [userNumber, setUserNumber] = useState(null);
	const [gameIsOver, setGameIsOver] = useState(false);
	const [rounds, setRounds] = useState(0);

	const [fontsLoaded] = useFonts({
		"open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
		"open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
	});
	if (!fontsLoaded) {
		return <AppLoading />;
	}
	function pickedNumberHandler(pickedNumber) {
		setUserNumber(pickedNumber);
		setGameIsOver(false);
	}
	let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

	if (userNumber) {
		screen = (
			<GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
		);
	}

	function gameOverHandler(numberOfRounds) {
		setGameIsOver(true);
		setRounds(numberOfRounds);
	}

	function startNewGameHandler() {
		setUserNumber(null);
		setRounds(0);
		setGameIsOver(false);
	}
	if (gameIsOver && userNumber) {
		screen = (
			<GameOverScreen
				userNumber={userNumber}
				rounds={rounds}
				onStartNewGame={startNewGameHandler}
			/>
		);
	}

	return (
		<>
			<StatusBar style="light"></StatusBar>
			<LinearGradient
				colors={[Colors.primary700, Colors.accent500]}
				style={styles.rootScreen}
			>
				<ImageBackground
					source={require("./assets/images/background.png")}
					resizeMode="cover"
					style={styles.rootScreen}
					imageStyle={styles.backgroundImage}
				>
					<SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
				</ImageBackground>
			</LinearGradient>
		</>
	);
}

const styles = StyleSheet.create({
	rootScreen: {
		flex: 1,
	},
	backgroundImage: {
		opacity: 0.15,
	},
});
