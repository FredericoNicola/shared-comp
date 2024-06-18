import React from 'react';
interface CustomButtonProps {
    title: string;
    onPress: () => void;
}
declare const CustomButton: React.FC<CustomButtonProps>;
export default CustomButton;
