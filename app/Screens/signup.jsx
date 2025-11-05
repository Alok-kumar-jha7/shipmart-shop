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
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const signupForm = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const handleSignInNavigation = () => {
    router.push("/Screens/signin");
  };

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
            <Text className="text-4xl font-poppins-bold text-gray-900 mb-3 mt-14">
              Create an account
            </Text>

            <Text className="text-gray-500 text-base font-poppins">
              Shop Smart. Live Better.
            </Text>
          </View>
          {/* Forms */}
          <View className="mb-4 mt-6">
            {/* Name field */}
            <View className="mt-6 mb-0">
              <Text className="text-gray-800 text-xl mb-3 font-poppins-semibold">
                Name
              </Text>
              <Controller
                control={signupForm.control}
                name="name"
                rules={{
                  required: "Name is required",
                  minLength: {
                    value: 4,
                    message: "Name must be at least 4 characters",
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <View
                    className={`flex-row items-center bg-gray-50 rounded-xl px-4 py-3 border ${
                      signupForm.formState.errors.name
                        ? "border-red-500"
                        : "border-gray-200"
                    }`}
                  >
                    <MaterialIcons
                      name="person-outline"
                      size={20}
                      color="#9CA3AF"
                    />
                    <TextInput
                      className="ml-2 flex-1 font-poppins text-gray-900"
                      placeholder="Enter your name"
                      keyboardType="default"
                      placeholderTextColor="#9CA3AF"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      // editable={!loginMutaion.isPending}
                    />
                  </View>
                )}
                          />
                           {signupForm.formState.errors.name && (
                <Text className="text-red-500 text-sm mt-1 font-poppins">
                  {signupForm.formState.errors.name.message}
                </Text>
              )}
            </View>

            {/* Email field*/}
            <View className="mt-4">
              <Text className="text-gray-800 text-xl mb-3 font-poppins-semibold">
                Email
              </Text>
              <Controller
                control={signupForm.control}
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
                      signupForm.formState.errors.email
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
              {signupForm.formState.errors.email && (
                <Text className="text-red-500 text-sm mt-1 font-poppins">
                  {signupForm.formState.errors.email.message}
                </Text>
              )}
            </View>
            {/* Password field */}
            <View className="mt-4 ">
              <Text className="text-gray-800 text-xl mb-3 font-poppins-semibold">
                Password
              </Text>
              <Controller
                control={signupForm.control}
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
                      signupForm.formState.errors.password
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
              {signupForm.formState.errors.password && (
                <Text className="text-red-500 text-sm mt-1 font-poppins">
                  {signupForm.formState.errors.password.message}
                </Text>
              )}
            </View>

          </View>

          {/* Submit Button */}
          <TouchableOpacity
            className={`rounded-xl py-4 mt-8 ${
              signupForm.formState.isValid ? "bg-blue-600" : "bg-gray-400"
            }`}
            // onPress={signupForm.handleSubmit(onLoginSubmit)}
            // disabled={!signupForm.formState.isValid || loginMutation.isPending}
          >
            <Text className="text-white text-center text-xl font-poppins-semibold">
              {"Sign Up"}
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
                Signup with Google
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
                Signup with Facebook
              </Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row justify-center mb-8">
            <Text className="text-gray-500 font-poppins">
              Already have an account?{"  "}
            </Text>
            <TouchableOpacity
              onPress={handleSignInNavigation}
              // disabled={loginMutation.isPending}
            >
              <Text className="text-blue-600 font-poppins-semibold">
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
