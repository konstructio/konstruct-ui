import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-D9T3pWpr.js";import{t as r}from"./jsx-runtime-BPpv9Zq8.js";import{O as i,P as a,X as o,ir as s,t as c}from"./components-CG1lH94F.js";import{c as l,t as u}from"./dist-CfsoYfNC.js";import{n as d,t as f}from"./Typography-BiqKngpX.js";import{t as p}from"./debounce-LxCTBGpn.js";import{a as m,d as h,h as g,l as _,n as v,p as y,r as b,s as x,t as S}from"./Sidebar-Dfg_5aI4.js";var C,w,T,E,D,O,k,A,j,M;t((()=>{C=e(p(),1),w=e(n(),1),u(),c(),d(),v(),T=r(),E={title:`In Review/Sidebar`,component:S,decorators:[e=>{let[t,n]=(0,w.useState)(window.innerHeight),r=(0,C.default)(()=>n(window.innerHeight),150);return(0,w.useEffect)(()=>{let e=window.parent.document.getElementById(`storybook-panel-root`);if(!e)return;let t=new ResizeObserver(r);return t.observe(e),()=>{t.disconnect()}},[r]),(0,w.useEffect)(()=>{let e=e=>{e?.querySelector(`.sidebar-container`)&&r()};new MutationObserver(t=>{t.forEach(t=>{t.addedNodes.forEach(e),t.removedNodes.forEach(e)})}).observe(window.parent.document.body,{childList:!0,subtree:!0})},[r]),(0,T.jsx)(`div`,{style:{margin:`-1rem`,height:t},children:(0,T.jsx)(e,{})})}]},D=(e,t,n=!1)=>(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)(_,{showOnCollapse:n,children:[(0,T.jsxs)(`a`,{className:`flex items-center w-full`,children:[(0,T.jsx)(`img`,{className:`hidden group-data-[mode=expanded]/sidebar:block w-auto h-auto max-w-full`,src:`./logo-kubefirst.svg`,alt:`Company logo`}),(0,T.jsx)(`img`,{className:`block h-10 w-12 group-data-[mode=expanded]/sidebar:hidden`,src:`./ray.svg`,alt:`Company logo`})]}),(0,T.jsx)(f,{variant:`labelSmall`,className:`text-kubefirst-dark-blue-200 lowercase`,children:`v1.11.1`}),(0,T.jsx)(g,{className:`group-data-[mode=expanded]/sidebar:absolute group-data-[mode=expanded]/sidebar:right-4 group-data-[mode=expanded]/sidebar:top-5`})]}),(0,T.jsxs)(b,{className:`mt-4 group-data-[mode=expanded]/sidebar:mt-0`,children:[(0,T.jsxs)(x,{children:[(0,T.jsx)(m,{children:(0,T.jsxs)(`a`,{children:[(0,T.jsx)(i,{className:`w-6 h-6 shrink-0`}),(0,T.jsx)(h,{children:`Clusters`})]})}),(0,T.jsx)(m,{role:`button`,onClick:()=>t(`kubefirst`),isActive:e===`kubefirst`,children:(0,T.jsxs)(`a`,{children:[(0,T.jsx)(o,{className:`w-6 h-6 shrink-0`}),(0,T.jsx)(h,{children:`Environments`})]})})]}),(0,T.jsxs)(x,{title:`Admin settings`,titleClassName:`uppercase`,children:[(0,T.jsx)(m,{role:`button`,onClick:()=>t(`light`),isActive:e===`light`,children:(0,T.jsxs)(`a`,{children:[(0,T.jsx)(a,{className:`w-6 h-6 shrink-0`}),(0,T.jsx)(h,{children:`Plans & Billing`})]})}),(0,T.jsx)(m,{children:(0,T.jsxs)(`a`,{children:[(0,T.jsx)(s,{className:`w-6 h-6 shrink-0`}),(0,T.jsx)(h,{children:`Cloud accounts`})]})})]})]}),(0,T.jsx)(y,{children:(0,T.jsxs)(`span`,{className:`text-mistery flex items-center gap-2 justify-center font-semibold cursor-pointer`,children:[(0,T.jsx)(l,{className:`w-5 h-5`}),(0,T.jsx)(h,{children:`Upgrade to Business`})]})})]}),O={render:function(){let[e,t]=(0,w.useState)(`kubefirst`);return(0,T.jsx)(S,{theme:e,children:D(e,t)})}},k={render:function(){let[e,t]=(0,w.useState)(`kubefirst`);return(0,T.jsx)(S,{theme:e,mode:`collapsed`,children:D(e,t)})}},A={render:function(){let[e,t]=(0,w.useState)(`kubefirst`);return(0,T.jsx)(S,{theme:e,mode:`collapsed`,children:D(e,t,!0)})}},j={render:function(){let[e,t]=(0,w.useState)(`kubefirst`);return(0,T.jsx)(S,{theme:e,mode:`drawer`,children:D(e,t)})}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: function SidebarStory() {
    const [theme, setTheme] = useState<Theme>('kubefirst');
    return <SidebarPrimitive theme={theme}>
        {renderSidebarContent(theme, setTheme)}
      </SidebarPrimitive>;
  }
} satisfies Story`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: function CollapsedStory() {
    const [theme, setTheme] = useState<Theme>('kubefirst');
    return <SidebarPrimitive theme={theme} mode="collapsed">
        {renderSidebarContent(theme, setTheme)}
      </SidebarPrimitive>;
  }
} satisfies Story`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: function CollapsedVisibleLogoStory() {
    const [theme, setTheme] = useState<Theme>('kubefirst');
    return <SidebarPrimitive theme={theme} mode="collapsed">
        {renderSidebarContent(theme, setTheme, true)}
      </SidebarPrimitive>;
  }
} satisfies Story`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: function DrawerStory() {
    const [theme, setTheme] = useState<Theme>('kubefirst');
    return <SidebarPrimitive theme={theme} mode="drawer">
        {renderSidebarContent(theme, setTheme)}
      </SidebarPrimitive>;
  }
} satisfies Story`,...j.parameters?.docs?.source}}},M=[`Sidebar`,`CollapsedMode`,`CollapsedModeWithVisibleLogo`,`DrawerMode`]}))();export{k as CollapsedMode,A as CollapsedModeWithVisibleLogo,j as DrawerMode,O as Sidebar,M as __namedExportsOrder,E as default};