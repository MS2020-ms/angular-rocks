import { v4 as uuidv4 } from 'uuid';
import { RockBand } from '../services/rock-bands.service';


export const ROCKBANDS: RockBand[] = [
    {
        // id: uuidv4(),
        id: 1,
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
        active: true,
        origin: 'London, England',
        genres: 'Rock, blues, hard rock, rock and roll, pop',
        years: '1962–present'

    },
    {
        id: 2,
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
        active: false,
        origin: 'London, England',
        genres: 'Hard rock, blues rock, folk rock, heavy metal',
        years: '1968–1980'
    },
    {
        id: 3,
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
        active: true,
        origin: 'London, England',
        genres: 'Rock',
        years: '1970–present'
    },
    {
        id: 4,
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
        active: false,
        origin: 'London, England',
        genres: 'Progressive rock art, rock experimental, rock psychedelic, pop psychedelic rock',
        years: '1965–1995'
    },
    {
        id: 4,
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
        active: true,
        origin: 'Hertford, Hertfordshire, England',
        genres: 'Hard rockheavy, metalprogressive, rock',
        years: '1968–present'
    },
    {
        id: 4,
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
        active: true,
        origin: 'Sydney, New South Wales, Australia',
        genres: 'Hard rock, blues rock, heavy metal, rock and roll',
        years: '1973–present'
    },
    {
        id: 7,
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
        active: false,
        origin: 'Queens, New York, United States',
        genres: 'Punk rock, pop punk',
        years: '1974–1996'
    },
    {
        id: 8,
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
        active: true,
        origin: 'New York City, United States',
        genres: 'Hard rock, heavy metal, shock rock, glam metal',
        years: '1973–present'
    }

]

