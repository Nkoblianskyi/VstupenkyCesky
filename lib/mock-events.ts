export interface Partner {
  id: string
  name: string
  url: string
  logo?: string
}

export interface EventTicket {
  id: string
  partnerId: string
  partnerName: string
  price: number
  faceValue: number
  availability: 'available' | 'low' | 'sold-out'
  url: string
}

export interface Event {
  id: string
  title: string
  titleCs: string
  date: string
  time: string
  venue: string
  venueCs: string
  city: string
  category: 'koncert' | 'sport' | 'divadlo' | 'festival' | 'ostatní'
  categoryCs: string
  description: string
  descriptionCs: string
  image?: string
  tickets: EventTicket[]
}

export const partners: Partner[] = [
  {
    id: 'ticketportal',
    name: 'Ticketportal',
    url: 'https://www.ticketportal.cz',
  },
  {
    id: 'ticketmaster-cz',
    name: 'Ticketmaster Czech',
    url: 'https://www.ticketmaster.cz',
  },
  {
    id: 'eventim-cz',
    name: 'Eventim Czech',
    url: 'https://www.eventim.cz',
  },
  {
    id: 'stubhub',
    name: 'StubHub',
    url: 'https://www.stubhub.com',
  },
  {
    id: 'viagogo',
    name: 'Viagogo',
    url: 'https://www.viagogo.com',
  },
  {
    id: 'ticketmaster',
    name: 'Ticketmaster Resale',
    url: 'https://www.ticketmaster.com',
  },
  {
    id: 'ticketswap',
    name: 'TicketSwap',
    url: 'https://www.ticketswap.com',
  },
  {
    id: 'seatgeek',
    name: 'SeatGeek',
    url: 'https://seatgeek.com',
  },
]

