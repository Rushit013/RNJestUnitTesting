import React, {useState} from 'react';
import {View} from 'react-native';

import {styles} from './styles';
import {navigate} from '../../utils/navigation';

import ScreenContainer from '../../components/ScreenContainer';
import Button from '../../components/Button';

const Home = () => {
  const [loading, setLoading] = useState(true);

  return (
    <ScreenContainer>
      <View style={styles.sectionContainer}>
        <Button title="Login" onPress={() => navigate('Login')} />
      </View>

      <View style={styles.sectionContainer}>
        <Button title="Math" onPress={() => navigate('Math')} />
      </View>

      <View style={styles.sectionContainer}>
        <Button title="Dashboard" onPress={() => navigate('Dashboard')} />
      </View>

      <View style={styles.sectionContainer}>
        <Button
          title="Hi!"
          onPress={() => setLoading(!loading)}
          nobackground
          {...{loading}}
        />
      </View>

      <View style={styles.sectionContainer}>
        <Button
          title="Loading?!"
          onPress={() => setLoading(!loading)}
          nobackground
        />
      </View>
    </ScreenContainer>
  );
};

export default Home;
