export type CarType = {
    manufacturer: string
    model: string
}

type CarsPropsType = {
    cars: Array<CarType>
}
export const Cars = (props: CarsPropsType) => {
    return (
        <table style={{border: '1px solid crimson', textAlign:'left'}}>
            <tbody >
            {props.cars.map(car => {
                return (
                    <tr>
                        <td>{car.manufacturer}</td>
                        <td>{car.model}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}
