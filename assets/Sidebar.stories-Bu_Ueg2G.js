import{r as c,R as _,j as o}from"./iframe-DLrn8Gk9.js";import{d as z}from"./debounce-QIpfilki.js";import{S as G,R as M,C as W}from"./ScatterPlot-DNBBC4Fh.js";import{P as $}from"./PhotoLibrary-B5iLuQXM.js";import{T as k}from"./Typography-CHpAwWZY.js";import{c as y}from"./compiler-runtime-DxXHijtq.js";import{a as b,c as h}from"./index-CwGTy2we.js";import{P as C}from"./index-CE1qPSkB.js";import"./preload-helper-PPVm8Dsz.js";import"./isObject-CRGnl22A.js";function A(){return A=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(n[a]=i[a])}return n},A.apply(this,arguments)}function F(n,e){if(n==null)return{};var i=B(n,e),a,t;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(t=0;t<s.length;t++)a=s[t],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(n,a)&&(i[a]=n[a])}return i}function B(n,e){if(n==null)return{};var i={},a=Object.keys(n),t,s;for(s=0;s<a.length;s++)t=a[s],!(e.indexOf(t)>=0)&&(i[t]=n[t]);return i}var E=c.forwardRef(function(n,e){var i=n.color,a=i===void 0?"currentColor":i,t=n.size,s=t===void 0?24:t,r=F(n,["color","size"]);return _.createElement("svg",A({ref:e,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r),_.createElement("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"}))});E.propTypes={color:C.string,size:C.oneOfType([C.string,C.number])};E.displayName="Star";const D=b(["p-2","pb-5","text-white","flex","flex-col","gap-2"]),T=n=>{const e=y.c(5),{className:i,children:a}=n;let t;e[0]!==i?(t=h(D({className:i})),e[0]=i,e[1]=t):t=e[1];let s;return e[2]!==a||e[3]!==t?(s=o.jsx("footer",{className:t,children:a}),e[2]=a,e[3]=t,e[4]=s):s=e[4],s};T.displayName="KonstructSidebarFooter";T.__docgenInfo={description:"",methods:[],displayName:"KonstructSidebarFooter",props:{className:{required:!1,tsType:{name:"string"},description:""}},composes:["PropsWithChildren","VariantProps"]};const H=b(["md:px-4","md:py-5","flex","flex-col","justify-center","gap-1","group","relative","mb-8","[&>p]:pl-14","[&>p]:-mt-2","[&>img]:pt-3","[&>*>p]:absolute","[&>*>p]:bottom-0","[&>*>p]:-mt-2","[&>*>img]:pt-3","cursor-pointer"]),V=n=>{const e=y.c(5),{children:i,className:a}=n;let t;e[0]!==a?(t=h(H({className:a})),e[0]=a,e[1]=t):t=e[1];let s;return e[2]!==i||e[3]!==t?(s=o.jsx("header",{className:t,children:i}),e[2]=i,e[3]=t,e[4]=s):s=e[4],s};V.displayName="KonstructSidebarLogo";V.__docgenInfo={description:"",methods:[],displayName:"KonstructSidebarLogo",props:{className:{required:!1,tsType:{name:"string"},description:""}},composes:["PropsWithChildren","VariantProps"]};const U=b(["text-sm","font-bold","px-4","mt-3","mb-2","text-white","selection:bg-powder-500","selection:text-white"]),P=n=>{const e=y.c(5),{title:i,className:a,isVisible:t}=n;if(!(t===void 0?!0:t))return null;let r;e[0]!==a?(r=h(U({className:a})),e[0]=a,e[1]=r):r=e[1];let l;return e[2]!==r||e[3]!==i?(l=o.jsx("h2",{className:r,children:i}),e[2]=r,e[3]=i,e[4]=l):l=e[4],l};P.displayName="KonstructSidebarNavigationTitle";P.__docgenInfo={description:"",methods:[],displayName:"KonstructSidebarNavigationTitle",props:{title:{required:!0,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},isVisible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}},composes:["VariantProps","Pick"]};const X=b(["flex","flex-col","gap-1"]),w=n=>{const e=y.c(19);let i,a,t,s,r,l;if(e[0]!==n?({children:i,title:r,className:a,titleClassName:l,isVisible:s,...t}=n,e[0]=n,e[1]=i,e[2]=a,e[3]=t,e[4]=s,e[5]=r,e[6]=l):(i=e[1],a=e[2],t=e[3],s=e[4],r=e[5],l=e[6]),!(s===void 0?!0:s))return null;let m;e[7]!==t||e[8]!==r||e[9]!==l?(m=r?o.jsx(P,{title:r,className:l,...t}):null,e[7]=t,e[8]=r,e[9]=l,e[10]=m):m=e[10];let u;e[11]!==a?(u=h(X({className:a})),e[11]=a,e[12]=u):u=e[12];let f;e[13]!==i||e[14]!==u?(f=o.jsx("ul",{className:u,children:i}),e[13]=i,e[14]=u,e[15]=f):f=e[15];let x;return e[16]!==m||e[17]!==f?(x=o.jsxs(o.Fragment,{children:[m,f]}),e[16]=m,e[17]=f,e[18]=x):x=e[18],x};w.displayName="KonstructSidebarNavigationGroup";w.__docgenInfo={description:"",methods:[],displayName:"KonstructSidebarNavigationGroup",props:{title:{required:!1,tsType:{name:"string"},description:""},titleClassName:{required:!1,tsType:{name:"string"},description:""},isVisible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}},composes:["PropsWithChildren","VariantProps","Pick"]};const J=b(["[&>a]:flex","[&>a]:gap-2","[&>a]:no-underline","[&>a]:text-inherit","[&>a]:w-full","cursor-pointer","flex","font-normal","font-normal","gap-2","rounded-xl","md:px-4","md:py-2.5","p-2","text-black","w-full","text-[#9ea2c6]","hover:text-white","hover:bg-[#252a41]","selection:bg-powder-500","selection:text-white"],{variants:{isActive:{true:"",false:""}},compoundVariants:[{isActive:!0,class:["text-white","bg-[#252a41]"]}]}),N=n=>{const e=y.c(13);let i,a,t,s,r;if(e[0]!==n?({children:i,className:a,isVisible:r,isActive:s,...t}=n,e[0]=n,e[1]=i,e[2]=a,e[3]=t,e[4]=s,e[5]=r):(i=e[1],a=e[2],t=e[3],s=e[4],r=e[5]),!(r===void 0?!0:r))return null;let d;e[6]!==a||e[7]!==s?(d=h(J({className:a,isActive:s})),e[6]=a,e[7]=s,e[8]=d):d=e[8];let m;return e[9]!==i||e[10]!==t||e[11]!==d?(m=o.jsx("li",{...t,role:"option",className:d,children:i}),e[9]=i,e[10]=t,e[11]=d,e[12]=m):m=e[12],m};N.displayName="KonstructSidebarNavigationOption";N.__docgenInfo={description:"",methods:[],displayName:"KonstructSidebarNavigationOption",props:{className:{required:!1,tsType:{name:"string"},description:""},isVisible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},isActive:{required:!1,tsType:{name:"boolean"},description:""}}};const Q=b(["border-t","rounded-full","my-1.5"]),L=n=>{const e=y.c(4),{className:i}=n;let a;e[0]!==i?(a=h(Q({className:i})),e[0]=i,e[1]=a):a=e[1];let t;return e[2]!==a?(t=o.jsx("div",{className:a}),e[2]=a,e[3]=t):t=e[3],t};L.displayName="KonstructSidebarNavigationSeparator";L.__docgenInfo={description:"",methods:[],displayName:"KonstructSidebarNavigationSeparator",composes:["Pick","VariantProps"]};const Y=b(["flex","flex-1","w-full","flex-col"]),v=n=>{const e=y.c(5),{className:i,children:a}=n;let t;e[0]!==i?(t=h(Y({className:i})),e[0]=i,e[1]=t):t=e[1];let s;return e[2]!==a||e[3]!==t?(s=o.jsx("nav",{className:t,children:a}),e[2]=a,e[3]=t,e[4]=s):s=e[4],s};v.displayName="KonstructSidebarNavigation";v.NavigationGroup=w;v.NavigationOption=N;v.NavigationSeparator=L;v.NavigationTitle=P;v.__docgenInfo={description:"",methods:[{name:"NavigationGroup",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  title,
  className,
  titleClassName,
  isVisible = true,
  ...delegated
}`,optional:!1,type:null}],returns:null},{name:"NavigationOption",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  isVisible = true,
  isActive,
  ...delegated
}`,optional:!1,type:null}],returns:null},{name:"NavigationSeparator",docblock:null,modifiers:["static"],params:[{name:"{ className }",optional:!1,type:null}],returns:null},{name:"NavigationTitle",docblock:null,modifiers:["static"],params:[{name:"{ title, className, isVisible = true }",optional:!1,type:null}],returns:null}],displayName:"KonstructSidebarNavigation"};const Z=b(["duration-200","ease-linear","flex","flex-col","flex-shrink-0","group/sidebar","h-full","px-4","relative","transition-all","w-18","md:w-64","bg-kubefirst-dark-blue-900"]),ee=b(["absolute","top-0","right-0","h-full","opacity-0","group-hover/sidebar:opacity-100","cursor-col-resize","w-[2px]","shadow","shadow-slate-200","bg-slate-200"]),I=({canResize:n=!0,children:e,dividerClassName:i,maxWith:a=300,minWith:t=240,theme:s,wrapperClassName:r})=>{const l=c.useRef(null),d=c.useRef(null),m=c.useRef(!1),u=c.useCallback(p=>{if(!m.current){l.current&&(l.current.style.opacity="0");return}let j=p.clientX;j<t&&(j=t),j>a&&(j=a),d.current&&l.current&&(d.current.style.width=`${j}px`,l.current.classList.add("opacity-100"))},[a,t]),f=c.useCallback(()=>{m.current=!1,l.current&&l.current.classList.remove("opacity-100"),document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",f)},[u]),x=c.useCallback(p=>{p.preventDefault(),p.stopPropagation(),m.current=!0,document.addEventListener("mousemove",u),document.addEventListener("mouseup",f)},[u,f]),S=c.useMemo(()=>c.Children.toArray(e),[e]),R=c.useMemo(()=>c.Children.toArray(S).find(p=>c.isValidElement(p)&&p.type===V),[S]),q=c.useMemo(()=>c.Children.toArray(S).find(p=>c.isValidElement(p)&&p.type===v),[S]),K=c.useMemo(()=>c.Children.toArray(S).find(p=>c.isValidElement(p)&&p.type===T),[S]);return o.jsxs("aside",{ref:d,className:h(Z({className:r})),"data-theme":s,children:[R,q,K,n&&o.jsx("div",{ref:l,className:h(ee({className:i})),onMouseDown:x})]})};I.displayName="Sidebar.Wrapper";I.__docgenInfo={description:"",methods:[],displayName:"Sidebar.Wrapper",props:{canResize:{required:!1,tsType:{name:"boolean"},description:"Whether the sidebar can be resized by dragging",defaultValue:{value:"true",computed:!1}},dividerClassName:{required:!1,tsType:{name:"string"},description:"Additional CSS classes for the divider"},maxWith:{required:!1,tsType:{name:"number"},description:"Maximum width when resizing (in pixels)",defaultValue:{value:"300",computed:!1}},minWith:{required:!1,tsType:{name:"number"},description:"Minimum width when resizing (in pixels)",defaultValue:{value:"240",computed:!1}},theme:{required:!1,tsType:{name:"Theme"},description:"Theme override for this component"},wrapperClassName:{required:!1,tsType:{name:"string"},description:"Additional CSS classes for the wrapper"}},composes:["VariantProps","PropsWithChildren"]};const g=n=>{const e=y.c(2);let i;return e[0]!==n?(i=o.jsx(I,{...n}),e[0]=n,e[1]=i):i=e[1],i};g.displayName="KonstructSidebar";g.Footer=T;g.Logo=V;g.Navigation=v;g.NavigationGroup=w;g.NavigationOption=N;g.NavigationSeparator=L;g.__docgenInfo={description:`A compound component for building application sidebars.
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

@see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-sidebar--docs Storybook}`,methods:[{name:"Footer",docblock:null,modifiers:["static"],params:[{name:"{ className, children }",optional:!1,type:null}],returns:null},{name:"Logo",docblock:null,modifiers:["static"],params:[{name:"{ children, className }",optional:!1,type:null}],returns:null},{name:"Navigation",docblock:null,modifiers:["static"],params:[{name:`{
  className,
  children,
}`,optional:!1,type:null}],returns:null},{name:"NavigationGroup",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  title,
  className,
  titleClassName,
  isVisible = true,
  ...delegated
}`,optional:!1,type:null}],returns:null},{name:"NavigationOption",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  isVisible = true,
  isActive,
  ...delegated
}`,optional:!1,type:null}],returns:null},{name:"NavigationSeparator",docblock:null,modifiers:["static"],params:[{name:"{ className }",optional:!1,type:null}],returns:null}],displayName:"KonstructSidebar"};const me={title:"In Review/Sidebar",component:g,decorators:[n=>{const[e,i]=c.useState(window.innerHeight),a=z(()=>i(window.innerHeight),150);return c.useEffect(()=>{const t=window.parent.document.getElementById("storybook-panel-root");if(!t)return;const s=new ResizeObserver(a);return s.observe(t),()=>{s.disconnect()}},[a]),c.useEffect(()=>{const t=l=>{l?.querySelector(".sidebar-container")&&a()},s=l=>{l.forEach(d=>{d.addedNodes.forEach(t),d.removedNodes.forEach(t)})};new MutationObserver(s).observe(window.parent.document.body,{childList:!0,subtree:!0})},[a]),o.jsx("div",{style:{margin:"-1rem",height:e},children:o.jsx(n,{})})}]},O={render:function(){const[e,i]=c.useState("kubefirst");return o.jsxs(g,{theme:e,children:[o.jsx(V,{children:o.jsxs("a",{className:"flex items-center gap-2",children:[o.jsx("img",{className:"flex-1 shrink-0 hidden md:block",src:"./logo-kubefirst.svg",alt:"Company logo"}),o.jsx("img",{className:"block h-10 w-12 md:hidden",src:"./ray.svg",alt:"Company logo"}),o.jsx(k,{variant:"labelSmall",className:"md:left-[35%] !bottom-[-20px] md:!bottom-0 text-[#ABADC6] lowercase",children:"v1.11.1"})]})}),o.jsxs(v,{className:"mt-4 md:mt-0",children:[o.jsxs(w,{children:[o.jsx(N,{children:o.jsxs("a",{className:"flex items-center gap-2 md:mt-0",children:[o.jsx(G,{className:"w-6 h-6"})," ",o.jsx(k,{variant:"body1",className:"hidden md:block text-inherit",children:"Clusters"})]})}),o.jsxs(N,{role:"button",onClick:()=>i("kubefirst"),isActive:e==="kubefirst",children:[o.jsx($,{className:"w-6 h-6"})," ",o.jsx(k,{variant:"body1",className:"hidden md:block text-inherit",children:"Environments"})]})]}),o.jsxs(w,{title:"Admin settings",titleClassName:"uppercase hidden md:block ",children:[o.jsxs(N,{role:"button",onClick:()=>i("light"),isActive:e==="light",children:[o.jsx(M,{className:"w-6 h-6"})," ",o.jsx(k,{variant:"body1",className:"hidden md:block text-inherit",children:"Plans & Billing"})]}),o.jsx(N,{children:o.jsxs("a",{className:"flex items-center gap-2",children:[o.jsx(W,{className:"w-6 h-6"})," ",o.jsx(k,{variant:"body1",className:"hidden md:block text-inherit",children:"Cloud accounts"})]})})]})]}),o.jsx(T,{children:o.jsxs("span",{className:"text-[#81e2b4] flex items-center gap-2 justify-center font-semibold cursor-pointer",children:[o.jsx(E,{className:"w-5 h-5"})," ",o.jsx(k,{variant:"body1",className:"hidden md:block text-inherit",children:"Upgrade to Business"})]})})]})}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...O.parameters?.docs?.source}}};const pe=["Sidebar"];export{O as Sidebar,pe as __namedExportsOrder,me as default};
