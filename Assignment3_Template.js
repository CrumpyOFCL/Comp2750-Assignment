import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
  Image,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [dog, setDog] = useState('');
  const [dogRate, setDogRate] = useState(0);
  const [dogHours, setDogHours] = useState(1);

  const [service, setService] = useState('');
  const [serviceRate, setServiceRate] = useState(0);
  const [serviceQty, setServiceQty] = useState(1);

  const [total, setTotal] = useState(0);

  const handleCalculate = () => {
    const cost = (dogRate * dogHours) + (serviceRate * serviceQty);
    setTotal(cost);
  };

  const dogs = [
    { label: 'Please Select Dog', rate: 0},
    { label: 'Finn - $15', rate: 15 },
    { label: 'Bluey - $18', rate: 18 },
    { label: 'Bella - $15', rate: 15 },
    { label: 'Max - $20', rate: 20 },
    { label: 'Rex - $25', rate: 25 },
  ];

  const services = [
    { label: 'Please Select Service', rate: 0},
    { label: 'Grooming - $20', rate: 20 },
    { label: 'Walking - $10', rate: 10 },
    { label: 'Training - $30', rate: 30 },
    { label: 'Feeding - $10', rate: 10 },
    { label: 'Bathing - $25', rate: 25 },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Sigma Dog Care System (SDCS)</Text>

      <View style={styles.row}>
        <Picker
          selectedValue={dog}
          onValueChange={(itemValue, itemIndex) => {
            setDog(itemValue);
            setDogRate(dogs[itemIndex].rate);
          }}
          style={styles.picker}
        >
          {dogs.map((dog, idx) => (
            <Picker.Item key={idx} label={dog.label} value={dog.label} />
          ))}
        </Picker>

        <Picker
          selectedValue={dogHours}
          onValueChange={(val) => setDogHours(val)}
          style={styles.pickerSmall}
        >
          {[1, 2, 3, 4, 5].map((val) => (
            <Picker.Item key={val} label={`${val}`} value={val} />
          ))}
        </Picker>
      </View>

      <View style={styles.row}>
        <Picker
          selectedValue={service}
          onValueChange={(itemValue, itemIndex) => {
            setService(itemValue);
            setServiceRate(services[itemIndex].rate);
          }}
          style={styles.picker}
        >
          {services.map((svc, idx) => (
            <Picker.Item key={idx} label={svc.label} value={svc.label} />
          ))}
        </Picker>

        <Picker
          selectedValue={serviceQty}
          onValueChange={(val) => setServiceQty(val)}
          style={styles.pickerSmall}
        >
          {[1, 2, 3, 4, 5].map((val) => (
            <Picker.Item key={val} label={`${val}`} value={val} />
          ))}
        </Picker>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="CALCULATE" onPress={handleCalculate} />
      </View>

      <Text style={styles.total}>Total Cost: ${total}</Text>

      <Text style={styles.credits}>App developed by: Tyler Crump & Team</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3D3E3',
    alignItems: 'center',
    paddingTop: 50,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    marginVertical: 10,
    width: '90%',
    justifyContent: 'space-between',
  },
  picker: {
    flex: 2,
    height: 50,
  },
  pickerSmall: {
    flex: 1,
    height: 50,
  },
  buttonContainer: {
    marginVertical: 20,
  },
  total: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
  },
  credits: {
    position: 'absolute',
    bottom: 20,
    fontSize: 14,
    color: 'gray',
  },
});