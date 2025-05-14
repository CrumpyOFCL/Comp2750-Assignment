import React, {useState} from "react";
import {SafeAreaView, View, Text, StyleSheet, Button} from 'react-native';
import {Picker} from '@react-native-picker/picker'; // don't forget to add dependency (bottom of screen)



export default function App() {
  const [picker1SelectedValue, setPicker1SelectedValue]=useState("val-COMP1000-2");
   const [picker2SelectedValue, setPicker2SelectedValue]=useState("345");
   const [calculatedValue, setCalculatedValue] = useState("Press the above Button")

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row1}>
        <Text style={styles.heading}> Credit Points Calculator </Text>
      </View>
      <View style={styles.row2}>
        <Picker style={styles.picker1} selectedValue = {picker1SelectedValue} onValueChange={(itemValue, itemIndex)=> setPicker1SelectedValue(itemValue)}>
            <Picker.Item label="COMP1000-2" value="val-COMP1000-2" />
            <Picker.Item label="COMP2750-3" value="val-COMP2750-3" />
            <Picker.Item label="COMP2750-8" value="val-COMP2750-8" />
        </Picker>
        <Picker style={styles.picker2} selectedValue = {picker2SelectedValue} onValueChange={(itemValue, itemIndex)=> setPicker2SelectedValue(itemValue)}>
            <Picker.Item label="345" value="345" />
            <Picker.Item label="786" value="786" />
            <Picker.Item label="247" value="247" />
        </Picker>
      </View>
      <View>
        <Button title="CALCULATE" 
        onPress={() =>{
        const lastChar = picker1SelectedValue[picker1SelectedValue.length -1];
        const charToIntForPicker1 =  parseInt(lastChar);
        
        const charToIntForPicker2 = parseInt(picker2SelectedValue);
        setCalculatedValue(charToIntForPicker1 * charToIntForPicker2);}} />
        <Text id='credits' style={styles.heading}> {calculatedValue} </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3D3E3'
  },
  heading: {
    fontSize:20,
    textAlign: 'center',
    marginTop: 30
  },
  row2:{
    flexDirection: 'row',
    marginTop: 7,
  },
  picker1:{
    flex:2
  },
  picker2:{
    flex:1
  },
});