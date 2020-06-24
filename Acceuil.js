import React, {Component} from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native'

class Acceuil extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('./react-native-2.png')} style={styles.background}>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }
})

export default Acceuil;