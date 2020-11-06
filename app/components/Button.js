import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const CustomButton = ({ onPress, text }) => {
    return (
        <View style={styles.buttonContent}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.textButton}>{text ? text : 'Text'}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContent: {
        marginTop: 20,
    },
    button: {
        elevation: 8,
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 12,
        backgroundColor: "#007bff"
    },
    textButton: {
        fontSize: 16,
        color: "#fff",
        alignSelf: "center",
        textTransform: "uppercase"
    },
});

export default CustomButton;