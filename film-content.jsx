/* film-content.jsx — the TIBOK film: 8 acts as a timed scene sequence.
   Loads after film-lib.jsx. Exposes window.SCENES (array of {dur,hue,node}). */

(function(){
const { Scene, FX, ActTag, Narration, Statement, Photo, Stat, Chip, Bar, Panel, Card3D, Logo,
        PhotoTile, FlowSvg, FlowLink, NodeChip, Phone,
        C, FD, FS, Easing, ev, fr, clamp, useScene } = window;

const PIMG = (n)=>`assets/people/${n}.jpg`;

const IMG = (n)=>`assets/team/${n}.jpg`;

/* ===== reusable: team-member scene (photo + transformation + scrolling quote) ===== */
function PersonScene({src, objPos, name, role, before, after, proof, lines, accent=C.blue}){
  const {localTime}=useScene();
  const head=ev(localTime,0.5,0.7,Easing.easeOutCubic);
  const chips=ev(localTime,1.0,0.6,Easing.easeOutBack);
  return (
    <React.Fragment>
      <Photo src={src} x={120} y={188} w={620} h={712} objPos={objPos} from={1.05} to={1.17} pany={-4}/>
      <div style={{position:'absolute',left:812,top:212,right:120}}>
        <div style={{opacity:head,transform:`translateY(${(1-head)*20}px)`}}>
          <div style={{fontFamily:FD,fontWeight:800,fontSize:78,letterSpacing:'-0.03em',color:'#fff',lineHeight:1}}>{name}</div>
          <div style={{fontFamily:FD,fontWeight:700,fontSize:22,letterSpacing:'0.08em',textTransform:'uppercase',color:accent,marginTop:14}}>{role}</div>
        </div>
        <div style={{display:'flex',alignItems:'center',gap:18,marginTop:30,opacity:chips,transform:`translateY(${(1-chips)*16}px)`}}>
          <span style={{padding:'11px 20px',borderRadius:12,background:'rgba(224,115,95,0.14)',border:'1px solid rgba(224,115,95,0.4)',color:'#F0B6A8',fontFamily:FD,fontSize:21,fontWeight:500}}>{before}</span>
          <span style={{color:accent,fontSize:30,fontWeight:800}}>→</span>
          <span style={{padding:'11px 20px',borderRadius:12,background:'rgba(59,131,232,0.16)',border:'1px solid rgba(59,131,232,0.45)',color:'#BBD6FF',fontFamily:FD,fontSize:21,fontWeight:600}}>{after}</span>
        </div>
        <div style={{marginTop:24,opacity:ev(localTime,1.5,0.6),display:'flex',alignItems:'center',gap:12,fontFamily:FD,fontSize:21,color:C.green,fontWeight:600}}>
          <span style={{width:9,height:9,borderRadius:9,background:C.green,display:'inline-block'}}/>{proof}
        </div>
      </div>
      <Narration lines={lines} x={812} width={988} align="left" y={742} size={37} italic={true}
        accent="#EDEFF4" dim="rgba(206,219,240,0.26)" lead={1.6} tail={1.2}/>
    </React.Fragment>
  );
}

/* ===== faces fan-in ===== */
function FacesFan(){
  const {localTime}=useScene();
  const team=[['megane','50% 20%'],['stephano','50% 20%'],['adi','50% 20%'],['rain','50% 18%'],['baydon','50% 16%'],['suzelle','50% 22%'],['summer','50% 22%']];
  const names=['Mégane','Stephano','Adi','Rain','Baydon','Suzelle','Summer'];
  const W=232, H=300, gap=16, total=team.length*W+(team.length-1)*gap;
  const startX=(1920-total)/2, baseY=340;
  return (
    <div style={{position:'absolute',inset:0}}>
      {team.map((t,i)=>{
        const p=ev(localTime,0.3+i*0.16,0.7,Easing.easeOutCubic);
        const x=startX+i*(W+gap);
        return (
          <div key={i} style={{position:'absolute',left:x,top:baseY+(1-p)*40,width:W,opacity:p}}>
            <div style={{width:W,height:H,borderRadius:14,overflow:'hidden',outline:'1px solid rgba(255,255,255,0.12)',boxShadow:'0 22px 50px rgba(0,0,0,0.45)'}}>
              <img src={IMG(t[0])} style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:t[1]}}/>
            </div>
            <div style={{fontFamily:FD,fontWeight:600,fontSize:22,color:'#fff',marginTop:12,textAlign:'center'}}>{names[i]}</div>
          </div>
        );
      })}
    </div>
  );
}

