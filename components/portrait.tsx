import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageSourcePropType,
  Pressable,
} from 'react-native'
import { colors } from '@/constant/colors'
import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router'

interface PortraitProps {
  name: string
  image: ImageSourcePropType
}

export default function Portrait({ name, image }: PortraitProps) {
  const router = useRouter()
  const handlePress = () => {
    router.push({
      pathname: '/about/[character]',
      params: { character: name },
    })
  }
  return (
    <Pressable onPress={handlePress}>
      <View style={style.container}>
        <Image source={image} style={style.image} />
        <LinearGradient
          colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0.5)']}
          locations={[0, 0.1, 0.5]}
          style={style.makeDark}
        />
        <Text style={style.text}>{name}</Text>
      </View>
    </Pressable>
  )
}

const style = StyleSheet.create({
  container: {
    width: 100,
    height: 160,
    borderColor: colors.GRAY,
    borderWidth: 2,
    position: 'relative',
    backgroundColor: colors.PORTRAIT_GRAY,
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
  },
  makeDark: {
    width: 100,
    height: 50,
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: [{ translateX: '-50%' }],
  },
  text: {
    color: 'white',
    position: 'absolute',
    bottom: 6,
    left: '50%',
    transform: [{ translateX: '-50%' }],
  },
  image: {
    width: 96,
    height: 180,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  link: {
    opacity: 0,
  },
})
