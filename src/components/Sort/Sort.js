import React from "react";
import styles from "./Sort.module.css";


// onSortChange({type, direction})

export function Sort({ onSortChange }) {
    const [type, setType] = React.useState('title')
    const [direction, setDirection] = React.useState('1')

    React.useEffect(() => {
        onSortChange({ type, direction })
    }, [type, direction, onSortChange])


    return <div>
        <select className={styles.select} onChange={event => setType(event.target.value)} >
            <option value="title">Tytuł</option>
            <option value="date">Data</option>

        </select>
        <select className={styles.select} onChange={event => setDirection(event.target.value)}>
            <option value="default">Domyślne</option>
            <option value="1">Rosnąco</option>
            <option value="-1">Malejąco</option>
        </select>
    </div>

}

