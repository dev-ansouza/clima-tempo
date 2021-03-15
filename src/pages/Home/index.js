import React, { useState, useEffect} from 'react';
import { SafeAreaView, Text, StyleSheet, FlatList, View } from 'react-native';
import * as Location from 'expo-location';

import Menu from '../../components/Menu';
import Header from '../../components/Header';
import Conditions from '../../components/Conditions';
import Forecast from '../../components/Forecast';

import { condition } from '../../utils/condition';

import api, { key } from '../../services/api';

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

export default function Home(){

  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setloading] = useState(true); 
  const [weather, setWeather] = useState({});
  const [icon, setIcon] = useState({name: 'cloud', color: '#fff'});
  const [background, setBackground] = useState(['#1ed6ff', '#97c1ff']); 

  useEffect(() => {

    (async () => {

      let { status } = await Location.requestPermissionsAsync();
      
      if(status !== 'granted'){
        setloading(false);
        setErrorMsg('Permissão negada para acessar a localização.');
        alert(errorMsg);
      }
      
      let location =  await Location.getCurrentPositionAsync();

      const response = await api.get(`/weather?key=${key}&lat=${location.coords.latitude}&lon=${location.coords.longitude}`);

      setWeather(response.data.results);

      if(response.data.results.currently === "noite"){
        setBackground(['#0c3741', '#0f2f61']);
      }

      setIcon(condition(response.data.results.condition_slug));
            
      setloading(false);

      console.log(response.data.results.wind_speedy);
      
    })();

  }, []);

  if(loading){
    return(
      <View>
        <Text>Carregando dados.</Text>
      </View>
    )
  }

  return(
      <SafeAreaView style={styles.container}>
          
          <Menu/>

          <Header background={background} weather={weather} icon={icon} />

          <Conditions weather={weather} />

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