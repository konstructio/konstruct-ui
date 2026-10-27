const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./PieChartContent-CJdeMXBZ.js","./rolldown-runtime-BCiCTKAo.js","./react-BlIEEezU.js","./jsx-runtime-BB9-612F.js","./utils-DWfjJEhS.js","./dist-CiWLnvGN.js"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{n as t,t as n}from"./preload-helper-DQzUoscV.js";import{t as r}from"./react-BlIEEezU.js";import{t as i}from"./jsx-runtime-BB9-612F.js";var a,o,s,c;function l(){return(l=e((()=>{a=r(),o=i(),t(),s=(0,a.lazy)(()=>n(()=>import(`./PieChartContent-CJdeMXBZ.js`).then(e=>({default:e.PieChartContent})),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url)),c=e=>(0,o.jsx)(a.Suspense,{fallback:(0,o.jsx)(`div`,{className:`w-full h-full`,"aria-busy":`true`}),children:(0,o.jsx)(s,{...e})}),c.__docgenInfo={description:`A doughnut/pie chart component for data visualization.
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
@default [resolveColor('--color-white'), resolveColor('--color-white')]`},borderWidth:{required:!1,tsType:{name:`number`},description:`Width of the border for pie chart segments in pixels
@default 0`},colors:{required:!1,tsType:{name:`union`,raw:`HexColor[] | CSSColor[] | (HexColor | CSSColor)[]`,elements:[{name:`Array`,elements:[{name:`literal`,value:"`#${string}`"}],raw:`HexColor[]`},{name:`Array`,elements:[{name:`union`,raw:"| `var(--${string})`\n| `rgb(${number}, ${number}, ${number})`\n| `rgba(${number}, ${number}, ${number}, ${number})`\n| `hsl(${number}, ${number}%, ${number}%)`\n| `hsla(${number}, ${number}%, ${number}%, ${number})`",elements:[{name:`literal`,value:"`var(--${string})`"},{name:`literal`,value:"`rgb(${number}, ${number}, ${number})`"},{name:`literal`,value:"`rgba(${number}, ${number}, ${number}, ${number})`"},{name:`literal`,value:"`hsl(${number}, ${number}%, ${number}%)`"},{name:`literal`,value:"`hsla(${number}, ${number}%, ${number}%, ${number})`"}]}],raw:`CSSColor[]`},{name:`Array`,elements:[{name:`unknown`}],raw:`(HexColor | CSSColor)[]`}]},description:`Array of hexadecimal colors for filling the pie chart segments
@default [resolveColor('--color-neutral-600'), resolveColor('--color-emerald-400')]`},cutoutPercentage:{required:!1,tsType:{name:`number`},description:`Percentage of the pie chart's center that should be cut out, creating a donut chart effect
@default 80`},redraw:{required:!1,tsType:{name:`boolean`},description:`Whether to redraw the entire chart when props change
@default true`},subtitleColor:{required:!1,tsType:{name:`literal`,value:"`#${string}`"},description:`Hexadecimal color for the subtitle text
@default resolveColor('--color-gray-500')`},subtitleFontSize:{required:!1,tsType:{name:`number`},description:`Font size for the subtitle in pixels
@default 14`},subtitleFontWeight:{required:!1,tsType:{name:`union`,raw:`'bold' | 'normal'`,elements:[{name:`literal`,value:`'bold'`},{name:`literal`,value:`'normal'`}]},description:`Font weight for the subtitle
@default 'normal'`},titleColor:{required:!1,tsType:{name:`literal`,value:"`#${string}`"},description:`Hexadecimal color for the title text
@default resolveColor('--color-gray-900')`},titleFontSize:{required:!1,tsType:{name:`number`},description:`Font size for the title in pixels
@default 16`},titleFontWeight:{required:!1,tsType:{name:`union`,raw:`'bold' | 'normal'`,elements:[{name:`literal`,value:`'bold'`},{name:`literal`,value:`'normal'`}]},description:`Font weight for the title
@default 'bold'`},values:{required:!0,tsType:{name:`Array`,elements:[{name:`number`}],raw:`number[]`},description:`Array of numeric values representing data for each segment of the pie chart
@required`}}}})))()}var u,d,f,p;function m(){return(m=e((()=>{l(),u=i(),d={title:`In Review/PieChart`,component:c},f={render:()=>(0,u.jsx)(`div`,{className:`w-[115px] h-[115px]`,children:(0,u.jsx)(c,{subtitle:`Total IPs`,subtitleColor:`#62748E`,subtitleFontSize:14,title:`10/256`,titleColor:`#1D283D`,titleFontSize:14,titleFontWeight:`normal`,values:[20,80]})})},p=[`PieChart`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const values = [20, 80];
    return <div className="w-[115px] h-[115px]">
        <PieChartComponent subtitle="Total IPs" subtitleColor="#62748E" subtitleFontSize={14} title="10/256" titleColor="#1D283D" titleFontSize={14} titleFontWeight="normal" values={values} />
      </div>;
  }
} satisfies Story`,...f.parameters?.docs?.source}}}})))()}m();export{f as PieChart,p as __namedExportsOrder,d as default};