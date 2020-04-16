import React, { useState, useEffect } from 'react'
import Api from '../../services/api'


const MakerModelVersion = () => {

    const [makers, setMakers] = useState(null),
        [models, setModels] = useState(null),
        [versions, setVersions] = useState(null)

    useEffect(() => {

        getMakers()

    }, [])

    const getMakers = async () => {

        const response = await Api.getMake()

        setMakers(response.data)

    }

    const getModels = async (makerId) => {

        const response = await Api.getModel(makerId)

        setModels(response.data)

    }

    const getVersions = async (modelId) => {

        const response = await Api.getVersion(modelId)

        setVersions(response.data)

    }

    const onMakers = e => getModels(e.target.value)
    
    const onVersions = e => getVersions(e.target.value)

    return (                
        <div className="col-6">
            <div className="d-flex align-center mb-12">
                <div className="input-box mr-16">
                    <label>Marca:</label>
                    <select onChange={onMakers}>
                        <option defaultValue={null}>Todas</option>
                        {
                        
                            makers && makers.map(maker => {
                                return (
                                    <option key={maker.ID} value={maker.ID}>{ maker.Name }</option>
                                )
                            })
                            
                        }
                    </select>
                </div>
                <div className="input-box">
                    <label>Modelo:</label>
                    <select onChange={onVersions}>
                        <option defaultValue={null}>Todos</option>
                        {
                        
                            models && models.map(model => {
                                return (
                                    <option key={model.ID} value={model.ID}>{ model.Name }</option>
                                )
                            })
                            
                        }
                    </select>
                </div>
            </div>
            <div className="d-flex align-center mb-12">
                <div className="input-box">
                    <label>Versão:</label>
                    <select>
                        <option defaultValue={null}>Todas</option>
                        {
                        
                            versions && versions.map(version => {
                                return (
                                    <option key={version.ID} value={version.ID}>{ version.Name }</option>
                                )
                            })
                            
                        }
                    </select>
                </div>
            </div>
        </div>
    )

}

export default MakerModelVersion
