import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
  const {buttonStyle, buttonTextStyle } = styles;

  const buttonPressed = () => {
    console.log("pressed")
  }

  return (
    <TouchableOpacity onPress={props.onPress} style={buttonStyle} >
      <Text style={buttonTextStyle}>{props.children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonTextStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 9,
    paddingBottom: 9
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
}

export default Button;
