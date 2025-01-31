import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FIRESTORE_DB} from '../FirebaseConfig';
import {addDoc, collection} from 'firebase/firestore';
import useAuthStore from '../zustand/AuthStore';
import moment from 'moment';

const data = [
  {
    clipart: require('../../assets/cliparts/push-up.png'),
    title: 'Explosive Pushup',
    color: '#07CA98',
  },
  {
    clipart: require('../../assets/cliparts/dumbell.png'),
    title: 'Lateral Raises',
    color: '#FD7956',
  },
  {
    clipart: require('../../assets/cliparts/dumbell.png'),
    title: 'Standing Dumbell Press',
    color: '#DD56FF',
  },
  {
    clipart: require('../../assets/cliparts/push-up.png'),
    title: 'Wide Pushup',
    color: '#DD56FF',
  },
];

const MuscleGainIntermediate = () => {
  const navigation = useNavigation();

  const user = useAuthStore(state => state.user);

  const handleSaveWorkoutProgress = async nameOfWork => {
    const usersCollectionRef = collection(FIRESTORE_DB, 'workProgress');

    await addDoc(usersCollectionRef, {
      email: user,
      date: moment(new Date()).format('YYYY-MM-DD hh:mm A'),
      nameOfWork: nameOfWork,
    });
  };

  const navigateToScreen = (screenName, title) => {
    handleSaveWorkoutProgress(title);
    navigation.navigate(screenName);
  };

  const renderItem = item => (
    <TouchableOpacity
      style={[styles.box, {backgroundColor: item.color}]}
      onPress={() => {
        switch (item.title) {
          case 'Explosive Pushup':
            navigateToScreen('ARScreenExplosivePushup', item.title);
            break;
          case 'Lateral Raises':
            navigateToScreen('ARScreenLateralRaises', item.title);
            break;
          case 'Standing Dumbell Press':
            navigateToScreen('ARScreenSideLunges', item.title);
            break;
          case 'Wide Pushup':
            navigateToScreen('ARScreenWidePushup', item.title);
            break;

          default:
            break;
        }
      }}>
      <Image
        source={item.clipart}
        style={{width: 50, height: 50, borderRadius: 100}}
      />
      <Text style={styles.boxText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {data.map((item, key) => (
        <View key={key}>{renderItem(item)}</View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 50,
  },
  box: {
    width: 150,
    height: 250,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  boxText: {
    fontSize: 20,
    color: 'white',
  },
});

export default MuscleGainIntermediate;
