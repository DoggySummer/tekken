import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { Skill } from '@/constant/type'
import { colors } from '@/constant/colors'
import { Image } from 'react-native'
import { buttonList, hitIconsList } from '@/constant/constant'
import AntDesign from '@expo/vector-icons/AntDesign'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { useEffect, useState } from 'react'

export default function SkillComponent(props: Skill) {
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [isNoteVisible, setIsNoteVisible] = useState(false)
  const {
    _id,
    skill_name,
    aka_kor,
    posture,
    prefix,
    command,
    suffix,
    hit_position,
    dmg,
    start,
    hit,
    counter,
    guard,
    hitIcons,
    description_1_kor,
    description_2_kor,
    description_3_kor,
    description_4_kor,
  } = props
  const storageKey = `bookmark_${_id}`

  const image01 = buttonList.find((button) => button.name === command[0])
  const image02 = buttonList.find((button) => button.name === command[1])
  const image03 = buttonList.find((button) => button.name === command[2])
  const image04 = buttonList.find((button) => button.name === command[3])
  const image05 = buttonList.find((button) => button.name === command[4])
  const image06 = buttonList.find((button) => button.name === command[5])
  const image07 = buttonList.find((button) => button.name === command[6])
  const heatIcon = hitIcons.heat
    ? hitIconsList.find((icon) => icon.name === 'heat')?.image
    : null
  const tornadoIcon = hitIcons.tornado
    ? hitIconsList.find((icon) => icon.name === 'tornado')?.image
    : null
  const wallIcon = hitIcons.wall
    ? hitIconsList.find((icon) => icon.name === 'wall')?.image
    : null
  const floorIcon = hitIcons.floor
    ? hitIconsList.find((icon) => icon.name === 'floor')?.image
    : null
  const homingIcon = hitIcons.homing
    ? hitIconsList.find((icon) => icon.name === 'homing')?.image
    : null
  const powerIcon = hitIcons.power
    ? hitIconsList.find((icon) => icon.name === 'power')?.image
    : null
  const startPlus = start[0] !== '-' ? true : false
  const makeRed = (value: string) => {
    return value[0] === '-' ? false : true
  }
  const downOrAirborn = (value: string) => {
    if (value === 'd') {
      return '다운'
    } else if (value === 'a') {
      return '공콤'
    } else {
      return value
    }
  }

  const loadBookmarkState = async () => {
    try {
      const savedState = await AsyncStorage.getItem(storageKey)
      if (savedState !== null) {
        setIsBookmarked(JSON.parse(savedState))
      }
    } catch (error) {
      console.error('북마크 상태 로딩 실패:', error)
    }
  }
  const toggleBookmark = async () => {
    try {
      const newState = !isBookmarked
      setIsBookmarked(newState)
      await AsyncStorage.setItem(storageKey, JSON.stringify(newState))
    } catch (error) {
      console.error('북마크 상태 저장 실패:', error)
    }
  }
  useEffect(() => {
    loadBookmarkState()
  }, [])
  return (
    <View style={style.container}>
      <View style={style.titleContainer}>
        <Text style={style.title}>{skill_name}</Text>
        {
          <AntDesign
            name={isBookmarked ? 'star' : 'staro'}
            size={24}
            color={colors.WHITE}
            onPress={toggleBookmark}
          />
        }
      </View>
      <Text style={style.aka_kor}>{aka_kor ? '통칭 : ' + aka_kor : ''}</Text>
      <View style={style.definitionContainer}>
        <View style={style.countContainer}>
          <View style={style.skilldefContainer}>
            <Text style={style.skilldefTitle}>{'발동 : '}</Text>
            <Text style={style.textNormal}>{start}</Text>
          </View>
          <View style={style.skilldefContainer}>
            <Text style={style.skilldefTitle}>{'히트 : '}</Text>
            <Text style={makeRed(hit) ? style.textPlus : style.textMinus}>
              {downOrAirborn(hit)}
            </Text>
          </View>
          <View style={style.skilldefContainer}>
            <Text style={style.skilldefTitle}>{'가드 : '}</Text>
            <Text style={makeRed(guard) ? style.textPlus : style.textMinus}>
              {guard}
            </Text>
          </View>
          <View style={style.skilldefContainer}>
            <Text style={style.skilldefTitle}>{'카운터 : '}</Text>
            <Text style={makeRed(counter) ? style.textPlus : style.textMinus}>
              {downOrAirborn(counter)}
            </Text>
          </View>
        </View>
        <View style={style.descriptionContainer}>
          {heatIcon && <Image source={heatIcon} style={style.image} />}
          {tornadoIcon && <Image source={tornadoIcon} style={style.image} />}
          {wallIcon && <Image source={wallIcon} style={style.image} />}
          {floorIcon && <Image source={floorIcon} style={style.image} />}
          {homingIcon && <Image source={homingIcon} style={style.image} />}
          {powerIcon && <Image source={powerIcon} style={style.image} />}
          <TouchableOpacity onPress={() => setIsNoteVisible(!isNoteVisible)}>
            <FontAwesome
              name={isNoteVisible ? 'sticky-note' : 'sticky-note-o'}
              size={24}
              color={colors.WHITE}
            />
          </TouchableOpacity>
        </View>
        {isNoteVisible && (
          <View style={style.noteContainer}>
            {description_1_kor && (
              <Text style={style.noteTitle}>{description_1_kor}</Text>
            )}
            {description_2_kor && (
              <Text style={style.noteTitle}>{description_2_kor}</Text>
            )}
            {description_3_kor && (
              <Text style={style.noteTitle}>{description_3_kor}</Text>
            )}
            {description_4_kor && (
              <Text style={style.noteTitle}>{description_4_kor}</Text>
            )}
            {!description_1_kor &&
              !description_2_kor &&
              !description_3_kor &&
              !description_4_kor && (
                <Text style={style.noteTitle}>메모추가 : </Text>
              )}
          </View>
        )}
      </View>
      <View style={style.commandContainer}>
        <Text style={style.textNormal}>{prefix}</Text>
        {image01 && <Image source={image01?.image} style={style.image} />}
        {image02 && <Image source={image02?.image} style={style.image} />}
        {image03 && <Image source={image03?.image} style={style.image} />}
        {image04 && <Image source={image04?.image} style={style.image} />}
        {image05 && <Image source={image05?.image} style={style.image} />}
        {image06 && <Image source={image06?.image} style={style.image} />}
        {image07 && <Image source={image07?.image} style={style.image} />}
        <Text style={style.textNormal}>{suffix}</Text>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    borderBottomWidth: 6,
    borderColor: colors.GRAY,
    paddingTop: 24,
    width: '90%',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.WHITE,
    marginRight: 10,
  },
  aka_kor: {
    fontSize: 16,
    color: colors.WHITE,
  },
  definitionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    gap: 6,
  },
  countContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  skilldefContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  skilldefTitle: {
    fontSize: 16,
    color: colors.WHITE,
  },
  textNormal: {
    fontSize: 16,
    color: colors.WHITE,
  },
  textPlus: {
    fontSize: 16,
    color: colors.GREEN,
  },
  textMinus: {
    fontSize: 16,
    color: colors.RED,
  },
  descriptionContainer: {
    flexDirection: 'row',
    gap: 6,
  },
  descriptionTitle: {
    fontSize: 16,
    color: colors.WHITE,
  },
  descriptionContent: {
    fontSize: 16,
    color: colors.WHITE,
  },
  commandContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    width: '80%',
    gap: 6,
    marginTop: 20,
    marginBottom: 24,
  },
  image: {
    width: 26,
    height: 26,
  },
  noteContainer: {
    position: 'absolute',
    backgroundColor: colors.BGCOLOR,
    right: 0,
    top: 40,
    borderRadius: 10,
    padding: 10,
    borderWidth: 4,
    borderColor: colors.GRAY,
    zIndex: 2,
  },
  noteTitle: {
    fontSize: 16,
    color: colors.WHITE,
  },
})
