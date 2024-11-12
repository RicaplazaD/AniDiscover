import { StatusBar } from 'expo-status-bar';
import { ScrollView,Text, View, Image} from 'react-native';
import { Link, Redirect, router} from 'expo-router'; // Import useRouter from expo-router
import { SafeAreaView } from 'react-native-safe-area-context';
import {images} from '../constants'
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    <SafeAreaView className="bg-blue-500 h-full">
      <ScrollView contentContainerStyle={{height:'100%'}}>
        <View className="w-full justify-center items-center
        min-h-screen h-[85vh] px-4">
          <Text className="text-5xl justify-center items-center font-j_bold mb-10 text-center ">AniDiscover</Text>
          <Image
            source={images.logo}
            className="w-[650px] h-[180px] pt-10"
            resizeMode='contain'
          />
          <View className="relative mt-5">
          <Text className="font-u_regular text-1xl justify-center color-white text-center mt-10">AniDiscover is your guide to know about
            animals. Explore into a world of fascinatingcreatures.</Text>


          <CustomButton
            title="Continue with Email"
            handlePress={()=> router.push('/sign-in')}
            containerStyles="mt-10"
          
          
          >



          </CustomButton>

          </View>
        
        </View>



      </ScrollView>
      <StatusBar backgroundColor='' style='light'></StatusBar>



    </SafeAreaView>

  );
}