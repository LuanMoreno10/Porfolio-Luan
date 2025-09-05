function Bar({label, percent}){
    return (
        <div style={{marginBottom:10}}>
            <div style={{display:'flex',justifyContent:'space-between'}}>
                <strong>{label}</strong><span style={{color:'var(--muted)'}}>{percent}%</span>
            </div>
            <div style={{height:10, background:'#1e2233', borderRadius:999}}>
                <div style={{width:`${percent}%`, height:'100%', background:'linear-gradient(90deg,var(--brand),var(--accent))', borderRadius:999}}/>
            </div>
        </div>
    );
}


export default function Skills(){
    return (
        <section id="skills" className="section">
            <div className="container">
                <h2 className="section-title">Competências</h2>
                <div className="grid grid-2">
                    <div>
                        <h4>Back-end</h4>
                        <Bar label="Python" percent={80} />
                        <Bar label="Node.js" percent={65} />
                    </div>
                    <div>
                        <h4>Networking & Sec</h4>
                        <Bar label="Redes" percent={75} />
                        <Bar label="Segurança" percent={65} />
                    </div>
                </div>
            </div>
        </section>
    );
}