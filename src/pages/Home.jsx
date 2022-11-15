import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import qs from 'qs'
import { useNavigate } from 'react-router-dom'

import { sortList } from '../components/Sort';
import { setFilters } from '../redux/slices/filterSlice';

import Categories from '../components/Categories'
import PizzaBlock from '../components/PizzaBlock'
import Loader from '../components/PizzaBlock/Loader'
import Sort from '../components/Sort'
import Pagination from '../components/Pagination';

const Home = () => {
    const dispatch = useDispatch()
    const { categoryId, sortType, searchValue, activePage } = useSelector(state => state.filter)
    
    const isSearch = React.useRef(false)
    const isMounted = React.useRef(false)

    const [pizzas, setPizzas] = React.useState([]);
    const [pizzasCount, setPizzasCount] = React.useState(0)
    const [isLoading, setIsLoading] = React.useState(true);

    const itemsLimit = 6

    const navigate = useNavigate()

    const fetchPizzas = async () => {
        try {
            setIsLoading(true)

            const category = categoryId > 0 ? `&category=${categoryId}` : ''
            const sortBy = `&sortBy=${sortType.sortProperty}`
            const order = `&order=${sortType.sortOrder}`
            const search = searchValue ? `&search=${searchValue}` : ''

            const response = await axios.get(
                `https://6356bd0a2712d01e14fb985e.mockapi.io/items?page=${activePage}&limit=${itemsLimit}${category}${sortBy}${order}${search}`
            );
            setPizzas(response.data.items);
            setPizzasCount(response.data.count)
            setIsLoading(false);
        } catch (e) {
            alert('Не удалось получить список пицц');
            console.error(e);
        }
    }

    // При изменении состояния категории, сортировки или активной страницы добавляем эти состояния в объект и формируем строку запроса
    React.useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                sortProperty: sortType.sortProperty,
                sortOrder: sortType.sortOrder,
                categoryId,
                activePage
            })
            navigate(`?${queryString}`)
        }
        isMounted.current = true
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categoryId, sortType, activePage])

    // Если в URL есть поисковый запрос или он изменился, то при первом рендере парсим из него параметры и меняем состояние в Redux
    React.useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1))
            const activeSortType = sortList.find(obj => obj.sortProperty === params.sortProperty && obj.sortOrder === params.sortOrder)
            dispatch(setFilters({
                ...params,
                activeSortType
            }))
            isSearch.current = true
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // Условие выполнится, когда произойдет проверка на наличие поискового запроса
    React.useEffect(() => {
        window.scrollTo(0, 0)
        if (!isSearch.current) {
            fetchPizzas()
        }
        isSearch.current = false

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categoryId, sortType, searchValue, activePage]);
     
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
            {
                pizzasCount > 6 &&
                <Pagination
                    pizzasCount={pizzasCount}
                    itemsLimit={itemsLimit}
                    activePage={activePage}
                />
            }
        </div>
    )
}

export default Home
