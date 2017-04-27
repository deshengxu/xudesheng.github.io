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
var common_1 = require("@angular/common");
var data_interest_1 = require("./db/data.interest");
var InterestOutlet = (function () {
    function InterestOutlet(vcRef, compiler) {
        this.vcRef = vcRef;
        this.compiler = compiler;
    }
    InterestOutlet.prototype.ngOnChanges = function () {
        var _this = this;
        if (!this.interest) {
            console.log("No object input");
            return;
        }
        var html = this.interest.htmlurl;
        var css = this.interest.cssurl;
        if (!html || !css)
            return;
        var DynamicHtmlComponent = (function () {
            function DynamicHtmlComponent() {
            }
            return DynamicHtmlComponent;
        }());
        DynamicHtmlComponent = __decorate([
            core_1.Component({
                selector: 'dynamic-comp',
                templateUrl: html,
                styleUrls: [css]
            })
        ], DynamicHtmlComponent);
        ;
        var DynamicHtmlModule = (function () {
            function DynamicHtmlModule() {
            }
            return DynamicHtmlModule;
        }());
        DynamicHtmlModule = __decorate([
            core_1.NgModule({
                imports: [common_1.CommonModule],
                declarations: [DynamicHtmlComponent]
            })
        ], DynamicHtmlModule);
        this.compiler.compileModuleAndAllComponentsAsync(DynamicHtmlModule)
            .then(function (factory) {
            var compFactory = factory.componentFactories.find(function (x) { return x.componentType === DynamicHtmlComponent; });
            var cmpRef = _this.vcRef.createComponent(compFactory, 0);
        });
    };
    return InterestOutlet;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", data_interest_1.Interest)
], InterestOutlet.prototype, "interest", void 0);
InterestOutlet = __decorate([
    core_1.Directive({
        selector: 'interest-outlet'
    }),
    __metadata("design:paramtypes", [core_1.ViewContainerRef, core_1.Compiler])
], InterestOutlet);
exports.InterestOutlet = InterestOutlet;
//# sourceMappingURL=interest.outlet.js.map