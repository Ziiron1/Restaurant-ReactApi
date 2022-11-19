import React from "react";
import styles from './Loading.module.css'
import Loader from './Loader.svg'

export default function Loading() {

    return (
        <div className={styles.centraliza}>
            {/* <div className={styles.loader}></div> */}
            <img src={Loader} alt="Loader Img" />
        </div>
    )
}