import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as n}from"./Button-eYJOb9BC.js";import{C as x}from"./Card-ZS31eWtW.js";import{C as t}from"./check-BFGaQSXH.js";import"./iframe-C1xpHuwn.js";import"./preload-helper-Dp1pzeXC.js";import"./index-6l3NbNTq.js";import"./index-Cr-WShRT.js";import"./index-CmCqJHqr.js";const j={title:"In Review/Card",component:x},a={render:()=>{const l=["kubefirst","colony","civo"],r=s=>e.jsx("div",{className:"max-w-[350px] flex flex-col gap-2 w-[280px]",children:e.jsxs(x,{className:"flex flex-col gap-3 p-5",...s,children:[e.jsx("header",{className:"text-center",children:e.jsx("h3",{className:"text-slate-700 text-2xl",children:"Business"})}),e.jsxs("div",{className:"flex flex-col gap-3 pb-11",children:[e.jsx("p",{className:"text-sm text-slate-500 text-center",children:"Take advantage of our Business Plan to manage more clusters, self-host a private GitOps catalog, unlock unlimited cluster templates, and unify your platform services with a single interface."}),e.jsx("p",{className:"text-slate-700 text-[22px] text-center",children:"$0.33 / cluster / hour"}),e.jsx(n,{children:"Contact us"}),e.jsx("p",{className:"text-slate-500 text-sm mt-3",children:"Everything in Free plus:"}),e.jsxs("ul",{className:"text-slate-700 text-sm flex flex-col gap-2",children:[e.jsxs("li",{className:"flex items-start gap-1",children:[e.jsx(t,{className:"text-green-500 w-4 h-4 mt-0.5 flex-shrink-0"}),"Full feature access to the User Interface"]}),e.jsxs("li",{className:"flex items-start gap-1",children:[e.jsx(t,{className:"text-green-500 w-4 h-4 mt-0.5 flex-shrink-0"}),"Up to 10 physical clusters"]}),e.jsxs("li",{className:"flex items-start gap-1",children:[e.jsx(t,{className:"text-green-500 w-4 h-4 mt-0.5 flex-shrink-0"}),"Multi-account provisioning"]}),e.jsxs("li",{className:"flex items-start gap-1",children:[e.jsx(t,{className:"text-green-500 w-4 h-4 mt-0.5 flex-shrink-0"}),"Customizable GitOps Catalog"]}),e.jsxs("li",{className:"flex items-start gap-1",children:[e.jsx(t,{className:"text-green-500 w-4 h-4 mt-0.5 flex-shrink-0"}),"Slack Connect support"]})]})]})]})});return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("div",{className:"flex gap-4",children:l.map(s=>e.jsx(r,{theme:s}))}),e.jsx("div",{className:"flex gap-4",children:l.map(s=>e.jsx(r,{canHover:!0,theme:s}))}),e.jsx("div",{className:"flex gap-4",children:l.map(s=>e.jsx(r,{isActive:!0,theme:s}))})]})}};var c,i,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const themes = ['kubefirst', 'colony', 'civo'] satisfies Theme[];
    const Wrapper: FC<Pick<CardProps, 'isActive' | 'canHover' | 'theme'>> = props => <div className="max-w-[350px] flex flex-col gap-2 w-[280px]">
        <CardComponent className="flex flex-col gap-3 p-5" {...props}>
          <header className="text-center">
            <h3 className="text-slate-700 text-2xl">Business</h3>
          </header>

          <div className="flex flex-col gap-3 pb-11">
            <p className="text-sm text-slate-500 text-center">
              Take advantage of our Business Plan to manage more clusters,
              self-host a private GitOps catalog, unlock unlimited cluster
              templates, and unify your platform services with a single
              interface.
            </p>

            <p className="text-slate-700 text-[22px] text-center">
              $0.33 / cluster / hour
            </p>

            <Button>Contact us</Button>

            <p className="text-slate-500 text-sm mt-3">
              Everything in Free plus:
            </p>

            <ul className="text-slate-700 text-sm flex flex-col gap-2">
              <li className="flex items-start gap-1">
                <Check className="text-green-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                Full feature access to the User Interface
              </li>
              <li className="flex items-start gap-1">
                <Check className="text-green-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                Up to 10 physical clusters
              </li>
              <li className="flex items-start gap-1">
                <Check className="text-green-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                Multi-account provisioning
              </li>
              <li className="flex items-start gap-1">
                <Check className="text-green-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                Customizable GitOps Catalog
              </li>
              <li className="flex items-start gap-1">
                <Check className="text-green-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                Slack Connect support
              </li>
            </ul>
          </div>
        </CardComponent>
      </div>;
    return <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          {themes.map(theme => <Wrapper theme={theme} />)}
        </div>

        <div className="flex gap-4">
          {themes.map(theme => <Wrapper canHover={true} theme={theme} />)}
        </div>

        <div className="flex gap-4">
          {themes.map(theme => <Wrapper isActive={true} theme={theme} />)}
        </div>
      </div>;
  }
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const C=["Card"];export{a as Card,C as __namedExportsOrder,j as default};