/* ===== flux 4 nodes ===== */
function Flux(){
  const {localTime}=useScene();
  const steps=[['1','Input','Symptoms & vitals entered by the auxiliary',C.blue],
    ['2','Processing','RAG · 60 000 references · BSD & BMN scores · the LLM reasons',C.blue],
    ['3','Output','Evidence-based recommendation: emergency, minor, or prescription + follow-up',C.blue],
    ['4','The moat','Every case sharpens the algorithm — soon better than many doctors',C.gold]];
  const W=400,gap=40,total=steps.length*W+(steps.length-1)*gap,sx=(1920-total)/2;
  return (
    <div style={{position:'absolute',inset:0}}>
      {steps.map((s,i)=>{
        const p=ev(localTime,0.4+i*0.5,0.6,Easing.easeOutCubic);
        const x=sx+i*(W+gap);
        return (
          <React.Fragment key={i}>
            <div style={{position:'absolute',left:x,top:300,width:W,opacity:p,transform:`translateY(${(1-p)*22}px)`,
              background:'rgba(255,255,255,0.05)',border:`1px solid ${s[3]==C.gold?'rgba(224,169,59,0.4)':'rgba(255,255,255,0.12)'}`,borderRadius:18,padding:'30px 30px',minHeight:230}}>
              <div style={{width:48,height:48,borderRadius:24,background:s[3],color:C.navy,display:'grid',placeItems:'center',fontFamily:FD,fontWeight:800,fontSize:24}}>{s[0]}</div>
              <div style={{fontFamily:FD,fontWeight:700,fontSize:30,color:'#fff',marginTop:20}}>{s[1]}</div>
              <div style={{fontFamily:FD,fontWeight:400,fontSize:20,color:C.dim,marginTop:12,lineHeight:1.4}}>{s[2]}</div>
            </div>
            {i<steps.length-1 && <div style={{position:'absolute',left:x+W+6,top:405,fontSize:34,color:C.blue,opacity:ev(localTime,0.7+i*0.5,0.5)}}>→</div>}
          </React.Fragment>
        );
      })}
    </div>
  );
}

/* ===== TIBOK ecosystem, alive: people in action + connected services ===== */
function EcosystemLive(){
  const {localTime}=useScene();
  const cx=960;
  const glow=0.4+0.6*Math.abs(Math.sin(localTime*1.3));
  const nodes=[['Lab','◆',660,C.teal],['Radiology','◆',860,C.blue],['Pharmacy','◆',1060,C.gold],['Emergency','◆',1260,C.coral]];
  return (
    <div style={{position:'absolute',inset:0}}>
      <FlowSvg>
        <FlowLink x1={630} y1={350} x2={874} y2={384} color={C.blue} at={0.9}/>
        <FlowLink x1={1290} y1={350} x2={1046} y2={384} color={C.teal} at={1.0}/>
        {nodes.map((n,i)=>(<FlowLink key={i} x1={cx} y1={588} x2={n[2]} y2={660} color={n[3]} at={1.4+i*0.12}/>))}
      </FlowSvg>
      <PhotoTile src={PIMG('doctor-er')} x={130} y={188} w={500} h={322} at={0.3}
        color={C.blue} objPos="48% 50%" label="Doctor · Emergency" sub="Consultation augmented by TIBOK"/>
      <PhotoTile src={PIMG('nurse-center')} x={1290} y={188} w={500} h={322} at={0.5}
        color={C.teal} objPos="50% 38%" label="Health auxiliary" sub="Structured intake at the health centre"/>
      <div style={{position:'absolute',left:cx,top:384,transform:'translate(-50%,-50%)',width:360,height:360,borderRadius:'50%',
        background:`radial-gradient(circle, ${C.blue}33, transparent 70%)`,opacity:glow,filter:'blur(6px)'}}/>
      <Phone x={cx-98} y={184} h={400} at={0.7}/>
      {nodes.map((n,i)=>(<NodeChip key={i} label={n[0]} icon={n[1]} x={n[2]} y={662} color={n[3]} at={1.7+i*0.12}/>))}
    </div>
  );
}

