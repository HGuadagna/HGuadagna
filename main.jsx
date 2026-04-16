import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
  const [m2, setM2] = useState(50);
  const [tipo, setTipo] = useState(1);
  const [ins, setIns] = useState(false);
  const total = Math.round((m2 * 45 * tipo) + (ins ? 500 : 0));

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '400px', margin: '0 auto', backgroundColor: '#f3f4f6', minHeight: '100vh' }}>
      <div style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '20px', textAlign: 'center' }}>
        <h1 style={{ margin: 0 }}>LIMHER</h1>
        <p>Limpieza Profesional</p>
      </div>
      <div style={{ padding: '20px' }}>
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <p>Área: {m2} m²</p>
          <input type="range" min="20" max="300" value={m2} onChange={e => setM2(e.target.value)} style={{ width: '100%' }} />
          <div style={{ display: 'flex', gap: '5px', margin: '20px 0' }}>
            <button onClick={() => setTipo(1)} style={{ flex: 1, padding: '10px' }}>Hogar</button>
            <button onClick={() => setTipo(1.5)} style={{ flex: 1, padding: '10px' }}>Oficina</button>
            <button onClick={() => setTipo(2.2)} style={{ flex: 1, padding: '10px' }}>Obra</button>
          </div>
          <h2 style={{ textAlign: 'center', color: '#1e3a8a' }}>Total: ${total}</h2>
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
