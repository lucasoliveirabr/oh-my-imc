import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  contextImc: {
    flex: 1,
    width: '100%',
    marginTop: 20,
    paddingTop: 20,
    borderRadius: 50,
    alignItems: 'center',
  },
  resultImc: {
    fontSize: 48,
    color: '#E62E2E',
    fontWeight: 'bold',
  },
  information: {
    fontSize: 18,
    color: '#E62E2E',
    fontWeight: 'bold',
  },
  boxShareButton: {
    width: "100%",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 10,
  },
  shareButton: {
    backgroundColor: "#1877F2",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    paddingVertical: 5,
    paddingHorizontal: 25,
  },
  imageShareButton: {
    marginRight: 5,
  },
  textShareButton: {
    color: "#FFF",
    fontWeight: "bold",
  }
});

export default styles;