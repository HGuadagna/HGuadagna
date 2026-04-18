import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'

// Datos de colaboradoras extraídos del archivo original
const COLLABS = [
  {init:'MG', name:'María González', score:4.9, reviews:127, rate:900, badge:true, color:'#E1F5EE', tc:'#085041', rev:'"Puntual, ordenada y muy profesional."'},
  {init:'LM', name:'Laura Méndez', score:4.8, reviews:83, rate:850, badge:true, color:'#E6F1FB', tc:'#042C53', rev:'"Excelente limpieza, muy recomendable."'},
  {init:'SP', name:'Sofía Pérez', score:4.5, reviews:41, rate:800, badge:false, color:'#FAEEDA', tc:'#412402', rev:'"Buen trabajo, muy amable."'},
  {init:'CR', name:'Carolina Ríos', score:4.3, reviews:22, rate:780, badge:false, color:'#FBEAF0', tc:'#4B1528', rev:'"Cumplió con todo lo acordado."'},
];

const App = () => {
  // Navegación y Reloj
  const [view, setView] = useState('splash');
  const [time, setTime] = useState('09:41');
  
  // Estado completo de la App (S en el original)
  const [form, setForm] = useState({
    space: 'Casa',
    rooms: 2,
    clean: 'deep',
    freq: 'once',
    days: [],
    hrs: 2,
    tMin: 9,
    tMax: 17,
    collab: null,
    pay: 'card',
    street: ''
  });

  useEffect(() => {
    const tick = () => {
      const n = new Date();
      setTime(`${n.getHours().toString().padStart(2,'0')}:${n.getMinutes().toString().padStart(2,'0')}`);
    };
    tick();
    const timer = setInterval(tick, 10000);
    return () => clearInterval(timer);
  }, []);

  // Lógica de Precios del archivo V3
  const calcPrice = () => {
    const c = COLLABS[form.collab !== null ? form.collab : 0];
    let base = c.rate * form.hrs;
    if (form.clean === 'deep') base = Math.round(base * 1.5);
    const mult = { once: 1, weekly: 0.9, monthly: 0.85 };
    return Math.round(base * (mult[form.freq] || 1));
  };

  // Componente de Layout Estilo iPhone
  const Layout = ({ children, backView, showNav = false }) => (
    <div style={{ backgroundColor: '#f3f4f6', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', fontFamily: 'sans-serif' }}>
      <div style={{ backgroundColor: 'white', width: '340px', height: '600px', borderRadius: '32px', border: '0.5px solid #e5e7eb', overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}>
        <div style={{ padding: '12px 20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px' }}>
          <span style={{ fontWeight: '500' }}>{time}</span>
          <span style={{ color: '#6b7280' }}>●●● ▲</span>
        </div>
        <div style={{ flex: 1, padding: '18px', display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
          {backView && <button onClick={() => setView(backView)} style={{ background: 'none', border: 'none', color: '#6b7280', fontSize: '13px', textAlign: 'left', marginBottom: '14px', cursor: 'pointer', padding: 0 }}>← atrás</button>}
          {children}
        </div>
      </div>
    </div>
  );

  // --- VISTAS ---

  if (view === 'splash') return (
    <Layout>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <div style={{ width: '56px', height: '56px', backgroundColor: '#E1F5EE', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M4 22 C4 12 14 6 24 6" stroke="#1D9E75" strokeWidth="2.5" strokeLinecap="round"/><circle cx="24" cy="6" r="3" fill="#1D9E75"/></svg>
        </div>
        <h1 style={{ fontSize: '30px', fontWeight: '500', letterSpacing: '-1px' }}>lim<span style={{ color: '#1D9E75' }}>her</span></h1>
        <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.8', margin: '20px 0 32px' }}>Conectamos hogares y oficinas con profesionales de limpieza verificadas.</p>
        <button onClick={() => setView('welcome')} style={{ width: '100%', padding: '13px', backgroundColor: '#1D9E75', border: 'none', borderRadius: '12px', color: '#085041', fontWeight: '500', cursor: 'pointer' }}>Comenzar</button>
      </div>
    </Layout>
  );

  if (view === 'welcome') return (
    <Layout>
      <div style={{ marginTop: '20px' }}>
        <div style={{ width: '36px', height: '36px', backgroundColor: '#E1F5EE', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>🟢</div>
        <h2 style={{ fontSize: '22px', fontWeight: '500' }}>lim<span style={{ color: '#1D9E75' }}>her</span></h2>
        <p style={{ fontSize: '13px', color: '#6b7280' }}>Limpieza profesional verificada</p>
      </div>
      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <button onClick={() => setView('q1')} style={{ width: '100%', padding: '13px', backgroundColor: '#1D9E75', border: 'none', borderRadius: '12px', color: '#085041', fontWeight: '500', cursor: 'pointer' }}>Solicitar servicio</button>
        <button onClick={() => setView('register')} style={{ width: '100%', padding: '12px', background: 'transparent', border: '0.5px solid #5DCAA5', borderRadius: '12px', color: '#0F6E56', fontWeight: '500', cursor: 'pointer' }}>Soy colaboradora</button>
      </div>
    </Layout>
  );

  if (view === 'q1') return (
    <Layout backView="welcome">
      <div style={{ fontSize: '15px', fontWeight: '500', marginBottom: '3px' }}>Contanos sobre tu espacio</div>
      <p style={{ fontSize: '12px', color: '#6b7280', marginBottom: '16px' }}>Paso 1 · ¿Qué tipo de espacio es?</p>
      
      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        {['Casa', 'Apartamento'].map(type => (
          <button key={type} onClick={() => setForm({...form, space: type})} style={{ flex: 1, padding: '14px 10px', borderRadius: '12px', border: '0.5px solid #e5e7eb', backgroundColor: form.space === type ? '#E1F5EE' : 'white', cursor: 'pointer' }}>
            <span style={{ display: 'block', fontSize: '12px', color: form.space === type ? '#085041' : '#6b7280', fontWeight: form.space === type ? '500' : '400' }}>{type}</span>
          </button>
        ))}
      </div>

      <div style={{ fontSize: '11px', fontWeight: '500', color: '#9ca3af', textTransform: 'uppercase', marginBottom: '7px' }}>Habitaciones</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '5px' }}>
        {[1, 2, 3, 4, 5].map(n => (
          <button key={n} onClick={() => setForm({...form, rooms: n})} style={{ padding: '9px 0', borderRadius: '8px', border: '0.5px solid #e5e7eb', backgroundColor: form.rooms === n ? '#E1F5EE' : 'white', color: form.rooms === n ? '#085041' : '#6b7280', cursor: 'pointer' }}>{n}</button>
        ))}
      </div>
      
      <button onClick={() => setView('q2')} style={{ width: '100%', marginTop: 'auto', padding: '13px', backgroundColor: '#1D9E75', border: 'none', borderRadius: '12px', color: '#085041', fontWeight: '500' }}>Continuar</button>
    </Layout>
  );

  // ... (Las demás pantallas siguen el mismo patrón de traducción del archivo HTML)

  return null;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
