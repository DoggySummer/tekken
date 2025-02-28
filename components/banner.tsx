import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from 'react-native'
import { colors } from '@/constant/colors'
import { LinearGradient } from 'expo-linear-gradient'
import logo from '@/assets/images/logo.png'

interface BannerProps {
  image: ImageSourcePropType
}

export default function Banner({ image }: BannerProps) {
  return (
    <View style={style.container}>
      <LinearGradient
        colors={['#090B10', '#425176']}
        locations={[0, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={style.linear}
      />
      <View style={style.imageContainer}>
        <Image source={image} style={style.image} />
      </View>
      <Image source={logo} style={style.logo} />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    position: 'relative',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  linear: {
    width: '100%',
    height: 50,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  imageContainer: {
    width: 100,
    height: 70,
    top: -30,
    left: 0,
    overflow: 'hidden',
    flex: 1,
    alignContent: 'flex-end',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 10,
    width: '30%',
    height: 100,
    objectFit: 'cover',
  },
  logo: {
    width: 200,
    top: 0,
    right: 0,
    objectFit: 'contain',
  },
})
