export type Restaurant = {
    id: string;
    name: string;
    rating: number;
    thumbnail: string;
};

export type Geolocation = {
    latitude: number;
    longitude: number;
};

export type Cache = {
    [key: string]: Restaurant[];
};

export type Path = '/top' | '/near';
export type RequestOptions = 'GET' | 'POST';
export type RequestFormat = [Path, RequestOptions, Geolocation | null];
