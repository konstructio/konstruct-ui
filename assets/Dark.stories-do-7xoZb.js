import{j as e}from"./jsx-runtime-u17CrQMm.js";import{T as r}from"./TimePicker-CXCO18Te.js";import{r as m}from"./iframe-BGwmaRjd.js";import"./index-Bn42e07n.js";import"./chevron-down-aZz02QFl.js";import"./createLucideIcon-9CjlYhVr.js";import"./preload-helper-PPVm8Dsz.js";const u={title:"In Review/TimePicker",component:r},t={render:()=>(m.useEffect(()=>(document.body.setAttribute("data-theme","dark"),document.body.classList.add("bg-metal-900"),()=>{document.body.removeAttribute("data-theme"),document.body.classList.remove("bg-metal-900")}),[]),e.jsxs(e.Fragment,{children:[e.jsx(r,{name:"time-12",label:"Time 12 format",required:!0}),e.jsx("div",{className:"h-5"}),e.jsx(r,{name:"time-24",label:"Time 24 format",format:"24",required:!0})]}))};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const l=["Dark"];export{t as Dark,l as __namedExportsOrder,u as default};
