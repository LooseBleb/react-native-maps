import styled, { css } from 'styled-components/native';
import MapView from 'react-native-maps';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
    flex: 1;
    background-color: #e0fdee;
`;

export const InputWrapper = styled.View`
    margin-top: ${RFValue(20)}px;
    padding: 24px;
    
    width: 100%;
    height: ${RFValue(150)}px;

    position: absolute;
    top: 0;

    justify-content: center;
    align-items: center;
`;

export const InputLocation = styled.TextInput`
    width: 100%;
    height: ${RFValue(40)}px;
    
    margin-bottom: ${RFValue(10)}px;

    padding: 0 24px;

    border-radius: 5px;

    ${({theme}) => css`
        background-color: ${theme.COLORS.SHAPE};
        color: black;
        font-size: ${theme.FONT_SIZE.LG}px;
        font-family: ${theme.FONT_FAMILY.ARCHIVO_REGULAR};
    `}
`;

export const Maps = styled(MapView)`
    flex: 1;
`