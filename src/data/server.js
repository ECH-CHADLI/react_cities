// mirageServer.js
import { createServer, Model } from 'miragejs';

const cities = [
  {
    id: 1,
    name: "Fes",
    country: "Morocco",
    currency: "Moroccan Dirham",
    timezone: "GMT",
    language: "Arabic",
    culture1: "Islamic Heritage",
    culture2: "Traditional Crafts",
    destinations: [
      {
        id: 1,
        name: "Al-Attarine Madrasa",
        description: "Historic madrasa known for its intricate tilework and serene courtyard.",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/09/Al-Attarine_Madrasa_%288753523807%29.jpg"
      },
      {
        id: 2,
        name: "Bou Inania Madrasa",
        description: "Beautifully decorated Islamic school showcasing exquisite Moroccan architecture.",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Bou_Inania_Madrasa_2011.jpg"
      },
      {
        id: 3,
        name: "Medina of Fes",
        description: "A UNESCO World Heritage Site, the ancient walled city known for its labyrinthine streets and historic architecture.",
        image: "https://previews.123rf.com/images/dagobert1620/dagobert16201704/dagobert1620170400043/76379414-f%C3%A8s-maroc-28-f%C3%A9vrier-2017-la-vie-dans-l-ancienne-m%C3%A9dina-f%C3%A8s.jpg"
      },
      {
        id: 4,
        name: "Chouara Tannery",
        description: "Famous tannery where leather is dyed using traditional methods, providing a unique sensory experience.",
        image: "https://www.barcelo.com/guia-turismo/wp-content/uploads/2023/09/curtiduria-chouwara-1.jpg"
      },
      {
        id: 5,
        name: "Borj Nord",
        description: "Historical fortress offering panoramic views of Fes and its surroundings.",
        image: "https://www.fes.fr/f/marruecos/fez/guia/museo-armas.jpg"
      }
    ],
    dishes: [
      {
        id: 1,
        name: "Couscous",
        description: "Traditional Moroccan dish made from steamed crushed wheat, usually served with meat and vegetables.",
        image: "https://img.cuisineaz.com/1024x768/2022/02/23/i183013-couscous-marocain.webp"
      },
      {
        id: 2,
        name: "Tagine",
        description: "Slow-cooked stew, typically made with meat, vegetables, and a blend of Moroccan spices.",
        image: "https://www.cuisinonsencouleurs.fr/wp-content/uploads/2012/02/DSC_0196.jpg"
      },
      {
        id: 3,
        name: "Pastilla",
        description: "Savory-sweet pastry filled with pigeon meat, almonds, and spices, topped with powdered sugar.",
        image: "https://www.hairybikers.com/uploads/images/_recipeImage/CHICKEN_PASTILLA.jpg"
      }
    ]
  },
  {
    id: 2,
    name: "Rabat",
    country: "Morocco",
    currency: "Moroccan Dirham",
    timezone: "GMT",
    language: "Arabic",
    culture1: "Historical Sites",
    culture2: "Government and Diplomacy",
    destinations: [
      {
        id: 1,
        name: "Kasbah of the Udayas",
        description: "Ancient citadel overlooking the Atlantic Ocean, known for its narrow streets and historic architecture.",
        image: "https://www.rabat-maroc.net/wp-content/uploads/2019/04/bab-el-kebir-oudayas-esplanade.jpg"
      },
      {
        id: 2,
        name: "Hassan Tower",
        description: "Historical minaret and mosque, part of an incomplete mosque and mausoleum complex.",
        image: "https://www.visitrabat.com/wp-content/uploads/2019/05/hassan_33-min.jpg"
      },
      {
        id: 3,
        name: "Chellah Necropolis",
        description: "Ruins of a Roman city turned into a medieval Muslim necropolis, surrounded by gardens.",
        image: "https://travelistica.com/shared/images/Geographic/39/big/shellah-necropolis_498052496_chellah-_39301.jpg"
      },
      {
        id: 4,
        name: "Royal Palace of Rabat",
        description: "Official residence of the King of Morocco, known for its impressive gates and architecture.",
        image: "https://www.gpsmycity.com/img/gd_sight/44658.jpg"
      },
      {
        id: 5,
        name: "Oudaias Museum",
        description: "Museum showcasing Moroccan arts and crafts, located in the historic Kasbah district.",
        image: "https://www.diptykmag.com/wp-content/uploads/2023/01/UNE-MUSEE-OUDAYA-1024x576.jpg"
      }
    ],
    dishes: [
      {
        id: 1,
        name: "Mechoui",
        description: "Slow-roasted lamb, seasoned with traditional Moroccan spices, often prepared for festive occasions.",
        image: "https://i.ytimg.com/vi/QznqhpI0H_w/maxresdefault.jpg"
      },
      {
        id: 2,
        name: "Maakouda",
        description: "Fried potato patties, a popular street food often served with various toppings.",
        image: "https://gourmandiseassia.fr/wp-content/uploads/2019/11/20191117_194601.jpg"
      },
      {
        id: 3,
        name: "Pastilla with Seafood",
        description: "A seafood version of the traditional pastilla, featuring a delicate blend of flavors.",
        image: "https://www.foodeals.ma/blog/wp-content/uploads/2020/03/seafood-bastilla-bigstock-picturepartners-scaled.jpg"
      }
    ]
  },
  {
    id: 3,
    name: "Tangier",
    country: "Morocco",
    currency: "Moroccan Dirham",
    timezone: "GMT",
    language: "Arabic",
    culture1: "Multicultural Influence",
    culture2: "Art and Music",
    destinations: [
      {
        id: 1,
        name: "Kasbah Museum",
        description: "Museum housed in the former Sultan's palace, featuring Moroccan artifacts and stunning views of the city.",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/1c/69/3f/main-courtyard.jpg?w=1200&h=1200&s=1"
      },
      {
        id: 2,
        name: "Medina of Tangier",
        description: "Historic walled city with bustling markets, narrow streets, and a mix of Moorish and Andalusian architecture.",
        image: "https://www.barcelo.com/guia-turismo/wp-content/uploads/2022/01/tanger-medina-pal.jpg"
      },
      {
        id: 3,
        name: "Caves of Hercules",
        description: "Natural caves at the base of Cape Spartel, legendary for their association with Hercules.",
        image: "https://i.redd.it/e8vhi3i56z491.jpg"
      },
      {
        id: 4,
        name: "Grand Socco",
        description: "Vibrant square at the entrance of the medina, known for its markets, cafes, and cultural events.",
        image: "https://www.costacroisieres.fr/content/dam/costa/costa-magazine/article-images/6eae842/tangeri_2.jpg.image.1296.974.high.jpg"
      },
      {
        id: 5,
        name: "Tangier American Legation Museum",
        description: "The only historic landmark of the United States on foreign soil, showcasing cultural and diplomatic history.",
        image: "https://oxfordre.com/africanhistory/doc/10.1093/acrefore/9780190277734.001.0001/full-acrefore-9780190277734-e-990-graphic-003.jpg"
      }
    ],
    dishes: [
      {
        id: 1,
        name: "Chermoula Fish",
        description: "Grilled or baked fish marinated in chermoula, a flavorful blend of herbs, spices, and lemon.",
        image: "https://bluedoorcuisine.com/wp-content/uploads/2020/01/IMG_6601.jpeg"
      },
      {
        id: 2,
        name: "Briouat",
        description: "Savory pastries filled with a mixture of spiced meat, cheese, or seafood, wrapped in thin dough and fried.",
        image: "https://i2.wp.com/eatlikebourdain.com/wp-content/uploads/2023/07/Anthony-Bourdain-in-Tangier-Briouat.png?ssl=1"
      },
      {
        id: 3,
        name: "Tajine with Apricots and Almonds",
        description: "A sweet and savory tajine dish featuring tender meat, apricots, almonds, and aromatic spices.",
        image: "https://assets.epicurious.com/photos/61f436b55f594e6a062fe09a/1:1/w_4634,h_4634,c_limit/ChickenTagine_RECIPE_012722_26618.jpg"
      }
    ]
  },
  {
    id: 4,
    name: "Sahara Desert",
    country: "Morocco",
    currency: "Moroccan Dirham",
    timezone: "GMT",
    language: "Arabic",
    culture1: "Nomadic Lifestyle",
    culture2: "Berber Traditions",
    destinations: [
      {
        id: 1,
        name: "Erg Chebbi",
        description: "A mesmerizing sand dune field, known for its towering dunes and stunning desert landscapes.",
        image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/39/8b/74.jpg"
      },
      {
        id: 2,
        name: "Merzouga",
        description: "A desert village near Erg Chebbi, famous for its camel trekking and desert camps.",
        image: "https://www.alibabuy.com/photos/library/1500/28206.jpg"
      },
      {
        id: 3,
        name: "Todra Gorge",
        description: "A spectacular canyon in the eastern part of the High Atlas Mountains, with towering limestone walls.",
        image: "https://wanderingwagars.com/wp-content/uploads/2022/12/Todra-Gorge-Morocco-Feature.jpg"
      },
      {
        id: 4,
        name: "Dades Valley",
        description: "A lush valley known for its scenic oases, traditional kasbahs, and beautiful landscapes.",
        image: "https://www.tracedirecte.com/media/original_images/gorges-du-dades-maroc.jpg.1920x0_q85_format-jpg.jpg"
      },
      {
        id: 5,
        name: "Ziz Valley",
        description: "A green oasis in the Sahara, characterized by the Ziz River and palm groves.",
        image: "https://www.uniquesaharatours.com/wp-content/uploads/2023/11/Ziz-Valley-1.png"
      }
    ],
    dishes: [
      {
        id: 1,
        name: "Couscous with Dates",
        description: "A sweet variation of couscous, made with dates, almonds, and a touch of cinnamon.",
        image: "https://tastespace.files.wordpress.com/2010/07/dsc_9640-1porn.jpg"
      },
      {
        id: 2,
        name: "Berber Pizza (Medfouna)",
        description: "Traditional stuffed bread filled with a mixture of meat, vegetables, and spices, baked in the sand.",
        image: "https://ychef.files.bbci.co.uk/976x549/p05vtqhl.jpg"
      },
      {
        id: 3,
        name: "Mint Tea",
        description: "A refreshing and aromatic tea, often served in traditional Moroccan style with plenty of sugar.",
        image: "https://moroccanfoodtour.com/wp-content/uploads/2020/07/moroccan-food-tour-Moroccan-mint-tea-1.jpg"
      }
    ]
  },
  {
    id: 5,
    name: "Seoul",
    country: "South Korea",
    currency: "South Korean Won",
    timezone: "KST",
    language: "Korean",
    culture1: "K-pop and Entertainment",
    culture2: "Historical Palaces",
    destinations: [
      {
        id: 1,
        name: "Gyeongbokgung Palace",
        description: "The largest of the Five Grand Palaces built during the Joseon Dynasty, known for its stunning architecture and expansive grounds.",
        image: "https://www.agoda.com/wp-content/uploads/2019/05/Gyeongbokgung-palace-Seoul-Front-view-of-palace.jpg"
      },
      {
        id: 2,
        name: "N Seoul Tower",
        description: "Iconic communication and observation tower located on Namsan Mountain, offering panoramic views of the city.",
        image: "https://t4.ftcdn.net/jpg/04/49/61/89/360_F_449618982_FZWI9M2BNTKbldWU6fQBhVFVfkgKb3Vb.jpg"
      },
      {
        id: 3,
        name: "Bukchon Hanok Village",
        description: "A traditional Korean village with well-preserved hanok (traditional Korean houses), providing a glimpse into Seoul's past.",
        image: "https://as2.ftcdn.net/v2/jpg/00/99/74/59/1000_F_99745940_3CS9IaSdV4i6VtXy49Sgc1hzvlQXWQvQ.jpg"
      },
      {
        id: 4,
        name: "Dongdaemun Design Plaza",
        description: "Landmark of Seoul's design and fashion industry, featuring a unique architecture designed by Zaha Hadid.",
        image: "https://upload.wikimedia.org/wikipedia/en/8/8f/Dongdaemun_Design_Plaza_at_night%2C_Seoul%2C_Korea.jpg"
      },
      {
        id: 5,
        name: "Myeongdong Shopping Street",
        description: "One of Seoul's main shopping districts, known for its vibrant street food, fashion boutiques, and beauty stores.",
        image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/39/b3/15.jpg"
      }
    ],
    dishes: [
      {
        id: 1,
        name: "Kimchi",
        description: "Fermented vegetables, usually cabbage or radishes, with chili pepper, garlic, ginger, and other seasonings.",
        image: "https://www.seriouseats.com/thmb/m16sray_HxYpJebVbXMxv906bhk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20210527-baechu-kimchi-vicky-wasik-seriouseats-seriouseats-3-18a2d6d7d1d74a7a82cb13ed350218be.jpg"
      },
      {
        id: 2,
        name: "Bibimbap",
        description: "A mixed rice dish topped with vegetables, sliced meat, a fried egg, and gochujang (chili pepper paste).",
        image: "https://peaktoplate.com/wp-content/uploads/2022/06/pronghorn-bibimbap-in-bowl-with-chopsticks.jpg"
      },
      {
        id: 3,
        name: "Korean BBQ",
        description: "Grilled meat, often beef, pork, or chicken, at the dining table, with a variety of side dishes.",
        image: "https://cdn.vox-cdn.com/uploads/chorus_image/image/70552091/antoya_3.0.jpg"
      }
    ]
  },
  {
    id: 6,
    name: "Busan",
    country: "South Korea",
    currency: "South Korean Won",
    timezone: "KST",
    language: "Korean",
    culture1: "Maritime Heritage",
    culture2: "Beaches and Nature",
    destinations: [
      {
        id: 1,
        name: "Haeundae Beach",
        description: "One of Busan's most famous and popular beaches, known for its soft sand and clear waters.",
        image: "https://static.wixstatic.com/media/0505b9_54b039db12a1407ea67e5f95953b1269~mv2.jpg/v1/crop/x_0,y_0,w_1324,h_838/fill/w_640,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Haeundae%20Beach%20G.jpg"
      },
      {
        id: 2,
        name: "Gamcheon Culture Village",
        description: "A vibrant and artistic village with colorful houses built along the hillside, often referred to as the 'Machu Picchu of Busan.'",
        image: "https://thereshegoesagain.org/wp-content/uploads/2020/04/GamcheonCultureVillage22-1440x948.jpg"
      },
      {
        id: 3,
        name: "Beomeosa Temple",
        description: "A historic Buddhist temple founded in 678 AD, set in the beautiful Geumjeongsan Mountain.",
        image: "https://www.shoreexcursions.asia/wp-content/uploads/2016/10/Beomeosa-Temple-Busan-Korea.jpg"
      },
      {
        id: 4,
        name: "Jagalchi Fish Market",
        description: "Korea's largest seafood market, offering a wide variety of fresh seafood and a bustling atmosphere.",
        image: "https://dailytravelpill.com/wp-content/uploads/2019/02/Jagalchi-Fish-Market-Busan-10.jpg"
      },
      {
        id: 5,
        name: "Taejongdae Park",
        description: "A natural park with stunning cliffs, panoramic views of the ocean, and a lighthouse.",
        image: "https://www.visitbusan.net/uploadImgs/files/cntnts/20191222180830266_oen"
      }
    ],
    dishes: [
      {
        id: 1,
        name: "Dwaeji Gukbap",
        description: "A hot soup with pork and rice, flavored with various spices, herbs, and condiments.",
        image: "https://www.tastingtable.com/img/gallery/busans-flavorful-pork-soup-dwaeji-gukbap/l-intro-1669220365.jpg"
      },
      {
        id: 2,
        name: "Ssiat Hotteok",
        description: "A type of filled Korean pancake, traditionally eaten during the winter season, filled with seeds, brown sugar, honey, peanuts, and cinnamon.",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/17/58/d5/76/photo1jpg.jpg"
      },
      {
        id: 3,
        name: "Milmyeon",
        description: "A Korean noodle dish in a chilled, tangy broth, often served with thinly sliced vegetables and sometimes boiled eggs.",
        image: "https://static.wixstatic.com/media/a27d24_de6453534aa742e2b2f448e5ccb11950~mv2.jpg/v1/fill/w_600,h_622,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a27d24_de6453534aa742e2b2f448e5ccb11950~mv2.jpg"
      }
    ]
  },
  {
    id: 7,
    name: "Incheon",
    country: "South Korea",
    currency: "South Korean Won",
    timezone: "KST",
    language: "Korean",
    culture1: "Modern Urban Development",
    culture2: "International Airport Hub",
    destinations: [
      {
        id: 1,
        name: "Incheon Chinatown",
        description: "Korea's only official Chinatown, featuring traditional Chinese architecture, shops, and a variety of Chinese cuisine.",
        image: "https://static.wixstatic.com/media/0505b9_d51a7be500574267a8fe4434867c06ee~mv2.jpg/v1/fill/w_640,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0505b9_d51a7be500574267a8fe4434867c06ee~mv2.jpg"
      },
      {
        id: 2,
        name: "Incheon Grand Park",
        description: "A large urban park with walking trails, a zoo, and beautiful gardens, providing a peaceful escape in the city.",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/11/00/d8/d0/incheon-grand-park.jpg"
      },
      {
        id: 3,
        name: "Songdo Central Park",
        description: "An iconic park in the Songdo International Business District, featuring a central waterway, sculptures, and walking paths.",
        image: "https://thumbs.dreamstime.com/b/central-park-d-incheon-cor%C3%A9e-songdo-%C3%A0-du-sud-99969026.jpg"
      },
      {
        id: 4,
        name: "Incheon Bridge",
        description: "A modern cable-stayed bridge connecting Yeongjong Island and the Incheon mainland, offering scenic views of the surrounding area.",
        image: "https://mediaim.expedia.com/destination/1/9f417fc7e438dbd5ca8246ca24d484ab.jpg"
      },
      {
        id: 5,
        name: "Incheon Art Platform",
        description: "A cultural complex located in the former Incheon Station, featuring art exhibitions, performances, and creative spaces.",
        image: "https://resartis.org/wp-content/uploads/job-manager-uploads/main_image/2019/09/low_Incheon-Art-Platform-Exhibition-4-1203x800.jpg"
      }
    ],
    dishes: [
      {
        id: 1,
        name: "Incheon Galbi",
        description: "A variation of Korean BBQ short ribs, marinated and grilled to perfection, often enjoyed with a side of fresh vegetables.",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/10/6c/ee/5e/photo0jpg.jpg"
      },
      {
        id: 2,
        name: "Jajangmyeon",
        description: "A popular Korean-Chinese noodle dish with thick black bean sauce, vegetables, and sometimes pork or seafood.",
        image: "https://i.pinimg.com/736x/b8/f6/11/b8f61124728013cf8aa00a98da1b6590.jpg"
      },
      {
        id: 3,
        name: "Incheon Tangsuyuk",
        description: "Sweet and sour crispy pork dish, often served with a tangy sauce and colorful vegetables.",
        image: "https://thumbs.dreamstime.com/b/tangsuyuk-sweet-sour-pork-popular-korean-chinese-sweet-sour-pork-dish-crispy-deep-fried-meat-delicious-sweet-196034072.jpg"
      }
    ]
  },
  {
    id: 8,
    name: "Tokyo",
    country: "Japan",
    currency: "Japanese Yen",
    timezone: "JST",
    language: "Japanese",
    culture1: "Modern Urban Living",
    culture2: "Historical and Technological Marvels",
    destinations: [
      {
        id: 1,
        name: "Shibuya Crossing",
        description: "One of the busiest pedestrian crossings in the world, known for its iconic scramble and vibrant atmosphere.",
        image: "https://media.timeout.com/images/105946468/image.jpg"
      },
      {
        id: 2,
        name: "Tokyo Tower",
        description: "A landmark communications and observation tower, offering panoramic views of Tokyo and beyond.",
        image: "https://cdn.cheapoguides.com/wp-content/uploads/sites/2/2020/03/tokyo-tower-zozoji-temple-AP-1024x600.jpg"
      },
      {
        id: 3,
        name: "Senso-ji Temple",
        description: "Tokyo's oldest temple located in Asakusa, with a famous Thunder Gate and Nakamise-dori shopping street.",
        image: "https://watermark.lovepik.com/photo/20211121/large/lovepik-japan-tokyo-sensoji-temple-picture_500611522.jpg"
      },
      {
        id: 4,
        name: "Tsukiji Fish Market",
        description: "A bustling seafood market known for its fresh catches, sushi restaurants, and lively atmosphere.",
        image: "https://parkhoteltokyo.com/wp-content/uploads/sites/9/2022/03/tsukiji-fish-market-tokyo-park-hotel-tokyo2022-sotome-xxx-2.jpg"
      },
      {
        id: 5,
        name: "Akihabara Electric Town",
        description: "An electronics and anime district, offering a wide range of gadgets, manga, and anime-related merchandise.",
        image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/be/30/4b.jpg"
      }
    ],
    dishes: [
      {
        id: 1,
        name: "Sushi",
        description: "A traditional Japanese dish consisting of vinegared rice combined with various ingredients such as seafood, vegetables, and occasionally tropical fruits.",
        image: "https://st2.depositphotos.com/1020618/6765/i/950/depositphotos_67657295-stock-photo-japanese-seafood-sushi-set.jpg"
      },
      {
        id: 2,
        name: "Ramen",
        description: "Japanese noodle soup dish with Chinese-style wheat noodles served in a meat or fish-based broth, often flavored with soy sauce or miso.",
        image: "https://www.elmundoeats.com/wp-content/uploads/2021/02/FP-Quick-30-minutes-chicken-ramen.jpg"
      },
      {
        id: 3,
        name: "Tempura",
        description: "A dish where seafood or vegetables are coated in a light batter and deep-fried until crispy, often served with a dipping sauce.",
        image: "https://www.ici-japon.com/wp-content/uploads/2011/07/tempura5.jpg"
      }
    ]
  }
  
  
];

/* createServer({
  models: {
    city: Model,
  },

  seeds(server) {
    cities.forEach(city => server.create('city', city));
  },

  routes() {
    this.namespace = 'api';

    this.get('/cities', (schema) => {
      return schema.cities.all();
    });

    this.get('/cities/:id', (schema, request) => {
      const id = request.params.id;
      return schema.cities.find(id);
    });
  },
}); */
