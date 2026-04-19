      });
      buildDays();
      syncFreqUI();
    }

    function selDate(v){
      S.serviceDate=v;
      updateQ3Next();
    }

    function updateQ3Next(){
      var valid=S.freq==='once'?!!S.serviceDate:S.days.length>0;
      document.getElementById('q3-next').disabled=!valid;
    }

    function syncFreqUI(){
      var once=S.freq==='once';
      document.getElementById('service-date').value=S.serviceDate;
      document.getElementById('date-block').style.display=once?'block':'none';
      document.getElementById('days-block').style.display=once?'none':'block';
      document.getElementById('days-block').classList.toggle('on',!once);
      document.getElementById('freq-helper').textContent=once?'Elegí la fecha exacta para tu servicio puntual.':'Marcá los días en los que querés repetir el servicio.';
      updateQ3Next();
    }

    function chgHrs(d){
      S.hrs=Math.max(2,S.hrs+d);
      document.getElementById('hrs-disp').textContent=S.hrs;
      document.getElementById('hrs-lbl').textContent=S.hrs===1?'hora':'horas';
    }

    function updRange(){
      var minInput=document.getElementById('r-min');
      var maxInput=document.getElementById('r-max');
      var mn=parseInt(minInput.value,10);
      var mx=parseInt(maxInput.value,10);

      if(mn>=mx){
        if(document.activeElement===minInput){
          mn=mx-1;
          minInput.value=mn;
        }else{
          mx=mn+1;
          maxInput.value=mx;
        }
      }

      S.tMin=mn;
      S.tMax=mx;

      var pct=function(v){return ((v-7)/(21-7)*100).toFixed(1)+'%';};
      document.getElementById('rfill').style.left=pct(mn);
      document.getElementById('rfill').style.width=((mx-mn)/(21-7)*100).toFixed(1)+'%';
      document.getElementById('tl-min').textContent=String(mn).padStart(2,'0')+':00';
      document.getElementById('tl-max').textContent=String(mx).padStart(2,'0')+':00';
      document.getElementById('time-badge-min').textContent=String(mn).padStart(2,'0')+':00';
      document.getElementById('time-badge-max').textContent=String(mx).padStart(2,'0')+':00';
    }

    function movePin(e,svg){
      var rect=svg.getBoundingClientRect();
      var x=Math.round((e.clientX-rect.left)/rect.width*300);
      var y=Math.round((e.clientY-rect.top)/rect.height*160);
      document.getElementById('pin4').setAttribute('transform','translate('+x+','+y+')');
    }

    function buildCollabs(){
      var g=document.getElementById('collab-list');
      g.innerHTML='';
      COLLABS.forEach(function(c,i){
        var div=document.createElement('div');
        div.className='ccard'+(S.collab===i?' sel':'');
        div.innerHTML='<div class="avatar" style="background:'+c.color+';color:'+c.tc+'">'+c.init+'</div>'+
          '<div style="flex:1"><div class="cname">'+c.name+(c.badge?'<span class="vbdg">Verificada</span>':'')+'</div>'+
          '<div class="stars">'+('★'.repeat(Math.floor(c.score)))+(c.score%1>=0.5?'½':'')+'</div>'+
          '<div class="cmeta">'+c.score+' · '+c.reviews+' servicios · $'+c.rate+'/h</div>'+
          '<div style="font-size:11px;color:var(--color-text-secondary);margin-top:3px">'+c.rev+'</div></div>';
        div.onclick=(function(idx,el){
          return function(){
            S.collab=idx;
            document.querySelectorAll('.ccard').forEach(function(x){x.classList.remove('sel');});
            el.classList.add('sel');
          };
        })(i,div);
        g.appendChild(div);
      });
    }

    function calcPrice(){
      var c=COLLABS[S.collab!==null?S.collab:0];
      var base=c.rate*S.hrs;
      if(S.clean==='deep') base=Math.round(base*1.5);
      var mult={once:1,weekly:0.9,monthly:0.85};
      return Math.round(base*(mult[S.freq]||1));
    }

    function buildSummary(){
      var c=COLLABS[S.collab!==null?S.collab:0];
      var fmap={once:'Una vez',weekly:'Semanal',monthly:'Mensual'};
      var html='';
      var rows=[
        ['Espacio',S.category+' · '+S.space],
        ['Habitaciones',S.rooms+' hab.'],
        ['Limpieza',S.clean==='deep'?'Profunda':'Ligera'],
        ['Frecuencia',fmap[S.freq]],
        ['Horas',S.hrs+'h'],
        ['Franja',String(S.tMin).padStart(2,'0')+':00 - '+String(S.tMax).padStart(2,'0')+':00'],
        ['Colaboradora',c.name]
      ];
      if(S.freq==='once') rows.splice(4,0,['Fecha',S.serviceDate?formatDate(S.serviceDate):'-']);
      else rows.splice(4,0,['Dias',S.days.length?S.days.join(', '):'-']);
      rows.forEach(function(r){
        html+='<div class="crow"><span class="ck">'+r[0]+'</span><span class="cv">'+r[1]+'</span></div>';
      });
      document.getElementById('cf-card').innerHTML=html;
      var p=calcPrice();
      document.getElementById('cf-price').textContent='$'+p.toLocaleString('es-UY');
      var sub={once:'por servicio unico',weekly:'por semana',monthly:'por mes'};
      document.getElementById('cf-psub').textContent='estimado '+(sub[S.freq]||'')+' · IVA incluido';
    }

    function formatDate(dateStr){
      if(!dateStr) return '-';
      var d=new Date(dateStr+'T00:00:00');
      return d.toLocaleDateString('es-UY',{day:'2-digit',month:'long',year:'numeric'});
    }

    function selPay(t){
      S.pay=t;
      ['card','mp'].forEach(function(x){
        document.getElementById('pm-'+x).classList.toggle('on',x===t);
      });
    }

    function chgRate(d){
      rate=Math.max(400,rate+d);
      document.getElementById('rate-disp').textContent=rate;
      document.getElementById('rate-net').textContent=Math.round(rate*0.9);
    }

    function loadAvatar(e){
      var f=e.target.files[0];
      if(!f) return;
      var r=new FileReader();
      r.onload=function(ev){
        var av=document.getElementById('prof-av-img');
        av.style.backgroundImage='url('+ev.target.result+')';
        av.style.backgroundSize='cover';
        av.style.backgroundPosition='center';
        av.textContent='';
      };
      r.readAsDataURL(f);
    }

    function tick(){
      var n=new Date();
      document.getElementById('clk').textContent=String(n.getHours()).padStart(2,'0')+':'+String(n.getMinutes()).padStart(2,'0');
    }

    tick();
    setInterval(tick,10000);
    document.getElementById('service-date').min=new Date().toISOString().split('T')[0];
    buildRooms();
    buildDays();
    syncSpaceOptions();
    syncFreqUI();
    updRange();
    selClean('deep');
  </script>
</body>
</html>
