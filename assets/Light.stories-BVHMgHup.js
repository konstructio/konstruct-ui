import{j as e}from"./iframe-CoBiGKUL.js";import{T as i}from"./TimePicker-C-rQapg5.js";import"./preload-helper-PPVm8Dsz.js";import"./Typography-DZ3by0j3.js";import"./index-BIgQ6y5l.js";import"./createLucideIcon-DWMHVhJV.js";const u={title:"In Review/TimePicker/Light",component:i},t={render:()=>e.jsxs("div",{className:"w-65 flex flex-col gap-5",children:[e.jsx(i,{name:"time-12",label:"Time 12 format",isRequired:!0}),e.jsx(i,{name:"time-24",label:"Time 24 format",format:"24",isRequired:!0})]})},m={render:()=>e.jsxs("div",{className:"w-65 flex flex-col gap-5",children:[e.jsx(i,{name:"time-input-12",label:"Time 12 format (Input mode with list)",mode:"input",isRequired:!0}),e.jsx(i,{name:"time-input-24",label:"Time 24 format (Input mode with list)",format:"24",mode:"input",isRequired:!0})]})},r={render:()=>e.jsxs("div",{className:"w-65 flex flex-col gap-5",children:[e.jsx(i,{name:"time-input-no-list-12",label:"Time 12 format (Input only)",mode:"input",showList:!1,isRequired:!0}),e.jsx(i,{name:"time-input-no-list-24",label:"Time 24 format (Input only)",format:"24",mode:"input",showList:!1,isRequired:!0})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-65 flex flex-col gap-5">
      <TimePickerComponent name="time-12" label="Time 12 format" isRequired />

      <TimePickerComponent name="time-24" label="Time 24 format" format="24" isRequired />
    </div>
}`,...t.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-65 flex flex-col gap-5">
      <TimePickerComponent name="time-input-12" label="Time 12 format (Input mode with list)" mode="input" isRequired />

      <TimePickerComponent name="time-input-24" label="Time 24 format (Input mode with list)" format="24" mode="input" isRequired />
    </div>
}`,...m.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-65 flex flex-col gap-5">
      <TimePickerComponent name="time-input-no-list-12" label="Time 12 format (Input only)" mode="input" showList={false} isRequired />

      <TimePickerComponent name="time-input-no-list-24" label="Time 24 format (Input only)" format="24" mode="input" showList={false} isRequired />
    </div>
}`,...r.parameters?.docs?.source}}};const d=["Light","InputMode","InputModeWithoutList"];export{m as InputMode,r as InputModeWithoutList,t as Light,d as __namedExportsOrder,u as default};
