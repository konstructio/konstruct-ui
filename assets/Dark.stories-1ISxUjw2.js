import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{i as r,o as i,t as a}from"./utils-0TJZseot.js";import{n as o,t as s}from"./Typography-Dr4qxqZo.js";import{n as c,t as l}from"./Card-MSK6p7wc.js";import{a as u,c as d,d as f,f as p,l as m,n as h,o as g,p as _,r as v,s as y,u as b}from"./dist-DmmcZTDZ.js";var x,S,C,w;function T(){return(T=e((()=>{f(),x=t(),v(),o(),r(),S=n(),g.register(u,b,p,d,y,m,_),C=[`--color-aurora-500`,`--color-rose-500`,`--color-violet-500`,`--color-emerald-500`,`--color-sky-500`,`--color-teal-500`,`--color-amber-500`,`--color-fuchsia-500`,`--color-indigo-500`,`--color-cyan-500`],w=({title:e,titleProps:t,labels:n,datasets:r,yAxisFormatter:o,showLegend:c,height:l=300,smooth:u=!0,axisColor:d=`#9F9FA9`,gridColor:f=`#45556C`,showGrid:p=!0,lineWidth:m=2,showAxisBorder:g=!1,tooltipTextColor:_=i(`--color-metal-100`),className:v})=>{let y=c===void 0?r.length>1:c,b=(0,x.useMemo)(()=>({labels:n,datasets:r.map((e,t)=>({label:e.label,data:e.data,borderColor:e.color??i(C[t%C.length]),backgroundColor:e.color??i(C[t%C.length]),borderDash:e.borderDash,borderWidth:m,pointRadius:0,pointHoverRadius:4,tension:u?.3:0,fill:!1}))}),[n,r,u,m]),w=(0,x.useMemo)(()=>({responsive:!0,maintainAspectRatio:!1,onHover:(e,t)=>{let n=e.native?.target;n&&(n.style.cursor=t.length>0?`pointer`:`default`)},interaction:{mode:`index`,intersect:!1},plugins:{legend:{display:y,position:`top`,align:`end`,labels:{color:`#9FAFBC`,font:{size:12,weight:500},usePointStyle:!0,pointStyle:`line`,boxWidth:24,padding:16}},tooltip:{enabled:!0,backgroundColor:i(`--color-metal-700`),titleColor:_,bodyColor:_,boxPadding:6,callbacks:{labelTextColor:()=>_}}},scales:{x:{grid:{color:`transparent`},ticks:{color:d,font:{size:12}},border:{display:g,color:f}},y:{grid:{color:p?f:`transparent`},ticks:{color:d,font:{size:12},callback:o?e=>o(e):void 0},border:{display:g,color:f}}}}),[y,o,d,f,p,g]);return(0,S.jsxs)(`div`,{className:a(`w-full`,v),children:[e&&(0,S.jsx)(s,{variant:`subtitle2`,className:`mb-6`,...t,children:e}),(0,S.jsx)(`div`,{style:{height:l},children:(0,S.jsx)(h,{"aria-label":e??`Line chart`,data:b,options:w})})]})},w.__docgenInfo={description:`A line chart component for time-series data visualization.
Built on Chart.js with support for single and multi-line datasets.

@example
\`\`\`tsx
<LineChart
  title="Disk Usage %"
  labels={['11:20', '11:25', '11:30']}
  datasets={[{ label: 'Usage', data: [6, 3, 8, 5] }]}
  yAxisFormatter={(v) => \`\${v}%\`}
/>
\`\`\``,methods:[],displayName:`LineChart`,props:{title:{required:!1,tsType:{name:`string`},description:`Chart title text`},titleProps:{required:!1,tsType:{name:`Partial`,elements:[{name:`Omit`,elements:[{name:`TypographyProps`},{name:`union`,raw:`'children' | 'ref'`,elements:[{name:`literal`,value:`'children'`},{name:`literal`,value:`'ref'`}]}],raw:`Omit<TypographyProps, 'children' | 'ref'>`}],raw:`Partial<Omit<TypographyProps, 'children' | 'ref'>>`},description:`Props passed to the Typography component used for the title`},labels:{required:!0,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:`X-axis labels (e.g. time values)`},datasets:{required:!0,tsType:{name:`Array`,elements:[{name:`LineChartDataset`}],raw:`LineChartDataset[]`},description:`One or more datasets (lines)`},yAxisFormatter:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: number) => string`,signature:{arguments:[{type:{name:`number`},name:`value`}],return:{name:`string`}}},description:"Y-axis tick formatter (e.g. value => `${value}%`)"},showLegend:{required:!1,tsType:{name:`boolean`},description:`Show legend (auto-shown when datasets > 1)`},height:{required:!1,tsType:{name:`number`},description:`Chart height in px (default: 300)`,defaultValue:{value:`300`,computed:!1}},smooth:{required:!1,tsType:{name:`boolean`},description:`Smooth lines (default: true). Set to false for straight/rigid lines`,defaultValue:{value:`true`,computed:!1}},axisColor:{required:!1,tsType:{name:`string`},description:`Color for axis tick labels (default: '#9F9FA9')`,defaultValue:{value:`'#9F9FA9'`,computed:!1}},gridColor:{required:!1,tsType:{name:`string`},description:`Color for grid lines (default: '#45556C')`,defaultValue:{value:`'#45556C'`,computed:!1}},showGrid:{required:!1,tsType:{name:`boolean`},description:`Show horizontal grid lines (default: true)`,defaultValue:{value:`true`,computed:!1}},lineWidth:{required:!1,tsType:{name:`number`},description:`Line thickness in px (default: 2)`,defaultValue:{value:`2`,computed:!1}},showAxisBorder:{required:!1,tsType:{name:`boolean`},description:`Show axis border lines (default: false)`,defaultValue:{value:`false`,computed:!1}},tooltipTextColor:{required:!1,tsType:{name:`string`},description:`Tooltip text color (default: metal-100)`,defaultValue:{value:`resolveColor('--color-metal-100')`,computed:!0}},className:{required:!1,tsType:{name:`string`},description:`Additional className for wrapper`}}}})))()}var E,D,O,k,A;function j(){return(j=e((()=>{c(),T(),E=n(),D={title:`In Review/LineChart/Dark`,component:w},O=[`11:20`,`11:21`,`11:22`,`11:23`,`11:24`,`11:25`,`11:26`,`11:27`,`11:28`,`11:29`,`11:30`],k={parameters:{theme:`dark`},render:()=>(0,E.jsxs)(`div`,{className:`flex flex-col gap-6`,children:[(0,E.jsx)(l,{wrapperClassName:`w-1/2 max-md:w-full`,className:`p-6`,children:(0,E.jsx)(w,{title:`Disk Usage %`,labels:O,datasets:[{label:`Usage`,data:[6,7,6.5,3,2.5,10,7,8,5,6,4.5]}],height:200,yAxisFormatter:e=>`${e}%`})}),(0,E.jsx)(l,{wrapperClassName:`w-1/2 max-md:w-full`,className:`p-6`,children:(0,E.jsx)(w,{title:`Disk I/O`,labels:O,datasets:[{label:`Read`,data:[8,8.5,7,9,8,8.5,7.5,8,9,8,8.5]},{label:`Write`,data:[3,2.5,3,2,3,2.5,2,3,2.5,2,3]}],height:200,yAxisFormatter:e=>`${e}%`})}),(0,E.jsx)(l,{wrapperClassName:`w-1/2 max-md:w-full`,className:`p-6`,children:(0,E.jsx)(w,{title:`Disk I/O (Rigid)`,labels:O,datasets:[{label:`Read`,data:[8,8.5,7,9,8,8.5,7.5,8,9,8,8.5]},{label:`Write`,data:[3,2.5,3,2,3,2.5,2,3,2.5,2,3]}],smooth:!1,height:200,yAxisFormatter:e=>`${e}%`})}),(0,E.jsx)(l,{wrapperClassName:`w-1/2 max-md:w-full`,className:`p-6`,children:(0,E.jsx)(w,{title:`Network Traffic`,labels:O,datasets:[{label:`Inbound`,data:[12,15,11,14,13,16,12,15,14,13,11]},{label:`Outbound`,data:[5,6,4.5,7,5.5,6,5,7,6.5,5,4]},{label:`Errors`,data:[1,.5,2,1.5,1,.8,1.2,.5,1,1.5,.7]}],showGrid:!1,showAxisBorder:!0,lineWidth:1,height:200,yAxisFormatter:e=>`${e} MB/s`})})]})},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A=[`Dark`]})))()}j();export{k as Dark,A as __namedExportsOrder,D as default};