import { Interest } from "./../db/data.interest";
import { Portfolio } from "./../db/data.portfolio";

export const INTERESTS: Interest[] = [
    {
        id: 1,
        name: 'chess',
        description: `
            I like chess very much
        `,
        htmlurl: 'app/templates/interest-chess.html',
        cssurl: 'app/styles/interest-chess.css'
    },
    {
        id: 2,
        name: 'math',
        description: `
            I like math very much and I have enrolled in many math competition.
        `,
        htmlurl: 'app/templates/interest-math.html',
        cssurl: 'app/styles/interest-math.css'
    },
    {
        id: 3,
        name: 'physics',
        description: `
            somehow, I like physics too.
        `,
        htmlurl: 'app/templates/interest-physics.html',
        cssurl: 'app/styles/interest-physics.css'
    }
];

export const PORTFOLIOS: Portfolio[] = [
    {
        id: 1,
        name: 'ROS Summar Camp',
        description: `
            I have developed a lot of ROS in 2016 Summer in MIT.
        `
    },
    {
        id: 2,
        name: 'iOS programming',
        description: `
            I can use Swift to program on iOS.
        `
    },
    {
        id: 3,
        name: 'image processor',
        description: `
            this is a Mac application which can help my friend to do more work.
        `
    }
]