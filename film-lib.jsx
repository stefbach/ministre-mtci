/* film-lib.jsx — reusable cinematic primitives for the TIBOK film.
   Loads after React + animations.jsx. Exports components to window. */

(function(){
const { useSprite, useTime, useTimeline, Easing, clamp, interpolate, animate } = window;

/* ---------- palette ---------- */
const C = {
  navy:'#0A1A33', navy2:'#0E2548', ink:'#0E1B33',
  paper:'#F4F1EA', card:'#10254A',
  blue:'#3B83E8', blueDeep:'#1A5FC8', teal:'#27B0BE', gold:'#E0A93B',
  green:'#39C08A', coral:'#E0735F',
  txt:'#EAF1FB', dim:'rgba(200,214,236,0.42)', faint:'rgba(200,214,236,0.16)',
};
const FD = "'Schibsted Grotesk', sans-serif";
const FS = "'Newsreader', serif";
window.C = C; window.FD = FD; window.FS = FS;

/* ---------- helpers ---------- */
function envelope(local, dur, inD=0.55, outD=0.55){
  let o=1;
  if(local<inD) o=Easing.easeOutCubic(clamp(local/inD,0,1));
  else if(local>dur-outD) o=1-Easing.easeInCubic(clamp((local-(dur-outD))/outD,0,1));
  return o;
}
function useScene(){ const s=useSprite(); return {...s, o:envelope(s.localTime,s.duration)}; }
function fr(n, dec=0){
  const f=Number(n).toFixed(dec); let [a,b]=f.split('.');
  a=a.replace(/\B(?=(\d{3})+(?!\d))/g,'\u202F');
  return b?a+','+b:a;
}
function ev(local, at, dur, ease=Easing.easeOutCubic){ return ease(clamp((local-at)/dur,0,1)); }
window.envelope=envelope; window.useScene=useScene; window.fr=fr; window.ev=ev;

/* ---------- Scene wrapper: fades whole scene in/out ---------- */
function Scene({children, bg}){
  const {o}=useScene();
  return <div style={{position:'absolute',inset:0,opacity:o, background:bg||'transparent'}}>{children}</div>;
}

/* ---------- FX backdrop: subtle drifting glow + vignette ---------- */
function FX({hue='blue', intensity=0.5}){
  const t=useTime();
  const gx=50+Math.sin(t*0.18)*14, gy=38+Math.cos(t*0.13)*10;
  const col = hue==='gold' ? '224,169,59' : hue==='teal' ? '39,176,190' : '59,131,232';
  return (
    <div style={{position:'absolute',inset:0,overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,background:C.navy}}/>
      <div style={{position:'absolute',inset:'-20%',
        background:`radial-gradient(48% 48% at ${gx}% ${gy}%, rgba(${col},${0.22*intensity}) 0%, rgba(${col},0) 60%)`}}/>
      <div style={{position:'absolute',inset:0,
        background:'radial-gradient(120% 120% at 50% 120%, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 55%)'}}/>
      <div style={{position:'absolute',inset:0,boxShadow:'inset 0 0 240px rgba(0,0,0,0.55)'}}/>
    </div>
  );
}

/* ---------- Act tag (top-left chip with growing rule) ---------- */
function ActTag({act, title, color=C.blue}){
  const {localTime}=useScene();
  const w=ev(localTime,0.15,0.6,Easing.easeOutExpo)*54;
  const op=ev(localTime,0.1,0.5);
  return (
    <div style={{position:'absolute',left:120,top:96,opacity:op,display:'flex',alignItems:'center',gap:18}}>
      <div style={{width:w,height:3,background:color,borderRadius:2}}/>
      <div style={{fontFamily:FD,fontWeight:700,letterSpacing:'0.22em',fontSize:21,textTransform:'uppercase',color,whiteSpace:'nowrap',flex:'none'}}>{act}</div>
      <div style={{fontFamily:FD,fontWeight:500,letterSpacing:'0.16em',fontSize:21,textTransform:'uppercase',color:C.dim,whiteSpace:'nowrap',flex:'none'}}>· {title}</div>
    </div>
  );
}

/* ---------- Narration teleprompter (scrolls / défile) ---------- */
function Narration({lines, y=760, size=50, lineH=null, font=FD, weight=600,
                    accent='#FFFFFF', dim='rgba(206,219,240,0.30)', align='center',
                    x=960, width=1500, lead=0.55, tail=1.1, italic=false}){
  const {localTime, duration}=useScene();
  const LH = lineH || size*1.46;
  const span = Math.max(0.001,(duration - lead - tail));
  const t = clamp((localTime-lead)/span,0,1) * lines.length; // 0..N
  const focus = t - 0.5;
  return (
    <div style={{position:'absolute',left:0,top:0,right:0,bottom:0,overflow:'hidden',pointerEvents:'none'}}>
      {lines.map((ln,i)=>{
        const d = i - focus;
        const ad = Math.abs(d);
        if(ad>3.2) return null;
        const yy = y + d*LH;
        let op = ad<0.5 ? 1 : Math.max(0, 1 - (ad-0.5)/2.7);
        const isFocus = ad<0.55;
        const col = isFocus ? accent : dim;
        const scale = isFocus ? 1 : 0.965;
        const left = align==='center'? x : x;
        const tx = align==='center'? '-50%' : align==='left'? '0' : '-100%';
        return (
          <div key={i} style={{position:'absolute',left:left,top:yy,
            transform:`translate(${tx},-50%) scale(${scale})`,
            width:width, textAlign:align, opacity:op*op,
            fontFamily:italic?FS:font, fontStyle:italic?'italic':'normal',
            fontWeight:isFocus?weight:weight, fontSize:size, lineHeight:1.18,
            color:col, letterSpacing:'-0.01em', textWrap:'balance',
            transition:'none', willChange:'top,opacity'}}>
            {ln}
          </div>
        );
      })}
    </div>
  );
}

/* ---------- Big statement (kinetic, line by line) ---------- */
function Statement({lines, x=120, y=380, size=92, weight=700, color=C.txt, accentIdx=[], accentColor=C.blue, lineH=1.05, sub=null, font=FD, align='left'}){
  const {localTime}=useScene();
  return (
    <div style={{position:'absolute',left:align==='center'?0:x,right:align==='center'?0:120,top:y,textAlign:align}}>
      {lines.map((ln,i)=>{
        const p=ev(localTime, 0.25+i*0.22, 0.7, Easing.easeOutExpo);
        const isAcc=accentIdx.includes(i);
        return <div key={i} style={{
          fontFamily:font,fontWeight:weight,fontSize:size,lineHeight:lineH,
          letterSpacing:'-0.03em',color:isAcc?accentColor:color,
          opacity:p, transform:`translateY(${(1-p)*26}px)`, willChange:'transform,opacity',
          maxWidth: align==='center'?'none':'24ch', marginInline: align==='center'?'auto':0, textWrap:'balance'}}>{ln}</div>;
      })}
      {sub && (()=>{const p=ev(localTime,0.35+lines.length*0.22,0.7);return(
        <div style={{marginTop:34,fontFamily:FD,fontWeight:400,fontSize:31,lineHeight:1.4,color:C.dim,
          opacity:p,transform:`translateY(${(1-p)*18}px)`,maxWidth:'40ch',marginInline:align==='center'?'auto':0}}>{sub}</div>
      );})()}
    </div>
  );
}

/* ---------- Ken Burns photo (absolute) ---------- */
function Photo({src, x, y, w, h, radius=18, from=1.05, to=1.2, panx=0, pany=-3, objPos='50% 30%',
                at=0, inDur=0.9, ring=true, shadow=true, grayIn=false}){
  const {localTime, duration}=useScene();
  const introT=ev(localTime,at,inDur,Easing.easeOutCubic);
  const kb=clamp((localTime-at)/Math.max(1,(duration-at)),0,1);
  const hold=ev(localTime,at+inDur,1.4);
  const scale=from+(to-from)*kb;
  const tx=panx*kb, ty=pany*kb;
  return (
    <div style={{position:'absolute',left:x,top:y,width:w,height:h,borderRadius:radius,overflow:'hidden',
      opacity:introT, transform:`translateY(${(1-introT)*22}px)`,
      boxShadow:shadow?'0 30px 70px rgba(0,0,0,0.5)':'none',
      outline:ring?'1px solid rgba(255,255,255,0.10)':'none', willChange:'transform,opacity'}}>
      <img src={src} alt="" style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:objPos,
        transform:`scale(${scale}) translate(${tx}px,${ty}px)`, transformOrigin:'center',
        filter: grayIn? `grayscale(${clamp(1-hold,0,1)})`:'none', display:'block'}}/>
    </div>
  );
}

