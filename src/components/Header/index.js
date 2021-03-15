import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { BackHandler, StyleSheet, Text } from 'react-native';

import { Ionicons } from '@expo/vector-icons'

export default function Header({ background, weather, icon }){
    return(        
        <LinearGradient 
            style={styles.header}
            colors={background}
        >
            <Text style={styles.date}>{weather.date}</Text>
            <Text style={styles.city}>{weather.city}</Text>

            <Ionicons
                name={icon.name}
                color={icon.color}
                size={150}
            />

            <Text style={styles.climate}>{weather.temp}º</Text>

        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    header:{
        marginTop: 15,
        width: '95%',
        height:'55%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8 
    },
    date:{
        color: '#FFF',
        fontSize: 17
    },
    city:{
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold'
    },
    climate:{
        color: '#FFF',
        fontSize: 80,
        fontWeight: 'bold'
    }
})