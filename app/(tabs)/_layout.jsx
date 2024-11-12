import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '../../constants'

const TabIcon=({icon,color,name,focused})=>{
  return (
    <View>
      <Image
        source={icon}
        resizeMode="contain"
        className="w-6 h-8"
        tintColor={color}
      />
    </View>
  )
}




const TabLayout = () => {
  return (
    <>
      <Tabs>
          <Tabs.Screen 
          name="home"
          options={{
            title:'Home', 
            headerShown:false,
            tabBarIcon:({color,focused}) =>(
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            )
          }}
          />


        <Tabs.Screen 
          name="profile"
          options={{
            title:'Profile', 
            headerShown:false,
            tabBarIcon:({color,focused}) =>(
              <TabIcon
                icon={icons.profile}
                color={color}
                name="Profile"
                focused={focused}
              />
            )
          }}
          />

      <Tabs.Screen 
          name="heart"
          options={{
            title:'Heart', 
            headerShown:false,
            tabBarIcon:({color,focused}) =>(
              <TabIcon
                icon={icons.heart}
                color={color}
                name="Heart"
                focused={focused}
              />
            )
          }}
          />



  <Tabs.Screen 
          name="settings"
          options={{
            title:'Settings', 
            headerShown:false,
            tabBarIcon:({color,focused}) =>(
              <TabIcon
                icon={icons.setting}
                color={color}
                name="Settings"
                focused={focused}
              />
            )
          }}
          />

          

      </Tabs>
    </>
  )
}






export default TabLayout

