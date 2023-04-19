import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput, Alert} from 'react-native';
import ScreenContainer from '../../components/ScreenContainer';

import {add, minus, times, div} from '../../utils/maths';
import Button from '../../components/Button';
import {navigate} from '../../utils/navigation';

const styles = StyleSheet.create({
  section: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 20,
  },
  text: {
    fontSize: 20,
  },
  result: {
    fontSize: 20,
    color: 'red',
  },
  sectionContainer: {
    marginTop: 32,
  },
  inputContainer: {
    fontSize: 20,
    color: 'red',
    width: 20,
    textAlign: 'center',
    borderBottomWidth: 1,
  },
});

const Math = () => {
  const a = 2;
  const b = 2;

  const [addAnswer, setAddAnswer] = useState('');
  const [multiAnswer, setMultiAnswer] = useState('');
  const [subAnswer, setSubAnswer] = useState('');
  const [dividedAnswer, setDividedAnswer] = useState('');

  const onLogin = () => {
    const validateAdd = add(a, b) == addAnswer;
    const validateMulti = times(a, b) == multiAnswer;
    const validateSub = minus(a, b) == subAnswer;
    const validateDivision = div(a, b) == dividedAnswer;

    if (validateAdd && validateMulti && validateSub && validateDivision) {
      Alert.alert('Success', 'Press "OK" to navigate Login', [
        {text: 'OK', onPress: () => navigate('Login')},
      ]);
    } else {
      Alert.alert('Please check all the answer and try again!');
    }
  };

  return (
    <ScreenContainer>
      <View style={styles.section}>
        <Text style={styles.text}>2 + 2 </Text>
        <Text style={styles.result}>= </Text>
        <TextInput
          value={addAnswer}
          onChangeText={text => setAddAnswer(text)}
          style={styles.inputContainer}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.text}>2 x 2 </Text>
        <Text style={styles.result}>= </Text>
        <TextInput
          value={multiAnswer}
          onChangeText={text => setMultiAnswer(text)}
          style={styles.inputContainer}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.text}>2 - 2 </Text>
        <Text style={styles.result}>= </Text>
        <TextInput
          value={subAnswer}
          onChangeText={text => setSubAnswer(text)}
          style={styles.inputContainer}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.text}>2 : 2 </Text>
        <Text style={styles.result}>= </Text>
        <TextInput
          value={dividedAnswer}
          onChangeText={text => setDividedAnswer(text)}
          style={styles.inputContainer}
        />
      </View>

      <View style={styles.sectionContainer}>
        <Button
          title="Login"
          onPress={() => {
            onLogin();
          }}
          nobackground
        />
      </View>
    </ScreenContainer>
  );
};

export default Math;
