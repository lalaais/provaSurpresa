import { useEffect, useState } from 'react';
import '/.index.sass';

export default function Index() {

    return (
        <main className='acai'>
            <h1> Acai </h1>
        </main>
    )
}

export default function Acai () {
    const [qtdPeq, setQtdPeq] = useState(0)
    const [qtdMed, setQtdMed] = useState(0)
    const [qtdGra, setQtdGra] = useState(0)

    const [desc, setDesc] = useState(0)
    const [resul, setResul] = useState(0)

    function Calcular() {
        let total = qtdPeq * 13.50 + qtdMed * 15 + qtdGra * 17.50;
        let desconto = total * desc / 100

        let final = total - desconto 
        setResul(final)
    }

    useEffect(() => {
        Calcular()
    }, [qtdPeq, qtdMed, qtdGra, desc])
}

[]