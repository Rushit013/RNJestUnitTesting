import React, {useState} from 'react';
import Input from '../../components/Input';
import ScreenContainer from '../../components/ScreenContainer';
import Button from '../../components/Button';
import {Form, Title} from './styles';
import {LoginValidations} from '../../utils/login';
import {navigate} from '../../utils/navigation';

const Login = () => {
  const {areFormFieldsValid} = LoginValidations();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScreenContainer>
      <Form>
        <Title>Your Account</Title>

        <Input
          label="Email"
          value={email}
          placeholder="Enter your email"
          onChangeText={text => setEmail(text)}
          autoCapitalize="none"
        />

        <Input
          secureTextEntry
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChangeText={text => setPassword(text)}
        />

        <Button
          disabled={!areFormFieldsValid(email, password)}
          title="Sign In"
          onPress={() => navigate('Dashboard')}
        />
      </Form>
    </ScreenContainer>
  );
};

export default Login;
