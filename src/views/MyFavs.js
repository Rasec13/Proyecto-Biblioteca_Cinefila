import React from "react";
import { View, StyleSheet, ImageBackground, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import FilmComponent from "../components/Film/FilmComponent";

export default function MyFavs({ navigation }) {
	return (
		<ImageBackground
			source={require("../../assets/images/25499.jpg")}
			style={styles.background}
		>
			<View style={{ flex: 1 }}>
				<FlatList
					data={FILM_LIST}
					renderItem={({ item }) => (
						<FilmComponent
							film={item}
							onPress={() =>
								navigation.navigate("FavFilmDetail", {
									itemTitle: item.title,
									itemImage: item.cover,
									itemDirector: item.director,
									itemSinop: item.sinopsis,
									itemLike: item.likes,
								})
							}
						/>
					)}
					keyExtractor={(item) => item.id}
				/>
			</View>
		</ImageBackground>
	);
}

const FILM_LIST = [
	{
		id: "1",
		title: "Mulan",
		cover:
			"https://static.wikia.nocookie.net/disney/images/e/e9/Mulan_%282020%2C_Disney%2B_Original_Poster%29.jpg/revision/latest?cb=20200919141917&path-prefix=es",
		director: "Niki Caro",
		sinopsis:
			"El emperador chino emite un decreto que exige que cada hogar debe reclutar a un varón para luchar con el ejército imperial en la guerra contra los Hunos. Para salvar a su anciano padre de este deber, su única hija Fa Mulan se hace pasar por soldado y toma su lugar. La joven se someterá a un duro entrenamiento hasta hacerse merecedora de la estima y de la confianza del resto de su escuadrón.",
		likes: 10,
	},
	{
		id: "2",
		title: "Dora la exploradora",
		cover: "https://es.web.img3.acsta.net/pictures/19/07/15/12/18/0447886.jpg",
		director: "James Bobin",
		sinopsis:
			"Dora se pone al frente de un equipo formado por su amigo peludo Botas; Diego, un misterioso habitante de la jungla; y un desorganizado grupo de adolescentes en una aventura en la que deberán salvar a los padres de Dora y resolver el misterio oculto tras una ciudad perdida de oro.",
		likes: 14,
	},
	{
		id: "3",
		title: "JOKER",
		cover:
			"https://images-na.ssl-images-amazon.com/images/I/71H4EDEfcwL._AC_SL1500_.jpg",
		director: "Todd Phillips",
		sinopsis:
			"La pasión de Arthur Fleck, un hombre ignorado por la sociedad, es hacer reír a la gente. Sin embargo, una serie de trágicos sucesos harán que su visión del mundo se distorsione considerablemente convirtiéndolo en un brillante criminal.",
		likes: 20,
	},
];

const styles = StyleSheet.create({
	background: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "center",
	},
	title: {
		justifyContent: "center",
		alignItems: "center",
		fontSize: 25,
	},
	titleFilm: {
		fontSize: 30,
		alignSelf: "center",
	},
});
