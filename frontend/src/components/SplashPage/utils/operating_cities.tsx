export const operatingCities = (country: string): string[] => { 
    const citiesByCountry: {[key: string]: string[]} = {
        'USA':[
           'Akron',
           'Albuquerque',
           'Bridgeport',
           'Concord',
           'Dayton',
           'El Paso',
           'Hartford',
           'Houston',
           'Indianapolis',
           'McAllen',
           'Mesa',
           'Milwaukee',
           'Nashville',
           'New Orleans',
           'Oklahoma City',
           'Omaha',
           'Orlando',
           'Palm Bay',
           'Providence',
           'Queens',
           'San Antonio',
           'Stony Brook',
           'Tucson',
           'West Hollywood'
        ]
    };
        
    return citiesByCountry[country] || [];
};
