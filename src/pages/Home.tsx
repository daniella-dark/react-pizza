import React from 'react'
import { useSelector } from 'react-redux'
import qs from 'qs'
import { useNavigate } from 'react-router-dom'

import { sortList } from '../components/Sort';

import { Categories, PizzaBlock, Skeleton, Sort, Pagination, FetchErrorBlock } from '../components'

import { useAppDispatch } from '../redux/store';
import { pizzasDataSelector } from '../redux/pizzas/selectors';
import { fetchPizzas } from '../redux/pizzas/asyncActions';
import { TFilterParams } from '../redux/filter/types';
import { setFilters } from '../redux/filter/slice';
import { filterSelector } from '../redux/filter/selectors';

const Home: React.FC = () => {
    const dispatch = useAppDispatch()
    const { items, count, status } = useSelector(pizzasDataSelector)
    const { categoryId, sortType, searchValue, activePage } = useSelector(filterSelector)
    
    const isSearch = React.useRef(false)
    const isMounted = React.useRef(false)

    const itemsLimit = 6

    const navigate = useNavigate()

    const getPizzas = () => {
        const category = categoryId > 0 ? `&category=${categoryId}` : ''
        const sortBy = `&sortBy=${sortType.sortProperty}`
        const order = `&order=${sortType.sortOrder}`
        const search = searchValue ? `&search=${searchValue}` : ''

        dispatch(
            fetchPizzas({
                category,
                sortBy,
                order,
                search,
                itemsLimit,
                activePage
            })
        );
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
            const params = (qs.parse(window.location.search.substring(1)) as unknown) as TFilterParams
            const sortType = sortList.find(obj => obj.sortProperty === params.sortProperty && obj.sortOrder === params.sortOrder)
            sortType && dispatch(setFilters({
                ...params,
                sortType
            }))
            isSearch.current = true
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // Условие выполнится, когда произойдет проверка на наличие поискового запроса
    React.useEffect(() => {
        window.scrollTo(0, 0)
        if (!isSearch.current) {
            getPizzas()
        }
        isSearch.current = false

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categoryId, sortType, searchValue, activePage]);
    
    return (
        <div className="container">
            {
                status === 'error'
                    ? <FetchErrorBlock />
                    : <>
                        <div className="content__top">
                        <Categories value={categoryId}/>
                        <Sort value={sortType}/>
                        </div>
                        <h2 className="content__title">Все пиццы</h2>
                        <div className="content__items">
                        {status === 'loading'
                            ? [...Array(6)].map((_, index) => <Skeleton key={index} />)
                            : items.map((obj: any) => <PizzaBlock key={obj.id} {...obj} />)}
                        </div>
                        {
                            count > 6 &&
                            <Pagination
                                pizzasCount={count}
                                itemsLimit={itemsLimit}
                                activePage={activePage}
                            />
                        }
                    </>
            }
        </div>
    )
}

export default Home
