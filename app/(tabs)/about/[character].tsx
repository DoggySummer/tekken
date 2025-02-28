import { Text, SafeAreaView, StyleSheet } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import Banner from '@/components/banner'
import { characterList } from '@/constant/constant'
import { colors } from '@/constant/colors'
export default function Index() {
  const { character } = useLocalSearchParams()
  const characterData = characterList.find((item) => item.name === character)
  return (
    <SafeAreaView style={style.container}>
      <Banner image={characterData?.image} />
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BGCOLOR,
  },
})
