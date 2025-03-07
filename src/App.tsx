
import React, { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Pressable,

} from 'react-native';
//constants
import { currencybyRupee } from './constants';
//component
import CurrencyButton from './components/CurrencyButton';
import Snackbar from 'react-native-snackbar';


const App = (): React.JSX.Element => {

  const [inputValue, setInputValue] = useState('')
  const [resultValue, setResultValue] = useState('')
  const [targetCurrency, setTargetCurrency] = useState('')

  const btnPressed = (targetValue: Currency) =>{
    if(!inputValue){
      return Snackbar.show({
        text: 'Please enter value to be converted',
        backgroundColor: '#EA7773',
        textColor: '#000000'
      })
    }
    const ipAmt = parseFloat(inputValue)
    if(!isNaN(ipAmt)){
      const convertedvalue = ipAmt * targetValue.value
      const result = `${targetValue.symbol} ${convertedvalue.toFixed(2)}`
      setResultValue(result)
      setTargetCurrency(targetValue.name)
    } else{
      return Snackbar.show({
        text: 'Not a valid no. to convert.',
        backgroundColor: '#F4BE2C ',
        textColor: '#000000'
      })
    }
  }

  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.rupeesContainer}>
            <Text style={styles.rupee}> ₹ </Text>
            <TextInput
              maxLength={14}
              value={inputValue}
              clearButtonMode='always'
              onChangeText={setInputValue}
              keyboardType='number-pad'
              placeholder='Enter value in Rupees'
            />
          </View>
          {resultValue && (
            <Text style={styles.resultTxt}>
              {resultValue}
            </Text>)}
        </View>
        <View style={styles.bottomContainer}>
          <FlatList 
            numColumns={3}
            data={currencybyRupee}
            keyExtractor={ item => item.name}
            renderItem={({item}) => (
              <Pressable 
                style= {[
                  styles.button, 
                  targetCurrency === item.name && styles.selected
                ]}
                onPress = {() => {btnPressed(item)}}
              >
                <CurrencyButton {...item} />
              </Pressable>
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#515151',
  },

  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  resultTxt: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '800',
  },

  rupee: {
    marginRight: 8,
    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
  },

  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },

  bottomContainer: {
    flex: 3,
  },

  button: {
    flex: 1,
    margin: 12,
    height: 60,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },

  selected: {
    backgroundColor: '#ffeaa7',
  },

});

export default App;
