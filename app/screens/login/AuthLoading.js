import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';

export default AuthLoading = (props) => {

    useEffect(() => {
        props.navigation.navigate('Login')
    }, []);

    return (
        <View>
            <ActivityIndicator />
        </View>
    );
}