import React from 'react'

const Select = props => {

    const { items } = props

    return (
        <select>
            <option defaultValue={null}>Todas</option>
            {
            
                items && items.map(item => {
                    return (
                        <option key={item.ID} value={item.ID}>{ item.Name }</option>
                    )
                })
                
            }
        </select>
    )

}

export default Select