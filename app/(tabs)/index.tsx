// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Home';
import DetailScreen from './DetailsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator>
  );
}