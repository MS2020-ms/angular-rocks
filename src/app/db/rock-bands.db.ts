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
        years: '1962–present',
        description: 'The Rolling Stones are an English rock band formed in London in 1962. Diverging from the pop rock of the early-1960s, the Rolling Stones pioneered the gritty, heavier-driven sound that came to define hard rock.[1] Their first stable line-up was vocalist Mick Jagger, multi-instrumentalist Brian Jones, guitarist Keith Richards, drummer Charlie Watts, and bassist Bill Wyman. During their formative years Brian Jones was the primary leader',
        video: 'https://www.youtube.com/embed/tgbNymZ7vqY',

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
        icon: "../../../assets/images/icons/LZ_icon.png",
        country: 'United Kingdom',
        web: 'https://www.ledzeppelin.com',
        active: false,
        origin: 'London, England',
        genres: 'Hard rock, blues rock, folk rock, heavy metal',
        years: '1968–1980',
        description: 'Led Zeppelin were an English rock band formed in London in 1968. The group consisted of vocalist Robert Plant, guitarist Jimmy Page, bassist/keyboardist John Paul Jones, and drummer John Bonham. With a heavy, guitar-driven sound, they are cited as one of the progenitors of hard rock and heavy metal, although their style drew from a variety of influences, including blues and folk music.',
        video: 'https://www.youtube.com/embed/tgbNymZ7vqY',
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
        icon: "../../../assets/images/icons/Queen_icon.png",
        country: 'United Kingdom',
        web: 'https://queenonline.com',
        active: true,
        origin: 'London, England',
        genres: 'Rock',
        years: '1970–present',
        description: 'Queen are a British rock band formed in London in 1970. Their classic line-up was Freddie Mercury (lead vocals, piano), Brian May (guitar, vocals), Roger Taylor (drums, vocals) and John Deacon (bass). Their earliest works were influenced by progressive rock, hard rock and heavy metal, but the band gradually ventured into more conventional and radio-friendly works by incorporating further styles, such as arena rock and pop rock.',
        video: '"https://www.youtube.com/embed/tgbNymZ7vqY"',
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
        icon: "../../../assets/images/icons/PF_icon.png",
        country: 'United Kingdom',
        web: 'https://www.pinkfloyd.com',
        active: false,
        origin: 'London, England',
        genres: 'Progressive rock art, rock experimental, rock psychedelic, pop psychedelic rock',
        years: '1965–1995',
        description: 'Pink Floyd were an English rock band formed in London in 1965. Gaining an early following as one of the first British psychedelic groups, they were distinguished for their extended compositions, sonic experimentation, philosophical lyrics and elaborate live shows, and became a leading band of the progressive rock genre, cited by some as the greatest progressive rock band of all time.',
        video: 'https://www.youtube.com/embed/tgbNymZ7vqY',
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
        icon: "../../../assets/images/icons/DP_icon.png",
        country: 'United Kingdom',
        web: 'https://deeppurple.com/',
        active: true,
        origin: 'Hertford, Hertfordshire, England',
        genres: 'Hard rockheavy, metalprogressive, rock',
        years: '1968–present',
        description: 'Deep Purple are an English rock band formed in Hertford, Hertfordshire, in 1968.[1] They are considered to be among the pioneers of heavy metal and modern hard rock,[2][3] although their musical approach has changed over the years.[4] Originally formed as a psychedelic rock and progressive rock band, they shifted to a heavier sound with their 1970 album Deep Purple in Rock.[5] Deep Purple, together with Led Zeppelin and Black Sabbath, have been referred to as the "unholy trinity of British hard rock and heavy metal in the early- to mid-seventies"',
        video: 'https://www.youtube.com/embed/tgbNymZ7vqY',
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
        years: '1973–present',
        description: 'AC/DC are an Australian rock band formed in Sydney in 1973 by Scottish-born brothers Malcolm and Angus Young.[1] Their music has been variously described as hard rock, blues rock, and heavy metal,[2] but the band themselves call it simply "rock and roll". AC/DC underwent several line-up changes before releasing their first album, 1975s High Voltage. Membership subsequently stabilised around the Young brothers, singer Bon Scott, drummer Phil Rudd, and bassist Mark Evans.',
        video: 'https://www.youtube.com/embed/tgbNymZ7vqY',
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
        icon: "../../../assets/images/icons/TR_icon.png",
        country: 'United States',
        web: 'https://www.ramones.com/',
        active: false,
        origin: 'Queens, New York, United States',
        genres: 'Punk rock, pop punk',
        years: '1974–1996',
        description: 'The Ramones were an American punk rock band that formed in the New York City neighborhood of Forest Hills, Queens, in 1974. They are often cited as the first true punk rock group. Despite achieving only limited commercial success initially, the band was highly influential in the United States, Argentina, Brazil and most of South America, as well as Europe, including the United Kingdom, the Netherlands, Germany, Sweden and Belgium.',
        video: 'https://www.youtube.com/embed/tgbNymZ7vqY',
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
        years: '1973–present',
        description: 'Kiss (often stylized as KIϟϟ) is an American rock band formed in New York City in January 1973 by Paul Stanley, Gene Simmons, Ace Frehley, and Peter Criss. Well known for its members face paint and stage outfits, the group rose to prominence in the mid–late 1970s with its shocking live performances, which featured fire breathing, blood-spitting, smoking guitars, shooting rockets, levitating drum kits, and pyrotechnics.',
        video: 'https://www.youtube.com/embed/tgbNymZ7vqY',
    }

]

