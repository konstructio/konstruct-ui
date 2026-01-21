import{r as m,j as e}from"./iframe-BV61N9iv.js";import{T as r}from"./TimePicker-oNGZ3wvY.js";import"./preload-helper-PPVm8Dsz.js";import"./Typography-sshlW9sh.js";import"./index-B-7A89sm.js";import"./chevron-down-CGu3EDW7.js";import"./createLucideIcon-BtJATfwv.js";const u={title:"In Review/TimePicker/Dark",component:r},t={render:()=>(m.useEffect(()=>(document.body.setAttribute("data-theme","dark"),document.body.classList.add("bg-metal-900"),()=>{document.body.removeAttribute("data-theme"),document.body.classList.remove("bg-metal-900")}),[]),e.jsxs(e.Fragment,{children:[e.jsx(r,{name:"time-12",label:"Time 12 format",isRequired:!0}),e.jsx("div",{className:"h-5"}),e.jsx(r,{name:"time-24",label:"Time 24 format",format:"24",isRequired:!0})]}))};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
