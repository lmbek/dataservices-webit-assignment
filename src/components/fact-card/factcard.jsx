import style from "./factcard.module.css";

function FactCard(data) {
    return (
        <>
            <section className={style.factCard}>
                <h2>Fact Card {data.nr}</h2>
                <p>Hello world</p>
            </section>
        </>
    );
}

export default FactCard;
