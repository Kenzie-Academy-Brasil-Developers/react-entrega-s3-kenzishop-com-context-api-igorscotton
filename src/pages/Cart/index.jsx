import { useHistory } from "react-router-dom";
import { MainS, Card, AsideS } from "./style";
import { transformValue } from "../../functions/index";
import { Button } from "@mui/material";
import { useCart } from "../../providers/cart/context";

const Cart = () => {
  const history = useHistory();
  
  const { cart, setCart, removeFromCart } = useCart();

  const totalValue = cart && cart.reduce((total, product) => total + product.price, 0)

  return (
    <MainS>
      <section>
        <div>
          <p>Produto</p> <p>Preço</p>
        </div>
        {!!cart &&
          cart.map((product) => {
            const { id, image, title, price } = product;
            return (
              <Card key={id}>
                <img src={image} alt="" />
                <p className="hidden">{title}</p>
                <p>{transformValue(price)}</p>
                <Button onClick={() => removeFromCart(product)}>
                  Remover Produto
                </Button>
              </Card>
            );
          })}
      </section>
      <AsideS>
        <h3>Resumo do Pedido</h3>
        <div>
          <p>
            {cart.length} {cart.length > 1 ? "Produtos" : "Produto"}
          </p>
          <p>{transformValue(totalValue)}</p>
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => !!cart && history.push("/login") }
        >
          Finalizar o pedido
        </Button>
      </AsideS>
    </MainS>
  );
};

export default Cart;
