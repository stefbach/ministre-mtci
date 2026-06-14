(function(){
const { Stage, Sprite, Scene, FX, Hud, C } = window;
function Movie(){
  const scenes = window.SCENES_A.concat(window.SCENES_B);
  const OV = 0.5;
  let cursor = 0;
  const placed = scenes.map((s,i)=>{
    const start = cursor; const end = start + s.dur; cursor = end - OV;
    return { ...s, start, end };
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
    </Stage>
  );
}
function Seeker(){
  const { setTime, setPlaying } = window.useTimeline();
  React.useEffect(()=>{ window.__seek=(t)=>{setPlaying(false);setTime(t);}; window.__play=()=>setPlaying(true); },[setTime,setPlaying]);
  return null;
}
ReactDOM.createRoot(document.getElementById('root')).render(<Movie/>);
})();
