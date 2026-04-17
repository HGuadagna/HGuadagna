import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
  const [view, setView] = useState('welcome');
  const [time, setTime] = useState('09:41');
  
  // Estado de la cotización (v2)
  const [state, setState] = useState({
    rooms: 1,
    clean: 'light', // light o deep
    freq: 'once',   // once, weekly, monthly
    days: [],
    hour: '',
    street: '',
    city: 'Maldonado',
    km: 5
  });

  // Reloj iPhone
  useEffect(() => {
    const tick = () => {
      const n = new Date();
      setTime(`${n.getHours().toString().padStart(2,'0')}:${n.getMinutes().toString().padStart(2,'0')}`);
    };
    tick();
    const timer = setInterval(tick, 10000);
    return () => clearInterval(timer);
  }, []);

  // Lógica de cálculo v2
  const calcPrice = () => {
    let base = state.rooms * 800;
    if (state.clean === 'deep') base *= 1.5;
    
    let multiplier = 1;
    if (state.freq === 'weekly') multiplier = 0.9; // 10% desc
    if (state.freq === 'monthly') multiplier = 0.8; // 20% desc
    
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
    const msg = `¡Hola LIMHER! Solicitud de servicio:\n\n` +
      `- ${state.rooms} ${state.rooms === 1 ? 'habitación' : 'habitaciones'}\n` +
      `- Limpieza: ${state.clean === 'deep' ? 'Profunda' : 'Ligera'}\n` +
      `- Frecuencia: ${freqMap[state.freq]}\n` +
      `- Días: ${state.days.join(', ') || 'A convenir'}\n` +
      `- Dirección: ${state.street}, ${state.city}\n` +
      `- Total: $${calcPrice()}`;
    window.open(`https://wa.me/59899000000?text=${encodeURIComponent(msg)}`);
  };

  // Marco del Celular
  const Layout = ({ children, backView, title }) => (
    <div style={{ backgroundColor: '#f3f4f6', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', fontFamily: 'sans-serif' }}>
      <div style={{ backgroundColor: 'white', width: '340px', height: '620px', borderRadius: '32px', border: '1px solid #e5e7eb', overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}>
        <div style={{ padding: '12px 20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px' }}>
          <span style={{ fontWeight: '600' }}>{time}</span>
          <span style={{ letterSpacing: '2px' }}>●●● ▲</span>
        </div>
        <div style={{ flex: 1, padding: '20px', display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
          {backView && <button onClick={() => setView(backView)} style={{ background: 'none', border: 'none', color: '#1D9E75', fontSize: '13px', textAlign: 'left', marginBottom: '15px', cursor: 'pointer', fontWeight: '500' }}>← volver</button>}
          {title && <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '4px' }}>{title}</h2>}
          {children}
        </div>
      </div>
    </div>
  );

  if (view === 'welcome') return (
    <Layout>
      <div style={{ marginTop: '40px', textAlign: 'left' }}>
        <div style={{ width: '40px', height: '40px', backgroundColor: '#E1F5EE', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
          <div style={{ width: '20px', height: '20px', backgroundColor: '#1D9E75', borderRadius: '50%' }}></div>
        </div>
        <h1 style={{ fontSize: '32px', margin: '0', fontWeight: '600', letterSpacing: '-1px' }}>lim<span style={{ color: '#1D9E75' }}>her</span></h1>
        <p style={{ fontSize: '15px', color: '#6b7280', lineHeight: '1.5', marginTop: '8px' }}>Tu hogar impecable en<br/>Maldonado y Punta del Este.</p>
      </div>
      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <button onClick={() => setView('step1')} style={{ width: '100%', padding: '16px', backgroundColor: '#1D9E75', color: 'white', border: 'none', borderRadius: '14px', fontWeight: '600', cursor: 'pointer' }}>Comenzar cotización</button>
        <button onClick={() => setView('register')} style={{ width: '100%', padding: '16px', backgroundColor: 'transparent', color: '#0F6E56', border: '1px solid #E1F5EE', borderRadius: '14px', fontWeight: '600', cursor: 'pointer' }}>Postularse como colaboradora</button>
      </div>
    </Layout>
  );

  if (view === 'step1') return (
    <Layout backView="welcome" title="Personalizá tu limpieza">
      <p style={{ fontSize: '13px', color: '#6b7280', marginBottom: '20px' }}>Paso 1 de 3: Alcance</p>
      
      <label style={{ fontSize: '11px', fontWeight: '600', color: '#9ca3af', textTransform: 'uppercase' }}>Habitaciones: {state.rooms}</label>
      <input type="range" min="1" max="5" value={state.rooms} onChange={(e) => setState({...state, rooms: parseInt(e.target.value)})} style={{ width: '100%', accentColor: '#1D9E75', margin: '15px 0 25px' }} />
      
      <div style={{ display: 'flex', gap: '8px', marginBottom: '25px' }}>
        <button onClick={() => setState({...state, clean: 'light'})} style={{ flex: 1, padding: '12px', borderRadius: '10px',