/* ===== modules grid — iconographic, explanatory, 3D ===== */
function Modules(){
  const {localTime}=useScene();
  const I={
    video:<React.Fragment><rect x="2.5" y="6" width="13" height="12" rx="2.5"/><path d="M15.5 10.5l5-2.5v8l-5-2.5z"/></React.Fragment>,
    person:<React.Fragment><circle cx="12" cy="8" r="3.4"/><path d="M5.5 20a6.5 6.5 0 0 1 13 0"/></React.Fragment>,
    clip:<React.Fragment><rect x="5" y="4.5" width="14" height="16.5" rx="2.2"/><path d="M9 4.5V3.2h6v1.3M8.6 12l2 2 4-4"/></React.Fragment>,
    derma:<React.Fragment><rect x="3" y="4.5" width="18" height="15" rx="2.2"/><circle cx="8.5" cy="9.5" r="1.7"/><path d="M3.5 16.5l5-4 4 3 3-2.2 5 4"/></React.Fragment>,
    lab:<React.Fragment><path d="M9.5 3.5h5M10.5 3.5v5.5l-4.6 8.2a2 2 0 0 0 1.7 3h8.8a2 2 0 0 0 1.7-3l-4.6-8.2V3.5"/><path d="M8 15h8"/></React.Fragment>,
    xray:<React.Fragment><path d="M4 8V5.5a1.5 1.5 0 0 1 1.5-1.5H8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M20 16v2.5a1.5 1.5 0 0 1-1.5 1.5H16M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16"/><circle cx="12" cy="12" r="3.4"/></React.Fragment>,
    pill:<React.Fragment><path d="M10.6 3.7l9.7 9.7a4.8 4.8 0 0 1-6.8 6.8L3.8 10.5a4.8 4.8 0 0 1 6.8-6.8z"/><path d="M7.2 7.1l9.7 9.7"/></React.Fragment>,
    heart:<React.Fragment><path d="M20.6 8.6a4.8 4.8 0 0 0-8.6-2 4.8 4.8 0 0 0-8.6 2c0 3.9 4.4 7.3 8.6 10.1 4.2-2.8 8.6-6.2 8.6-10.1z"/><path d="M4.5 11.5h3l1.2-2.2 1.8 4 1.2-1.8h2"/></React.Fragment>,
    shield:<React.Fragment><path d="M12 3.2l7 3v5.3c0 4.8-3 6.8-7 8.8-4-2-7-4-7-8.8V6.2z"/><path d="M9 12l2 2 4-4"/></React.Fragment>,
    alert:<React.Fragment><path d="M12 4l9 16H3z"/><path d="M12 10v4.5M12 17.4h.01"/></React.Fragment>,
    dash:<React.Fragment><rect x="3" y="3" width="18" height="18" rx="2.5"/><path d="M7.5 15.5v-3M12 15.5v-7M16.5 15.5v-4.5"/></React.Fragment>,
  };
  const mods=[
    ['Consultation','Remote','HD video teleconsultation — the patient seen wherever they are',C.blue,'video'],
    ['Consultation','In-person','The practice augmented by AI, face to face',C.blue,'person'],
    ['Consultation','Standard','From first contact to follow-up, a single record',C.blue,'clip'],
    ['Consultation','Dermatology','AI-assisted analysis of skin images',C.blue,'derma'],
    ['Connection','Lab','Test results synchronised automatically',C.teal,'lab'],
    ['Connection','Radiology','Medical imaging integrated into the patient record',C.teal,'xray'],
    ['Connection','Pharmacy','Secure e-prescription, traceable end to end',C.teal,'pill'],
    ['Follow-up','Chronic diseases','Hypertension · diabetes · weight — continuous follow-up via WhatsApp',C.gold,'heart'],
    ['Prevention','SilentCheck','Silent screening & early detection of risks',C.gold,'shield'],
    ['Emergency','Triage & alert','Early detection and immediate alert',C.coral,'alert'],
    ['Oversight','HR dashboard','Workplace health managed in real time',C.green,'dash'],
  ];
  const gap=18, W=402;
  return (
    <div style={{position:'absolute',top:226,left:120,right:120,display:'flex',flexWrap:'wrap',gap:gap,justifyContent:'center'}}>
      {mods.map((m,i)=>{
        const pulse=0.5+0.5*Math.sin(localTime*1.5+i*0.9);
        return (
        <Card3D key={i} w={W} at={0.3+i*0.07} i={i} accent={m[3]} accentSide="left" radius={16} pad="18px 20px"
          style={{display:'flex',gap:16,alignItems:'flex-start'}}>
          <div style={{width:52,height:52,flex:'none',borderRadius:14,background:`${m[3]}22`,border:`1px solid ${m[3]}66`,
            display:'grid',placeItems:'center',color:m[3],boxShadow:`0 0 ${9+8*pulse}px ${m[3]}55`}}>
            <svg width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{I[m[4]]}</svg>
          </div>
          <div style={{minWidth:0}}>
            <div style={{fontFamily:FD,fontWeight:700,fontSize:12,letterSpacing:'0.12em',textTransform:'uppercase',color:m[3]}}>{m[0]}</div>
            <div style={{fontFamily:FD,fontWeight:700,fontSize:23,color:'#fff',marginTop:5,lineHeight:1.05}}>{m[1]}</div>
            <div style={{fontFamily:FD,fontWeight:400,fontSize:15,color:C.dim,marginTop:6,lineHeight:1.32}}>{m[2]}</div>
          </div>
        </Card3D>
      );})}
    </div>
  );
}

