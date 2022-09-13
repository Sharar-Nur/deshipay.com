import React, { useContext, useEffect, useState } from 'react';
import { LanguageSelector } from '../App';
import { ReactComponent as GlobeIcon } from '../assets/images/icon/globe.svg';
import ImageMap from "image-map";

const LanguageSwitcher = () => {
    const [language, setLanguage] = useContext(LanguageSelector);
    // const [language, setLanguage] = useState("EN");


    useEffect(() => {

        ImageMap('img[useMap]');
        window.localStorage.setItem("language", language);
    }, [language]);



    return (
        <div className="flex justify-end ml-5">
            <GlobeIcon />
            <select defaultValue={language} id="languageSelector" className="text-base">
                <option value="EN" onClick={() => setLanguage("EN")}>EN</option>
                <option value="BN" onClick={() => setLanguage("BN")}>BN</option>
            </select>
            <style>{`
                            #languageSelector {
                                border: none !important;
                                background-color: transparent; 
                                font-family: 'Montserrat', sans-serif;
                            }
                        `}</style>
        </div>
    );
};

export default LanguageSwitcher;