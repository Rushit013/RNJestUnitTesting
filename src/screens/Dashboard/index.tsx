import {useState, useEffect} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import UserCard from '../../components/userCard/UserCard';
import ApiHelper from '../../service/ApiHelper';
import {styles} from './Styles';
import {usersTypes} from '../../utils/types';

const Home = () => {
  const [users, setUsers] = useState<usersTypes[] | any>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Main API call with dynamic page value
  const getUsers = async () => {
    setIsLoading(true);
    await ApiHelper.getStoriesOfSection(page).then(response => {
      setUsers([...users, ...response.results]);
      setIsLoading(false);
    });
  };

  // Increment page number function for more api call
  const loadMoreItem = () => {
    setPage(() => page + 1);
  };

  // Spinner before the extra api call
  const renderLoader = () => {
    return isLoading ? (
      <View style={styles.spinner}>
        <ActivityIndicator />
      </View>
    ) : null;
  };

  // Run function before app page loading
  useEffect(() => {
    getUsers();
  }, [page]); // Run getUser() when change the page value, thanks to useEffect() hook

  const renderRow = (item: {item: usersTypes | any}) => {
    return (
      <UserCard
        name={item.name.first}
        last={item.name.last}
        image={item.picture.medium}
        city={item.location.city}
        country={item.location.country}
        email={item.email}
      />
    );
  };

  return (
    <View>
      <FlatList
        data={users}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}: {item: usersTypes | any}) => renderRow(item)}
        ListFooterComponent={renderLoader} // I wanted to show a spinner to user when api call start
        onEndReached={loadMoreItem} // We want more loading with here
        onEndReachedThreshold={0} // It is calculate end of the list for start to lazy loading action with a new page number
        contentContainerStyle={{paddingBottom: 140}} // Basic padding value for the end of the flatList
      />
    </View>
  );
};

export default Home;