/* ===== constellation of African countries lighting up ===== */
function AfricaArc(){
  const {localTime}=useScene();
  const nodes=[['Mauritius',0],['Cabo Verde',1.4],['Senegal',1.9],['Benin',2.3],['Ghana',2.7],['Mali',3.4],['Kenya',3.8],['Tanzania',4.1],['Mozambique',4.4]];
  const cx=960, cy=400, rx=760, ry=200;
  return (
    <div style={{position:'absolute',inset:0}}>
      <svg width="1920" height="1080" style={{position:'absolute',inset:0}}>
        {nodes.map((n,i)=>{ if(i==0)return null;
          const a0=Math.PI*(1.04 - (i-1)/(nodes.length-1)*0.22 - 0.0);
          return null;})}
      </svg>
      {nodes.map((n,i)=>{
        const ang=Math.PI*(1.12 - (i/(nodes.length-1))*1.24);
        const x=cx+Math.cos(ang)*rx, y=cy-Math.sin(ang)*ry*0.9 + (i%2?28:-28);
        const p=ev(localTime,n[1]+0.4,0.6,Easing.easeOutBack);
        const lit=n[1]<2 ? C.blue : n[1]<3 ? C.teal : C.gold;
        return (
          <div key={i} style={{position:'absolute',left:x,top:y,transform:'translate(-50%,-50%)',opacity:p,scale:`${0.6+0.4*p}`}}>
            <div style={{width:18,height:18,borderRadius:9,background:lit,boxShadow:`0 0 ${18*p}px ${lit}, 0 0 ${40*p}px ${lit}66`,margin:'0 auto'}}/>
            <div style={{fontFamily:FD,fontWeight:600,fontSize:18,color:'#fff',marginTop:10,textAlign:'center',whiteSpace:'nowrap'}}>{n[0]}</div>
          </div>
        );
      })}
    </div>
  );
}

