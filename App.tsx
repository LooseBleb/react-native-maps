import { Map } from '@screens/Map';
import { StatusBar } from 'react-native';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '@theme/theme';
import { Archivo_500Medium, Archivo_400Regular, Archivo_700Bold } from '@expo-google-fonts/archivo'
import { useFonts } from 'expo-font';
import { Loading } from '@components/Loading';

export default function App() {

  const [fontsLoaded] = useFonts({ Archivo_400Regular, Archivo_500Medium, Archivo_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle={'dark-content'} translucent backgroundColor={'transparent'} />
      {!fontsLoaded ? <Loading /> : (<Map />)}
    </ThemeProvider>
  );
}