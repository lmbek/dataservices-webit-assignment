import style from "./index.module.css"
import React from 'react';
import Factcard from "../../components/fact-card/factcard.jsx";

function Index() {
    return (
        <>
            <main>
                <h1>Tilfældige fakta</h1>
                <article className={style.container}>
                    <Factcard nr="1" />
                    <Factcard nr="2" />
                    <Factcard nr="3" />
                    <Factcard nr="4" />
                </article>
            </main>
        </>
    );
}

export default Index;
