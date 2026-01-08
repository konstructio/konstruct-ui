import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as i}from"./iframe-BGwmaRjd.js";import{B as a}from"./Badge-Bw0kLj_5.js";import{C as t}from"./check-B-iwPHxU.js";import"./preload-helper-PPVm8Dsz.js";import"./loader-D5ehN81P.js";import"./index-Bn42e07n.js";import"./index-DN3W3g5b.js";import"./index-DSOR8ClC.js";import"./createLucideIcon-9CjlYhVr.js";const f={title:"In Review/Badge",component:a},s={args:{label:"Badge",isSelectable:!1},render:n=>(i.useEffect(()=>(document.body.setAttribute("data-theme","dark"),document.body.classList.add("bg-metal-900"),()=>{document.body.removeAttribute("data-theme"),document.body.classList.remove("bg-metal-900")}),[]),e.jsxs("div",{className:"flex gap-3",children:[e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{...n}),e.jsx(a,{variant:"warning",...n}),e.jsx(a,{variant:"danger",...n}),e.jsx(a,{variant:"success",...n}),e.jsx(a,{variant:"info",...n}),e.jsx(a,{variant:"violet",...n}),e.jsx(a,{variant:"orange",...n})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{loading:!0,...n}),e.jsx(a,{loading:!0,variant:"warning",...n}),e.jsx(a,{loading:!0,variant:"danger",...n}),e.jsx(a,{loading:!0,variant:"success",...n}),e.jsx(a,{loading:!0,variant:"info",...n}),e.jsx(a,{loading:!0,variant:"violet",...n}),e.jsx(a,{loading:!0,variant:"orange",...n})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{dismissible:!0,...n}),e.jsx(a,{dismissible:!0,variant:"warning",...n}),e.jsx(a,{dismissible:!0,variant:"danger",...n}),e.jsx(a,{dismissible:!0,variant:"success",...n}),e.jsx(a,{dismissible:!0,variant:"info",...n}),e.jsx(a,{dismissible:!0,variant:"violet",...n}),e.jsx(a,{dismissible:!0,variant:"orange",...n})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{leftIcon:e.jsx(t,{}),...n}),e.jsx(a,{leftIcon:e.jsx(t,{}),variant:"warning",...n}),e.jsx(a,{leftIcon:e.jsx(t,{}),variant:"danger",...n}),e.jsx(a,{leftIcon:e.jsx(t,{}),variant:"success",...n}),e.jsx(a,{leftIcon:e.jsx(t,{}),variant:"info",...n}),e.jsx(a,{leftIcon:e.jsx(t,{}),variant:"violet",...n}),e.jsx(a,{leftIcon:e.jsx(t,{}),variant:"orange",...n})]})]}))};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Badge',
    isSelectable: false
  },
  render: args => {
    useEffect(() => {
      document.body.setAttribute('data-theme', 'dark');
      document.body.classList.add('bg-metal-900');
      return () => {
        document.body.removeAttribute('data-theme');
        document.body.classList.remove('bg-metal-900');
      };
    }, []);
    return <div className="flex gap-3">
        <div className="flex flex-col gap-3">
          <BadgeComponent {...args} />
          <BadgeComponent variant="warning" {...args} />
          <BadgeComponent variant="danger" {...args} />
          <BadgeComponent variant="success" {...args} />
          <BadgeComponent variant="info" {...args} />
          <BadgeComponent variant="violet" {...args} />
          <BadgeComponent variant="orange" {...args} />
        </div>

        <div className="flex flex-col gap-3">
          <BadgeComponent loading {...args} />
          <BadgeComponent loading variant="warning" {...args} />
          <BadgeComponent loading variant="danger" {...args} />
          <BadgeComponent loading variant="success" {...args} />
          <BadgeComponent loading variant="info" {...args} />
          <BadgeComponent loading variant="violet" {...args} />
          <BadgeComponent loading variant="orange" {...args} />
        </div>

        <div className="flex flex-col gap-3">
          <BadgeComponent dismissible {...args} />
          <BadgeComponent dismissible variant="warning" {...args} />
          <BadgeComponent dismissible variant="danger" {...args} />
          <BadgeComponent dismissible variant="success" {...args} />
          <BadgeComponent dismissible variant="info" {...args} />
          <BadgeComponent dismissible variant="violet" {...args} />
          <BadgeComponent dismissible variant="orange" {...args} />
        </div>

        <div className="flex flex-col gap-3">
          <BadgeComponent leftIcon={<Check />} {...args} />
          <BadgeComponent leftIcon={<Check />} variant="warning" {...args} />
          <BadgeComponent leftIcon={<Check />} variant="danger" {...args} />
          <BadgeComponent leftIcon={<Check />} variant="success" {...args} />
          <BadgeComponent leftIcon={<Check />} variant="info" {...args} />
          <BadgeComponent leftIcon={<Check />} variant="violet" {...args} />
          <BadgeComponent leftIcon={<Check />} variant="orange" {...args} />
        </div>
      </div>;
  }
}`,...s.parameters?.docs?.source}}};const u=["Dark"];export{s as Dark,u as __namedExportsOrder,f as default};
