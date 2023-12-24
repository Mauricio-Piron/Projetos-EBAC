import React, { useState } from 'react';
import InputMask from "react-input-mask";
import Styles from "./Perfil.module.css"

function Perfil() {
    const [form, setForm] = useState('')
    const [result, setResult] = useState('')

    function handleChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value })
        console.log('form', form)
    }

    function handleSubmit(event) {
        event.preventDefault()
        if ((!form.altura && !form.peso) || !form.altura || !form.peso) {
            alert("Os valores precisam ser maiores do que 0")
        } else {
            const imc = form.peso / (form.altura * form.altura);
            const formattedImc = imc.toFixed(2);
            setResult(formattedImc)
            if (imc < 18.5) {
                alert("Você esta abaixo do peso")
            }
            else if
                (imc < 24.9) {
                alert("Peso ideal")
            }
            else if (imc < 29.9) {
                alert("Levemente acima do peso")
            }
            else if (imc < 34.4) {
                alert("Obesidade grau I")
            }
            else if (imc < 39.9) {
                alert("Obesidade grau II (severa)")
            }
            else if (imc > 40.0) {
                alert("Obesidade grau III (mórbida)")
            }
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className={Styles.container}>
                <div className={Styles.form}>
                    <div className={Styles.containerLabel}>
                        <div className={Styles.containerInput}>
                            <label className={Styles.formLabel}>Altura (cm)</label>
                            <InputMask className={Styles.formInput}  placeholder='Informe sua Altura:' mask="9.99" onChange={handleChange} name='altura' />
                        </div>
                        <div className={Styles.containerInput}>
                            <label className={Styles.formLabel}>Peso (kg)</label>
                            <InputMask className={Styles.formInput} placeholder='Informe seu Peso:' onChange={handleChange} name='peso' />
                        </div>
                    </div>
                    <div className={Styles.containerButton}>
                        <button className={Styles.formButton}>Calcular</button>
                    </div>
                    <div className={Styles.result}>
                        <div className={Styles.imc}>
                            <span id='value'></span>
                            <span>Seu IMC</span>
                            <h1>{result}</h1>
                        </div>
                    </div>
                    <div className={Styles.infos}>
                        <a target="_blank" href="https://www.tuasaude.com/imc/">
                            Mais informações
                        </a>
                    </div>
                </div>
            </div>
        </form>
    )
}
export default Perfil;
