import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import FilmDetail from "./src/views/FilmDetail";
import Login from "./src/views/Login";
import Feed from "./src/views/Feed";
import Profile from "./src/views/Profile";
import Registration from "./src/views/Registration";
import MyFavs from "./src/views/MyFavs";
import FavFilmDetail from "./src/views/FavFilmDetail";

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			{/* diferentes pantallas por la que se mueve el stack navigator */}
			<Stack.Navigator initialRouteName="Login">
				<Stack.Screen
					options={{ headerShown: false }}
					name="Login"
					component={Login}
				/>
				<Stack.Screen
					name="Home"
					component={Home}
					options={{ headerTitle: "" }}
				/>
				<Stack.Screen
					name="FilmDetail"
					component={FilmDetail}
					options={{ headerTitle: "Detalles" }}
				/>
				<Stack.Screen
					name="FavFilmDetail"
					component={FavFilmDetail}
					options={{ headerTitle: "Detalles" }}
				/>
				<Stack.Screen
					name="Registration"
					component={Registration}
					options={{ headerTitle: "Registro" }}
				/>
				<Stack.Screen
					name="MyFavs"
					component={MyFavs}
					options={{ headerTitle: "Mis peliculas favoritas" }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const Tab = createBottomTabNavigator();

function Home() {
	return (
		// diferentes pantallas por las que se mueve el tab navigator
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;
					// aqui se elige que icono y que ruta determina al pulsar mediante un condicional
					if (route.name === "Feed") {
						iconName = focused
							? "ios-information-circle"
							: "ios-information-circle-outline";
					} else if (route.name === "Perfil") {
						iconName = focused ? "ios-list-box" : "ios-list";
					}

					// y en este componente retorna que es lo que ha sido pulsado
					return <Ionicons name={iconName} size={size} color={color} />;
				},
			})}
			tabBarOptions={{
				activeTintColor: "#00ABCD",
				inactiveTintColor: "grey",
			}}
		>
			<Tab.Screen name="Feed" component={Feed} />
			<Tab.Screen
				name="Perfil"
				component={Profile}
				options={{ headerShown: false }}
			/>
		</Tab.Navigator>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
