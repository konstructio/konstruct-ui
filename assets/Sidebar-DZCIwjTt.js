import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{o as n,t as r}from"./iframe-BhrQdzJp.js";import{a as i,n as a,r as o,t as s}from"./dist-D8TPiX_U.js";var c,l=e((()=>{a(),c=s([`p-2`,`pb-5`,`text-white`,`flex`,`flex-col`,`gap-2`])})),u,d,f=e((()=>{i(),l(),u=r(),d=({className:e,children:t})=>(0,u.jsx)(`footer`,{className:o(c({className:e})),children:t}),d.displayName=`KonstructSidebarFooter`,d.__docgenInfo={description:``,methods:[],displayName:`KonstructSidebarFooter`,props:{className:{required:!1,tsType:{name:`string`},description:``}},composes:[`PropsWithChildren`,`VariantProps`]}})),p,m=e((()=>{a(),p=s([`md:px-4`,`md:py-5`,`flex`,`flex-col`,`justify-center`,`gap-1`,`group`,`relative`,`mb-8`,`[&>p]:pl-14`,`[&>p]:-mt-2`,`[&>img]:pt-3`,`[&>*>p]:absolute`,`[&>*>p]:bottom-0`,`[&>*>p]:-mt-2`,`[&>*>img]:pt-3`,`cursor-pointer`])})),h,g,_=e((()=>{i(),m(),h=r(),g=({children:e,className:t})=>(0,h.jsx)(`header`,{className:o(p({className:t})),children:e}),g.displayName=`KonstructSidebarLogo`,g.__docgenInfo={description:``,methods:[],displayName:`KonstructSidebarLogo`,props:{className:{required:!1,tsType:{name:`string`},description:``}},composes:[`PropsWithChildren`,`VariantProps`]}})),v,y=e((()=>{a(),v=s([`text-sm`,`font-bold`,`px-4`,`mt-3`,`mb-2`,`text-white`,`selection:bg-powder-500`,`selection:text-white`])})),b,x,S=e((()=>{i(),y(),b=r(),x=({title:e,className:t,isVisible:n=!0})=>n?(0,b.jsx)(`h2`,{className:o(v({className:t})),children:e}):null,x.displayName=`KonstructSidebarNavigationTitle`,x.__docgenInfo={description:``,methods:[],displayName:`KonstructSidebarNavigationTitle`,props:{title:{required:!0,tsType:{name:`string`},description:``},className:{required:!1,tsType:{name:`string`},description:``},isVisible:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}}},composes:[`VariantProps`,`Pick`]}})),C,w=e((()=>{a(),C=s([`flex`,`flex-col`,`gap-1`])})),T,E,D=e((()=>{i(),S(),w(),T=r(),E=({children:e,title:t,className:n,titleClassName:r,isVisible:i=!0,...a})=>i?(0,T.jsxs)(T.Fragment,{children:[t?(0,T.jsx)(x,{title:t,className:r,...a}):null,(0,T.jsx)(`ul`,{className:o(C({className:n})),children:e})]}):null,E.displayName=`KonstructSidebarNavigationGroup`,E.__docgenInfo={description:``,methods:[],displayName:`KonstructSidebarNavigationGroup`,props:{title:{required:!1,tsType:{name:`string`},description:``},titleClassName:{required:!1,tsType:{name:`string`},description:``},isVisible:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}}},composes:[`PropsWithChildren`,`VariantProps`,`Pick`]}})),O,k=e((()=>{a(),O=s([`[&>a]:flex`,`[&>a]:gap-2`,`[&>a]:no-underline`,`[&>a]:text-inherit`,`[&>a]:w-full`,`cursor-pointer`,`flex`,`font-normal`,`font-normal`,`gap-2`,`rounded-xl`,`md:px-4`,`md:py-2.5`,`p-2`,`text-black`,`w-full`,`text-[#9ea2c6]`,`hover:text-white`,`hover:bg-[#252a41]`,`selection:bg-powder-500`,`selection:text-white`],{variants:{isActive:{true:``,false:``}},compoundVariants:[{isActive:!0,class:[`text-white`,`bg-[#252a41]`]}]})})),A,j,M=e((()=>{i(),k(),A=r(),j=({children:e,className:t,isVisible:n=!0,isActive:r,...i})=>n?(0,A.jsx)(`li`,{...i,role:`option`,className:o(O({className:t,isActive:r})),children:e}):null,j.displayName=`KonstructSidebarNavigationOption`,j.__docgenInfo={description:``,methods:[],displayName:`KonstructSidebarNavigationOption`,props:{className:{required:!1,tsType:{name:`string`},description:``},isVisible:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},isActive:{required:!1,tsType:{name:`boolean`},description:``}}}})),N,P=e((()=>{a(),N=s([`border-t`,`rounded-full`,`my-1.5`])})),F,I,L=e((()=>{i(),P(),F=r(),I=({className:e})=>(0,F.jsx)(`div`,{className:o(N({className:e}))}),I.displayName=`KonstructSidebarNavigationSeparator`,I.__docgenInfo={description:``,methods:[],displayName:`KonstructSidebarNavigationSeparator`,composes:[`Pick`,`VariantProps`]}})),R,z=e((()=>{a(),R=s([`flex`,`flex-1`,`w-full`,`flex-col`])})),B,V,H=e((()=>{i(),D(),M(),L(),S(),z(),B=r(),V=({className:e,children:t})=>(0,B.jsx)(`nav`,{className:o(R({className:e})),children:t}),V.displayName=`KonstructSidebarNavigation`,V.NavigationGroup=E,V.NavigationOption=j,V.NavigationSeparator=I,V.NavigationTitle=x,V.__docgenInfo={description:``,methods:[{name:`NavigationGroup`,docblock:null,modifiers:[`static`],params:[{name:`{
  children,
  title,
  className,
  titleClassName,
  isVisible = true,
  ...delegated
}`,optional:!1,type:null}],returns:null},{name:`NavigationOption`,docblock:null,modifiers:[`static`],params:[{name:`{
  children,
  className,
  isVisible = true,
  isActive,
  ...delegated
}`,optional:!1,type:null}],returns:null},{name:`NavigationSeparator`,docblock:null,modifiers:[`static`],params:[{name:`{ className }`,optional:!1,type:null}],returns:null},{name:`NavigationTitle`,docblock:null,modifiers:[`static`],params:[{name:`{ title, className, isVisible = true }`,optional:!1,type:null}],returns:null}],displayName:`KonstructSidebarNavigation`}})),U,W,G=e((()=>{a(),U=s([`duration-200`,`ease-linear`,`flex`,`flex-col`,`flex-shrink-0`,`group/sidebar`,`h-full`,`px-4`,`relative`,`transition-all`,`w-18`,`md:w-64`,`bg-kubefirst-dark-blue-900`]),W=s([`absolute`,`top-0`,`right-0`,`h-full`,`opacity-0`,`group-hover/sidebar:opacity-100`,`cursor-col-resize`,`w-[2px]`,`shadow`,`shadow-slate-200`,`bg-slate-200`])})),K,q,J,Y=e((()=>{K=t(n(),1),i(),G(),f(),_(),H(),q=r(),J=({canResize:e=!0,children:t,dividerClassName:n,maxWith:r=300,minWith:i=240,theme:a,wrapperClassName:s})=>{let c=(0,K.useRef)(null),l=(0,K.useRef)(null),u=(0,K.useRef)(!1),f=(0,K.useCallback)(e=>{if(!u.current){c.current&&(c.current.style.opacity=`0`);return}let t=e.clientX;t<i&&(t=i),t>r&&(t=r),l.current&&c.current&&(l.current.style.width=`${t}px`,c.current.classList.add(`opacity-100`))},[r,i]),p=(0,K.useCallback)(()=>{u.current=!1,c.current&&c.current.classList.remove(`opacity-100`),document.removeEventListener(`mousemove`,f),document.removeEventListener(`mouseup`,p)},[f]),m=(0,K.useCallback)(e=>{e.preventDefault(),e.stopPropagation(),u.current=!0,document.addEventListener(`mousemove`,f),document.addEventListener(`mouseup`,p)},[f,p]),h=(0,K.useMemo)(()=>K.Children.toArray(t),[t]),_=(0,K.useMemo)(()=>K.Children.toArray(h).find(e=>(0,K.isValidElement)(e)&&e.type===g),[h]),v=(0,K.useMemo)(()=>K.Children.toArray(h).find(e=>(0,K.isValidElement)(e)&&e.type===V),[h]),y=(0,K.useMemo)(()=>K.Children.toArray(h).find(e=>(0,K.isValidElement)(e)&&e.type===d),[h]);return(0,q.jsxs)(`aside`,{ref:l,className:o(U({className:s})),"data-theme":a,children:[_,v,y,e&&(0,q.jsx)(`div`,{ref:c,className:o(W({className:n})),onMouseDown:m})]})},J.displayName=`Sidebar.Wrapper`,J.__docgenInfo={description:``,methods:[],displayName:`Sidebar.Wrapper`,props:{canResize:{required:!1,tsType:{name:`boolean`},description:`Whether the sidebar can be resized by dragging`,defaultValue:{value:`true`,computed:!1}},dividerClassName:{required:!1,tsType:{name:`string`},description:`Additional CSS classes for the divider`},maxWith:{required:!1,tsType:{name:`number`},description:`Maximum width when resizing (in pixels)`,defaultValue:{value:`300`,computed:!1}},minWith:{required:!1,tsType:{name:`number`},description:`Minimum width when resizing (in pixels)`,defaultValue:{value:`240`,computed:!1}},theme:{required:!1,tsType:{name:`Theme`},description:`Theme override for this component`},wrapperClassName:{required:!1,tsType:{name:`string`},description:`Additional CSS classes for the wrapper`}},composes:[`VariantProps`,`PropsWithChildren`]}})),X=e((()=>{f(),_(),H(),D(),M(),L(),S(),Y()})),Z,Q,$=e((()=>{X(),Z=r(),Q=e=>(0,Z.jsx)(J,{...e}),Q.displayName=`KonstructSidebar`,Q.Footer=d,Q.Logo=g,Q.Navigation=V,Q.NavigationGroup=E,Q.NavigationOption=j,Q.NavigationSeparator=I,Q.__docgenInfo={description:`A compound component for building application sidebars.
Includes sub-components for logo, navigation, groups, options, and footer.

@example
\`\`\`tsx
<Sidebar canResize minWith={200} maxWith={400} theme="dark">
  <Sidebar.Logo>
    <img src="/logo.svg" alt="Logo" />
  </Sidebar.Logo>
  <Sidebar.Navigation>
    <Sidebar.NavigationGroup label="Menu">
      <Sidebar.NavigationOption href="/" icon={<Home />}>
        Home
      </Sidebar.NavigationOption>
    </Sidebar.NavigationGroup>
  </Sidebar.Navigation>
  <Sidebar.Footer>Version 1.0</Sidebar.Footer>
</Sidebar>
\`\`\`

@see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-sidebar--docs Storybook}`,methods:[{name:`Footer`,docblock:null,modifiers:[`static`],params:[{name:`{ className, children }`,optional:!1,type:null}],returns:null},{name:`Logo`,docblock:null,modifiers:[`static`],params:[{name:`{ children, className }`,optional:!1,type:null}],returns:null},{name:`Navigation`,docblock:null,modifiers:[`static`],params:[{name:`{
  className,
  children,
}`,optional:!1,type:null}],returns:null},{name:`NavigationGroup`,docblock:null,modifiers:[`static`],params:[{name:`{
  children,
  title,
  className,
  titleClassName,
  isVisible = true,
  ...delegated
}`,optional:!1,type:null}],returns:null},{name:`NavigationOption`,docblock:null,modifiers:[`static`],params:[{name:`{
  children,
  className,
  isVisible = true,
  isActive,
  ...delegated
}`,optional:!1,type:null}],returns:null},{name:`NavigationSeparator`,docblock:null,modifiers:[`static`],params:[{name:`{ className }`,optional:!1,type:null}],returns:null}],displayName:`KonstructSidebar`}}));export{E as a,j as i,$ as n,g as o,V as r,d as s,Q as t};