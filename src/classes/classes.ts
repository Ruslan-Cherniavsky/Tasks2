console.log("iam Working classes");


class Country {
    public countryName: string;
    public numberOfCitizens : number;
    public region: string
    constructor(index) {
        this.countryName = state.countries[index].name.common
        this.numberOfCitizens = state.countries[index].population
        this.region = state.countries[index].region
    }
}

class CountryCurrent {
    public countryName: string;
    public numberOfCitizens : number;
    public region: string
    constructor() {
        this.countryName = state.countrie[0].name.common,
        this.numberOfCitizens = state.countrie[0].population,
        this.region = state.countrie[0].region
    }
}


