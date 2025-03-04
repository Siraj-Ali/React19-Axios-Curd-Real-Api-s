import styles from "./Accordion.module.css";
import faqs from "../Api/Faqs.json";
import { useEffect, useState } from "react";
import { Faqs } from "./UI/Faq";
export const Accordion = () => {
    const [faq, setFaq] = useState([]);
    const [activeTab, setActiveTab] = useState(false);
    
    useEffect(() => {
        console.log(faqs);
        setFaq(faqs);
    }, []);
    
    const handleToggle = (id) => { 
        setActiveTab((prev) => (prev === id ? false : id));
        // console.log("activeTab",activeTab)
    }
    return (
        <>
            <h1 className={styles.heading}>The Accordion</h1>
            <ul className={styles.section_accordion}>
                {
                    faq.map((curEl) => {
                        return (
                            <Faqs data={curEl}
                            isActive={activeTab === curEl.id ? true : false}
                             toggle={() => handleToggle(curEl.id)} 
                             key={curEl.id}/>
                        )
                    })
                }
                
            </ul>
        </>
    )
}