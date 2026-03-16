import{r as N,j as e}from"./iframe-DLrn8Gk9.js";import{C as i}from"./Card-C3ibiQrZ.js";import{L as F,C as q,a as D,i as O,p as R,b as S,c as P,P as $,d as V}from"./index-BGpH2VoH.js";import{T as I}from"./Typography-CHpAwWZY.js";import{r as o,c as W}from"./index-CwGTy2we.js";import"./preload-helper-PPVm8Dsz.js";import"./compiler-runtime-DxXHijtq.js";q.register(D,O,R,S,P,$,V);const n=["--color-aurora-500","--color-rose-500","--color-violet-500","--color-emerald-500","--color-sky-500","--color-teal-500","--color-amber-500","--color-fuchsia-500","--color-indigo-500","--color-cyan-500"],r=({title:a,titleProps:k,labels:g,datasets:p,yAxisFormatter:u,showLegend:b,height:T=300,smooth:x=!0,axisColor:c="#9F9FA9",gridColor:l="#45556C",showGrid:y=!0,lineWidth:C=2,showAxisBorder:f=!1,tooltipTextColor:h=o("--color-metal-100"),className:A})=>{const w=b!==void 0?b:p.length>1,L=N.useMemo(()=>({labels:g,datasets:p.map((t,s)=>({label:t.label,data:t.data,borderColor:t.color??o(n[s%n.length]),backgroundColor:t.color??o(n[s%n.length]),borderDash:t.borderDash,borderWidth:C,pointRadius:0,pointHoverRadius:4,tension:x?.3:0,fill:!1}))}),[g,p,x,C]),j=N.useMemo(()=>({responsive:!0,maintainAspectRatio:!1,onHover:(t,s)=>{const v=t.native?.target;v&&(v.style.cursor=s.length>0?"pointer":"default")},interaction:{mode:"index",intersect:!1},plugins:{legend:{display:w,position:"top",align:"end",labels:{color:"#9FAFBC",font:{size:12,weight:500},usePointStyle:!0,pointStyle:"line",boxWidth:24,padding:16}},tooltip:{enabled:!0,backgroundColor:o("--color-metal-700"),titleColor:h,bodyColor:h,boxPadding:6,callbacks:{labelTextColor:()=>h}}},scales:{x:{grid:{color:"transparent"},ticks:{color:c,font:{size:12}},border:{display:f,color:l}},y:{grid:{color:y?l:"transparent"},ticks:{color:c,font:{size:12},callback:u?t=>u(t):void 0},border:{display:f,color:l}}}}),[w,u,c,l,y,f]);return e.jsxs("div",{className:W("w-full",A),children:[a&&e.jsx(I,{variant:"subtitle2",className:"mb-6",...k,children:a}),e.jsx("div",{style:{height:T},children:e.jsx(F,{"aria-label":a??"Line chart",data:L,options:j})})]})};r.__docgenInfo={description:`A line chart component for time-series data visualization.
Built on Chart.js with support for single and multi-line datasets.

@example
\`\`\`tsx
<LineChart
  title="Disk Usage %"
  labels={['11:20', '11:25', '11:30']}
  datasets={[{ label: 'Usage', data: [6, 3, 8, 5] }]}
  yAxisFormatter={(v) => \`\${v}%\`}
/>
\`\`\``,methods:[],displayName:"LineChart",props:{title:{required:!1,tsType:{name:"string"},description:"Chart title text"},titleProps:{required:!1,tsType:{name:"Partial",elements:[{name:"Omit",elements:[{name:"TypographyProps"},{name:"union",raw:"'children' | 'ref'",elements:[{name:"literal",value:"'children'"},{name:"literal",value:"'ref'"}]}],raw:"Omit<TypographyProps, 'children' | 'ref'>"}],raw:"Partial<Omit<TypographyProps, 'children' | 'ref'>>"},description:"Props passed to the Typography component used for the title"},labels:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"X-axis labels (e.g. time values)"},datasets:{required:!0,tsType:{name:"Array",elements:[{name:"LineChartDataset"}],raw:"LineChartDataset[]"},description:"One or more datasets (lines)"},yAxisFormatter:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => string",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"string"}}},description:"Y-axis tick formatter (e.g. value => `${value}%`)"},showLegend:{required:!1,tsType:{name:"boolean"},description:"Show legend (auto-shown when datasets > 1)"},height:{required:!1,tsType:{name:"number"},description:"Chart height in px (default: 300)",defaultValue:{value:"300",computed:!1}},smooth:{required:!1,tsType:{name:"boolean"},description:"Smooth lines (default: true). Set to false for straight/rigid lines",defaultValue:{value:"true",computed:!1}},axisColor:{required:!1,tsType:{name:"string"},description:"Color for axis tick labels (default: '#9F9FA9')",defaultValue:{value:"'#9F9FA9'",computed:!1}},gridColor:{required:!1,tsType:{name:"string"},description:"Color for grid lines (default: '#45556C')",defaultValue:{value:"'#45556C'",computed:!1}},showGrid:{required:!1,tsType:{name:"boolean"},description:"Show horizontal grid lines (default: true)",defaultValue:{value:"true",computed:!1}},lineWidth:{required:!1,tsType:{name:"number"},description:"Line thickness in px (default: 2)",defaultValue:{value:"2",computed:!1}},showAxisBorder:{required:!1,tsType:{name:"boolean"},description:"Show axis border lines (default: false)",defaultValue:{value:"false",computed:!1}},tooltipTextColor:{required:!1,tsType:{name:"string"},description:"Tooltip text color (default: metal-100)",defaultValue:{value:"resolveColor('--color-metal-100')",computed:!0}},className:{required:!1,tsType:{name:"string"},description:"Additional className for wrapper"}}};const H={title:"In Review/LineChart/Dark",component:r},d=["11:20","11:21","11:22","11:23","11:24","11:25","11:26","11:27","11:28","11:29","11:30"],m={parameters:{theme:"dark"},render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsx(i,{wrapperClassName:"w-1/2 max-md:w-full",className:"p-6",children:e.jsx(r,{title:"Disk Usage %",labels:d,datasets:[{label:"Usage",data:[6,7,6.5,3,2.5,10,7,8,5,6,4.5]}],height:200,yAxisFormatter:a=>`${a}%`})}),e.jsx(i,{wrapperClassName:"w-1/2 max-md:w-full",className:"p-6",children:e.jsx(r,{title:"Disk I/O",labels:d,datasets:[{label:"Read",data:[8,8.5,7,9,8,8.5,7.5,8,9,8,8.5]},{label:"Write",data:[3,2.5,3,2,3,2.5,2,3,2.5,2,3]}],height:200,yAxisFormatter:a=>`${a}%`})}),e.jsx(i,{wrapperClassName:"w-1/2 max-md:w-full",className:"p-6",children:e.jsx(r,{title:"Disk I/O (Rigid)",labels:d,datasets:[{label:"Read",data:[8,8.5,7,9,8,8.5,7.5,8,9,8,8.5]},{label:"Write",data:[3,2.5,3,2,3,2.5,2,3,2.5,2,3]}],smooth:!1,height:200,yAxisFormatter:a=>`${a}%`})}),e.jsx(i,{wrapperClassName:"w-1/2 max-md:w-full",className:"p-6",children:e.jsx(r,{title:"Network Traffic",labels:d,datasets:[{label:"Inbound",data:[12,15,11,14,13,16,12,15,14,13,11]},{label:"Outbound",data:[5,6,4.5,7,5.5,6,5,7,6.5,5,4]},{label:"Errors",data:[1,.5,2,1.5,1,.8,1.2,.5,1,1.5,.7]}],showGrid:!1,showAxisBorder:!0,lineWidth:1,height:200,yAxisFormatter:a=>`${a} MB/s`})})]})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    theme: 'dark'
  },
  render: () => {
    return <div className="flex flex-col gap-6">
        <Card wrapperClassName="w-1/2 max-md:w-full" className="p-6">
          <LineChartComponent title="Disk Usage %" labels={labels} datasets={[{
          label: 'Usage',
          data: [6, 7, 6.5, 3, 2.5, 10, 7, 8, 5, 6, 4.5]
        }]} height={200} yAxisFormatter={v => {
          return \`\${v}%\`;
        }} />
        </Card>
        <Card wrapperClassName="w-1/2 max-md:w-full" className="p-6">
          <LineChartComponent title="Disk I/O" labels={labels} datasets={[{
          label: 'Read',
          data: [8, 8.5, 7, 9, 8, 8.5, 7.5, 8, 9, 8, 8.5]
        }, {
          label: 'Write',
          data: [3, 2.5, 3, 2, 3, 2.5, 2, 3, 2.5, 2, 3]
        }]} height={200} yAxisFormatter={v => {
          return \`\${v}%\`;
        }} />
        </Card>
        <Card wrapperClassName="w-1/2 max-md:w-full" className="p-6">
          <LineChartComponent title="Disk I/O (Rigid)" labels={labels} datasets={[{
          label: 'Read',
          data: [8, 8.5, 7, 9, 8, 8.5, 7.5, 8, 9, 8, 8.5]
        }, {
          label: 'Write',
          data: [3, 2.5, 3, 2, 3, 2.5, 2, 3, 2.5, 2, 3]
        }]} smooth={false} height={200} yAxisFormatter={v => {
          return \`\${v}%\`;
        }} />
        </Card>
        <Card wrapperClassName="w-1/2 max-md:w-full" className="p-6">
          <LineChartComponent title="Network Traffic" labels={labels} datasets={[{
          label: 'Inbound',
          data: [12, 15, 11, 14, 13, 16, 12, 15, 14, 13, 11]
        }, {
          label: 'Outbound',
          data: [5, 6, 4.5, 7, 5.5, 6, 5, 7, 6.5, 5, 4]
        }, {
          label: 'Errors',
          data: [1, 0.5, 2, 1.5, 1, 0.8, 1.2, 0.5, 1, 1.5, 0.7]
        }]} showGrid={false} showAxisBorder lineWidth={1} height={200} yAxisFormatter={v => {
          return \`\${v} MB/s\`;
        }} />
        </Card>
      </div>;
  }
}`,...m.parameters?.docs?.source}}};const X=["Dark"];export{m as Dark,X as __namedExportsOrder,H as default};
