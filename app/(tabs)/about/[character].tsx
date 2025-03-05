import { Text, SafeAreaView, StyleSheet, Image, Platform } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import { characterList } from '@/constant/character'
import { colors } from '@/constant/colors'
import CharacterLeft from '@/components/characterLeft'
import { View } from 'react-native'
import CharacterRight from '@/components/characterRight'
import { Character, Skill } from '@/constant/type'
import { useEffect, useState } from 'react'
import SkillComponent from '@/components/skill'

export default function Index() {
  const { character } = useLocalSearchParams()
  const characterData: Character = characterList.find(
    (item) => item.name === character
  ) as Character
  const [skillData, setSkillData] = useState<Skill[]>([])
  const fetchData = async () => {
    const baseUrl = Platform.OS === 'android' ? 'http://10.0.2.2:8081' : 'http://localhost:8081';
    const url = `${baseUrl}/api/db?character=${character}`;

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      })
      const data = await response.json()
      setSkillData(data.data)
    } catch (error) {
      console.error('데이터 가져오기 실패:', error)
      setSkillData([])
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <SafeAreaView style={style.container}>
      <View style={style.topContainer}>
        <CharacterLeft image={characterData?.image} />
        <CharacterRight character={characterData} />
      </View>
      {/* <Banner image={characterData?.image} /> */}
      {skillData.map((item) => {
        return <SkillComponent key={item._id} {...item} />
      })}

    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BGCOLOR,
    overflow: 'scroll'
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
