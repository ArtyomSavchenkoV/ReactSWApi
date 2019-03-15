class SwapiService {

    _apiBase = "https://swapi.co/api/";
    _imageBase = 'https://starwars-visualguide.com/assets/img/';


    getResource = async (url) => {
            const res = await fetch(this._apiBase + url);

            if (!res.ok) {
                throw new Error(`could not fetch ${url}, received ${res.status}`);
            }

            const body = await res.json();
            return body;
        };

    //people

    getAllPeople = async() => {
        const result = await this.getResource(`people/`);
        //console.log(result.results.map(this._transformPerson));
        return result.results.map(this._transformPerson);
    };

    getPerson = async (idPerson) => {
        const person = await this.getResource(`people/${idPerson}/`);
        return this._transformPerson(person);
    };

    getPersonImage = ( {id} ) => {
        return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
    };

    //planets

    getAllPlanets = async () => {
        const result = await this.getResource(`planets/`);
        return result.results.map((el) => {return this._transformPlanet(el)});
        //return result.results.map(this._transformPlanet); //его вариант
    };

    getPlanet = async (planetId) => {
        const planet = await this.getResource(`planets/${planetId}/`);
        return this._transformPlanet(planet)
    };

    getPlanetImage = ( {id} ) => {
        return `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
    };

    //star ships

    getAllStarships = async () => {
        const result = await this.getResource(`starships/`);
        return result.results.map(this._transformStarship);
    };

    getStarship = async (starshipId) => {
        const starShip = await this.getResource(`starships/${starshipId}/`);
        return this._transformStarship(starShip);
    };

    getStarshipImage = ( {id} ) => {
        return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;
    };

    //extract

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    };

    //transforms

    _transformStarship = (ship) => {
        const id = this._extractId(ship);
        return {
            id: id,
            name: ship.name,
            image: `${this._imageBase}starships/${id}.jpg`,
            model: ship.model,
            manufacturer: ship.manufacturer,
            costInCredits: ship.cost_in_credits,
            length: ship.length,
            crew: ship.crew,
            passengers: ship.passengers,
            cargoCapacity: ship.cargo_capacity
        };
    };

    _transformPerson = (person) => {
        const id = this._extractId(person);
        return {
            id: id,
            name: person.name,
            image: `${this._imageBase}characters/${id}.jpg`,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    };

    _transformPlanet = (planet) => {
        const id = this._extractId(planet);
        return {
            id: id,
            name: planet.name,
            image: `${this._imageBase}planets/${id}.jpg`,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        };
    }
};

export default SwapiService;