import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Controller, useForm } from "react-hook-form";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Login() {
const loginForm = useForm({
  mode: "onChange",
  defaultValues: {
    email: "",
    password: "",
  },
});

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
          <View class="mt-25 mb-8">
            <Text className="text-4xl font-poppins-bold text-gray-900 mb-2">Welcome back</Text>

            <Text className="text-gray-500 text-base font-poppins">Sign in to your account</Text>
          </View>
          <View className="gap-6 mt-8">
            <View className="mt-6">
              <Text className="text-gray-800 text-xl mb-3 font-poppins-semibold">Email</Text>
              <Controller control={loginForm.control}
                name="email"
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  }
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <View className={`flex-row items-center bg-gray-50 rounded-xl px-4 py-4 border ${loginForm.formState.errors.email ? 'border-red-500' : 'border-gray-200'}`}>
                    <MaterialCommunityIcons name="email-outline" size={20} color="#9CA3AF" />
                    <TextInput
                      className="ml-3 flex-1 font-poppins text-gray-900"
                      placeholder="Enter your email"
                      keyboardType="email-address"
                      placeholderTextColor="#9CA3AF"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      // editable={!loginMutaion.isPending}
                    />
                    {loginForm.formState.errors.email && (
                      <Text className="text-red-500 text-sm mt-1 font-poppins">{loginForm.formState.errors.email.message}</Text>
                    )}
                  </View>
                )}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
