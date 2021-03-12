import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { Ionicons } from '@expo/vector-icons'

export default function Header(){
    return(
        <LinearGradient 
            style={styles.header}
            colors={['#1ed6ff', '#97c1ff']}
        >
            <Text style={styles.date}>12/03/2021</Text>
            <Text style={styles.city}>Belo Horizonte</Text>

            <Ionicons
                name="cloud"
                color="#FFF"
                size={150}
            />

            <Text style={styles.climate}>29º</Text>

        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    header:{
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