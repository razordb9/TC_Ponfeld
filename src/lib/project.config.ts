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
       url: '/',
       description: 'Supi dupi'
   },
   {
       name: 'Wiener Roither',
       logo: '/logo_sponsor.png',
       url: '/',
       description: 'Supi dupi'
   },
   {
       name: 'Wiener Roither',
       logo: '/logo_sponsor.png',
       url: '/',
       description: 'Supi dupi'
   },
   {
       name: 'Wiener Roither',
       logo: '/logo_sponsor.png',
       url: '/',
       description: 'Supi dupi'
   },
   {
       name: 'Wiener Roither',
       logo: '/logo_sponsor.png',
       url: '/',
       description: 'Supi dupi'
   }
   ,
   {
       name: 'Wiener Roither',
       logo: '/logo_sponsor.png',
       url: '/',
       description: 'Supi dupi'
   }
   ,
   {
       name: 'Wiener Roither',
       logo: '/logo_sponsor.png',
       url: '/',
       description: 'Supi dupi'
   }
]

export const members: Member[] = [
    {
        name:"Holzer Roland",
        function:"Obmann",
        picture:"p1",
        description:"Moasta"
    },
    {
        name:"Pirker Michael",
        function:"Stv. Obmann",
        picture:"p2",
        description:"Platzwart/Hirsch"
    },
    {
        name:"Jakeisch Michael",
        function:"Kassier",
        picture:"p3",
        description:"Rambo"
    },
    {
        name:"Schallegger Petra",
        function:"Stv. Kassier",
        picture:"p4",
        description:"Frau"
    },
    {
        name:"Hudson-Zaußnig Thomas",
        function:"Schriftführer",
        picture:"p5",
        description:"IT guy"
    },
    {
        name:"Bitte bewerben",
        function:"Stv. Schriftführer",
        picture:"p6",
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
    //     name:"Blog",
    //     url:"/Blog"
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