import React from 'react';
import { Button } from 'react-native';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress }) => (
  <Button title={title} onPress={onPress} />
);

export default CustomButton;
