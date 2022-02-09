var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
console.log("iam Working");
const DOM = {
    showAllBtn: null,
    searchByNameBtn: null,
    searchByNameInput: null,
    pageHtmlCont: null,
    tableBody: null,
    totalCountriesPopulation: null,
};
const COUNTRY_API_Name = `https://restcountries.com/v3.1/name`;
const COUNTRY_API_ALL = `https://restcountries.com/v3.1/all`;
const state = { countries: [], countrie: null, };
const allCuntries = [];
function init() {
    DOM.showAllBtn = document.querySelector("#showAllBtn");
    DOM.searchByNameBtn = document.querySelector("#searchByNameBtn");
    DOM.tableBody = document.querySelector("#tableBody");
    DOM.searchByNameInput = document.querySelector("#searchByNameInput");
    DOM.showAllBtn.addEventListener("click", showAllButtonButton);
    DOM.searchByNameBtn.addEventListener("click", searchCurrentButton);
    DOM.pageHtmlCont = document.querySelector("#pageHtmlCont");
}
init();
function searchCurrentButton() {
    return __awaiter(this, void 0, void 0, function* () {
        DOM.showAllBtn.className = "button is-primary is-loading";
        const value = DOM.searchByNameInput.value;
        if (!value)
            return;
        const params = `${value}`;
        try {
            const result = yield fetch(`${COUNTRY_API_Name}/${params}`);
            const jsonResult = yield result.json();
            _setCurrentCountriesResponse(jsonResult);
        }
        catch (error) {
            console.log("error");
        }
        function _setCurrentCountriesResponse(jsonResult) {
            state.countrie = jsonResult;
            console.log(state.countrie);
            DOM.showAllBtn.className = "button is-primary";
            drawCurrent();
        }
    });
}
function drawAll() {
    for (let index = 0; index < 10; index++) {
        // const currentCuntrie = countries[index]
        const currentCuntrie = new Country(index);
        DOM.totalCountriesPopulation = +currentCuntrie.numberOfCitizens;
        const tableRaw = getCuntrieUi(currentCuntrie);
        // allCuntries.push(cuntrieCard)
        allCuntries.push(tableRaw);
    }
    DOM.pageHtmlCont.innerText = `${DOM.totalCountriesPopulation}`;
    DOM.tableBody.append(...allCuntries);
    console.log(allCuntries);
}
function drawCurrent() {
    const currentCuntrie = new CountryCurrent();
    const tableRaw = getCuntrieUi(currentCuntrie);
    DOM.tableBody.append(tableRaw);
    console.log(tableRaw);
}
function showAllButtonButton() {
    return __awaiter(this, void 0, void 0, function* () {
        DOM.showAllBtn.className = "button is-primary is-loading";
        try {
            const result = yield fetch(`${COUNTRY_API_ALL}`);
            const jsonResult = yield result.json();
            _setAllcountriesResponse(jsonResult);
        }
        catch (error) {
            console.log("error");
        }
        function _setAllcountriesResponse(jsonResult) {
            state.countries = jsonResult;
            console.log(state.countries);
            DOM.showAllBtn.className = "button is-primary";
            drawAll();
        }
    });
}
function getLoaderBig() {
    const divLoader = document.createElement("div");
    const loader = document.createElement("div");
    divLoader.className = "lds-circle";
    divLoader.append(loader);
    DOM.tableBody.append(divLoader);
}
function clearDOMContent() {
    DOM.pageHtmlCont.innerHTML = "";
    DOM.tableBody.innerHTML = "";
}
