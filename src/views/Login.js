import React, { useState } from "react";
import {
	View,
	Text,
	ImageBackground,
	StyleSheet,
	Image,
	Alert,
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

export default function Login({ navigation }) {
	const [user, setUser] = useState({
		username: "",
		password: "",
	});
	const LOCAL_USER = {
		id: 1,
		username: "user",
		password: "123",
	};
	const Separator = () => <View style={styles.separator} />;

	function onLogin() {
		console.log(`Username: ${user.username} / Password: ${user.password}`);
		if (
			user.username === LOCAL_USER.username &&
			user.password === LOCAL_USER.password
		) {
			navigation.navigate("Home");
		} else {
			Alert.alert("Contraseña o usuario incorrectos");
		}
	}
	function handleOnPressRegistration() {
		navigation.navigate("Registration");
	}
	return (
		<ImageBackground
			source={require("../../assets/images/25499.jpg")}
			style={styles.background}
		>
			<View style={styles.Login}>
				<Image
					style={styles.logo}
					source={require("../../assets/images/pngwing.com.png")}
				/>
				<Text style={styles.letra}>LOGIN</Text>
				<TextInput
					placeholder={"Enter user"}
					placeholderTextColor={"white"}
					maxLength={8}
					style={styles.cajaTexto}
					onChangeText={(event) => setUser({ ...user, username: event })}
				/>
				<TextInput
					placeholder={"Enter your password"}
					placeholderTextColor={"white"}
					maxLength={8}
					style={styles.cajaTexto}
					onChangeText={(event) => setUser({ ...user, password: event })}
				/>
				<Separator />
				<TouchableOpacity
					title="login"
					color="#b6b6b6"
					style={styles.loginButtom}
					onPress={onLogin}
				>
					<Text style={styles.submitText}>Log in</Text>
				</TouchableOpacity>
				<Separator />
				<View style={styles.viewRegistro}>
					<Text style={styles.letraRegistro}>
						¿No tienes una cuenta todavia?Registrate
					</Text>
					<TouchableOpacity onPress={handleOnPressRegistration}>
						<Text style={styles.letraRegistroEnlace}> aqui</Text>
					</TouchableOpacity>
				</View>
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	Login: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		paddingTop: Platform.OS === "android" ? 25 : 0,
	},
	background: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "center",
	},
	cajaTexto: {
		borderWidth: 1,
		borderColor: "white",
		padding: 5,
		marginTop: 10,
		color: "white",
		width: 250,
	},
	separator: {
		marginVertical: 6,
	},
	loginButtom: {
		height: 40,
		width: 250,
		borderWidth: 1,
		borderRadius: 10,
		borderColor: "white",
		backgroundColor: "#b6b6b6",
	},
	submitText: {
		color: "white",
		justifyContent: "center",
		textAlign: "center",
		fontSize: 25,
	},
	letra: {
		color: "white",
		fontWeight: "bold",
		fontSize: 25,
	},
	logo: {
		justifyContent: "center",
		alignItems: "center",
		width: 300,
		height: 300,
		marginBottom: 60,
	},
	letraRegistro: {
		color: "white",
		fontWeight: "bold",
	},
	letraRegistroEnlace: {
		color: "#00C1DF",
		fontWeight: "bold",
	},
	viewRegistro: {
		flexDirection: "row",
	},
});
