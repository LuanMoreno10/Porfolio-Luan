const data = [
    {
    title: 'Assistente SQL Natural Language',
    badge: 'Open Source',
    desc: 'Traduz perguntas em linguagem natural para SQL. Foco em segurança.',
    tags: ['Python','FastAPI','Postgres'],
    link: '#'
    },
    {
    title: 'Automação de Redes com MikroTik',
    badge: 'Networking',
    desc: 'Provisionamento via SSH/Tailscale. VLANs, firewall e relatórios.',
    tags: ['Bash','RouterOS','Ansible'],
    link: '#'
    },
    {
    title: 'WAF Experiments em Cloudflare',
    badge: 'Segurança',
    desc: 'Testes de WAF, bot management e dashboards.',
    tags: ['Cloudflare','Grafana','Prometheus'],
    link: '#'
    }
];


export default function Projects(){
    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">Projetos em destaque</h2>
                <p className="section-sub">3–6 projetos que mostrem profundidade e variedade.</p>
                <div className="grid grid-3">
                    {data.map((p, i) => (
                        <article className="card" key={i}>
                            <div className="thumb">Screenshot / Demo</div>
                            <div className="card-body">
                                <div className="badge">{p.badge}</div>
                                <h3>{p.title}</h3>
                                <p>{p.desc}</p>
                                <div className="tags">{p.tags.map(t => <span className="tag" key={t}>{t}</span>)}</div>
                                <p><a href={p.link}>Ver mais →</a></p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
</section>
);
}