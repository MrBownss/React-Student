import { useState } from "react";

const App = ({word}) => {
    const [validasi, setValidasi] = useState("");

    const setuju = () => {
        setValidasi(validasi + "Terima kasih")
        setTimeout(() => {
            setValidasi(validasi)
        }, 2000)
    }

    const tSetuju = () => {
        setValidasi(validasi + "Pendapat anda di terima");
        setTimeout(() => {
            setValidasi(validasi)
        }, 2000)
    }

    return (
        <>
            <h1>Hello Programer, apakah anda menyukai {word}</h1>

            <h2 style={{color: "blue"}}>{validasi}</h2>
            <br/>
            <button onClick={setuju} style={{margin: "0 10px" }}>Yes</button>
            <button onClick={tSetuju} style={{margin: "0 10px" }}>No</button>
        </>
    )
}

export default App;