import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';

//CONSTANTS
import { baseDimensionsObject } from '../../assets/constants';


export default class Button extends React.Component {

    render() {
        const { 
            buttonText, 
            onPress,
            backgroundColor 
        } = this.props;

        return (
            <TouchableOpacity 
                style={[styles.containerTouchable, { backgroundColor: backgroundColor }]}  
                onPress={() => onPress()}
            >
                <Text>{buttonText}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    containerTouchable: {
        width: baseDimensionsObject.width,
        paddingVertical: baseDimensionsObject.buttonVerticalPadding,
        borderRadius: baseDimensionsObject.borderRadius,
        marginBottom: baseDimensionsObject.marginBottom,

        alignItems: 'center',
    }
})