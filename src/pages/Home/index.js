import React from 'react';
import { SafeAreaView, Text, StyleSheet, FlatList } from 'react-native';

import Menu from '../../components/Menu';
import Header from '../../components/Header';
import Conditions from '../../components/Conditions';
import Forecast from '../../components/Forecast';

export default function Home(){

    const myList = [
      {
        "date": "12/03",
        "weekday": "Sex",
        "max": 24,
        "min": 18,
        "description": "Tempestades",
        "condition": "storm"
      },
      {
        "date": "13/03",
        "weekday": "Sáb",
        "max": 25,
        "min": 18,
        "description": "Tempestades",
        "condition": "storm"
      },
      {
        "date": "14/03",
        "weekday": "Dom",
        "max": 25,
        "min": 18,
        "description": "Tempestades",
        "condition": "cloudly_day "
      },
      {
        "date": "15/03",
        "weekday": "Seg",
        "max": 26,
        "min": 18,
        "description": "Tempestades",
        "condition": "cloudly_day "
      },
      {
        "date": "16/03",
        "weekday": "Ter",
        "max": 26,
        "min": 18,
        "description": "Tempestades",
        "condition": "cloudly_day "
      },
      {
        "date": "17/03",
        "weekday": "Qua",
        "max": 28,
        "min": 19,
        "description": "Tempestades",
        "condition": "storm"
      },
      {
        "date": "18/03",
        "weekday": "Qui",
        "max": 23,
        "min": 20,
        "description": "Tempestades",
        "condition": "storm"
      },
      {
        "date": "19/03",
        "weekday": "Sex",
        "max": 23,
        "min": 20,
        "description": "Tempestades isoladas",
        "condition": "storm"
      },
      {
        "date": "20/03",
        "weekday": "Sáb",
        "max": 23,
        "min": 20,
        "description": "Tempestades",
        "condition": "storm"
      },
      {
        "date": "21/03",
        "weekday": "Dom",
        "max": 24,
        "min": 20,
        "description": "Tempestades",
        "condition": "storm"
      }
    ];

    return(
        <SafeAreaView style={styles.container}>
            
            <Menu/>

            <Header/>

            <Conditions/>

            <FlatList
            horizontal={true}
            contentContainerStyle={{ paddingBottom: '5%' }}
            styles={styles.list}
            data={myList}
            keyExtractor={ item => item.date}
            renderItem={ ({ item }) => <Forecast data={item} /> }
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e8f0ff',
        paddingTop: '5%'
    },
    list:{
        marginTop: 10,
        marginLeft: 10
    }
})