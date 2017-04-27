"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var person_service_1 = require("./services/person.service");
var InterestsComponent = (function () {
    function InterestsComponent(personService) {
        this.personService = personService;
    }
    InterestsComponent.prototype.getInterests = function () {
        var _this = this;
        this.personService.getInterests().then(function (interests) {
            _this.interests = interests;
        });
    };
    InterestsComponent.prototype.onSelect = function (interest) {
        this.selectedInterest = interest;
        this.isChess = false;
        this.isMath = false;
        this.isPhysics = false;
        if (interest.id == 1)
            this.isChess = true;
        if (interest.id == 2)
            this.isMath = true;
        if (interest.id == 3)
            this.isPhysics = true;
    };
    InterestsComponent.prototype.ngOnInit = function () {
        this.getInterests();
    };
    return InterestsComponent;
}());
InterestsComponent = __decorate([
    core_1.Component({
        selector: 'my-interests',
        templateUrl: './templates/interests.component.html',
        styleUrls: ['./styles/interests.component.css']
    }),
    __metadata("design:paramtypes", [person_service_1.PersonService])
], InterestsComponent);
exports.InterestsComponent = InterestsComponent;
//# sourceMappingURL=interests.component.js.map