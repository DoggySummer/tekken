import { View, Text, StyleSheet } from 'react-native';

export default function NotFound() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>404</Text>
      <Text style={styles.subtitle}>페이지를 찾을 수 없습니다</Text>
      <Text style={styles.description}>
        요청하신 페이지가 존재하지 않거나 삭제되었을 수 있습니다.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 72,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 24,
    marginTop: 10,
    color: '#666',
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    color: '#888',
    textAlign: 'center',
  },
});
