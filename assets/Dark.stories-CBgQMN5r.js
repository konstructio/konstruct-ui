const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./LineChartContent-o9YVY-D2.js","./rolldown-runtime-BCiCTKAo.js","./react-BlIEEezU.js","./jsx-runtime-BB9-612F.js","./utils-DWfjJEhS.js","./Typography-DWBvCpi0.js","./dist-BIkUQYOj.js","./dist-CiWLnvGN.js"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{n as t,t as n}from"./preload-helper-DQzUoscV.js";import{t as r}from"./react-BlIEEezU.js";import{t as i}from"./jsx-runtime-BB9-612F.js";import{i as a,t as o}from"./utils-DWfjJEhS.js";import{n as s,t as c}from"./Typography-DWBvCpi0.js";import{n as l,t as u}from"./Card--NasiuVj.js";var d,f,p,m,h;function g(){return(g=e((()=>{d=r(),s(),a(),f=i(),t(),p=(0,d.lazy)(()=>n(()=>import(`./LineChartContent-o9YVY-D2.js`).then(e=>({default:e.LineChartContent})),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url)),m=({className:e,height:t=300,title:n,titleProps:r})=>(0,f.jsxs)(`div`,{className:o(`w-full`,e),"aria-busy":`true`,children:[n&&(0,f.jsx)(c,{variant:`subtitle2`,className:`mb-6`,...r,children:n}),(0,f.jsx)(`div`,{style:{height:t}})]}),h=e=>(0,f.jsx)(d.Suspense,{fallback:(0,f.jsx)(m,{...e}),children:(0,f.jsx)(p,{...e})}),h.__docgenInfo={description:`A line chart component for time-series data visualization.
Built on Chart.js with support for single and multi-line datasets.

@example
\`\`\`tsx
<LineChart
  title="Disk Usage %"
  labels={['11:20', '11:25', '11:30']}
  datasets={[{ label: 'Usage', data: [6, 3, 8, 5] }]}
  yAxisFormatter={(v) => \`\${v}%\`}
/>
\`\`\``,methods:[],displayName:`LineChart`,props:{title:{required:!1,tsType:{name:`string`},description:`Chart title text`},titleProps:{required:!1,tsType:{name:`Partial`,elements:[{name:`Omit`,elements:[{name:`TypographyProps`},{name:`union`,raw:`'children' | 'ref'`,elements:[{name:`literal`,value:`'children'`},{name:`literal`,value:`'ref'`}]}],raw:`Omit<TypographyProps, 'children' | 'ref'>`}],raw:`Partial<Omit<TypographyProps, 'children' | 'ref'>>`},description:`Props passed to the Typography component used for the title`},labels:{required:!0,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:`X-axis labels (e.g. time values)`},datasets:{required:!0,tsType:{name:`Array`,elements:[{name:`LineChartDataset`}],raw:`LineChartDataset[]`},description:`One or more datasets (lines)`},yAxisFormatter:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: number) => string`,signature:{arguments:[{type:{name:`number`},name:`value`}],return:{name:`string`}}},description:"Y-axis tick formatter (e.g. value => `${value}%`)"},showLegend:{required:!1,tsType:{name:`boolean`},description:`Show legend (auto-shown when datasets > 1)`},height:{required:!1,tsType:{name:`number`},description:`Chart height in px (default: 300)`},smooth:{required:!1,tsType:{name:`boolean`},description:`Smooth lines (default: true). Set to false for straight/rigid lines`},axisColor:{required:!1,tsType:{name:`string`},description:`Color for axis tick labels (default: '#9F9FA9')`},gridColor:{required:!1,tsType:{name:`string`},description:`Color for grid lines (default: '#45556C')`},showGrid:{required:!1,tsType:{name:`boolean`},description:`Show horizontal grid lines (default: true)`},lineWidth:{required:!1,tsType:{name:`number`},description:`Line thickness in px (default: 2)`},showAxisBorder:{required:!1,tsType:{name:`boolean`},description:`Show axis border lines (default: false)`},tooltipTextColor:{required:!1,tsType:{name:`string`},description:`Tooltip text color (default: metal-100)`},className:{required:!1,tsType:{name:`string`},description:`Additional className for wrapper`}}}})))()}var _,v,y,b,x;function S(){return(S=e((()=>{l(),g(),_=i(),v={title:`In Review/LineChart/Dark`,component:h},y=[`11:20`,`11:21`,`11:22`,`11:23`,`11:24`,`11:25`,`11:26`,`11:27`,`11:28`,`11:29`,`11:30`],b={parameters:{theme:`dark`},render:()=>(0,_.jsxs)(`div`,{className:`flex flex-col gap-6`,children:[(0,_.jsx)(u,{wrapperClassName:`w-1/2 max-md:w-full`,className:`p-6`,children:(0,_.jsx)(h,{title:`Disk Usage %`,labels:y,datasets:[{label:`Usage`,data:[6,7,6.5,3,2.5,10,7,8,5,6,4.5]}],height:200,yAxisFormatter:e=>`${e}%`})}),(0,_.jsx)(u,{wrapperClassName:`w-1/2 max-md:w-full`,className:`p-6`,children:(0,_.jsx)(h,{title:`Disk I/O`,labels:y,datasets:[{label:`Read`,data:[8,8.5,7,9,8,8.5,7.5,8,9,8,8.5]},{label:`Write`,data:[3,2.5,3,2,3,2.5,2,3,2.5,2,3]}],height:200,yAxisFormatter:e=>`${e}%`})}),(0,_.jsx)(u,{wrapperClassName:`w-1/2 max-md:w-full`,className:`p-6`,children:(0,_.jsx)(h,{title:`Disk I/O (Rigid)`,labels:y,datasets:[{label:`Read`,data:[8,8.5,7,9,8,8.5,7.5,8,9,8,8.5]},{label:`Write`,data:[3,2.5,3,2,3,2.5,2,3,2.5,2,3]}],smooth:!1,height:200,yAxisFormatter:e=>`${e}%`})}),(0,_.jsx)(u,{wrapperClassName:`w-1/2 max-md:w-full`,className:`p-6`,children:(0,_.jsx)(h,{title:`Network Traffic`,labels:y,datasets:[{label:`Inbound`,data:[12,15,11,14,13,16,12,15,14,13,11]},{label:`Outbound`,data:[5,6,4.5,7,5.5,6,5,7,6.5,5,4]},{label:`Errors`,data:[1,.5,2,1.5,1,.8,1.2,.5,1,1.5,.7]}],showGrid:!1,showAxisBorder:!0,lineWidth:1,height:200,yAxisFormatter:e=>`${e} MB/s`})})]})},x=[`Dark`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}}})))()}S();export{b as Dark,x as __namedExportsOrder,v as default};