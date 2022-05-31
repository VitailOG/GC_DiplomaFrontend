import React, { FC, useState, useEffect } from "react";


const DetailSubject: FC = () => {
    const [test, setTest] = useState<number>(0)
    const [end, setEnd] = useState<string>('')
    const [start, setStart] = useState<boolean>(false)

    const inc = () => setTest(test => test + 1)

    const endC = (e:React.ChangeEvent<HTMLInputElement>): void => setEnd(e.target.value)

    const startH = (): void => {
        if (end.trim()){
            setStart(true)
        }
    }

    useEffect(() => {
        if (start && test < +end) setTimeout(() => inc(), 1000)
    }, [end, test, start])

    return (
        <>
            <h1>{test}</h1>
            <input type="number" onChange={endC} value={end}/>
            <button onClick={startH}>start</button>
        </>
    )
};

export default DetailSubject;
