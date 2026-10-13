import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{i as n,t as r}from"./utils-Bwr2iEcD.js";import{n as i,t as a}from"./dist-BQzpIf2-.js";import{n as o,t as s}from"./Card-CIgTrBIi.js";var c;function l(){return(l=e((()=>{i(),c=a([`block`,`animate-pulse`,`bg-gray-200`,`dark:bg-metal-700`],{variants:{shape:{rect:[`h-5`,`w-full`,`rounded`],text:[`h-3.5`,`w-full`,`rounded`],circle:[`size-10`,`rounded-full`]}},defaultVariants:{shape:`rect`}})})))()}var u,d;function f(){return(f=e((()=>{n(),l(),u=t(),d=({className:e,count:t=1,label:n=`Loading`,shape:i,theme:a,wrapperClassName:o})=>(0,u.jsx)(`div`,{role:`status`,"aria-label":n,"aria-busy":`true`,"data-theme":a,className:r(`flex w-full flex-col gap-2`,o),children:Array.from({length:t},(t,n)=>(0,u.jsx)(`span`,{"aria-hidden":`true`,className:r(c({shape:i}),e)},n))}),d.displayName=`KonstructSkeleton`,d.__docgenInfo={description:`Pulsing placeholder blocks shown while content loads.

@example
\`\`\`tsx
<Skeleton shape="text" count={3} label="Loading activity" />
<Skeleton shape="circle" />
<Skeleton className="h-8 w-40" />
\`\`\``,methods:[],displayName:`KonstructSkeleton`,props:{className:{required:!1,tsType:{name:`string`},description:`Additional CSS classes for each placeholder block, e.g. a width or height`},count:{required:!1,tsType:{name:`number`},description:`Number of placeholder blocks to render`,defaultValue:{value:`1`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:`Accessible name announced while the content loads`,defaultValue:{value:`'Loading'`,computed:!1}},theme:{required:!1,tsType:{name:`Theme`},description:`Theme override for this component`},wrapperClassName:{required:!1,tsType:{name:`string`},description:`Additional CSS classes for the wrapper`}},composes:[`VariantProps`]}})))()}var p,m,h,g;function _(){return(_=e((()=>{o(),f(),p=t(),m={title:`In Review/Skeleton`,component:d},h={parameters:{docs:{description:{story:'Pulsing placeholders with a `role="status"` wrapper. `shape` picks a rectangle, a text line or a circle, `count` repeats it and `className` sizes each block. Settings, billing and dashboard-manager built these blocks by hand.'}}},render:()=>(0,p.jsxs)(`div`,{className:`flex flex-col gap-6 max-w-100`,children:[(0,p.jsxs)(s,{className:`flex flex-col gap-4`,children:[(0,p.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,p.jsx)(d,{shape:`circle`,wrapperClassName:`w-auto`}),(0,p.jsx)(d,{shape:`text`,count:2,label:`Loading member`})]}),(0,p.jsx)(d,{shape:`text`,count:3,label:`Loading activity`})]}),(0,p.jsx)(d,{className:`h-8 w-40`,label:`Loading balance`})]})},g=[`Skeleton`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Pulsing placeholders with a \`role="status"\` wrapper. \`shape\` picks a rectangle, a text line or a circle, \`count\` repeats it and \`className\` sizes each block. Settings, billing and dashboard-manager built these blocks by hand.'
      }
    }
  },
  render: () => <div className="flex flex-col gap-6 max-w-100">
      <Card className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <SkeletonComponent shape="circle" wrapperClassName="w-auto" />
          <SkeletonComponent shape="text" count={2} label="Loading member" />
        </div>
        <SkeletonComponent shape="text" count={3} label="Loading activity" />
      </Card>

      <SkeletonComponent className="h-8 w-40" label="Loading balance" />
    </div>
}`,...h.parameters?.docs?.source}}}})))()}_();export{h as Skeleton,g as __namedExportsOrder,m as default};