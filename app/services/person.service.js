"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var mock_data_1 = require("./mock-data");
var PersonService = (function () {
    function PersonService() {
    }
    PersonService.prototype.getInterests = function () {
        return Promise.resolve(mock_data_1.INTERESTS);
    };
    PersonService.prototype.getPortfolios = function () {
        return Promise.resolve(mock_data_1.PORTFOLIOS);
    };
    PersonService.prototype.getInterest = function (id) {
        return this.getInterests()
            .then(function (interests) { return interests.find(function (interest) { return interest.id === id; }); });
    };
    PersonService.prototype.getPortfolio = function (id) {
        return this.getPortfolios()
            .then(function (portfolios) { return portfolios.find(function (portfolio) { return portfolio.id === id; }); });
    };
    return PersonService;
}());
PersonService = __decorate([
    core_1.Injectable()
], PersonService);
exports.PersonService = PersonService;
//# sourceMappingURL=person.service.js.map