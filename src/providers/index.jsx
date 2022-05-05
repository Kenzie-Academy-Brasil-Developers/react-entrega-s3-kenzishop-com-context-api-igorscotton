import {CartProvider} from './cart/context'

import { ShowCaseProvider } from './products/context'

const Providers = ({children}) => {
      return (
            <ShowCaseProvider>
                  <CartProvider>
                        {children}
                  </CartProvider>
            </ShowCaseProvider>
      )
}

export default Providers