import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	ImageBackground,
	Button,
} from "react-native";

const Separator = () => <View style={styles.separator} />;

export default function Profile({ navigation }) {
	function handleOnPress() {
		navigation.navigate("MyFavs");
	}
	return (
		<ImageBackground
			source={require("../../assets/images/25499.jpg")}
			style={styles.background}
		>
			<View style={styles.container}>
				<View style={styles.header}></View>
				<Image
					style={styles.avatar}
					source={require("../../assets/images/perfil.png")}
				/>
				<Separator />
				<View style={styles.body}>
					<View style={styles.bodyContent}>
						<Text style={styles.name}>John Doe</Text>
						<Separator />
						{/* Descripcion del usuario */}
						<Text style={styles.description}>
							Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum
							electram expetendis, omittam deseruisse consequuntur ius an
						</Text>
						{/*  */}
						<Separator />
						<TouchableOpacity
							style={styles.buttonContainer}
							onPress={handleOnPress}
						>
							<Text>Mis Favoritos</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	header: {
		height: 200,
	},
	avatar: {
		width: 130,
		height: 130,
		borderRadius: 63,
		borderWidth: 4,
		borderColor: "white",
		marginBottom: 10,
		alignSelf: "center",
		position: "absolute",
		marginTop: 130,
	},
	name: {
		fontSize: 22,
		color: "#FFFFFF",
		fontWeight: "600",
	},
	body: {
		marginTop: 40,
	},
	bodyContent: {
		flex: 1,
		alignItems: "center",
		padding: 30,
	},
	name: {
		fontSize: 28,
		color: "white",
		fontWeight: "600",
	},
	info: {
		fontSize: 18,
		color: "#6900ba",
		marginTop: 10,
	},
	description: {
		fontSize: 16,
		color: "white",
		marginTop: 10,
		textAlign: "center",
	},
	buttonContainer: {
		marginTop: 10,
		height: 45,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 20,
		width: 250,
		borderRadius: 30,
		backgroundColor: "#b6b6b6",
	},
	background: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "center",
	},
	container: {
		flex: 1,
	},
	separator: {
		marginVertical: 20,
	},
});
