import { faker } from '@faker-js/faker';

export const getRandomSongName = () => {
	return faker.music.songName();
};

export const getRandomMovieName = () => {
	return `${faker.animal.cetacean()} ${faker.word.verb(4)}`;
};