/* ============================ THE SCRIPT ============================ */
const SCENES = [

/* ---------- ACT 1 ---------- */
{ dur:22, hue:'blue', node:(<React.Fragment>
  <Photo src={IMG('bach')} x={1080} y={0} w={840} h={1080} radius={0} objPos="50% 22%" from={1.04} to={1.14} pany={-3} ring={false}/>
  <div style={{position:'absolute',top:0,left:0,bottom:0,width:1300,background:'linear-gradient(90deg, #0A1A33 38%, rgba(10,26,51,0.2) 70%, transparent 88%)'}}/>
  <div style={{position:'absolute',left:120,top:110,display:'flex',alignItems:'center',gap:18}}>
    <div style={{background:'#fff',borderRadius:10,padding:6,display:'flex'}}>
      <img src="assets/logos/mauritius.png" alt="" style={{height:62,display:'block'}}/>
    </div>
    <div style={{lineHeight:1.32,maxWidth:470}}>
      <div style={{fontFamily:FD,fontWeight:600,fontSize:12.5,letterSpacing:'0.16em',textTransform:'uppercase',color:'rgba(206,219,240,0.5)'}}>Presented to the Honourable Ministers</div>
      <div style={{fontFamily:FD,fontWeight:700,fontSize:16,color:'#D6E0F0',marginTop:5}}>The Honourable Anil Kumar</div>
      <div style={{fontFamily:FD,fontWeight:500,fontSize:13.5,color:'#9DB8E6'}}>Ministry of Health & Wellness</div>
      <div style={{fontFamily:FD,fontWeight:700,fontSize:16,color:'#D6E0F0',marginTop:7}}>Dr Avinash Ramtohul</div>
      <div style={{fontFamily:FD,fontWeight:500,fontSize:13.5,color:'#9DB8E6'}}>Ministry of Technology, Communication & Innovation</div>
    </div>
  </div>
  <img src="assets/logos/tibok.png" alt="TIBOK" style={{position:'absolute',left:120,top:330,height:144}}/>
  <div style={{position:'absolute',left:124,top:500}}>
    <div style={{display:'flex',height:8,width:240,borderRadius:3,overflow:'hidden',marginBottom:30}}>
      <i style={{flex:1,background:'#EA2839'}}/><i style={{flex:1,background:'#1A206D'}}/><i style={{flex:1,background:'#F4C300'}}/><i style={{flex:1,background:'#00A551'}}/>
    </div>
  </div>
  <Narration lines={['Sovereign medical intelligence,','built in Mauritius — for Africa.','','Dr Stéphane Bach · Founder & CEO, DDS']} x={130} width={760} align="left" y={640} size={34} weight={500}
    accent="#D6E0F0" dim="rgba(206,219,240,0.28)" lead={1.2} tail={1.4}/>
  <div style={{position:'absolute',left:130,bottom:58,display:'flex',alignItems:'center',gap:24}}>
    <span style={{fontFamily:FD,fontSize:14,fontWeight:600,letterSpacing:'0.14em',textTransform:'uppercase',color:'rgba(206,219,240,0.55)',maxWidth:150,lineHeight:1.3}}>Supported since February 2026 by</span>
    <img src="assets/logos/laturbine.svg" alt="La Turbine" style={{height:54}}/>
    <div style={{width:1,height:44,background:'rgba(255,255,255,0.18)'}}/>
    <img src="assets/logos/mric.avif" alt="MRIC" style={{height:58}}/>
  </div>
</React.Fragment>)},

{ dur:30, hue:'blue', node:(<React.Fragment>
  <ActTag act="Act 1" title="The founder"/>
  <Photo src={IMG('bach')} x={120} y={210} w={560} h={690} objPos="50% 20%"/>
  <Narration lines={[
    '"Honourable Ministers,',
    'my name is Stéphane Bach. I am a doctor.',
    'Since 2019, I have not been in Mauritius',
    'to build a startup.',
    'I came to build a sovereign',
    'health infrastructure — for 30 African countries.',
    'I dived into AI from the very start —',
    'four, five years ago. I built my skills on my own,',
    'I grew alongside AI: its different models,',
    'its different capabilities.',
    'Before I show you the products,',
    'you need to know who I am."']}
    x={770} width={1030} align="left" y={520} size={46} italic={true}
    accent="#FFFFFF" dim="rgba(206,219,240,0.24)" lead={1.2} tail={1.4}/>
</React.Fragment>)},

{ dur:32, hue:'blue', node:(<React.Fragment>
  <ActTag act="Act 1" title="Thirty years"/>
  <TimelineViz/>
  <Narration lines={[
    '"Thirty years.',
    'I have seen how health systems',
    'really work — not the way the textbooks describe.',
    'I have run clinics. I have managed budgets.',
    'I have published algorithms with Aix-Marseille.',
    'And I had two exits before that.',
    'What you are about to see is not a promise —',
    'it is 30 years of experience, 5 years of building."']}
    x={960} width={1500} align="center" y={812} size={40} italic={true}
    accent="#EDEFF4" dim="rgba(206,219,240,0.22)" lead={1.6} tail={1.4}/>
</React.Fragment>)},

{ dur:30, hue:'gold', node:(<React.Fragment>
  <ActTag act="Act 1" title="Commitment to Mauritius" color={C.gold}/>
  <div style={{position:'absolute',left:120,top:250,right:120,display:'flex',gap:34}}>
    <Photo src={IMG('bach')} x={120} y={250} w={470} h={560} objPos="50% 22%"/>
  </div>
  <div style={{position:'absolute',left:660,top:300,right:120}}>
    <Statement x={660} y={300} size={62} lines={['In 2019,','I chose Mauritius.','To stay.']} accentIdx={[2]} accentColor={C.gold} weight={700}/>
  </div>
  <Narration lines={[
    '"My son is Mauritian. My wife is Mauritian.',
    'My children will grow up here. That changes everything.',
    'This project is not an exit strategy —',
    'it is a long-term vision for Mauritius,',
    'and for Africa."']}
    x={660} width={1140} align="left" y={730} size={36} italic={true}
    accent="#F2E6CF" dim="rgba(224,210,180,0.26)" lead={1.4} tail={1.3}/>
</React.Fragment>)},

{ dur:24, hue:'blue', node:(<React.Fragment>
  <Statement align="center" y={300} size={104} weight={700}
    lines={['AI is reshaping','the rules of the game.']} accentIdx={[1]} accentColor={C.blue}
    sub={null}/>
  <Narration lines={[
    'The giants of legacy software are slow, heavy —',
    'they cannot think in AI.',
    'Mauritius’s opportunity: to start from scratch,',
    'with people who are open, flexible, Mauritian.']}
    x={960} width={1500} align="center" y={730} size={40}
    accent="#CFE0FA" dim="rgba(206,219,240,0.22)" lead={1.4} tail={1.2}/>
</React.Fragment>)},

/* ---------- ACT 2 ---------- */
{ dur:24, hue:'blue', node:(<React.Fragment>
  <ActTag act="Act 2" title="The transformed team — the heart"/>
  <Statement align="center" y={300} size={96} weight={700}
    lines={['Seven Mauritians.','None of them was an AI engineer.']} accentIdx={[1]} accentColor={C.blue}/>
  <Narration lines={[
    'They had three things: curiosity,',
    'the will to learn, faith in the future.',
    'I did one simple thing:',
    'I invested in them. I paid for their training."']}
    x={960} width={1500} align="center" y={720} size={40} italic={true}
    accent="#EDEFF4" dim="rgba(206,219,240,0.22)" lead={1.4} tail={1.2}/>
</React.Fragment>)},

{ dur:26, hue:'blue', node:(<React.Fragment>
  <ActTag act="Act 2" title="The team"/>
  <FacesFan/>
  <Narration lines={[
    'Mégane · Stephano · Adi · Rain · Baydon · Suzelle · Summer.',
    'No AI experience at the start.',
    'Trained in 12 months. Look at what they have become.']}
    x={960} width={1500} align="center" y={812} size={38}
    accent="#FFFFFF" dim="rgba(206,219,240,0.24)" lead={1.6} tail={1.2}/>
</React.Fragment>)},

{ dur:28, hue:'blue', node:(<PersonScene src={IMG('megane')} objPos="50% 22%" name="Mégane" role="AI Applications Developer"
  before="WordPress web dev" after="UI/UX + Claude API" proof="Interfaces for TIBOK, Lexora & Axon"
  lines={['"Mégane was a traditional web developer.','WordPress, templates. Then she had','the courage to say: I want to change.','I said: all right, but I pay for the training.','We build together.','Now she codes AI — beautiful AND intelligent.','That is rare. And it is worth a great deal."']}/>)},

{ dur:30, hue:'blue', node:(<PersonScene src={IMG('adi')} objPos="50% 18%" name="Adi" role="AI Systems Architect"
  before="Building architect" after="Agent orchestration" proof="TIBOK, Lexora & Axon infra · 99.9% uptime"
  lines={['"Adi used to build buildings, towers.','Then he discovered AI — and everything changed.','Building architecture, AI architecture:','it is another world.','I told him: learn, I pay.','Now he orchestrates AI agents','that make complex decisions.','And tomorrow: AI tools for buildings','and construction — his two worlds united."']}/>)},

{ dur:28, hue:'blue', node:(<PersonScene src={IMG('baydon')} objPos="50% 16%" name="Baydon" role="AI Voice Agents Developer"
  before="Backend support" after="Voice agents FR & EN" proof="10 000+ calls/month · 97% accuracy"
  lines={['"Baydon kept seeing the limits of the old way.','He had the idea: why not automate','calls with AI?','I pay for your training. We learn together.','Six months later, he is coding agents','that call patients in French and in English.','They speak. They listen. They understand."']}/>)},

{ dur:28, hue:'blue', node:(<PersonScene src={IMG('suzelle')} objPos="50% 22%" name="Suzelle" role="Project Lead · Automation"
  before="Admin management" after="Agent orchestration" proof="DDS admin 80% automated · 30h/week saved"
  lines={['"Suzelle saw it: admin is repetitive,','it should not be done by a human. She was right.','Learn automation with AI. I pay.','Now she designs how the agents','handle the admin. She orchestrates them, supervises them.','DDS runs almost entirely on its own."']}/>)},

{ dur:26, hue:'blue', node:(<PersonScene src={IMG('stephano')} objPos="50% 18%" name="Stephano" role="AI Design Lead"
  before="Graphic designer" after="AI-first design" proof="Product journeys — TIBOK, Lexora & Axon"
  lines={['"Stephano did graphic design.','Logos, branding, the usual.','Then he wanted more.','We invested in him. Training, learning.','Now he thinks in AI-first design —','making AI accessible, visually."']}/>)},

{ dur:26, hue:'blue', node:(<PersonScene src={IMG('rain')} objPos="50% 18%" name="Rain" role="AI Prompt Designer"
  before="Customer service" after="Prompt engineering" proof="95% first-contact resolution"
  lines={['"Rain knew how to talk to people.','I told her: prompt engineering','is talking to AI the way you talk to people.','Now she crafts the prompts','for our voice agents —','she makes the AI speak well."']}/>)},

{ dur:26, hue:'blue', node:(<PersonScene src={IMG('summer')} objPos="50% 22%" name="Summer" role="AI Operations & Organisation"
  before="Traditional PM" after="Orchestrating humans + agents" proof="3 products in parallel · zero burnout"
  lines={['"Summer ran traditional projects.','Then she understood:','with AI, it is not the same.','Now she organises how','seven people do the work of a hundred.','Not hype. Reality."']}/>)},

{ dur:30, hue:'gold', node:(<React.Fragment>
  <ActTag act="Act 2" title="The investment" color={C.gold}/>
  <Statement x={120} y={210} size={66} weight={700} lines={['Seven people + AI agents.','The strength of seventy.']} accentIdx={[1]} accentColor={C.gold}/>
  <div style={{position:'absolute',top:430,left:120,right:120,display:'flex',gap:40,justifyContent:'center'}}>
    <Stat to={15} prefix="×10–" suffix="" size={96} color={C.gold} label="Productivity per person" align="center"/>
    <Stat to={12} prefix="" suffix=" months" size={96} color={C.green} label="To become experts" align="center" at={0.4}/>
    <Stat to={0} prefix="" suffix="" size={96} color={C.blue} label="Imported talent" align="center" at={0.6}/>
  </div>
  <Narration lines={[
    '"None of them was an AI engineer. But I invested in them —',
    'time, attention, patience, training.',
    'Because I believe in them. And I believe in Mauritius.',
    'AI is not a threat to Mauritius.',
    'It is an opportunity — if we invest in our people."']}
    x={960} width={1500} align="center" y={812} size={36} italic={true}
    accent="#F2E6CF" dim="rgba(224,210,180,0.24)" lead={1.6} tail={1.2}/>
</React.Fragment>)},

];

