import React from 'react';

import { styles } from './BatButtonStyles';
import { TouchableOpacity, Text } from 'react-native';

type BatButtonProps = {
    onPress: () => void;
}

export function BatButton({onPress}:BatButtonProps) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>ACTIVATE BAT SIGNAL</Text>
        </TouchableOpacity>
    );
}