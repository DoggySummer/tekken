import { Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import { characterList } from '@/constant/character'
import { colors } from '@/constant/colors'
import Skill from '@/components/skill'
import { dummyskill01, dummyskill02 } from '@/constant/constant'
import CharacterLeft from '@/components/characterLeft'

import { View } from 'react-native'
import CharacterRight from '@/components/characterRight'
import { Character } from '@/constant/type'

export default function Index() {
  const { character } = useLocalSearchParams()
  const characterData: Character = characterList.find(
    (item) => item.name === character
  ) as Character
  return (
    <SafeAreaView style={style.container}>
      <View style={style.topContainer}>
        <CharacterLeft image={characterData?.image} />
        <CharacterRight character={characterData} />
      </View>
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
  topContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  banner: {
    width: '100%',
    objectFit: 'contain',
  },
  textWhite: {
    color: colors.WHITE,
    fontSize: 20,
    fontWeight: 'semibold',
  },
  textGray: {
    color: colors.FOOTERDISABLEDGRAY,
    fontSize: 20,
    fontWeight: 'regular',
  },
  characterInfoRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
    marginLeft: 12,
    width: '90%',
  },
})
