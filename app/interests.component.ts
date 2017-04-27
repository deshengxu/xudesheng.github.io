import {Component, OnInit}          from '@angular/core';
import { PersonService } from "./services/person.service";
import { Interest } from "./db/data.interest";

@Component({
    selector: 'my-interests',
    templateUrl: './templates/interests.component.html',
    styleUrls: ['./styles/interests.component.css']
})
export class InterestsComponent implements OnInit{
    interests: Interest[];
    selectedInterest: Interest;
    isChess: boolean;
    isMath: boolean;
    isPhysics: boolean;

    constructor(
        private personService: PersonService,
    ){}

    getInterests(): void {
        this.personService.getInterests().then(interests =>{
            this.interests = interests;
        })
    }

    onSelect(interest: Interest){
        this.selectedInterest = interest;
        this.isChess=false;
        this.isMath=false;
        this.isPhysics=false;
        if(interest.id==1) this.isChess=true;
        if(interest.id==2) this.isMath=true;
        if(interest.id==3) this.isPhysics=true;
    }

    ngOnInit(): void{
        this.getInterests();
    }

}
