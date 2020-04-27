//CORE PACKAGES
import React from 'react';
import { 
  StyleSheet,
  View
} from 'react-native';

//COMPONENTS
import TouchableOpacity from './components/button/Button';

//CONSTANTS
import { colorsObject } from './assets/constants';


export default function App() {
  return (
    <View style={styles.containerView} >
      <TouchableOpacity 
        buttonText={'Birinci Buton'} 
        onPress={() => console.log('Birinci buton')} 
        backgroundColor={colorsObject.darkBlue}  
      />
      <TouchableOpacity 
        buttonText={'İkinci Buton'} 
        onPress={() => console.warn('İkinci buton')} 
        backgroundColor={colorsObject.midBlue}  
      />
      <TouchableOpacity 
        buttonText={'Üçüncü Buton'} 
        onPress={() => console.log('Üçüncü buton')} 
        backgroundColor={colorsObject.lightBlue}  
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
