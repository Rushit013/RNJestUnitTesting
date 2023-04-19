import 'react-native';
import ApiHelper from '../src/service/ApiHelper';

// API test
describe('Test API', () => {
  const TEST_CASE = [1, 2, 3, 4];
  TEST_CASE.forEach(item => {
    test(`Test case page: ${item}`, () => {
      return ApiHelper.getStoriesOfSection(item).then(res => {
        expect(res).toBeTruthy();
      });
    });
  });
});
