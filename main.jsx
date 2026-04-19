
<style>
*{box-sizing:border-box;margin:0;padding:0}
:root{--g:#1D9E75;--gs:#E1F5EE;--gd:#085041;--gm:#0F6E56;--gl:#5DCAA5;--bg:var(--color-background-primary);--bgs:var(--color-background-secondary);--b:var(--color-border-tertiary);--bs:var(--color-border-secondary);--t:var(--color-text-primary);--ts:var(--color-text-secondary);--tt:var(--color-text-tertiary)}
body{font-family:var(--font-sans)}
.phone{background:#eef2ee;padding:20px 16px;display:flex;justify-content:center}
.screen{background:var(--bg);border:0.5px solid var(--b);border-radius:32px;width:340px;overflow:hidden;display:flex;flex-direction:column;min-height:620px}
.sbar{padding:12px 20px 0;display:flex;justify-content:space-between;align-items:center;flex-shrink:0}
.sbar-t{font-size:12px;font-weight:500;color:var(--t)}
.sbar-r{display:flex;align-items:center;gap:6px}
.menu-btn{background:none;border:none;cursor:pointer;padding:2px;display:flex;flex-direction:column;gap:3px}
.menu-btn span{display:block;width:14px;height:1.5px;background:var(--ts);border-radius:1px}
.view{flex:1;display:flex;flex-direction:column;overflow:hidden}
.sa{flex:1;overflow-y:auto;padding:18px 18px 16px}
.sa::-webkit-scrollbar{width:3px}.sa::-webkit-scrollbar-thumb{background:var(--b);border-radius:2px}
.spacer{flex:1}
.bp{background:none;border:none;color:var(--ts);font-size:13px;cursor:pointer;padding:0;margin-bottom:12px;display:flex;align-items:center;gap:5px}
.stit{font-size:15px;font-weight:500;color:var(--t);margin-bottom:3px}
.ssub{font-size:12px;color:var(--ts);margin-bottom:14px;line-height:1.5}
.fl{font-size:10px;font-weight:500;color:var(--tt);letter-spacing:1px;text-transform:uppercase;margin-bottom:7px}
.pb{display:flex;gap:3px;margin-bottom:14px}
.pd{height:3px;flex:1;border-radius:2px;background:var(--b);transition:background .3s}
.pd.done{background:var(--g)}.pd.act{background:var(--gl)}
.btn-g{width:100%;padding:13px;background:var(--g);color:var(--gd);border:none;border-radius:50px;font-size:14px;font-weight:500;cursor:pointer;margin-bottom:8px;transition:background .2s}
.btn-g:hover{background:var(--gm)}
.btn-o{width:100%;padding:12px;background:transparent;color:var(--gm);border:0.5px solid var(--gl);border-radius:50px;font-size:13px;font-weight:500;cursor:pointer;margin-bottom:8px}
.btn-o:hover{background:var(--gs)}
.btn-ghost{width:100%;padding:10px;background:transparent;color:var(--ts);border:none;font-size:13px;cursor:pointer;margin-bottom:4px}
input[type=text],input[type=tel],input[type=email],input[type=date],select,textarea{width:100%;padding:10px 12px;background:var(--bgs);border:0.5px solid var(--b);border-radius:10px;font-size:13px;color:var(--t);margin-bottom:10px;outline:none;-webkit-appearance:none;font-family:var(--font-sans)}
input:focus,select:focus,textarea:focus{border-color:var(--gl)}
.sel-sum{background:var(--gs);border-radius:10px;padding:10px 13px;margin-bottom:12px;font-size:13px;color:var(--gd);font-weight:500;transition:all .3s}
.sel-sum-lbl{font-size:10px;color:var(--gm);text-transform:uppercase;letter-spacing:.8px;margin-bottom:3px}
.type-row{display:flex;gap:10px;justify-content:center;margin-bottom:12px}
.tcard{border:0.5px solid var(--b);border-radius:14px;padding:14px 18px;cursor:pointer;text-align:center;background:var(--bg);transition:all .2s;min-width:110px}
.tcard.on{background:var(--gs);border-color:var(--gl)}
.tcard svg{display:block;margin:0 auto 8px}
.tcard-label{font-size:13px;color:var(--ts);font-weight:500}
.tcard.on .tcard-label{color:var(--gd)}
.reveal{opacity:0;transform:translateY(6px);transition:opacity .3s,transform .3s;pointer-events:none}
.reveal.show{opacity:1;transform:translateY(0);pointer-events:all}
.rooms-g{display:grid;grid-template-columns:repeat(5,1fr);gap:5px;margin-bottom:12px}
.rb{padding:8px 0;border:0.5px solid var(--b);border-radius:8px;font-size:14px;font-weight:500;text-align:center;cursor:pointer;color:var(--ts);background:var(--bg);transition:all .15s}
.rb.on{background:var(--gs);border-color:var(--gl);color:var(--gd)}
.clean-card{border:0.5px solid var(--b);border-radius:14px;padding:13px;cursor:pointer;margin-bottom:8px;transition:all .2s}
.clean-card.on{border:2px solid var(--gl);background:var(--gs)}
.supplies-btn{display:flex;align-items:center;justify-content:space-between;padding:11px 14px;background:var(--bgs);border:0.5px solid var(--b);border-radius:10px;cursor:pointer;margin-bottom:12px;transition:all .2s}
.supplies-btn.on{background:var(--gs);border-color:var(--gl)}
.supplies-toggle{width:34px;height:20px;background:var(--b);border-radius:10px;position:relative;transition:background .2s;flex-shrink:0}
.supplies-toggle.on{background:var(--g)}
.supplies-toggle::after{content:'';position:absolute;width:14px;height:14px;background:white;border-radius:50%;top:3px;left:3px;transition:left .2s}
.supplies-toggle.on::after{left:17px}
.freq-row{display:flex;gap:6px;margin-bottom:12px}
.fb{flex:1;padding:9px 0;border:0.5px solid var(--b);border-radius:8px;font-size:12px;font-weight:500;color:var(--ts);cursor:pointer;text-align:center;background:var(--bg);transition:all .15s}
.fb.on{background:var(--gs);border-color:var(--gl);color:var(--gd)}
.days-g{display:grid;grid-template-columns:repeat(7,1fr);gap:3px;margin-bottom:12px}
.db{padding:7px 0;border:0.5px solid var(--b);border-radius:7px;font-size:11px;color:var(--ts);cursor:pointer;text-align:center;background:var(--bg);transition:all .15s}
.db.on{background:var(--gs);border-color:var(--gl);color:var(--gd);font-weight:500}
.db.dis{opacity:.3;pointer-events:none}
.hrs-center{display:flex;justify-content:center;margin-bottom:14px}
.hrs-ctrl{display:inline-flex;align-items:center;gap:16px;background:var(--bgs);border-radius:12px;padding:10px 20px}
.hb{width:28px;height:28px;border:0.5px solid var(--bs);border-radius:7px;background:var(--bg);cursor:pointer;font-size:18px;display:flex;align-items:center;justify-content:center;color:var(--t)}
.hn{font-size:20px;font-weight:500;color:var(--t);min-width:28px;text-align:center}
.slid-wrap{position:relative;height:32px;margin-bottom:6px;user-select:none}
.slid-track{position:absolute;top:50%;left:0;right:0;height:4px;background:var(--b);border-radius:2px;transform:translateY(-50%)}
.slid-fill{position:absolute;top:50%;height:4px;background:var(--g);border-radius:2px;transform:translateY(-50%)}
.sh{position:absolute;top:50%;width:18px;height:18px;border-radius:50%;background:var(--g);border:2px solid white;transform:translate(-50%,-50%);cursor:grab;touch-action:none;box-shadow:0 0 0 3px var(--gs)}
.sh:active{cursor:grabbing}
.time-labels{display:flex;justify-content:space-between;font-size:12px;font-weight:500;color:var(--t);margin-bottom:12px}
.map-box{border-radius:12px;overflow:hidden;border:0.5px solid var(--b);margin-bottom:10px;height:160px;cursor:crosshair}
.ccard{background:var(--bgs);border-radius:14px;padding:11px;margin-bottom:8px;display:flex;align-items:flex-start;gap:10px;cursor:pointer;transition:all .2s;border:0.5px solid transparent}
.ccard.sel{border:2px solid var(--gl);background:var(--gs)}
.av{width:38px;height:38px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:500;flex-shrink:0}
.vbdg{font-size:10px;background:var(--gs);color:var(--gm);padding:2px 6px;border-radius:4px;font-weight:500;margin-left:4px}
.scrd{background:var(--bgs);border-radius:12px;padding:10px 13px;margin-bottom:10px}
.crow{display:flex;justify-content:space-between;align-items:center;padding:3.5px 0}
.ck{font-size:12px;color:var(--ts)}
.cv{font-size:12px;font-weight:500;color:var(--t);text-align:right}
.pay-row{display:flex;gap:7px;margin-bottom:12px}
.pc{flex:1;padding:9px;border:0.5px solid var(--b);border-radius:10px;cursor:pointer;text-align:center;background:var(--bg);transition:all .2s}
.pc.on{border-color:var(--gl);background:var(--gs)}
.pc-lbl{font-size:11px;color:var(--ts);margin-top:4px}
.pc.on .pc-lbl{color:var(--gd);font-weight:500}
.disc-row{display:flex;gap:7px;margin-bottom:8px}
.disc-inp{flex:1;padding:9px 12px;background:var(--bgs);border:0.5px solid var(--b);border-radius:8px;font-size:13px;color:var(--t);outline:none;margin:0}
.disc-btn{padding:9px 14px;background:var(--g);color:var(--gd);border:none;border-radius:8px;font-size:13px;font-weight:500;cursor:pointer}
.pbd{background:var(--bgs);border-radius:10px;padding:10px 13px;margin-bottom:10px}
.pbr{display:flex;justify-content:space-between;font-size:12px;padding:3px 0;color:var(--ts)}
.pbr.total{font-weight:500;color:var(--t);border-top:0.5px solid var(--b);margin-top:5px;padding-top:7px;font-size:14px}
.pbr.disc{color:var(--gm)}
.notif{background:var(--bgs);border-radius:10px;padding:11px 13px;margin-bottom:8px;border-left:3px solid var(--g)}
.ntag{font-size:10px;background:var(--gs);color:var(--gm);padding:2px 8px;border-radius:4px;font-weight:500;margin-bottom:5px;display:inline-block}
.suc-icon{width:46px;height:46px;background:var(--gs);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 12px}
.stat-g{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:14px}
.stat{background:var(--bgs);border-radius:8px;padding:10px;text-align:center}
.nav{display:flex;border-top:0.5px solid var(--b);background:var(--bg);flex-shrink:0}
.nav-t{flex:1;padding:10px 0;font-size:10px;color:var(--tt);text-align:center;cursor:pointer;border:none;background:none;display:flex;flex-direction:column;align-items:center;gap:3px}
.nav-t.on{color:var(--g);font-weight:500}
.nav-t svg{width:15px;height:15px}
.msg-bubble{max-width:210px;padding:9px 12px;border-radius:14px;font-size:13px;margin-bottom:6px;line-height:1.5}
.msg-in{background:var(--bgs);color:var(--t);align-self:flex-start;border-bottom-left-radius:4px}
.msg-out{background:var(--g);color:var(--gd);align-self:flex-end;border-bottom-right-radius:4px}
.msg-time{font-size:10px;color:var(--tt);margin-bottom:8px}
.msg-in-wrap{display:flex;flex-direction:column;align-items:flex-start}
.msg-out-wrap{display:flex;flex-direction:column;align-items:flex-end}
.msg-input-row{display:flex;gap:8px;padding:10px 14px;border-top:0.5px solid var(--b);background:var(--bg);flex-shrink:0}
.msg-input{flex:1;padding:9px 12px;background:var(--bgs);border:0.5px solid var(--b);border-radius:20px;font-size:13px;color:var(--t);outline:none}
.msg-send{width:34px;height:34px;border-radius:50%;background:var(--g);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.upload-box{width:100%;padding:10px;background:var(--bgs);border:0.5px dashed var(--bs);border-radius:8px;font-size:12px;color:var(--ts);text-align:center;margin-bottom:10px;cursor:pointer}
.tc-box{background:var(--bgs);border-radius:8px;padding:10px 12px;font-size:11px;color:var(--ts);line-height:1.7;max-height:120px;overflow-y:auto;margin-bottom:10px;border:0.5px solid var(--b)}
.hero-card{background:var(--gs);border-radius:18px;padding:18px;margin-bottom:14px}
.trust-pills{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:14px}
.pill{padding:5px 12px;background:var(--bgs);border:0.5px solid var(--b);border-radius:20px;font-size:12px;color:var(--ts)}
.feat-g{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:14px}
.feat{background:var(--bgs);border-radius:12px;padding:12px}
.fade-in{animation:fi .5s ease forwards}
@keyframes fi{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
.star-row{display:flex;justify-content:center;gap:8px;margin-bottom:16px}
.star-btn{font-size:28px;cursor:pointer;color:var(--b);transition:color .15s;background:none;border:none;padding:4px}
.star-btn.on{color:#EF9F27}
.info-banner{background:#E6F1FB;border-radius:10px;padding:10px 13px;margin-bottom:10px;font-size:12px;color:#042C53;line-height:1.6}
.mission-card{background:var(--gs);border-radius:12px;padding:13px;margin-bottom:10px}
</style>

<h2 style="position:absolute;width:1px;height:1px;overflow:hidden">Limher v6</h2>

<div class="phone">
<div class="screen" id="app">
  <div class="sbar">
    <span class="sbar-t" id="clk">9:41</span>
    <div class="sbar-r">
      <span style="font-size:11px;color:var(--ts)">●●● ▲</span>
      <button class="menu-btn" onclick="go('menu')"><span></span><span></span><span></span></button>
    </div>
  </div>

  <!-- MENU -->
  <div id="v-menu" style="display:none;flex-direction:column"><div class="sa">
    <button class="bp" onclick="goBack()">← cerrar</button>
    <div style="font-size:16px;font-weight:500;color:var(--t);margin-bottom:16px">Menú</div>
    <button onclick="go('about')" style="text-align:left;background:none;border:none;padding:11px 0;font-size:14px;color:var(--t);cursor:pointer;border-bottom:0.5px solid var(--b);width:100%">Quiénes somos</button>
    <button onclick="go('contact')" style="text-align:left;background:none;border:none;padding:11px 0;font-size:14px;color:var(--t);cursor:pointer;border-bottom:0.5px solid var(--b);width:100%">Contacto</button>
    <button onclick="go('splash')" style="text-align:left;background:none;border:none;padding:11px 0;font-size:14px;color:var(--ts);cursor:pointer;width:100%">Cerrar sesión</button>
  </div></div>

  <!-- ABOUT -->
  <div id="v-about" style="display:none;flex-direction:column"><div class="sa">
    <button class="bp" onclick="goBack()">← volver</button>
    <div style="font-size:16px;font-weight:500;color:var(--t);margin-bottom:14px">Quiénes somos</div>
    <div class="mission-card">
      <div style="font-size:10px;color:var(--gm);text-transform:uppercase;letter-spacing:.8px;margin-bottom:5px">Misión</div>
      <div style="font-size:13px;color:var(--gd);line-height:1.7">Transformar la forma en que los hogares y empresas acceden a servicios de limpieza, poniendo la tecnología al servicio de quienes más la necesitan: las mujeres que trabajan de forma independiente y buscan crecer con dignidad y seguridad.</div>
    </div>
    <div class="mission-card" style="background:#E6F1FB">
      <div style="font-size:10px;color:#185FA5;text-transform:uppercase;letter-spacing:.8px;margin-bottom:5px">Visión</div>
      <div style="font-size:13px;color:#042C53;line-height:1.7">Ser la plataforma de referencia en servicios domésticos del Uruguay, expandiéndonos a todos los departamentos del país con estándares de confianza y tecnología que pongan a las colaboradoras en el centro.</div>
    </div>
    <div class="fl" style="margin-bottom:10px">Nuestros valores</div>
    <div style="display:flex;flex-direction:column;gap:7px;margin-bottom:14px">
      <div style="background:var(--bgs);border-radius:10px;padding:10px 12px"><div style="font-size:13px;font-weight:500;color:var(--t);margin-bottom:2px">Confianza</div><div style="font-size:12px;color:var(--ts);line-height:1.5">Cada colaboradora es verificada. Cada pago, protegido. Cada reseña, real.</div></div>
      <div style="background:var(--bgs);border-radius:10px;padding:10px 12px"><div style="font-size:13px;font-weight:500;color:var(--t);margin-bottom:2px">Autonomía femenina</div><div style="font-size:12px;color:var(--ts);line-height:1.5">Impulsamos que las mujeres sean autónomas, promoviendo la formalización del empleo, fijando tarifas y horarios que se adapten a su vida.</div></div>
      <div style="background:var(--bgs);border-radius:10px;padding:10px 12px"><div style="font-size:13px;font-weight:500;color:var(--t);margin-bottom:2px">Responsabilidad social</div><div style="font-size:12px;color:var(--ts);line-height:1.5">Destinamos parte de nuestros ingresos a programas de capacitación en barrios vulnerables y activaciones comunitarias con autoridades departamentales.</div></div>
      <div style="background:var(--bgs);border-radius:10px;padding:10px 12px"><div style="font-size:13px;font-weight:500;color:var(--t);margin-bottom:2px">Transparencia</div><div style="font-size:12px;color:var(--ts);line-height:1.5">Sin costos ocultos, sin negociaciones informales. Todo en la plataforma, todo trazable.</div></div>
    </div>
    <div class="fl" style="margin-bottom:8px">Impacto social</div>
    <div style="background:var(--gs);border-radius:12px;padding:13px;margin-bottom:10px">
      <div style="font-size:13px;color:var(--gd);line-height:1.7;margin-bottom:10px">Limher invierte en programas de formación para mujeres en situación de vulnerabilidad en diferentes localidades de Maldonado.</div>
      <div style="display:flex;flex-direction:column;gap:7px">
        <div style="display:flex;gap:8px;align-items:flex-start"><div style="width:6px;height:6px;border-radius:50%;background:var(--g);margin-top:5px;flex-shrink:0"></div><div style="font-size:12px;color:var(--gm)">Canastas de limpieza en activaciones comunitarias junto a Intendencia y MIDES</div></div>
        <div style="display:flex;gap:8px;align-items:flex-start"><div style="width:6px;height:6px;border-radius:50%;background:var(--g);margin-top:5px;flex-shrink:0"></div><div style="font-size:12px;color:var(--gm)">Talleres de emprendimiento y gestión para nuevas colaboradoras</div></div>
        <div style="display:flex;gap:8px;align-items:flex-start"><div style="width:6px;height:6px;border-radius:50%;background:var(--g);margin-top:5px;flex-shrink:0"></div><div style="font-size:12px;color:var(--gm)">Cobertura de seguro de accidentes para todas las colaboradoras activas</div></div>
      </div>
    </div>
  </div></div>

  <!-- CONTACT -->
  <div id="v-contact" style="display:none;flex-direction:column"><div class="sa">
    <button class="bp" onclick="goBack()">← volver</button>
    <div style="font-size:16px;font-weight:500;color:var(--t);margin-bottom:14px">Contacto</div>
    <div class="scrd">
      <div class="crow"><span class="ck">Email</span><span class="cv" style="color:var(--g)">hola@limher.uy</span></div>
      <div class="crow"><span class="ck">WhatsApp</span><span class="cv" style="color:var(--g)">+598 99 000 000</span></div>
      <div class="crow"><span class="ck">Instagram</span><span class="cv" style="color:var(--g)">@limher.uy</span></div>
    </div>
    <div class="fl" style="margin-bottom:8px">Envianos un mensaje</div>
    <input type="text" placeholder="Tu nombre">
    <input type="email" placeholder="Tu email">
    <textarea style="height:80px;resize:none;margin-bottom:10px" placeholder="¿En qué podemos ayudarte?"></textarea>
    <button class="btn-g">Enviar mensaje</button>
  </div></div>

  <!-- SPLASH -->
  <div id="v-splash" style="display:flex;flex-direction:column"><div class="sa" style="padding-top:24px">
    <div id="sp-logo" style="text-align:center;margin-bottom:14px;opacity:0;transition:opacity .6s .1s,transform .6s .1s;transform:translateY(8px)">
      <div style="width:56px;height:56px;background:var(--gs);border-radius:16px;display:flex;align-items:center;justify-content:center;margin:0 auto 12px">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M4 22C4 12 14 6 24 6" stroke="#1D9E75" stroke-width="2.5" stroke-linecap="round"/><circle cx="24" cy="6" r="3" fill="#1D9E75"/><path d="M4 22C4 16 9 13 14 13" stroke="#5DCAA5" stroke-width="2" stroke-linecap="round"/></svg>
      </div>
      <div style="font-size:30px;font-weight:500;color:var(--t);letter-spacing:-1px">lim<span style="color:var(--g)">her</span></div>
      <div style="font-size:13px;color:var(--ts);margin-top:4px;line-height:1.6">Reservá tu limpieza en minutos con profesionales verificadas, pago integrado y seguimiento simple.</div>
    </div>
    <div id="sp-hero" style="opacity:0;transition:opacity .6s .4s,transform .6s .4s;transform:translateY(8px)">
      <div class="hero-card">
        <div style="font-size:18px;font-weight:500;color:var(--gd);margin-bottom:6px;line-height:1.3">Tu hogar impecable,<br>sin fricción.</div>
        <div style="font-size:12px;color:var(--gm);margin-bottom:14px;line-height:1.6">Elegí el tipo de servicio, fijá tu horario y confirmá con total confianza.</div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
          <div style="background:rgba(255,255,255,0.75);border-radius:10px;padding:9px 4px;text-align:center"><div style="font-size:15px;font-weight:500;color:var(--gd)">+200</div><div style="font-size:10px;color:var(--gm)">servicios</div></div>
          <div style="background:rgba(255,255,255,0.75);border-radius:10px;padding:9px 4px;text-align:center"><div style="font-size:15px;font-weight:500;color:var(--gd)">4.9</div><div style="font-size:10px;color:var(--gm)">puntuación</div></div>
          <div style="background:rgba(255,255,255,0.75);border-radius:10px;padding:9px 4px;text-align:center"><div style="font-size:15px;font-weight:500;color:var(--gd)">48h</div><div style="font-size:10px;color:var(--gm)">verificación</div></div>
        </div>
      </div>
    </div>
    <div id="sp-trust" style="opacity:0;transition:opacity .6s .65s,transform .6s .65s;transform:translateY(8px)">
      <div class="trust-pills">
        <div class="pill">Pago seguro</div>
        <div class="pill">Colaboradoras verificadas</div>
        <div class="pill">Cobertura en Maldonado</div>
        <div class="pill">Reseñas reales</div>
      </div>
    </div>
    <div class="spacer"></div>
    <div id="sp-cta" style="opacity:0;transition:opacity .6s .85s">
      <button class="btn-g" onclick="go('welcome')">Reservá tu limpieza en minutos</button>
      <button class="btn-ghost" onclick="go('reg1')" style="font-size:12px;color:var(--ts)">Quiero ser colaboradora</button>
    </div>
  </div></div>

  <!-- WELCOME -->
  <div id="v-welcome" style="display:none;flex-direction:column"><div class="sa">
    <div style="width:32px;height:32px;background:var(--gs);border-radius:9px;display:flex;align-items:center;justify-content:center;margin-bottom:12px"><svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path d="M2 14C2 8 9 3 16 3" stroke="#1D9E75" stroke-width="2" stroke-linecap="round"/><circle cx="16" cy="3" r="2" fill="#1D9E75"/><path d="M2 14C2 10 5 8 9 8" stroke="#5DCAA5" stroke-width="1.5" stroke-linecap="round"/></svg></div>
    <div style="font-size:22px;font-weight:500;letter-spacing:-0.5px;margin-bottom:3px">lim<span style="color:var(--g)">her</span></div>
    <div style="font-size:13px;color:var(--ts);margin-bottom:18px">Limpieza profesional verificada</div>
    <div style="background:var(--gs);border-radius:16px;padding:16px;margin-bottom:14px">
      <div style="font-size:15px;font-weight:500;color:var(--gd);margin-bottom:6px;line-height:1.4">Reservá en pocos pasos<br>y con total confianza.</div>
      <div style="font-size:12px;color:var(--gm);margin-bottom:12px;line-height:1.6">Definí tu espacio, elegí la frecuencia, ajustá tu horario ideal y encontrá a la colaboradora indicada.</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:7px">
        <div style="background:rgba(255,255,255,0.8);border-radius:10px;padding:10px"><div style="font-size:12px;font-weight:500;color:var(--gd);margin-bottom:2px">Cobertura local</div><div style="font-size:11px;color:var(--gm)">Maldonado · profesionales listas</div></div>
        <div style="background:rgba(255,255,255,0.8);border-radius:10px;padding:10px"><div style="font-size:12px;font-weight:500;color:var(--gd);margin-bottom:2px">Pago integrado</div><div style="font-size:11px;color:var(--gm)">Desde selección hasta reserva</div></div>
      </div>
    </div>
    <div class="feat-g">
      <div class="feat"><div style="font-size:12px;font-weight:500;color:var(--t);margin-bottom:3px">Elegí tu horario</div><div style="font-size:11px;color:var(--ts);line-height:1.5">Definí desde qué hora querés recibir el servicio.</div></div>
      <div class="feat"><div style="font-size:12px;font-weight:500;color:var(--t);margin-bottom:3px">Compará perfiles</div><div style="font-size:11px;color:var(--ts);line-height:1.5">Por puntuación, experiencia y reseñas.</div></div>
      <div class="feat"><div style="font-size:12px;font-weight:500;color:var(--t);margin-bottom:3px">Puntual o recurrente</div><div style="font-size:11px;color:var(--ts);line-height:1.5">Una vez, semanal o mensual.</div></div>
      <div class="feat"><div style="font-size:12px;font-weight:500;color:var(--t);margin-bottom:3px">Seguimiento claro</div><div style="font-size:11px;color:var(--ts);line-height:1.5">Resumen, pago y confirmación en una sola experiencia.</div></div>
    </div>
    <div class="spacer"></div>
    <button class="btn-g" onclick="go('q1')">Solicitar servicio</button>
    <div style="text-align:center;font-size:12px;color:var(--tt);margin-top:4px">¿Ya tenés cuenta? <span style="color:var(--g);cursor:pointer" onclick="go('ch')">Iniciá sesión</span></div>
  </div></div>

  <!-- Q1 -->
  <div id="v-q1" style="display:none;flex-direction:column"><div class="sa">
    <button class="bp" onclick="go('welcome')">← inicio</button>
    <div class="pb" id="pb1"></div>
    <div class="stit">Contanos sobre tu espacio</div>
    <div class="ssub">Paso 1 · ¿Qué tipo de espacio es?</div>
    <div style="background:var(--gs);border-radius:12px;padding:12px;margin-bottom:14px">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
        <div style="font-size:13px;font-weight:500;color:var(--gd)">Armamos el servicio a tu medida</div>
        <span style="font-size:10px;background:var(--g);color:white;padding:3px 8px;border-radius:20px">Paso guiado</span>
      </div>
      <div style="display:flex;gap:6px">
        <div style="flex:1;background:rgba(255,255,255,0.8);border-radius:8px;padding:7px;text-align:center"><div style="font-size:13px;font-weight:500;color:var(--g)">1</div><div style="font-size:10px;color:var(--gm)">Tipo de lugar</div></div>
        <div style="flex:1;background:rgba(255,255,255,0.8);border-radius:8px;padding:7px;text-align:center"><div style="font-size:13px;font-weight:500;color:var(--g)">2</div><div style="font-size:10px;color:var(--gm)">Espacio</div></div>
        <div style="flex:1;background:rgba(255,255,255,0.8);border-radius:8px;padding:7px;text-align:center"><div style="font-size:13px;font-weight:500;color:var(--g)">3</div><div style="font-size:10px;color:var(--gm)">Habitaciones</div></div>
      </div>
    </div>
    <div class="fl" style="text-align:center">Tipo de lugar</div>
    <div class="type-row">
      <div class="tcard on" id="tc-hogar" onclick="selCat('Hogar','tc-hogar')">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 10.5L12 3l9 7.5V20a1 1 0 01-1 1H5a1 1 0 01-1-1v-9.5z" stroke="#1D9E75" stroke-width="1.5"/><path d="M9 21V12h6v9" stroke="#1D9E75" stroke-width="1.5"/></svg>
        <div class="tcard-label">Hogar</div>
      </div>
      <div class="tcard" id="tc-oficina" onclick="selCat('Oficina','tc-oficina')">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="#888780" stroke-width="1.5"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18" stroke="#888780" stroke-width="1"/></svg>
        <div class="tcard-label">Oficina</div>
      </div>
    </div>
    <div id="rb-space" class="reveal">
      <div class="fl" style="text-align:center">Opciones de <span id="cat-lbl">hogar</span></div>
      <div class="type-row">
        <div class="tcard on" id="tc-casa" onclick="selSpace('Casa','tc-casa')">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 10.5L12 3l9 7.5V20a1 1 0 01-1 1H5a1 1 0 01-1-1v-9.5z" stroke="#1D9E75" stroke-width="1.5"/><path d="M9 21V12h6v9" stroke="#1D9E75" stroke-width="1.5"/></svg>
          <div class="tcard-label">Casa</div>
        </div>
        <div class="tcard" id="tc-apto" onclick="selSpace('Apartamento','tc-apto')">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="#888780" stroke-width="1.5"/><path d="M3 8h18M3 13h18M8 3v18M16 3v18" stroke="#888780" stroke-width="1"/></svg>
          <div class="tcard-label">Apartamento</div>
        </div>
      </div>
    </div>
    <div id="rb-rooms" class="reveal">
      <div class="fl">Número de habitaciones</div>
      <div class="rooms-g" id="rooms-g"></div>
    </div>
    <div id="sel-sum-1" class="sel-sum" style="display:none">
      <div class="sel-sum-lbl">Tu selección</div>
      <div id="sel-sum-1-txt">Empezá eligiendo el tipo de lugar.</div>
    </div>
    <div class="spacer"></div>
    <button class="btn-g" onclick="go('q2')">Continuar</button>
  </div></div>

  <!-- Q2 limpieza + insumos -->
  <div id="v-q2" style="display:none;flex-direction:column"><div class="sa">
    <button class="bp" onclick="go('q1')">← atrás</button>
    <div class="pb" id="pb2"></div>
    <div class="stit">Tipo de limpieza</div>
    <div class="ssub">Paso 2</div>
    <div class="clean-card on" id="cc-deep" onclick="selClean('deep')">
      <div style="font-size:14px;font-weight:500;color:var(--gd);margin-bottom:5px">Limpieza profunda <span style="font-size:11px;font-weight:400;color:var(--gm)">+20%</span></div>
      <div style="display:flex;flex-wrap:wrap;gap:5px">
        <span style="padding:4px 8px;border-radius:20px;font-size:11px;background:var(--g);color:white">Ventanas</span>
        <span style="padding:4px 8px;border-radius:20px;font-size:11px;background:var(--g);color:white">Horno</span>
        <span style="padding:4px 8px;border-radius:20px;font-size:11px;background:var(--g);color:white">Lavar platos</span>
        <span style="padding:4px 8px;border-radius:20px;font-size:11px;background:var(--g);color:white">Planchar ropa</span>
      </div>
    </div>
    <div class="clean-card" id="cc-light" onclick="selClean('light')">
      <div style="font-size:14px;font-weight:500;color:var(--t);margin-bottom:5px">Limpieza ligera <span style="font-size:11px;font-weight:400;color:var(--ts)">mín. 2h</span></div>
      <div style="display:flex;flex-wrap:wrap;gap:5px">
        <span style="padding:4px 8px;border-radius:20px;font-size:11px;opacity:.4;text-decoration:line-through;border:0.5px solid var(--b);color:var(--ts)">Ventanas</span>
        <span style="padding:4px 8px;border-radius:20px;font-size:11px;opacity:.4;text-decoration:line-through;border:0.5px solid var(--b);color:var(--ts)">Horno</span>
        <span style="padding:4px 8px;border-radius:20px;font-size:11px;opacity:.4;text-decoration:line-through;border:0.5px solid var(--b);color:var(--ts)">Lavar platos</span>
        <span style="padding:4px 8px;border-radius:20px;font-size:11px;opacity:.4;text-decoration:line-through;border:0.5px solid var(--b);color:var(--ts)">Planchar ropa</span>
      </div>
    </div>
    <div class="supplies-btn" id="supplies-btn" onclick="toggleSupplies()">
      <div>
        <div style="font-size:13px;font-weight:500;color:var(--t)">Incluir artículos de limpieza</div>
        <div style="font-size:12px;color:var(--ts);margin-top:2px">Detergente, lavandina, trapos y más <span style="color:var(--gm);font-weight:500">+$250</span></div>
      </div>
      <div class="supplies-toggle" id="st"></div>
    </div>
    <div class="spacer"></div>
    <button class="btn-g" onclick="go('q3')">Continuar</button>
  </div></div>

  <!-- Q3 frecuencia + horas + franja -->
  <div id="v-q3" style="display:none;flex-direction:column"><div class="sa">
    <button class="bp" onclick="go('q2')">← atrás</button>
    <div class="pb" id="pb3"></div>
    <div class="stit">Frecuencia y horario</div>
    <div class="ssub">Paso 3</div>
    <div class="fl">Frecuencia</div>
    <div class="freq-row">
      <div class="fb on" id="fr-once" onclick="selFreq('once')">Una vez</div>
      <div class="fb" id="fr-weekly" onclick="selFreq('weekly')">Semanal</div>
      <div class="fb" id="fr-monthly" onclick="selFreq('monthly')">Mensual</div>
    </div>
    <div id="date-block">
      <div class="fl">Fecha del servicio</div>
      <input type="date" id="svc-date" style="margin-bottom:12px">
    </div>
    <div id="days-block" class="reveal">
      <div class="fl">Días de la semana</div>
      <div class="days-g" id="days-g"></div>
    </div>
    <div class="fl" style="text-align:center">Horas de servicio</div>
    <div class="hrs-center">
      <div class="hrs-ctrl">
        <button class="hb" onclick="chgH(-1)">−</button>
        <span class="hn" id="hdisp">2</span>
        <button class="hb" onclick="chgH(1)">+</button>
      </div>
    </div>
    <div style="text-align:center;font-size:12px;color:var(--ts);margin-bottom:14px" id="hlbl">2 horas</div>
    <div class="fl">Franja de llegada</div>
    <div class="slid-wrap" id="sw">
      <div class="slid-track"></div>
      <div class="slid-fill" id="sfill"></div>
      <div class="sh" id="sh-min" onmousedown="startDrag('min',event)" ontouchstart="startDrag('min',event)"></div>
      <div class="sh" id="sh-max" onmousedown="startDrag('max',event)" ontouchstart="startDrag('max',event)"></div>
    </div>
    <div class="time-labels"><span id="tl-min">07:00</span><span id="tl-max">17:00</span></div>
    <div class="spacer"></div>
    <button class="btn-g" onclick="go('q4')">Continuar</button>
  </div></div>

  <!-- Q4 mapa -->
  <div id="v-q4" style="display:none;flex-direction:column"><div class="sa">
    <button class="bp" onclick="go('q3')">← atrás</button>
    <div class="pb" id="pb4"></div>
    <div class="stit">Ubicación del servicio</div>
    <div class="ssub">Paso 4 · Tocá el mapa para marcar tu domicilio</div>
    <div class="map-box"><svg width="304" height="160" id="mapsvg" onclick="movePin(event)">
      <rect width="304" height="160" fill="#c8edde"/>
      <line x1="0" y1="53" x2="304" y2="53" stroke="#a3d9c2" stroke-width=".5"/><line x1="0" y1="107" x2="304" y2="107" stroke="#a3d9c2" stroke-width=".5"/><line x1="76" y1="0" x2="76" y2="160" stroke="#a3d9c2" stroke-width=".5"/><line x1="152" y1="0" x2="152" y2="160" stroke="#a3d9c2" stroke-width=".5"/><line x1="228" y1="0" x2="228" y2="160" stroke="#a3d9c2" stroke-width=".5"/>
      <rect x="40" y="28" width="50" height="18" fill="#9FE1CB" rx="3"/><rect x="110" y="18" width="60" height="14" fill="#9FE1CB" rx="3"/><rect x="180" y="44" width="40" height="22" fill="#9FE1CB" rx="3"/><rect x="60" y="88" width="70" height="14" fill="#9FE1CB" rx="3"/><rect x="200" y="78" width="55" height="18" fill="#9FE1CB" rx="3"/><rect x="30" y="118" width="80" height="14" fill="#9FE1CB" rx="3"/><rect x="160" y="112" width="90" height="18" fill="#9FE1CB" rx="3"/>
      <g id="pin4"><circle r="16" fill="#1D9E75" fill-opacity=".18"/><circle r="6" fill="#1D9E75"/><circle r="3" fill="white"/></g>
      <text x="5" y="14" font-size="8" fill="#0F6E56" font-family="sans-serif">Maldonado</text>
    </svg></div>
    <div style="font-size:11px;color:var(--ts);text-align:center;margin-bottom:10px">Tocá el mapa para ajustar tu ubicación exacta</div>
    <div class="fl">Dirección</div>
    <input type="text" placeholder="Ej. Sarandi 1240, Maldonado">
    <div class="spacer"></div>
    <button class="btn-g" onclick="go('q5')">Continuar</button>
  </div></div>

  <!-- Q5 colaboradoras -->
  <div id="v-q5" style="display:none;flex-direction:column"><div class="sa">
    <button class="bp" onclick="go('q4')">← atrás</button>
    <div class="pb" id="pb5"></div>
    <div class="stit">Elegí tu colaboradora</div>
    <div class="ssub">Paso 5 · Por puntuación y reseñas</div>
    <div id="clist"></div>
    <div class="spacer"></div>
    <button class="btn-g" onclick="go('q6')">Confirmar selección</button>
  </div></div>

  <!-- Q6 resumen + pago -->
  <div id="v-q6" style="display:none;flex-direction:column"><div class="sa">
    <button class="bp" onclick="go('q5')">← atrás</button>
    <div class="pb" id="pb6"></div>
    <div class="stit">Resumen y pago</div>
    <div class="ssub">Paso 6 · Revisá antes de confirmar</div>
    <div class="scrd" id="cf-card"></div>
    <div class="pbd" id="price-bd"></div>
    <div class="info-banner">El pago se acreditará a la colaboradora una vez que el servicio sea completado y vos confirmés el ok. Luego podrás calificar la experiencia.</div>
    <div class="fl">Código de descuento</div>
    <div class="disc-row">
      <input class="disc-inp" type="text" id="disc-code" placeholder="Ej. LIMHER10">
      <button class="disc-btn" onclick="applyDisc()">Aplicar</button>
    </div>
    <div id="disc-msg" style="font-size:12px;margin-bottom:8px;display:none"></div>
    <div class="fl">Método de pago</div>
    <div class="pay-row">
      <div class="pc on" id="pm-card" onclick="selPay('card')"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="2" y="5" width="20" height="14" rx="2" stroke="#1D9E75" stroke-width="1.5"/><line x1="2" y1="10" x2="22" y2="10" stroke="#1D9E75" stroke-width="1.5"/></svg><div class="pc-lbl">Tarjeta</div></div>
      <div class="pc" id="pm-mp" onclick="selPay('mp')"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#888780" stroke-width="1.5"/><path d="M8 12h8M12 8v8" stroke="#888780" stroke-width="1.5"/></svg><div class="pc-lbl">MercadoPago</div></div>
    </div>
    <button class="btn-g" onclick="go('paid')">Confirmar y pagar</button>
  </div></div>

  <!-- PAID -->
  <div id="v-paid" style="display:none;flex-direction:column"><div class="sa" style="text-align:center">
    <div style="height:16px"></div>
    <div class="suc-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M5 12l5 5L19 7" stroke="#1D9E75" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
    <div style="font-size:17px;font-weight:500;color:var(--t);margin-bottom:6px">¡Servicio confirmado!</div>
    <div style="font-size:13px;color:var(--ts);line-height:1.7;margin-bottom:12px">La colaboradora recibirá tu solicitud. Una vez que la acepte, te enviaremos un email con todos los detalles.</div>
    <div class="scrd" style="text-align:left">
      <div class="crow"><span class="ck">Código</span><span class="cv" style="color:var(--g);letter-spacing:1px">LH-7294</span></div>
      <div class="crow"><span class="ck">Colaboradora</span><span class="cv" id="paid-collab">—</span></div>
      <div class="crow"><span class="ck">Total</span><span class="cv" id="paid-price">—</span></div>
    </div>
    <div class="info-banner" style="text-align:left">El pago se liberará a la colaboradora una vez que confirmes que el servicio fue realizado y lo califiques.</div>
    <button class="btn-g" onclick="go('msg-client')">Ir al chat</button>
    <button class="btn-o" onclick="go('welcome')">Volver al inicio</button>
  </div></div>

  <!-- CALIFICAR SERVICIO -->
  <div id="v-rate" style="display:none;flex-direction:column"><div class="sa" style="text-align:center">
    <div style="height:16px"></div>
    <div class="stit" style="text-align:center;margin-bottom:4px">¿Cómo fue el servicio?</div>
    <div style="font-size:13px;color:var(--ts);margin-bottom:20px;line-height:1.5">Tu calificación libera el pago a la colaboradora y ayuda a mantener la calidad de la plataforma.</div>
    <div class="star-row" id="star-row"></div>
    <div id="rate-label" style="font-size:13px;color:var(--ts);margin-bottom:16px;min-height:20px"></div>
    <div class="fl" style="text-align:left">¿Recomendarías Limher a alguien?</div>
    <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:4px;margin-bottom:14px" id="nps-row"></div>
    <div style="display:flex;justify-content:space-between;font-size:10px;color:var(--tt);margin-bottom:16px"><span>Poco probable</span><span>Muy probable</span></div>
    <textarea style="height:68px;resize:none;margin-bottom:12px" placeholder="Dejá un comentario (opcional)"></textarea>
    <button class="btn-g" onclick="go('rate-done')">Confirmar y liberar pago</button>
  </div></div>

  <!-- RATE DONE -->
  <div id="v-rate-done" style="display:none;flex-direction:column"><div class="sa" style="text-align:center">
    <div style="height:30px"></div>
    <div class="suc-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M5 12l5 5L19 7" stroke="#1D9E75" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
    <div style="font-size:16px;font-weight:500;color:var(--t);margin-bottom:6px">¡Gracias por tu calificación!</div>
    <div style="font-size:13px;color:var(--ts);line-height:1.7;margin-bottom:14px">El pago fue liberado a la colaboradora. Tu reseña ayuda a mejorar la plataforma.</div>
    <button class="btn-g" onclick="go('welcome')">Volver al inicio</button>
  </div></div>

  <!-- CHAT CLIENTE -->
  <div id="v-msg-client" style="display:none;flex-direction:column">
    <div style="padding:12px 16px;border-bottom:0.5px solid var(--b);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <button class="bp" style="margin:0" onclick="go('paid')">←</button>
      <div style="width:32px;height:32px;border-radius:50%;background:#E1F5EE;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:500;color:#085041;flex-shrink:0">MG</div>
      <div style="flex:1"><div style="font-size:13px;font-weight:500;color:var(--t)">María González</div><div style="font-size:11px;color:var(--g)">Colaboradora verificada</div></div>
      <button onclick="go('rate')" style="font-size:11px;background:var(--gs);color:var(--gm);border:none;border-radius:8px;padding:5px 9px;cursor:pointer;font-weight:500">Calificar</button>
    </div>
    <div class="sa" style="display:flex;flex-direction:column;padding-bottom:8px">
      <div style="text-align:center;margin-bottom:12px"><span style="font-size:11px;color:var(--tt);background:var(--bgs);padding:3px 10px;border-radius:10px">Hoy · LH-7294</span></div>
      <div class="msg-in-wrap"><div class="msg-bubble msg-in">¡Hola! Acabo de aceptar tu solicitud. Estaré el lunes a las 9:00 en tu domicilio.</div><span class="msg-time">09:42</span></div>
      <div class="msg-out-wrap"><div class="msg-bubble msg-out">¡Perfecto, muchas gracias! ¿Necesitás que tenga algo preparado?</div><span class="msg-time">09:44</span></div>
      <div class="msg-in-wrap"><div class="msg-bubble msg-in">Si podés dejar los productos a mano ya me alcanza.</div><span class="msg-time">09:46</span></div>
      <div id="msg-new-area"></div>
    </div>
    <div class="msg-input-row">
      <input class="msg-input" type="text" id="msg-in" placeholder="Escribí un mensaje...">
      <button class="msg-send" onclick="sendMsg()"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
    </div>
  </div>

  <!-- REG 1 -->
  <div id="v-reg1" style="display:none;flex-direction:column"><div class="sa">
    <button class="bp" onclick="go('splash')">← volver</button>
    <div class="stit">Registro de colaboradora</div>
    <div class="ssub">Completá tus datos para activar tu perfil</div>
    <div class="fl">Información personal</div>
    <input type="text" placeholder="Nombre completo"><input type="text" placeholder="Apellidos">
    <input type="date"><input type="text" placeholder="Cédula de identidad">
    <input type="tel" placeholder="Teléfono celular"><input type="email" placeholder="Email">
    <div class="fl">Dirección</div>
    <input type="text" placeholder="Calle y número"><input type="text" placeholder="Barrio / Ciudad">
    <div class="fl">Datos fiscales y bancarios</div>
    <input type="text" placeholder="RUT unipersonal (DGI)">
    <select style="margin-bottom:10px"><option>Banco o billetera</option><option>BROU</option><option>Santander</option><option>Itaú</option><option>Prex</option><option>RedPagos</option></select>
    <input type="text" placeholder="Número de cuenta o Prex">
    <div class="fl">Experiencia y tarifa</div>
    <select style="margin-bottom:10px"><option>Años de experiencia</option><option>Menos de 1 año</option><option>1–3 años</option><option>3–5 años</option><option>Más de 5 años</option></select>
    <input type="text" placeholder="Tarifa por hora (ej. $900)">
    <select style="margin-bottom:10px"><option>Zona de cobertura</option><option>Maldonado centro</option><option>Punta del Este</option><option>San Carlos</option><option>Pan de Azúcar</option><option>Todo el departamento</option></select>
    <div class="fl">Documentación</div>
    <div class="upload-box">+ Foto del carnet (frente)</div>
    <div class="upload-box">+ Foto del carnet (dorso)</div>
    <div class="upload-box">+ Certificado BPS al día</div>
    <div class="upload-box">+ Foto de perfil (clara y nítida)</div>
    <div class="fl">Disponibilidad semanal</div>
    <div class="days-g" id="avail-g"></div>
    <button class="btn-g" onclick="go('reg2')" style="margin-top:6px">Siguiente → bases y condiciones</button>
  </div></div>

  <!-- REG 2 T&C -->
  <div id="v-reg2" style="display:none;flex-direction:column"><div class="sa">
    <button class="bp" onclick="go('reg1')">← atrás</button>
    <div class="stit">Bases y condiciones</div>
    <div class="ssub">Leé con atención antes de continuar</div>
    <div class="tc-box">
      <strong>1. Requisitos</strong><br>Mayor de 18 años. RUT unipersonal activo ante DGI. Certificado BPS al día. Antecedentes penales vigentes. Foto de perfil reciente, clara y nítida.<br><br>
      <strong>2. Obligaciones</strong><br>Asistir puntualmente. Comunicar cancelaciones con mínimo 24 h de anticipación. Trato respetuoso al cliente. Confidencialidad sobre datos del hogar.<br><br>
      <strong>3. Comisión de plataforma</strong><br>Limher retiene un 10% sobre el valor total de cada servicio. El 90% restante se acredita dentro de las 24 h de que el cliente confirme el ok y califique el servicio.<br><br>
      <strong>4. Liberación del pago</strong><br>El pago queda retenido hasta que el propietario confirme la finalización del servicio. En caso de disputa sin resolución en 48 h, Limher libera el pago automáticamente.<br><br>
      <strong>5. Tarifa horaria</strong><br>Cada colaboradora fija libremente su tarifa por hora.<br><br>
      <strong>6. Suspensión</strong><br>Limher puede suspender perfiles con reseñas negativas reiteradas o incumplimiento de estas condiciones.<br><br>
      <strong>7. Seguro de accidentes</strong><br>Limher incluye cobertura de accidentes personales durante la prestación del servicio.<br><br>
      <strong>8. Desintermediación</strong><br>Está prohibido acordar servicios con clientes de la plataforma por fuera de Limher. El incumplimiento implica baja definitiva.
    </div>
    <div style="display:flex;align-items:flex-start;gap:8px;margin-bottom:12px">
      <input type="checkbox" id="tc-chk" style="width:15px;height:15px;margin-top:2px;accent-color:var(--g)">
      <label for="tc-chk" style="font-size:12px;color:var(--ts);line-height:1.5">Leí y acepto las bases y condiciones de Limher</label>
    </div>
    <button class="btn-g" onclick="go('reg3')">Finalizar registro</button>
  </div></div>

  <!-- REG 3 -->
  <div id="v-reg3" style="display:none;flex-direction:column"><div class="sa" style="text-align:center">
    <div style="height:24px"></div>
    <div class="suc-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M5 12l5 5L19 7" stroke="#1D9E75" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
    <div style="font-size:16px;font-weight:500;color:var(--t);margin-bottom:6px">Solicitud enviada</div>
    <div style="font-size:13px;color:var(--ts);line-height:1.7;margin-bottom:16px">Verificaremos tu documentación en 48 h. Te notificamos por WhatsApp cuando tu perfil esté activo.</div>
    <button class="btn-g" onclick="go('splash')">Volver al inicio</button>
  </div></div>

  <!-- COLLAB HOME -->
  <div id="v-ch" style="display:none;flex-direction:column;padding-bottom:0">
    <div class="sa">
      <div style="font-size:13px;color:var(--ts)">Hola,</div>
      <div style="font-size:20px;font-weight:500;color:var(--t);margin-bottom:14px">María González</div>
      <div class="stat-g">
        <div class="stat"><div style="font-size:18px;font-weight:500;color:var(--t)">4.9</div><div style="font-size:11px;color:var(--ts);margin-top:2px">puntuación</div></div>
        <div class="stat"><div style="font-size:18px;font-weight:500;color:var(--t)">$18.400</div><div style="font-size:11px;color:var(--ts);margin-top:2px">este mes</div></div>
        <div class="stat"><div style="font-size:18px;font-weight:500;color:var(--t)">127</div><div style="font-size:11px;color:var(--ts);margin-top:2px">servicios</div></div>
        <div class="stat"><div style="font-size:18px;font-weight:500;color:var(--t)">98%</div><div style="font-size:11px;color:var(--ts);margin-top:2px">completados</div></div>
      </div>
      <div class="fl" style="margin-bottom:8px">Solicitudes nuevas</div>
      <div class="notif">
        <div class="ntag">Nueva solicitud</div>
        <div style="font-size:12px;color:var(--t);line-height:1.6;margin-bottom:5px">Hogar · Casa · 4 habitaciones<br>Limpieza ligera · 3 horas · Lu y Ju · 09:00–12:00</div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-top:5px">
          <span style="font-size:14px;font-weight:500;color:var(--gm)">$2.430 <span style="font-size:11px;color:var(--ts)">para vos</span></span>
          <div style="display:flex;gap:6px">
            <button style="padding:5px 10px;font-size:11px;border:0.5px solid var(--gl);background:transparent;color:var(--gm);border-radius:6px;cursor:pointer">Rechazar</button>
            <button onclick="go('acc-notif')" style="padding:5px 10px;font-size:11px;border:none;background:var(--g);color:var(--gd);border-radius:6px;cursor:pointer;font-weight:500">Aceptar</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ACC NOTIF -->
  <div id="v-acc-notif" style="display:none;flex-direction:column">
    <div style="min-height:580px;background:rgba(0,0,0,0.18);display:flex;align-items:center;justify-content:center;padding:16px">
      <div style="background:var(--bg);border-radius:18px;border:0.5px solid var(--b);padding:18px;width:100%;display:flex;flex-direction:column;gap:12px">
        <div style="display:flex;align-items:center;gap:10px">
          <div class="suc-icon" style="margin:0;width:36px;height:36px;flex-shrink:0"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12l5 5L19 7" stroke="#1D9E75" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <div><div style="font-size:14px;font-weight:500;color:var(--t)">¡Solicitud aceptada!</div><div style="font-size:12px;color:var(--ts)">Se notificó al cliente por email</div></div>
        </div>
        <div class="scrd" style="margin-bottom:0">
          <div class="crow"><span class="ck">Cliente</span><span class="cv">Ana Rodríguez</span></div>
          <div class="crow"><span class="ck">Espacio</span><span class="cv">Hogar · Casa · 4 hab.</span></div>
          <div class="crow"><span class="ck">Servicio</span><span class="cv">Ligera · 3 h</span></div>
          <div class="crow"><span class="ck">Días</span><span class="cv">Lu y Ju · 09:00–12:00</span></div>
          <div class="crow" style="border-top:0.5px solid var(--b);margin-top:6px;padding-top:6px"><span class="ck" style="font-weight:500;color:var(--t)">Tu pago (al finalizar)</span><span class="cv" style="color:var(--gm)">$2.430</span></div>
        </div>
        <div style="font-size:12px;color:var(--ts);background:var(--bgs);border-radius:8px;padding:9px 11px;line-height:1.6">El pago se liberará una vez que la cliente confirme y califique el servicio completado.</div>
        <button class="btn-g" style="margin-bottom:0" onclick="go('msg-collab')">Abrir chat con la cliente</button>
        <button class="btn-o" style="margin-bottom:0" onclick="go('acc-map')">Ver ubicación</button>
        <button class="btn-ghost" style="margin-bottom:0" onclick="go('ch')">Volver al inicio</button>
      </div>
    </div>
  </div>

  <!-- MAP COLLAB -->
  <div id="v-acc-map" style="display:none;flex-direction:column"><div class="sa">
    <button class="bp" onclick="go('ch')">← volver</button>
    <div class="stit">Ubicación del cliente</div>
    <div class="ssub">Sarandi 1240, Maldonado</div>
    <div class="map-box" style="height:180px"><svg width="304" height="180" viewBox="0 0 304 180">
      <rect width="304" height="180" fill="#c8edde"/>
      <line x1="0" y1="60" x2="304" y2="60" stroke="#a3d9c2" stroke-width=".5"/><line x1="0" y1="120" x2="304" y2="120" stroke="#a3d9c2" stroke-width=".5"/><line x1="76" y1="0" x2="76" y2="180" stroke="#a3d9c2" stroke-width=".5"/><line x1="152" y1="0" x2="152" y2="180" stroke="#a3d9c2" stroke-width=".5"/><line x1="228" y1="0" x2="228" y2="180" stroke="#a3d9c2" stroke-width=".5"/>
      <rect x="40" y="35" width="50" height="22" fill="#9FE1CB" rx="3"/><rect x="110" y="24" width="60" height="18" fill="#9FE1CB" rx="3"/><rect x="180" y="55" width="40" height="26" fill="#9FE1CB" rx="3"/><rect x="60" y="110" width="70" height="18" fill="#9FE1CB" rx="3"/><rect x="200" y="98" width="55" height="22" fill="#9FE1CB" rx="3"/><rect x="30" y="148" width="80" height="18" fill="#9FE1CB" rx="3"/><rect x="160" y="140" width="90" height="24" fill="#9FE1CB" rx="3"/>
      <circle cx="152" cy="90" r="20" fill="#1D9E75" fill-opacity=".15"/><circle cx="152" cy="90" r="8" fill="#1D9E75"/><circle cx="152" cy="90" r="4" fill="white"/>
      <text x="152" y="78" text-anchor="middle" font-size="9" fill="#085041" font-family="sans-serif" font-weight="500">Cliente</text>
      <circle cx="76" cy="145" r="6" fill="#EF9F27"/><circle cx="76" cy="145" r="3" fill="white"/>
      <text x="76" y="160" text-anchor="middle" font-size="9" fill="#854F0B" font-family="sans-serif">Vos</text>
      <line x1="76" y1="145" x2="152" y2="90" stroke="#1D9E75" stroke-width="1.5" stroke-dasharray="4,3"/>
      <text x="5" y="14" font-size="8" fill="#0F6E56" font-family="sans-serif">Maldonado</text>
    </svg></div>
    <div style="display:flex;gap:10px;margin-bottom:12px">
      <div style="flex:1;background:var(--bgs);border-radius:8px;padding:10px;text-align:center"><div style="font-size:14px;font-weight:500;color:var(--t)">3.2 km</div><div style="font-size:11px;color:var(--ts)">distancia</div></div>
      <div style="flex:1;background:var(--bgs);border-radius:8px;padding:10px;text-align:center"><div style="font-size:14px;font-weight:500;color:var(--t)">~12 min</div><div style="font-size:11px;color:var(--ts)">en auto</div></div>
    </div>
    <button class="btn-g">Abrir en Google Maps</button>
  </div></div>

  <!-- CHAT COLLAB -->
  <div id="v-msg-collab" style="display:none;flex-direction:column">
    <div style="padding:12px 16px;border-bottom:0.5px solid var(--b);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <button class="bp" style="margin:0" onclick="go('ch')">←</button>
      <div style="width:32px;height:32px;border-radius:50%;background:#FAEEDA;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:500;color:#412402;flex-shrink:0">AR</div>
      <div><div style="font-size:13px;font-weight:500;color:var(--t)">Ana Rodríguez</div><div style="font-size:11px;color:var(--ts)">Cliente · LH-7294</div></div>
    </div>
    <div class="sa" style="display:flex;flex-direction:column;padding-bottom:8px">
      <div style="text-align:center;margin-bottom:12px"><span style="font-size:11px;color:var(--tt);background:var(--bgs);padding:3px 10px;border-radius:10px">Hoy · reserva confirmada</span></div>
      <div class="msg-out-wrap"><div class="msg-bubble msg-out">¡Hola! Acabo de aceptar tu solicitud. Estaré el lunes a las 9:00.</div><span class="msg-time">09:42</span></div>
      <div class="msg-in-wrap"><div class="msg-bubble msg-in">¡Perfecto! ¿Necesitás algo preparado?</div><span class="msg-time">09:44</span></div>
      <div class="msg-out-wrap"><div class="msg-bubble msg-out">Si podés dejar los productos a mano ya me alcanza.</div><span class="msg-time">09:46</span></div>
      <div id="msg-new-area-c"></div>
    </div>
    <div class="msg-input-row">
      <input class="msg-input" type="text" id="msg-in-c" placeholder="Escribí un mensaje...">
      <button class="msg-send" onclick="sendMsgC()"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
    </div>
  </div>

  <!-- COLLAB PROFILE -->
  <div id="v-cp" style="display:none;flex-direction:column;padding-bottom:0"><div class="sa">
    <div style="background:var(--gs);border-radius:14px;padding:14px;display:flex;align-items:center;gap:12px;margin-bottom:12px">
      <div style="width:52px;height:52px;border-radius:50%;background:var(--g);display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:500;color:white;flex-shrink:0;overflow:hidden;cursor:pointer" id="pav" onclick="document.getElementById('avu').click()">MG<input type="file" id="avu" accept="image/*" style="display:none" onchange="loadAv(event)"></div>
      <div><div style="font-size:15px;font-weight:500;color:var(--gd)">María González</div><div style="font-size:12px;color:var(--gm)">Maldonado · Verificada</div><div style="font-size:10px;color:var(--gm);margin-top:2px">Tocá la foto para cambiarla</div></div>
    </div>
    <div style="background:var(--bgs);border-radius:8px;padding:10px 13px;display:flex;align-items:center;justify-content:space-between;margin-bottom:6px">
      <div><div style="font-size:12px;color:var(--ts)">Mi tarifa por hora</div><div style="font-size:18px;font-weight:500;color:var(--t)">$<span id="rdisp">900</span></div></div>
      <div style="display:flex;gap:8px"><button class="hb" onclick="chgRate(-50)">−</button><button class="hb" onclick="chgRate(50)">+</button></div>
    </div>
    <div style="font-size:12px;color:var(--ts);margin-bottom:12px">Limher retiene 10% · Recibís $<span id="rnet">810</span>/h tras confirmación del cliente</div>
    <div class="fl">Mis reseñas</div>
    <div style="background:var(--bgs);border-radius:10px;padding:10px 12px;margin-bottom:7px"><div style="display:flex;justify-content:space-between;margin-bottom:3px"><span style="font-size:13px;font-weight:500;color:var(--t)">Ana Pérez</span><span style="color:#EF9F27;font-size:11px">★★★★★</span></div><div style="font-size:12px;color:var(--ts)">"Excelente trabajo, muy puntual y detallista."</div></div>
    <div style="background:var(--bgs);border-radius:10px;padding:10px 12px;margin-bottom:7px"><div style="display:flex;justify-content:space-between;margin-bottom:3px"><span style="font-size:13px;font-weight:500;color:var(--t)">Carlos Muñoz</span><span style="color:#EF9F27;font-size:11px">★★★★★</span></div><div style="font-size:12px;color:var(--ts)">"Dejó todo impecable. La voy a volver a contratar."</div></div>
  </div></div>

  <div id="cnav" class="nav" style="display:none">
    <button class="nav-t on" id="cnt0" onclick="goTab('ch','cnt',0)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 10.5L12 3l9 7.5V20a1 1 0 01-1 1H5a1 1 0 01-1-1v-9.5z"/></svg>Inicio</button>
    <button class="nav-t" id="cnt1" onclick="goTab('msg-collab','cnt',1)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>Chat</button>
    <button class="nav-t" id="cnt2" onclick="goTab('cp','cnt',2)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>Perfil</button>
  </div>

</div>
</div>

<script>
var S={cat:'Hogar',space:'Casa',rooms:2,clean:'deep',supplies:false,freq:'once',days:[],hrs:2,tMin:7,tMax:17,collab:0,pay:'card',discPct:0};
var RATE=900;
var DAYS=['Lu','Ma','Mi','Ju','Vi','Sá','Do'];
var RLABELS=['','Muy malo','Malo','Regular','Bueno','Excelente'];
var COLLABS=[
  {init:'MG',name:'María González',score:4.9,rev:127,rate:900,badge:true,bg:'#E1F5EE',tc:'#085041',quote:'"Puntual, ordenada y muy profesional."'},
  {init:'LM',name:'Laura Méndez',score:4.8,rev:83,rate:850,badge:true,bg:'#E6F1FB',tc:'#042C53',quote:'"Excelente limpieza, muy recomendable."'},
  {init:'SP',name:'Sofía Pérez',score:4.5,rev:41,rate:800,badge:false,bg:'#FAEEDA',tc:'#412402',quote:'"Buen trabajo, muy amable."'},
  {init:'CR',name:'Carolina Ríos',score:4.3,rev:22,rate:780,badge:false,bg:'#FBEAF0',tc:'#4B1528',quote:'"Cumplió con todo lo acordado."'},
];
var histStack=['splash'];

function go(v){
  document.querySelectorAll('[id^="v-"]').forEach(function(el){el.style.display='none';});
  document.getElementById('cnav').style.display='none';
  var el=document.getElementById('v-'+v);
  if(el) el.style.display='flex';
  if(v==='ch'||v==='cp'||v==='msg-collab') document.getElementById('cnav').style.display='flex';
  var pmap={q1:1,q2:2,q3:3,q4:4,q5:5,q6:6};
  if(pmap[v]) renderPb('pb'+v.slice(1),pmap[v]);
  if(v==='q1'){buildRooms();setTimeout(function(){document.getElementById('sel-sum-1').style.display='block';},200);}
  if(v==='q5') buildCollabs();
  if(v==='q6') buildSummary();
  if(v==='paid'){document.getElementById('paid-collab').textContent=COLLABS[S.collab].name;document.getElementById('paid-price').textContent='$'+calcPrice().toLocaleString('es-UY');}
  if(v==='rate') buildRateView();
  if(v!=='menu'&&v!=='about'&&v!=='contact') histStack.push(v);
}
function goBack(){histStack.pop();var p=histStack[histStack.length-1]||'splash';go(p);}
function goTab(v,n,idx){
  document.querySelectorAll('[id^="v-"]').forEach(function(el){el.style.display='none';});
  document.getElementById('v-'+v).style.display='flex';
  document.getElementById('cnav').style.display='flex';
  for(var i=0;i<3;i++){var t=document.getElementById(n+'t'+i);if(t) t.classList.toggle('on',i===idx);}
}

function renderPb(id,done){
  var el=document.getElementById(id);if(!el)return;
  el.innerHTML='';
  for(var i=0;i<7;i++){var d=document.createElement('div');d.className='pd'+(i<done?' done':i===done?' act':'');el.appendChild(d);}
}

function selCat(cat,id){
  S.cat=cat;
  ['tc-hogar','tc-oficina'].forEach(function(x){
    var el=document.getElementById(x);el.classList.toggle('on',x===id);
    el.querySelectorAll('path,rect,line,circle').forEach(function(p){var a=p.getAttribute('fill');if(!a||a==='none') p.setAttribute('stroke',x===id?'#1D9E75':'#888780'); else if(a!=='none') p.setAttribute('fill',x===id?'#1D9E75':'#888780');});
  });
  document.getElementById('cat-lbl').textContent=cat.toLowerCase();
  setTimeout(function(){document.getElementById('rb-space').classList.add('show');},50);
  updSum1();
}
function selSpace(sp,id){
  S.space=sp;
  ['tc-casa','tc-apto'].forEach(function(x){
    var el=document.getElementById(x);el.classList.toggle('on',x===id);
    el.querySelectorAll('path,rect,line,circle').forEach(function(p){var a=p.getAttribute('fill');if(!a||a==='none') p.setAttribute('stroke',x===id?'#1D9E75':'#888780'); else if(a!=='none') p.setAttribute('fill',x===id?'#1D9E75':'#888780');});
  });
  setTimeout(function(){document.getElementById('rb-rooms').classList.add('show');buildRooms();},100);
  updSum1();
}
function buildRooms(){
  var g=document.getElementById('rooms-g');if(!g)return;g.innerHTML='';
  for(var i=1;i<=9;i++){
    var b=document.createElement('div');b.className='rb'+(S.rooms===i?' on':'');b.textContent=i;
    b.addEventListener('click',(function(n,el){return function(){S.rooms=n;document.querySelectorAll('.rb').forEach(function(x){x.classList.remove('on');});el.classList.add('on');updSum1();};})(i,b));
    g.appendChild(b);
  }
}
function updSum1(){
  document.getElementById('sel-sum-1-txt').textContent='Listo: '+S.cat+' · '+S.space+' · '+S.rooms+' habitaciones.';
}
function selClean(t){
  S.clean=t;
  document.getElementById('cc-deep').classList.toggle('on',t==='deep');
  document.getElementById('cc-light').classList.toggle('on',t==='light');
  var minH=t==='deep'?2:2;
  if(S.hrs<minH){S.hrs=minH;document.getElementById('hdisp').textContent=S.hrs;updHlbl();}
}
function toggleSupplies(){
  S.supplies=!S.supplies;
  document.getElementById('supplies-btn').classList.toggle('on',S.supplies);
  document.getElementById('st').classList.toggle('on',S.supplies);
}
function selFreq(f){
  S.freq=f;if(f==='once') S.days=[];
  ['once','weekly','monthly'].forEach(function(x){document.getElementById('fr-'+x).classList.toggle('on',x===f);});
  var dB=document.getElementById('date-block'),dyB=document.getElementById('days-block');
  if(f==='once'){dB.style.display='block';dyB.classList.remove('show');}
  else{dB.style.display='none';setTimeout(function(){dyB.classList.add('show');},80);}
  buildDays();
}
function buildDays(){
  var g=document.getElementById('days-g');if(!g)return;g.innerHTML='';
  DAYS.forEach(function(d){
    var b=document.createElement('div');b.className='db'+(S.days.includes(d)?' on':'')+(S.freq==='once'?' dis':'');b.textContent=d;
    b.onclick=function(){if(S.freq==='once')return;if(S.days.includes(d)){S.days=S.days.filter(x=>x!==d);b.classList.remove('on');}else{S.days.push(d);b.classList.add('on');}};
    g.appendChild(b);
  });
}
function buildAvail(){
  var g=document.getElementById('avail-g');if(!g)return;g.innerHTML='';
  DAYS.forEach(function(d){var b=document.createElement('div');b.className='db';b.textContent=d;b.onclick=function(){b.classList.toggle('on');};g.appendChild(b);});
}
function chgH(d){
  S.hrs=Math.max(2,Math.min(12,S.hrs+d));
  document.getElementById('hdisp').textContent=S.hrs;
  updHlbl();
}
function updHlbl(){document.getElementById('hlbl').textContent=S.hrs+' hora'+(S.hrs===1?'':'s');}

var drag=null,SW_MIN=7,SW_MAX=22;
function pct(v){return((v-SW_MIN)/(SW_MAX-SW_MIN)*100).toFixed(2)+'%';}
function updSlider(){
  document.getElementById('sfill').style.left=pct(S.tMin);
  document.getElementById('sfill').style.width=((S.tMax-S.tMin)/(SW_MAX-SW_MIN)*100).toFixed(2)+'%';
  document.getElementById('sh-min').style.left=pct(S.tMin);
  document.getElementById('sh-max').style.left=pct(S.tMax);
  document.getElementById('tl-min').textContent=String(S.tMin).padStart(2,'0')+':00';
  document.getElementById('tl-max').textContent=String(S.tMax).padStart(2,'0')+':00';
}
function startDrag(h,e){e.preventDefault();drag=h;document.addEventListener('mousemove',onDrag);document.addEventListener('touchmove',onDrag,{passive:false});document.addEventListener('mouseup',stopDrag);document.addEventListener('touchend',stopDrag);}
function onDrag(e){if(!drag)return;e.preventDefault();var sw=document.getElementById('sw');var rect=sw.getBoundingClientRect();var cx=e.touches?e.touches[0].clientX:e.clientX;var r=Math.max(0,Math.min(1,(cx-rect.left)/rect.width));var v=Math.round(r*(SW_MAX-SW_MIN)+SW_MIN);if(drag==='min'){S.tMin=Math.max(SW_MIN,Math.min(v,S.tMax-1));}else{S.tMax=Math.min(SW_MAX,Math.max(v,S.tMin+1));}updSlider();}
function stopDrag(){drag=null;document.removeEventListener('mousemove',onDrag);document.removeEventListener('touchmove',onDrag);document.removeEventListener('mouseup',stopDrag);document.removeEventListener('touchend',stopDrag);}

function movePin(e){var svg=document.getElementById('mapsvg');var rect=svg.getBoundingClientRect();var x=Math.round((e.clientX-rect.left)/rect.width*304);var y=Math.round((e.clientY-rect.top)/rect.height*160);document.getElementById('pin4').setAttribute('transform','translate('+x+','+y+')');}

function buildCollabs(){
  var g=document.getElementById('clist');g.innerHTML='';
  COLLABS.forEach(function(c,i){
    var div=document.createElement('div');div.className='ccard'+(S.collab===i?' sel':'');
    var stars='★'.repeat(Math.floor(c.score))+(c.score%1>=0.5?'½':'');
    div.innerHTML='<div class="av" style="background:'+c.bg+';color:'+c.tc+'">'+c.init+'</div><div style="flex:1"><div style="font-size:13px;font-weight:500;color:var(--color-text-primary)">'+c.name+(c.badge?'<span class="vbdg">Verificada</span>':'')+'</div><div style="color:#EF9F27;font-size:10px">'+stars+'</div><div style="font-size:11px;color:var(--color-text-secondary)">'+c.score+' · '+c.rev+' servicios · $'+c.rate+'/h</div><div style="font-size:11px;color:var(--color-text-secondary);margin-top:3px">'+c.quote+'</div></div>';
    div.onclick=(function(idx,el){return function(){S.collab=idx;document.querySelectorAll('.ccard').forEach(x=>x.classList.remove('sel'));el.classList.add('sel');};})(i,div);
    g.appendChild(div);
  });
}
function calcPrice(){
  var c=COLLABS[S.collab];
  var p=c.rate*S.hrs;
  if(S.clean==='deep') p=Math.round(p*1.2);
  if(S.supplies) p+=250;
  if(S.freq==='weekly') p=Math.round(p*0.95);
  if(S.freq==='monthly') p=Math.round(p*0.9);
  if(S.discPct>0) p=Math.round(p*(1-S.discPct/100));
  return Math.round(p);
}
function buildSummary(){
  var fmap={once:'Una vez',weekly:'Semanal',monthly:'Mensual'};
  var c=COLLABS[S.collab];
  var rows=[['Espacio',S.cat+' · '+S.space],['Habitaciones',S.rooms+' hab.'],['Limpieza',S.clean==='deep'?'Profunda (+20%)':'Ligera'],['Insumos',S.supplies?'Incluidos (+$250)':'No incluidos'],['Frecuencia',fmap[S.freq]],['Días',S.days.length?S.days.join(', '):'—'],['Horas',S.hrs+'h'],['Franja',String(S.tMin).padStart(2,'0')+':00 – '+String(S.tMax).padStart(2,'0')+':00'],['Colaboradora',c.name]];
  document.getElementById('cf-card').innerHTML=rows.map(function(r){return'<div class="crow"><span class="ck">'+r[0]+'</span><span class="cv">'+r[1]+'</span></div>';}).join('');
  var base=c.rate*S.hrs;
  var deepAdd=S.clean==='deep'?Math.round(base*0.2):0;
  var sup=S.supplies?250:0;
  var sub=base+deepAdd+sup;
  var fd=0;
  if(S.freq==='weekly') fd=Math.round(sub*0.05);
  if(S.freq==='monthly') fd=Math.round(sub*0.1);
  var da=S.discPct>0?Math.round((sub-fd)*S.discPct/100):0;
  var total=sub-fd-da;
  var h='<div class="pbr"><span>Base ('+S.hrs+'h × $'+c.rate+')</span><span>$'+base.toLocaleString('es-UY')+'</span></div>';
  if(deepAdd>0) h+='<div class="pbr"><span>Recargo profunda (+20%)</span><span>$'+deepAdd.toLocaleString('es-UY')+'</span></div>';
  if(sup>0) h+='<div class="pbr"><span>Artículos de limpieza</span><span>$250</span></div>';
  if(fd>0) h+='<div class="pbr disc"><span>Descuento '+({weekly:'semanal (−5%)',monthly:'mensual (−10%)'}[S.freq])+'</span><span>−$'+fd.toLocaleString('es-UY')+'</span></div>';
  if(da>0) h+='<div class="pbr disc"><span>Código aplicado (−'+S.discPct+'%)</span><span>−$'+da.toLocaleString('es-UY')+'</span></div>';
  h+='<div class="pbr total"><span>Total</span><span>$'+total.toLocaleString('es-UY')+'</span></div>';
  document.getElementById('price-bd').innerHTML=h;
}
function applyDisc(){
  var code=document.getElementById('disc-code').value.trim().toUpperCase();
  var msg=document.getElementById('disc-msg');
  if(code==='LIMHER10'){S.discPct=10;msg.style.display='block';msg.style.color='#0F6E56';msg.textContent='Código aplicado: −10%';}
  else if(code==='PRIMERA'){S.discPct=15;msg.style.display='block';msg.style.color='#0F6E56';msg.textContent='Código aplicado: −15% primera reserva';}
  else{S.discPct=0;msg.style.display='block';msg.style.color='#A32D2D';msg.textContent='Código inválido.';}
  buildSummary();
}
function selPay(t){S.pay=t;['card','mp'].forEach(function(x){document.getElementById('pm-'+x).classList.toggle('on',x===t);});}

function buildRateView(){
  var sr=document.getElementById('star-row');sr.innerHTML='';
  for(var i=1;i<=5;i++){
    var b=document.createElement('button');b.className='star-btn';b.textContent='★';b.setAttribute('data-v',i);
    b.onclick=(function(v){return function(){
      document.querySelectorAll('.star-btn').forEach(function(s){s.classList.toggle('on',parseInt(s.getAttribute('data-v'))<=v);});
      document.getElementById('rate-label').textContent=RLABELS[v];
    };})(i);
    sr.appendChild(b);
  }
  var nr=document.getElementById('nps-row');nr.innerHTML='';
  for(var j=1;j<=10;j++){
    var nb=document.createElement('div');
    nb.style.cssText='padding:8px 0;border:0.5px solid var(--color-border-tertiary);border-radius:7px;font-size:12px;font-weight:500;text-align:center;cursor:pointer;color:var(--color-text-secondary);background:var(--color-background-primary)';
    nb.textContent=j;
    nb.onclick=(function(el){return function(){document.querySelectorAll('#nps-row div').forEach(function(x){x.style.background='var(--color-background-primary)';x.style.color='var(--color-text-secondary)';x.style.borderColor='var(--color-border-tertiary)';});el.style.background='#E1F5EE';el.style.color='#085041';el.style.borderColor='#5DCAA5';};})(nb);
    nr.appendChild(nb);
  }
}

function sendMsg(){var i=document.getElementById('msg-in');var t=i.value.trim();if(!t)return;var w=document.getElementById('msg-new-area');var d=document.createElement('div');d.className='msg-out-wrap';d.innerHTML='<div class="msg-bubble msg-out">'+t+'</div><span class="msg-time">ahora</span>';w.appendChild(d);i.value='';d.scrollIntoView({behavior:'smooth'});}
function sendMsgC(){var i=document.getElementById('msg-in-c');var t=i.value.trim();if(!t)return;var w=document.getElementById('msg-new-area-c');var d=document.createElement('div');d.className='msg-out-wrap';d.innerHTML='<div class="msg-bubble msg-out">'+t+'</div><span class="msg-time">ahora</span>';w.appendChild(d);i.value='';d.scrollIntoView({behavior:'smooth'});}

function chgRate(d){RATE=Math.max(400,RATE+d);document.getElementById('rdisp').textContent=RATE;document.getElementById('rnet').textContent=Math.round(RATE*0.9);}
function loadAv(e){var f=e.target.files[0];if(!f)return;var r=new FileReader();r.onload=function(ev){var av=document.getElementById('pav');av.style.backgroundImage='url('+ev.target.result+')';av.style.backgroundSize='cover';av.style.backgroundPosition='center';av.childNodes.forEach(function(n){if(n.nodeType===3)n.textContent='';});};r.readAsDataURL(f);}

function tick(){var n=new Date();document.getElementById('clk').textContent=String(n.getHours()).padStart(2,'0')+':'+String(n.getMinutes()).padStart(2,'0');}
tick();setInterval(tick,10000);

buildDays();buildAvail();updSlider();updHlbl();
setTimeout(function(){
  ['sp-logo','sp-hero','sp-trust','sp-cta'].forEach(function(id){var el=document.getElementById(id);if(el){el.style.opacity='1';el.style.transform='translateY(0)';}});
},200);
setTimeout(function(){document.getElementById('date-block').style.display='block';},50);
</script>
