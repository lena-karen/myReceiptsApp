import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from '@/constants';
import { Home } from '@/screens/pages/App/Home/Home';

const AppStack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
      <AppStack.Navigator >
        <AppStack.Screen name={Routes.HOME} component={Home} />
      </AppStack.Navigator>
  );
};
