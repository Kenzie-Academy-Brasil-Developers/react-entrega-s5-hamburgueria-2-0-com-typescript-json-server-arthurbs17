import { ButtonAdd } from "../Button";
import { Card } from "./style";

interface ProductCardProps {
  name: string;
  category: string;
  image: string;
  price: number;
}

const ProductCard = ({ name, category, image, price }: ProductCardProps) => {
  return (
    <Card>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <span>{category}</span>
      <p>R$: {price}</p>
      <ButtonAdd>Adicionar</ButtonAdd>
    </Card>
  );
};

export default ProductCard;
