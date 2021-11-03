import { useProductsList } from "../../Providers/products";
import ProductCard from "../ProductCard";
import { Container, ContainerCard } from "./style";

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
    <Container>
      <ContainerCard>
        {productsList[0] &&
          productsList.map((product: ProductTypeList) => (
            <ProductCard
              key={product.id}
              name={product.name}
              image={product.image}
              category={product.category}
              price={product.price}
            />
          ))}
      </ContainerCard>
    </Container>
  );
};

export default ProductsList;
