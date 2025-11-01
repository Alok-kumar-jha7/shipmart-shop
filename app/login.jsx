import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView
          className="flex-1 px-6"
          showsHorizontalScrollIndicator={false}
        >
          <View class="mt-20 mb-8">
            <Text className="text-4xl text-gray-900 mb-2">Welcome back</Text>

            <Text className="text-gray-500 text-base font-poppins">Sign in to your account</Text>
          </View>
          <View className="gap-6 mt-8">
            <View className="mt-6">
              <Text className="text-gray-900 text-base mb-3 font-poppins-medium ">Email</Text>
          </View>
          </View>
          
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
