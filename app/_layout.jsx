import { ThemeProvider, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import "../global.css";
import { useColorScheme } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Providers from "../config/providers";


export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [fontsLoaded] = useFonts({
    "outfit-bold": require("../assets/font/Outfit-Bold.ttf"),
    "outfit": require("../assets/font/Outfit-Regular.ttf"),
    SpaceMono: require("../assets/font/SpaceMono-Regular.ttf"),
    "inter-regular": require("../assets/font/Inter_28pt-Regular.ttf"),
    "inter-semibold": require("../assets/font/Inter_28pt-SemiBold.ttf"),
    "inter-bold": require("../assets/font/Inter_28pt-Bold.ttf"),
    "Poppins-Medium": require("../assets/font/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/font/Poppins-Regular.ttf"),
    "Poppins-bold": require("../assets/font/Poppins-Bold.ttf"),
    "Poppins-SemiBold": require("../assets/font/Poppins-SemiBold.ttf"),
    "Raleway": require("../assets/font/Raleway-Regular.ttf"),

  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <GestureHandlerRootView>
        <Providers>
      <Stack screenOptions={{ headerShown: false }}>
         <Stack.Screen name="index"/>
        <Stack.Screen name="login"/>
        </Stack>

          <StatusBar style="auto" />
          </Providers>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
