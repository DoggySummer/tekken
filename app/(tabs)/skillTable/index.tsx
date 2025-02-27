import { Text, View, StyleSheet, SafeAreaView } from 'react-native'
import { Link } from 'expo-router'
import { colors } from '@/constant/colors'

export default function Index() {
  return (
    <SafeAreaView style={style.container}>
      <Text style={style.text}>skill table screen</Text>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.BGCOLOR,
  },
  text: {
    color: 'white',
  },
})
