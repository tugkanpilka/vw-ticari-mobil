//CORE MODULES 
import { Dimensions } from 'react-native';

const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');

//SCREEN PROPS.
export const dimensionsObject = {
    windowWidth:  windowDimensions.width,
    windowHeight: windowDimensions.height,
    screenWidth: screenDimensions.width,
    screenHeight: screenDimensions.height
}

//BASE DIMENSIONS
export const baseDimensionsObject = {
    width: screenDimensions.width - 40,
    borderRadius: 4,

    buttonVerticalPadding: 18,
    buttonHorizontalPadding: 18,

    marginBottom: 8
}

//COLORS
export const colorsObject = {
    darkBlue: '#0373fc',
    midBlue: '#2688ff',
    lightBlue: '#a1cbff'
}