import{r as m,j as e}from"./iframe-Dv_ed3hk.js";import{T as r}from"./TimePicker-BMlxENfZ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bn42e07n.js";import"./chevron-down-BzZnPnW8.js";import"./createLucideIcon-8Yd3Po8i.js";const c={title:"In Review/TimePicker/Dark",component:r},t={render:()=>(m.useEffect(()=>(document.body.setAttribute("data-theme","dark"),document.body.classList.add("bg-metal-900"),()=>{document.body.removeAttribute("data-theme"),document.body.classList.remove("bg-metal-900")}),[]),e.jsxs(e.Fragment,{children:[e.jsx(r,{name:"time-12",label:"Time 12 format",required:!0}),e.jsx("div",{className:"h-5"}),e.jsx(r,{name:"time-24",label:"Time 24 format",format:"24",required:!0})]}))};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    useEffect(() => {
      document.body.setAttribute('data-theme', 'dark');
      document.body.classList.add('bg-metal-900');
      return () => {
        document.body.removeAttribute('data-theme');
        document.body.classList.remove('bg-metal-900');
      };
    }, []);
    return <>
        <TimePickerComponent name="time-12" label="Time 12 format" required />

        <div className="h-5" />

        <TimePickerComponent name="time-24" label="Time 24 format" format="24" required />
      </>;
  }
}`,...t.parameters?.docs?.source}}};const u=["Dark"];export{t as Dark,u as __namedExportsOrder,c as default};
