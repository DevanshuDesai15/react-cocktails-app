import React, { useContext, useState, useEffect, useCallback, createContext } from "react";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const AppContext = createContext()

const AppProvider = ({ children }) => {

    const [loading, setloading] = useState(true);
    const [searchTerm, setsearchTerm] = useState('a');
    const [cocktails, setcocktails] = useState([]);

    const fetchDrinks = useCallback( async () => {
        setloading(true)
        try {
          const response = await fetch(`${url}${searchTerm}`)
          const data = await response.json()
          console.log(data);
          const { drinks } = data
          if (drinks) {
            const newCocktails = drinks.map((item) => {
              const {
                idDrink,
                strDrink,
                strDrinkThumb,
                strAlcoholic,
                strGlass,
              } = item
    
              return {
                id: idDrink,
                name: strDrink,
                image: strDrinkThumb,
                info: strAlcoholic,
                glass: strGlass,
              }
            })
            setcocktails(newCocktails)
          } else {
            setcocktails([])
          }
          setloading(false)
        } catch (error) {
          console.log(error)
          setloading(false)
        }
      },[searchTerm])
      useEffect(() => {
        fetchDrinks()
      }, [searchTerm,fetchDrinks])

    return( 
      <AppContext.Provider 
        value={{loading, searchTerm, setsearchTerm, cocktails}}>
          {children}
      </AppContext.Provider>
    );
}

export const useGlobalContext = () => {
    return useContext(AppContext)
  }

export { AppContext, AppProvider }