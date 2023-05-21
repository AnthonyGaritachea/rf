import { useEffect, useState } from 'react';
import type { Geolocation } from '../types';

export const useGeolocation = () => {
    const [geoLocation, setGeoLocation] = useState<Geolocation>({
        latitude: 0,
        longitude: 0
    });

    const success = (position: GeolocationPosition) => {
        setGeoLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        });
    };

    const fail = () => {
        console.log('unable to get geo location');
    };

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, fail);
        } else {
            alert('Geolocation is not supported by this browser.');
        }
    }, []);

    return { geoLocation };
};
