import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
  const [view, setView] = useState('welcome'); // welcome, login, register, quoter
  const [m2, setM2] = useState(50);
  const [tipo, setTipo] = useState(1);
  const [ins, setIns] = useState(false);

  const calcular = () => Math.round((m2 * 45 * tipo) + (ins ? 500 : 0));

  const sendWhatsApp = () => {
    const msg = `Hola LIMHER! Quiero reservar: ${m2}m2, Tipo: ${tipo === 1 ? 'Hogar' : tipo === 1.5 ? 'Oficina' : 'Obra'}. Total: $${calcular()}`;
    window.open(`https://wa.me/59899000000?text=${encodeURIComponent(msg)}`); // Cambia el numero por el tuyo
  }

  // --- COMPONENTES DE PANTALLA ---

  const WelcomeView = () => (
    <div style={{ textAlign: 'center', padding: '40px 20px' }}>
      <h1 style={{ color: '#1e3a8a', fontSize: '42px', marginBottom: '10px' }}>LIMHER</h1>
      <p style={{ color: '#6b7280', marginBottom: '40px' }}>Soluciones de limpieza en Maldonado</p>
      <button onClick={() => setView('quoter')} style={{ width: '100%', padding: '15px', backgroundColor: '#2563eb', color: 'white', border: 'none', borderRadius: '12px', fontWeight: 'bold', marginBottom: '15px' }}>SOY CLIENTE</button>
      <button onClick={() => setView('login')} style={{ width: '100%', padding: '15px', backgroundColor: 'white', color: '#2563eb', border: '2px solid #2563eb', borderRadius: '12px', fontWeight: 'bold' }}>SOY COLABORADOR</button>
    </div>
  )

  const RegisterView = () => (
    <div style={{ padding: '20px' }}>
      <button onClick={() => setView('welcome')} style={{ border: 'none', background: 'none', color: '#2563eb', marginBottom: '20px' }}>← Volver</button>
      <h2 style={{ color: '#1e3a8a' }}>Registro de Colaboradora</h2>
      <input placeholder="Nombre completo" style={{ width: '100%', padding: '12px', marginBottom: '10px', borderRadius: '8px', border: '1px solid #ddd' }} />
      <input placeholder="RUT Unipersonal" style={{ width: '100%', padding: '12px', marginBottom: '10px', borderRadius: '8px', border: '1px solid #ddd' }} />
      <input placeholder="Teléfono" style={{ width: '100%', padding: '12px', marginBottom: '20px', borderRadius: '8px', border: '1px solid #ddd' }} />
      <button onClick={() => alert('Datos enviados para validación')} style={{ width: '100%', padding: '15px', backgroundColor: '#15803d', color: 'white', border: 'none', borderRadius: '12px', fontWeight: 'bold' }}>ENVIAR DATOS</button>
    </div>
  )

  const QuoterView = () => (
    <div style={{ padding: '20px' }}>
      <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '20px', boxShadow: '0 10px 15px rgba(0,0,0,0.05)' }}>
        <h3 style={{ marginTop: 0, color: '#1e3a8a' }}>Cotizá tu servicio</h3>
        <label style={{ fontSize: '12px', fontWeight: 'bold', color: '#6b7280' }}>TAMAÑO: {m2} m²</label>
        <input type="range" min="20" max="300" step="10" value={m2} onChange={(e) => setM2(Number(e.target.value))} style={{ width: '100%', marginBottom: '25px' }} />
        <div style={{ display: 'flex', gap: '8px', marginBottom: '25px' }}>
          { [1, 1.5, 2.2].map(t => (
            <button key={t} onClick={() => setTipo(t)} style={{ flex: 1, padding: '10px', backgroundColor: tipo === t ? '#2563eb' : '#eee', color: tipo === t ? 'white' : 'black', border: 'none', borderRadius: '8px' }}>
              {t === 1 ? 'Hogar' : t === 1.5 ? 'Oficina' : 'Obra'}
            </button>
          ))}
        </div>
        <div style={{ textAlign: 'center', borderTop: '1px solid #eee', paddingTop: '20px' }}>
          <span style={{ fontSize: '36px', fontWeight: 'bold', color: '#1e3a8a' }}>${calcular()}</span>
          <button onClick={sendWhatsApp} style={{ width: '100%', marginTop: '20px', padding: '15px', backgroundColor: '#2563eb', color: 'white', border: 'none', borderRadius: '12px', fontWeight: 'bold' }}>RESERVAR AHORA</button>
        </div>
      </div>
      <button onClick={() => setView('welcome')} style={{ width: '100%', marginTop: '20px', background: 'none', border: 'none', color: '#6b7280' }}>Volver al inicio</button>
    </div>
  )

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '400px', margin: '0 auto', backgroundColor: '#f3f4f6', minHeight: '100vh' }}>
      {view === 'welcome' && <WelcomeView />}
      {view === 'login' && <RegisterView />}
      {view === 'quoter' && <QuoterView />}
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
