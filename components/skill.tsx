import { StyleSheet, Text, View } from 'react-native'
import { Skill } from '@/constant/type'
import { colors } from '@/constant/colors'
import { Image } from 'react-native'
import { buttonList } from '@/constant/constant'

export default function SkillComponent(props: Skill) {
  const {
    id,
    name,
    aka,
    isFavorite,
    command,
    start,
    hit,
    guard,
    counter,
    position,
    dmg1,
    dmg2,
    dmg3,
    dmg4,
    form,
  } = props
  //command: ['move06', 'rp']
  const image01 = buttonList.find((button) => button.name === command[0])
  const image02 = buttonList.find((button) => button.name === command[1])
  return (
    <View style={style.container}>
      <Text style={style.title}>{name}</Text>
      <Text style={style.aka}>{aka ? '통칭 : ' + aka : ''}</Text>
      <View style={style.bottomContainer}>
        <View style={style.command}>
          {/* <Text style={style.textBasic}>일어나며</Text> */}
          <Image source={image01?.image} style={style.buttonImg} />
          <Image source={image02?.image} style={style.buttonImg} />
        </View>
        <View style={style.textContainer}>
          <Text style={style.textBasic}>하</Text>
          <Text style={style.textBasic}>중</Text>
          <Text style={style.textBasic}>|</Text>
          <Text style={style.textBasic}>16</Text>
          <Text style={style.textBasic}>14</Text>
        </View>
        <View>
          <Text style={style.textBasic}>자세 이행 시 벽꽝 가능</Text>
          <Text style={style.textBasic}>상단회피</Text>
        </View>
        <View style={style.rightContainer}>
          <View style={style.descBlock}>
            <Text style={style.textBasic}>발동 :</Text>
            <Text style={style.textBasic}>12</Text>
          </View>
          <View style={style.descBlock}>
            <Text style={style.textBasic}>히트 :</Text>
            <Text style={style.textGreen}>+12</Text>
          </View>
          <View style={style.descBlock}>
            <Text style={style.textBasic}>가드 :</Text>
            <Text style={style.textRed}>-26</Text>
          </View>
          <View style={style.descBlock}>
            <Text style={style.textBasic}>카운터 :</Text>
            <Text style={style.textGreen}>뜸</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    width: '90%',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  title: {
    color: colors.WHITE,
    fontSize: 20,
    fontWeight: 'semibold',
  },
  aka: {
    color: colors.WHITE,
    fontSize: 12,
    fontWeight: 'semibold',
  },
  bottomContainer: {
    paddingTop: 12,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    position: 'relative',
  },
  command: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingBottom: 12,
  },
  textBasic: {
    color: colors.WHITE,
    fontWeight: 'semibold',
  },
  textGreen: {
    color: colors.GREEN,
    fontWeight: 'semibold',
  },
  textRed: {
    color: colors.RED,
    fontWeight: 'semibold',
  },
  buttonImg: {
    width: 36,
    height: 36,
  },
  textContainer: {
    flexDirection: 'row',
    gap: 4,
  },
  rightContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  descBlock: {
    marginBottom: 4,
    flexDirection: 'row',
    width: 80,
    justifyContent: 'space-between',
  },
})
