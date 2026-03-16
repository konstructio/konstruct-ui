import{j as e}from"./iframe-DLrn8Gk9.js";import{c as N}from"./compiler-runtime-DxXHijtq.js";import{B as v}from"./Button-CIavAXKE.js";import{C as g}from"./Card-C3ibiQrZ.js";import{C as s}from"./check-DB3q0YIm.js";import"./preload-helper-PPVm8Dsz.js";import"./index-y1nNICkM.js";import"./index-CPvO_3XD.js";import"./index-CwGTy2we.js";import"./index-CE1qPSkB.js";const A={title:"In Review/Card",component:g},f={render:()=>{const a=u=>{const t=N.c(12);let l;t[0]===Symbol.for("react.memo_cache_sentinel")?(l=e.jsx("header",{className:"text-center",children:e.jsx("h3",{className:"text-slate-500 text-2xl dark:text-metal-400",children:"Business"})}),t[0]=l):l=t[0];let r,c,i,m;t[1]===Symbol.for("react.memo_cache_sentinel")?(r=e.jsx("p",{className:"text-sm text-slate-500 dark:text-metal-100 text-center",children:"Take advantage of our Business Plan to manage more clusters, self-host a private GitOps catalog, unlock unlimited cluster templates, and unify your platform services with a single interface."}),c=e.jsx("p",{className:"text-slate-700 text-[22px] text-center dark:text-aurora-500",children:"$0.33 / cluster / hour"}),i=e.jsx(v,{children:"Contact us"}),m=e.jsx("p",{className:"text-slate-500 dark:text-metal-100 text-sm mt-3",children:"Everything in Free plus:"}),t[1]=r,t[2]=c,t[3]=i,t[4]=m):(r=t[1],c=t[2],i=t[3],m=t[4]);let n;t[5]===Symbol.for("react.memo_cache_sentinel")?(n=e.jsxs("li",{className:"flex items-start gap-1",children:[e.jsx(s,{className:"text-green-500 w-4 h-4 mt-0.5 shrink-0"}),"Full feature access to the User Interface"]}),t[5]=n):n=t[5];let x;t[6]===Symbol.for("react.memo_cache_sentinel")?(x=e.jsxs("li",{className:"flex items-start gap-1",children:[e.jsx(s,{className:"text-green-500 w-4 h-4 mt-0.5 shrink-0"}),"Up to 10 physical clusters"]}),t[6]=x):x=t[6];let o;t[7]===Symbol.for("react.memo_cache_sentinel")?(o=e.jsxs("li",{className:"flex items-start gap-1",children:[e.jsx(s,{className:"text-green-500 w-4 h-4 mt-0.5 shrink-0"}),"Multi-account provisioning"]}),t[7]=o):o=t[7];let d;t[8]===Symbol.for("react.memo_cache_sentinel")?(d=e.jsxs("li",{className:"flex items-start gap-1",children:[e.jsx(s,{className:"text-green-500 w-4 h-4 mt-0.5 shrink-0"}),"Customizable GitOps Catalog"]}),t[8]=d):d=t[8];let p;t[9]===Symbol.for("react.memo_cache_sentinel")?(p=e.jsxs("div",{className:"flex flex-col gap-3 pb-11",children:[r,c,i,m,e.jsxs("ul",{className:"text-slate-500 dark:text-metal-100 text-sm flex flex-col gap-2",children:[n,x,o,d,e.jsxs("li",{className:"flex items-start gap-1",children:[e.jsx(s,{className:"text-green-500 w-4 h-4 mt-0.5 shrink-0"}),"Slack Connect support"]})]})]}),t[9]=p):p=t[9];let h;return t[10]!==u?(h=e.jsx("div",{className:"max-w-[350px] flex flex-col gap-2 w-[280px]",children:e.jsxs(g,{className:"flex flex-col gap-3 p-5",...u,children:[l,p]})}),t[10]=u,t[11]=h):h=t[11],h};return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex gap-4",children:[e.jsx("div",{className:"p-4",children:e.jsx(a,{})}),e.jsx("div",{className:"bg-metal-900 p-4 rounded-lg","data-theme":"dark",children:e.jsx(a,{})})]}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx("div",{className:"p-4",children:e.jsx(a,{canHover:!0})}),e.jsx("div",{className:"bg-metal-900 p-4 rounded-lg","data-theme":"dark",children:e.jsx(a,{canHover:!0})})]}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx("div",{className:"p-4",children:e.jsx(a,{isActive:!0})}),e.jsx("div",{className:"bg-metal-900 p-4 rounded-lg","data-theme":"dark",children:e.jsx(a,{isActive:!0})})]})]})}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const Wrapper: FC<Pick<CardProps, 'isActive' | 'canHover' | 'theme'>> = props => <div className="max-w-[350px] flex flex-col gap-2 w-[280px]">
        <CardComponent className="flex flex-col gap-3 p-5" {...props}>
          <header className="text-center">
            <h3 className="text-slate-500 text-2xl dark:text-metal-400">
              Business
            </h3>
          </header>

          <div className="flex flex-col gap-3 pb-11">
            <p className="text-sm text-slate-500 dark:text-metal-100 text-center">
              Take advantage of our Business Plan to manage more clusters,
              self-host a private GitOps catalog, unlock unlimited cluster
              templates, and unify your platform services with a single
              interface.
            </p>

            <p className="text-slate-700 text-[22px] text-center dark:text-aurora-500">
              $0.33 / cluster / hour
            </p>

            <Button>Contact us</Button>

            <p className="text-slate-500 dark:text-metal-100 text-sm mt-3">
              Everything in Free plus:
            </p>

            <ul className="text-slate-500 dark:text-metal-100 text-sm flex flex-col gap-2">
              <li className="flex items-start gap-1">
                <Check className="text-green-500 w-4 h-4 mt-0.5 shrink-0" />
                Full feature access to the User Interface
              </li>
              <li className="flex items-start gap-1">
                <Check className="text-green-500 w-4 h-4 mt-0.5 shrink-0" />
                Up to 10 physical clusters
              </li>
              <li className="flex items-start gap-1">
                <Check className="text-green-500 w-4 h-4 mt-0.5 shrink-0" />
                Multi-account provisioning
              </li>
              <li className="flex items-start gap-1">
                <Check className="text-green-500 w-4 h-4 mt-0.5 shrink-0" />
                Customizable GitOps Catalog
              </li>
              <li className="flex items-start gap-1">
                <Check className="text-green-500 w-4 h-4 mt-0.5 shrink-0" />
                Slack Connect support
              </li>
            </ul>
          </div>
        </CardComponent>
      </div>;
    return <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <div className="p-4">
            <Wrapper />
          </div>

          <div className="bg-metal-900 p-4 rounded-lg" data-theme="dark">
            <Wrapper />
          </div>
        </div>

        <div className="flex gap-4">
          <div className="p-4">
            <Wrapper canHover={true} />
          </div>

          <div className="bg-metal-900 p-4 rounded-lg" data-theme="dark">
            <Wrapper canHover={true} />
          </div>
        </div>

        <div className="flex gap-4">
          <div className="p-4">
            <Wrapper isActive={true} />
          </div>

          <div className="bg-metal-900 p-4 rounded-lg" data-theme="dark">
            <Wrapper isActive={true} />
          </div>
        </div>
      </div>;
  }
}`,...f.parameters?.docs?.source}}};const E=["Card"];export{f as Card,E as __namedExportsOrder,A as default};
