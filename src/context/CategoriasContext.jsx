import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

// Crear el CONTEXT
export const CategoriasContext = createContext()

// Crear el PROVIDER
const CategoriasProvider = (props) => {

    // Crear el state del Context
    const [categorias, setCategorias] = useState([])

    // Ejecutar el llamado a la API
    useEffect(() => {
        const getCategoriasAPI = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
            const categorias = await axios.get(url)

            setCategorias(categorias.data.drinks)
        }
        getCategoriasAPI()
    }, [])

    return (
        <CategoriasContext.Provider
            value={{
                categorias
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}

export default CategoriasProvider
