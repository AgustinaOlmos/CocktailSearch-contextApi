import React, { useContext, useState } from 'react'
import { CategoriasContext } from '../context/CategoriasContext'
import { RecetasContext } from '../context/RecetasContext'

const Formulario = () => {

    const [busqueda, setBusqueda] = useState({
        ingrediente: '',
        categoria: ''
    })

    const { categorias } = useContext(CategoriasContext)
    const { buscarRecetas } = useContext(RecetasContext)

    // Funcion para leer los datos
    const leerInputs = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form
            className="col-12"
            onSubmit={e=>{
                e.preventDefault()
                buscarRecetas(busqueda)
            }}
        >
            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        type="text"
                        name="ingrediente"
                        className="form-control"
                        placeholder="Search by Ingredient"
                        onChange={leerInputs}
                    />
                </div>
                <div className="col-md-4">
                    <select
                        name="categoria"
                        className="form-control"
                        onChange={leerInputs}
                    >
                        <option value="">-- Select Category --</option>
                        {categorias.map(categoria => (
                            <option
                                key={categoria.strCategory}
                                value={categoria.strCategory}
                            >{categoria.strCategory}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Search Cocktail"
                    />
                </div>
            </div>


        </form>
    )
}

export default Formulario
