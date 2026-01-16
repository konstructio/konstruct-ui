import{r as m,j as e}from"./iframe-BP6xk-sd.js";import{T as r}from"./TimePicker-Ca4fPLSv.js";import"./preload-helper-PPVm8Dsz.js";import"./Typography-baU5Ymfp.js";import"./index-B-7A89sm.js";import"./chevron-down-CXMmdtVv.js";import"./createLucideIcon-BvJQt3eP.js";const u={title:"In Review/TimePicker/Dark",component:r},t={render:()=>(m.useEffect(()=>(document.body.setAttribute("data-theme","dark"),document.body.classList.add("bg-metal-900"),()=>{document.body.removeAttribute("data-theme"),document.body.classList.remove("bg-metal-900")}),[]),e.jsxs(e.Fragment,{children:[e.jsx(r,{name:"time-12",label:"Time 12 format",isRequired:!0}),e.jsx("div",{className:"h-5"}),e.jsx(r,{name:"time-24",label:"Time 24 format",format:"24",isRequired:!0})]}))};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
        <TimePickerComponent name="time-12" label="Time 12 format" isRequired />

        <div className="h-5" />

        <TimePickerComponent name="time-24" label="Time 24 format" format="24" isRequired />
      </>;
  }
}`,...t.parameters?.docs?.source}}};const l=["Dark"];export{t as Dark,l as __namedExportsOrder,u as default};
