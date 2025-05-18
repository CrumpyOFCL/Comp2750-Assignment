// App.js

import React, { useState } from 'react';
import {SafeAreaView, StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import { Picker } from '@react-native-picker/picker';

// Load your SDCS logo from assets
const sdcsLogo = require('./assets/SDCS-Image.png');

export default function App() {
  // --- State hooks ---
  const [selectedDog, setSelectedDog] = useState('');
  const [dogRate, setDogRate]         = useState(0);
  const [dogHours, setDogHours]       = useState(1);

  const [selectedService, setSelectedService] = useState('');
  const [serviceRate, setServiceRate]         = useState(0);
  const [serviceQty, setServiceQty]           = useState(1);

  const [totalCost, setTotalCost] = useState(0);

  // --- Data arrays ---
  const dogs = [
    { label: 'Please Select Dog', rate: 0 },
    { label: 'Finn - $15',       rate: 15 },
    { label: 'Bluey - $18',      rate: 18 },
    { label: 'Bella - $15',      rate: 15 },
    { label: 'Max - $20',        rate: 20 },
    { label: 'Rex - $25',        rate: 25 },
  ];

  const services = [
    { label: 'Please Select Service', rate: 0 },
    { label: 'Grooming - $20',         rate: 20 },
    { label: 'Walking - $10',          rate: 10 },
    { label: 'Training - $30',         rate: 30 },
    { label: 'Feeding - $10',          rate: 10 },
    { label: 'Bathing - $25',          rate: 25 },
  ];

  // --- Handlers ---
  const handleCalculate = () => {
    const cost = dogRate * dogHours + serviceRate * serviceQty;
    setTotalCost(cost);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Logo & Title */}
      <Image source={sdcsLogo} style={styles.logo} resizeMode="contain" />
      <Text style={styles.heading}>Create Booking</Text>

      {/* Dog selection card */}
      <View style={styles.card}>
        <Text style={styles.label}>Choose a Dog</Text>
        <View style={styles.row}>
          <Picker
            selectedValue={selectedDog}
            style={styles.picker}
            onValueChange={(value, index) => {
              setSelectedDog(value);
              setDogRate(dogs[index].rate);
            }}
          >
            {dogs.map((dog, idx) => (
              <Picker.Item key={idx} label={dog.label} value={dog.label} />
            ))}
          </Picker>

          <Picker
            selectedValue={dogHours}
            style={styles.pickerSmall}
            onValueChange={(value) => setDogHours(value)}
          >
            {[1,2,3,4,5].map((n) => (
              <Picker.Item key={n} label={`${n}`} value={n} />
            ))}
          </Picker>
        </View>
      </View>

      {/* Service selection card */}
      <View style={styles.card}>
        <Text style={styles.label}>Choose a Service</Text>
        <View style={styles.row}>
          <Picker
            selectedValue={selectedService}
            style={styles.picker}
            onValueChange={(value, index) => {
              setSelectedService(value);
              setServiceRate(services[index].rate);
            }}
          >
            {services.map((svc, idx) => (
              <Picker.Item key={idx} label={svc.label} value={svc.label} />
            ))}
          </Picker>

          <Picker
            selectedValue={serviceQty}
            style={styles.pickerSmall}
            onValueChange={(value) => setServiceQty(value)}
          >
            {[1,2,3,4,5].map((n) => (
              <Picker.Item key={n} label={`${n}`} value={n} />
            ))}
          </Picker>
        </View>
      </View>

      {/* Calculate button */}
      <TouchableOpacity style={styles.calculateButton} onPress={handleCalculate}>
        <Text style={styles.calculateButtonText}>CALCULATE</Text>
      </TouchableOpacity>

      {/* Total cost display */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total Cost: ${totalCost}</Text>
      </View>

      {/* Footer credits */}
      <Text style={styles.credits}>App developed by Tyler Crump & Team</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f7',
    padding: 20,
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 30,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Android elevation
    elevation: 3,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  picker: {
    flex: 2,
    height: 44,
    color: '#333',
  },
  pickerSmall: {
    flex: 1,
    height: 44,
    marginLeft: 12,
    color: '#333',
  },
  calculateButton: {
    backgroundColor: '#6200ee',
    borderRadius: 25,
    paddingVertical: 14,
    alignItems: 'center',
    marginVertical: 10,
    // subtle shadow
    shadowColor: '#6200ee',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  calculateButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  totalContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 10,
    // shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  credits: {
    textAlign: 'center',
    color: '#888',
    fontSize: 12,
    marginTop: 30,
  },
});
