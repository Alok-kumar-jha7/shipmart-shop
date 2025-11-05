import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Controller, useForm } from "react-hook-form";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function ForgotPassword() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();

  const forgotPasswordForm = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
    },
  });

  const handleBackToSignIn = () => {
    router.back();
  };

  const onSubmit = (data) => {
    console.log("Password reset requested for:", data.email);
    setIsSubmitted(true);
  };

  const handleResendEmail = () => {
    const email = forgotPasswordForm.getValues("email");
    if (email) {
      console.log("Resending email to:", email);
    }
  };


  if (isSubmitted) {
    return (
      <SafeAreaView className="flex-1 bg-white">
        <View className="flex-1 justify-center items-center px-6">
          <MaterialCommunityIcons
            name="check-circle-outline"
            size={90}
            color="#10B981"
          />
          <Text className="text-3xl font-poppins-bold text-gray-900 mt-6">
            Check Your Email
          </Text>
          <Text className="text-center text-gray-600 font-poppins mt-3 mb-8 leading-relaxed">
            We’ve sent a password reset link to your registered email address.
            Follow the link to set a new password.
          </Text>

          <View className="bg-blue-50 rounded-2xl p-5 w-full mb-8">
            <Text className="text-blue-800 font-poppins-semibold text-base mb-3">
              Next Steps:
            </Text>
            <Text className="text-gray-600 font-poppins leading-relaxed">
              1. Check your inbox for our email. {"\n"}
              2. Click on the password reset link. {"\n"}
              3. Create a new password. {"\n"}
              4. Check your spam folder if you can’t find it. {"\n"}
              5. Sign in again using your new password.
            </Text>
          </View>

          <TouchableOpacity
            className="rounded-xl py-4 px-10 bg-blue-600 w-full"
            onPress={handleResendEmail}
          >
            <Text className="text-white text-center text-lg font-poppins-semibold">
              Resend Email
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="mt-6" onPress={handleBackToSignIn}>
            <Text className="text-blue-600 font-poppins-semibold">
              Back to Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }


  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView
          className="flex-1 px-6"
          showsVerticalScrollIndicator={false}
        >
          <View className="flex-row items-center mt-4 mb-8">
            <TouchableOpacity
              onPress={handleBackToSignIn}
              className="p-2 rounded-full bg-gray-100"
            >
              <MaterialCommunityIcons
                name="arrow-left"
                size={22}
                color="#374151"
              />
            </TouchableOpacity>
            <Text className="ml-4 text-lg font-poppins-semibold text-gray-700">
              Forgot Password
            </Text>
          </View>


          <Text className="text-3xl font-poppins-bold text-gray-900 mb-3 mt-14">
            Reset Your Password
          </Text>
          <Text className="text-gray-500 font-poppins text-base leading-relaxed mb-10">
            Please enter your registered email address to receive a password
            reset link.
          </Text>

          {/* Email */}
          <View className="mb-8 ">
            <Text className="text-gray-800 text-lg font-poppins-semibold mb-3">
              Email Address
            </Text>
            <Controller
              control={forgotPasswordForm.control}
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
                  className={`flex-row items-center bg-gray-50 rounded-xl px-4 py-4 border ${
                    forgotPasswordForm.formState.errors.email
                      ? "border-red-500"
                      : "border-gray-200"
                  }`}
                >
                  <MaterialCommunityIcons
                    name="email-outline"
                    size={22}
                    color="#9CA3AF"
                  />
                  <TextInput
                    className="ml-3 flex-1 font-poppins text-gray-900 text-base"
                    placeholder="Enter your email address"
                    keyboardType="email-address"
                    placeholderTextColor="#9CA3AF"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                </View>
              )}
            />
            {forgotPasswordForm.formState.errors.email && (
              <Text className="text-red-500 text-sm mt-2 font-poppins">
                {forgotPasswordForm.formState.errors.email.message}
              </Text>
            )}
          </View>

          {/* Submit Button */}
          <TouchableOpacity
            onPress={forgotPasswordForm.handleSubmit(onSubmit)}
            disabled={!forgotPasswordForm.formState.isValid}
            className={`rounded-xl py-4 mb-12 ${
              forgotPasswordForm.formState.isValid
                ? "bg-blue-600"
                : "bg-gray-400"
            }`}
          >
            <Text className="text-white text-center text-lg font-poppins-semibold">
              Send Link
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
