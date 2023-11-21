
import {View, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function CardAddMenus ({id, item}) {
    const [add, setAdd] = useState(false)
    
    const changeHandler = (id) => {
        console.log(id)
        setAdd(() => {
            if(add) return false
            else return true
        })
    }
    
    const addHandler = () => {
        switch(add) {
            case false :
                return  <MaterialIcons name="radio-button-unchecked" size={24} color="black" />
            case true : 
                return  <MaterialIcons name="check-circle-outline" size={24} color="green" />
            default:
                return  <MaterialIcons name="radio-button-unchecked" size={24} color="black" />
        }
    }

    return (
        <TouchableOpacity onPress={() => changeHandler(id)}>
            <View style={styles.card}>
              <View>
                <Text style={{ fontSize: 20, fontWeight:"500" }}>{item.name}</Text>
                <Text style={{fontSize: 13}}>{item.calorie} cal</Text>
              </View>
              <View style={{marginRight:0}}>                
                {addHandler()}
              </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        width: windowWidth,
        height: 80,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        paddingHorizontal: 40,
        borderRadius: 10,
        marginVertical: 3,
        backgroundColor: "white",
      }
})