import React, { useEffect, useState } from 'react';
import { Icon } from 'react-native-elements';
import { Text, View, StyleSheet, TextInput } from 'react-native';

const Input = ({ secureText, placeholder, keyboardType,
    iconType, iconName, maxLength, handleOnChange, name, errorMessage, label }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [secureTextEntry, setSecureTextEntry] = useState(false);

    useEffect(() => {
        if (secureText) {
            setSecureTextEntry(secureText);
        }
    }, [])

    const handleShowPassword = () => {
        if (secureText) {
            setShowPassword(!showPassword);
            setSecureTextEntry(!secureTextEntry);
        }
    }

    return (
        <View style={styles.fieldContent}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.contentInput}>
                <TextInput
                    secureTextEntry={secureText && secureTextEntry}
                    placeholder={placeholder}
                    style={styles.input}
                    disableFullscreenUI={true}
                    keyboardType={keyboardType}
                    onChangeText={(value) => handleOnChange({ name, value })}
                    maxLength={maxLength && maxLength}
                />
                {
                    !secureText && iconName && iconType && <Icon
                        name={iconName}
                        type={iconType}
                        size={25}
                    />
                }
                {
                    secureText && <Icon
                        onPress={handleShowPassword}
                        name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                        type="material-community"
                        size={25}
                    />
                }
            </View>
            {errorMessage && <Text style={styles.errorLabel}>{errorMessage}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    fieldContent: {
        marginTop: 20,
    },
    contentInput: {
        flexDirection: "row",
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10
    },
    input: {
        width: '90%',
        padding: 10,
        height: 40,
        borderColor: '#000',
    },
    label: {
        marginLeft: 5,
        marginBottom: 5
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
    errorLabel: {
        fontSize: 12,
        marginLeft: 5,
        color: '#dc3545'
    }
});

export default Input;