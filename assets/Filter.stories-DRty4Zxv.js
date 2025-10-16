import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./iframe-D-7qPM8A.js";import{F as t}from"./Filter-CHpZNS7-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CJCZd66Q.js";import"./Badge-COj1axoH.js";import"./createLucideIcon-CCgCRTiD.js";import"./Button-gVPqmAOt.js";import"./index-BwS-A-D0.js";import"./Checkbox-CM_UYbJd.js";import"./index-1_5q2gJh.js";import"./index-CYyJebM9.js";import"./index-BmcZKAXw.js";import"./index-7Q8y2J5d.js";import"./index-DlqQSr4U.js";import"./index-xhvhPAIk.js";import"./useToggle-C14Nr40m.js";import"./check-H_F8zv5q.js";import"./index-ypFzpi-r.js";import"./chevron-down-BeSVV5Aj.js";import"./DatePicker-B3g44_C9.js";const _={title:"In Review/Filter",component:t},a={render:function(r){const[o,l]=i.useState([]),[s,p]=i.useState(),d=n=>p(n),c=n=>{l(n)},m=i.useMemo(()=>[{id:"creating",label:"Creating",variant:"warning"},{id:"deleting",label:"Deleting",variant:"danger"},{id:"failed",label:"Failed",variant:"danger"},{id:"pending",label:"Pending",variant:"info"},{id:"ready",label:"Ready",variant:"success"},{id:"retrying",label:"Retrying",variant:"warning"}],[]);return e.jsx("div",{className:"max-w-[350px] flex flex-col gap-2",children:e.jsxs(t,{...r,children:[e.jsx(t.BadgeMultiSelect,{label:"Status",options:m,onApply:c}),e.jsx(t.DateFilterDropdown,{label:"Created",onApply:d}),e.jsx(t.ResetButton,{disabled:!s&&o.length===0})]})})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function FilterStory(args) {
    const [selectedStatus, setSelectedStatus] = useState<Option[]>([]);
    const [date, setDate] = useState<Date | undefined>();
    const onApplyDate = (date?: Date) => setDate(date);
    const onApplyBadge = (selectedOptions: Option[]) => {
      setSelectedStatus(selectedOptions);
    };
    const options = useMemo<Option[]>(() => [{
      id: 'creating',
      label: 'Creating',
      variant: 'warning'
    }, {
      id: 'deleting',
      label: 'Deleting',
      variant: 'danger'
    }, {
      id: 'failed',
      label: 'Failed',
      variant: 'danger'
    }, {
      id: 'pending',
      label: 'Pending',
      variant: 'info'
    }, {
      id: 'ready',
      label: 'Ready',
      variant: 'success'
    }, {
      id: 'retrying',
      label: 'Retrying',
      variant: 'warning'
    }], []);
    return <div className="max-w-[350px] flex flex-col gap-2">
        <FilterComponent {...args}>
          <FilterComponent.BadgeMultiSelect label="Status" options={options} onApply={onApplyBadge} />
          <FilterComponent.DateFilterDropdown label="Created" onApply={onApplyDate} />
          <FilterComponent.ResetButton disabled={!date && selectedStatus.length === 0} />
        </FilterComponent>
      </div>;
  }
}`,...a.parameters?.docs?.source}}};const I=["Filter"];export{a as Filter,I as __namedExportsOrder,_ as default};
