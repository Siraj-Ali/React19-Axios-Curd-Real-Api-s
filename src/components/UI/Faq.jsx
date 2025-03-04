import { useState } from "react";
import styles from "../Accordion.module.css";

export const Faqs = ({data, toggle, isActive}) => {
    const {id, question, answer} = data;
    

    return (
        <>
            <li className={styles.listItem}>
                <div className={styles.accordion_grid}>
                    <p className={`${styles.accordion_question}`}>
                        {question}
                    </p>
                    <button onClick={toggle} className={`${isActive ? styles.active_btn : ''} ${styles.button}`}>
                          {isActive ? "Close" : "Open"}
                    </button>
                </div>
                 {
                    isActive && 
                    <p className={styles.paragraph}> 
                        {answer}
                    </p>
                 }
                    
            </li>
        </>
    )
}