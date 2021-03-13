import {useForm} from 'react-hook-form'; // npm install react-hook-form
import './App.css';

// Bij react-hook-form is "name" verplicht

function App() {
    const {register, watch, handleSubmit, errors} = useForm();

    const onSuccess = (formData) => {
        console.log(formData)
    }

    const onError = (errorList) => {
        console.log(errorList)
    }

    const currentPet = watch('pet');

    return (
        <form onSubmit={handleSubmit(onSuccess, onError)}>
            <div className="row">
                <label htmlFor="firstName">Voornaam: </label>
                <input
                    name="firstName"
                    id="firstName"
                    type="text"
                    ref={register({required: true})}
                />
                {errors.firstName && <p>Voornaam is verplicht</p>}
            </div>

            <div className="row">
                <label htmlFor="lastName">Achternaam: </label>
                <input
                    name="lastName"
                    id="lastName"
                    type="text"
                    ref={register({required: true})}
                />
                {errors.lastName && <p>Achternaam is verplicht</p>}
            </div>

            <div className="row">
                <label htmlFor="age">Leeftijd: </label>
                <input
                    name="age"
                    id="age"
                    type="number"
                    ref={register({required: true, min: 18})}
                />
                {errors.age && <p>Minimaal 18 jaar</p>}
            </div>

            <div className="row">
                <label htmlFor="zipCode">Postcode: </label>
                <input
                    name="zipCode"
                    id="zipCode"
                    type="text"
                    ref={register({required: true, pattern: /^[0-9]{4}[a-zA-Z]{2}$/})}
                />
                {errors.zipCode && <p>Postcode klopt niet</p>}
            </div>

            <fieldset>
                <legend>Huisdier</legend>
                <div className="huisdier">
                    <label>
                        <input
                            ref={register({required: true})}
                            type="radio"
                            value="cat"
                            name="pet"
                            id="pet-cat"
                        />
                        Kat
                    </label>
                </div>
                <div className="huisdier">
                    <label>
                        <input
                            ref={register({required: true})}
                            type="radio"
                            value="dog"
                            name="pet"
                            id="pet-dog"
                        />
                        Hond
                    </label>
                </div>
                <div className="huisdier">
                    <label>
                        <input
                            ref={register({required: true})}
                            type="radio"
                            value="konijn"
                            name="pet"
                            id="pet-konijn"
                        />
                        Konijn
                    </label>
                </div>
                <div className="huisdier">
                    <label>
                        <input
                            ref={register({required: true})}
                            type="radio"
                            value="other"
                            name="pet"
                            id="pet-other"
                        />
                        Anders
                    </label>
                </div>
                {currentPet === 'other' && (
                    <div className="huisdier">
                        <label htmlFor="other-pet">Huisdier</label>
                        <input
                            ref={register({required: true})}
                            name="other-pet"
                            type="text"
                            id="other-pet"
                        />
                    </div>
                )}
            </fieldset>

            <div className="row">
                <label htmlFor="remark">Opmerking: </label>
                <textarea
                    name="remark"
                    id="remark"
                    ref={register}
                />
            </div>

            <div className="agree">
                <input
                    type="checkbox"
                    name="agree"
                    id="agree"
                    ref={register({required: true})}
                />
                <label htmlFor="agree">Ik ga akkoord met de voorwaarden</label>
            </div>
            <div>
                <button>Verzend</button>
            </div>
        </form>

    );
}

export default App;