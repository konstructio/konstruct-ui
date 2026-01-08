import{j as a}from"./jsx-runtime-u17CrQMm.js";import{T as r}from"./Typography-DUXe0q0p.js";import{r as o}from"./iframe-batYq3Oy.js";import"./index-Bn42e07n.js";import"./preload-helper-PPVm8Dsz.js";const c={title:"In Review/Typography",component:r},n=["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","subtitle3","labelLarge","labelMedium","labelSmall","buttonSmall","body1","body2","body3","tooltip"],e={args:{},render:()=>(o.useEffect(()=>(document.body.setAttribute("data-theme","dark"),document.body.classList.add("bg-metal-900"),()=>{document.body.removeAttribute("data-theme"),document.body.classList.remove("bg-metal-900")}),[]),a.jsx("div",{className:"w-full space-y-4",children:n.map(t=>a.jsx(r,{variant:t,children:`${t} - Almost before we knew it, we had...`}))}))};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => {
    useEffect(() => {
      document.body.setAttribute('data-theme', 'dark');
      document.body.classList.add('bg-metal-900');
      return () => {
        document.body.removeAttribute('data-theme');
        document.body.classList.remove('bg-metal-900');
      };
    }, []);
    return <div className="w-full space-y-4">
        {variants.map(variant => <TypographyComponent variant={variant}>
            {\`\${variant} - Almost before we knew it, we had...\`}
          </TypographyComponent>)}
      </div>;
  }
}`,...e.parameters?.docs?.source}}};const u=["Dark"];export{e as Dark,u as __namedExportsOrder,c as default};
