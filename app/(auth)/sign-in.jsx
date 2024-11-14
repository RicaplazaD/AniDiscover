import { View, Text, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'

const SignIn = () => {
  const [form, setForm]=useState({
    email: '',
    password:''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const submit = () =>{}

  return (
    <SafeAreaView className="bg-blue-600 h-full">
      <ScrollView>
          <View className="w-full justify-center items-center h-full px-4 my-6">
              <Image source={images.logo}
                resizemode='contain'
                className="w-[140px] h-[140px] "
              />
              <Text className="text-3xl text-black mt-10 font-u_regular ">Log in to AniDiscover</Text>
              <FormField
                  title="Email"
                  value={form.email}
                  handleChangeText={(e) => setForm({ ...form, email: e })}
                  otherStyles="mt-7"
                  keyboardType="email-address"
              />
              <FormField

                  title="Password"
                  value={form.password}
                  handleChangeText={(e) => setForm({ ...form, password: e })}
                  otherStyles="mt-7"
              />
        <CustomButton
                  title="Sign In"
                  handlePress={submit}
                  containerStyles="w-full mt-7"
                  isLoading={isSubmitting}
              />

        <View className="flex justify-center pt-5 flex-row      gap-2">
            <Text className="text-sm text-gray-100 font-pregular">
              Don't have an account?
            </Text>
           
            <Link
              href="/sign-up"
              className="text-sm font-u_bold text-orange-600 "
            >
              Signup
            </Link>
          </View>
          </View>
        </ScrollView>
    </SafeAreaView>
  )
}
export default SignIn


