import{r as n,j as e}from"./iframe-CnMfofFe.js";import{F as t}from"./Filter-CjkYSvrl.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B-7A89sm.js";import"./Badge-wFnFuWAU.js";import"./loader-BCo2YVAJ.js";import"./index-IjtP-zJr.js";import"./index-CC9DTSuM.js";import"./x-DHIn2-Qe.js";import"./createLucideIcon-Ba-Adh06.js";import"./Button-uwP2Lhrv.js";import"./Checkbox-BUzmzpXY.js";import"./index-BXJzp-77.js";import"./index-DWzABNC7.js";import"./index-6GNezexY.js";import"./index-DxdSKqNy.js";import"./index-Crcn59XQ.js";import"./index-hDl09qvB.js";import"./useToggle-DqTsmc9k.js";import"./check-D0x5pvk5.js";import"./index-CwzAOfX9.js";import"./chevron-down-CqkF0DRd.js";import"./DatePicker-Ch8P4emf.js";import"./chevron-right-DpUgVFD9.js";const q={title:"In Review/Filter/Dark",component:t},a={parameters:{theme:"dark"},render:function(i){const[o,l]=n.useState([]),[s,p]=n.useState(),d=r=>p(r),m=r=>{l(r)},c=n.useMemo(()=>[{id:"creating",label:"Creating",variant:"warning"},{id:"deleting",label:"Deleting",variant:"danger"},{id:"failed",label:"Failed",variant:"danger"},{id:"pending",label:"Pending",variant:"info"},{id:"ready",label:"Ready",variant:"success"},{id:"retrying",label:"Retrying",variant:"warning"}],[]);return e.jsx("div",{className:"flex flex-col gap-2",children:e.jsxs(t,{...i,children:[e.jsx(t.BadgeMultiSelect,{label:"Status",options:c,onApply:m}),e.jsx(t.DateFilterDropdown,{label:"Created",onApply:d}),e.jsx(t.ResetButton,{disabled:!s&&o.length===0})]})})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    theme: 'dark'
  },
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
    return <div className="flex flex-col gap-2">
        <FilterComponent {...args}>
          <FilterComponent.BadgeMultiSelect label="Status" options={options} onApply={onApplyBadge} />

          <FilterComponent.DateFilterDropdown label="Created" onApply={onApplyDate} />

          <FilterComponent.ResetButton disabled={!date && selectedStatus.length === 0} />
        </FilterComponent>
      </div>;
  }
}`,...a.parameters?.docs?.source}}};const z=["Dark"];export{a as Dark,z as __namedExportsOrder,q as default};
