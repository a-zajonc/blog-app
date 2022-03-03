import React from 'react';
import styles from './pages.module.css'

export function Home() {

    return <div className={styles.home}>
        <h1 className={styles.h2}>Witamy u Zajonca!</h1>
        <span>Zajmujemy się wszystkim co królicze: Nulla facilisi. Nullam fermentum est tincidunt turpis pulvinar, quis consectetur turpis venenatis. Sed vitae condimentum metus. Aenean euismod tortor non elit consequat consequat. Nulla ac porta orci. Sed mollis, nulla mollis tristique vestibulum, nibh ex luctus arcu, a aliquet odio tellus et nulla. Etiam consequat volutpat turpis quis viverra.</span>
    </div>
}