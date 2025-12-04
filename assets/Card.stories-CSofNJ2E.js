import{j as e}from"./jsx-runtime-u17CrQMm.js";import{B as i}from"./Button-cXIQZ-87.js";import{C as c}from"./Card-CAOUZMiu.js";import{C as t}from"./check-BcUn6zpa.js";import"./iframe-vxWk8FGT.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B_NMQek5.js";import"./index-BkGIZr08.js";import"./index-Bn42e07n.js";import"./index-ClBws3XH.js";const N={title:"In Review/Card",component:c},a={render:()=>{const l=["kubefirst"],r=s=>e.jsx("div",{className:"max-w-[350px] flex flex-col gap-2 w-[280px]",children:e.jsxs(c,{className:"flex flex-col gap-3 p-5",...s,children:[e.jsx("header",{className:"text-center",children:e.jsx("h3",{className:"text-slate-700 text-2xl",children:"Business"})}),e.jsxs("div",{className:"flex flex-col gap-3 pb-11",children:[e.jsx("p",{className:"text-sm text-slate-500 text-center",children:"Take advantage of our Business Plan to manage more clusters, self-host a private GitOps catalog, unlock unlimited cluster templates, and unify your platform services with a single interface."}),e.jsx("p",{className:"text-slate-700 text-[22px] text-center",children:"$0.33 / cluster / hour"}),e.jsx(i,{children:"Contact us"}),e.jsx("p",{className:"text-slate-500 text-sm mt-3",children:"Everything in Free plus:"}),e.jsxs("ul",{className:"text-slate-700 text-sm flex flex-col gap-2",children:[e.jsxs("li",{className:"flex items-start gap-1",children:[e.jsx(t,{className:"text-green-500 w-4 h-4 mt-0.5 flex-shrink-0"}),"Full feature access to the User Interface"]}),e.jsxs("li",{className:"flex items-start gap-1",children:[e.jsx(t,{className:"text-green-500 w-4 h-4 mt-0.5 flex-shrink-0"}),"Up to 10 physical clusters"]}),e.jsxs("li",{className:"flex items-start gap-1",children:[e.jsx(t,{className:"text-green-500 w-4 h-4 mt-0.5 flex-shrink-0"}),"Multi-account provisioning"]}),e.jsxs("li",{className:"flex items-start gap-1",children:[e.jsx(t,{className:"text-green-500 w-4 h-4 mt-0.5 flex-shrink-0"}),"Customizable GitOps Catalog"]}),e.jsxs("li",{className:"flex items-start gap-1",children:[e.jsx(t,{className:"text-green-500 w-4 h-4 mt-0.5 flex-shrink-0"}),"Slack Connect support"]})]})]})]})});return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("div",{className:"flex gap-4",children:l.map(s=>e.jsx(r,{theme:s}))}),e.jsx("div",{className:"flex gap-4",children:l.map(s=>e.jsx(r,{canHover:!0,theme:s}))}),e.jsx("div",{className:"flex gap-4",children:l.map(s=>e.jsx(r,{isActive:!0,theme:s}))})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const themes = ['kubefirst'] satisfies Theme[];
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
}`,...a.parameters?.docs?.source}}};const v=["Card"];export{a as Card,v as __namedExportsOrder,N as default};
