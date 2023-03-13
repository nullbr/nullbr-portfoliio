import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase';
import { useTranslation } from "react-i18next";

const Portfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');
    const [portfolio, setPortfolio] = useState([]);
    const { t } = useTranslation();
    const { i18n } = useTranslation();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    useEffect(() => {
        getPortfolio();
    }, []);

    const getPortfolio = async () => {
        const querySnapshot = await getDocs(collection(db, 'portfolio'));
        setPortfolio(querySnapshot.docs.map((doc) => doc.data()));
    }

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        let description = i18n.language === 'en' ? port.description_en : port.description_pt 

                        return (
                            <a
                                className="image-box"
                                href={port.url}
                                target="_blank"
                                rel="noreferrer"
                                key={idx}
                            >
                                <div>
                                    <img 
                                    src={port.image}
                                    className="portfolio-image"
                                    alt="portfolio" />
                                    <div className="content">
                                        <p className="title">{port.name}</p>
                                        <h4 className="description">{description}</h4>
                                        <button
                                            className="btn"
                                            onClick={() => window.open(port.url)}
                                        >View</button>
                                    </div>
                                </div>
                            </a>
                        )
                    })
                }
            </div>
        );
    }


    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={t('portfolio.title').split(",")}
                        idx={15}
                    />
                </h1>
                <p>
                    {t('portfolio.paragraph')}
                </p>
                <br />
                <div>{renderPortfolio(portfolio)}</div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;