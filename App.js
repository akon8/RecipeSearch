import React, {useState} from 'react';
import {View, Text, Image, TextInput, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import Axios from 'axios';
import Header from './components/Header';
import RecipeItem from './components/RecipeItem';
import {YOUR_APP_KEY, YOUR_APP_ID} from './api.js';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import DropDownPicker from 'react-native-dropdown-picker';

const App = () => {
    const [query, setQuery] = useState('');
    const [items, setItems] = useState([]);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    const [filters, setFilters] = useState([
        {label: 'Alcohol-Free', value: '&health=alcohol-free'},
        {label: 'Dairy-Free', value: '&health=dairy-free'},
        {label: 'Gluten-Free', value: '&health=gluten-free'},
        {label: 'Kosher', value: '&health=kosher'},
        {label: 'Low-Sugar', value: '&health=low-sugar'},
        {label: 'Paleo', value: '&health=paleo'},
        {label: 'Pescatarian', value: '&health=pescatarian'},
        {label: 'Vegan', value: '&health=vegan'},
        {label: 'Vegetarian', value: '&health=vegetarian'},
        {label: 'Wheat-Free', value: '&health=wheat-free'},
        {label: 'All', value: ''}
      ]);

    const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=25${value}`;

    const getRecipeData = async() =>
    {
        const respond = await Axios.get(url);
        setItems(respond.data.hits);
       // console.log(respond.data.hits);
        setQuery('');
    };

    const onChange = (inputValue) => setQuery(inputValue);

    return (
       <View style={styles.container}>
        <Header title='Recipe-finder'/>
        <View style={styles.search}>
            <DropDownPicker
               open={open}
               value={value}
               items={filters}
               setOpen={setOpen}
               setValue={setValue}
               setItems={setFilters}
               style={styles.picker}
            />
            <TextInput
                placeholder="Search for recipes..."
                value={query}
                onChangeText={onChange}
                style={styles.input}
                placeholderTextColor="#c8c8c8"
            />
            <Icon name="search" size={20} color="#c8c8c8" style={styles.icon}/>
            <TouchableOpacity
                style={styles.btn}
                onPress={()=>{getRecipeData()}}>
                <Text style={styles.btnText}>Search</Text>
            </TouchableOpacity>

        </View>
        <FlatList
            data={items}
            keyExtractor={(x, i) => i}
            renderItem={({ item }) => {
                return (
                    <RecipeItem
                    recipeUrl={item.recipe.url}
                    recipeTitle={item.recipe.label}
                    recipeImg={item.recipe.image}
                    />
                   ); //return
            }}//renderItem
        />
       </View>
      );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      height: '100%',
      backgroundColor: '#fff'
  },
  input: {
      height: 50,
      padding: 10,
      paddingLeft: 35,
      fontSize: 16,
      color: '#000'
  },
  picker: {
      width: 135,
      padding: 0,
      margin: 10,
      borderRadius: 5,
      position: 'absolute',
      right: 0,
      top: -15
  },
  btn: {
      backgroundColor: 'green',
      padding: 10,
      margin: 10,
      borderRadius: 5
  },
  btnText: {
      color: '#fff',
      fontSize: 20,
      textAlign: 'center'
  },
  icon: {
      position: 'absolute',
      left:10,
      top: 15
  }
});

export default App;
