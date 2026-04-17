import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
  const [view, setView] = useState('welcome');
  const [m2, setM2] = useState(50);
  const [tipo, setTipo] = useState(1);
  const [tipoLabel, setTipoLabel] = useState('Hogar');
  const [insActive, setInsActive] = useState(false);
  const [time, setTime] = useState('09:41');

  useEffect(() => {
    const tick = () => {
      const n = new Date();
      setTime(`${n.getHours().toString().padStart(2,'0')}:${n.getMinutes().toString().padStart(2,'0')}`);
    };
    tick();
    const timer = setInterval(tick, 10000);
    return () => clearInterval(timer);
  }, []);

  const total = Math.round((m2 * 45 * tipo) + (insActive ? 500 : 0));

  const handleWhatsApp = () => {
    const msg = `¡Hola LIMHER! Quiero reservar:\nTipo: ${tipoLabel}\nTamaño: ${m2}m²\nInsumos: ${insActive ? 'Sí' : 'No'}\nTotal: $${total}`;
    window.open(`https://wa.me/59899000000?text=${encodeURIComponent(msg)}`);
  };

  const Layout = ({ children, backView }) => (
    <div style={{ backgroundColor: '#f3f4f6', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', fontFamily: 'sans-serif' }}>
      <div style={{ backgroundColor: 'white', width: '340px', height: '600px', borderRadius: '32px', border: '1px solid #e5e7eb', overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}>
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
        <button onClick={() => setView('quoter')} style={{ width: '100%', padding: '14px', backgroundColor: '#1D9E75', color: 'white', border: 'none', borderRadius: '12px', fontWeight: '500', marginBottom: '10px', cursor: 'pointer' }}>Solicitar servicio</button>
        <button onClick={() => setView('register')} style={{ width: '100%', padding: '14px', backgroundColor: 'transparent', color: '#0F6E56', border: '1px solid #5DCAA5', borderRadius: '12px', fontWeight: '500', cursor: 'pointer' }}>Soy colaboradora</button>
      </div>
    </Layout>
  );

  if (view === 'quoter') return (
    <Layout backView="welcome">
      <h2 style={{ fontSize: '17px', fontWeight: '500', margin: '0' }}>Cotizá tu servicio</h2>
      <p style={{ fontSize: '13px', color: '#6b7280', marginBottom: '24px' }}>Precio instantáneo Hogar y Oficina</p>
      
      <label style={{ fontSize: '11px', fontWeight: '500', color: '#9ca3af', textTransform: 'uppercase', marginBottom: '6px' }}>Tamaño: {m2} m²</label>
      <input type="range" min="20" max="250" step="10" value={m2} onChange={(e) => setM2(e.target.value)} style={{ width: '100%', accentColor: '#1D9E75', marginBottom: '25px' }} />
      
      <div style={{ display: 'flex', gap: '10px', marginBottom: '25px' }}>
        {['Hogar', 'Oficina'].map((l, i) => {
          const vals = [1, 1.5];
          const active = tipoLabel === l;
          return (
            <button key={l} onClick={() => { setTipo(vals[i]); setTipoLabel(l); }} style={{ flex: 1, padding: '14px 6px', fontSize: '14px', borderRadius: '12px', border: '1px solid #e5e7eb', backgroundColor: active ? '#E1F5EE' : '#f9fafb', color: active ? '#085041' : '#6b7280', fontWeight: active ? '600' : '400', cursor: 'pointer', transition: '0.2s' }}>{l}</button>
          )
        })}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderTop: '0.5px solid #e5e7eb' }}>
        <div>
          <div style={{ fontSize: '14px' }}>Insumos incluidos</div>
          <div style={{ fontSize: '12px', color: '#9ca3af' }}>Productos + $500</div>
        </div>
        <div onClick={() => setInsActive(!insActive)} style={{ width: '38px', height: '22px', backgroundColor: insActive ? '#1D9E75' : '#d1d5db', borderRadius: '11px', position: 'relative', cursor: 'pointer', transition: '0.2s' }}>
          <div style={{ position: 'absolute', width: '16px', height: '16px', backgroundColor: 'white', borderRadius: '50%', top: '3px', left: insActive ? '19px' : '3px', transition: '0.2s' }} />
        </div>
      </div>

      <div style={{ marginTop: 'auto', textAlign: 'center', paddingTop: '16px', borderTop: '0.5px solid #e5e7eb' }}>
        <div style={{ fontSize: '12px', color: '#6b7280' }}>Total estimado</div>
        <div style={{ fontSize: '32px', fontWeight: '500' }}>${total.toLocaleString('es-UY')}</div>
        <button onClick={() => setView('confirm')} style={{ width: '100%', marginTop: '15px', padding: '14px', backgroundColor: '#1D9E75', color: 'white', border: 'none', borderRadius: '12px', fontWeight: '500', cursor: 'pointer' }}>Reservar ahora</button>
      </div>
    </Layout>
  );

  if (view === 'confirm') return (
    <Layout backView="quoter">
      <h2 style={{ fontSize: '17px', fontWeight: '500' }}>Confirmá tu reserva</h2>
      <div style={{ backgroundColor: '#f9fafb', padding: '14px', borderRadius: '12px', margin: '15px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '8px' }}><span style={{color:'#6b7280'}}>Tipo</span><b>{tipoLabel}</b></div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '8px' }}><span style={{color:'#6b7280'}}>Tamaño</span><b>{m2} m²</b></div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', paddingTop: '8px', borderTop: '0.5px solid #e5e7eb' }}><b>Total</b><b style={{ color: '#0F6E56' }}>${total.toLocaleString('es-UY')}</b></div>
      </div>
      <div style={{fontSize:'11px', color:'#9ca3af', textTransform:'uppercase', marginBottom:'6px'}}>Dirección</div>
      <input placeholder="Calle, número, ciudad" style={{ width: '100%', padding: '11px', borderRadius: '8px', border: '1px solid #e5e7eb', marginBottom: '10px', backgroundColor:'#f9fafb' }} />
      <button onClick={handleWhatsApp} style={{ width: '100%', marginTop: 'auto', padding: '14px', backgroundColor: '#1D9E75', color: 'white', border: 'none', borderRadius: '12px', fontWeight: '500' }}>Confirmar y pagar</button>
    </Layout>
  );

  if (view === 'register') return (
    <Layout backView="welcome">
      <h2 style={{ fontSize: '17px', fontWeight: '500' }}>Registro de colaboradora</h2>
      <p style={{ fontSize: '13px', color: '#6b7280', marginBottom: '20px' }}>Completá tus datos para activar tu perfil</p>
      <input placeholder="Nombre completo" style={{ width: '100%', padding: '11px', borderRadius: '8px', border: '1px solid #e5e7eb', marginBottom: '10px', backgroundColor:'#f9fafb' }} />
      <input placeholder="RUT unipersonal" style={{ width: '100%', padding: '11px', borderRadius: '8px', border: '1px solid #e5e7eb', marginBottom: '10px', backgroundColor:'#f9fafb' }} />
      <div style={{ padding: '20px', border: '1px dashed #5DCAA5', borderRadius: '8px', textAlign: 'center', fontSize: '13px', color: '#6b7280', cursor: 'pointer', backgroundColor:'#f9fafb' }}>+ Adjuntar documentación</div>
      <button onClick={() => setView('welcome')} style={{ width: '100%', marginTop: 'auto', padding: '14px', backgroundColor: '#1D9E75', color: 'white', border: 'none', borderRadius: '12px', fontWeight: '500' }}>Enviar solicitud</button>
    </Layout>
  );

  return null;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
