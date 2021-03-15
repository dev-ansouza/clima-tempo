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

            <Ionicons
                name={icon.name}
                color={icon.color}
                size={150}
                styles={styles.icon}
            />

            <Text style={styles.description}>{weather.description}</Text>

            <Text style={styles.climate}>{weather.temp}º</Text>

            <Text style={styles.city}>{weather.city}</Text>

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
    icon:{
        marginTop: -20
    },
    description:{
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: -20
    },
    climate:{
        color: '#FFF',
        fontSize: 70,
        fontWeight: 'bold'
    },
    date:{
        color: '#FFF',
        fontSize: 17
    },
    city:{
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold'
    }
})