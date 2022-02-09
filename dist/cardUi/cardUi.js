console.log("iam Working");
function getCuntrieUi(country) {
    if (typeof country !== "object")
        return;
    const tr = document.createElement("tr");
    const tdName = document.createElement("td");
    tdName.innerText = country.countryName;
    const tdPopulation = document.createElement("td");
    tdPopulation.innerText = country.numberOfCitizens;
    const tdRegions = document.createElement("td");
    tdRegions.innerText = country.region;
    tr.append(tdName, tdPopulation, tdRegions);
    return tr;
}
;
