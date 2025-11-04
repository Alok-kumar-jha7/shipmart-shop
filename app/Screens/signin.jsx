import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Controller, useForm } from "react-hook-form";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const loginForm = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const handleSignUpNavigation = () => {
    router.push("/Screens/signup");
  }

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
            <Text className="text-4xl font-poppins-bold text-gray-900 mb-3 mt-14">
              Welcome back
            </Text>

            <Text className="text-gray-500 text-base font-poppins">
              Sign in to your account
            </Text>
          </View>
          {/* Forms */}
          <View className="gap-6 mt-8">
            {/* Email field*/}
            <View className="mt-6">
              <Text className="text-gray-800 text-xl mb-3 font-poppins-semibold">
                Email
              </Text>
              <Controller
                control={loginForm.control}
                name="email"
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <View
                    className={`flex-row items-center bg-gray-50 rounded-xl px-4 py-3 border ${
                      loginForm.formState.errors.email
                        ? "border-red-500"
                        : "border-gray-200"
                    }`}
                  >
                    <MaterialCommunityIcons
                      name="email-outline"
                      size={20}
                      color="#9CA3AF"
                    />

                    <TextInput
                      className="ml-2 flex-1 font-poppins text-gray-900"
                      placeholder="Enter your email"
                      keyboardType="email-address"
                      placeholderTextColor="#9CA3AF"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      // editable={!loginMutaion.isPending}
                    />
                  </View>
                )}
              />
              {loginForm.formState.errors.email && (
                <Text className="text-red-500 text-sm mt-1 font-poppins">
                  {loginForm.formState.errors.email.message}
                </Text>
              )}
            </View>
            {/* Password field */}
            <View className="mt-4">
              <Text className="text-gray-800 text-xl mb-3 font-poppins-semibold">
                Password
              </Text>
              <Controller
                control={loginForm.control}
                name="password"
                rules={{
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <View
                    className={`flex-row items-center bg-gray-50 rounded-xl px-4 py-3 border ${
                      loginForm.formState.errors.password
                        ? "border-red-500"
                        : "border-gray-200"
                    }`}
                  >
                    <MaterialCommunityIcons
                      name="lock-outline"
                      size={20}
                      color="#9CA3AF"
                    />

                    <TextInput
                      className="ml-2 flex-1 font-poppins text-gray-900"
                      placeholder="Enter your password"
                      secureTextEntry={!showPassword}
                      placeholderTextColor="#9CA3AF"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      // editable={!loginMutaion.isPending}
                    />
                    <TouchableOpacity
                      onPress={() => setShowPassword(!showPassword)}
                    >
                      <MaterialCommunityIcons
                        name={showPassword ? "eye-off-outline" : "eye-outline"}
                        size={20}
                        color="#9CA3AF"
                      />
                    </TouchableOpacity>
                  </View>
                )}
              />
              {loginForm.formState.errors.password && (
                <Text className="text-red-500 text-sm mt-1 font-poppins">
                  {loginForm.formState.errors.password.message}
                </Text>
              )}
            </View>
            <TouchableOpacity
              className="self-end mt-2"
              onPress={() => router.push("/forgot-password")}
              // disabled={loginMutation.isPending}
            >
              <Text className="text-blue-600 font-poppins-semibold">
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>

          {/* Submit Button */}
          <TouchableOpacity
            className={`rounded-xl py-4 mt-8 ${
              loginForm.formState.isValid ? "bg-blue-600" : "bg-gray-400"
            }`}
            // onPress={loginForm.handleSubmit(onLoginSubmit)}
            // disabled={!loginForm.formState.isValid || loginMutation.isPending}
          >
            <Text className="text-white text-center text-xl font-poppins-semibold">
              {"Sign In"}
            </Text>
          </TouchableOpacity>

          {/* Divider */}
          <View className="flex-row items-center my-8">
            <View className="flex-1 h-px bg-gray-300" />
            <Text className="mx-4 text-gray-500 font-poppins">
              Or using other method
            </Text>
            <View className="flex-1 h-px bg-gray-300" />
          </View>

          {/* Social Buttons */}
          <View className="space-y-4 mb-8">
            <TouchableOpacity
              className="flex-row items-center justify-center border border-gray-200 rounded-xl bg-white mb-4 py-3"
              //  disabled={loginMutation.isPending}
            >
              <View className="w-6 h-6 mr-3">
                <Image
                  source={{
                    uri: "https://developers.google.com/identity/images/g-logo.png",
                  }}
                  className="w-full h-full"
                  resizeMode="contain"
                />
              </View>
              <Text className="ml-4 text-gray-900 font-poppins-semibold text-lg">
                Continue with Google
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="flex-row items-center justify-center border border-gray-200 rounded-xl bg-white mb-4 py-3"
              //  disabled={loginMutation.isPending}
            >
              <MaterialCommunityIcons
                name="facebook"
                size={25}
                color="#0066ecff"
              />

              <Text className="ml-4 text-gray-900 font-poppins-semibold text-lg">
                Continue with Facebook
              </Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row justify-center mb-8">
            <Text className="text-gray-500 font-poppins">
              Don&apos;t have an account?{"  "}
            </Text>
            <TouchableOpacity
            onPress={handleSignUpNavigation}
            // disabled={loginMutation.isPending}
            >
              <Text className="text-blue-600 font-poppins-semibold">
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
