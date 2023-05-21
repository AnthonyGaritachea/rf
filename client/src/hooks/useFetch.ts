import { useEffect, useState, useRef } from 'react';
import { Restaurant } from '../types';
import type { RequestOptions, Geolocation, Cache } from '../types';

export const useFetch = (url: string, method: RequestOptions, data: Geolocation | null) => {
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const cache = useRef<Cache>({});

    useEffect(() => {
        setIsLoading(true);
        if (url in cache.current) {
            setRestaurants(cache.current[url]);
            setIsLoading(false);
            return;
        }
        fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: !!data ? JSON.stringify(data) : null
        })
            .then((response) => {
                if (!response.ok) {
                    setRestaurants([]);
                    setIsLoading(false);
                    throw new Error(`failed to fetch for results for ${url}`);
                }
                return response.json();
            })
            .then((data) => {
                cache.current[url] = data;
                setRestaurants(data);
                setIsLoading(false);
            })
            .catch((err) => {
                setIsLoading(false);
                console.error(err);
            });
    }, [url]);

    return { restaurants, isLoading };
};
