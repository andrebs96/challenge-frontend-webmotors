import React from 'react'
import SearchOptionsBox from '../complementary/SearchOptionsBox'
import MakerModelVersion from '../complementary/MakerModelVersion'
import Icon from '@mdi/react'
import { mdiMapMarkerOutline } from '@mdi/js'

const Search = () => {

    return (
        <div className="search-container">
            <SearchOptionsBox />            
            <div>            
                <form className="form">        
                    <div className="row">
                        <div className="col-12 mb-12">
                            <input type="checkbox" id="ckbNovo" />
                            <label htmlFor="ckbNovo">Novo</label>
                            <input type="checkbox" id="ckbUsados"></input>
                            <label htmlFor="ckbUsados">Usados</label>
                        </div>

                        <div className="col-6">              
                            <div className="d-flex align-center mb-12">
                                <div className="input-box">
                                    <Icon
                                    path={mdiMapMarkerOutline}
                                    title="Onde"
                                    size={1}
                                    color="#f3123c"
                                    />
                                    <label htmlFor="onde">Onde:</label>
                                    <input type="text" id="onde" />
                                </div>
                                <div className="input-box input-box--bl-0">
                                    <label htmlFor="raio">Raio:</label>
                                    <select id="raio">
                                        <option defaultValue={100}>100km</option>
                                        <option value={200}>200km</option>
                                        <option value={300}>300km</option>
                                        <option value={400}>400km</option>
                                        <option value={500}>500km</option>
                                        <option value={600}>600km</option>
                                        <option value={700}>700km</option>
                                        <option value={800}>800km</option>
                                        <option value={900}>900km</option>
                                        <option value={1000}>1000km</option>
                                    </select>
                                </div> 
                            </div>
                            <div className="d-flex align-center mb-12">            
                                <div className="input-box input-box--font-normal mr-16">
                                    <select>
                                        <option defaultValue={null}>Ano Desejado</option>
                                    </select>
                                </div>
                                <div className="input-box input-box--font-normal">
                                    <select>
                                        <option defaultValue={null}>Faixa de preço</option>
                                    </select>
                                </div>
                            </div>              
                        </div>
                        
                        <MakerModelVersion />

                        <div className="col-12 d-flex align-center justify-space-between mb-12">
                            <div className="link-advanced-search">> Busca Avançada</div>
                            <div className="col-6 d-flex align-center justify-space-between">
                                <div>Limpar filtros</div>
                                <div className="btn-search">Ver ofertas</div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Search
