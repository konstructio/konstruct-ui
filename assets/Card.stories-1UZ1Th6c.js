import{n as e}from"./chunk-jRWAZmH_.js";import{t}from"./iframe-C2WQCK3e.js";import{_ as n,t as r}from"./dist-BSOGlkT-.js";import{n as i,t as a}from"./Button-aQ2CDpca.js";import{n as o,t as s}from"./Card-CPOLiInN.js";var c,l,u,d;e((()=>{r(),i(),o(),c=t(),l={title:`In Review/Card`,component:s},u={render:()=>{let e=e=>(0,c.jsx)(`div`,{className:`max-w-[350px] flex flex-col gap-2 w-[280px]`,children:(0,c.jsxs)(s,{className:`flex flex-col gap-3 p-5`,...e,children:[(0,c.jsx)(`header`,{className:`text-center`,children:(0,c.jsx)(`h3`,{className:`text-slate-500 text-2xl dark:text-metal-400`,children:`Business`})}),(0,c.jsxs)(`div`,{className:`flex flex-col gap-3 pb-11`,children:[(0,c.jsx)(`p`,{className:`text-sm text-slate-500 dark:text-metal-100 text-center`,children:`Take advantage of our Business Plan to manage more clusters, self-host a private GitOps catalog, unlock unlimited cluster templates, and unify your platform services with a single interface.`}),(0,c.jsx)(`p`,{className:`text-slate-700 text-[22px] text-center dark:text-aurora-500`,children:`$0.33 / cluster / hour`}),(0,c.jsx)(a,{children:`Contact us`}),(0,c.jsx)(`p`,{className:`text-slate-500 dark:text-metal-100 text-sm mt-3`,children:`Everything in Free plus:`}),(0,c.jsxs)(`ul`,{className:`text-slate-500 dark:text-metal-100 text-sm flex flex-col gap-2`,children:[(0,c.jsxs)(`li`,{className:`flex items-start gap-1`,children:[(0,c.jsx)(n,{className:`text-green-500 w-4 h-4 mt-0.5 shrink-0`}),`Full feature access to the User Interface`]}),(0,c.jsxs)(`li`,{className:`flex items-start gap-1`,children:[(0,c.jsx)(n,{className:`text-green-500 w-4 h-4 mt-0.5 shrink-0`}),`Up to 10 physical clusters`]}),(0,c.jsxs)(`li`,{className:`flex items-start gap-1`,children:[(0,c.jsx)(n,{className:`text-green-500 w-4 h-4 mt-0.5 shrink-0`}),`Multi-account provisioning`]}),(0,c.jsxs)(`li`,{className:`flex items-start gap-1`,children:[(0,c.jsx)(n,{className:`text-green-500 w-4 h-4 mt-0.5 shrink-0`}),`Customizable GitOps Catalog`]}),(0,c.jsxs)(`li`,{className:`flex items-start gap-1`,children:[(0,c.jsx)(n,{className:`text-green-500 w-4 h-4 mt-0.5 shrink-0`}),`Slack Connect support`]})]})]})]})});return(0,c.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,c.jsxs)(`div`,{className:`flex gap-4`,children:[(0,c.jsx)(`div`,{className:`p-4`,children:(0,c.jsx)(e,{})}),(0,c.jsx)(`div`,{className:`bg-metal-900 p-4 rounded-lg`,"data-theme":`dark`,children:(0,c.jsx)(e,{})})]}),(0,c.jsxs)(`div`,{className:`flex gap-4`,children:[(0,c.jsx)(`div`,{className:`p-4`,children:(0,c.jsx)(e,{canHover:!0})}),(0,c.jsx)(`div`,{className:`bg-metal-900 p-4 rounded-lg`,"data-theme":`dark`,children:(0,c.jsx)(e,{canHover:!0})})]}),(0,c.jsxs)(`div`,{className:`flex gap-4`,children:[(0,c.jsx)(`div`,{className:`p-4`,children:(0,c.jsx)(e,{isActive:!0})}),(0,c.jsx)(`div`,{className:`bg-metal-900 p-4 rounded-lg`,"data-theme":`dark`,children:(0,c.jsx)(e,{isActive:!0})})]})]})}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d=[`Card`]}))();export{u as Card,d as __namedExportsOrder,l as default};