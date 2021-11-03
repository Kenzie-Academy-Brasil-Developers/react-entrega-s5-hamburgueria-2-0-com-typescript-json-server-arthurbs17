import { useProductsList } from "../../Providers/products";

interface ProductTypeList {
  name: string;
  category: string;
  image: string;
  id: number;
  price: number;
}

const ProductsList = () => {
  const { productsList } = useProductsList();
  console.log(productsList);

  return (
    <div>
      <ul>
        {productsList[0] &&
          productsList.map((product: ProductTypeList) => (
            <li key={product.id}>
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
              <p>{product.price}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ProductsList;
