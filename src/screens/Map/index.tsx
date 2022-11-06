import React, { useEffect, useState } from 'react'
import { Container, Maps, InputWrapper, InputLocation } from './styles';
import * as Location from 'expo-location'
import { Alert } from 'react-native';
import { Marker } from 'react-native-maps';

interface InitialLocationProps {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
}

export function Map() {
    const [initialRegion, setInitialRegion] = useState<InitialLocationProps>();
    const [address, setAddress] = useState<string>('');

    const [options, setOptions] = useState<any[]>();

    async function getMyGeolocation() {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permission to access location was denied');
            return;
        }

        await Location.getCurrentPositionAsync().then(
            (response) => {
                setInitialRegion({ latitude: response.coords.latitude, longitude: response.coords.longitude, latitudeDelta: 0.01, longitudeDelta: 0.01 })
            }
        );

    };

    useEffect(() => {
        getMyGeolocation()
    }, [])

    useEffect(() => {

        Location.geocodeAsync(address).then((response) => setOptions(response) );
        
        Location.reverseGeocodeAsync({latitude: initialRegion?.latitude, longitude: initialRegion?.longitude}).then((response) => console.log(response))
        
        console.log(options);
        

    }, [address])

return (
    <Container>
        <Maps
            mapType='mutedStandard'
            initialRegion={initialRegion}
        >
            <Marker
                key={1}
                coordinate={initialRegion}
                title={'User'}
                description={'User Location'}
            />
        </Maps>
        <InputWrapper>
            <InputLocation placeholderTextColor={'black'} onChangeText={setAddress} />
            <InputLocation />
        </InputWrapper>
    </Container>
)
}