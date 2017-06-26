import React, { PropTypes } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const ClearButton = ({text, onPress}) => (
    <TouchableOpacity onPress={onPress}>
        <View>
            <Image source={require('./iamges/icon.png')} />
            <Text>{text}</Text>
        </View>

    </TouchableOpacity>
);

ClearButton.propTypes = { 
    text: PropTypes.string,
    onPress: PropTypes.func,
    
};

export default ClearButton;