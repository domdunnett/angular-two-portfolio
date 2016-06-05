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
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var tech_component_1 = require('./tech/tech.component');
var about_component_1 = require('./about/about.component');
var travel_component_1 = require('./travel/travel.component');
var contact_component_1 = require('./contact/contact.component');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Dom Dunnett';
        this.logo = 'Logo.svg';
    }
    AppComponent.prototype.onResize = function (event) {
        if (event.target.innerWidth < 1000)
            this.logo = 'smallLogo.svg';
        else
            this.logo = 'Logo.svg';
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'portfolio',
            templateUrl: 'app/app.component.html',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [router_deprecated_1.ROUTER_PROVIDERS],
            styleUrls: ['app/app.component.css']
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/about',
                name: 'About',
                component: about_component_1.AboutComponent,
                useAsDefault: true
            },
            {
                path: '/tech',
                name: 'Tech',
                component: tech_component_1.TechComponent
            },
            {
                path: '/travel',
                name: 'Travel',
                component: travel_component_1.TravelComponent
            },
            {
                path: '/contact',
                name: 'Contact',
                component: contact_component_1.ContactComponent
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map