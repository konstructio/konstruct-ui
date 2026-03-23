import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{o as n,t as r}from"./iframe-Cmi29qjC.js";import{$ as i,d as a,p as o,t as s,v as c}from"./components-kNyAXuxa.js";import{a as l,t as u}from"./dist-Da5AECH5.js";import{n as d,t as f}from"./Typography-CuZ1UpXM.js";import{t as p}from"./debounce-CGwpnxI3.js";import{a as m,i as h,n as g,o as _,r as v,s as y,t as b}from"./Sidebar-DBXtFWmR.js";var x,S,C,w,T,E;e((()=>{x=t(p(),1),S=t(n(),1),u(),s(),d(),g(),C=r(),w={title:`In Review/Sidebar`,component:b,decorators:[e=>{let[t,n]=(0,S.useState)(window.innerHeight),r=(0,x.default)(()=>n(window.innerHeight),150);return(0,S.useEffect)(()=>{let e=window.parent.document.getElementById(`storybook-panel-root`);if(!e)return;let t=new ResizeObserver(r);return t.observe(e),()=>{t.disconnect()}},[r]),(0,S.useEffect)(()=>{let e=e=>{e?.querySelector(`.sidebar-container`)&&r()};new MutationObserver(t=>{t.forEach(t=>{t.addedNodes.forEach(e),t.removedNodes.forEach(e)})}).observe(window.parent.document.body,{childList:!0,subtree:!0})},[r]),(0,C.jsx)(`div`,{style:{margin:`-1rem`,height:t},children:(0,C.jsx)(e,{})})}]},T={render:function(){let[e,t]=(0,S.useState)(`kubefirst`);return(0,C.jsxs)(b,{theme:e,children:[(0,C.jsx)(_,{children:(0,C.jsxs)(`a`,{className:`flex items-center gap-2`,children:[(0,C.jsx)(`img`,{className:`flex-1 shrink-0 hidden md:block`,src:`./logo-kubefirst.svg`,alt:`Company logo`}),(0,C.jsx)(`img`,{className:`block h-10 w-12 md:hidden`,src:`./ray.svg`,alt:`Company logo`}),(0,C.jsx)(f,{variant:`labelSmall`,className:`md:left-[35%] !bottom-[-20px] md:!bottom-0 text-[#ABADC6] lowercase`,children:`v1.11.1`})]})}),(0,C.jsxs)(v,{className:`mt-4 md:mt-0`,children:[(0,C.jsxs)(m,{children:[(0,C.jsx)(h,{children:(0,C.jsxs)(`a`,{className:`flex items-center gap-2 md:mt-0`,children:[(0,C.jsx)(a,{className:`w-6 h-6`}),` `,(0,C.jsx)(f,{variant:`body1`,className:`hidden md:block text-inherit`,children:`Clusters`})]})}),(0,C.jsxs)(h,{role:`button`,onClick:()=>t(`kubefirst`),isActive:e===`kubefirst`,children:[(0,C.jsx)(c,{className:`w-6 h-6`}),` `,(0,C.jsx)(f,{variant:`body1`,className:`hidden md:block text-inherit`,children:`Environments`})]})]}),(0,C.jsxs)(m,{title:`Admin settings`,titleClassName:`uppercase hidden md:block `,children:[(0,C.jsxs)(h,{role:`button`,onClick:()=>t(`light`),isActive:e===`light`,children:[(0,C.jsx)(o,{className:`w-6 h-6`}),` `,(0,C.jsx)(f,{variant:`body1`,className:`hidden md:block text-inherit`,children:`Plans & Billing`})]}),(0,C.jsx)(h,{children:(0,C.jsxs)(`a`,{className:`flex items-center gap-2`,children:[(0,C.jsx)(i,{className:`w-6 h-6`}),` `,(0,C.jsx)(f,{variant:`body1`,className:`hidden md:block text-inherit`,children:`Cloud accounts`})]})})]})]}),(0,C.jsx)(y,{children:(0,C.jsxs)(`span`,{className:`text-[#81e2b4] flex items-center gap-2 justify-center font-semibold cursor-pointer`,children:[(0,C.jsx)(l,{className:`w-5 h-5`}),` `,(0,C.jsx)(f,{variant:`body1`,className:`hidden md:block text-inherit`,children:`Upgrade to Business`})]})})]})}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: function SidebarStory() {
    const [theme, setTheme] = useState<Theme>('kubefirst');
    return <SidebarPrimitive theme={theme}>
        <Logo>
          <a className="flex items-center gap-2">
            <img className="flex-1 shrink-0 hidden md:block" src="./logo-kubefirst.svg" alt="Company logo" />
            <img className="block h-10 w-12 md:hidden" src="./ray.svg" alt="Company logo" />
            <Typography variant="labelSmall" className="md:left-[35%] !bottom-[-20px] md:!bottom-0 text-[#ABADC6] lowercase">
              v1.11.1
            </Typography>
          </a>
        </Logo>

        <Navigation className="mt-4 md:mt-0">
          <NavigationGroup>
            <NavigationOption>
              <a className="flex items-center gap-2 md:mt-0">
                <ScatterPlotIcon className="w-6 h-6" />{' '}
                <Typography variant="body1" className="hidden md:block text-inherit">
                  Clusters
                </Typography>
              </a>
            </NavigationOption>

            <NavigationOption role="button" onClick={() => setTheme('kubefirst')} isActive={theme === 'kubefirst'}>
              <PhotoLibraryIcon className="w-6 h-6" />{' '}
              <Typography variant="body1" className="hidden md:block text-inherit">
                Environments
              </Typography>
            </NavigationOption>
          </NavigationGroup>

          <NavigationGroup title="Admin settings" titleClassName="uppercase hidden md:block ">
            <NavigationOption role="button" onClick={() => setTheme('light')} isActive={theme === 'light'}>
              <ReceiptLongIcon className="w-6 h-6" />{' '}
              <Typography variant="body1" className="hidden md:block text-inherit">
                Plans & Billing
              </Typography>
            </NavigationOption>

            <NavigationOption>
              <a className="flex items-center gap-2">
                <CloudIcon className="w-6 h-6" />{' '}
                <Typography variant="body1" className="hidden md:block text-inherit">
                  Cloud accounts
                </Typography>
              </a>
            </NavigationOption>
          </NavigationGroup>
        </Navigation>

        <Footer>
          <span className="text-[#81e2b4] flex items-center gap-2 justify-center font-semibold cursor-pointer">
            <Star className="w-5 h-5" />{' '}
            <Typography variant="body1" className="hidden md:block text-inherit">
              Upgrade to Business
            </Typography>
          </span>
        </Footer>
      </SidebarPrimitive>;
  }
} satisfies Story`,...T.parameters?.docs?.source}}},E=[`Sidebar`]}))();export{T as Sidebar,E as __namedExportsOrder,w as default};