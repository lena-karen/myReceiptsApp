import { View } from 'react-native';
import { AppText, CustomButton } from '@/components';
import { ButtonTheme } from '@/constants';
import { styles } from './styles';

export const Home = () => {
  return (
    <View style = {styles.container}>
      <CustomButton theme={ButtonTheme.primary} buttonTitle="Home" onPress={() => {}} />
    </View>
  );
};
