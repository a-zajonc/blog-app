import React from 'react';
import styles from './pages.module.css'
import { useState } from 'react';

export function Contact() {

    const [submitted, setSubmitted] = useState(false);

    const [values, setValues] = useState({
        name: '',
        message: '',
        email: '',
    });

    const handleNameInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            name: event.target.value,
        }));
    };

    const handleEmailInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            email: event.target.value,
        }));
    };

    const handleMessageInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            message: event.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!values.name || !values.email || !values.message) {
            setSubmitted(false)
        }
        (setSubmitted(true) && console.log(values))
    };

    return (
        <div className={styles.contact}><address >
            <span className={styles.address}>Nasz adres:</span><br />
            Zajonc SA<br />
            Uszata 5<br />
            123-456 Sianowo <br />
        </address>
            <div>
                <form onSubmit={handleSubmit} className={styles.contactForm}>
                    <h4>Napisz do nas!</h4>
                    <label className={styles.label}>
                        <span>Twoje imię:</span>
                        <input
                            placeholder="Wpisz imię"
                            type="text"
                            onChange={handleNameInputChange}
                            // {(e) => setName(e.target.value)}
                            value={values.name}>
                        </input>
                        {submitted && !values.name && <span className={styles.nameError}>Wpisz swoję imię</span>}
                    </label>
                    <label className={styles.label}>
                        <span>Twój email:</span>
                        <input
                            placeholder="Wpisz email"
                            type="email"
                            onChange={handleEmailInputChange}
                            value={values.email}>
                        </input>
                        {submitted && !values.email && <span className={styles.emailError}>Pole email nie może być puste!</span>}

                    </label>
                    <label className={styles.label}>
                        <span>Wiadomość:</span>
                        <input
                            placeholder="Wpisz wiadomość"
                            type="text"
                            onChange={handleMessageInputChange}
                            value={values.message}>
                        </input>
                        {submitted && !values.message && <span className={styles.messageError}>Nie możesz wysłać pustej wiadomości</span>}
                    </label>
                    <button type="submit" >Wyślij!</button>
                </form>
                {(submitted === true) && (values.message && values.email && values.name) && <div className={styles.successSubmit}>Dziękujemy za wiadomość. Odezwiemy się w ciągu 2-3 dni!</div>}
            </div>
        </div>
    )
}

// różnica między < input type = "button" > a < button type = "submit" >