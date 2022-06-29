import { LogBox } from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootNavigation from './src/navigation/rootNavigator';
import DetailsScreen from './src/screens/details';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';

LogBox.ignoreAllLogs();

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <RootNavigation/>
      </Provider>
    </SafeAreaProvider>
  );
}
