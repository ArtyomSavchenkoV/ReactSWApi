export default class {
    constructor() {
        this.people = [
            {
                id: '1',
                name: 'Petya',
                image: '',
                gender: 'male',
                birthYear: 31,
                eyeColor: 'brown'
            },
            {
                id: '2',
                name: 'Wasya',
                image: '',
                gender: 'male',
                birthYear: 28,
                eyeColor: 'brown'
            },
            {
                id: '3',
                name: 'Alice',
                image: '',
                gender: 'female',
                birthYear: 25,
                eyeColor: 'sky blue'
            }];

        this.planets = [
            {
                id: '1',
                name: 'Earth',
                image: '',
                population: 7700000000,
                rotationPeriod: 24,
                diameter: 6378*2
            },
            {
                id: '2',
                name: 'Varna',
                image: '',
                population: 18500000000,
                rotationPeriod: 56,
                diameter: 20000*2
            }];

        this.starships = [
            {
                id: '1',
                name: 'Brave',
                image: '',
                model: 'destroyer',
                manufacturer: 'Republic',
                costInCredits: '12000000',
                length: '148',
                crew: '25',
                passengers: '10',
                cargoCapacity: 1200
            },
            {
                id: '2',
                name: 'Spiral',
                image: '',
                model: 'frigate',
                manufacturer: 'Republic',
                costInCredits: '4000000',
                length: '26',
                crew: '5',
                passengers: '2',
                cargoCapacity: 100
            }
        ];
    };

    //people

    getAllPeople = async() => {
        return this.people;
    };

    getPerson = async (idItem) => {
        if (idItem > this.people.length) idItem = '1';
        return this.people.filter(({ id }) => id === idItem)[0];
    };

    //planets

    getAllPlanets = async () => {
        return this.planets
    };

    getPlanet = async (idItem) => {
        if (idItem > this.planets.length) idItem = '1';
        return this.planets.filter(({ id }) => id === idItem)[0];
    };

    //star ships

    getAllStarships = async () => {
        return this.starships;
    };

    getStarship = async (idItem) => {
        if (idItem > this.planets.length) idItem = '1';
        return this.starships.filter(({ id }) => id === idItem)[0];
    };
}