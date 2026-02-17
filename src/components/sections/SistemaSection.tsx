'use client';

import * as React from 'react';
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarSeparator,
} from '@/components/animate-ui/components/radix/sidebar';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/animate-ui/primitives/radix/collapsible';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Bar, BarChart, XAxis, PolarAngleAxis, RadialBar, RadialBarChart } from 'recharts';
import {
  CalendarDays,
  ChevronRight,
  Users,
  FileText,
  LayoutDashboard,
  DollarSign,
  Settings,
  Stethoscope,
  Bell,
  TrendingUp,
  TrendingDown,
  Building2,
  ArrowUpRight,
  Clock,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

// ─── Dados do menu ──────────────────────────────────────────────────────────

const DATA = {
  clinic: { name: 'Clinica Exemplo', plan: 'Profissional' },
  user: { name: 'Dra. Maria Silva', role: 'Administradora', initials: 'MS' },
  navMain: [
    {
      title: 'Agenda',
      icon: CalendarDays,
      isActive: true,
      items: [
        { title: 'Visao Geral' },
        { title: 'Por Profissional' },
        { title: 'Por Sala' },
        { title: 'Lista de Espera' },
      ],
    },
    {
      title: 'Pacientes',
      icon: Users,
      items: [
        { title: 'Cadastro' },
        { title: 'Buscar Paciente' },
      ],
    },
    {
      title: 'Prontuario',
      icon: FileText,
      items: [
        { title: 'Consultas' },
        { title: 'Prescricoes' },
      ],
    },
    {
      title: 'Financeiro',
      icon: DollarSign,
      items: [
        { title: 'Faturamento' },
        { title: 'Contas a Receber' },
      ],
    },
    {
      title: 'Configuracoes',
      icon: Settings,
      items: [
        { title: 'Clinica' },
        { title: 'Profissionais' },
      ],
    },
  ],
};

// ─── KPI data ───────────────────────────────────────────────────────────────

const kpis = [
  { label: 'Pacientes hoje', value: '24', change: '+12%', trend: 'up' as const, icon: Users },
  { label: 'Receita do dia', value: 'R$ 4.850', change: '+8%', trend: 'up' as const, icon: DollarSign },
  { label: 'Taxa ocupacao', value: '87%', change: '+5%', trend: 'up' as const, icon: CalendarDays },
  { label: 'Tempo medio', value: '28min', change: '-3min', trend: 'down' as const, icon: Clock },
];

// ─── Receita semanal ────────────────────────────────────────────────────────

const revenueData = [
  { day: 'Seg', receita: 3200, meta: 4000 },
  { day: 'Ter', receita: 4850, meta: 4000 },
  { day: 'Qua', receita: 3800, meta: 4000 },
  { day: 'Qui', receita: 5100, meta: 4000 },
  { day: 'Sex', receita: 4200, meta: 4000 },
  { day: 'Sab', receita: 2100, meta: 2000 },
];

const revenueConfig = {
  receita: { label: 'Receita', color: '#427CFA' },
  meta: { label: 'Meta', color: '#E2E8F0' },
} satisfies ChartConfig;

// ─── Ocupacao por sala ──────────────────────────────────────────────────────

const roomStats = [
  { name: 'Sala 1', capacity: 92, fill: '#427CFA' },
  { name: 'Sala 2', capacity: 78, fill: '#22C55E' },
  { name: 'Sala 3', capacity: 65, fill: '#F59E0B' },
];

const roomConfig = { capacity: { label: 'Ocupacao' } } satisfies ChartConfig;

// ─── Agenda ─────────────────────────────────────────────────────────────────

const agendaItems = [
  { time: '09:00', patient: 'Joao Santos', type: 'Consulta', status: 'done' },
  { time: '09:30', patient: 'Ana Oliveira', type: 'Retorno', status: 'done' },
  { time: '10:00', patient: 'Carlos Lima', type: 'Avaliacao', status: 'now' },
  { time: '10:30', patient: 'Maria Costa', type: 'Estetico', status: 'next' },
  { time: '11:00', patient: 'Pedro Souza', type: 'Consulta', status: 'pending' },
];

// ─── Dashboard Content ─────────────────────────────────────────────────────

function DashboardContent() {
  return (
    <div className="flex flex-1 flex-col gap-2.5 p-3 pt-0 overflow-hidden">
      {/* KPI Row */}
      <div className="grid grid-cols-4 gap-2">
        {kpis.map((kpi) => (
          <Card key={kpi.label} className="p-2.5 border-border/50">
            <CardContent className="p-0">
              <div className="flex items-center justify-between mb-1">
                <kpi.icon className="h-3.5 w-3.5 text-muted-foreground" />
                <span className={`text-[10px] font-medium flex items-center gap-0.5 ${kpi.trend === 'up' ? 'text-emerald-600' : 'text-blue-600'}`}>
                  {kpi.trend === 'up' ? <TrendingUp className="h-2.5 w-2.5" /> : <TrendingDown className="h-2.5 w-2.5" />}
                  {kpi.change}
                </span>
              </div>
              <p className="text-lg font-semibold text-foreground leading-none mb-0.5">{kpi.value}</p>
              <p className="text-[10px] text-muted-foreground">{kpi.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Middle Row: Chart + Rooms */}
      <div className="grid grid-cols-[minmax(420px,1.8fr)_170px] gap-2.5 flex-1 min-h-0">
        {/* Revenue Chart */}
        <Card className="p-3 border-border/50 flex flex-col">
          <CardContent className="p-0 flex-1 flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-xs font-medium text-foreground">Receita semanal</p>
                <p className="text-[10px] text-muted-foreground">vs. meta diaria</p>
              </div>
              <Badge variant="secondary" className="text-[10px] h-5 bg-emerald-50 text-emerald-700 border-emerald-200">
                <ArrowUpRight className="h-2.5 w-2.5 mr-0.5" />
                R$ 23.250
              </Badge>
            </div>
            <div className="flex-1 min-h-0 min-w-0">
              <ChartContainer config={revenueConfig} className="h-full w-full">
                <BarChart data={revenueData} barGap={6} margin={{ top: 5, right: 15, left: 15, bottom: 5 }}>
                  <XAxis 
                    dataKey="day" 
                    tickLine={false} 
                    axisLine={false} 
                    tick={{ fontSize: 10, fill: '#6B7280' }}
                    tickMargin={6}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="meta" fill="var(--color-meta)" radius={[3, 3, 0, 0]} barSize={12} />
                  <Bar dataKey="receita" fill="var(--color-receita)" radius={[3, 3, 0, 0]} barSize={12} />
                </BarChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>

        {/* Room Occupancy */}
        <Card className="p-3 border-border/50 flex flex-col">
          <CardContent className="p-0 flex-1 flex flex-col">
            <p className="text-xs font-medium text-foreground mb-2">Ocupacao por sala</p>
            <div className="flex-1 flex flex-col justify-center gap-3">
              {roomStats.map((room) => (
                <div key={room.name}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] text-foreground font-medium">{room.name}</span>
                    <span className="text-[11px] font-semibold" style={{ color: room.fill }}>{room.capacity}%</span>
                  </div>
                  <Progress value={room.capacity} className="h-1.5" style={{ '--progress-color': room.fill } as React.CSSProperties} />
                </div>
              ))}
            </div>
            <div className="mt-2 pt-2 border-t border-border/50">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-muted-foreground">Media geral</span>
                <span className="text-xs font-semibold text-foreground">78%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom: Agenda compact */}
      <Card className="p-3 border-border/50 shrink-0">
        <CardContent className="p-0">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-medium text-foreground">Agenda de hoje</p>
            <Badge variant="outline" className="text-[10px] h-5">
              <CalendarDays className="h-2.5 w-2.5 mr-1" />
              Ter, 10 Jun
            </Badge>
          </div>
          <div className="grid grid-cols-5 gap-1.5">
            {agendaItems.map((item) => (
              <div
                key={item.time}
                className={`rounded-lg px-2.5 py-2 text-center border ${
                  item.status === 'now' 
                    ? 'bg-[#427CFA]/10 border-[#427CFA]/30' 
                    : item.status === 'done'
                    ? 'bg-muted/50 border-border/50'
                    : 'bg-background border-border/50'
                }`}
              >
                <p className={`text-[10px] font-mono mb-0.5 ${item.status === 'now' ? 'text-[#427CFA] font-semibold' : 'text-muted-foreground'}`}>{item.time}</p>
                <p className={`text-[11px] font-medium leading-tight truncate ${item.status === 'done' ? 'text-muted-foreground' : 'text-foreground'}`}>{item.patient}</p>
                <div className="flex items-center justify-center gap-1 mt-0.5">
                  {item.status === 'done' && <CheckCircle2 className="h-2.5 w-2.5 text-emerald-500" />}
                  {item.status === 'now' && <AlertCircle className="h-2.5 w-2.5 text-[#427CFA]" />}
                  <span className="text-[9px] text-muted-foreground">{item.type}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// ─── Sidebar ────────────────────────────────────────────────────────────────

function ClinicSidebarDemo() {
  return (
    <SidebarProvider className="min-h-0 h-full">
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" className="cursor-default">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-[#427CFA] text-white">
                  <Building2 className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">{DATA.clinic.name}</span>
                  <span className="truncate text-xs text-muted-foreground">{DATA.clinic.plan}</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Gestao</SidebarGroupLabel>
            <SidebarMenu>
              {DATA.navMain.map((item) => (
                <Collapsible key={item.title} asChild defaultOpen={item.isActive} className="group/collapsible">
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton tooltip={item.title}>
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                        <ChevronRight className="ml-auto transition-transform duration-300 group-data-[state=open]/collapsible:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items?.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton asChild>
                              <span>{subItem.title}</span>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" className="cursor-default">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-muted text-muted-foreground text-xs font-semibold">
                  {DATA.user.initials}
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">{DATA.user.name}</span>
                  <span className="truncate text-xs text-muted-foreground">{DATA.user.role}</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>

      <SidebarInset className="min-h-0 h-full overflow-hidden">
        <header className="flex h-10 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-10">
          <div className="flex items-center gap-2 px-3">
            <SidebarTrigger className="-ml-1 h-7 w-7" />
            <Separator orientation="vertical" className="mr-2 h-4!" />
            <div className="flex items-center gap-1.5 text-xs">
              <span className="text-muted-foreground hidden md:inline">Gestao</span>
              <ChevronRight className="h-3 w-3 text-muted-foreground hidden md:inline" />
              <span className="font-medium">Dashboard</span>
            </div>
          </div>
          <div className="ml-auto flex items-center gap-2 px-3">
            <button className="relative p-1.5 rounded-md hover:bg-muted transition-colors">
              <Bell className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="absolute -top-0.5 -right-0.5 h-3 w-3 rounded-full bg-red-500 text-[8px] font-bold text-white flex items-center justify-center">3</span>
            </button>
          </div>
        </header>
        <DashboardContent />
      </SidebarInset>
    </SidebarProvider>
  );
}

// ─── Section ────────────────────────────────────────────────────────────────

export function SistemaSection() {
  return (
    <section id="sistema" className="relative py-16 lg:py-20 bg-[#F8FAFC]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <span
            className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-[#427CFA] mb-3"
            style={{ fontFamily: 'var(--font-dm-sans), system-ui, sans-serif' }}
          >
            Painel da sua operacao
          </span>
          <h2
            className="text-3xl sm:text-4xl font-normal tracking-tight text-[#1A1A2E] mb-3"
            style={{ fontFamily: 'var(--font-radio-grotesk), system-ui, sans-serif' }}
          >
            Tudo o que importa em uma tela
          </h2>
          <p
            className="max-w-xl mx-auto text-sm text-[#6B7280] leading-relaxed"
            style={{ fontFamily: 'var(--font-dm-sans), system-ui, sans-serif' }}
          >
            Agenda, financeiro, ocupacao e atendimentos. O painel que sua clinica precisa, sem menus infinitos.
          </p>
        </div>

        {/* Dashboard Container */}
        <div
          className="sidebar-demo-container relative mx-auto rounded-2xl border border-gray-200 shadow-xl overflow-hidden bg-white"
          style={{
            maxWidth: '1100px',
            height: 'min(650px, 72vh)',
            minHeight: '580px',
            transform: 'translate3d(0,0,0)',
          }}
        >
          <style>{`
            .sidebar-demo-container [data-slot="sidebar-container"] {
              height: 100% !important;
              max-height: 100% !important;
            }
            .sidebar-demo-container [data-slot="sidebar-gap"] {
              height: 100% !important;
            }
            .sidebar-demo-container .h-1\.5 {
              position: relative;
              overflow: hidden;
              background: #F1F5F9;
              border-radius: 999px;
            }
            .sidebar-demo-container .h-1\.5 > div {
              height: 100%;
              border-radius: 999px;
              background: var(--progress-color, #427CFA);
              transition: width 0.5s ease;
            }
          `}</style>
          <div className="h-full">
            <ClinicSidebarDemo />
          </div>
        </div>

        <p className="text-center text-xs text-[#6B7280] mt-5" style={{ fontFamily: 'var(--font-dm-sans), system-ui, sans-serif' }}>
          Interface real de um sistema construido sob medida. Cada modulo e adaptado para a sua clinica.
        </p>
      </div>
    </section>
  );
}
