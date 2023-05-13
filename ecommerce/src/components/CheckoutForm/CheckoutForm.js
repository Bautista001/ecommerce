import styles from './CheckoutForm.module.css';
import { useState } from 'react';

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [verifyEmail, setVerifyEmail] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [errors, setErrors] = useState({});

    const handleConfirm = (event) => {
        event.preventDefault();

        const userData = { name, phone, email };
        onConfirm(userData);
    };

    const handleNameChange = ({ target }) => {
        setName(target.value);
        const nameError = target.value.trim() === '' || !/^[A-Za-z]+\s[A-Za-z]+$/.test(target.value)
            ? 'Por favor, ingresa un nombre y un apellido válidos.'
            : '';
        setErrors((prevState) => ({ ...prevState, name: nameError }));
        setIsValid(nameError === '' && phone !== '' && validateEmail(email));
    };

    const handlePhoneChange = ({ target }) => {
        setPhone(target.value);
        const phoneError = target.value.trim() === '' ? 'Por favor, ingresa un número de teléfono válido.' : '';
        setErrors((prevState) => ({ ...prevState, phone: phoneError }));
        setIsValid(phoneError === '' && name !== '' && validateEmail(email));
    };

    const handleEmailChange = ({ target }) => {
        setEmail(target.value);
        const emailError = !validateEmail(target.value) ? 'Por favor, ingresa un correo electrónico válido.' : '';
        setErrors((prevState) => ({ ...prevState, email: emailError }));
        setIsValid(emailError === '' && name !== '' && phone !== '');
    };

    const handleVerifyEmailChange = ({ target }) => {
        setVerifyEmail(target.value);
        const verifyEmailError = target.value !== email ? 'Los correos electrónicos no coinciden.' : '';
        setErrors((prevState) => ({ ...prevState, verifyEmail: verifyEmailError }));
        setIsValid(verifyEmailError === '' && name !== '' && phone !== '' && validateEmail(email));
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleConfirm} className={styles.form}>
                <label className={styles.label}>
                    Nombre:
                    <input
                        className={styles.input}
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                        pattern="[A-Za-z\s]+"
                        placeholder="Ej: Juan Pérez"
                    />
                </label>
                {errors.name && <p className={styles.Error}>{errors.name}</p>}
                <label className={styles.label}>
                    Teléfono:
                    <input
                        className={styles.input}
                        type="number"
                        value={phone}
                        onChange={handlePhoneChange}
                        placeholder="Ej: 0987654321"
                    />
                </label>
                {errors.phone && <span className={styles.Error}>{errors.phone}</span>}
                <label className={styles.label}>
                    Email:
                    <input
                        className={styles.input}
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Ej: correo@ejemplo.com"
                    />
                </label>
                {errors.email && <span className={styles.Error}>{errors.email}</span>}
                <label className={styles.label}>
                    Confirmar email:
                    <input
                        className={styles.input}
                        type="email"
                        value={verifyEmail}
                        onChange={handleVerifyEmailChange}
                        placeholder="Ej: correo@ejemplo.com"
                    />
                </label>
                {errors.verifyEmail && <span className={styles.Error}>{errors.verifyEmail}</span>}
                <button className={`${styles.Button} ${isValid ? styles.ActiveButton : ''}`} type="submit" disabled={!isValid}>
                    Confirmar compra
                </button>
            </form>
        </div>
    )
};

export default CheckoutForm; 