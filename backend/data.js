import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Sohail',
      email: 'admin@energy.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Asad',
      email: 'Asad@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      //_id:'123',
      name: 'LG 490 Liters Top Mount Refrigerator',
      slug: 'LG-490-Liters-Top-Mount-Refrigerator',
      image_url:
        'https://m.media-amazon.com/images/I/81uiA63TJjL._AC_UL320_.jpg',
      category: 'Refrigerator',
      image: '/images/p001.jpg',
      price: 1796.0,
      brand: 'lg',
      rating: 3.7,
      numReviews: 6,
      description:
        '490 Liters Top Mount Refrigerator, Dark Graphite -GN-B492SLCL',
      url: 'https://www.amazon.ae/LG-Liters-Refrigerator-Graphite-GN-B492SLCL/dp/B088DMB6ST/ref=sr_1_25?c=ts&keywords=Refrigerators&qid=1651818815&refinements=p_36%3A70000-&rnid=15160318031&s=appliances&sr=1-25&ts_id=15174969031',
      energy: 130,
      energyRating: 5,
      countInStock: 5,
      model: 'GN-B492SLCL',
      hours: 1,
    },
    {
      //_id:'124',
      name: 'Samsung Refrigerator Double Door 750Liters',
      slug: 'Samsung-Refrigerator-Double-Door-750Liters',
      image_url:
        'https://m.media-amazon.com/images/I/616HZWAMe5L._AC_UL320_.jpg',
      category: 'Refrigerator',
      image: '/images/p002.jpg',
      price: 2630.0,
      brand: 'samsung',
      rating: 5,
      numReviews: 1,
      description:
        'Refrigerator Double Door 750Liters Gross Capacity Top Mount Freezer RT75K60001S8-1 Year Full & 10 Year Compressor Warranty',
      url: 'https://www.amazon.ae/Refrigerator-750Liters-Capacity-RT75K60001S8-1-Compressor/dp/B08DTZMH5G/ref=sr_1_27?c=ts&keywords=Refrigerators&qid=1651818815&refinements=p_36%3A70000-&rnid=15160318031&s=appliances&sr=1-27&ts_id=15174969031',
      energy: 130,
      energyRating: 5,
      countInStock: 10,
      model: 'RT75K60001S8',
      hours: 1,
    },
    {
      //_id:'125',
      name: 'Hoover Upright Refrigerator',
      slug: 'Hoover-Upright-Refrigerator',
      image_url:
        'https://m.media-amazon.com/images/I/51RpAbtqLML._AC_UL320_.jpg',
      category: 'Refrigerator',
      image: '/images/p3.jpg',
      price: 2005.0,
      brand: 'hoover',
      rating: 0,
      numReviews: 0,
      description:
        'Upright Refrigerator, 480 Liters, No Frost, Steel Finish, HSR-480-S',
      url: 'https://www.amazon.ae/Hoover-Upright-Refrigerator-Liters-HSR-480-S/dp/B09R16MN2B/ref=sr_1_53?c=ts&keywords=Refrigerators&qid=1651819715&refinements=p_36%3A70000-&rnid=15160318031&s=appliances&sr=1-53&ts_id=15174969031',
      energy: 500,
      energyRating: 3,
      countInStock: 0,
      model: 'HSR-H480-S',
      hours: 1,
    },
  ],
};
export default data;
