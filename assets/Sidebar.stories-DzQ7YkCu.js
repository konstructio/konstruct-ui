import{r as i,R as L,j as t}from"./iframe-BP6xk-sd.js";import{d as I}from"./debounce-C7F5N9Sc.js";import{T as v}from"./Typography-baU5Ymfp.js";import{a as p,c as m}from"./index-B-7A89sm.js";import{P as q}from"./index-BD8_zldL.js";import"./preload-helper-PPVm8Dsz.js";function O(){return O=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var o=arguments[a];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},O.apply(this,arguments)}function R(e,a){if(e==null)return{};var o=K(e,a),n,s;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],!(a.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function K(e,a){if(e==null)return{};var o={},n=Object.keys(e),s,r;for(r=0;r<n.length;r++)s=n[r],!(a.indexOf(s)>=0)&&(o[s]=e[s]);return o}var E=i.forwardRef(function(e,a){var o=e.color,n=o===void 0?"currentColor":o,s=e.size,r=s===void 0?24:s,w=R(e,["color","size"]);return L.createElement("svg",O({ref:a,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},w),L.createElement("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"}))});E.propTypes={color:q.string,size:q.oneOfType([q.string,q.number])};E.displayName="Star";const H=p(["p-2","pb-5","text-white","flex","flex-col","gap-2"]),y=({className:e,children:a})=>t.jsx("footer",{className:m(H({className:e})),children:a});y.displayName="KonstructSidebarFooter";y.__docgenInfo={description:"",methods:[],displayName:"KonstructSidebarFooter",props:{className:{required:!1,tsType:{name:"string"},description:""}},composes:["PropsWithChildren","VariantProps"]};const z=p(["md:px-4","md:py-5","flex","flex-col","justify-center","gap-1","group","relative","mb-8","[&>p]:pl-14","[&>p]:-mt-2","[&>img]:pt-3","[&>*>p]:absolute","[&>*>p]:bottom-0","[&>*>p]:-mt-2","[&>*>img]:pt-3","cursor-pointer"]),x=({children:e,className:a})=>t.jsx("header",{className:m(z({className:a})),children:e});x.displayName="KonstructSidebarLogo";x.__docgenInfo={description:"",methods:[],displayName:"KonstructSidebarLogo",props:{className:{required:!1,tsType:{name:"string"},description:""}},composes:["PropsWithChildren","VariantProps"]};const G=p(["text-sm","font-bold","px-4","mt-3","mb-2","text-white","selection:bg-powder-500","selection:text-white"]),T=({title:e,className:a,isVisible:o=!0})=>o?t.jsx("h2",{className:m(G({className:a})),children:e}):null;T.displayName="KonstructSidebarNavigationTitle";T.__docgenInfo={description:"",methods:[],displayName:"KonstructSidebarNavigationTitle",props:{title:{required:!0,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},isVisible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}},composes:["VariantProps","Pick"]};const B=p(["flex","flex-col","gap-1"]),b=({children:e,title:a,className:o,titleClassName:n,isVisible:s=!0,...r})=>s?t.jsxs(t.Fragment,{children:[a?t.jsx(T,{title:a,className:n,...r}):null,t.jsx("ul",{className:m(B({className:o})),children:e})]}):null;b.displayName="KonstructSidebarNavigationGroup";b.__docgenInfo={description:"",methods:[],displayName:"KonstructSidebarNavigationGroup",props:{title:{required:!1,tsType:{name:"string"},description:""},titleClassName:{required:!1,tsType:{name:"string"},description:""},isVisible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}},composes:["PropsWithChildren","VariantProps","Pick"]};const W=p(["[&>a]:flex","[&>a]:gap-2","[&>a]:no-underline","[&>a]:text-inherit","[&>a]:w-full","cursor-pointer","flex","font-normal","font-normal","gap-2","rounded-xl","md:px-4","md:py-2.5","p-2","text-black","w-full","text-[#9ea2c6]","hover:text-white","hover:bg-[#252a41]","selection:bg-powder-500","selection:text-white"],{variants:{isActive:{true:"",false:""}},compoundVariants:[{isActive:!0,class:["text-white","bg-[#252a41]"]}]}),g=({children:e,className:a,isVisible:o=!0,isActive:n,...s})=>o?t.jsx("li",{...s,role:"option",className:m(W({className:a,isActive:n})),children:e}):null;g.displayName="KonstructSidebarNavigationOption";g.__docgenInfo={description:"",methods:[],displayName:"KonstructSidebarNavigationOption",props:{className:{required:!1,tsType:{name:"string"},description:""},isVisible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},isActive:{required:!1,tsType:{name:"boolean"},description:""}}};const F=p(["border-t","rounded-full","my-1.5"]),j=({className:e})=>t.jsx("div",{className:m(F({className:e}))});j.displayName="KonstructSidebarNavigationSeparator";j.__docgenInfo={description:"",methods:[],displayName:"KonstructSidebarNavigationSeparator",composes:["Pick","VariantProps"]};const D=p(["flex","flex-1","w-full","flex-col"]),u=({className:e,children:a})=>t.jsx("nav",{className:m(D({className:e})),children:a});u.displayName="KonstructSidebarNavigation";u.NavigationGroup=b;u.NavigationOption=g;u.NavigationSeparator=j;u.NavigationTitle=T;u.__docgenInfo={description:"",methods:[{name:"NavigationGroup",docblock:null,modifiers:["static"],params:[{name:`{
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
}`,optional:!1,type:null}],returns:null},{name:"NavigationSeparator",docblock:null,modifiers:["static"],params:[{name:"{ className }",optional:!1,type:null}],returns:null},{name:"NavigationTitle",docblock:null,modifiers:["static"],params:[{name:`{
  title,
  className,
  isVisible = true,
}`,optional:!1,type:null}],returns:null}],displayName:"KonstructSidebarNavigation"};const $=p(["duration-200","ease-linear","flex","flex-col","flex-shrink-0","group/sidebar","h-full","px-4","relative","transition-all","w-18","md:w-64","bg-kubefirst-dark-blue-900"]),U=p(["absolute","top-0","right-0","h-full","opacity-0","group-hover/sidebar:opacity-100","cursor-col-resize","w-[2px]","shadow","shadow-slate-200","bg-slate-200"]),P=({canResize:e=!0,children:a,dividerClassName:o,maxWith:n=300,minWith:s=240,theme:r,wrapperClassName:w})=>{const c=i.useRef(null),h=i.useRef(null),C=i.useRef(!1),S=i.useCallback(l=>{if(!C.current){c.current&&(c.current.style.opacity="0");return}let N=l.clientX;N<s&&(N=s),N>n&&(N=n),h.current&&c.current&&(h.current.style.width=`${N}px`,c.current.classList.add("opacity-100"))},[n,s]),V=i.useCallback(()=>{C.current=!1,c.current&&c.current.classList.remove("opacity-100"),document.removeEventListener("mousemove",S),document.removeEventListener("mouseup",V)},[S]),Z=i.useCallback(l=>{l.preventDefault(),l.stopPropagation(),C.current=!0,document.addEventListener("mousemove",S),document.addEventListener("mouseup",V)},[S,V]),f=i.useMemo(()=>i.Children.toArray(a),[a]),_=i.useMemo(()=>i.Children.toArray(f).find(l=>i.isValidElement(l)&&l.type===x),[f]),A=i.useMemo(()=>i.Children.toArray(f).find(l=>i.isValidElement(l)&&l.type===u),[f]),M=i.useMemo(()=>i.Children.toArray(f).find(l=>i.isValidElement(l)&&l.type===y),[f]);return t.jsxs("aside",{ref:h,className:m($({className:w})),"data-theme":r,children:[_,A,M,e&&t.jsx("div",{ref:c,className:m(U({className:o})),onMouseDown:Z})]})};P.displayName="Sidebar.Wrapper";P.__docgenInfo={description:"",methods:[],displayName:"Sidebar.Wrapper",props:{canResize:{required:!1,tsType:{name:"boolean"},description:"Whether the sidebar can be resized by dragging",defaultValue:{value:"true",computed:!1}},dividerClassName:{required:!1,tsType:{name:"string"},description:"Additional CSS classes for the divider"},maxWith:{required:!1,tsType:{name:"number"},description:"Maximum width when resizing (in pixels)",defaultValue:{value:"300",computed:!1}},minWith:{required:!1,tsType:{name:"number"},description:"Minimum width when resizing (in pixels)",defaultValue:{value:"240",computed:!1}},theme:{required:!1,tsType:{name:"Theme"},description:"Theme override for this component"},wrapperClassName:{required:!1,tsType:{name:"string"},description:"Additional CSS classes for the wrapper"}},composes:["VariantProps","PropsWithChildren"]};const d=e=>t.jsx(P,{...e});d.displayName="KonstructSidebar";d.Footer=y;d.Logo=x;d.Navigation=u;d.NavigationGroup=b;d.NavigationOption=g;d.NavigationSeparator=j;d.__docgenInfo={description:`A compound component for building application sidebars.
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
}`,optional:!1,type:null}],returns:null},{name:"NavigationSeparator",docblock:null,modifiers:["static"],params:[{name:"{ className }",optional:!1,type:null}],returns:null}],displayName:"KonstructSidebar"};const Q=e=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",fill:"currentColor",...e},i.createElement("path",{d:"M262.42-187.27q-80.58 0-137.46-55.87-56.88-55.87-56.88-136.63 0-71.61 46.59-127.38 46.6-55.77 117.91-65.12 17.85-88.03 87.5-144.25 69.66-56.21 159.92-56.21 105.96 0 179.75 74.12 73.79 74.11 73.79 179.42v22.73h12.31q61.61 2.69 103.84 47.79 42.23 45.09 42.23 106.55 0 64.49-45.12 109.67-45.13 45.18-110.03 45.18H262.42Zm0-55.96H736.8q41.51 0 70.33-28.69 28.83-28.69 28.83-70.23 0-41.54-28.71-70.13-28.7-28.59-70.28-28.59h-59.39v-78.25q0-82.02-57.78-139.83-57.79-57.82-139.77-57.82-81.98 0-139.76 57.79-57.79 57.79-57.79 139.79h-19.93q-57.63 0-98.07 40.19-40.44 40.19-40.44 97.79 0 57.59 40.44 97.79 40.44 40.19 97.94 40.19ZM480-480Z"})),X=e=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",fill:"currentColor",...e},i.createElement("path",{d:"M363.58-404.54h364.96L608.42-562.77l-95.07 121.54-61.97-76.88-87.8 113.57ZM318.27-260q-28.44 0-48.35-19.92Q250-299.83 250-328.27v-455.38q0-28.44 19.92-48.36 19.91-19.91 48.35-19.91h455.38q28.44 0 48.36 19.91 19.91 19.92 19.91 48.36v455.38q0 28.44-19.91 48.35Q802.09-260 773.65-260H318.27Zm0-55.96h455.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-455.38q0-4.62-3.85-8.47-3.84-3.84-8.46-3.84H318.27q-4.62 0-8.46 3.84-3.85 3.85-3.85 8.47v455.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85ZM186.35-128.08q-28.44 0-48.36-19.92-19.91-19.91-19.91-48.35v-511.34h55.96v511.34q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85h511.34v55.96H186.35Zm119.61-667.88v480-480Z"})),J=e=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",fill:"currentColor",...e},i.createElement("path",{d:"M243.23-108.08q-39.82 0-67.89-27.62-28.07-27.63-28.07-67.35v-92.91h118.39v-547.46l54.57 46.07 54.5-46.07 54.5 46.07 55.5-46.07 54.5 46.07 54.5-46.07 55.41 46.07 54.41-46.07 55.41 46.07 53.77-46.07v640.19q0 39.9-28.07 67.53-28.07 27.62-67.89 27.62H243.23Zm473.54-55.96q17 0 28.5-11.05 11.5-11.06 11.5-27.91v-553.77H321.62v460.81h355.96v92.73q0 17.08 11.05 28.14 11.06 11.05 28.14 11.05ZM370.12-610.81v-55.96h222.07v55.96H370.12Zm0 118.39v-55.96h222.07v55.96H370.12Zm304.75-113q-13.68 0-23.52-9.85-9.85-9.85-9.85-23.52t9.85-23.52q9.84-9.84 23.52-9.84 13.67 0 23.51 9.84 9.85 9.85 9.85 23.52t-9.85 23.52q-9.84 9.85-23.51 9.85Zm0 118.38q-13.68 0-23.52-9.84-9.85-9.85-9.85-23.52 0-13.68 9.85-23.52 9.84-9.85 23.52-9.85 13.67 0 23.51 9.85 9.85 9.84 9.85 23.52 0 13.67-9.85 23.52-9.84 9.84-23.51 9.84Zm-431.8 323h378.55V-240H203.23v36.77q0 17.08 11.45 28.14 11.46 11.05 28.39 11.05Zm-39.84 0V-240v75.96Z"})),Y=e=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",fill:"currentColor",...e},i.createElement("path",{d:"M680-120q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T760-280q0-33-23.5-56.5T680-360q-33 0-56.5 23.5T600-280q0 33 23.5 56.5T680-200Zm-400-40q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T360-400q0-33-23.5-56.5T280-480q-33 0-56.5 23.5T200-400q0 33 23.5 56.5T280-320Zm160-240q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T520-720q0-33-23.5-56.5T440-800q-33 0-56.5 23.5T360-720q0 33 23.5 56.5T440-640Zm240 360ZM280-400Zm160-320Z"})),oe={title:"In Review/Sidebar",component:d,decorators:[e=>{const[a,o]=i.useState(window.innerHeight),n=I(()=>o(window.innerHeight),150);return i.useEffect(()=>{const s=window.parent.document.getElementById("storybook-panel-root");if(!s)return;const r=new ResizeObserver(n);return r.observe(s),()=>{r.disconnect()}},[n]),i.useEffect(()=>{const s=c=>{c?.querySelector(".sidebar-container")&&n()},r=c=>{c.forEach(h=>{h.addedNodes.forEach(s),h.removedNodes.forEach(s)})};new MutationObserver(r).observe(window.parent.document.body,{childList:!0,subtree:!0})},[n]),t.jsx("div",{style:{margin:"-1rem",height:a},children:t.jsx(e,{})})}]},k={render:function(){const[a,o]=i.useState("kubefirst");return t.jsxs(d,{theme:a,children:[t.jsx(x,{children:t.jsxs("a",{className:"flex items-center gap-2",children:[t.jsx("img",{className:"flex-1 shrink-0 hidden md:block",src:"./logo-kubefirst.svg",alt:"Company logo"}),t.jsx("img",{className:"block h-10 w-12 md:hidden",src:"./ray.svg",alt:"Company logo"}),t.jsx(v,{variant:"labelSmall",className:"md:left-[35%] !bottom-[-20px] md:!bottom-0 text-[#ABADC6] lowercase",children:"v1.11.1"})]})}),t.jsxs(u,{className:"mt-4 md:mt-0",children:[t.jsxs(b,{children:[t.jsx(g,{children:t.jsxs("a",{className:"flex items-center gap-2 md:mt-0",children:[t.jsx(Y,{className:"w-6 h-6"})," ",t.jsx(v,{variant:"body1",className:"hidden md:block text-inherit",children:"Clusters"})]})}),t.jsxs(g,{role:"button",onClick:()=>o("kubefirst"),isActive:a==="kubefirst",children:[t.jsx(X,{className:"w-6 h-6"})," ",t.jsx(v,{variant:"body1",className:"hidden md:block text-inherit",children:"Environments"})]})]}),t.jsxs(b,{title:"Admin settings",titleClassName:"uppercase hidden md:block ",children:[t.jsxs(g,{role:"button",onClick:()=>o("light"),isActive:a==="light",children:[t.jsx(J,{className:"w-6 h-6"})," ",t.jsx(v,{variant:"body1",className:"hidden md:block text-inherit",children:"Plans & Billing"})]}),t.jsx(g,{children:t.jsxs("a",{className:"flex items-center gap-2",children:[t.jsx(Q,{className:"w-6 h-6"})," ",t.jsx(v,{variant:"body1",className:"hidden md:block text-inherit",children:"Cloud accounts"})]})})]})]}),t.jsx(y,{children:t.jsxs("span",{className:"text-[#81e2b4] flex items-center gap-2 justify-center font-semibold cursor-pointer",children:[t.jsx(E,{className:"w-5 h-5"})," ",t.jsx(v,{variant:"body1",className:"hidden md:block text-inherit",children:"Upgrade to Business"})]})})]})}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...k.parameters?.docs?.source}}};const re=["Sidebar"];export{k as Sidebar,re as __namedExportsOrder,oe as default};
