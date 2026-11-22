/**
 * BryBrands Music — Centralized Release Configuration & Verified Metadata
 * Sources of Truth:
 * - IMG-20261011-WA0000.jpg & IMG-20261011-WA0001.jpg (CD Inlay & Disc Artwork)
 * - IMG-20261011-WA0005.jpg (Official Release Poster)
 * - cv_text.txt (Official Artist Biography & Discography History)
 */

const MUSIC_DATA = {
    artist: {
        name: "Dr. Hon. Bryn Taurai Mteki",
        stageName: "Sekurutau",
        title: "World-Renowned Sculptor & Traditional Roots Musician",
        genre: "African Roots / Contemporary Mbira",
        bioSnippet: "Son of renowned sculptor Richard Mteki and nephew of master sculptor Boira Mteki, Sekurutau translates the spiritual weight of African stone carving into deep, melodic mbira harmonies. Over three decades of artistic mastery have earned him platinum success and global acclaim.",
        bookingPhone1: "+263 78 680 7038",
        bookingPhone2: "+263 77 310 0474",
        officialWebsite: "www.brynbrandsgroup.com",
        parentCompany: "Sekurutau World Music, BrynBrands (Private) Limited, a Member Of BRYNBRANDS GROUP"
    },

    featuredRelease: {
        id: "sahwira-mukuru",
        title: "Sahwira Mukuru",
        artist: "Sekurutau",
        releaseType: "Album",
        releaseYear: "2026",
        releaseMonth: "October",
        catalogId: "CD BTM. 011 (P) 2026 ©",
        artworkDisc: "IMG-20261011-WA0000.jpg",
        artworkInlay: "IMG-20261011-WA0001.jpg",
        artworkPoster: "IMG-20261011-WA0005.jpg",
        linerNotes: "A great comeback as I celebrate friendship, honour my late mother, and embrace my African Roots through music. Sahwira Mukuru track honours masahwira makuru, as we need them at the end of time as we depart from this world. Amai Hwee pays tribute to my late mother, Tabeth Elizabeth Chikwenya, whose memory lives on in my heart. May her soul rest in peace. Rugare Rwauya encourages everyone to live pretty and enjoy life. Musikavanhu gives thanks to the Almighty for the gift of life, while Svaa Makudo reminds the younger generation of the ancient world and our rich cultural heritage. Finally, Rovambira confirms the deep roots of African music in me as we usher in our new Rovambira Dance. This album is a celebration of friendship, love, faith, life after life (in which masahwira plays a great part as we depart this world, hence the name of this album), and African identity.",
        signer: "Sekurutau",
        signoff: "Ndatenda hangu. Yours in music,",
        
        credits: {
            composer: "Bryn Taurai Mteki",
            arranger: "Bryn Taurai Mteki",
            leadVocals: "Bryn Taurai Mteki",
            backingVocals: "Jenitte, Christine, Fungai",
            leadGuitar: "Tendai Manzinde",
            acousticGuitar: "Forward Mazuruse",
            mbira1: "Tsuro",
            mbira2: "Gore",
            mbira3: "Samson",
            trombone: "Cannan Kamoyo",
            congas: "Moses Saize",
            shakers: "Samaita",
            bass: "Mashasha",
            drums: "Tyson & Mashasha",
            studio: "Music for Development Studios",
            engineer: "Isheunopa Jere",
            coverDesign: "ONEGRAFIX (+263 77 582 8275)"
        },

        tracks: [
            {
                number: "01",
                title: "Sahwira Mukuru",
                duration: "07:24",
                durationSec: 444,
                audioSrc: "1.SAHWIRA MUKURU.mp3",
                meaning: "Honours masahwira makuru (true lifelong friends and companions), as we need them at the end of time as we depart from this world."
            },
            {
                number: "02",
                title: "Amai Hwee",
                duration: "04:00",
                durationSec: 240,
                audioSrc: "2. AMAI HWEE.mp3",
                meaning: "Pays tribute to his late mother, Tabeth Elizabeth Chikwenya, whose memory lives on eternally in his heart."
            },
            {
                number: "03",
                title: "Rugare Rwauya",
                duration: "03:26",
                durationSec: 206,
                audioSrc: "3 .RUGARE RWAUYA.mp3",
                meaning: "A joyous celebration of peace and prosperity, encouraging everyone to live well and enjoy life."
            },
            {
                number: "04",
                title: "Musikavanhu",
                duration: "03:44",
                durationSec: 224,
                audioSrc: "4. MUSIKAVANHU.mp3",
                meaning: "Gives reverence and heartfelt thanks to the Almighty (Musikavanhu) for the priceless gift of life."
            },
            {
                number: "05",
                title: "Svaa Makudo",
                duration: "04:02",
                durationSec: 242,
                audioSrc: "5. SVAA MAKUDO .mp3",
                meaning: "Reminds the younger generation of the ancient world, indigenous wisdom, and our rich African cultural heritage."
            },
            {
                number: "06",
                title: "Rovambira",
                duration: "04:05",
                durationSec: 245,
                audioSrc: "6.ROVAMBIRA.mp3",
                meaning: "Confirms the deep rhythmic roots of African music as Sekurutau ushers in the vibrant new Rovambira Dance."
            }
        ],

        streamingPlatforms: [
            {
                name: "YouTube Music",
                icon: "youtube",
                label: "Watch & Listen on YouTube",
                url: "https://www.youtube.com/results?search_query=Sekurutau+Bryn+Taurai+Mteki"
            },
            {
                name: "Spotify",
                icon: "spotify",
                label: "Stream on Spotify",
                url: "https://open.spotify.com/search/Sekurutau%20Bryn%20Taurai%20Mteki"
            },
            {
                name: "Apple Music / iTunes",
                icon: "apple",
                label: "Get on iTunes / Apple Music",
                url: "https://music.apple.com/us/search?term=Sekurutau"
            },
            {
                name: "Deezer",
                icon: "deezer",
                label: "Listen on Deezer",
                url: "https://www.deezer.com/search/Sekurutau"
            }
        ]
    },

    // Verified complete discography from cv_text.txt
    discography: [
        {
            catalog: "BTM 011",
            title: "Sahwira Mukuru",
            year: "2026",
            type: "Album (CD)",
            badge: "Latest Release",
            description: "The momentous comeback album celebrating friendship, family roots, and African identity across 6 masterwork tracks.",
            highlight: "Featured Release",
            image: "IMG-20261011-WA0001.jpg"
        },
        {
            catalog: "BTM 09",
            title: "Makarekare",
            year: "2015",
            type: "Album (CD)",
            badge: "Masterwork",
            description: "An evocative exploration of ancient folklore and timeless mbira traditions.",
            highlight: "9th Studio Release",
            image: "../music.png"
        },
        {
            catalog: "BTM 08",
            title: "Vadzoka",
            year: "2007",
            type: "Album & DVD",
            badge: "Featured Selmar Mtukudzi",
            description: "Critically acclaimed album featuring Selmar Mtukudzi on backing vocals, produced with full visual DVD accompaniment.",
            highlight: "CD & DVD",
            image: "../music.png"
        },
        {
            catalog: "BTM 07",
            title: "Tsuro Magen'a",
            year: "2004",
            type: "Album (CD)",
            badge: "Classic",
            description: "Solidified Sekurutau as the defining voice on the Zimbabwean mbira music block.",
            highlight: "Chart Topper",
            image: "../music.png"
        },
        {
            catalog: "BTM 06",
            title: "Hamunyare",
            year: "2003",
            type: "Album (CD)",
            badge: "Roots Classic",
            description: "Intense social commentary woven through intricate mbira counter-melodies.",
            highlight: "6th Studio Release",
            image: "../music.png"
        },
        {
            catalog: "BTM 05",
            title: "Pfugama Unamate",
            year: "2003",
            type: "Album (CD)",
            badge: "Spiritual Roots",
            description: "Spiritual reflection acknowledging divine guidance and ancestral protection.",
            highlight: "Fan Favorite",
            image: "../music.png"
        },
        {
            catalog: "BTM 04",
            title: "Mwana Wevhu",
            year: "2002",
            type: "Album (CD)",
            badge: "Heritage",
            description: "Dedicated to the children of the soil and African continental consciousness.",
            highlight: "Heritage Anthem",
            image: "../music.png"
        },
        {
            catalog: "BTM 03",
            title: "Ndakura",
            year: "2001",
            type: "Album (CD)",
            badge: "Evolution",
            description: "Documenting artistic maturity and vocal power in contemporary Zimbabwean roots.",
            highlight: "Rapid Success",
            image: "../music.png"
        },
        {
            catalog: "BTM 02",
            title: "Kuyaruka",
            year: "2001",
            type: "Album (CD)",
            badge: "Breakthrough",
            description: "Follow-up to the landmark debut, reinforcing Sekurutau's unique sonic identity.",
            highlight: "Acclaimed Sequel",
            image: "../music.png"
        },
        {
            catalog: "BTM 01",
            title: "Kurauone",
            year: "2000",
            type: "Album (CD)",
            badge: "Platinum Debut",
            description: "Certified Platinum landmark debut that heralded the arrival of Sekurutau to the African roots music scene.",
            highlight: "Certified Platinum",
            image: "../music.png"
        }
    ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = MUSIC_DATA;
}
