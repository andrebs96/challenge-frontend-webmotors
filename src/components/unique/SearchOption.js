import React from 'react'
import Icon from '@mdi/react'

const SearchOption = props => {

    const { 
        mdi, 
        titleIcon, 
        size, 
        subtitleText, 
        titleText,
        active 
    } = props

    const isActive = () => active ? 'search-option search-option--active' : 'search-option'
    const isActiveColor = () => active ? '#f3123c' : '#94949e'

    return (
        <div className={isActive()}>
            <Icon
            path={mdi}
            title={titleIcon}
            size={size}
            color={isActiveColor()}
            />
            <div className="search-option__text-box">
                <div className="search-option__text search-option__text--subtitle">{ subtitleText }</div>
                <div className="search-option__text search-option__text--title">{ titleText }</div>
            </div>
        </div>
    )

}

export default SearchOption
