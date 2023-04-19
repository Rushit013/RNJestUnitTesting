import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import {styles} from './Styles';

interface userProps {
  image: string;
  name: string;
  last: string;
  city: string;
  country: string;
  email: string;
}

const UserCard = ({image, name, last, city, country, email}: userProps) => {
  const handleTouch = () => {
    Alert.alert(
      'Heyy you!',
      "It's not a navigation but, it can be in the future :) ",
    );
  };

  return (
    <TouchableOpacity onPress={() => handleTouch()} style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={{uri: image}} />
      </View>
      <View style={styles.contentWrapper}>
        <Text style={styles.title}>
          {name} {last}
        </Text>
        <View style={styles.locationWrapper}>
          <Image
            style={styles.icon}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/9101/9101314.png',
            }}
          />
          <Text numberOfLines={1} style={styles.text}>
            {city}, {country}
          </Text>
        </View>
        <View style={styles.emailWrapper}>
          <Image
            style={styles.icon}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/3059/3059989.png',
            }}
          />
          <Text numberOfLines={1} style={styles.text}>
            {email}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default UserCard;
