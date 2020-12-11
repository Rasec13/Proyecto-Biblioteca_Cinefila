import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableHighlight } from "react-native-gesture-handler";

export default function FilmComponentItem({ film, onPress }) {
	return (
		<TouchableHighlight onPress={onPress}>
			<View style={styles.container}>
				<Image source={{ uri: film.cover }} style={styles.image} />
				<Text style={styles.textContainer}>{film.title}</Text>
				<AntDesign name="infocirlceo" style={styles.icon} size={33} />
			</View>
		</TouchableHighlight>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		paddingVertical: 15,
		paddingLeft: 15,
		borderBottomWidth: 1,
		borderBottomColor: "#969696",
	},
	image: {
		width: 50,
		height: 50,
		marginRight: 10,
	},
	icon: {
		color: "#000000",
		marginLeft: "auto",
		paddingRight: 15,
	},
	textContainer: {
		justifyContent: "center",
		alignItems: "center",
		fontWeight: "bold",
		fontSize: 18,
	},
});
