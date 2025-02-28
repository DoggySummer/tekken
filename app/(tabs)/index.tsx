import { StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import Portrait from '@/components/portrait'
import { colors } from '@/constant/colors'
import { characterList } from '@/constant/constant'

export default function Index() {
  return (
    <SafeAreaView style={style.container}>
      <ScrollView
        contentContainerStyle={style.scrollViewContent}
        style={style.scrollView}
      >
        {characterList.map((character) => {
          return (
            <Portrait
              key={character.name}
              name={character.name}
              image={character.image}
            />
          )
        })}
      </ScrollView>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.BGCOLOR,
    paddingTop: 30,
    height: '100%',
    overflow: 'scroll',
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingBottom: 30,
  },
})
