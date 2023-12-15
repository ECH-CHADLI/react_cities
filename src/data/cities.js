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
        image: "https://static.wixstatic.com/media/a27d24_35055827a80d492f9757fd9fb38ff3f1~mv2.jpg/v1/fill/w_1200,h_675,al_c,q_85,enc_auto/a27d24_35055827a80d492f9757fd9fb38ff3f1~mv2.jpg"
      },
      {
        id: 4,
        name: "Chouara Tannery",
        description: "Famous tannery where leather is dyed using traditional methods, providing a unique sensory experience.",
        image: "https://www.moroccotoursagency.com/storage/2022/03/morocco-fes-tanneries.jpg"
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
        id: 3,
        name: "Chellah Necropolis",
        description: "Ruins of a Roman city turned into a medieval Muslim necropolis, surrounded by gardens.",
        image: "https://as2.ftcdn.net/v2/jpg/03/09/95/21/1000_F_309952191_07zovF1BajPABV1UlJpkXU3MTQciA850.jpg"
      },
      {
        id: 2,
        name: "Hassan Tower",
        description: "Historical minaret and mosque, part of an incomplete mosque and mausoleum complex.",
        image: "https://www.visitrabat.com/wp-content/uploads/2019/04/tour_hassan2.jpg"
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
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwqy7YZYlDaqE8CJY03V5MS7hliW35s7gQjwVCrIU1KKeXUG0d8zcC56Yj-40jhmUJmuI&usqp=CAU"
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
        image: "https://www.costacroisieres.fr/content/dam/costa/costa-magazine/article-images/d69fbe6/tangeri_principale.jpg.image.694.390.low.jpg"
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
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM4MoUJllZeR3MdGrovNtjTRVmnolSxSTpLmzASlIUaYGgtspabWyzt75aGwkKiGn9hdM&usqp=CAU"
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
  }
]