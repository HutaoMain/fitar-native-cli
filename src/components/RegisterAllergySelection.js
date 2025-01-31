import React, {useRef, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import 'firebase/firestore';
import LinearGradient from 'react-native-linear-gradient';
import updateUserAllergies from '../UpdateUserAllergies';

const allergens = [
  'Milk',
  'Eggs',
  'Fish',
  'Crustacean shellfish',
  'Tree nuts',
  'Peanuts',
  'Wheat',
  'Soybeans',
  'Sesame',
];

const RegisterAllergySelection = ({userEmail, handleRegistration, loading}) => {
  const [selectedAllergies, setSelectedAllergies] = useState([]);

  const updatedAllergiesRef = useRef([]);

  // * allergies
  const toggleAllergy = allergen => {
    const updatedAllergies = selectedAllergies.includes(allergen)
      ? selectedAllergies.filter(a => a !== allergen)
      : [...selectedAllergies, allergen];
    setSelectedAllergies(updatedAllergies);
    updatedAllergiesRef.current = updatedAllergies;
  };

  const handleSubmit = async () => {
    try {
      handleRegistration();
      await updateUserAllergies(userEmail, updatedAllergiesRef.current);
    } catch (error) {
      console.error('Error updating user allergies:', error);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Select Your Allergies:</Text>
        <View style={styles.allergenContainer}>
          {allergens.map(allergen => (
            <TouchableOpacity
              key={allergen}
              style={[
                styles.allergenButton,
                selectedAllergies.includes(allergen) && styles.selectedAllergen,
              ]}
              onPress={() => toggleAllergy(allergen)}>
              <Text style={styles.allergenText}>{allergen}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View
        style={{
          flex: 1,
          position: 'absolute',
          bottom: 120,
          alignItems: 'center',
          width: '100%',
        }}>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <LinearGradient
            colors={['#FFAA21', '#FFC42C']}
            style={{
              flex: 1,
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
            }}>
            <Text style={styles.buttonText}>
              {loading ? 'Please wait...' : 'Sign Up'}
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            width: '90%',
            flexWrap: 'wrap',
            paddingTop: 15,
            paddingHorizontal: 5,
          }}>
          <Text>
            By signing up, you are agreeing to our{' '}
            <Text style={{color: '#64BCFC'}}>Terms of Service</Text> and{' '}
            <Text style={{color: '#64BCFC'}}>Privacy Policy</Text>
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: -20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  allergenContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  allergenButton: {
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    padding: 10,
    margin: 5,
  },
  selectedAllergen: {
    backgroundColor: '#64b5f6',
  },
  allergenText: {
    fontSize: 14,
  },
  button: {
    width: '90%',
    height: 60,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    lineHeight: 40,
    fontSize: 16,
    fontWeight: 'bold',
  },
  formGroup: {
    marginBottom: 8,
    width: '90%',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    color: 'black',
  },
  multilineInput: {
    height: 100,
    textAlignVertical: 'top',
  },
});

export default RegisterAllergySelection;
