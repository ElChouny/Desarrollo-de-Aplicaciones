import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ShadowCard from './wrapper/ShadowCard'
import Colors from '../globals/Colors';

import TextPrimary from './TextPrimary'

const CardItemCategory = ({ item }) => {

    return (
        <ShadowCard style={styles.container}>
            <TextPrimary style={styles.text}>{item}</TextPrimary>
        </ShadowCard>
    )
}

export default CardItemCategory

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.third,
        marginHorizontal: 15,
        marginVertical: 10,
        padding: 15,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 7
    },
    text: {
        color: Colors.fourth,
    }
})