/* small person card used in the trio scene */
function PCard({t,i}){
  const {localTime}=useScene();
  const p=ev(localTime,0.4+i*0.2,0.6,Easing.easeOutCubic);
  return (
    <div style={{width:380,opacity:p,transform:`translateY(${(1-p)*24}px)`}}>
      <div style={{width:380,height:360,borderRadius:16,overflow:'hidden',outline:'1px solid rgba(255,255,255,0.12)',boxShadow:'0 22px 50px rgba(0,0,0,0.45)'}}>
        <img src={IMG(t[0])} style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:t[4]}}/>
      </div>
      <div style={{fontFamily:FD,fontWeight:700,fontSize:30,color:'#fff',marginTop:16}}>{t[1]}</div>
      <div style={{fontFamily:FD,fontWeight:700,fontSize:16,letterSpacing:'0.08em',textTransform:'uppercase',color:C.blue,marginTop:6}}>{t[2]}</div>
      <div style={{fontFamily:FD,fontWeight:400,fontSize:19,color:C.dim,marginTop:10}}>{t[3]}</div>
    </div>
  );
}

/* timeline viz for act 1 */
function TimelineViz(){
  const {localTime}=useScene();
  const ph=[['1993 — 2003','Resident, hospitals (France)','The public system, from the inside'],
    ['2003 — 2008','Clinic founder','Operational & financial management'],
    ['2008 — 2019','Health economist','Le Figaro ranking · 30+ publications'],
    ['2019 — 2026','Mauritius','DDS founder · BSD & BMN scores · TIBOK, Lexora & Axon AI']];
  const W=380,gap=34,total=ph.length*W+(ph.length-1)*gap,sx=(1920-total)/2,lineY=330;
  const lineP=ev(localTime,0.3,1.4,Easing.easeOutCubic);
  return (
    <div style={{position:'absolute',inset:0}}>
      <div style={{position:'absolute',left:sx+10,top:lineY,height:3,width:(total-20)*lineP,background:'rgba(255,255,255,0.25)'}}/>
      {ph.map((p,i)=>{
        const op=ev(localTime,0.5+i*0.5,0.6,Easing.easeOutCubic);
        const x=sx+i*(W+gap);
        const last=i==ph.length-1;
        return (
          <div key={i} style={{position:'absolute',left:x,top:lineY-9,width:W,opacity:op,transform:`translateY(${(1-op)*16}px)`}}>
            <div style={{width:18,height:18,borderRadius:9,background:last?C.gold:C.blue,boxShadow:`0 0 18px ${last?C.gold:C.blue}`,marginBottom:30}}/>
            <div style={{fontFamily:FD,fontWeight:700,fontSize:26,color:'#fff'}}>{p[0]}</div>
            <div style={{fontFamily:FD,fontWeight:600,fontSize:21,color:last?C.gold:C.blue,marginTop:10}}>{p[1]}</div>
            <div style={{fontFamily:FD,fontWeight:400,fontSize:19,color:C.dim,marginTop:8,lineHeight:1.35}}>{p[2]}</div>
          </div>
        );
      })}
    </div>
  );
}

window.SCENES_A = SCENES;
window.FacesFan = FacesFan; window.Flux=Flux; window.Modules=Modules; window.AfricaArc=AfricaArc; window.EcosystemLive=EcosystemLive;
window.PersonScene=PersonScene; window.PCard=PCard; window.TimelineViz=TimelineViz;
})();