/* ---------- Counter (animated number; returns element) ---------- */
function Stat({to, dec=0, prefix='', suffix='', at=0.2, dur=1.5, size=104, color=C.txt, label='', sub='', width='auto', align='left'}){
  const {localTime}=useScene();
  const t=ev(localTime,at,dur,Easing.easeOutCubic);
  const val=to*t;
  return (
    <div style={{display:'flex',flexDirection:'column',width,alignItems:align==='center'?'center':'flex-start',textAlign:align}}>
      <div style={{fontFamily:FD,fontWeight:700,fontSize:size,lineHeight:0.95,letterSpacing:'-0.035em',color,
        fontVariantNumeric:'tabular-nums',whiteSpace:'nowrap'}}>{prefix}{fr(val,dec)}{suffix}</div>
      {label && <div style={{fontFamily:FD,fontWeight:600,fontSize:21,letterSpacing:'0.02em',color:C.txt,marginTop:14,opacity:0.9,whiteSpace:'nowrap'}}>{label}</div>}
      {sub && <div style={{fontFamily:FD,fontWeight:400,fontSize:18,color:C.dim,marginTop:6,maxWidth:280}}>{sub}</div>}
    </div>
  );
}

/* ---------- Chip ---------- */
function Chip({children, at=0, color=C.txt, tick=true, delay=0}){
  const {localTime}=useScene();
  const p=ev(localTime,at+delay,0.5,Easing.easeOutBack);
  return (
    <div style={{display:'inline-flex',alignItems:'center',gap:12,padding:'12px 22px',
      border:'1px solid rgba(255,255,255,0.16)',background:'rgba(255,255,255,0.05)',borderRadius:999,
      fontFamily:FD,fontWeight:500,fontSize:22,color:C.txt,opacity:p,transform:`translateY(${(1-p)*14}px) scale(${0.96+0.04*p})`}}>
      {tick && <span style={{width:22,height:22,borderRadius:11,background:color,color:C.navy,display:'grid',placeItems:'center',fontSize:13,fontWeight:800}}>✓</span>}
      {children}
    </div>
  );
}

