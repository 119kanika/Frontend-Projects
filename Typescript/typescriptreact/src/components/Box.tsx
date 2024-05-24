type PropsType = {
    heading: string,
    count: number,
    func1: () => void,
}


const Box = ({ heading, count, func1 }: PropsType) => {
    func1();
    return (
        <div>
            <h1>{heading}</h1>
            <p>{count}</p>
        </div>
    )
}

export default Box