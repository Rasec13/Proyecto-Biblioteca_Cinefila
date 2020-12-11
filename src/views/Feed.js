import React from "react";
import { View, StyleSheet, ImageBackground, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import FilmComponent from "../components/Film/FilmComponent";

export default function Home({ navigation }) {
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
								navigation.navigate("FilmDetail", {
									itemTitle: item.title,
									itemImage: item.cover,
									itemDirector: item.director,
									itemSinop: item.sinopsis,
									itemLike: item.likes,
								})
							}
						/>
					)}
					ListHeaderComponent={
						<Text style={styles.titleFilm}>Lista de Peliculas</Text>
					}
					keyExtractor={(item) => item.id}
				/>
			</View>
		</ImageBackground>
	);
}

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
	{
		id: "4",
		title: "Titanic",
		cover:
			"https://es.web.img3.acsta.net/medias/nmedia/18/86/91/41/19870073.jpg",
		director: "Todd Phillips",
		sinopsis:
			"Una joven de la alta sociedad abandona a su arrogante pretendiente por un artista humilde en el trasatlántico que se hundió durante su viaje inaugural.",
		likes: 30,
	},
	{
		id: "5",
		title: "Avengers",
		cover:
			"https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2019/07/vengadores-preludio-avengers-preludio.jpg?itok=a2HTN66U",
		director: "Joss Whedon",
		sinopsis:
			"El director de la Agencia SHIELD decide reclutar a un equipo para salvar al mundo de un desastre casi seguro cuando un enemigo inesperado surge como una gran amenaza para la seguridad mundial.",
		likes: 30,
	},
	{
		id: "6",
		title: "Avengers:Age of Ultron",
		cover:
			"https://i.pinimg.com/originals/5c/9f/51/5c9f51e530debde142e843d264597a6d.jpg",
		director: "Joss Whedon",
		sinopsis:
			"Los Vengadores se reúnen de nuevo y juntan sus fuerzas con las de los recién llegados Quicksilver y Bruja Escarlata para luchar contra un robot maquiavélico llamado Ultrón, el cual Tony Stark creó con el fin de defender la paz, pero resultó defectuoso y ahora pretende exterminar a toda la humanidad.",
		likes: 35,
	},
	{
		id: "7",
		title: "Infinity War",
		cover:
			"https://2.bp.blogspot.com/-zceUJm6reNk/WuJLSilN1QI/AAAAAAAALNc/xBY5K8KPMyAw8MBrBAaTZ4_RpRqMwFrKACLcBGAs/s1600/avengers-infinity-war-imax.jpg",
		director: "Joe Russo, Anthony Russo",
		sinopsis:
			"Los superhéroes se alían para vencer al poderoso Thanos, el peor enemigo al que se han enfrentado. Si Thanos logra reunir las seis gemas del infinito: poder, tiempo, alma, realidad, mente y espacio, nadie podrá detenerlo.",
		likes: 40,
	},
];
