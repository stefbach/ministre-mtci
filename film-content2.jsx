/* film-content2.jsx — Acts 3–8. Loads after film-content.jsx.
   Exposes window.SCENES_B. */

(function(){
const { Scene, FX, ActTag, Narration, Statement, Photo, Stat, Chip, Bar, Panel, Card3D, Logo, Swan,
        C, FD, FS, Easing, ev, fr, clamp, useScene,
        Flux, Modules, AfricaArc, EcosystemLive, Phone, FlowSvg, FlowLink, NodeChip, PhotoTile } = window;

const SCENES_B = [

/* ---------- ACT 3 ---------- */
{ dur:24, hue:'blue', node:(<React.Fragment>
  <ActTag act="Act 3" title="DDS, the AI producer"/>
  <Statement x={120} y={250} size={70} weight={700} lines={['DDS is not an agency.','It is a builder','of AI software.']} accentIdx={[1,2]} accentColor={C.blue}/>
  <Narration lines={[
    '"Many call themselves an AI agency. They take ChatGPT,',
    'they put your data into it. It is useless,',
    'and it creates dependency.',
    'We build software — software that runs',
    'in production, with real, paying clients."']}
    x={960} width={1500} align="center" y={780} size={38} italic={true}
    accent="#EDEFF4" dim="rgba(206,219,240,0.22)" lead={1.4} tail={1.2}/>
</React.Fragment>)},

{ dur:28, hue:'blue', node:(<React.Fragment>
  <ActTag act="Act 3" title="Structure & portfolio"/>
  <DDSOrg/>
  <Narration lines={[
    '"DDS is a holding company. Three AI products in production —',
    'TIBOK, Lexora, Axon. Each one has real clients.',
    'And alongside them: related ventures —',
    'Obesity Care Clinic, and CVMI, medical tourism in Cabo Verde.',
    'An ecosystem — not an agency."']}
    x={960} width={1500} align="center" y={888} size={32} italic={true}
    accent="#EDEFF4" dim="rgba(206,219,240,0.22)" lead={1.4} tail={1.2}/>
</React.Fragment>)},

/* ---------- ACT 4 ---------- */
{ dur:30, hue:'teal', node:(<React.Fragment>
  <ActTag act="Act 4" title="Product 1 — Lexora" color={C.teal}/>
  <Logo name="lexora" w={300} x={120} y={150} at={0.2}/>
  <Statement x={120} y={300} size={54} weight={700} lines={['You scan. You photograph.','The accounting does itself.']} accentIdx={[1]} accentColor={C.teal}/>
  <div style={{position:'absolute',top:560,left:0,right:0,display:'flex',justifyContent:'center',gap:22}}>
    {[['Driven by AI agents','A receipt scanned or photographed — and it is recorded',C.teal],
      ['Payroll & HR made simple','Payroll, HR — effortless',C.blue],
      ['Time, not paperwork','Hours saved every week',C.gold]].map((p,i)=>(
      <DimCard key={i} p={p} i={i}/>
    ))}
  </div>
  <Narration lines={[
    '"I built it for myself first.',
    'HR in-house, accounting falling behind,',
    'not always rigorous — I know the problem.',
    'So I developed tools for my own companies.',
    'Then I made them simple — so the greatest number',
    'could benefit from them. That is Lexora."']}
    x={960} width={1560} align="center" y={905} size={29} italic={true}
    accent="#D8F2F4" dim="rgba(200,230,236,0.2)" lead={1.6} tail={1.1}/>
</React.Fragment>)},

{ dur:32, hue:'teal', node:(<React.Fragment>
  <ActTag act="Act 4" title="Product 2 — Axon AI" color={C.teal}/>
  <Logo name="axon" w={210} x={120} y={150} at={0.2}/>
  <Statement x={120} y={250} size={52} weight={700} lines={['A team of AI agents.','Voice, secretarial, back-office.']} accentIdx={[1]} accentColor={C.teal}/>
  <Waveform/>
  <div style={{position:'absolute',top:500,left:0,right:0,display:'flex',justifyContent:'center',gap:24}}>
    {[['Voice agent','Calls & answers — FR · EN · every language, tested in medical settings',C.teal],
      ['Administrative agent','Secretarial: letters, emails, scheduling',C.blue],
      ['The entire back-office','A multi-service team of AI agents',C.gold]].map((p,i)=>(
      <DimCard key={i} p={p} i={i}/>
    ))}
  </div>
  <Narration lines={[
    '"Axon is not just a voice agent.',
    'It calls and answers, in every language.',
    'But also an administrative agent: secretarial work,',
    'letters, emails, scheduling — the entire back-office.',
    'A true multi-service team of AI agents —',
    'medical, hospitality, tourism, administrative."']}
    x={960} width={1540} align="center" y={880} size={31} italic={true}
    accent="#D8F2F4" dim="rgba(200,230,236,0.2)" lead={1.6} tail={1.2}/>
</React.Fragment>)},

{ dur:30, hue:'blue', node:(<React.Fragment>
  <ActTag act="Act 4" title="Flagship product — TIBOK"/>
  <Statement x={120} y={190} size={50} weight={700}
    lines={['The medical intelligence','that connects everything.']} accentIdx={[1]} accentColor={C.blue}/>
  <TibokHub/>
  <Narration lines={[
    '"TIBOK is not a teleconsultation app.',
    'It is a medical intelligence that operates',
    'around every point of care — remote, in-person,',
    'pharmacy, lab, radiology, emergency, primary care.',
    '60 000 references. In production at Swan."']}
    x={960} width={1560} align="center" y={918} size={31} italic={true}
    accent="#EDEFF4" dim="rgba(206,219,240,0.2)" lead={1.6} tail={1.2}/>
</React.Fragment>)},

{ dur:26, hue:'blue', node:(<React.Fragment>
  <ActTag act="Act 4" title="TIBOK — three dimensions"/>
  <Statement x={120} y={150} size={48} weight={700} lines={['More than a medical intelligence.']} accentColor={C.blue}/>
  <div style={{position:'absolute',top:340,left:0,right:0,display:'flex',justifyContent:'center',gap:26}}>
    {[['Medical intelligence','Augmented decisions · 60 000 references · remote + in-person',C.blue],
      ['Prevention — SilentCheck','Silent screening & early detection of risks',C.teal],
      ['Oversight — dashboard','Real time for the pilot · HR oversight for companies',C.gold]].map((p,i)=>(
      <DimCard key={i} p={p} i={i}/>
    ))}
  </div>
  <Narration lines={[
    '"TIBOK is not only a medical intelligence.',
    'It is also prevention, with SilentCheck.',
    'And an oversight dashboard —',
    'in real time for the pilot project,',
    'and for HR oversight in companies."']}
    x={960} width={1540} align="center" y={845} size={32} italic={true}
    accent="#EDEFF4" dim="rgba(206,219,240,0.2)" lead={1.6} tail={1.2}/>
</React.Fragment>)},

{ dur:32, hue:'coral', node:(<React.Fragment>
  <ActTag act="Act 4" title="The African problem" color={C.coral}/>
  <Statement x={120} y={170} size={50} weight={700}
    lines={['You cannot create 50 000 doctors in 5 years.','You can augment 600 auxiliaries with AI.']} accentIdx={[1]} accentColor={C.gold}/>
  <Ratios/>
  <Narration lines={[
    '"In Mauritius, the doctor ratio is one of the best in Africa.',
    'But access remains uneven — and 600 health auxiliaries',
    'have no tools to make decisions.',
    'Elsewhere, it is one doctor for 25 000 in the Sahel.',
    'TIBOK augments the auxiliary — they become a practitioner."']}
    x={960} width={1500} align="center" y={870} size={34} italic={true}
    accent="#F6DED7" dim="rgba(230,200,192,0.24)" lead={1.6} tail={1.2}/>
</React.Fragment>)},

{ dur:32, hue:'blue', node:(<React.Fragment>
  <ActTag act="Act 4" title="How it works"/>
  <div style={{position:'absolute',top:150,left:0,right:0,textAlign:'center'}}>
    <div style={{fontFamily:FD,fontWeight:500,fontSize:18,letterSpacing:'0.01em',color:C.dim,maxWidth:1500,margin:'0 auto'}}>
      Every consultation — in-person and remote, emergency, health centres and dispensaries — lab · radiology · pharmacy</div>
  </div>
  <EcosystemLive/>
  <Narration lines={[
    '"The auxiliary enters the data.',
    'TIBOK processes it against 60 000 medical references,',
    'its guidelines, its proprietary algorithms.',
    'An evidence-based recommendation, grounded in science.',
    'And with every case it handles, the system learns.',
    'Year 1, it is good. Year 3, it is better',
    'than many doctors."']}
    x={960} width={1500} align="center" y={860} size={34} italic={true}
    accent="#EDEFF4" dim="rgba(206,219,240,0.2)" lead={1.6} tail={1.4}/>
</React.Fragment>)},

{ dur:34, hue:'blue', node:(<React.Fragment>
  <ActTag act="Act 4" title="The modules"/>
  <Statement x={120} y={150} size={46} weight={700} lines={['11 modules.','One single connected system.']} accentIdx={[1]} accentColor={C.blue}/>
  <Modules/>
  <Narration lines={[
    '"Consultation — remote, in-person, standard,',
    'chronic, dermatology. The connections — lab, radiology, pharmacy.',
    'Chronic-disease follow-up via WhatsApp:',
    'blood pressure, diabetes, weight. Prevention with SilentCheck.',
    'Emergency, and the HR dashboard for companies."']}
    x={960} width={1540} align="center" y={912} size={29} italic={true}
    accent="#EDEFF4" dim="rgba(206,219,240,0.2)" lead={1.6} tail={1.1}/>
</React.Fragment>)},

{ dur:34, hue:'green', node:(<React.Fragment>
  <ActTag act="Act 4" title="Swan Assurance — agreement signed" color={C.green}/>
  <Statement x={120} y={150} size={52} weight={700} lines={['We have just signed','with Swan.']} accentIdx={[1]} accentColor={C.green}/>
  <Swan h={70} x={1360} y={150} at={0.5}/>
  <div style={{position:'absolute',top:320,left:0,right:0,display:'flex',justifyContent:'center'}}>
    <Panel at={0.4} style={{maxWidth:1360}}>
      <div style={{fontFamily:FD,fontWeight:600,fontSize:30,color:'#fff',lineHeight:1.4,textAlign:'center'}}>
        Swan agrees to <span style={{color:C.green,fontWeight:800}}>reimburse</span> the consultations and prescriptions made on TIBOK.</div>
    </Panel>
  </div>
  <div style={{position:'absolute',top:486,left:0,right:0,textAlign:'center'}}>
    <div style={{fontFamily:FD,fontWeight:600,fontSize:18,letterSpacing:'0.12em',textTransform:'uppercase',color:C.dim,marginBottom:16}}>Ready to roll out the service for their staff & families</div>
    <div style={{display:'flex',justifyContent:'center',gap:14,flexWrap:'wrap',maxWidth:1200,margin:'0 auto'}}>
      <Chip at={0.8} color={C.blue}>ER Group</Chip>
      <Chip at={0.92} color={C.blue}>Taylor Smith</Chip>
      <Chip at={1.04} color={C.blue}>Alteo</Chip>
      <Chip at={1.16} color={C.blue}>Bank One</Chip>
    </div>
  </div>
  <div style={{position:'absolute',top:636,left:0,right:0,textAlign:'center'}}>
    <div style={{fontFamily:FD,fontWeight:600,fontSize:18,letterSpacing:'0.12em',textTransform:'uppercase',color:C.dim,marginBottom:16}}>Awaiting response</div>
    <div style={{display:'flex',justifyContent:'center',gap:14,flexWrap:'wrap',maxWidth:1000,margin:'0 auto'}}>
      <Chip at={1.3} color={C.gold}>SICOM</Chip>
      <Chip at={1.42} color={C.gold}>NIC</Chip>
      <Chip at={1.54} color={C.gold}>MedSchem</Chip>
      <Chip at={1.66} color={C.gold}>… and many more</Chip>
    </div>
  </div>
  <Narration lines={[
    '"We have just signed with Swan.',
    'And above all: Swan agrees to reimburse',
    'the consultations and prescriptions made on TIBOK.',
    'ER Group, Taylor Smith, Alteo and Bank One were waiting for this green light.',
    'And we await responses from SICOM, NIC,',
    'MedSchem — and many more still."']}
    x={960} width={1560} align="center" y={912} size={29} italic={true}
    accent="#DDF2E8" dim="rgba(200,230,216,0.2)" lead={1.6} tail={1.1}/>
</React.Fragment>)},

/* ---------- ACT 5 ---------- */
{ dur:30, hue:'blue', node:(<React.Fragment>
  <ActTag act="Act 5" title="African regional vision"/>
  <AfricaArc/>
  <div style={{position:'absolute',top:602,left:0,right:0,textAlign:'center'}}>
    <div style={{fontFamily:FD,fontWeight:700,fontSize:56,letterSpacing:'-0.025em',color:'#fff'}}>Far more than a market.</div>
    <div style={{fontFamily:FD,fontWeight:600,fontSize:30,color:C.blue,marginTop:12}}>A sovereign health infrastructure for Africa.</div>
  </div>
  <Narration lines={[
    '"Mauritius is the proof of concept.',
    'It works here — so it works everywhere in Africa.',
    'The same problem, everywhere: not enough doctors.',
    'We have not launched yet, and I will not give you figures.',
    'Because it is far more than that: a sovereign',
    'health infrastructure, for an entire continent."']}
    x={960} width={1560} align="center" y={912} size={29} italic={true}
    accent="#EDEFF4" dim="rgba(206,219,240,0.2)" lead={1.6} tail={1.1}/>
</React.Fragment>)},

{ dur:24, hue:'gold', node:(<React.Fragment>
  <ActTag act="Act 5" title="Soft power & influence" color={C.gold}/>
  <Statement align="center" y={250} size={64} weight={700}
    lines={['Mauritius, Africa\'s health-tech hub.','Not tourism — technology.']} accentIdx={[1]} accentColor={C.gold}/>
  <div style={{position:'absolute',top:470,left:0,right:0,display:'flex',justifyContent:'center',gap:24}}>
    {[['Soft power','Leader of African innovation'],['AI producer','Local algorithms = African ownership'],['Jobs & talent','High-value tech — the talent stays in Mauritius']].map((p,i)=>(
      <MiniPanel key={i} p={p} i={i} color={C.gold}/>
    ))}
  </div>
  <Narration lines={[
    '"This is not just a health product.',
    'It is a strategy to make Mauritius visible —',
    'as a technology leader. The proof that investing',
    'in your people pays off."']}
    x={960} width={1500} align="center" y={840} size={34} italic={true}
    accent="#F2E6CF" dim="rgba(224,210,180,0.22)" lead={1.6} tail={1.2}/>
</React.Fragment>)},

/* ---------- ACT 6 ---------- */
{ dur:28, hue:'blue', node:(<React.Fragment>
  <ActTag act="Act 6" title="The proof of concept — Flacq"/>
  <Statement x={120} y={200} size={62} weight={700} lines={['If it works in Flacq,','it works nationwide.']} accentIdx={[1]} accentColor={C.blue}/>
  <PhotoTile src="assets/people/flacq-centre.jpg" x={1150} y={150} w={620} h={250} at={0.4}
    color={C.blue} objPos="50% 58%" label="Flacq · public health centre" sub="4 AHC + 24 CHC + 1 regional hospital — zero capex"/>
  <div style={{position:'absolute',top:430,left:0,right:0,display:'flex',justifyContent:'center',gap:24}}>
    {[['01','Representativeness','170 000 inhabitants · 13.5% of Mauritius · rural/urban mix'],
      ['02','Existing infrastructure','4 AHC + 24 CHC + 1 regional hospital · zero capex'],
      ['03','Easy to manage','Neither Port-Louis nor Rodrigues · manageable']].map((p,i)=>(
      <NumPanel key={i} p={p} i={i}/>
    ))}
  </div>
  <Narration lines={[
    '"We run the proof of concept in Flacq.',
    '170 000 inhabitants, representative.',
    'The infrastructure already exists. Zero capex.',
    'If it works in Flacq, it works nationwide —',
    'that is exactly what we want to prove."']}
    x={960} width={1500} align="center" y={840} size={34} italic={true}
    accent="#EDEFF4" dim="rgba(206,219,240,0.22)" lead={1.6} tail={1.2}/>
</React.Fragment>)},

{ dur:28, hue:'blue', node:(<React.Fragment>
  <ActTag act="Act 6" title="Scope & budget — 6-month pilot"/>
  <div style={{position:'absolute',top:198,left:0,right:0,display:'flex',justifyContent:'center',gap:80,alignItems:'center'}}>
    <Stat to={5} prefix="Rs " suffix="M" size={120} color="#fff" label="Budget requested" align="center"/>
    <div style={{fontSize:52,color:C.dim}}>→</div>
    <Stat to={500000} prefix="" suffix="+" size={120} color={C.blue} label="Consultations covered" align="center" at={0.5}/>
  </div>
  <div style={{position:'absolute',top:360,left:0,right:0,textAlign:'center'}}>
    <div style={{fontFamily:FD,fontWeight:400,fontSize:19,lineHeight:1.4,color:C.dim,maxWidth:1480,margin:'0 auto'}}>
      Every consultation — in-person and remote, emergency, health centres and dispensaries — wherever the medical intelligence operates, and the use of every module: lab · radiology · pharmacy.</div>
  </div>
  <div style={{position:'absolute',top:438,left:0,right:0,display:'flex',justifyContent:'center',gap:16}}>
    <Chip at={0.5} color={C.gold}>6-month pilot</Chip>
    <Chip at={0.62} color={C.blue}>Flacq area — 170 000 inhabitants</Chip>
    <Chip at={0.74} color={C.teal}>Rural & urban mix — representative</Chip>
  </div>
  <PhotoTile src="assets/people/patient-app.jpg" x={1228} y={538} w={562} h={296} at={0.7}
    color={C.blue} objPos="50% 42%" label="Patient record · application" sub="On the patient's phone, in the colours of the State"/>
  <div style={{position:'absolute',top:546,left:120,width:1040,display:'flex',flexDirection:'column',gap:16}}>
    {[['Minimal requirements','An internet connection · a computer or a connected phone',C.teal],
      ['Patient record','Accessible via the app, on the patient’s phone',C.blue],
      ['In the State’s colours','TIBOK branded in the colours of the government',C.gold]].map((p,i)=>(
      <Card3D key={i} at={0.5+i*0.15} i={i} accent={p[2]} accentSide="left" pad="16px 26px" radius={14}>
        <div style={{fontFamily:FD,fontWeight:700,fontSize:24,color:p[2]}}>{p[0]}</div>
        <div style={{fontFamily:FD,fontWeight:400,fontSize:18,color:C.dim,marginTop:6,lineHeight:1.35}}>{p[1]}</div>
      </Card3D>
    ))}
  </div>
  <Narration lines={[
    '"The pilot runs 6 months — across the entire Flacq area.',
    '170 000 inhabitants: rural and urban, a truly representative mix.',
    'Five million rupees — for more than 500 000 consultations.',
    'An internet connection, a computer or a connected phone.',
    'The patient accesses their record via the app.',
    'And TIBOK is branded in the colours of the government."']}
    x={960} width={1560} align="center" y={905} size={29} italic={true}
    accent="#EDEFF4" dim="rgba(206,219,240,0.2)" lead={1.6} tail={1.1}/>
</React.Fragment>)},

{ dur:30, hue:'blue', node:(<React.Fragment>
  <ActTag act="Act 6" title="The potential gains"/>
  <Statement x={120} y={150} size={48} weight={700} lines={['No hindsight yet.','But clear potential gains.']} accentIdx={[1]} accentColor={C.blue}/>
  <Benefits/>
  <Narration lines={[
    '"We have only just started — no figures yet.',
    'But the potential gains are clear: with TIBOK’s',
    'medical intelligence, the doctor is augmented,',
    'every prescription sourced and justified.',
    'No more duplicate tests, fewer unnecessary',
    'hospitalisations, controlled flows — partly remote.',
    'Structured intake with the health auxiliaries —',
    'doctor time saved. Faster, more efficient."']}
    x={960} width={1560} align="center" y={912} size={28} italic={true}
    accent="#EDEFF4" dim="rgba(206,219,240,0.2)" lead={1.6} tail={1.0}/>
</React.Fragment>)},

{ dur:24, hue:'blue', node:(<React.Fragment>
  <ActTag act="Act 6" title="Financing & governance"/>
  <Statement x={120} y={210} size={54} weight={700} lines={['A grant, not a tender.','Four weeks, not twelve months.']} accentIdx={[1]} accentColor={C.blue}/>
  <div style={{position:'absolute',top:440,left:0,right:0,display:'flex',justifyContent:'center',gap:18,flexWrap:'wrap',maxWidth:1400,margin:'0 auto'}}>
    <Chip at={0.3} color={C.teal}>Ministry of Health · approves & funds — Rs 5 M</Chip>
    <Chip at={0.5} color={C.teal}>Decision & oversight: Ministry of Health</Chip>
    <Chip at={0.7} color={C.blue}>Technology · AI compliance & data security</Chip>
    <Chip at={0.9} color={C.gold}>Go / no-go at M3 · public dashboard</Chip>
  </div>
  <Narration lines={[
    '"A tender means 12 months of bureaucracy.',
    'A grant takes four weeks.',
    'The Ministry of Health approves, funds and oversees.',
    'The Ministry of Technology guarantees compliance — AI, data security.',
    'Public dashboard, full transparency, and a go/no-go at month 3."']}
    x={960} width={1560} align="center" y={780} size={32} italic={true}
    accent="#EDEFF4" dim="rgba(206,219,240,0.22)" lead={1.4} tail={1.2}/>
</React.Fragment>)},

{ dur:24, hue:'blue', node:(<React.Fragment>
  <ActTag act="Act 6" title="Success metrics"/>
  <Statement x={120} y={210} size={54} weight={700} lines={['Hit the targets, we scale.','Miss them, we pivot. No drama.']} accentIdx={[1]} accentColor={C.blue}/>
  <div style={{position:'absolute',top:440,left:0,right:0,display:'flex',justifyContent:'center',gap:22}}>
    {[['Adoption','>70% active centres · >5 000 consultations/month'],['Clinical','Emergencies −10% · e-prescription >40%'],['Satisfaction','NPS >65 · uptime >99.5%'],['Cost','<Rs 10 / consultation']].map((p,i)=>(
      <MiniPanel key={i} p={p} i={i} color={C.blue}/>
    ))}
  </div>
  <Narration lines={[
    '"The metrics are clear and measurable.',
    'If we hit them, we scale nationwide.',
    'If not, we pivot or we stop. No drama.',
    'But Swan already proves it."']}
    x={960} width={1500} align="center" y={780} size={34} italic={true}
    accent="#EDEFF4" dim="rgba(206,219,240,0.22)" lead={1.4} tail={1.2}/>
</React.Fragment>)},

/* ---------- ACT 7 ---------- */
{ dur:24, hue:'blue', node:(<React.Fragment>
  <ActTag act="Act 7" title="Security & compliance"/>
  <Statement x={120} y={188} size={56} weight={700} lines={['An infrastructure','you can trust.']} accentIdx={[1]} accentColor={C.green}/>
  <div style={{position:'absolute',top:430,left:0,right:0,display:'flex',justifyContent:'center',gap:18,flexWrap:'wrap',maxWidth:1440,margin:'0 auto'}}>
    <Chip at={0.4} color={C.green}>GDPR compliant</Chip>
    <Chip at={0.54} color={C.green}>SOC 2 certified</Chip>
    <Chip at={0.68} color={C.blue}>AWS hosting</Chip>
    <Chip at={0.82} color={C.blue}>Supabase</Chip>
    <Chip at={0.96} color={C.teal}>End-to-end encryption</Chip>
    <Chip at={1.1} color={C.gold}>Data 100% owned by the State</Chip>
  </div>
  <Narration lines={[
    '"Security is not an option.',
    'As of today, our system is GDPR compliant,',
    'SOC 2 certified, hosted on AWS, with Supabase.',
    'Encrypted, traceable. And the data remains',
    'the property of the State — sovereign."']}
    x={960} width={1540} align="center" y={820} size={32} italic={true}
    accent="#EDEFF4" dim="rgba(206,219,240,0.2)" lead={1.6} tail={1.2}/>
</React.Fragment>)},

{ dur:32, hue:'blue', node:(<React.Fragment>
  <ActTag act="Act 7" title="The crystal-clear ask"/>
  <Statement x={120} y={150} size={52} weight={700} lines={['Two requests. Two partners.','Zero ambiguity.']} accentIdx={[1]} accentColor={C.blue}/>
  <AskCards/>
  <Narration lines={[
    '"Two requests, clear, measurable, with a timeline.',
    'The Ministry of Health approves the grant and hosts the pilot.',
    'The Ministry of Technology guarantees compliance — AI, data security.',
    'Zero external dependency — it all rests on a Mauritian team."']}
    x={960} width={1500} align="center" y={870} size={32} italic={true}
    accent="#EDEFF4" dim="rgba(206,219,240,0.2)" lead={1.6} tail={1.2}/>
</React.Fragment>)},

/* ---------- ACT 8 ---------- */
{ dur:28, hue:'blue', node:(<React.Fragment>
  <Statement align="center" y={250} size={84} weight={700}
    lines={['The technology exists.','The team exists.','The vision exists.']} accentIdx={[2]} accentColor={C.blue}/>
  <Narration lines={[
    '"What is missing: the permission of the State.',
    'And five million rupees for 6 months.',
    'Will you allow a Mauritian team',
    'to show the world how to build',
    'a sovereign health infrastructure for Africa?"']}
    x={960} width={1560} align="center" y={730} size={38} italic={true}
    accent="#CFE0FA" dim="rgba(206,219,240,0.22)" lead={1.6} tail={1.4}/>
</React.Fragment>)},

/* ---------- ACT 8 — closing aligned with the 2026-2027 Budget ---------- */
{ dur:30, hue:'blue', node:(<React.Fragment>
  <ActTag act="Act 8" title="Aligned with the 2026-2027 Budget"/>
  <Statement align="center" y={150} size={46} weight={700}
    lines={['The 2026-2027 Budget has just been voted.','TIBOK is already executing it.']} accentIdx={[1]} accentColor={C.blue}/>
  <BudgetAlign/>
  <Narration lines={[
    '"The 2026-2027 Government Budget has just been voted.',
    'Prevention, diabetes, early detection, telemedicine,',
    'clinical artificial intelligence, primary care, hospital efficiency.',
    'Each of these priorities, TIBOK does not merely talk about:',
    'it already delivers them, on the ground.',
    'Diabetes prevention? SilentCheck screens and follows up from the very first month.',
    'Early detection? Our risk score — the BSD score,',
    'Bach, Sampol, Dignat-Georges — developed with the emeritus professors',
    'of the Assistance Publique des Hôpitaux de Marseille and INSERM.',
    'Telemedicine, home follow-up for the over-85s: it is all in place.',
    'There is nothing to build — only a mature system to activate."']}
    x={960} width={1640} align="center" y={930} size={26} italic={true}
    accent="#EDEFF4" dim="rgba(206,219,240,0.2)" lead={1.6} tail={1.1}/>
</React.Fragment>)},

{ dur:26, hue:'blue', node:(<React.Fragment>
  <ActTag act="Act 8" title="Why sign"/>
  <Statement x={120} y={150} size={56} weight={700} lines={['Why sign.','Now.']} accentIdx={[1]} accentColor={C.blue}/>
  <div style={{position:'absolute',top:368,left:0,right:0,display:'flex',flexWrap:'wrap',justifyContent:'center',gap:22,maxWidth:1320,marginLeft:'auto',marginRight:'auto'}}>
    {[['Capped risk','Rs 5 M — not one more, ever',C.blue],
      ['Bounded scope','6 months, a single region: Flacq',C.teal],
      ['No delay','Product ready, team mobilisable within 30 days',C.blue],
      ['Budget alignment','Delivers priorities already voted',C.gold],
      ['Sovereignty','Mauritian medical AI — a regional showcase',C.teal],
      ['Reversible — through proof','Continue, scale or stop on real figures',C.green]].map((p,i)=>(
      <MiniPanel key={i} p={p} i={i} color={p[2]}/>
    ))}
  </div>
  <Narration lines={[
    '"I know what you are asking yourselves right now: what is the risk?',
    'The risk is minimal, and that is by design.',
    'It is capped: five million, not one more.',
    'It is bounded: six months, a single region.',
    'No technological delay: the product is ready,',
    'the team mobilisable within thirty days.',
    'It is aligned: the pilot delivers priorities already voted.',
    'It is sovereign: a Mauritian medical AI,',
    'backed by the academic excellence of Marseille.',
    'And it is reversible: at the end, you decide —',
    'continue, scale or stop — on real figures.',
    'You are not betting on a promise: you are buying proof."']}
    x={960} width={1560} align="center" y={930} size={26} italic={true}
    accent="#EDEFF4" dim="rgba(206,219,240,0.2)" lead={1.6} tail={1.1}/>
</React.Fragment>)},

{ dur:24, hue:'blue', node:(<React.Fragment>
  <ActTag act="Act 8" title="The request"/>
  <Statement align="center" y={260} size={72} weight={700} lines={['Give us six months','in Flacq.']} accentIdx={[1]} accentColor={C.blue}/>
  <div style={{position:'absolute',top:540,left:0,right:0,display:'flex',justifyContent:'center',gap:16}}>
    <Chip at={0.5} color={C.blue}>Rs 5 M</Chip>
    <Chip at={0.62} color={C.gold}>6 months</Chip>
    <Chip at={0.74} color={C.teal}>Flacq</Chip>
  </div>
  <Narration lines={[
    '"Honourable Ministers.',
    'To Health, the decision and the ground.',
    'To Technology, compliance — AI, data security, sovereignty.',
    'The Government Budget says: prevention, artificial intelligence, primary care.',
    'TIBOK is exactly that — made in Mauritius, ready today.',
    'Give us six months in Flacq. And let the results speak."']}
    x={960} width={1500} align="center" y={770} size={34} italic={true}
    accent="#EDEFF4" dim="rgba(206,219,240,0.2)" lead={1.6} tail={1.3}/>
</React.Fragment>)},

{ dur:16, hue:'blue', node:(<FinalScene/>)},

];

/* ===== components for acts 3–8 ===== */
function DDSOrg(){
  const {localTime}=useScene();
  const root=ev(localTime,0.2,0.6,Easing.easeOutCubic);
  const products=[['tibok','Health OS · in-person + remote'],['lexora','AI-native ERP · accounting & payroll'],['axon','Voice agents · customer service']];
  return (
    <div style={{position:'absolute',inset:0}}>
      <div style={{position:'absolute',left:'50%',top:178,transform:`translate(-50%,0) scale(${0.92+0.08*root})`,opacity:root,
        background:'rgba(59,131,232,0.12)',border:'1px solid rgba(59,131,232,0.4)',borderRadius:16,padding:'16px 36px',display:'flex',alignItems:'center'}}>
        <Logo name="dds" w={300} intro={false} style={{position:'static'}}/>
      </div>
      <div style={{position:'absolute',left:100,top:348,width:1090,opacity:ev(localTime,0.55,0.6)}}>
        <div style={{fontFamily:FD,fontWeight:700,fontSize:18,letterSpacing:'0.16em',textTransform:'uppercase',color:C.blue,marginBottom:18}}>AI products</div>
        <div style={{display:'flex',gap:22}}>
          {products.map((p,i)=>(
            <Card3D key={i} at={0.7+i*0.16} i={i} minHeight={206} pad="28px 22px" radius={16}
              style={{flex:1,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:20}}>
              <div style={{height:52,display:'flex',alignItems:'center'}}><Logo name={p[0]} w={p[0]==='axon'?170:p[0]==='tibok'?150:210} intro={false} style={{position:'static'}}/></div>
              <div style={{fontFamily:FD,fontWeight:400,fontSize:18,color:C.dim,textAlign:'center',lineHeight:1.35}}>{p[1]}</div>
            </Card3D>
          ))}
        </div>
      </div>
      <div style={{position:'absolute',left:1240,top:348,width:580,opacity:ev(localTime,1.05,0.6)}}>
        <div style={{fontFamily:FD,fontWeight:700,fontSize:18,letterSpacing:'0.16em',textTransform:'uppercase',color:C.gold,marginBottom:18}}>Related ventures</div>
        <div style={{display:'flex',flexDirection:'column',gap:18}}>
          <Card3D at={1.1} i={1} minHeight={96} pad="16px 24px" radius={16} style={{display:'flex',alignItems:'center',gap:18}}>
            <Logo name="obesity" w={200} intro={false} style={{position:'static'}}/>
            <div style={{fontFamily:FD,fontWeight:400,fontSize:16,color:C.dim,lineHeight:1.3}}>Bariatric surgery · NHS S2</div>
          </Card3D>
          <Card3D at={1.25} i={3} accent={C.gold} minHeight={96} pad="18px 24px" radius={16}
            style={{background:'rgba(224,169,59,0.08)',border:'1px solid rgba(224,169,59,0.3)'}}>
            <div style={{fontFamily:FD,fontWeight:800,fontSize:24,color:C.gold}}>CVMI · Cabo Verde</div>
            <div style={{fontFamily:FD,fontWeight:400,fontSize:16,color:C.dim,marginTop:6,lineHeight:1.3}}>Medical tourism — chronic-disease prevention + tourism</div>
          </Card3D>
        </div>
      </div>
    </div>
  );
}

function Waveform(){
  const {localTime}=useScene();
  const bars=46;
  return (
    <div style={{position:'absolute',top:400,left:0,right:0,display:'flex',justifyContent:'center',alignItems:'center',gap:8,height:120}}>
      {Array.from({length:bars}).map((_,i)=>{
        const amp=ev(localTime,0.3,0.8)* (0.4+0.6*Math.abs(Math.sin(i*0.5)));
        const h=14+Math.abs(Math.sin(localTime*4 + i*0.55))*amp*90;
        return <div key={i} style={{width:7,height:h,borderRadius:4,background:i%3==0?C.teal:'rgba(39,176,190,0.5)'}}/>;
      })}
    </div>
  );
}

function ModuleNames(){
  const {localTime}=useScene();
  const m=['AI Doctor','WhatsApp follow-up','In-person practice','Lab integration','Pharmacy'];
  return (
    <div style={{position:'absolute',top:560,left:1080,right:120,display:'flex',flexDirection:'column',gap:14}}>
      {m.map((x,i)=>{const p=ev(localTime,0.5+i*0.18,0.5,Easing.easeOutBack);return(
        <div key={i} style={{display:'flex',alignItems:'center',gap:16,opacity:p,transform:`translateX(${(1-p)*24}px)`}}>
          <span style={{width:34,height:34,borderRadius:8,background:'rgba(59,131,232,0.18)',border:'1px solid rgba(59,131,232,0.5)',color:C.blue,display:'grid',placeItems:'center',fontFamily:FD,fontWeight:700,fontSize:16}}>{i+1}</span>
          <span style={{fontFamily:FD,fontWeight:600,fontSize:28,color:'#fff'}}>{x}</span>
        </div>
      );})}
    </div>
  );
}

function Ratios(){
  const {localTime}=useScene();
  const r=[['Mauritius','≈ 1 : 500',500,C.green],['Senegal','1 : 7 000',7000,C.blue],['Mali','1 : 15 000',15000,C.gold],['Sahel','1 : 25 000',25000,C.coral]];
  const maxR=25000;
  return (
    <div style={{position:'absolute',top:400,left:300,right:300,display:'flex',flexDirection:'column',gap:22}}>
      {r.map((x,i)=>{const p=ev(localTime,0.4+i*0.25,0.8,Easing.easeOutCubic);return(
        <div key={i} style={{display:'flex',alignItems:'center',gap:24}}>
          <div style={{width:140,fontFamily:FD,fontWeight:600,fontSize:24,color:'#fff',textAlign:'right'}}>{x[0]}</div>
          <div style={{flex:1,height:30,background:'rgba(255,255,255,0.06)',borderRadius:15,overflow:'hidden'}}>
            <div style={{height:'100%',width:`${(x[2]/maxR)*100*p}%`,background:x[3],borderRadius:15,boxShadow:`0 0 24px ${x[3]}55`}}/>
          </div>
          <div style={{width:150,fontFamily:FD,fontWeight:700,fontSize:24,color:x[3]}}>{x[1]}</div>
        </div>
      );})}
    </div>
  );
}

function MiniPanel({p,i,color}){
  return (
    <Card3D w={400} at={0.4+i*0.18} i={i} minHeight={180} pad="26px 28px" radius={16}>
      <div style={{fontFamily:FD,fontWeight:700,fontSize:28,color:color||'#fff'}}>{p[0]}</div>
      <div style={{fontFamily:FD,fontWeight:400,fontSize:21,color:C.dim,marginTop:14,lineHeight:1.4}}>{p[1]}</div>
    </Card3D>
  );
}

function NumPanel({p,i}){
  return (
    <Card3D w={430} at={0.4+i*0.2} i={i} accent={C.blue} minHeight={210} pad="28px 30px" radius={16}>
      <div style={{fontFamily:FD,fontWeight:700,fontSize:40,color:C.blue}}>{p[0]}</div>
      <div style={{fontFamily:FD,fontWeight:700,fontSize:26,color:'#fff',marginTop:12}}>{p[1]}</div>
      <div style={{fontFamily:FD,fontWeight:400,fontSize:19,color:C.dim,marginTop:10,lineHeight:1.4}}>{p[2]}</div>
    </Card3D>
  );
}

function AskCards(){
  const {localTime}=useScene();
  const a=[['Ministry of Health','Decision · funding · ground','Approve the Rs 5 M grant and host the pilot in Flacq',['Everything is decided here','A grant — 4 weeks, not 12 months','4 AHC + 24 CHC · ~500 caregivers'],C.teal],
    ['Ministry of Technology','AI & data compliance','Guarantee AI compliance and data security',['Digital sovereignty','Data 100% owned by the State','GDPR compliant · SOC 2'],C.blue]];
  const W=520,gap=30,total=a.length*W+(a.length-1)*gap,sx=(1920-total)/2;
  return (
    <div style={{position:'absolute',inset:0}}>
      {a.map((c,i)=>{const x=sx+i*(W+gap);return(
        <Card3D key={i} w={W} at={0.5+i*0.3} i={i} accent={c[4]} pad="28px 32px" style={{position:'absolute',left:x,top:330}}>
          <div style={{fontFamily:FD,fontWeight:800,fontSize:38,color:'#fff'}}>{c[0]}</div>
          <div style={{fontFamily:FD,fontWeight:600,fontSize:16,letterSpacing:'0.08em',textTransform:'uppercase',color:C.dim,marginTop:4}}>{c[1]}</div>
          <div style={{fontFamily:FD,fontWeight:500,fontSize:22,color:C.txt,marginTop:18,lineHeight:1.35}}>{c[2]}</div>
          <div style={{marginTop:18,display:'flex',flexDirection:'column',gap:11}}>
            {c[3].map((li,j)=>(
              <div key={j} style={{display:'flex',gap:12,fontFamily:FD,fontSize:18,color:C.dim,lineHeight:1.3}}>
                <span style={{width:7,height:7,borderRadius:4,background:c[4],marginTop:9,flex:'none'}}/>{li}</div>
            ))}
          </div>
        </Card3D>
      );})}
    </div>
  );
}

function FinalScene(){
  const {localTime}=useScene();
  const w=ev(localTime,0.3,0.8,Easing.easeOutExpo);
  return (
    <div style={{position:'absolute',inset:0}}>
      <div style={{position:'absolute',left:120,top:300}}>
        <img src="assets/logos/tibok.png" alt="TIBOK" style={{height:120,opacity:ev(localTime,0.2,0.7),transform:`translateY(${(1-ev(localTime,0.2,0.7))*20}px)`}}/>
        <div style={{display:'flex',height:8,width:260*w,borderRadius:3,overflow:'hidden',margin:'28px 0 28px'}}>
          <i style={{flex:1,background:'#EA2839'}}/><i style={{flex:1,background:'#1A206D'}}/><i style={{flex:1,background:'#F4C300'}}/><i style={{flex:1,background:'#00A551'}}/>
        </div>
        <div style={{fontFamily:FD,fontWeight:500,fontSize:34,color:'#D6E0F0',lineHeight:1.25,opacity:ev(localTime,0.7,0.7),maxWidth:'18ch'}}>
          Built by Mauritius.<br/>For Mauritius. For Africa.</div>
      </div>
      <div style={{position:'absolute',right:120,top:300,width:680,opacity:ev(localTime,1.0,0.7),transform:`translateY(${(1-ev(localTime,1.0,0.7))*18}px)`}}>
        <div style={{display:'flex',flexWrap:'wrap',gap:12,justifyContent:'flex-start'}}>
          {['Proven system — Swan','100% Mauritian team','Sovereign infrastructure — MRIC'].map((c,i)=>(
            <span key={i} style={{padding:'11px 20px',border:'1px solid rgba(255,255,255,0.16)',background:'rgba(255,255,255,0.05)',borderRadius:999,fontFamily:FD,fontWeight:500,fontSize:20,color:C.txt,display:'inline-flex',alignItems:'center',gap:10}}>
              <span style={{width:20,height:20,borderRadius:10,background:C.green,color:C.navy,display:'grid',placeItems:'center',fontSize:12,fontWeight:800}}>✓</span>{c}</span>
          ))}
        </div>
        <div style={{marginTop:34,paddingTop:26,borderTop:'1px solid rgba(255,255,255,0.14)'}}>
          <div style={{fontFamily:FD,fontWeight:700,fontSize:26,color:'#fff'}}>Dr Stéphane Bach</div>
          <div style={{fontFamily:FD,fontWeight:400,fontSize:20,color:C.dim,marginTop:4}}>Founder & CEO, Digital Data Solutions Ltd</div>
          <div style={{fontFamily:FD,fontWeight:500,fontSize:20,color:C.blue,marginTop:4}}>sbach@tibok.mu</div>
        </div>
        <div style={{marginTop:24,fontFamily:FD,fontWeight:400,fontSize:19,color:'#D6E0F0',lineHeight:1.6}}>
          Mégane · Stephano · Adi · Rain · Baydon · Suzelle · Summer</div>
      </div>
    </div>
  );
}

function BudgetAlign(){
  const {localTime}=useScene();
  const rows=[
    ['Prevention & diabetes — Rs 40 M','SilentCheck: screening + follow-up from month 1',C.gold],
    ['Early detection — cardiometabolic','BSD score validated · risk stratification',C.teal],
    ['Telemedicine & care pathways','Remote + in-person, already operational',C.blue],
    ['Healthcare Innovation & AI Unit','Sovereign clinical AI, made in Mauritius',C.blue],
    ['Hospital efficiency','Decongesting the emergency room',C.teal],
    ['Ageing & 85+ · at home','Remote follow-up of chronic patients',C.gold],
    ['Clinical Trial Act reform','BSD score: exportable clinical research',C.green],
  ];
  return (
    <div style={{position:'absolute',top:300,left:0,right:0,display:'flex',flexDirection:'column',alignItems:'center',gap:11}}>
      {rows.map((r,i)=>{const p=ev(localTime,0.5+i*0.22,0.5,Easing.easeOutCubic);const ck=ev(localTime,0.72+i*0.22,0.4,Easing.easeOutBack);return(
        <div key={i} style={{display:'flex',alignItems:'center',gap:22,width:1480,opacity:p,transform:`translateY(${(1-p)*12}px)`}}>
          <div style={{flex:'0 0 560px',textAlign:'right',fontFamily:FD,fontWeight:600,fontSize:21,color:C.dim}}>{r[0]}</div>
          <div style={{flex:'0 0 34px',width:34,height:34,borderRadius:17,background:`${r[2]}26`,border:`1px solid ${r[2]}`,display:'grid',placeItems:'center',color:r[2],fontWeight:800,fontSize:18,transform:`scale(${0.4+0.6*ck})`,boxShadow:`0 0 14px ${r[2]}44`}}>✓</div>
          <div style={{flex:1,fontFamily:FD,fontWeight:700,fontSize:23,color:'#fff'}}>{r[1]}</div>
        </div>
      );})}
      <div style={{marginTop:14,fontFamily:FD,fontWeight:400,fontSize:15,lineHeight:1.4,color:C.dim,maxWidth:1340,textAlign:'center',opacity:ev(localTime,2.4,0.8)}}>
        BSD score — Bach · Sampol · Dignat-Georges. Pr Sampol & Pr Dignat-Georges, emeritus professors (AP-HM · INSERM UMR 608 — Pathophysiology of the Endothelium). Publication in progress.</div>
    </div>
  );
}

function Benefits(){
  const {localTime}=useScene();
  const b=[
    ['Augmented doctor','Sourced for every prescription',C.blue],
    ['Zero redundancy','No more duplicate tests',C.teal],
    ['Justified prescriptions','Appropriate, traceable',C.teal],
    ['Controlled flows','With a portion handled remotely',C.blue],
    ['Fewer hospitalisations','Avoidable cases, avoided',C.gold],
    ['Doctor time saved','Structured intake with the auxiliaries — faster, more efficient',C.green],
  ];
  const gap=20,W=460;
  return (
    <div style={{position:'absolute',top:336,left:0,right:0,display:'flex',flexWrap:'wrap',gap:gap,justifyContent:'center',maxWidth:1480,marginLeft:'auto',marginRight:'auto'}}>
      {b.map((m,i)=>(
        <Card3D key={i} w={W} at={0.3+i*0.12} i={i} accent={m[2]} accentSide="left" minHeight={148} pad="24px 28px" radius={16}
          style={{display:'flex',gap:18,alignItems:'flex-start'}}>
          <span style={{width:30,height:30,borderRadius:15,background:m[2],color:C.navy,display:'grid',placeItems:'center',fontSize:15,fontWeight:800,flex:'none',marginTop:2}}>✓</span>
          <div>
            <div style={{fontFamily:FD,fontWeight:700,fontSize:25,color:'#fff'}}>{m[0]}</div>
            <div style={{fontFamily:FD,fontWeight:400,fontSize:18,color:C.dim,marginTop:7,lineHeight:1.35}}>{m[1]}</div>
          </div>
        </Card3D>
      ))}
    </div>
  );
}

function TibokHub(){
  const {localTime}=useScene();
  const nodes=[['Remote',C.blue],['In-person',C.blue],['Pharmacy',C.gold],['Lab',C.teal],['Radiology',C.blue],['Emergency',C.coral],['Primary care',C.teal]];
  const cx=960, cy=560, rx=600, ry=178;
  const pts=nodes.map((n,i)=>{const ang=(-90 + i*(360/nodes.length))*Math.PI/180;return {n:n[0],c:n[1],x:cx+Math.cos(ang)*rx,y:cy+Math.sin(ang)*ry};});
  const pulse=0.5+0.5*Math.sin(localTime*1.6);
  return (
    <div style={{position:'absolute',inset:0}}>
      <FlowSvg>
        {pts.map((pt,i)=>(<FlowLink key={i} x1={cx} y1={cy} x2={pt.x} y2={pt.y} color={pt.c} at={0.6+i*0.1}/>))}
      </FlowSvg>
      <div style={{position:'absolute',left:cx,top:cy,transform:'translate(-50%,-50%)',width:250,height:250,borderRadius:'50%',
        background:`radial-gradient(circle, ${C.blue}3a, ${C.blue}08)`,border:`2px solid ${C.blue}88`,
        display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:9,
        opacity:ev(localTime,0.2,0.6),boxShadow:`0 0 ${70+34*pulse}px ${C.blue}55, inset 0 0 40px ${C.blue}22`}}>
        <Logo name="tibok" w={150} intro={false} style={{position:'static'}}/>
        <div style={{fontFamily:FD,fontWeight:700,fontSize:15,color:'#fff'}}>Medical intelligence</div>
        <div style={{fontFamily:FD,fontWeight:700,fontSize:15,color:C.teal}}>60 000 references</div>
      </div>
      {pts.map((pt,i)=>(<NodeChip key={i} label={pt.n} icon="◆" x={pt.x} y={pt.y} color={pt.c} at={0.9+i*0.11}/>))}
    </div>
  );
}

function DimCard({p,i}){
  return (
    <Card3D w={470} at={0.4+i*0.2} i={i} accent={p[2]} minHeight={236} pad="30px 32px">
      <div style={{fontFamily:FD,fontWeight:800,fontSize:29,color:p[2]}}>{p[0]}</div>
      <div style={{fontFamily:FD,fontWeight:400,fontSize:22,color:C.dim,marginTop:16,lineHeight:1.42}}>{p[1]}</div>
    </Card3D>
  );
}

window.SCENES_B = SCENES_B;
window.DDSOrg=DDSOrg; window.Waveform=Waveform; window.ModuleNames=ModuleNames; window.Ratios=Ratios; window.TibokHub=TibokHub; window.DimCard=DimCard;
window.MiniPanel=MiniPanel; window.NumPanel=NumPanel; window.AskCards=AskCards; window.FinalScene=FinalScene;
})();
