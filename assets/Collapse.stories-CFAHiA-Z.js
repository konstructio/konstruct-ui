import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./react-BWPDF9mI.js";import{t as n}from"./jsx-runtime-BB9-612F.js";import{n as r,t as i}from"./Button-hEP-oDpL.js";import{n as a,t as o}from"./Select-CzbcjNwI.js";import{n as s,t as c}from"./Card-BGXm1bGM.js";import{n as l,t as u}from"./Collapse-BebMkslP.js";var d,f,p,m,h;function g(){return(g=e((()=>{d=t(),r(),s(),a(),l(),f=n(),p={title:`In Review/Collapse`,component:u},m={parameters:{docs:{description:{story:"Animates height between collapsed and expanded, honours `prefers-reduced-motion`, and only clips overflow while animating so a Select inside can open freely. `keepMounted` keeps the content in the DOM (hidden and inert) so `aria-controls` always resolves. Compute, settings and kubernetes each carried their own version."}}},render:function(){let[e,t]=(0,d.useState)(!0);return(0,f.jsxs)(c,{className:`flex flex-col gap-4 max-w-100`,children:[(0,f.jsxs)(i,{variant:`tertiary`,"aria-expanded":e,"aria-controls":`advanced-options`,onClick:()=>t(e=>!e),children:[e?`Hide`:`Show`,` advanced options`]}),(0,f.jsx)(u,{id:`advanced-options`,isOpen:e,keepMounted:!0,children:(0,f.jsxs)(`div`,{className:`flex flex-col gap-4 pt-2`,children:[(0,f.jsx)(o,{label:`Network`,placeholder:`Pick a network`,options:[{label:`default`,value:`default`},{label:`staging`,value:`staging`}]}),(0,f.jsx)(o,{label:`Firewall`,placeholder:`Pick a firewall`,options:[{label:`default`,value:`default`},{label:`web`,value:`web`}]})]})})]})}},h=[`Collapse`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}}})))()}g();export{m as Collapse,h as __namedExportsOrder,p as default};