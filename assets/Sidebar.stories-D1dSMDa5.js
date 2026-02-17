import{r as o,R as A,j as e}from"./iframe-RFUXcFU1.js";import{d as K}from"./debounce-DdzKvR2M.js";import{S as z,R as G,C as M}from"./ScatterPlot-D9xwBnBu.js";import{P as W}from"./PhotoLibrary-DPp6Ce8w.js";import{T as b}from"./Typography-CVd2-NB0.js";import{a as p,c as m}from"./index-BIgQ6y5l.js";import{P as w}from"./index-hF9rmkUV.js";import"./preload-helper-PPVm8Dsz.js";import"./isObject-DcT2bIqL.js";function P(){return P=Object.assign||function(t){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i])}return t},P.apply(this,arguments)}function F(t,a){if(t==null)return{};var s=B(t,a),i,n;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)i=r[n],!(a.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(s[i]=t[i])}return s}function B(t,a){if(t==null)return{};var s={},i=Object.keys(t),n,r;for(r=0;r<i.length;r++)n=i[r],!(a.indexOf(n)>=0)&&(s[n]=t[n]);return s}var L=o.forwardRef(function(t,a){var s=t.color,i=s===void 0?"currentColor":s,n=t.size,r=n===void 0?24:n,S=F(t,["color","size"]);return A.createElement("svg",P({ref:a,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},S),A.createElement("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"}))});L.propTypes={color:w.string,size:w.oneOfType([w.string,w.number])};L.displayName="Star";const D=p(["p-2","pb-5","text-white","flex","flex-col","gap-2"]),y=({className:t,children:a})=>e.jsx("footer",{className:m(D({className:t})),children:a});y.displayName="KonstructSidebarFooter";y.__docgenInfo={description:"",methods:[],displayName:"KonstructSidebarFooter",props:{className:{required:!1,tsType:{name:"string"},description:""}},composes:["PropsWithChildren","VariantProps"]};const H=p(["md:px-4","md:py-5","flex","flex-col","justify-center","gap-1","group","relative","mb-8","[&>p]:pl-14","[&>p]:-mt-2","[&>img]:pt-3","[&>*>p]:absolute","[&>*>p]:bottom-0","[&>*>p]:-mt-2","[&>*>img]:pt-3","cursor-pointer"]),x=({children:t,className:a})=>e.jsx("header",{className:m(H({className:a})),children:t});x.displayName="KonstructSidebarLogo";x.__docgenInfo={description:"",methods:[],displayName:"KonstructSidebarLogo",props:{className:{required:!1,tsType:{name:"string"},description:""}},composes:["PropsWithChildren","VariantProps"]};const $=p(["text-sm","font-bold","px-4","mt-3","mb-2","text-white","selection:bg-powder-500","selection:text-white"]),T=({title:t,className:a,isVisible:s=!0})=>s?e.jsx("h2",{className:m($({className:a})),children:t}):null;T.displayName="KonstructSidebarNavigationTitle";T.__docgenInfo={description:"",methods:[],displayName:"KonstructSidebarNavigationTitle",props:{title:{required:!0,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},isVisible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}},composes:["VariantProps","Pick"]};const U=p(["flex","flex-col","gap-1"]),v=({children:t,title:a,className:s,titleClassName:i,isVisible:n=!0,...r})=>n?e.jsxs(e.Fragment,{children:[a?e.jsx(T,{title:a,className:i,...r}):null,e.jsx("ul",{className:m(U({className:s})),children:t})]}):null;v.displayName="KonstructSidebarNavigationGroup";v.__docgenInfo={description:"",methods:[],displayName:"KonstructSidebarNavigationGroup",props:{title:{required:!1,tsType:{name:"string"},description:""},titleClassName:{required:!1,tsType:{name:"string"},description:""},isVisible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}},composes:["PropsWithChildren","VariantProps","Pick"]};const X=p(["[&>a]:flex","[&>a]:gap-2","[&>a]:no-underline","[&>a]:text-inherit","[&>a]:w-full","cursor-pointer","flex","font-normal","font-normal","gap-2","rounded-xl","md:px-4","md:py-2.5","p-2","text-black","w-full","text-[#9ea2c6]","hover:text-white","hover:bg-[#252a41]","selection:bg-powder-500","selection:text-white"],{variants:{isActive:{true:"",false:""}},compoundVariants:[{isActive:!0,class:["text-white","bg-[#252a41]"]}]}),g=({children:t,className:a,isVisible:s=!0,isActive:i,...n})=>s?e.jsx("li",{...n,role:"option",className:m(X({className:a,isActive:i})),children:t}):null;g.displayName="KonstructSidebarNavigationOption";g.__docgenInfo={description:"",methods:[],displayName:"KonstructSidebarNavigationOption",props:{className:{required:!1,tsType:{name:"string"},description:""},isVisible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},isActive:{required:!1,tsType:{name:"boolean"},description:""}}};const J=p(["border-t","rounded-full","my-1.5"]),C=({className:t})=>e.jsx("div",{className:m(J({className:t}))});C.displayName="KonstructSidebarNavigationSeparator";C.__docgenInfo={description:"",methods:[],displayName:"KonstructSidebarNavigationSeparator",composes:["Pick","VariantProps"]};const Q=p(["flex","flex-1","w-full","flex-col"]),u=({className:t,children:a})=>e.jsx("nav",{className:m(Q({className:t})),children:a});u.displayName="KonstructSidebarNavigation";u.NavigationGroup=v;u.NavigationOption=g;u.NavigationSeparator=C;u.NavigationTitle=T;u.__docgenInfo={description:"",methods:[{name:"NavigationGroup",docblock:null,modifiers:["static"],params:[{name:`{
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
}`,optional:!1,type:null}],returns:null}],displayName:"KonstructSidebarNavigation"};const Y=p(["duration-200","ease-linear","flex","flex-col","flex-shrink-0","group/sidebar","h-full","px-4","relative","transition-all","w-18","md:w-64","bg-kubefirst-dark-blue-900"]),Z=p(["absolute","top-0","right-0","h-full","opacity-0","group-hover/sidebar:opacity-100","cursor-col-resize","w-[2px]","shadow","shadow-slate-200","bg-slate-200"]),_=({canResize:t=!0,children:a,dividerClassName:s,maxWith:i=300,minWith:n=240,theme:r,wrapperClassName:S})=>{const c=o.useRef(null),f=o.useRef(null),O=o.useRef(!1),k=o.useCallback(l=>{if(!O.current){c.current&&(c.current.style.opacity="0");return}let N=l.clientX;N<n&&(N=n),N>i&&(N=i),f.current&&c.current&&(f.current.style.width=`${N}px`,c.current.classList.add("opacity-100"))},[i,n]),V=o.useCallback(()=>{O.current=!1,c.current&&c.current.classList.remove("opacity-100"),document.removeEventListener("mousemove",k),document.removeEventListener("mouseup",V)},[k]),E=o.useCallback(l=>{l.preventDefault(),l.stopPropagation(),O.current=!0,document.addEventListener("mousemove",k),document.addEventListener("mouseup",V)},[k,V]),h=o.useMemo(()=>o.Children.toArray(a),[a]),I=o.useMemo(()=>o.Children.toArray(h).find(l=>o.isValidElement(l)&&l.type===x),[h]),q=o.useMemo(()=>o.Children.toArray(h).find(l=>o.isValidElement(l)&&l.type===u),[h]),R=o.useMemo(()=>o.Children.toArray(h).find(l=>o.isValidElement(l)&&l.type===y),[h]);return e.jsxs("aside",{ref:f,className:m(Y({className:S})),"data-theme":r,children:[I,q,R,t&&e.jsx("div",{ref:c,className:m(Z({className:s})),onMouseDown:E})]})};_.displayName="Sidebar.Wrapper";_.__docgenInfo={description:"",methods:[],displayName:"Sidebar.Wrapper",props:{canResize:{required:!1,tsType:{name:"boolean"},description:"Whether the sidebar can be resized by dragging",defaultValue:{value:"true",computed:!1}},dividerClassName:{required:!1,tsType:{name:"string"},description:"Additional CSS classes for the divider"},maxWith:{required:!1,tsType:{name:"number"},description:"Maximum width when resizing (in pixels)",defaultValue:{value:"300",computed:!1}},minWith:{required:!1,tsType:{name:"number"},description:"Minimum width when resizing (in pixels)",defaultValue:{value:"240",computed:!1}},theme:{required:!1,tsType:{name:"Theme"},description:"Theme override for this component"},wrapperClassName:{required:!1,tsType:{name:"string"},description:"Additional CSS classes for the wrapper"}},composes:["VariantProps","PropsWithChildren"]};const d=t=>e.jsx(_,{...t});d.displayName="KonstructSidebar";d.Footer=y;d.Logo=x;d.Navigation=u;d.NavigationGroup=v;d.NavigationOption=g;d.NavigationSeparator=C;d.__docgenInfo={description:`A compound component for building application sidebars.
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
}`,optional:!1,type:null}],returns:null},{name:"NavigationSeparator",docblock:null,modifiers:["static"],params:[{name:"{ className }",optional:!1,type:null}],returns:null}],displayName:"KonstructSidebar"};const ce={title:"In Review/Sidebar",component:d,decorators:[t=>{const[a,s]=o.useState(window.innerHeight),i=K(()=>s(window.innerHeight),150);return o.useEffect(()=>{const n=window.parent.document.getElementById("storybook-panel-root");if(!n)return;const r=new ResizeObserver(i);return r.observe(n),()=>{r.disconnect()}},[i]),o.useEffect(()=>{const n=c=>{c?.querySelector(".sidebar-container")&&i()},r=c=>{c.forEach(f=>{f.addedNodes.forEach(n),f.removedNodes.forEach(n)})};new MutationObserver(r).observe(window.parent.document.body,{childList:!0,subtree:!0})},[i]),e.jsx("div",{style:{margin:"-1rem",height:a},children:e.jsx(t,{})})}]},j={render:function(){const[a,s]=o.useState("kubefirst");return e.jsxs(d,{theme:a,children:[e.jsx(x,{children:e.jsxs("a",{className:"flex items-center gap-2",children:[e.jsx("img",{className:"flex-1 shrink-0 hidden md:block",src:"./logo-kubefirst.svg",alt:"Company logo"}),e.jsx("img",{className:"block h-10 w-12 md:hidden",src:"./ray.svg",alt:"Company logo"}),e.jsx(b,{variant:"labelSmall",className:"md:left-[35%] !bottom-[-20px] md:!bottom-0 text-[#ABADC6] lowercase",children:"v1.11.1"})]})}),e.jsxs(u,{className:"mt-4 md:mt-0",children:[e.jsxs(v,{children:[e.jsx(g,{children:e.jsxs("a",{className:"flex items-center gap-2 md:mt-0",children:[e.jsx(z,{className:"w-6 h-6"})," ",e.jsx(b,{variant:"body1",className:"hidden md:block text-inherit",children:"Clusters"})]})}),e.jsxs(g,{role:"button",onClick:()=>s("kubefirst"),isActive:a==="kubefirst",children:[e.jsx(W,{className:"w-6 h-6"})," ",e.jsx(b,{variant:"body1",className:"hidden md:block text-inherit",children:"Environments"})]})]}),e.jsxs(v,{title:"Admin settings",titleClassName:"uppercase hidden md:block ",children:[e.jsxs(g,{role:"button",onClick:()=>s("light"),isActive:a==="light",children:[e.jsx(G,{className:"w-6 h-6"})," ",e.jsx(b,{variant:"body1",className:"hidden md:block text-inherit",children:"Plans & Billing"})]}),e.jsx(g,{children:e.jsxs("a",{className:"flex items-center gap-2",children:[e.jsx(M,{className:"w-6 h-6"})," ",e.jsx(b,{variant:"body1",className:"hidden md:block text-inherit",children:"Cloud accounts"})]})})]})]}),e.jsx(y,{children:e.jsxs("span",{className:"text-[#81e2b4] flex items-center gap-2 justify-center font-semibold cursor-pointer",children:[e.jsx(L,{className:"w-5 h-5"})," ",e.jsx(b,{variant:"body1",className:"hidden md:block text-inherit",children:"Upgrade to Business"})]})})]})}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...j.parameters?.docs?.source}}};const de=["Sidebar"];export{j as Sidebar,de as __namedExportsOrder,ce as default};
