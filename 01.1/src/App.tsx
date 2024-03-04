import React, {ChangeEvent, MouseEvent, useState} from 'react'
import './App.css';
import {Cars, CarType} from './components/sprint-01.1/Cars';
import {Button} from './components/sprint-01.1/Button';
type FilterType = 'All' | 'Dollars' | 'RUBLS'
function App() {
    const topCars: Array<CarType> = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]
    const [money, setMoney] = useState([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ])

    const [filter, setFilter] = useState('')
    function changeFilter (value: FilterType) {
        setFilter(value)
    }

    let copy = money.filter(el => el.banknots !== filter)
    let [a, setA] = useState(5)
    function plus () {
        setA(++a)
    }
    function minus () {
        setA(--a)
    }

    function change(e: ChangeEvent<HTMLInputElement>) {
        console.log(e.currentTarget.value)
        setA(+e.currentTarget.value)
    }
    function onClickHandler(name: string, age: number) {
        console.log(name, age)

    }

  return (
    <div className="App">
        <Cars cars={topCars}/>
        <Button name={'Жмяк'} callBack={() => onClickHandler('Serge', 30)}/>
        <Button name={'Жмяк_2'} callBack={() => onClickHandler('Tania', 28)}/>
        <Button name="RUBLS" callBack={()=> changeFilter('Dollars')}/>
        <Button name="Dollars" callBack={()=> changeFilter('RUBLS')}/>
        <Button name="All" callBack={()=> changeFilter('All')}/>
        <Button name={'+'} callBack={plus} />
        <Button name={'-'} callBack={minus} />
        <input type="range" value={a} onChange={change} max={10} min={0}/>
        <span>{a}</span>
        <Banknote money={copy}/>
    </div>
  );
}

export default App;

type arrtype = {
    banknots: string
    value: number
    number: string
}
type moneyType = {
    money: Array<arrtype>
}
const Banknote = (props: moneyType) => {
    return (
        <ul>
            {props.money.map((i, idx) => {
                return <li key={idx}>
                    {i.banknots}
                    {i.value}
                    {i.number}
                </li>
            })}
        </ul>
    )
}