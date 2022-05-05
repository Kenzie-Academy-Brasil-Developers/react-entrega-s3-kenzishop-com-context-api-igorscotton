import { createContext, useState, useContext} from 'react';
import api from '../../services/api'

export const ShowCaseContext = createContext([]);

export const ShowCaseProvider = ({children}) => {      
      const [showCase, setShowCase] = useState([])

      const showCaseRequest = async () => {
            const response = await api.get('/products/')
            setShowCase(response.data)
      }

      return (
            <ShowCaseContext.Provider value={{showCase, setShowCase, showCaseRequest}}>
                  {children}
            </ShowCaseContext.Provider>
      )
}

export const useShowCase = () => useContext(ShowCaseContext)