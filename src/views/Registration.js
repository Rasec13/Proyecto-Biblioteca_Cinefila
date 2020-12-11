import React from "react";
import {
	Alert,
	ImageBackground,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";

export default function Registration({ navigation }) {
	const Separator = () => <View style={styles.separator} />;

	function handleOnPressRegistration() {
		Alert.alert(
			"ENHORABUENA",
			"Tu registro ha sido completado. Recibiras un correo para verificar la cuenta"
		);
		navigation.navigate("Login");
	}
	return (
		<ImageBackground
			source={require("../../assets/images/25499.jpg")}
			style={styles.background}
		>
			<View style={styles.Login}>
				<Text style={styles.letra}>Registrate</Text>
				<TextInput
					placeholder={"Enter user"}
					placeholderTextColor={"white"}
					maxLength={8}
					style={styles.cajaTexto}
				/>
				<TextInput
					placeholder={"Enter email"}
					placeholderTextColor={"white"}
					maxLength={20}
					style={styles.cajaTexto}
				/>
				<TextInput
					placeholder={"Enter your password"}
					placeholderTextColor={"white"}
					secureTextEntry={true}
					maxLength={8}
					style={styles.cajaTexto}
				/>
				<TextInput
					placeholder={"Repeat your password"}
					placeholderTextColor={"white"}
					maxLength={8}
					secureTextEntry={true}
					style={styles.cajaTexto}
				/>
				<Separator />
				<TouchableOpacity
					title="login"
					color="#b6b6b6"
					style={styles.loginButtom}
					onPress={handleOnPressRegistration}
				>
					<Text style={styles.submitText}>Registrarse</Text>
				</TouchableOpacity>
				<Separator />
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
