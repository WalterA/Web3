import React, { useState } from 'react';
import { prodotti } from './ProdottoS';

const Cerca = () => {
    const [search, setSearch] = useState('');
    const [risultato, setR] = useState('');

    const CercaE = () => {
        let prodottoTrovato = 'Prodotto non trovato';
        for (let prodotto of prodotti) {
            if (prodotto.nomeProdotto === search) {
                prodottoTrovato = prodotto.nomeProdotto;
                break; // esce dal ciclo appena trova il prodotto
            }
        }
        setR(prodottoTrovato);
    };

    return (
        <div>
            <h2>Cerca un prodotto</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="nome" className="form-label">Nome prodotto</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="nome" 
                        value={search} 
                        onChange={(e) => setSearch(e.target.value)} 
                    />
                </div>
                <button type="button" className="btn btn-primary" onClick={CercaE}>
                    Calcola
                </button>
            </form>
            <h1 className="mt-3">{risultato}</h1>
        </div>
    );
};

export default Cerca;
