/* eslint-disable prettier/prettier */

import App from "./App";
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";

if (module.hot) {
	module.hot.accept();
}
AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, {
	initialProps: {},
	rootTag: document.getElementById("app-root"),
});
