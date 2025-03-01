import { Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import Banner from '@/components/banner'
import { characterList } from '@/constant/constant'
import { colors } from '@/constant/colors'
import Skill from '@/components/skill'
import { dummyskill01, dummyskill02 } from '@/constant/constant'
import bannerExample from '@/assets/images/bannerExample.png'

export default function Index() {
  const { character } = useLocalSearchParams()
  const characterData = characterList.find((item) => item.name === character)
  return (
    <SafeAreaView style={style.container}>
      <Image source={bannerExample} style={style.banner} />
      {/* <Banner image={characterData?.image} /> */}
      <Skill {...dummyskill01} />
      {/* <Skill {...dummyskill02} /> */}
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BGCOLOR,
  },
  banner: {
    width: '100%',
    objectFit: 'contain',
  },
})
