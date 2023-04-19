import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    paddingVertical: 24,
    paddingHorizontal: 14,
    borderRadius: 14,
    display: 'flex',
    flexDirection: 'row',
    marginTop: 14,
  },
  imageWrapper: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 78,
    height: 78,
    borderRadius: 37,
    resizeMode: 'cover',
  },
  contentWrapper: {
    flex: 1,
    paddingLeft: 12,
    paddingRight: 12,
  },
  title: {
    fontWeight: '700',
    fontSize: 16,
    // color: colors.TITLE_COLOR,
  },
  locationWrapper: {
    marginTop: 18,
    flexDirection: 'row',
  },
  icon: {
    width: 18,
    height: 18,
  },
  text: {
    fontSize: 14,
    // color: colors.TEXT_COLOR,
    paddingLeft: 8,
  },
  emailWrapper: {
    marginTop: 4,
    flexDirection: 'row',
  },
});
