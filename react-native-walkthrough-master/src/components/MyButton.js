import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Colors } from '../../colors';

const SIZES = ['small', 'medium', 'large'];
const TYPES = ['primary', 'secondary', 'accent', 'error', 'warning', 'info', 'success'];
const ROUNDED = ['small', 'medium', 'large'];

export default function MyButton({
    children,
    onPress,
    type,
    size,
    label,
    rounded,
}) {

    const btnSize = SIZES.includes(size) ? size : 'small';
    const btnType = TYPES.includes(type) ? type : ' ';
    const btnRound = ROUNDED.includes(rounded) ? rounded : 'small';

    const btnStyle = {
        height: 40,
        width: btnSize === 'large' ? '100%' : btnSize === 'medium' ? 100 : 'auto',
        borderRadius: btnRound === 'small' ? 40 : btnRound === 'medium' ? 30 : 40,
        marginVertical: 20,
        paddingHorizontal: 20,
        paddingVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 
            btnType === 'primary' 
            ? Colors.primary : btnType === 'secondary' 
            ? Colors.secondary : btnType === 'accent' 
            ? Colors.accent : btnType === 'error' 
            ? Colors.error : btnType === 'warning' 
            ? Colors.warning : btnType === 'info' 
            ? Colors.info : Colors.success,

        shadowColor: 
            btnType === 'primary' 
            ? Colors.primary : btnType === 'secondary' 
            ? Colors.secondary : btnType === 'accent' 
            ? Colors.accent : btnType === 'error' 
            ? Colors.error : btnType === 'warning' 
            ? Colors.warning : btnType === 'info' 
            ? Colors.info : Colors.success,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: .9,
        shadowRadius: 8,
    }

    return (
        <TouchableOpacity 
            style={btnStyle}
            onPress={onPress}
        >
            <Text style={{ color: '#f1f1f1', fontSize: 16, fontWeight: 'bold'}}>{label}</Text>
        </TouchableOpacity>
    );
}