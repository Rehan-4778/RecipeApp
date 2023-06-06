import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 20
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'red',
  },
  details: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  text: {
    width: '90%',
    fontSize: 18,
    fontFamily: 'Poppins_400Regular',
    color: 'black',
    paddingHorizontal: 10,
    marginTop: 20,
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: 'rgb(247, 124, 67)',
    paddingVertical: 10,
  },
  resetButton: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: 'rgb(247, 124, 67)',
    padding: 8,
    borderRadius: 5,
    marginVertical: 0,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Poppins_500Medium',
    marginTop: 2
  }

})