import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import type { PropsWithChildren } from 'react'

type CurrencyBtnProps = PropsWithChildren<{
    name: string;
    flag: string;
}>

const CurrencyButton = (props: CurrencyBtnProps):JSX.Element => {
  return (
    <View style={styles.btnContainer}>
      <Text style={styles.flag}>{props.flag}</Text>
      <Text style={styles.country}>{props.name}</Text>
    </View>
  )
}

export default CurrencyButton

const styles = StyleSheet.create({
    btnContainer:{
        alignItems: 'center',
    },
    flag:{
        fontSize: 28,
        color: '#FFFFFF',
        marginBottom: 4,
    },
    country:{
        fontSize: 14,
        color: '#2D3436',
        
    },
})