import React from "react";
import Load from './Load.svg'
import styles from './Loading.module.css'

export default function Loading() {

    return (
        <div className={styles.loader_container}>
            <img className={styles.loader} src={Load} alt="Loader" />
        </div>
    )
}