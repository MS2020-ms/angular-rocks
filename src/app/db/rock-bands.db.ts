import { v4 as uuidv4 } from 'uuid';
import { RockBand } from '../services/rock-bands.service';


export const ROCKBANDS: RockBand[] = [
    {
        id: uuidv4(),
        name: 'The Rolling Stones',
        members: [
            ' Mick Jagger',
            ' Keith Richards',
            ' Charlie Watts',
            ' Ronnie Wood'
        ],
        img: "../../../assets/images/background/Rolling Stones.jpg",
        icon: "../../../assets/images/icons/RS_icon.jpg",
        country: 'United Kingdom',
        web: 'https://rollingstones.com/',
        active: true
    },
    {
        id: uuidv4(),
        name: 'Led Zeppelin',
        members: [
            ' Jimmy Page',
            ' Robert Plant',
            ' John Paul Jones',
            ' John Bonham (+)'
        ],
        img: "../../../assets/images/background/Led Zeppelin.jpg",
        icon: "../../../assets/images/icons/LZ_icon.jpg",
        country: 'United Kingdom',
        web: 'https://www.ledzeppelin.com',
        active: false
    },
    {
        id: uuidv4(),
        name: 'Queen',
        members: [
            ' Freddie Mercury',
            ' John Deacon',
            ' Brian May',
            ' Roger Taylor'
        ],
        img: "../../../assets/images/background/Queen.jpg",
        icon: "../../../assets/images/icons/RS_icon.jpg",
        country: 'United Kingdom',
        web: 'https://queenonline.com',
        active: true
    },
    {
        id: uuidv4(),
        name: 'Pink Floyd',
        members: [
            ' David Gilmour',
            ' Nick Mason',
            ' Richard Wright',
            ' Syd Barrettr'
        ],
        img: "../../../assets/images/background/Pink Floyd.jpg",
        icon: "../../../assets/images/icons/PF_icon.jpg",
        country: 'United Kingdom',
        web: 'https://www.pinkfloyd.com',
        active: false
    },
    {
        id: uuidv4(),
        name: 'Deep Purple',
        members: [
            ' Ian Paice',
            ' Ian Gillan',
            ' Roger Glover',
            ' Steve Morse',
            ' Don Airey',
        ],
        img: "../../../assets/images/background/Deep Purple.jpg",
        icon: "../../../assets/images/icons/DP_icon.jpg",
        country: 'United Kingdom',
        web: 'https://deeppurple.com/',
        active: true
    },
    {
        id: uuidv4(),
        name: 'AC/DC',
        members: [
            ' Angus Young',
            ' Stevie Young',
            ' Brian Johnson',
            ' Cliff Williams',
            ' Phil Rudd',
        ],
        img: "../../../assets/images/background/ACDC.jpg",
        icon: "../../../assets/images/icons/acdc_icon.jpg",
        country: 'Australia',
        web: 'https://pwrup.acdc.com/',
        active: true
    },
    {
        id: uuidv4(),
        name: 'The Ramones',
        members: [
            ' Joey Ramone',
            ' Johnny Ramone',
            ' Marky Ramone',
            ' Dee Dee Ramone',
            ' Richie Ramone',
        ],
        img: "../../../assets/images/background/Ramones.jpg",
        icon: "../../../assets/images/icons/TR_icon.jpg",
        country: 'United States',
        web: 'https://www.ramones.com/',
        active: false
    },
    {
        id: uuidv4(),
        name: 'KISS',
        members: [
            ' Paul Stanley',
            ' Gene Simmons',
            ' Eric Singer',
            ' Tommy Thayer',
        ],
        img: "../../../assets/images/background/Kiss.jpg",
        icon: "../../../assets/images/icons/K_icon.jpg",
        country: 'United States',
        web: 'https://www.kissonline.com/end-of-the-road-au',
        active: true
    }

]

