import React, { FC, useEffect, useState } from 'react';
import './Search.scss'
import { ReactComponent as SearchSvg } from '../../assets/imgs/search.svg'
import { debounce } from '../../services/utils.service';
interface Props {
    onSearch: (value: string) => {}
}

export const Search: FC<Props> = ({ onSearch }) => {
    const [value, setValue] = useState<string>('')
    const processChange = debounce(() => onSearch(value), 300);
    useEffect(() => {
        if (value.length > 2 || !value) {
            processChange()
        }
    }, [value])
    return <div className="search">
        <div className="search-container">
            <SearchSvg className='icon' />
            <input placeholder='search' type="text" onChange={({ target }) => setValue(target.value)} />
        </div>
    </div>

}
