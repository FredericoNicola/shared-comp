import React from 'react';
import { ViewStyle, TextStyle } from 'react-native';
interface CustomButtonProps {
    title: string;
    onPress: () => void;
    style?: ViewStyle;
    textStyle?: TextStyle;
}
declare const CustomButton: React.FC<CustomButtonProps>;
export default CustomButton;
