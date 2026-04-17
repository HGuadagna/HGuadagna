import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
  const [view, setView] = useState('welcome');
  const [time, setTime] = useState('09:41');
  
  // Estado alineado a la versión V2 (Habitaciones, no metros)
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

  // Lógica de precio V2: $800 por habitación base
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
      `- Habitaciones: ${state.rooms}\n` +
      `- Limpieza: ${state.clean === 'deep' ? 'Profunda' : 'Ligera'}\n` +
      `- Frecuencia: ${freqMap[state.freq]}\n` +
      `- Días: ${state.days.join(', ') || 'A convenir'}\n` +
      `- Dirección: ${state.street}, ${state.city}\n` +
      `- Total: $${calcPrice()}`;
    window.open(`https://wa.me/59899000000?text=${encodeURIComponent(msg)}`);
  };

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
      <div style={{ marginTop: '40px' }}>
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
    <Layout backView="welcome" title="Alcance del servicio">
      <p style={{ fontSize: '13px', color: '#6b7280', marginBottom: '25px' }}>Paso 1 de 3: Habitaciones</p>
      
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <span style={{ fontSize: '48px', fontWeight: '700', color: '#1D9E75' }}>{state.rooms}</span>
        <div style={{ fontSize: '14px', color: '#9ca3af', fontWeight: '600', textTransform: 'uppercase' }}>{state.rooms === 1 ? 'Habitación' : 'Habitaciones'}</div>
      </div>

      <input type="range" min="1" max="5" value={state.rooms} onChange={(e) => setState({...state, rooms: parseInt(e.target.value)})} style={{ width: '100%', accentColor: '#1D9E75', marginBottom: '35px' }} />
      
      <div style={{ display: 'flex', gap: '8px', marginBottom: '25px' }}>
        <button onClick={() => setState({...state, clean: 'light'})} style={{ flex: 1, padding: '14px', borderRadius: '12px', border: '1px solid #e5e7eb', backgroundColor: state.clean === 'light' ? '#E1F5EE' : 'white', color: state.clean === 'light' ? '#085041' : '#6b7280', fontWeight: '600' }}>Limpieza Ligera</button>
        <button onClick={() => setState({...state, clean: 'deep'})} style={{ flex: 1, padding: '14px', borderRadius: '12px', border: '1px solid #e5e7eb', backgroundColor: state.clean === 'deep' ? '#E1F5EE' : 'white', color: state.clean === 'deep' ? '#085041' : '#6b7280', fontWeight: '600' }}>Profunda</button>
      </div>

      <button onClick={() => setView('step2')} style={{ width: '100%', marginTop: 'auto', padding: '16px', backgroundColor: '#1D9E75', color: 'white', border: 'none', borderRadius: '14px', fontWeight: '600' }}>Siguiente</button>
    </Layout>
  );

  if (view === 'step2') return (
    <Layout backView="step1" title="Frecuencia">
      <div style={{ display: 'flex', gap: '5px', marginBottom: '25px' }}>
        {['once', 'weekly', 'monthly'].map(f => (
          <button key={f} onClick={() => setState({...state, freq: f})} style={{ flex: 1, padding: '10px 5px', fontSize: '11px', borderRadius: '10px', border: '1px solid #e5e7eb', backgroundColor: state.freq === f ? '#0F6E56' : 'white', color: state.freq === f ? 'white' : '#6b7280', fontWeight: '600' }}>
            {f === 'once' ? 'Una vez' : f === 'weekly' ? 'Semanal' : 'Mensual'}
          </button>
        ))}
      </div>

      <label style={{ fontSize: '11px', fontWeight: '600', color: '#9ca3af', textTransform: 'uppercase' }}>Días de preferencia</label>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', margin: '12px 0 25px' }}>
        {['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map(d => (
          <button key={d} onClick={() => toggleDay(d)} style={{ padding: '12px', width: '48px', borderRadius: '10px', border: '1px solid #e5e7eb', fontSize: '12px', backgroundColor: state.days.includes(d) ? '#1D9E75' : 'white', color: state.days.includes(d) ? 'white' : '#6b7280', fontWeight: '600' }}>{d}</button>
        ))}
      </div>

      <button onClick={() => setView('step3')} style={{ width: '100%', marginTop: 'auto', padding: '16px', backgroundColor: '#1D9E75', color: 'white', border: 'none', borderRadius: '14px', fontWeight: '600' }}>Continuar</button>
    </Layout>
  );

  if (view === 'step3') return (
    <Layout backView="step2" title="Ubicación">
      <input placeholder="Dirección en Maldonado / Punta" value={state.street} onChange={(e) => setState({...state, street: e.target.value})} style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid #e5e7eb', marginBottom: '20px', backgroundColor: '#f9fafb' }} />
      
      <div style={{ backgroundColor: '#EEF2FF', height: '160px', borderRadius: '20px', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
         <div style={{ width: '70px', height: '70px', backgroundColor: 'rgba(29, 158, 117, 0.1)', border: '2px solid #1D9E75', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>📍</div>
         <div style={{ position: 'absolute', bottom: '15px', right: '15px', fontSize: '11px', color: '#1D9E75', fontWeight: 'bold' }}>RADIO: {state.km}KM</div>
      </div>
      <input type="range" min="1" max="20" value={state.km} onChange={(e) => setState({...state, km: e.target.value})} style={{ width: '100%', accentColor: '#1D9E75', marginTop: '15px' }} />

      <button onClick={() => setView('confirm')} style={{ width: '100%', marginTop: 'auto', padding: '16px', backgroundColor: '#1D9E75', color: 'white', border: 'none', borderRadius: '14px', fontWeight: '600' }}>Calcular presupuesto</button>
    </Layout>
  );

  if (view === 'confirm') return (
    <Layout backView="step3" title="Resumen">
      <div style={{ backgroundColor: '#f9fafb', padding: '24px', borderRadius: '20px', marginTop: '10px' }}>
        <div style={{ fontSize: '40px', fontWeight: '700', color: '#0F6E56' }}>${calcPrice()}</div>
        <p style={{ fontSize: '12px', color: '#9ca3af', marginBottom: '20px' }}>IVA incluido · Estimado {state.freq === 'once' ? 'único' : state.freq === 'weekly' ? 'semanal' : 'mensual'}</p>
        
        <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}><span>Habitaciones</span><b>{state.rooms}</b></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}><span>Servicio</span><b>{state.clean === 'deep' ? 'Profundo' : 'Ligero'}</b></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}><span>Frecuencia</span><b>{state.freq === 'once' ? 'Una vez' : state.freq === 'weekly' ? 'Semanal' : 'Mensual'}</b></div>
        </div>
      </div>

      <button onClick={handleWhatsApp} style={{ width: '100%', marginTop: 'auto', padding: '16px', backgroundColor: '#1D9E75', color: 'white', border: 'none', borderRadius: '14px', fontWeight: '600' }}>Confirmar por WhatsApp</button>
    </Layout>
  );

  return null;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
