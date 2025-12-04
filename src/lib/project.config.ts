interface Sponsor {
    name: string,
    logo: string,
    url: string,
    description: string
}

interface Link {
    name: string,
    url: string
}

interface Member {
    name: string,
    picture: string,
    function: string,
    description: string
}

export const sponsors: Sponsor[] = [
     {
       name: 'petzner',
       logo: '/petzner.png',
       url: 'http://www.petzner.at/',
       description: 'Raiffeisen Bank is der geilste Sponsor aller Zeiten.'
   },
   {
       name: 'Wiener Roither',
       logo: '/logo_sponsor.png',
       url: 'http',
       description: 'Supi dupi'
   },
   {
       name: 'Wiener Roither',
       logo: '/logo_sponsor.png',
       url: 'http',
       description: 'Supi dupi'
   },
   {
       name: 'Wiener Roither',
       logo: '/logo_sponsor.png',
       url: 'http',
       description: 'Supi dupi'
   },
   {
       name: 'Wiener Roither',
       logo: '/logo_sponsor.png',
       url: 'http',
       description: 'Supi dupi'
   },
   {
       name: 'Wiener Roither',
       logo: '/logo_sponsor.png',
       url: 'http',
       description: 'Supi dupi'
   }
   ,
   {
       name: 'Wiener Roither',
       logo: '/logo_sponsor.png',
       url: 'http',
       description: 'Supi dupi'
   }
   ,
   {
       name: 'Wiener Roither',
       logo: '/logo_sponsor.png',
       url: 'http',
       description: 'Supi dupi'
   }
]

export const members: Member[] = [
    {
        name:"Holzer Roland",
        function:"Obmann",
        picture:"/avatar_male.jpg",
        description:"Moasta"
    },
    {
        name:"Pirker Michael",
        function:"Stv. Obmann",
        picture:"/avatar_male.jpg",
        description:"Platzwart/Hirsch"
    },
    {
        name:"Jakeisch Michael",
        function:"Kassier",
        picture:"/avatar_male.jpg",
        description:"Rambo"
    },
    {
        name:"Schallegger Petra",
        function:"Stv. Kassier",
        picture:"/avatar_female.jpg",
        description:"Frau"
    },
    {
        name:"Hudson-Zaußnig Thomas",
        function:"Schriftführer",
        picture:"/avatar_male.jpg",
        description:"IT guy"
    },
    {
        name:"Bitte bewerben",
        function:"Stv. Schriftführer",
        picture:"/avatar_female.jpg",
        description:"schriftlich"
    },
]

export const footer: Link[] = [
     {
        name: "AGB",
        url: "/AGB"
    },
    {
        name: "Impressum",
        url: "/Impressum"
    }
]

export const navigation: Link[] = [
    {
        name:"Über uns",
        url:"/#team"
    },
    // {
    //     name:"News",
    //     url:"/"
    // },
    {
        name:"Sponsoren",
        url:"/#sponsors"
    },
    {
        name:"Kontakt",
        url:"/#contact"
    }
]