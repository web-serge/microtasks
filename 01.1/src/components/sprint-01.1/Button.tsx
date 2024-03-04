import {MouseEvent} from 'react'
type ButtonPropsType = {
    name: string
    callBack: () => void
}

export const Button = (props: ButtonPropsType) => {
    const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        props.callBack()
    }

    return <button onClick={onClickHandler}>{props.name}</button>
}