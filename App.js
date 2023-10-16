/* eslint-disable prettier/prettier */

import { Lato_400Regular, Lato_900Black, useFonts as useLato } from "@expo-google-fonts/lato";
import { Oswald_400Regular, useFonts as useOswald } from "@expo-google-fonts/oswald";

import { AuthContextProvider } from "./src/services/authentication/authentication.context";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { Navigation } from "./src/infrastructure/navigation";
import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";

/* eslint-disable prettier/prettier */

export default function App() {
	const [oswaldLoaded] = useOswald({
		Oswald_400Regular,
	});

	const [latoLoaded] = useLato({
		Lato_400Regular,
		Lato_900Black,
	});

	if (!oswaldLoaded || !latoLoaded) {
		return null;
	}

	return (
		<>
			<ThemeProvider theme={theme}>
				<AuthContextProvider>
					<Navigation />
				</AuthContextProvider>
			</ThemeProvider>
			<ExpoStatusBar style="auto" />
		</>
	);
}
