import React from 'react'
import {useSelector} from 'react-redux'
import axios from 'axios';

import Categories from '../components/Categories'
import PizzaBlock from '../components/PizzaBlock'
import Loader from '../components/PizzaBlock/Loader'
import Sort from '../components/Sort'
import Pagination from '../components/Pagination';
import { SearchContext } from '../App';

const Home = () => {
    const {categoryId, sortType} = useSelector(state => state.filter)

    const [pizzas, setPizzas] = React.useState([]);
    const [pizzasCount, setPizzasCount] = React.useState(0)
    const [currentPage, setCurrentPage] = React.useState(1)
    const [isLoading, setIsLoading] = React.useState(true);

    const itemsLimit = 6

    const {searchValue} = React.useContext(SearchContext)

    React.useEffect(() => {
        (async () => {
        try {
            setIsLoading(true)

            const category = categoryId > 0 ? `category=${categoryId}` : ''
            const sortBy = sortType.sortProperty.replace('-', '')
            const order = sortType.sortOrder
            const search = searchValue ? `search=${searchValue}` : ''

            const response = await axios.get(
                `https://6356bd0a2712d01e14fb985e.mockapi.io/items?page=${currentPage}&limit=${itemsLimit}&${category}&sortBy=${sortBy}&order=${order}&${search}&`
            );
            setPizzas(response.data.items);
            setPizzasCount(response.data.count)
            setIsLoading(false);
        } catch (e) {
            alert('Не удалось получить список пицц');
            console.error(e);
        }
        })();
        window.scrollTo(0, 0)
    }, [categoryId, sortType, searchValue, currentPage]);
     
    return (
        <div className="container">
            <div className="content__top">
            <Categories />
            <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
            {isLoading
                ? [...Array(6)].map((_, index) => <Loader key={index} />)
                : pizzas.map((obj) => <PizzaBlock key={obj.id} loading={isLoading} {...obj} />)}
            </div>
            <Pagination onChangePage={number => setCurrentPage(number)} pizzasCount={pizzasCount} itemsLimit={itemsLimit} />
        </div>
    )
}

export default Home
