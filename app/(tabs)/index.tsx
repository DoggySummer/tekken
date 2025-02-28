import { StyleSheet, SafeAreaView } from 'react-native'
import Portrait from '@/components/portrait'
import { colors } from '@/constant/colors'
import { characterList } from '@/constant/constant'

export default function Index() {
  return (
    <SafeAreaView style={style.container}>
      {characterList.map((character) => {
        return (
          <Portrait
            key={character.name}
            name={character.name}
            image={character.image}
          />
        )
      })}
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.BGCOLOR,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 30,
    height: '100%',
    overflow: 'scroll',
  },
})
