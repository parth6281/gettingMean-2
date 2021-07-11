class OpeningTimes {
    days: string;
    opening: string;
    closing: string;
    closed: boolean;
};

export class Review {
    author: string;
    rating: number;
    reviewText: string;
}

export class Location {
    _id: string = '';
    name: string = '';
    distance: number = 0;
    address: string = '';
    rating: number = 0;
    reviews: Review[] = [];
    facilities: string[] = [];
    openingTimes: OpeningTimes[] = [];
}