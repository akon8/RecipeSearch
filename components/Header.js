import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';


const Header = ({title}) => {
  return (
   <View>
    <Text style={styles.text}>{title}</Text>
    <Icon name="utensils" size={30} color="orange" style={styles.icon}/>
   </View>
    );
};

const styles = StyleSheet.create({
  text: {
      color: 'orange',
      fontSize: 33,
      marginLeft: 10,
      marginBottom: 10,
      fontFamily: 'sans-serif-medium'
  },
  icon: {
      position: 'absolute',
      right: 155,
      top: 5
  }
});

export default Header;
