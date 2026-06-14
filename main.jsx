(function(){
const { Stage, Sprite, Scene, FX, Hud, C } = window;

function Movie(){
  const scenes = window.SCENES_A.concat(window.SCENES_B);
  const OV = 0.5; // crossfade overlap (s)
  let cursor = 0;
  const placed = scenes.map((s,i)=>{
    const dur = (window.VO && window.VO[i] && window.VO[i].dur) ? window.VO[i].dur : s.dur; // retime to voice-over length
    const start = cursor;
    const end = start + dur;
    cursor = end - OV;
    return { ...s, dur, start, end };
  });
  const total = placed.length ? placed[placed.length-1].end : 10;

  return (
    <Stage width={1920} height={1080} duration={total} background={C.navy} persistKey="tibokfilm" loop={true}>
      {placed.map((s,i)=>(
        <Sprite key={i} start={s.start} end={s.end}>
          <Scene><FX hue={s.hue} intensity={0.55}/>{s.node}</Scene>
        </Sprite>
      ))}
      <Hud/>
      <Seeker/>
      <VoiceOver placed={placed}/>
    </Stage>
  );
}

function Seeker(){
  const { setTime, setPlaying } = window.useTimeline();
  React.useEffect(()=>{ window.__seek=(t)=>{setPlaying(false);setTime(t);}; window.__play=()=>setPlaying(true); },[setTime,setPlaying]);
  return null;
}

// Voice-over: plays the per-scene narration clip (window.VO) in sync with the
// timeline; follows play/pause and the scrubber. Press M to mute/unmute.
function VoiceOver({placed}){
  const { time, playing } = window.useTimeline();
  const st = React.useRef({audio:null, idx:-1, muted:false});
  React.useEffect(()=>{
    const a = typeof Audio!=='undefined' ? new Audio() : null;
    if(a){ a.preload='auto'; }
    st.current.audio = a;
    const onKey=(e)=>{ if((e.key==='m'||e.key==='M') && a){ st.current.muted=!st.current.muted; if(st.current.muted) a.pause(); } };
    window.addEventListener('keydown', onKey);
    return ()=>{ window.removeEventListener('keydown', onKey); if(a) a.pause(); };
  },[]);
  React.useEffect(()=>{
    const s=st.current, a=s.audio; if(!a) return;
    if(s.muted){ if(!a.paused) a.pause(); return; }
    let idx=-1; for(let i=0;i<placed.length;i++){ if(time>=placed[i].start) idx=i; else break; }
    const vo = (idx>=0 && window.VO) ? window.VO[idx] : null;
    if(!playing || !vo){ if(!a.paused) a.pause(); return; }
    if(s.idx!==idx){ s.idx=idx; a.src=vo.file; try{a.currentTime=0;}catch(e){} }
    const off = time - placed[idx].start;
    if(Math.abs((a.currentTime||0)-off) > 0.4){ try{ a.currentTime=Math.max(0,off); }catch(e){} }
    if(a.paused){ a.play().catch(()=>{}); }
  });
  return null;
}

ReactDOM.createRoot(document.getElementById('root')).render(<Movie/>);
})();
