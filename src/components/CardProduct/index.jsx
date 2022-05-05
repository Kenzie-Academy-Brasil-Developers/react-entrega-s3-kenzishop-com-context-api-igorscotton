import {transformValue} from '../../functions/index'
import {Button} from '@mui/material'
import {Card} from './style'
import { useCart } from '../../providers/cart/context';

const CardProduct = ({ product }) => {
  const { title, description, price, image } = product;
  
  const {addToCart} = useCart()

  return (
    <Card>
      <img src={image} alt="" />
      <p>{title}</p>
      <p>{description}</p>
      <p>
        <span>{transformValue(price)}</span>
      </p>
      <Button variant="contained" color="secondary" onClick={() => addToCart(product)}>
        Adicionar ao Carrinho
      </Button>
    </Card>
  );
};

export default CardProduct
