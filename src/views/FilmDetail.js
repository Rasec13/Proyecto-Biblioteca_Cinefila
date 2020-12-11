import React, { useState } from "react";
import {
	View,
	Text,
	ImageBackground,
	StyleSheet,
	Image,
	TouchableOpacity,
	Alert,
} from "react-native";

export default function FilmDetail({ route }) {
	const { itemTitle } = route.params;
	const { itemImage } = route.params;
	const { itemDirector } = route.params;
	const { itemSinop } = route.params;
	const { itemLike } = route.params;
	const [likes, setLikes] = useState(itemLike);
	const [disable, setDisable] = useState(false);
	const [changeButton, setChangeButton] = useState(false);

	function handleDisable() {
		if (!disable) {
			return setDisable(!disable), setLikes(likes + 1);
		}
		return Alert.alert("ATENCION", "Solo puedes dar me gusta 1 vez");
	}
	function handleChangeButton() {
		if (!changeButton) {
			setChangeButton(!changeButton);
			return Alert.alert("FAVORITOS", "Añadido a tu lista de favoritos");
		} else {
			setChangeButton(!changeButton);
			return Alert.alert("FAVORITOS", "Eliminado de tu lista de favoritos");
		}
	}
	return (
		<ImageBackground
			source={require("../../assets/images/25499.jpg")}
			style={styles.background}
			imageStyle={{ opacity: 0.9 }}
		>
			<View style={styles.pageFilm}>
				<Text style={styles.titleText}> {itemTitle}</Text>
				<Image style={styles.coverImage} source={{ uri: itemImage }} />
				<Text />
				<Text style={styles.fontSize}>Director: {itemDirector} </Text>
				<Text />
				<Text style={{ fontSize: 25 }}>Argumento:</Text>
				<Text />
				<Text style={styles.sinopsisText}>{itemSinop}</Text>
			</View>
			<View style={styles.buttonsFilm}>
				<TouchableOpacity
					style={styles.buttonLike}
					onPress={handleDisable}
					disabled={disable}
				>
					<Text style={styles.likeText}>Like</Text>
				</TouchableOpacity>
				<Text style={styles.numberLikes}>{likes}</Text>
				<TouchableOpacity style={styles.buttonFav} onPress={handleChangeButton}>
					{!changeButton ? (
						<Text style={styles.favText}>Añadir a favoritos</Text>
					) : (
						<Text style={styles.favText}>Quitar de favoritos</Text>
					)}
				</TouchableOpacity>
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		resizeMode: "cover",
		opacity: 1,
	},
	pageFilm: {
		justifyContent: "center",
		alignItems: "center",
	},
	coverImage: {
		marginTop: 30,
		width: "35%",
		height: "40%",
	},
	titleText: {
		marginTop: 30,
		marginLeft: 20,
		fontSize: 40,
	},
	sinopsisText: {
		margin: 20,
		fontSize: 20,
	},
	fontSize: {
		fontSize: 20,
	},
	buttonsFilm: {
		margin: 20,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	buttonLike: {
		paddingHorizontal: 14,
		height: 40,
		width: 100,
		borderWidth: 1,
		borderRadius: 10,
		borderColor: "white",
		backgroundColor: "#b6b6b6",
	},
	likeText: {
		color: "white",
		justifyContent: "center",
		textAlign: "center",
		fontSize: 25,
	},
	buttonFav: {
		height: 40,
		width: 200,
		borderWidth: 1,
		borderRadius: 10,
		borderColor: "white",
		backgroundColor: "#b6b6b6",
	},
	favText: {
		color: "white",
		justifyContent: "center",
		textAlign: "center",
		fontSize: 23,
	},
	numberLikes: {
		fontSize: 25,
		color: "white",
		justifyContent: "center",
		textAlign: "center",
		marginRight: 150,
	},
});
