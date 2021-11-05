import { useCart } from "../../Providers/cart";
import CardCart from "../CardCart";
import { Container, ContainerCard } from "./style";

interface CardCartProps {
  name: string;
  image: string;
  price: number;
  id: number;
}

const CartList = () => {
  const { cart } = useCart();
  const total = cart.reduce(
    (acc: number, num: CardCartProps) => acc + num.price,
    0
  );

  return (
    <Container>
      <ContainerCard>
        {cart.length > 0 ? (
          cart.map((product: CardCartProps) => (
            <CardCart
              key={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
              id={product.id}
            />
          ))
        ) : (
          <p>Carrinho vázio</p>
        )}
        <span>Total: R$: {total}</span>
      </ContainerCard>
    </Container>
  );
};

export default CartList;
