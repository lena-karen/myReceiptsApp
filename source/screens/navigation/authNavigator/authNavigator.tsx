import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from '@/constants';
import { LoginSignUp } from '@/screens/pages/Auth';

const AuthStack = createNativeStackNavigator();

export const AuthNavigator = () => {
  return (
    <AuthStack.Navigator initialRouteName={Routes.LOGIN}>
      <AuthStack.Screen name={Routes.LOGIN} component={LoginSignUp} />
    </AuthStack.Navigator>
  );
};
