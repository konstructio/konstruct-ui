import{j as e}from"./iframe-BlTjg9l_.js";import{T as t}from"./TimePicker-Cd7KzgpI.js";import"./preload-helper-PPVm8Dsz.js";import"./Typography-NrHqQDsO.js";import"./index-B-7A89sm.js";import"./createLucideIcon-JNXvXrMe.js";const d={title:"In Review/TimePicker/Dark",component:t},r={parameters:{theme:"dark"},render:()=>e.jsxs("div",{className:"w-65 flex flex-col gap-5",children:[e.jsx(t,{name:"time-12",label:"Time 12 format",isRequired:!0}),e.jsx(t,{name:"time-24",label:"Time 24 format",format:"24",isRequired:!0})]})},i={parameters:{theme:"dark"},render:()=>e.jsxs("div",{className:"w-65 flex flex-col gap-5",children:[e.jsx(t,{name:"time-input-12",label:"Time 12 format (Input mode with list)",mode:"input",isRequired:!0}),e.jsx(t,{name:"time-input-24",label:"Time 24 format (Input mode with list)",format:"24",mode:"input",isRequired:!0})]})},m={parameters:{theme:"dark"},render:()=>e.jsxs("div",{className:"w-65 flex flex-col gap-5",children:[e.jsx(t,{name:"time-input-no-list-12",label:"Time 12 format (Input only)",mode:"input",showList:!1,isRequired:!0}),e.jsx(t,{name:"time-input-no-list-24",label:"Time 24 format (Input only)",format:"24",mode:"input",showList:!1,isRequired:!0})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    theme: 'dark'
  },
  render: () => <div className="w-65 flex flex-col gap-5">
      <TimePickerComponent name="time-12" label="Time 12 format" isRequired />

      <TimePickerComponent name="time-24" label="Time 24 format" format="24" isRequired />
    </div>
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    theme: 'dark'
  },
  render: () => <div className="w-65 flex flex-col gap-5">
      <TimePickerComponent name="time-input-12" label="Time 12 format (Input mode with list)" mode="input" isRequired />

      <TimePickerComponent name="time-input-24" label="Time 24 format (Input mode with list)" format="24" mode="input" isRequired />
    </div>
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    theme: 'dark'
  },
  render: () => <div className="w-65 flex flex-col gap-5">
      <TimePickerComponent name="time-input-no-list-12" label="Time 12 format (Input only)" mode="input" showList={false} isRequired />

      <TimePickerComponent name="time-input-no-list-24" label="Time 24 format (Input only)" format="24" mode="input" showList={false} isRequired />
    </div>
}`,...m.parameters?.docs?.source}}};const u=["Dark","InputMode","InputModeWithoutList"];export{r as Dark,i as InputMode,m as InputModeWithoutList,u as __namedExportsOrder,d as default};
