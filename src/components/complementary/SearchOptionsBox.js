import React from 'react'
import SearchOption from '../unique/SearchOption'
import { 
  mdiCarSide,
  mdiMotorbike
} from '@mdi/js'

const SearchOptionsBox = () => {

    return (
        <div className="search-options-box">
            <div className="search-options">

                <SearchOption
                    mdi={mdiCarSide}
                    titleIcon="Comprar Carros"
                    size={2}
                    subtitleText="Comprar"
                    titleText="Carros"
                    active={true}
                />

                <SearchOption
                    mdi={mdiMotorbike}
                    titleIcon="Comprar Motos"
                    size={2}
                    subtitleText="Comprar"
                    titleText="Motos"
                    active={false}
                />
                
            </div>
            <div className="search-option__link">Vender meu carro</div>
        </div>
    )

}

export default SearchOptionsBox
