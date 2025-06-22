import React from "react";
const countries = [
  { countryCode: 'IN', name: 'India' },
  { countryCode: 'US', name: 'United States' },
  { countryCode: 'CA', name: 'Canada' },
  { countryCode: 'AU', name: 'Australia'},
  { countryCode: 'UK', name: 'England' },
  { countryCode: 'FR', name: 'France' },
  { countryCode: 'DE', name: 'Germany'},
  { countryCode: 'JP', name: 'Japan' },
  { countryCode: 'BR', name: 'Brazil' },
  { countryCode: 'ZA', name: 'South Africa' },
  //We can add more countries as needed
];
const cities = {
    IN: [
        { id: 1, name: 'Delhi' },
        { id: 2, name: 'Mumbai' },
        { id: 3, name: 'Bangalore' }
    ],
    US: [
        { id: 4, name: 'New York' },
        { id: 5, name: 'Los Angeles' },
        { id: 6, name: 'Chicago' }
    ],
    CA: [
        { id: 7, name: 'Toronto' },
        { id: 8, name: 'Vancouver' },
        { id: 9, name: 'Montreal' },
        { id: 10, name: 'Calgary' }
    ],
    AU: [
        { id: 11, name: 'Sydney' },
        { id: 12, name: 'Melbourne' },
        { id: 13, name: 'Brisbane' },
        { id: 14, name: 'Perth' }
    ],
    UK: [
        { id: 15, name: 'London' },
        { id: 16, name: 'Manchester' },
        { id: 17, name: 'Birmingham' },
        { id: 18, name: 'Liverpool' }
    ],
    FR: [
        { id: 19, name: 'Paris' },
        { id: 20, name: 'Marseille' },
        { id: 21, name: 'Lyon' }
    ],
    DE: [
        { id: 22, name: 'Berlin' },
        { id: 23, name: 'Munich' },
        { id: 24, name: 'Hamburg' }
    ],
    JP: [
        { id: 25, name: 'Tokyo' },
        { id: 26, name: 'Osaka' },
        { id: 27, name: 'Kyoto' }
    ],
    BR: [
        { id: 28, name: 'São Paulo' },
        { id: 29, name: 'Rio de Janeiro' },
        { id: 30, name: 'Salvador' }
    ],
    ZA: [
        { id: 31, name: 'Cape Town' },
        { id: 32, name: 'Johannesburg' },
        { id: 33, name: 'Durban' }
    ],
    // Add more countries and cities as needed...
};




export default countries;

export {cities};