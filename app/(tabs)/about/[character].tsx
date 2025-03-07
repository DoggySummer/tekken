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
      default: 'http://192.168.131.131:8081',
    })
    const url = baseUrl + '/api/db' + '?character=' + character
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()
    setSkillData(data.data)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  // skillData를 posture별로 그룹화하는 함수
  const groupedSkills = skillData.reduce(
    (acc: { [key: string]: Skill[] }, curr) => {
      if (!acc[curr.posture]) {
        acc[curr.posture] = []
      }
      acc[curr.posture].push(curr)
      return acc
    },
    {}
  )

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

        {Object.entries(groupedSkills).map(([posture, skills]) => (
          <View key={posture} style={style.postureGroup}>
            <View style={style.postureDivider}>
              <View style={style.postureDividerTitle}>
                <Text style={style.postureTitle}>{posture}</Text>
              </View>
            </View>
            {skills.map((item) => (
              <SkillComponent key={item._id} {...item} />
            ))}
          </View>
        ))}
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
  postureGroup: {
    width: '100%',
  },
  postureDivider: {
    padding: 10,
    borderBottomWidth: 6,
    width: '90%',
    marginHorizontal: 'auto',
    borderBottomColor: colors.GRAY,
    marginVertical: 10,
    position: 'relative',
  },
  postureDividerTitle: {
    width: 200,
    height: 40,
    backgroundColor: colors.GRAY,
    position: 'absolute',
    bottom: -40,
    left: '50%',
    transform: [{ translateX: -100 }],
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  postureTitle: {
    color: colors.BLACK,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
