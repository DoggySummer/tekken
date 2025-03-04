import { StyleSheet, Text, View } from 'react-native'
import { Skill } from '@/constant/type'
import { colors } from '@/constant/colors'
import { Image } from 'react-native'
import { buttonList, hitIconsList } from '@/constant/constant'
import AntDesign from '@expo/vector-icons/AntDesign'
import FontAwesome from '@expo/vector-icons/FontAwesome'

export default function SkillComponent(props: Skill) {
  const {
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
  //command: ['move06', 'rp']
  const image01 = buttonList.find((button) => button.name === command[0])
  const image02 = buttonList.find((button) => button.name === command[1])
  const image03 = buttonList.find((button) => button.name === command[2])
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
  return (
    <View style={style.container}>
      <View style={style.titleContainer}>
        <Text style={style.title}>{skill_name}</Text>
        <AntDesign name='staro' size={24} color={colors.WHITE} />
        <AntDesign name='star' size={24} color={colors.WHITE} />
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
            <Text style={startPlus ? style.textPlus : style.textMinus}>
              {hit}
            </Text>
          </View>
          <View style={style.skilldefContainer}>
            <Text style={style.skilldefTitle}>{'가드 : '}</Text>
            <Text style={startPlus ? style.textPlus : style.textMinus}>
              {guard}
            </Text>
          </View>
          <View style={style.skilldefContainer}>
            <Text style={style.skilldefTitle}>{'카운터 : '}</Text>
            <Text style={startPlus ? style.textPlus : style.textMinus}>
              {counter}
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
          <FontAwesome name='sticky-note-o' size={24} color={colors.WHITE} />
        </View>
      </View>
      <View style={style.commandContainer}>
        <Text style={style.textNormal}>{prefix}</Text>
        <Image source={image01?.image} style={style.image} />
        <Image source={image02?.image} style={style.image} />

        <Text style={style.textNormal}>{suffix}</Text>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    borderTopWidth: 6,
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
  },
  image: {
    width: 26,
    height: 26,
  },
})
