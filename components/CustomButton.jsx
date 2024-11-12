import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const CustomButton = ({title, handlePress, containerStyles,
    textStyles, isloading}) => {
  return (
    <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.7}
        className={` bg-orange-400 rounded-xl min-h-[62px] 
        justify-center items-center  ${containerStyles} ${isloading ? opacity-50: ''} `}
    > 
    <Text className={`font-u_bold text-lg ${textStyles}`}
         >    
        {title}
    </Text>

 





    </TouchableOpacity>
  )
}

export default CustomButton