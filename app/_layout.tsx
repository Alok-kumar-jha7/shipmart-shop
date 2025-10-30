import { ThemeProvider, DefaultTheme } from "@react-navigation/native";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import "./global.css";
import { useColorScheme } from "react-native";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  useFonts({
    "outfit-bold": require("../assets/font/Outfit-Bold.ttf"),
    outfit: require("../assets/font/Outfit-Regular.ttf"),
  });

  return (
    <ThemeProvider value={colorScheme === "dark" ? DefaultTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(Screens)/login" />
      </Stack>
    </ThemeProvider>
  );
}
