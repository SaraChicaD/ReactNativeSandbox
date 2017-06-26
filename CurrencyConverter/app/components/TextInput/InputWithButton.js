import React, { PropTypes } from 'react';
import { View, TouchableHighlight, TextInput, Text } from 'react-native';
import color from 'color';
import styles from './styles';

const InputWithButton = (props) => {    
    const {onPress, buttonText, editable = true} = props;

    const underlayColor = color(styles.$buttonBackgroundColorBase).darken(styles.$buttonBackgroundColorModifier);

    const containerStyles = [styles.container];

    if(editable === false){
        containerStyles.push(styles.containerDisabled);
    }

    return (
        <View style={containerStyles}>
            <TouchableHighlight underlayColor={underlayColor} onPress={onPress} style={styles.buttonContainer}>
                <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableHighlight>
            <View style={styles.border} />
            <TextInput style={styles.input} {...props}/>
        </View>
    );
}

InputWithButton.PßropTypes = {
    onPress: PropTypes.func,
    buttonText: PropTypes.string,
    editable: PropTypes.bool
}

export default InputWithButton;