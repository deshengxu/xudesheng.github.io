import {Injectable}     from '@angular/core';
import { Interest } from "./../db/data.interest";
import { Portfolio } from "./../db/data.portfolio";
import { INTERESTS, PORTFOLIOS } from "./mock-data";

@Injectable()
export class PersonService {
    getInterests(): Promise<Interest[]>{
        return Promise.resolve(INTERESTS);
    }

    getPortfolios(): Promise<Portfolio[]>{
        return Promise.resolve(PORTFOLIOS);
    }

    getInterest(id:number): Promise<Interest> {
        return this.getInterests()
            .then(interests => interests.find(interest => interest.id===id));
    }

    getPortfolio(id:number): Promise<Portfolio>{
        return this.getPortfolios()
            .then(portfolios => portfolios.find(portfolio => portfolio.id===id));
    }
}