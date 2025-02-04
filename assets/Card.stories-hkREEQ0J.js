import{j as e}from"./jsx-runtime-BjgbQsUx.js";import{B as g}from"./Button-CHwBhwW1.js";import{r as N}from"./index-DmOy-Ncz.js";import{a as h,c as n}from"./index-fqgZqOFX.js";import{u as j}from"./theme.hook-DTgsUARC.js";import{C as r}from"./check-BQoLCgMu.js";import{T as c}from"./theme.provider-Cxxg2prO.js";import"./index-D2MAbzvX.js";import"./index-CaN0e_5C.js";import"./index-CRcxehxe.js";const k=h(["border","border-slate-200","rounded-xl"],{variants:{theme:{colony:"",kubefirst:"",civo:""},isActive:{true:"border-transparent",false:""},canHover:{true:["group","hover:border-transparent"],false:""}},defaultVariants:{theme:"kubefirst"}}),b=h(["border","border-4","p-3","text-card-foreground","rounded-xl"],{variants:{theme:{colony:"",kubefirst:"",civo:""},isActive:{true:"",false:"border-transparent"},canHover:{true:"cursor-pointer border-transparent",false:""}},compoundVariants:[{theme:"colony",isActive:!0,class:["border-colony-primary","shadow"]},{theme:"kubefirst",isActive:!0,class:["border-kubefirst-primary","shadow"]},{theme:"civo",isActive:!0,class:["border-civo-primary","shadow"]},{theme:"colony",canHover:!0,class:"group-hover:border-colony-primary"},{theme:"kubefirst",canHover:!0,class:"group-hover:border-kubefirst-primary"},{theme:"civo",canHover:!0,class:"group-hover:border-civo-primary"},{canHover:void 0,isActive:void 0,class:"border-transparent"}],defaultVariants:{theme:"kubefirst"}}),i=N.forwardRef(({className:a,theme:t,isActive:s,canHover:o,wrapperClassName:u,...f},v)=>{const{theme:m}=j();return e.jsx("div",{className:n(k({canHover:o,className:u,isActive:s,theme:t??m})),children:e.jsx("div",{ref:v,className:n(b({className:a,theme:t??m,isActive:s,canHover:o})),...f})})});i.displayName="Card";i.__docgenInfo={description:"",methods:[],displayName:"Card",props:{isActive:{required:!1,tsType:{name:"boolean"},description:""},canHover:{required:!1,tsType:{name:"boolean"},description:""},wrapperClassName:{required:!1,tsType:{name:"string"},description:""}},composes:["HTMLAttributes","VariantProps","PropsWithChildren"]};const W={title:"Design System/Card",component:i},l={render:()=>{const a=["kubefirst","colony","civo"],t=s=>e.jsx("div",{className:"max-w-[350px] flex flex-col gap-2 w-[280px]",children:e.jsxs(i,{className:"flex flex-col gap-3 p-5",...s,children:[e.jsx("header",{className:"text-center",children:e.jsx("h3",{className:"text-slate-700 text-2xl",children:"Business"})}),e.jsxs("div",{className:"flex flex-col gap-3 pb-11",children:[e.jsx("p",{className:"text-sm text-slate-500 text-center",children:"Take advantage of our Business Plan to manage more clusters, self-host a private GitOps catalog, unlock unlimited cluster templates, and unify your platform services with a single interface."}),e.jsx("p",{className:"text-slate-700 text-[22px] text-center",children:"$0.33 / cluster / hour"}),e.jsx(g,{children:"Contact us"}),e.jsx("p",{className:"text-slate-500 text-sm mt-3",children:"Everything in Free plus:"}),e.jsxs("ul",{className:"text-slate-700 text-sm flex flex-col gap-2",children:[e.jsxs("li",{className:"flex items-start gap-1",children:[e.jsx(r,{className:"text-green-500 w-4 h-4 mt-0.5 flex-shrink-0"}),"Full feature access to the User Interface"]}),e.jsxs("li",{className:"flex items-start gap-1",children:[e.jsx(r,{className:"text-green-500 w-4 h-4 mt-0.5 flex-shrink-0"}),"Up to 10 physical clusters"]}),e.jsxs("li",{className:"flex items-start gap-1",children:[e.jsx(r,{className:"text-green-500 w-4 h-4 mt-0.5 flex-shrink-0"}),"Multi-account provisioning"]}),e.jsxs("li",{className:"flex items-start gap-1",children:[e.jsx(r,{className:"text-green-500 w-4 h-4 mt-0.5 flex-shrink-0"}),"Customizable GitOps Catalog"]}),e.jsxs("li",{className:"flex items-start gap-1",children:[e.jsx(r,{className:"text-green-500 w-4 h-4 mt-0.5 flex-shrink-0"}),"Slack Connect support"]})]})]})]})});return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("div",{className:"flex gap-4",children:a.map(s=>e.jsx(c,{theme:s,children:e.jsx(t,{})}))}),e.jsx("div",{className:"flex gap-4",children:a.map(s=>e.jsx(c,{theme:s,children:e.jsx(t,{canHover:!0})}))}),e.jsx("div",{className:"flex gap-4",children:a.map(s=>e.jsx(c,{theme:s,children:e.jsx(t,{isActive:!0})}))})]})})}};var p,x,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(x=l.parameters)==null?void 0:x.docs)==null?void 0:d.source}}};const E=["Card"];export{l as Card,E as __namedExportsOrder,W as default};
