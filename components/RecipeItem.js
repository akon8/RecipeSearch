import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const RecipeItem = (props) => {
    return (
                   <View style={styles.recipes}>
                        <TouchableOpacity onPress={ ()=>{ Linking.openURL(props.recipeUrl) }}>
                            {!!`props.recipeTitle` && (
                                <Text style={styles.title}>
                                    {`${props.recipeTitle}`}
                                </Text>
                            )}
                            {props.recipeImg && (
                                <Image
                                    source={{ uri: props.recipeImg }}
                                    style={styles.img}
                                />
                            )}
                        </TouchableOpacity>
                    </View>
    ); //return

};

const styles = StyleSheet.create({
   recipes: {
      flex: 1,
      backgroundColor: '#f8f8f8',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      margin: 10,
      paddingBottom: 60,
      borderRadius: 15
  },
  title: {
      fontSize: 25,
      fontFamily: 'sans-serif-thin',
      color: '#000',
      alignSelf: 'center',
      padding: 15
  },
  img: {
      height: 200,
      width: 200,
      alignSelf: 'center',
      borderRadius: 15
  }
});

export default RecipeItem;
