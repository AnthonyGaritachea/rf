type Categories = {
  alias: string;
  title: string;
};

export type Restaurant = {
  id: string;
  alias: string;
  name: string;
  image_url: string;
  is_closed: false;
  url: string;
  review_count: number;
  categories: Categories[];
  rating: number;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  transactions: string[];
  location: {
    address1: string;
    address2: string;
    address3: string;
    city: string;
    zip_code: string;
    country: string;
    state: string;
    display_address: string[];
  };
  phone: string;
  display_phone: string;
  distance: number;
};

export type Businesses = {
  businesses: Restaurant[];
};
