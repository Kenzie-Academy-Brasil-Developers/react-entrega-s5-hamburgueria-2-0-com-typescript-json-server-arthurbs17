import { useAuth } from "../../Providers/auth";
import { useCart } from "../../Providers/cart";
import { ButtonAdd } from "../Button";
import { Card } from "./style";

interface ProductCardProps {
  name: string;
  category: string;
  image: string;
  price: number;
}

const ProductCard = ({ name, category, image, price }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { userId } = useAuth();

  return (
    <Card>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <span>{category}</span>
      <p>R$: {price}</p>
      <ButtonAdd
        onClick={() => addToCart({ name, category, image, price, userId })}
      >
        Adicionar
      </ButtonAdd>
    </Card>
  );
};

export default ProductCard;
