import{r as v,j as e}from"./iframe-DFGxwtFi.js";import{C as i}from"./Card-HSJZAnwT.js";import{L as j,C as F,a as q,i as D,p as O,b as R,c as S,P,d as $}from"./index-BoCCVReO.js";import{T as I}from"./Typography-DpIZzhjb.js";import{r as f,c as V}from"./index-CwGTy2we.js";import"./preload-helper-PPVm8Dsz.js";F.register(q,D,O,R,S,P,$);const o=["--color-aurora-500","--color-rose-500","--color-violet-500","--color-emerald-500","--color-sky-500","--color-teal-500","--color-amber-500","--color-fuchsia-500","--color-indigo-500","--color-cyan-500"],t=({title:a,titleProps:N,labels:h,datasets:m,yAxisFormatter:p,showLegend:g,height:k=300,smooth:b=!0,axisColor:u="#9F9FA9",gridColor:s="#45556C",showGrid:x=!0,lineWidth:y=2,showAxisBorder:c=!1,className:T})=>{const C=g!==void 0?g:m.length>1,A=v.useMemo(()=>({labels:h,datasets:m.map((r,l)=>({label:r.label,data:r.data,borderColor:r.color??f(o[l%o.length]),backgroundColor:r.color??f(o[l%o.length]),borderDash:r.borderDash,borderWidth:y,pointRadius:0,pointHoverRadius:4,tension:b?.3:0,fill:!1}))}),[h,m,b,y]),L=v.useMemo(()=>({responsive:!0,maintainAspectRatio:!1,onHover:(r,l)=>{const w=r.native?.target;w&&(w.style.cursor=l.length>0?"pointer":"default")},interaction:{mode:"index",intersect:!1},plugins:{legend:{display:C,position:"top",align:"end",labels:{color:"#9FAFBC",font:{size:12,weight:500},usePointStyle:!0,pointStyle:"line",boxWidth:24,padding:16}},tooltip:{enabled:!0,backgroundColor:f("--color-metal-700"),boxPadding:6,callbacks:{labelTextColor:r=>r.dataset.borderColor}}},scales:{x:{grid:{color:"transparent"},ticks:{color:u,font:{size:12}},border:{display:c,color:s}},y:{grid:{color:x?s:"transparent"},ticks:{color:u,font:{size:12},callback:p?r=>p(r):void 0},border:{display:c,color:s}}}}),[C,p,u,s,x,c]);return e.jsxs("div",{className:V("w-full",T),children:[a&&e.jsx(I,{variant:"subtitle2",className:"mb-6",...N,children:a}),e.jsx("div",{style:{height:k},children:e.jsx(j,{"aria-label":a??"Line chart",data:A,options:L})})]})};t.__docgenInfo={description:`A line chart component for time-series data visualization.
Built on Chart.js with support for single and multi-line datasets.

@example
\`\`\`tsx
<LineChart
  title="Disk Usage %"
  labels={['11:20', '11:25', '11:30']}
  datasets={[{ label: 'Usage', data: [6, 3, 8, 5] }]}
  yAxisFormatter={(v) => \`\${v}%\`}
/>
\`\`\``,methods:[],displayName:"LineChart",props:{title:{required:!1,tsType:{name:"string"},description:"Chart title text"},titleProps:{required:!1,tsType:{name:"Partial",elements:[{name:"Omit",elements:[{name:"TypographyProps"},{name:"union",raw:"'children' | 'ref'",elements:[{name:"literal",value:"'children'"},{name:"literal",value:"'ref'"}]}],raw:"Omit<TypographyProps, 'children' | 'ref'>"}],raw:"Partial<Omit<TypographyProps, 'children' | 'ref'>>"},description:"Props passed to the Typography component used for the title"},labels:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"X-axis labels (e.g. time values)"},datasets:{required:!0,tsType:{name:"Array",elements:[{name:"LineChartDataset"}],raw:"LineChartDataset[]"},description:"One or more datasets (lines)"},yAxisFormatter:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => string",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"string"}}},description:"Y-axis tick formatter (e.g. value => `${value}%`)"},showLegend:{required:!1,tsType:{name:"boolean"},description:"Show legend (auto-shown when datasets > 1)"},height:{required:!1,tsType:{name:"number"},description:"Chart height in px (default: 300)",defaultValue:{value:"300",computed:!1}},smooth:{required:!1,tsType:{name:"boolean"},description:"Smooth lines (default: true). Set to false for straight/rigid lines",defaultValue:{value:"true",computed:!1}},axisColor:{required:!1,tsType:{name:"string"},description:"Color for axis tick labels (default: '#9F9FA9')",defaultValue:{value:"'#9F9FA9'",computed:!1}},gridColor:{required:!1,tsType:{name:"string"},description:"Color for grid lines (default: '#45556C')",defaultValue:{value:"'#45556C'",computed:!1}},showGrid:{required:!1,tsType:{name:"boolean"},description:"Show horizontal grid lines (default: true)",defaultValue:{value:"true",computed:!1}},lineWidth:{required:!1,tsType:{name:"number"},description:"Line thickness in px (default: 2)",defaultValue:{value:"2",computed:!1}},showAxisBorder:{required:!1,tsType:{name:"boolean"},description:"Show axis border lines (default: false)",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional className for wrapper"}}};const M={title:"In Review/LineChart/Dark",component:t},n=["11:20","11:21","11:22","11:23","11:24","11:25","11:26","11:27","11:28","11:29","11:30"],d={parameters:{theme:"dark"},render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsx(i,{wrapperClassName:"w-1/2 max-md:w-full",className:"p-6",children:e.jsx(t,{title:"Disk Usage %",labels:n,datasets:[{label:"Usage",data:[6,7,6.5,3,2.5,10,7,8,5,6,4.5]}],height:200,yAxisFormatter:a=>`${a}%`})}),e.jsx(i,{wrapperClassName:"w-1/2 max-md:w-full",className:"p-6",children:e.jsx(t,{title:"Disk I/O",labels:n,datasets:[{label:"Read",data:[8,8.5,7,9,8,8.5,7.5,8,9,8,8.5]},{label:"Write",data:[3,2.5,3,2,3,2.5,2,3,2.5,2,3]}],height:200,yAxisFormatter:a=>`${a}%`})}),e.jsx(i,{wrapperClassName:"w-1/2 max-md:w-full",className:"p-6",children:e.jsx(t,{title:"Disk I/O (Rigid)",labels:n,datasets:[{label:"Read",data:[8,8.5,7,9,8,8.5,7.5,8,9,8,8.5]},{label:"Write",data:[3,2.5,3,2,3,2.5,2,3,2.5,2,3]}],smooth:!1,height:200,yAxisFormatter:a=>`${a}%`})}),e.jsx(i,{wrapperClassName:"w-1/2 max-md:w-full",className:"p-6",children:e.jsx(t,{title:"Network Traffic",labels:n,datasets:[{label:"Inbound",data:[12,15,11,14,13,16,12,15,14,13,11]},{label:"Outbound",data:[5,6,4.5,7,5.5,6,5,7,6.5,5,4]},{label:"Errors",data:[1,.5,2,1.5,1,.8,1.2,.5,1,1.5,.7]}],showGrid:!1,showAxisBorder:!0,lineWidth:1,height:200,yAxisFormatter:a=>`${a} MB/s`})})]})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const G=["Dark"];export{d as Dark,G as __namedExportsOrder,M as default};
