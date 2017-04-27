import {Component, OnInit}          from '@angular/core';
import { PersonService } from "./services/person.service";
import { Portfolio } from "./db/data.portfolio";

@Component({
    selector:'my-portfolios',
    templateUrl:'./templates/portfolio.component.html',
    styleUrls:['./styles/portfolio.component.css']
})
export class PortfolioComponent{
    portfolios: Portfolio[];
    selectedPortfolio: Portfolio;

    constructor(
        private personService: PersonService,
    ){}

    getPortfolios(): void {
        this.personService.getPortfolios().then(portfolios =>{
            this.portfolios = portfolios;
        })
    }

    onSelect(portfolio: Portfolio){
        this.selectedPortfolio = portfolio;
    }

    ngOnInit(): void{
        this.getPortfolios();
    }

}