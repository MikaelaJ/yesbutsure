export type Item = {
	id: number;
	title: string;
	content: string;
	published: boolean;
	brandId: number;
	image: string;
};

export type Person = {
	id: number;
	email: string;
	name: string;
};

export type Brand = {
	id: Number;
	users: Person[];
	brandName: string;
	description: string;
	title: string;
	posts: Item[];

};
/* export interface PostProps {
    card: Card;
} */