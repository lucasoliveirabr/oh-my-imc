import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  formContext: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 15,
    marginTop: 20,
    padding: 10,
  },
  form: {
    width: '100%',
    paddingTop: 20,
  },
  formLabel: {
    color: '#000',
    fontSize: 18,
    paddingLeft: 20,
  },
  input: {
    width: '90%',
    height: 40,
    borderRadius: 50,
    backgroundColor: '#F6F6F6',
    margin: 12,
    paddingLeft: 10,
  },
  buttonCalculator: {
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E62E2E',
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    marginRight: 12,
    marginTop: 30,
  },
  textButtonCalculator: {
    fontSize: 20,
    color: '#FFF',
  },
  errorMessage: {
    fontSize: 12,
    color: "red",
    fontWeight: "bold",
    paddingLeft: 20,
  },
  exhibitionResultImc: {
    width: '100%',
    height: '45%',
  },
  historyText: {
    fontSize: 20,
    marginTop: 50,
    color: 'red',
  },
  listImcs: {
    marginTop: 10,
  },
  resultImcItem: {
    fontSize: 26,
    color: 'red',
    height: 50,
    width: '100%',
    paddingRight: 20,
  },
  textResultItemList: {
    fontSize: 16,
  },
});

export default styles;