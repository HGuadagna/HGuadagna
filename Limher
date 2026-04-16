import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
  const [view, setView] = useState('welcome');
  const [m2, setM2] = useState(50);
  const [tipo, setTipo] = useState(1);
  const [tipoLabel, setTipoLabel] = useState('Hogar');
  const [insActive, setInsActive] = useState(false);
  const [time, setTime] = useState('09:41');

  // Reloj simulado estilo iPhone
  useEffect(() => {
    const timer = setInterval(() => {
      const n = new Date();
      setTime(`${n.getHours().toString().padStart(2,'0')}:${n.getMinutes().toString().padStart(2,'0')}`);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const total = Math.round((m2 * 45 * tipo) + (insActive ? 500 : 0));

  const handleSetTipo = (t, label) => {
    setTipo(t);
    setTipoLabel(label);
  };

  const handleWhatsApp = () => {
    const msg = `¡Hola LIMHER! Quiero reservar:\nTipo: ${tipoLabel}\nTamaño: ${m2}m²\nInsumos: ${insActive ? 'Sí' : 'No'}\nTotal: $${total}`;
    window.open(`https://wa.me/59899000000?text=${encodeURIComponent(msg)}`); // Reemplaza con tu número
  };

  // --- COMPONENTES DE PANTALLA ---

  const Layout = ({ children, backView }) => (
    <div style={{ backgroundColor: '#f3f4f6', minHeight: '100vh', display: 'flex', justifyContent: 'center', padding: '20px' }}>
      <div style={{ backgroundColor: 'white', width: '340px', minHeight: '600px', borderRadius: '32px', border: '1px solid #e5e7eb', overflow: 'hidden', display: 'flex', flex-direction: 'column', position: 'relative', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}>
        {/* Status Bar */}
        <div style={{ padding: '12px 20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px' }}>
          <span style={{ fontWeight: '600' }}>{time}</span>
          <span>●●● ▲</span>
        </div>
        <div style={{ flex: 1, padding: '20px', display: 'flex', flexDirection: 'column' }}>
          {backView && <button onClick={() => setView(backView)} style={{ background: 'none', border: 'none', color: '#6b7280', fontSize: '13px', textAlign: 'left', marginBottom: '20px', cursor: 'pointer' }}>← volver</button>}
          {children}
        </div>
      </div>
    </div>
  );

  if (view === 'welcome') return (
    <Layout>
      <div style={{ marginTop: '40px' }}>
        <div style={{ width: '40px', height: '40px', backgroundColor: '#E1F5EE', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>🟢</div>
        <h1 style={{ fontSize: '28px', margin: '0' }}>lim<span style={{ color: '#1D9E75' }}>her</span></h1>
        <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.5', marginTop: '10px' }}>Limpieza profesional verificada<br/>en Maldonado</p>
      </div>
      <div style={{ marginTop: 'auto' }}>
        <button onClick={() => setView('quoter')} style={{ width: '100%', padding: '14px', backgroundColor: '#1D9E75', color: 'white', border: 'none', borderRadius: '12px', fontWeight: '600', marginBottom: '10px', cursor: 'pointer' }}>Solicitar servicio</button>
        <button onClick={() => setView('register')} style={{ width: '100%', padding: '14px', backgroundColor: 'transparent', color: '#0F6E56', border: '1px solid #5DCAA5', borderRadius: '12px', fontWeight: '600', cursor: 'pointer' }}>Soy colaboradora</button>
      </div>
    </Layout>
  );

  if (view === 'quoter') return (
    <Layout backView="welcome">
      <h2 style={{ fontSize: '18px', fontWeight: '600', margin: '0' }}>Cotizá tu servicio</h2>
      <p style={{ fontSize: '13px', color: '#6b7280', marginBottom: '20px' }}>El precio se calcula al instante</p>
      
      <label style={{ fontSize: '11px', fontWeight: '600', color: '#9ca3af', textTransform: 'uppercase' }}>Tamaño: {m2} m²</label>
      <input type="range" min="20" max="300" step="10" value={m2} onChange={(e) => setM2(e.target.value)} style={{ width: '100%', accentColor: '#1D9E75', margin: '15px 0 25px' }} />
      
      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        {['Hogar', 'Oficina', 'Obra'].map((l, i) => {
          const vals = [1, 1.5, 2.2];
          return (
            <button key={l} onClick={() => handleSetTipo(vals[i], l)} style={{ flex: 1, padding: '10px', fontSize: '12px', borderRadius: '8px', border: '1px solid #e5e7eb', backgroundColor: tipoLabel === l ? '#E1F5EE' : 'white', color: tipoLabel === l ? '#085041' : '#6b7280', fontWeight: tipoLabel === l ? '600' : '400' }}>{l}</button>
          )
        })}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 0', borderTop: '1px solid #f3f4f6' }}>
        <div>
          <div style={{ fontSize: '14px' }}>Insumos incluidos</div>
          <div style={{ fontSize: '12px', color:
