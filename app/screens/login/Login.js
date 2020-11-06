import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Input from '../../components/Input';
import CustomButton from '../../components/Button';

export default Login = () => {
    const [userName, setUserName] = useState(null);
    const [password, setPassword] = useState(null);
    const [errorUserName, setErrorUserName] = useState(null);
    const [errorPassword, setErrorPassword] = useState(null);

    useEffect(() => {
        if (!userName) {
            return;
        }

        if (userName.length <= 6) {
            setErrorUserName('Este campo debe ser mayor o igual a 6 caracteres');
        } else {
            setErrorUserName(null);
        }
    }, [userName]);

    const handleOnChange = (ref) => {
        const { name, value } = ref;

        switch (name) {
            case 'userName':
                setUserName(value);
                break;
            case 'userName':
                setPassword(value);
                break;
            default:
                break;
        }
    }

    const handleOnClick = () => {
        console.log('Hola mundo');
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Car Center</Text>

            <View style={styles.fieldsContent}>
                <Input
                    label='User'
                    name='userName'
                    handleOnChange={handleOnChange}
                    placeholder='User'
                    keyboardType='default'
                    iconType='material-community'
                    iconName='account'
                    errorMessage={errorUserName}
                    maxLength={30} />
                <Input
                    label='Password'
                    name='password'
                    handleOnChange={handleOnChange}
                    secureText={true}
                    placeholder='User'
                    keyboardType='default'
                    maxLength={30} />

                <CustomButton onPress={handleOnClick} text='Iniciar sesión' />
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    title: {
        fontSize: 30,
        color: "#007bff",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 100,
        textAlign: "center"
    },
    fieldsContent: {
        margin: 30
    }
});