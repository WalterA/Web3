import React, { useState } from 'react';

const Calcolatrice = () => {
  const [risultato, setRisultato] = useState(0);
  const [nu1, setNu1] = useState('');
  const [nu2, setNu2] = useState('');
  const [op1, setOp1] = useState('');

  const calcola = () => {
    const numero1 = parseFloat(nu1);
    const numero2 = parseFloat(nu2);
    if (isNaN(numero1) || isNaN(numero2)) {
      setRisultato('Per favore, inserisci numeri validi.');
      return;
    }
    switch (op1) {
      case '+':
        setRisultato(numero1 + numero2);
        break;
      case '-':
        setRisultato(numero1 - numero2);
        break;
      case '*':
        setRisultato(numero1 * numero2);
        break;
      case '/':
        if (numero2 === 0) {
          setRisultato('Impossibile dividere per zero.');
        } else {
          setRisultato(numero1 / numero2);
        }
        break;
      default:
        setRisultato('Operazione non valida');
    }
  };

  return (
    <div>
      <h1>Calcolatrice</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          calcola();
        }}
      >
        <div className="mb-3">
          <label htmlFor="n1" className="form-label">
            Numero 1
          </label>
          <input
            type="number"
            className="form-control"
            id="n1"
            value={nu1}
            onChange={(e) => setNu1(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="n2" className="form-label">
            Numero 2
          </label>
          <input
            type="number"
            className="form-control"
            id="n2"
            value={nu2}
            onChange={(e) => setNu2(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="op1" className="form-label">
            Operazione
          </label>
          <input
            type="text"
            className="form-control"
            id="op1"
            value={op1}
            onChange={(e) => setOp1(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Calcola
        </button>
      </form>
      <h2>Risultato: {risultato}</h2>
    </div>
  );
};

export default Calcolatrice;
