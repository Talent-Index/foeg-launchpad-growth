import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle, XCircle, Target, Users, Briefcase, BarChart3, Globe, Rocket } from "lucide-react";

const Blueprint = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="container mx-auto px-4 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Product Blueprint v1.0
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              FOEG Labs Product Stack
            </h1>
            <p className="text-xl text-muted-foreground">
              Execution-ready operating system for Africa GTM
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 max-w-5xl space-y-16">
          
          {/* 1. Product Narrative */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">1</span>
              Product Narrative
            </h2>
            <Card className="bg-card/50 border-border/50">
              <CardContent className="pt-6">
                <p className="text-lg leading-relaxed mb-8">
                  <strong>FOEG Labs</strong> is the venture-studio-as-a-service layer for protocols, startups, and ecosystem partners entering Africa. 
                  We compress 18-month market-entry timelines to 90 days by combining <em>Build Pods</em> (embedded dev squads), 
                  <em>Distribution Rails</em> (pre-wired channels to real buyers), <em>ROI Dashboards</em> (live metrics that prove traction), 
                  and <em>Africa Launch Readiness</em> (compliance, payments, localization). Partners pay for outcomes—pilots closed, 
                  users activated, revenue generated—not for "ecosystem vibes."
                </p>
                
                <h3 className="font-semibold text-lg mb-4">User Personas</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                    <div className="flex items-center gap-2 mb-2">
                      <Rocket className="w-5 h-5 text-primary" />
                      <span className="font-semibold">Startup Founder</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Early-stage founder (Seed–Series A) building for African markets. Needs: distribution to first 10 paying customers, 
                      investor-ready metrics, compliant payment rails. Pain: "I can build, but I can't sell here."
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/5 border border-secondary/10">
                    <div className="flex items-center gap-2 mb-2">
                      <Globe className="w-5 h-5 text-secondary" />
                      <span className="font-semibold">Ecosystem Partner / Protocol</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      L1/L2 chain, DeFi protocol, or dev-tool company with grant budget and Africa OKRs. Needs: measurable developer adoption, 
                      local builder pipeline, ROI proof for board. Pain: "We spent $500K on events; can't show a single production deploy."
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-accent/5 border border-accent/10">
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="w-5 h-5 text-accent" />
                      <span className="font-semibold">FOEG Operator</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Internal lead managing pods, sprints, and partner relationships. Needs: single dashboard to track squad velocity, 
                      partner health, revenue pipeline. Pain: "Our impact is real but invisible; I report in 6 different Notion docs."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator />

          {/* 2. Value Props + Pricing */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">2</span>
              Value Props & Pricing
            </h2>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[140px]">Module</TableHead>
                    <TableHead>Target Customer</TableHead>
                    <TableHead>KPI Promise</TableHead>
                    <TableHead>Pricing Model</TableHead>
                    <TableHead className="text-destructive">Do NOT Do</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Build Pods</TableCell>
                    <TableCell>Protocols, Startups</TableCell>
                    <TableCell>MVP in 6–8 weeks; deploy to mainnet</TableCell>
                    <TableCell>$15K–$25K/pod + 15% success fee on grant/raise</TableCell>
                    <TableCell className="text-sm text-muted-foreground">No open-ended "consulting"; no equity-only deals</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Distribution Rails</TableCell>
                    <TableCell>Startups, SME SaaS</TableCell>
                    <TableCell>10 qualified intros in 14 days; 2 pilots closed in 30 days</TableCell>
                    <TableCell>$5K sprint + 10% rev-share on closed pilots</TableCell>
                    <TableCell className="text-sm text-muted-foreground">No "lead lists"; no vanity intros</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">ROI Dashboard</TableCell>
                    <TableCell>Protocols, Grant Programs</TableCell>
                    <TableCell>Live metrics: devs onboarded, TVL, tx volume, retention</TableCell>
                    <TableCell>$2K/mo SaaS or bundled with Build Pod</TableCell>
                    <TableCell className="text-sm text-muted-foreground">No vanity metrics; no reports without action items</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Buyer Access Network</TableCell>
                    <TableCell>Startups, Protocols</TableCell>
                    <TableCell>3 customer council sessions; 50+ buyer insights/quarter</TableCell>
                    <TableCell>$8K/quarter retainer</TableCell>
                    <TableCell className="text-sm text-muted-foreground">No surveys; no second-hand data</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Africa Launch Readiness</TableCell>
                    <TableCell>Protocols, Fintechs</TableCell>
                    <TableCell>Compliance checklist cleared; local payment rail live in 4 weeks</TableCell>
                    <TableCell>$10K fixed + monthly retainer $3K</TableCell>
                    <TableCell className="text-sm text-muted-foreground">No legal advice; no license application filing</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Adoption-as-a-Service</TableCell>
                    <TableCell>Protocols</TableCell>
                    <TableCell>500 active wallets in 90 days; 20% 30-day retention</TableCell>
                    <TableCell>$20K pilot + $3/activated user (capped)</TableCell>
                    <TableCell className="text-sm text-muted-foreground">No bot farms; no airdrop hunters</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </section>

          <Separator />

          {/* 3. MVP Scope */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">3</span>
              MVP Scope (First 8 Weeks)
            </h2>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Priority</TableHead>
                    <TableHead>Feature</TableHead>
                    <TableHead>Acceptance Criteria</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="bg-green-500/5">
                    <TableCell><Badge className="bg-green-500/20 text-green-600 border-green-500/30">MUST</Badge></TableCell>
                    <TableCell className="font-medium">Partner Intake Form</TableCell>
                    <TableCell>Typeform → Airtable; auto-creates Partner record; Slack notification to ops</TableCell>
                  </TableRow>
                  <TableRow className="bg-green-500/5">
                    <TableCell><Badge className="bg-green-500/20 text-green-600 border-green-500/30">MUST</Badge></TableCell>
                    <TableCell className="font-medium">Pod Tracker (Kanban)</TableCell>
                    <TableCell>Columns: Scoping → Active → Delivered → Invoiced; links to GitHub repo; shows burn rate</TableCell>
                  </TableRow>
                  <TableRow className="bg-green-500/5">
                    <TableCell><Badge className="bg-green-500/20 text-green-600 border-green-500/30">MUST</Badge></TableCell>
                    <TableCell className="font-medium">Distribution Sprint Board</TableCell>
                    <TableCell>14-day countdown; intro queue with status (sent/accepted/meeting/pilot); conversion funnel visible</TableCell>
                  </TableRow>
                  <TableRow className="bg-green-500/5">
                    <TableCell><Badge className="bg-green-500/20 text-green-600 border-green-500/30">MUST</Badge></TableCell>
                    <TableCell className="font-medium">Revenue Ledger</TableCell>
                    <TableCell>Logs invoices, payments, success fees; shows MRR, ARR, outstanding; exportable CSV</TableCell>
                  </TableRow>
                  <TableRow className="bg-green-500/5">
                    <TableCell><Badge className="bg-green-500/20 text-green-600 border-green-500/30">MUST</Badge></TableCell>
                    <TableCell className="font-medium">Basic ROI Snapshot</TableCell>
                    <TableCell>Per-partner: devs onboarded, pilots closed, revenue attributed; PDF export for partner decks</TableCell>
                  </TableRow>
                  <TableRow className="bg-yellow-500/5">
                    <TableCell><Badge className="bg-yellow-500/20 text-yellow-600 border-yellow-500/30">SHOULD</Badge></TableCell>
                    <TableCell className="font-medium">Customer Council CRM</TableCell>
                    <TableCell>Contact list with tags (sector, size, stage); session log; insight tagging</TableCell>
                  </TableRow>
                  <TableRow className="bg-yellow-500/5">
                    <TableCell><Badge className="bg-yellow-500/20 text-yellow-600 border-yellow-500/30">SHOULD</Badge></TableCell>
                    <TableCell className="font-medium">Event ROI Tracker</TableCell>
                    <TableCell>Links Mini Hacks/hackathons to downstream pilots and hires; proves event spend ROI</TableCell>
                  </TableRow>
                  <TableRow className="bg-blue-500/5">
                    <TableCell><Badge className="bg-blue-500/20 text-blue-600 border-blue-500/30">COULD</Badge></TableCell>
                    <TableCell className="font-medium">Talent Pool</TableCell>
                    <TableCell>Dev profiles with skills, availability, past pods; matchmaking score</TableCell>
                  </TableRow>
                  <TableRow className="bg-blue-500/5">
                    <TableCell><Badge className="bg-blue-500/20 text-blue-600 border-blue-500/30">COULD</Badge></TableCell>
                    <TableCell className="font-medium">Partner Portal (self-serve)</TableCell>
                    <TableCell>Login; view pod progress, invoices, ROI dashboard; request new sprint</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </section>

          <Separator />

          {/* 4. Core Workflows */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">4</span>
              Core Workflows
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card/50 border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    (A) 14-Day Distribution Sprint
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="flex gap-3"><span className="font-mono text-primary">D0</span> Kick-off: align ICP, value prop, intro templates</div>
                  <div className="flex gap-3"><span className="font-mono text-primary">D1-3</span> FOEG curates 30 warm targets from Buyer Network</div>
                  <div className="flex gap-3"><span className="font-mono text-primary">D4-7</span> Send 20 intros; track opens, replies, meetings booked</div>
                  <div className="flex gap-3"><span className="font-mono text-primary">D8-10</span> Run discovery calls; log insights in CRM</div>
                  <div className="flex gap-3"><span className="font-mono text-primary">D11-13</span> Push top 5 to pilot proposal; negotiate terms</div>
                  <div className="flex gap-3"><span className="font-mono text-primary">D14</span> Sprint retro: conversion funnel, learnings, next sprint scope</div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Users className="w-5 h-5 text-secondary" />
                    (B) 6–8 Week Build Pod
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="flex gap-3"><span className="font-mono text-secondary">W0</span> Scoping: problem statement, success metrics, tech stack</div>
                  <div className="flex gap-3"><span className="font-mono text-secondary">W1</span> Squad formation: 2 devs + 1 PM + 1 designer (as needed)</div>
                  <div className="flex gap-3"><span className="font-mono text-secondary">W2-3</span> Sprint 1: core features; weekly demo to partner</div>
                  <div className="flex gap-3"><span className="font-mono text-secondary">W4-5</span> Sprint 2: integrations, testnet deploy</div>
                  <div className="flex gap-3"><span className="font-mono text-secondary">W6-7</span> Sprint 3: bug fixes, mainnet deploy, docs</div>
                  <div className="flex gap-3"><span className="font-mono text-secondary">W8</span> Handoff: code repo, runbook, 2-week support window</div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-accent" />
                    (C) ROI Scoreboard Reporting
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="flex gap-3"><span className="font-mono text-accent">Weekly</span> Auto-pull: GitHub commits, wallet activations, event attendance</div>
                  <div className="flex gap-3"><span className="font-mono text-accent">Bi-weekly</span> Ops review: flag stalled pods, low-conversion sprints</div>
                  <div className="flex gap-3"><span className="font-mono text-accent">Monthly</span> Partner snapshot: PDF with KPIs, trends, recommendations</div>
                  <div className="flex gap-3"><span className="font-mono text-accent">Quarterly</span> Board deck: aggregate ROI across all partners; case studies</div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-foeg-gold" />
                    (D) Customer Council Recruitment
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="flex gap-3"><span className="font-mono text-foeg-gold">Step 1</span> Define buyer profile (sector, company size, role)</div>
                  <div className="flex gap-3"><span className="font-mono text-foeg-gold">Step 2</span> Source 20 candidates via FOEG network + LinkedIn</div>
                  <div className="flex gap-3"><span className="font-mono text-foeg-gold">Step 3</span> Qualify: 15-min screening call; confirm fit</div>
                  <div className="flex gap-3"><span className="font-mono text-foeg-gold">Step 4</span> Onboard 8–10 council members; schedule monthly sessions</div>
                  <div className="flex gap-3"><span className="font-mono text-foeg-gold">Step 5</span> Run 60-min facilitated session; capture insights in Notion</div>
                  <div className="flex gap-3"><span className="font-mono text-foeg-gold">Step 6</span> Synthesize insights → product recommendations → partner deck</div>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          {/* 5. Data Model */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">5</span>
              Data Model (Lightweight Schema)
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "Partners", fields: ["id", "name", "type (protocol/startup/corp)", "tier", "contract_value", "start_date", "status"] },
                { name: "Intros", fields: ["id", "partner_id", "target_company", "contact_email", "status (sent/replied/meeting/pilot/closed)", "value"] },
                { name: "Pilots", fields: ["id", "partner_id", "customer_id", "start_date", "end_date", "revenue", "status", "notes"] },
                { name: "Squads (Pods)", fields: ["id", "partner_id", "name", "members[]", "start_date", "end_date", "budget", "status", "repo_url"] },
                { name: "Users", fields: ["id", "email", "role (founder/partner/operator)", "org_id", "created_at"] },
                { name: "Cohorts", fields: ["id", "name", "type (hackathon/mini-hack/training)", "start_date", "partner_id", "participants[]"] },
                { name: "Metrics", fields: ["id", "partner_id", "date", "metric_type", "value", "source"] },
                { name: "Revenue", fields: ["id", "partner_id", "type (retainer/success_fee/sprint)", "amount", "date", "status (invoiced/paid)"] },
              ].map((entity) => (
                <Card key={entity.name} className="bg-card/50 border-border/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-mono text-primary">{entity.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-xs space-y-1 text-muted-foreground font-mono">
                      {entity.fields.map((f) => (
                        <li key={f}>• {f}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <Separator />

          {/* 6. Architecture */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">6</span>
              Architecture
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card/50 border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">Start in Notion/Sheets (Week 1–4)</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-2">
                  <p>• <strong>Airtable</strong>: Partner CRM, Intro tracker, Revenue ledger</p>
                  <p>• <strong>Notion</strong>: Pod wikis, Customer Council notes, Playbooks</p>
                  <p>• <strong>Google Sheets</strong>: ROI snapshot templates, financial models</p>
                  <p>• <strong>Slack + Zapier</strong>: Notifications, intake form routing</p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">Code-First (Week 5+)</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-2">
                  <p>• <strong>Auth</strong>: Supabase Auth (email + Google SSO)</p>
                  <p>• <strong>Database</strong>: Supabase Postgres + RLS</p>
                  <p>• <strong>Frontend</strong>: React + Tailwind (this app!)</p>
                  <p>• <strong>Analytics</strong>: PostHog (product), Metabase (ops dashboards)</p>
                  <p>• <strong>Payments</strong>: Paystack (Kenya), Stripe (international)</p>
                  <p>• <strong>Integrations</strong>: GitHub API, Luma API, Airtable sync</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          {/* 7. Metrics */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">7</span>
              30/60/90-Day KPIs
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg">30 Days</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-3">
                  <div><strong>Time-to-First-Intro:</strong> ≤ 3 days from partner sign</div>
                  <div><strong>Intro Acceptance Rate:</strong> intros_accepted / intros_sent ≥ 40%</div>
                  <div><strong>Pod Kick-off Velocity:</strong> ≤ 7 days from contract to Sprint 1</div>
                </CardContent>
              </Card>
              <Card className="bg-secondary/5 border-secondary/20">
                <CardHeader>
                  <CardTitle className="text-lg">60 Days</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-3">
                  <div><strong>Pilot Conversion:</strong> pilots_closed / meetings_held ≥ 30%</div>
                  <div><strong>Pod Delivery Rate:</strong> pods_delivered_on_time / pods_started ≥ 80%</div>
                  <div><strong>Partner NPS:</strong> survey score ≥ 50</div>
                </CardContent>
              </Card>
              <Card className="bg-accent/5 border-accent/20">
                <CardHeader>
                  <CardTitle className="text-lg">90 Days</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-3">
                  <div><strong>Revenue per Partner:</strong> total_revenue / active_partners ≥ $15K</div>
                  <div><strong>Partner Retention:</strong> partners_renewed / partners_eligible ≥ 70%</div>
                  <div><strong>CAC Proxy:</strong> (events_cost + sales_time) / new_partners ≤ $2K</div>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          {/* 8. Risks + Mitigations */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">8</span>
              Top 10 Africa GTM Risks & Mitigations
            </h2>
            <div className="space-y-3">
              {[
                { risk: "FX volatility (KES/USD swings)", mitigation: "Price in USD; collect in stablecoins or Paystack multi-currency; hedge with 30-day invoice windows" },
                { risk: "Payment rail failures (M-Pesa limits, bank delays)", mitigation: "Dual-rail: Paystack + crypto off-ramp; milestone-based billing reduces exposure" },
                { risk: "Regulatory uncertainty (crypto, fintech licensing)", mitigation: "Partner with local counsel; offer 'compliance readiness' not legal advice; pause pilots in high-risk jurisdictions" },
                { risk: "Talent churn (devs poached by clients)", mitigation: "Non-solicit clauses; equity-like upside via success fees; build bench depth (2 backups per pod)" },
                { risk: "Partner non-payment (grant delays, budget freezes)", mitigation: "50% upfront, 50% on delivery; pause work after 14-day overdue; credit insurance for >$50K deals" },
                { risk: "Scope creep (pods become open-ended consulting)", mitigation: "Fixed 8-week pods; change requests = new SOW; weekly demos enforce scope" },
                { risk: "Low buyer density (small addressable market per sector)", mitigation: "Start with fintech + agri-tech (largest pools); cross-sell across partner portfolios" },
                { risk: "Event ROI skepticism (sponsors want proof)", mitigation: "Track hackathon → pilot → revenue attribution; publish case studies within 60 days" },
                { risk: "Data privacy (GDPR-like Kenya Data Protection Act)", mitigation: "DPA-compliant consent flows; data stored in-region (GCP Nairobi); annual audit" },
                { risk: "Political/macro shocks (election disruption, currency controls)", mitigation: "Diversify to 3+ EAC countries by Month 6; maintain 3-month runway buffer" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-lg bg-card/50 border border-border/50">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-destructive/20 text-destructive flex items-center justify-center text-xs font-bold">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm mb-1">{item.risk}</p>
                    <p className="text-sm text-muted-foreground">{item.mitigation}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <Separator />

          {/* 9. Launch Plan */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">9</span>
              Kenya Launch Plan: 3 Sector Pilots
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-card/50 border-border/50">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-green-500/20 text-green-600 border-green-500/30">Pilot 1</Badge>
                  <CardTitle>Fintech / DeFi</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-2">
                  <p><strong>Partner:</strong> L1 chain with Africa grant program</p>
                  <p><strong>Deliverable:</strong> 2 Build Pods (mobile wallet, merchant POS)</p>
                  <p><strong>Distribution:</strong> 10 SACCO intros via FOEG network</p>
                  <p><strong>Timeline:</strong> Weeks 1–10</p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border/50">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-blue-500/20 text-blue-600 border-blue-500/30">Pilot 2</Badge>
                  <CardTitle>Agri-Tech</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-2">
                  <p><strong>Partner:</strong> Climate-focused protocol + agri-SaaS startup</p>
                  <p><strong>Deliverable:</strong> 1 Build Pod (supply-chain traceability)</p>
                  <p><strong>Distribution:</strong> 5 exporter intros; Customer Council with 8 farmers</p>
                  <p><strong>Timeline:</strong> Weeks 4–14</p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border/50">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-purple-500/20 text-purple-600 border-purple-500/30">Pilot 3</Badge>
                  <CardTitle>Gaming / Creator Economy</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-2">
                  <p><strong>Partner:</strong> Gaming SDK + local game studio</p>
                  <p><strong>Deliverable:</strong> Mini Hack (Dojo Game Jam VIII) + 1 Build Pod</p>
                  <p><strong>Distribution:</strong> 500 players onboarded via campus activations</p>
                  <p><strong>Timeline:</strong> Weeks 6–16</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle>Repeatable Market-Entry Recipe</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="text-sm space-y-2 list-decimal list-inside">
                  <li><strong>Week 0:</strong> Partner intake → scoping call → sign LOI</li>
                  <li><strong>Week 1:</strong> Customer Council recruitment (8–10 buyers in vertical)</li>
                  <li><strong>Week 2:</strong> Distribution Sprint #1 (10 intros, 2 meetings)</li>
                  <li><strong>Week 3–4:</strong> Build Pod kick-off (if product work needed)</li>
                  <li><strong>Week 5–6:</strong> First pilot LOI signed; compliance checklist started</li>
                  <li><strong>Week 7–8:</strong> Pilot live; ROI snapshot v1 delivered</li>
                  <li><strong>Week 9–10:</strong> Retro + renewal negotiation; case study drafted</li>
                  <li><strong>Week 11+:</strong> Expand to next vertical or next EAC country</li>
                </ol>
              </CardContent>
            </Card>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blueprint;
