import { Text, View, StyleSheet } from 'react-native'
import { colors } from '@/constant/colors'
import { Character } from '@/constant/type'

interface CharacterRightProps {
  character: Character
}

export default function CharacterRight({ character }: CharacterRightProps) {
  const { name, dlc, posture } = character
  return (
    <View style={{ marginTop: 28 }}>
      <View style={style.characterInfoRow}>
        <Text style={style.textWhite}>이름</Text>
        <Text style={style.textGray}>{name}</Text>
      </View>
      <View style={style.characterInfoRow}>
        <Text style={style.textWhite}>DLC</Text>
        <Text style={style.textGray}>{dlc ? 'O' : 'X'}</Text>
      </View>
      <View style={style.characterInfoRow}>
        <Text style={style.textWhite}>자세 (클릭 시 이동)</Text>
      </View>
      <View style={style.postureContainer}>
        {posture.map((item) => {
          return (
            <Text key={item} style={style.posture}>
              {item}
            </Text>
          )
        })}
      </View>
    </View>
  )
}

const style = StyleSheet.create({
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
  },
  postureContainer: {
    flexDirection: 'row',
    gap: 8,
    marginLeft: 12,
    flexWrap: 'wrap',
    width: '100%',
    paddingRight: 12,
  },
  posture: {
    color: colors.WHITE,
    fontSize: 16,
  },
})
