import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{a as r,r as i}from"./utils-BC5-UmL9.js";import{d as a,i as o,o as s,r as c,t as l}from"./dist-DmmcZTDZ.js";var u,d,f;function p(){return(p=e((()=>{a(),u=t(),c(),i(),d=n(),s.register(o),f=({values:e,colors:t=[r(`--color-neutral-600`),r(`--color-emerald-400`)],borderColors:n=[r(`--color-white`),r(`--color-white`)],borderWidth:i=0,cutoutPercentage:a=80,title:o,subtitle:s,titleFontSize:c=16,subtitleFontSize:f=14,titleColor:p=r(`--color-gray-900`),subtitleColor:m=r(`--color-gray-500`),titleFontWeight:h=`bold`,subtitleFontWeight:g=`normal`,redraw:_=!0})=>{let v=(0,u.useMemo)(()=>({datasets:[{data:e,backgroundColor:t,borderWidth:i,borderColor:n}]}),[n,i,t,e]),y=(0,u.useMemo)(()=>({plugins:{legend:{display:!1}},cutout:`${a}%`,hover:{mode:null}}),[a]),b=(0,u.useMemo)(()=>{let e=[];return o&&e.push({id:`titleCenter`,beforeDraw(e){let t=e.ctx,n=e.width,r=e.height;t.restore(),t.font=`${h} ${c}px sans-serif`,t.fillStyle=p,t.textAlign=`center`,t.textBaseline=`middle`,t.fillText(o,n/2,r/2-(s?c/2:0)),t.save()}}),s&&e.push({id:`subtitleCenter`,beforeDraw(e){let t=e.ctx,n=e.width,r=e.height;t.restore(),t.font=`${g} ${f}px sans-serif`,t.fillStyle=m,t.fillText(s,n/2,r/2+f/2),t.save()}}),e},[s,m,f,g,o,p,c,h]);return(0,d.jsx)(l,{data:v,options:y,plugins:b,redraw:_})},f.__docgenInfo={description:`A doughnut/pie chart component for data visualization.
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

@see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-piechart--docs Storybook}`,methods:[],displayName:`PieChart`,props:{borderColors:{required:!1,tsType:{name:`union`,raw:`HexColor[] | CSSColor[] | (HexColor | CSSColor)[]`,elements:[{name:`Array`,elements:[{name:`literal`,value:"`#${string}`"}],raw:`HexColor[]`},{name:`Array`,elements:[{name:`union`,raw:"| `var(--${string})`\n| `rgb(${number}, ${number}, ${number})`\n| `rgba(${number}, ${number}, ${number}, ${number})`\n| `hsl(${number}, ${number}%, ${number}%)`\n| `hsla(${number}, ${number}%, ${number}%, ${number})`",elements:[{name:`literal`,value:"`var(--${string})`"},{name:`literal`,value:"`rgb(${number}, ${number}, ${number})`"},{name:`literal`,value:"`rgba(${number}, ${number}, ${number}, ${number})`"},{name:`literal`,value:"`hsl(${number}, ${number}%, ${number}%)`"},{name:`literal`,value:"`hsla(${number}, ${number}%, ${number}%, ${number})`"}]}],raw:`CSSColor[]`},{name:`Array`,elements:[{name:`unknown`}],raw:`(HexColor | CSSColor)[]`}]},description:`Array of hexadecimal colors for the borders of the pie chart segments
@default [resolveColor('--color-white'), resolveColor('--color-white')]`,defaultValue:{value:`[resolveColor('--color-white'), resolveColor('--color-white')]`,computed:!1}},borderWidth:{required:!1,tsType:{name:`number`},description:`Width of the border for pie chart segments in pixels
@default 0`,defaultValue:{value:`0`,computed:!1}},colors:{required:!1,tsType:{name:`union`,raw:`HexColor[] | CSSColor[] | (HexColor | CSSColor)[]`,elements:[{name:`Array`,elements:[{name:`literal`,value:"`#${string}`"}],raw:`HexColor[]`},{name:`Array`,elements:[{name:`union`,raw:"| `var(--${string})`\n| `rgb(${number}, ${number}, ${number})`\n| `rgba(${number}, ${number}, ${number}, ${number})`\n| `hsl(${number}, ${number}%, ${number}%)`\n| `hsla(${number}, ${number}%, ${number}%, ${number})`",elements:[{name:`literal`,value:"`var(--${string})`"},{name:`literal`,value:"`rgb(${number}, ${number}, ${number})`"},{name:`literal`,value:"`rgba(${number}, ${number}, ${number}, ${number})`"},{name:`literal`,value:"`hsl(${number}, ${number}%, ${number}%)`"},{name:`literal`,value:"`hsla(${number}, ${number}%, ${number}%, ${number})`"}]}],raw:`CSSColor[]`},{name:`Array`,elements:[{name:`unknown`}],raw:`(HexColor | CSSColor)[]`}]},description:`Array of hexadecimal colors for filling the pie chart segments
@default [resolveColor('--color-neutral-600'), resolveColor('--color-emerald-400')]`,defaultValue:{value:`[
  resolveColor('--color-neutral-600'),
  resolveColor('--color-emerald-400'),
]`,computed:!1}},cutoutPercentage:{required:!1,tsType:{name:`number`},description:`Percentage of the pie chart's center that should be cut out, creating a donut chart effect
@default 80`,defaultValue:{value:`80`,computed:!1}},redraw:{required:!1,tsType:{name:`boolean`},description:`Whether to redraw the entire chart when props change
@default true`,defaultValue:{value:`true`,computed:!1}},subtitleColor:{required:!1,tsType:{name:`literal`,value:"`#${string}`"},description:`Hexadecimal color for the subtitle text
@default resolveColor('--color-gray-500')`,defaultValue:{value:`resolveColor('--color-gray-500')`,computed:!0}},subtitleFontSize:{required:!1,tsType:{name:`number`},description:`Font size for the subtitle in pixels
@default 14`,defaultValue:{value:`14`,computed:!1}},subtitleFontWeight:{required:!1,tsType:{name:`union`,raw:`'bold' | 'normal'`,elements:[{name:`literal`,value:`'bold'`},{name:`literal`,value:`'normal'`}]},description:`Font weight for the subtitle
@default 'normal'`,defaultValue:{value:`'normal'`,computed:!1}},titleColor:{required:!1,tsType:{name:`literal`,value:"`#${string}`"},description:`Hexadecimal color for the title text
@default resolveColor('--color-gray-900')`,defaultValue:{value:`resolveColor('--color-gray-900')`,computed:!0}},titleFontSize:{required:!1,tsType:{name:`number`},description:`Font size for the title in pixels
@default 16`,defaultValue:{value:`16`,computed:!1}},titleFontWeight:{required:!1,tsType:{name:`union`,raw:`'bold' | 'normal'`,elements:[{name:`literal`,value:`'bold'`},{name:`literal`,value:`'normal'`}]},description:`Font weight for the title
@default 'bold'`,defaultValue:{value:`'bold'`,computed:!1}},values:{required:!0,tsType:{name:`Array`,elements:[{name:`number`}],raw:`number[]`},description:`Array of numeric values representing data for each segment of the pie chart
@required`}}}})))()}var m,h,g,_;function v(){return(v=e((()=>{p(),m=n(),h={title:`In Review/PieChart`,component:f},g={render:()=>(0,m.jsx)(`div`,{className:`w-[115px] h-[115px]`,children:(0,m.jsx)(f,{subtitle:`Total IPs`,subtitleColor:`#62748E`,subtitleFontSize:14,title:`10/256`,titleColor:`#1D283D`,titleFontSize:14,titleFontWeight:`normal`,values:[20,80]})})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const values = [20, 80];
    return <div className="w-[115px] h-[115px]">
        <PieChartComponent subtitle="Total IPs" subtitleColor="#62748E" subtitleFontSize={14} title="10/256" titleColor="#1D283D" titleFontSize={14} titleFontWeight="normal" values={values} />
      </div>;
  }
} satisfies Story`,...g.parameters?.docs?.source}}},_=[`PieChart`]})))()}v();export{g as PieChart,_ as __namedExportsOrder,h as default};