export const events: Event[] = [
  {
    id: 'coldplay-praha-2025',
    title: 'Coldplay - Music of the Spheres Tour',
    titleCs: 'Coldplay - Music of the Spheres Tour',
    date: '2026-08-15',
    time: '20:00',
    venue: 'Eden Arena',
    venueCs: 'Eden Aréna',
    city: 'Praha',
    category: 'koncert',
    categoryCs: 'Koncert',
    description: 'Experience the magical performance of Coldplay on their Music of the Spheres World Tour in Prague.',
    descriptionCs: 'Zažijte magické vystoupení Coldplay na jejich světovém turné Music of the Spheres v Praze.',
    image: '/events/coldplay-praha.jpg',
    tickets: [
      {
        id: '1',
        partnerId: 'stubhub',
        partnerName: 'StubHub',
        price: 3500,
        faceValue: 2800,
        availability: 'available',
        url: 'https://www.stubhub.com/',
      },
      {
        id: '2',
        partnerId: 'viagogo',
        partnerName: 'Viagogo',
        price: 3650,
        faceValue: 2800,
        availability: 'available',
        url: 'https://www.viagogo.com',
      },
      {
        id: '3',
        partnerId: 'ticketswap',
        partnerName: 'TicketSwap',
        price: 3200,
        faceValue: 2800,
        availability: 'low',
        url: 'https://www.ticketswap.com',
      },
    ],
  },
  {
    id: 'ac-sparta-praha',
    title: 'AC Sparta Praha vs Slavia Praha',
    titleCs: 'AC Sparta Praha vs Slavia Praha',
    date: '2026-09-21',
    time: '18:00',
    venue: 'Generali Arena',
    venueCs: 'Generali Aréna',
    city: 'Praha',
    category: 'sport',
    categoryCs: 'Sport',
    description: 'The biggest derby in Czech football - Sparta vs Slavia Prague.',
    descriptionCs: 'Největší derby českého fotbalu - Sparta vs Slavia Praha.',
    image: '/events/sparta-slavia.jpg',
    tickets: [
      {
        id: '4',
        partnerId: 'ticketmaster',
        partnerName: 'Ticketmaster Resale',
        price: 1200,
        faceValue: 850,
        availability: 'available',
        url: 'https://www.ticketmaster.com',
      },
      {
        id: '5',
        partnerId: 'stubhub',
        partnerName: 'StubHub',
        price: 1350,
        faceValue: 850,
        availability: 'available',
        url: 'https://www.stubhub.com',
      },
    ],
  },
  {
    id: 'imagine-dragons-brno',
    title: 'Imagine Dragons - Loom World Tour',
    titleCs: 'Imagine Dragons - Loom World Tour',
    date: '2026-07-08',
    time: '19:30',
    venue: 'DRFG Arena',
    venueCs: 'DRFG Aréna',
    city: 'Brno',
    category: 'koncert',
    categoryCs: 'Koncert',
    description: 'Imagine Dragons bring their electrifying Loom World Tour to Brno.',
    descriptionCs: 'Imagine Dragons přivážejí své elektrifikující Loom World Tour do Brna.',
    image: '/events/imagine-dragons-brno.jpg',
    tickets: [
      {
        id: '6',
        partnerId: 'viagogo',
        partnerName: 'Viagogo',
        price: 2800,
        faceValue: 2200,
        availability: 'available',
        url: 'https://www.viagogo.com',
      },
      {
        id: '7',
        partnerId: 'seatgeek',
        partnerName: 'SeatGeek',
        price: 2650,
        faceValue: 2200,
        availability: 'available',
        url: 'https://seatgeek.com',
      },
      {
        id: '8',
        partnerId: 'ticketswap',
        partnerName: 'TicketSwap',
        price: 2400,
        faceValue: 2200,
        availability: 'low',
        url: 'https://www.ticketswap.com',
      },
    ],
  },
  {
    id: 'hamlet-narodni-divadlo',
    title: 'Hamlet - National Theatre',
    titleCs: 'Hamlet - Národní divadlo',
    date: '2026-10-12',
    time: '19:00',
    venue: 'National Theatre Prague',
    venueCs: 'Národní divadlo Praha',
    city: 'Praha',
    category: 'divadlo',
    categoryCs: 'Divadlo',
    description: 'Classic Shakespearean drama performed at the prestigious National Theatre.',
    descriptionCs: 'Klasické shakespearovské drama uvedené v prestižním Národním divadle.',
    image: '/events/hamlet-narodni.jpg',
    tickets: [
      {
        id: '9',
        partnerId: 'ticketmaster',
        partnerName: 'Ticketmaster Resale',
        price: 650,
        faceValue: 500,
        availability: 'available',
        url: 'https://www.ticketmaster.com/',
      },
      {
        id: '10',
        partnerId: 'stubhub',
        partnerName: 'StubHub',
        price: 700,
        faceValue: 500,
        availability: 'available',
        url: 'https://www.stubhub.com',
      },
    ],
  },
  {
    id: 'colours-of-ostrava',
    title: 'Colours of Ostrava 2026',
    titleCs: 'Colours of Ostrava 2026',
    date: '2026-07-16',
    time: '14:00',
    venue: 'Dolní Oblast Vítkovice',
    venueCs: 'Dolní Oblast Vítkovice',
    city: 'Ostrava',
    category: 'festival',
    categoryCs: 'Festival',
    description: 'One of the biggest multi-genre music festivals in Central Europe.',
    descriptionCs: 'Jeden z největších multižánrových hudebních festivalů ve střední Evropě.',
    image: '/events/colours-ostrava.jpg',
    tickets: [
      {
        id: '11',
        partnerId: 'viagogo',
        partnerName: 'Viagogo',
        price: 4200,
        faceValue: 3800,
        availability: 'available',
        url: 'https://www.viagogo.com',
      },
      {
        id: '12',
        partnerId: 'ticketswap',
        partnerName: 'TicketSwap',
        price: 3950,
        faceValue: 3800,
        availability: 'available',
        url: 'https://www.ticketswap.com',
      },
    ],
  },
  {
    id: 'ed-sheeran-praha',
    title: 'Ed Sheeran - Mathematics Tour',
    titleCs: 'Ed Sheeran - Mathematics Tour',
    date: '2026-06-25',
    time: '20:00',
    venue: 'Letňany Airport',
    venueCs: 'Letiště Letňany',
    city: 'Praha',
    category: 'koncert',
    categoryCs: 'Koncert',
    description: 'Ed Sheeran performs his biggest hits at the special open-air venue in Prague.',
    descriptionCs: 'Ed Sheeran zahraje své největší hity na speciálním open-air místě v Praze.',
    image: '/events/ed-sheeran-praha.jpg',
    tickets: [
      {
        id: '13',
        partnerId: 'stubhub',
        partnerName: 'StubHub',
        price: 3200,
        faceValue: 2600,
        availability: 'available',
        url: 'https://www.stubhub.com',
      },
      {
        id: '14',
        partnerId: 'seatgeek',
        partnerName: 'SeatGeek',
        price: 3100,
        faceValue: 2600,
        availability: 'available',
        url: 'https://seatgeek.com',
      },
      {
        id: '15',
        partnerId: 'viagogo',
        partnerName: 'Viagogo',
        price: 3350,
        faceValue: 2600,
        availability: 'low',
        url: 'https://www.viagogo.com',
      },
    ],
  },
]

export function getEventById(id: string): Event | undefined {
  return events.find((event) => event.id === id)
}

export function getEventsByCategory(category: Event['category']): Event[] {
  return events.filter((event) => event.category === category)
}

export function getPartnerById(id: string): Partner | undefined {
  return partners.find((partner) => partner.id === id)
}
