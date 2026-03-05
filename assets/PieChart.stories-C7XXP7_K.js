import{r as d,j as b}from"./iframe-DFGxwtFi.js";import{D as T,C as A,A as q}from"./index-BoCCVReO.js";import"./preload-helper-PPVm8Dsz.js";A.register(q);const c=({values:t,colors:p=["#525252","#00D492"],borderColors:f=["#FFFFFF","#FFFFFF"],borderWidth:h=0,cutoutPercentage:$=80,title:l,subtitle:n,titleFontSize:o=16,subtitleFontSize:u=14,titleColor:g="#111827",subtitleColor:v="#6B7280",titleFontWeight:F="bold",subtitleFontWeight:C="normal",redraw:x=!0})=>{const w=d.useMemo(()=>({datasets:[{data:t,backgroundColor:p,borderWidth:h,borderColor:f}]}),[f,h,p,t]),y=d.useMemo(()=>({plugins:{legend:{display:!1}},cutout:`${$}%`,hover:{mode:null}}),[$]),S=d.useMemo(()=>{const s=[];return l&&s.push({id:"titleCenter",beforeDraw(r){const e=r.ctx,i=r.width,m=r.height;e.restore(),e.font=`${F} ${o}px sans-serif`,e.fillStyle=g,e.textAlign="center",e.textBaseline="middle",e.fillText(l,i/2,m/2-(n?o/2:0)),e.save()}}),n&&s.push({id:"subtitleCenter",beforeDraw(r){const e=r.ctx,i=r.width,m=r.height;e.restore(),e.font=`${C} ${u}px sans-serif`,e.fillStyle=v,e.fillText(n,i/2,m/2+u/2),e.save()}}),s},[n,v,u,C,l,g,o,F]);return b.jsx(T,{data:w,options:y,plugins:S,redraw:x})};c.__docgenInfo={description:`A doughnut/pie chart component for data visualization.
Built on Chart.js with support for center text labels.

@example
\`\`\`tsx
<PieChart
  values={[25, 75]}
  colors={['#94a3b8', '#22c55e']}
  title="75%"
  subtitle="Progress"
  cutoutPercentage={80}
/>
\`\`\`

@see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-piechart--docs Storybook}`,methods:[],displayName:"PieChart",props:{borderColors:{required:!1,tsType:{name:"union",raw:"HexColor[] | CSSColor[] | (HexColor | CSSColor)[]",elements:[{name:"Array",elements:[{name:"literal",value:"`#${string}`"}],raw:"HexColor[]"},{name:"Array",elements:[{name:"union",raw:"| `var(--${string})`\n| `rgb(${number}, ${number}, ${number})`\n| `rgba(${number}, ${number}, ${number}, ${number})`\n| `hsl(${number}, ${number}%, ${number}%)`\n| `hsla(${number}, ${number}%, ${number}%, ${number})`",elements:[{name:"literal",value:"`var(--${string})`"},{name:"literal",value:"`rgb(${number}, ${number}, ${number})`"},{name:"literal",value:"`rgba(${number}, ${number}, ${number}, ${number})`"},{name:"literal",value:"`hsl(${number}, ${number}%, ${number}%)`"},{name:"literal",value:"`hsla(${number}, ${number}%, ${number}%, ${number})`"}]}],raw:"CSSColor[]"},{name:"Array",elements:[{name:"unknown"}],raw:"(HexColor | CSSColor)[]"}]},description:`Array of hexadecimal colors for the borders of the pie chart segments
@default ['#FFFFFF', '#FFFFFF']`,defaultValue:{value:"['#FFFFFF', '#FFFFFF']",computed:!1}},borderWidth:{required:!1,tsType:{name:"number"},description:`Width of the border for pie chart segments in pixels
@default 0`,defaultValue:{value:"0",computed:!1}},colors:{required:!1,tsType:{name:"union",raw:"HexColor[] | CSSColor[] | (HexColor | CSSColor)[]",elements:[{name:"Array",elements:[{name:"literal",value:"`#${string}`"}],raw:"HexColor[]"},{name:"Array",elements:[{name:"union",raw:"| `var(--${string})`\n| `rgb(${number}, ${number}, ${number})`\n| `rgba(${number}, ${number}, ${number}, ${number})`\n| `hsl(${number}, ${number}%, ${number}%)`\n| `hsla(${number}, ${number}%, ${number}%, ${number})`",elements:[{name:"literal",value:"`var(--${string})`"},{name:"literal",value:"`rgb(${number}, ${number}, ${number})`"},{name:"literal",value:"`rgba(${number}, ${number}, ${number}, ${number})`"},{name:"literal",value:"`hsl(${number}, ${number}%, ${number}%)`"},{name:"literal",value:"`hsla(${number}, ${number}%, ${number}%, ${number})`"}]}],raw:"CSSColor[]"},{name:"Array",elements:[{name:"unknown"}],raw:"(HexColor | CSSColor)[]"}]},description:`Array of hexadecimal colors for filling the pie chart segments
@default ['#525252', '#00D492']`,defaultValue:{value:"['#525252', '#00D492']",computed:!1}},cutoutPercentage:{required:!1,tsType:{name:"number"},description:`Percentage of the pie chart's center that should be cut out, creating a donut chart effect
@default 80`,defaultValue:{value:"80",computed:!1}},redraw:{required:!1,tsType:{name:"boolean"},description:`Whether to redraw the entire chart when props change
@default true`,defaultValue:{value:"true",computed:!1}},subtitleColor:{required:!1,tsType:{name:"literal",value:"`#${string}`"},description:`Hexadecimal color for the subtitle text
@default '#6B7280'`,defaultValue:{value:"'#6B7280'",computed:!1}},subtitleFontSize:{required:!1,tsType:{name:"number"},description:`Font size for the subtitle in pixels
@default 14`,defaultValue:{value:"14",computed:!1}},subtitleFontWeight:{required:!1,tsType:{name:"union",raw:"'bold' | 'normal'",elements:[{name:"literal",value:"'bold'"},{name:"literal",value:"'normal'"}]},description:`Font weight for the subtitle
@default 'normal'`,defaultValue:{value:"'normal'",computed:!1}},titleColor:{required:!1,tsType:{name:"literal",value:"`#${string}`"},description:`Hexadecimal color for the title text
@default '#111827'`,defaultValue:{value:"'#111827'",computed:!1}},titleFontSize:{required:!1,tsType:{name:"number"},description:`Font size for the title in pixels
@default 16`,defaultValue:{value:"16",computed:!1}},titleFontWeight:{required:!1,tsType:{name:"union",raw:"'bold' | 'normal'",elements:[{name:"literal",value:"'bold'"},{name:"literal",value:"'normal'"}]},description:`Font weight for the title
@default 'bold'`,defaultValue:{value:"'bold'",computed:!1}},values:{required:!0,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:`Array of numeric values representing data for each segment of the pie chart
@required`}}};const H={title:"In Review/PieChart",component:c},a={render:()=>{const t=[20,80];return b.jsx("div",{className:"w-[115px] h-[115px]",children:b.jsx(c,{subtitle:"Total IPs",subtitleColor:"#62748E",subtitleFontSize:14,title:"10/256",titleColor:"#1D283D",titleFontSize:14,titleFontWeight:"normal",values:t})})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const values = [20, 80];
    return <div className="w-[115px] h-[115px]">
        <PieChartComponent subtitle="Total IPs" subtitleColor="#62748E" subtitleFontSize={14} title="10/256" titleColor="#1D283D" titleFontSize={14} titleFontWeight="normal" values={values} />
      </div>;
  }
} satisfies Story`,...a.parameters?.docs?.source}}};const k=["PieChart"];export{a as PieChart,k as __namedExportsOrder,H as default};
