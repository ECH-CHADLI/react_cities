import Dish from "../components/Dish"
const bestDishes = ({dishes}) => {
  // const dishes = [
  //   {
  //     id: 1,
  //     name: 'Moroccan Couscous',
  //     description: 'A flavorful and aromatic dish featuring couscous, vegetables, and a blend of Moroccan spices.',
  //     img: 'https://www.visitmorocco.com/sites/all/themes/custom/onmt_theme/assets/images/Le-tajine.jpg'
  //   },
  //   {
  //     id: 2,
  //     name: 'Moroccan Couscous',
  //     description: 'A flavorful and aromatic dish featuring couscous, vegetables, and a blend of Moroccan spices.',
  //     img: 'https://www.visitmorocco.com/sites/all/themes/custom/onmt_theme/assets/images/Le-tajine.jpg'
  //   },
  //   {
  //     id: 3,
  //     name: 'Moroccan Couscous',
  //     description: 'A flavorful and aromatic dish featuring couscous, vegetables, and a blend of Moroccan spices.',
  //     img: 'https://www.visitmorocco.com/sites/all/themes/custom/onmt_theme/assets/images/Le-tajine.jpg'
  //   }
  //   ]
  return (
    <div className="p-4">
      <div className="text-3xl font-bold py-10 ml-8">Savor the city by tasting some of its best <span className="uppercase">dishes</span></div>
      <div className="mx-auto flex justify-around gap-12 items-center w-full flex-wrap py-7">
        {dishes.map((dish) => (
          <Dish 
            key={dish.id}
            id={dish.id}
            name={dish.name}
            description={dish.description}
            img={dish.image}
          />
        ))}
      </div>
    </div>
  )
}

export default bestDishes