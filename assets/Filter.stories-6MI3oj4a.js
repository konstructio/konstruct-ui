import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as i}from"./iframe-Bbv792-s.js";import{F as t}from"./Filter-BsuYRfa4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bn42e07n.js";import"./Badge-DTns7T40.js";import"./index-C3Oq3-Mx.js";import"./index-BY3lhODL.js";import"./createLucideIcon-DeSTlbBx.js";import"./Button-SdkfVTIe.js";import"./Checkbox-_wAB2dHD.js";import"./index-VrdQcGi6.js";import"./index-D9Daq4g5.js";import"./index-BIJYmpuf.js";import"./index-BgdKID5i.js";import"./index-BNs5ir1q.js";import"./useToggle-CTvBxAfA.js";import"./check-DOEELJ5M.js";import"./index-Dp8riKcw.js";import"./chevron-down-JyeXBa6m.js";import"./DatePicker-DGh3CJlv.js";const _={title:"In Review/Filter",component:t},a={render:function(r){const[o,l]=i.useState([]),[s,p]=i.useState(),d=n=>p(n),c=n=>{l(n)},m=i.useMemo(()=>[{id:"creating",label:"Creating",variant:"warning"},{id:"deleting",label:"Deleting",variant:"danger"},{id:"failed",label:"Failed",variant:"danger"},{id:"pending",label:"Pending",variant:"info"},{id:"ready",label:"Ready",variant:"success"},{id:"retrying",label:"Retrying",variant:"warning"}],[]);return e.jsx("div",{className:"max-w-[350px] flex flex-col gap-2",children:e.jsxs(t,{...r,children:[e.jsx(t.BadgeMultiSelect,{label:"Status",options:m,onApply:c}),e.jsx(t.DateFilterDropdown,{label:"Created",onApply:d}),e.jsx(t.ResetButton,{disabled:!s&&o.length===0})]})})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
