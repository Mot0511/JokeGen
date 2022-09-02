import React, {useState} from 'react';
import './style.css'

function App() {
    const [joke, setJoke] = useState('')
    const [thing, setThing] = useState('')
    const getJoke = () => {
        setJoke(`Сидят как-то два ${thing} в душе. Один другому говорит: "Что-то как-то не смешно"`)
    }
  return (
    <div className="App">
        <div className={'form'}>
            <h1>САМЫЙ КРИНЖОВЫЙ ГЕНЕРАТОР ШУТОК ОНЛАЙН!!!</h1>
            <p></p>
            <input
                className={'form-control'}
                placeholder={'Напишите что-либо в родительном падеже множественного числа:'}
                onChange={e => setThing(e.target.value)}
            />
            <button onClick={getJoke} className={'btn btn-primary my-3'}>ПОЕХАЛИ!!!</button>
            <button onClick={() => {
                setJoke('')
            }} className={'btn btn-danger mx-3'}>Сбросить</button>
            <h2>{joke}</h2>
        </div>
    </div>
  );
}

export default App;
