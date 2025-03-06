import {
  Text,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  Image,
  ScrollView,
  Platform,
} from 'react-native'
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
  const [isLoading, setIsLoading] = useState(false)
  const fetchData = async () => {
    setIsLoading(true)
    const baseUrl = Platform.select({
      web: 'http://localhost:8081',
      default: 'http://172.30.1.96:8081',
    })
    const url = baseUrl + '/api/db' + '?character=' + character
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()
    console.log(data)
    setSkillData(data.data)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <SafeAreaView style={style.container}>
      <ScrollView
        contentContainerStyle={style.scrollViewContent}
        style={style.scrollView}
      >
        <View style={style.topContainer}>
          <CharacterLeft image={characterData?.image} />
          <CharacterRight character={characterData} />
        </View>
        {isLoading && (
          <ActivityIndicator style={style.indicator} size='large' />
        )}

        {skillData.map((item) => {
          return <SkillComponent key={item._id} {...item} />
        })}
      </ScrollView>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BGCOLOR,
    overflow: 'scroll',
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
  indicator: {
    position: 'absolute',
    top: '110%',
    left: '50%',
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 30,
  },
})
