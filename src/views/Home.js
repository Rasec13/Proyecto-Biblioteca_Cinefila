import React from "react";

export default function Home() {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;

					if (route.name === "Home") {
						iconName = focused
							? "ios-information-circle"
							: "ios-information-circle-outline";
					} else if (route.name === "Settings") {
						iconName = focused ? "ios-list-box" : "ios-list";
					}

					// You can return any component that you like here!
					return <Ionicons name={iconName} size={size} color={color} />;
				},
			})}
			tabBarOptions={{
				activeTintColor: "#00ABCD",
				inactiveTintColor: "grey",
			}}
		>
			<Tab.Screen name="Feed" component={Feed} />
			<Tab.Screen name="Perfil" component={Profile} />
		</Tab.Navigator>
	);
}
