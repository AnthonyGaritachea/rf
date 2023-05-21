import * as React from 'react';
import Star from '../components/Icons/Star';

type Props = {
    id: string;
    thumbnail: string;
    name: string;
    rating: number;
};

const RestaurantCard = ({ thumbnail, name, rating }: Props) => {
    return (
        <>
            <div>
                <img className="w-[200px] h-[200px] rounded-[100px]" src={thumbnail} alt="restaurant photo" />
            </div>
            <div>
                <p>{name}</p>
                <div className="flex gap-[4px] items-center">
                    <Star />
                    <p>{rating}</p>
                </div>
            </div>
        </>
    );
};

export default RestaurantCard;
