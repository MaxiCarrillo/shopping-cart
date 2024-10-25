import { useState, useId } from 'react';
import './Filters.css';
import { useFilters } from '../hooks/useFilters';

export const Filters = () => {
    const { filters, setFilters } = useFilters();
    const minPriceFilterId = useId();
    const categoryFilterId = useId();

    const handleChangeMinPrice = (e) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: e.target.value
        }))
    }

    const handleChangeCategory = (e) => {
        setFilters(prevState => ({
            ...prevState,
            category: e.target.value
        }))
    }

    return (
        <section className='filters'>
            <div>
                <label htmlFor="price">Price</label>
                <input
                    type="range"
                    name="range"
                    id={minPriceFilterId}
                    min='0'
                    max='1000'
                    onChange={handleChangeMinPrice}
                    value={filters.minPrice}
                />
                <span>${filters.minPrice}</span>
            </div>
            <div>
                <label htmlFor="category">Categoria</label>
                <select
                    name="category"
                    id={categoryFilterId}
                    onChange={handleChangeCategory}
                    value={filters.category}
                >
                    <option value="all">All</option>
                    <option value="beauty">Belleza</option>
                    <option value="fragrances">Fragancia</option>
                    <option value="furniture">Muebles</option>
                </select>
            </div>
        </section>
    )
}
