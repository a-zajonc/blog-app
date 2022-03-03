import React from 'react';
import styles from './pages.module.css'

export function About() {
    return <div className={styles.about}>
        <h2>O nas</h2>
        <span>Jesteśmy firmą Vestibulum id purus in tortor ultricies tincidunt eu id urna.
            Cras eleifend non lacus finibus tempus. Vivamus id interdum urna.
            Phasellus orci risus, finibus et ultrices vel, varius vitae elit. Vivamus a lacus eu dolor pulvinar eleifend vel hendrerit felis.
            Integer ut ullamcorper arcu. Mauris consectetur orci vel erat auctor, nec volutpat nibh pharetra.</span>
    </div>
}
