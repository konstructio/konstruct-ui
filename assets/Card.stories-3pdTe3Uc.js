import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{B as o}from"./Button-CCRnY5G-.js";import{C as n}from"./Card-D2_UiGuf.js";import{T as i}from"./theme.provider-N5pJGCuh.js";import{C as t}from"./check-DdOXJq8S.js";import"./index-yBjzXJbu.js";import"./index-tvICUrOf.js";import"./index-OJDiOimW.js";import"./index-CGW1Y50Z.js";import"./index-BV_IynQ4.js";import"./theme.hook-CDXgGbzo.js";import"./index-VBDlSZoa.js";const T={title:"In Review/Card",component:n},a={render:()=>{const l=["kubefirst","colony","civo"],r=s=>e.jsx("div",{className:"max-w-[350px] flex flex-col gap-2 w-[280px]",children:e.jsxs(n,{className:"flex flex-col gap-3 p-5",...s,children:[e.jsx("header",{className:"text-center",children:e.jsx("h3",{className:"text-slate-700 text-2xl",children:"Business"})}),e.jsxs("div",{className:"flex flex-col gap-3 pb-11",children:[e.jsx("p",{className:"text-sm text-slate-500 text-center",children:"Take advantage of our Business Plan to manage more clusters, self-host a private GitOps catalog, unlock unlimited cluster templates, and unify your platform services with a single interface."}),e.jsx("p",{className:"text-slate-700 text-[22px] text-center",children:"$0.33 / cluster / hour"}),e.jsx(o,{children:"Contact us"}),e.jsx("p",{className:"text-slate-500 text-sm mt-3",children:"Everything in Free plus:"}),e.jsxs("ul",{className:"text-slate-700 text-sm flex flex-col gap-2",children:[e.jsxs("li",{className:"flex items-start gap-1",children:[e.jsx(t,{className:"text-green-500 w-4 h-4 mt-0.5 flex-shrink-0"}),"Full feature access to the User Interface"]}),e.jsxs("li",{className:"flex items-start gap-1",children:[e.jsx(t,{className:"text-green-500 w-4 h-4 mt-0.5 flex-shrink-0"}),"Up to 10 physical clusters"]}),e.jsxs("li",{className:"flex items-start gap-1",children:[e.jsx(t,{className:"text-green-500 w-4 h-4 mt-0.5 flex-shrink-0"}),"Multi-account provisioning"]}),e.jsxs("li",{className:"flex items-start gap-1",children:[e.jsx(t,{className:"text-green-500 w-4 h-4 mt-0.5 flex-shrink-0"}),"Customizable GitOps Catalog"]}),e.jsxs("li",{className:"flex items-start gap-1",children:[e.jsx(t,{className:"text-green-500 w-4 h-4 mt-0.5 flex-shrink-0"}),"Slack Connect support"]})]})]})]})});return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("div",{className:"flex gap-4",children:l.map(s=>e.jsx(i,{theme:s,children:e.jsx(r,{})}))}),e.jsx("div",{className:"flex gap-4",children:l.map(s=>e.jsx(i,{theme:s,children:e.jsx(r,{canHover:!0})}))}),e.jsx("div",{className:"flex gap-4",children:l.map(s=>e.jsx(i,{theme:s,children:e.jsx(r,{isActive:!0})}))})]})})}};var c,m,x;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const themes = ['kubefirst', 'colony', 'civo'] satisfies ThemeContextType['theme'][];
    const Wrapper: FC<Pick<CardProps, 'isActive' | 'canHover'>> = props => <div className="max-w-[350px] flex flex-col gap-2 w-[280px]">
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
    return <>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            {themes.map(theme => <ThemeProvider theme={theme}>
                <Wrapper />
              </ThemeProvider>)}
          </div>

          <div className="flex gap-4">
            {themes.map(theme => <ThemeProvider theme={theme}>
                <Wrapper canHover={true} />
              </ThemeProvider>)}
          </div>

          <div className="flex gap-4">
            {themes.map(theme => <ThemeProvider theme={theme}>
                <Wrapper isActive={true} />
              </ThemeProvider>)}
          </div>
        </div>
      </>;
  }
}`,...(x=(m=a.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};const y=["Card"];export{a as Card,y as __namedExportsOrder,T as default};