/* ---------- Growing bar ---------- */
function Bar({label, value, max, color=C.blue, at=0, w=150, h=320, prefix='', suffix='', dec=0}){
  const {localTime}=useScene();
  const t=ev(localTime,at,1.1,Easing.easeOutCubic);
  const hpx=(value/max)*h*t;
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:14,width:w}}>
      <div style={{fontFamily:FD,fontWeight:700,fontSize:26,color,opacity:ev(localTime,at+0.3,0.5),fontVariantNumeric:'tabular-nums'}}>{prefix}{fr(value*t,dec)}{suffix}</div>
      <div style={{width:'100%',height:h,display:'flex',alignItems:'flex-end'}}>
        <div style={{width:'100%',height:hpx,background:color,borderRadius:'10px 10px 0 0',boxShadow:`0 0 30px ${color}44`}}/>
      </div>
      <div style={{fontFamily:FD,fontWeight:500,fontSize:18,color:C.dim,textAlign:'center',lineHeight:1.25,minHeight:46}}>{label}</div>
    </div>
  );
}

/* ---------- Panel card ---------- */
function Panel({children, at=0, style={}}){
  const {localTime}=useScene();
  const p=ev(localTime,at,0.6,Easing.easeOutCubic);
  return <div style={{background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.12)',
    borderRadius:18,padding:'26px 30px',opacity:p,transform:`translateY(${(1-p)*22}px)`,
    backdropFilter:'blur(2px)',...style}}>{children}</div>;
}

/* ---------- Logo ---------- */
function Logo({name, w, x=0, y=0, at=0, intro=true, style={}}){
  const {localTime}=useScene();
  const p=intro?ev(localTime,at,0.6,Easing.easeOutCubic):1;
  return <img src={`assets/logos/${name}.png`} alt="" style={{position:'absolute',left:x,top:y,width:w,height:'auto',
    opacity:p,transform:`translateY(${(1-p)*14}px)`,...style}}/>;
}

/* ---------- Swan brand badge (white wordmark on indigo card) ---------- */
function Swan({h=66, x=0, y=0, at=0, style={}}){
  const {localTime}=useScene();
  const p=ev(localTime,at,0.6,Easing.easeOutCubic);
  return (
    <div style={{position:'absolute',left:x,top:y,opacity:p,
      transform:`translateY(${(1-p)*16}px)`,...style}}>
      <div style={{background:'#3A3A63',borderRadius:Math.round(h*0.3),
        padding:`${Math.round(h*0.62)}px ${Math.round(h*1.0)}px`,
        boxShadow:'0 12px 34px rgba(0,0,0,0.38)',display:'inline-block'}}>
        <span style={{fontFamily:FD,fontWeight:900,fontSize:h,color:'#fff',
          letterSpacing:'-0.005em',lineHeight:1,display:'block'}}>SWAN</span>
      </div>
    </div>
  );
}

/* ---------- HUD (persistent wordmark + clock + flag) ---------- */
function Hud({actLabel}){
  const t=useTime();
  return (
    <div style={{position:'absolute',inset:0,pointerEvents:'none'}}>
      <img src="assets/logos/tibok.png" alt="TIBOK" style={{position:'absolute',top:46,left:120,height:34}}/>
      <div style={{position:'absolute',top:60,right:120,display:'flex',alignItems:'center',gap:14}}>
        <div style={{display:'flex',height:8,width:48,borderRadius:2,overflow:'hidden'}}>
          <i style={{flex:1,background:'#EA2839'}}/><i style={{flex:1,background:'#1A206D'}}/><i style={{flex:1,background:'#F4C300'}}/><i style={{flex:1,background:'#00A551'}}/>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Scene, FX, ActTag, Narration, Statement, Photo, Stat, Chip, Bar, Panel, Hud, Logo, Swan });
})();
