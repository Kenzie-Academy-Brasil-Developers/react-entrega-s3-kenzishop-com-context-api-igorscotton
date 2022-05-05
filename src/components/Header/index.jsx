import ShoppingCart from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import {Button} from '@mui/material'
import Stack from '@mui/material/Stack';
import {HeaderS} from './style'
import { useHistory, Link } from 'react-router-dom';
const Header = () => {
      const history = useHistory();

      return (
            <HeaderS>
                  <Link to="/"><h1>Kenzie Shop</h1></Link>
                  <Stack direction="row" spacing={5}>
                        <Button  aria-label="shopping cart" startIcon={<ShoppingCart/>} onClick={() => history.push('/cart')}>
                              Cart
                        </Button>
                        <Button startIcon={<LoginIcon/>} onClick={() => history.push('/login')}>                              
                              Login
                        </Button>
                  </Stack>
            </HeaderS>
      )
}

export default Header