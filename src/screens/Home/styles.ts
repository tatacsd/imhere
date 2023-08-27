import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
  },
  title: {
    color: '#fdfcfe',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
  },
  date: {
    color: '#6b6b6b',
    fontSize: 16,
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    gap: 16,
    marginTop: 36,
    marginBottom: 42,
  },
  input: {
    backgroundColor: '#1f1e25',
    height: 56,
    borderRadius: 5,
    color: '#fdfcfe',
    padding: 16,
    fontSize: 16,
    flex: 1,
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31cf67',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fdfcfe',
    fontSize: 24,
  },

  listEmptyText: {
    color: '#fdfcfe',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 48,
  },
});
