import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
  const [view, setView] = useState('welcome');
  const [time, setTime] = useState('09:41');
  
  // Estado V2: Habitaciones y Frecuencia
  const [state, setState] = useState({
    rooms: 1,
    clean: 'light', 
    freq: 'once',   
    days: [],
    street: '',
    city: 'Maldonado',
    km: 5
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

  // Lógica de precio: $800 base por habitación
  const calcPrice = () => {
    let base = state.rooms * 800;
    if (state.clean === 'deep') base *= 1.5;
    let multiplier = 1;
    if (state.freq === 'weekly') multiplier = 0.9;
    if (state.freq === 'monthly') multiplier = 0.8;
    return Math.round(base * multiplier);
  };

  const toggleDay = (day) => {
    const newDays = state.days.includes(day) 
      ? state.days.filter(d => d !== day) 
      : [...state.days, day];
    setState({...state, days: newDays});
  };

  const handleWhatsApp = () => {
    const freqMap = {once: 'Una vez', weekly: 'Semanal', monthly: 'Mensual'};
    const msg = `¡Hola LIMHER! Solicitud:\n- Habitaciones: ${state.rooms}\n- Limpieza: ${state.clean === 'deep' ? 'Profunda' : 'Ligera'}\n- Frecuencia: ${freqMap[state.freq]}\n- Días: ${state.days.join(', ') || 'A convenir'}\n- Dirección: ${state.street}\n- Total: $${calcPrice()}`;
    window.open(`https://wa.me/59899000000?text=${encodeURIComponent(msg)}`);
  };

  const Layout = ({ children, backView }) => (
    <div style={{ backgroundColor: '#f3f4f6', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', fontFamily: 'sans-serif' }}>
      <div style={{ backgroundColor: 'white', width: '340px', height: '600px', borderRadius: '32px', border: '1px solid #e5e7eb', overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}>
        {/* Status Bar estilo iPhone */}
        <div style={{ padding: '12px 20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px' }}>
          <span style={{ fontWeight: '600' }}>{time}</span>
          <span style={{ letterSpacing: '2px' }}>●●● ▲</span>
        </div>
        <div style={{ flex: 1, padding: '24px 20px', display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
          {backView && <button onClick={() => setView(backView)} style={{ background: 'none', border: 'none', color: '#6b7280', fontSize: '13px', textAlign: 'left', marginBottom: '15px', cursor: 'pointer', padding: 0 }}>← volver</button>}
          {children}
        </div>
      </div>
    </div>
  );

  if (view === 'welcome') return (
    <Layout>
      <div style={{ marginTop: '20px' }}>
        <div style={{ width: '36px', height: '36px', backgroundColor: '#E1F5EE', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 14 C3 8 9 4 15 4" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round"/><circle cx="15" cy="4" r="2" fill="#1D9E75"/></svg>
        </div>
        <h1 style={{ fontSize: '26px', margin: '0', fontWeight: '500' }}>lim<span style={{ color: '#1D9E75' }}>her</span></h1>
        <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.5', marginTop: '4px' }}>Limpieza profesional verificada<br/>en Maldonado</p>
      </div>
      <div style={{ marginTop: 'auto' }}>
        <button onClick={() => setView('step1')} style={{ width: '100%', padding: '14px', backgroundColor: '#1D9E75', color: 'white', border: 'none', borderRadius: '12px', fontWeight: '500', marginBottom: '10px', cursor: 'pointer' }}>Solicitar servicio</button>
        <button onClick={() => setView('register')} style={{ width: '100%', padding: '14px', backgroundColor: 'transparent', color: '#0F6E56', border: '1px solid #5DCAA5', borderRadius: '12px', fontWeight: '500', cursor: 'pointer' }}>Soy colaboradora</button>
      </div>
    </Layout>
  );

  if (view === 'step1') return (
    <Layout backView="welcome">
      <h2 style={{ fontSize: '17px', fontWeight: '500', margin: '0' }}>Personalizá tu limpieza</h2>
      <p style={{ fontSize: '13px', color: '#6b7280', marginBottom: '24px' }}>Habitaciones y tipo de servicio</p>
      
      <label style={{ fontSize: '11px', fontWeight: '500', color: '#9ca3af', textTransform: 'uppercase', marginBottom: '6px' }}>Habitaciones: {state.rooms}</label>
      <input type="range" min="1" max="5" value={state.rooms} onChange={(e) => setState({...state, rooms: parseInt(e.target.value)})} style={{ width: '100%', accentColor: '#1D9E75', marginBottom: '25px' }} />
      
      <div style={{
      
