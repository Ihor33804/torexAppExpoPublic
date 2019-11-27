import {Dimensions} from 'react-native';

const layoutWidth = 350;

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
const localWidth = screenWidth >= screenHeight ? screenHeight : screenWidth;
const widthCoef = localWidth / layoutWidth;

export const scale = size => widthCoef * size;
export const localHeight = screenWidth >= screenHeight ? screenWidth : screenHeight;

const variables = {
    fontSize: {
        x_small: (localWidth * 11) / layoutWidth,
        small: (localWidth * 12) / layoutWidth,
        regular: (localWidth * 14) / layoutWidth,
        large: (localWidth * 16) / layoutWidth,
        x_large: (localWidth * 20) / layoutWidth,
        xx_large: (localWidth * 22) / layoutWidth,
    },
    fontFamily: {
        NotoSansJS_Black: 'NotoSansJP-Black',
        NotoSansJS_Medium: 'NotoSansJP-Medium',
        IBMPlexSans_Medium: 'IBMPlexSans-Medium',
        IBMPlexSans_SemiBold: 'IBMPlexSans-SemiBold',
        Cabin_Regular: 'Cabin-Regular',
        Roboto: 'Roboto',
    }
};

export default variables;
