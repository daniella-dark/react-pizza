import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import debounce from 'lodash.debounce'
import styles from './Search.module.scss'
import Close from '../../assets/img/close.svg' 
import { useNavigate } from 'react-router-dom'
import SearchImg from '../../assets/img/SearchImg'
import { searchValueSelector } from '../../redux/filter/selectors'
import { setSearchValue } from '../../redux/filter/slice'

export const Search: React.FC = () => {
  const searchValue = useSelector(searchValueSelector)
  const dispatch = useDispatch()

  const [inputValue, setInpulValue] = React.useState('')

  const inputRef = React.useRef<HTMLInputElement>(null)

  const navigate = useNavigate()

  React.useEffect(() => {
    if (searchValue) navigate('/')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue])

  const inputClear = () => {
    return dispatch(setSearchValue(''))
  }
    
  const onClickClear = () => {
    inputClear()
    setInpulValue('')
    inputRef.current?.focus()
  }

  const updateSearchValue = React.useRef(
    debounce((str: string) => { // debounce откладывает вызов другой функции до того момента, когда с последнего вызова пройдет заданное количество времени
      dispatch(setSearchValue(str))
    }, 500)).current;

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInpulValue(event.target.value)
    updateSearchValue(event.target.value)
  }

  return (
    <div className={styles.searchBlock}>
      <SearchImg />
      <input
        ref={inputRef}
        value={inputValue}
        onChange={onChangeInput}
        type="text"
        placeholder='Поиск'
      />
      {searchValue && <img onClick={onClickClear} src={Close} alt="Close" />}
    </div>
  )
}
