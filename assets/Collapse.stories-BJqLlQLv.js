import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{i as r,t as i}from"./utils-Bwr2iEcD.js";import{n as a,t as o}from"./Button-DqiKM02x.js";import{n as s,t as c}from"./Select-Df_T47hw.js";import{n as l,t as u}from"./react-BIOVOKr6.js";import{t as d}from"./AnimatePresence-BdqDJ5NN.js";import{n as f}from"./use-reduced-motion-DSbwlV8R.js";import{n as p,t as m}from"./Card-CIgTrBIi.js";var h,g,_,v;function y(){return(y=e((()=>{u(),h=t(),r(),g=n(),_=[.4,0,.2,1],v=({children:e,className:t,collapsedMarginTop:n=0,id:r,isOpen:a,keepMounted:o=!1,onExitComplete:s})=>{let c=f(),[u,p]=(0,h.useState)(!1),m=c?{duration:0}:{height:{duration:.35,ease:_},marginTop:{duration:.35,ease:_},opacity:{duration:.25,ease:_}},v={opacity:0,height:0,marginTop:n},y={opacity:1,height:`auto`,marginTop:0},b=a&&!u?`overflow-visible`:`overflow-hidden`;return o?(0,g.jsx)(l.div,{id:r,initial:!1,animate:a?y:v,transition:m,hidden:!a&&!u,"aria-hidden":!a||void 0,className:i(b,t),onAnimationStart:()=>p(!0),onAnimationComplete:()=>p(!1),children:e}):(0,g.jsx)(d,{initial:!1,onExitComplete:s,children:a?(0,g.jsx)(l.div,{id:r,initial:v,animate:y,exit:v,transition:m,className:i(b,t),onAnimationStart:()=>p(!0),onAnimationComplete:()=>p(!1),children:e},`collapse`):null})},v.displayName=`KonstructCollapse`,v.__docgenInfo={description:`Animates its children between a collapsed and an expanded height,
respecting \`prefers-reduced-motion\`. Overflow is only clipped while the
animation runs, so dropdowns or tooltips inside the content are never cut.

@example
\`\`\`tsx
<Button aria-expanded={isOpen} aria-controls="advanced" onClick={toggle}>
  Advanced options
</Button>
<Collapse id="advanced" isOpen={isOpen} keepMounted>
  <AdvancedOptions />
</Collapse>
\`\`\``,methods:[],displayName:`KonstructCollapse`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:`Additional CSS classes for the animated wrapper`},collapsedMarginTop:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:`Margin applied while collapsed, so the closed state does not leave a gap`,defaultValue:{value:`0`,computed:!1}},id:{required:!1,tsType:{name:`string`},description:"Id of the animated region, to reference it from `aria-controls`"},isOpen:{required:!0,tsType:{name:`boolean`},description:`Whether the content is expanded`},keepMounted:{required:!1,tsType:{name:`boolean`},description:`Keep the children mounted while collapsed (hidden and inert) instead of unmounting them`,defaultValue:{value:`false`,computed:!1}},onExitComplete:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Fired once the collapse animation has finished and the children are unmounted`}}}})))()}var b,x,S,C,w;function T(){return(T=e((()=>{b=t(),a(),p(),s(),y(),x=n(),S={title:`In Review/Collapse`,component:v},C={parameters:{docs:{description:{story:"Animates height between collapsed and expanded, honours `prefers-reduced-motion`, and only clips overflow while animating so a Select inside can open freely. `keepMounted` keeps the content in the DOM (hidden and inert) so `aria-controls` always resolves. Compute, settings and kubernetes each carried their own version."}}},render:function(){let[e,t]=(0,b.useState)(!0);return(0,x.jsxs)(m,{className:`flex flex-col gap-4 max-w-100`,children:[(0,x.jsxs)(o,{variant:`tertiary`,"aria-expanded":e,"aria-controls":`advanced-options`,onClick:()=>t(e=>!e),children:[e?`Hide`:`Show`,` advanced options`]}),(0,x.jsx)(v,{id:`advanced-options`,isOpen:e,keepMounted:!0,children:(0,x.jsxs)(`div`,{className:`flex flex-col gap-4 pt-2`,children:[(0,x.jsx)(c,{label:`Network`,placeholder:`Pick a network`,options:[{label:`default`,value:`default`},{label:`staging`,value:`staging`}]}),(0,x.jsx)(c,{label:`Firewall`,placeholder:`Pick a firewall`,options:[{label:`default`,value:`default`},{label:`web`,value:`web`}]})]})})]})}},w=[`Collapse`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Animates height between collapsed and expanded, honours \`prefers-reduced-motion\`, and only clips overflow while animating so a Select inside can open freely. \`keepMounted\` keeps the content in the DOM (hidden and inert) so \`aria-controls\` always resolves. Compute, settings and kubernetes each carried their own version.'
      }
    }
  },
  render: function CollapseStory() {
    const [isOpen, setIsOpen] = useState(true);
    return <Card className="flex flex-col gap-4 max-w-100">
        <Button variant="tertiary" aria-expanded={isOpen} aria-controls="advanced-options" onClick={() => setIsOpen(current => !current)}>
          {isOpen ? 'Hide' : 'Show'} advanced options
        </Button>

        <CollapseComponent id="advanced-options" isOpen={isOpen} keepMounted>
          <div className="flex flex-col gap-4 pt-2">
            <Select label="Network" placeholder="Pick a network" options={[{
            label: 'default',
            value: 'default'
          }, {
            label: 'staging',
            value: 'staging'
          }]} />
            <Select label="Firewall" placeholder="Pick a firewall" options={[{
            label: 'default',
            value: 'default'
          }, {
            label: 'web',
            value: 'web'
          }]} />
          </div>
        </CollapseComponent>
      </Card>;
  }
}`,...C.parameters?.docs?.source}}}})))()}T();export{C as Collapse,w as __namedExportsOrder,S as default};