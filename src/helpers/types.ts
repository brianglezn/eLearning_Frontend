export type Course = {
    _id: string;
    title: string;
    description: string;
    image: string;
    price: string;
    rating: string;
    reviews: number;
    category: string;
    chapters: {
        chapter: number;
        title: string;
        episodes: {
            episode: number;
            title: string;
            description: string;
            video_url: string;
        }[];
    }[];
};

export type User = {
    _id: string;
    username: string;
    name: string;
    surname: string;
    email: string;
    password: string;
    role: string;
    courses_purchased: number[];
};
