import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as n}from"./iframe-GVbY7hCP.js";import{F as t}from"./Filter-XrA8FfXf.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bn42e07n.js";import"./Badge-LCDI_FMP.js";import"./loader-CQHY3Qc0.js";import"./index-VoBJlYmN.js";import"./index-BAv1-HGr.js";import"./createLucideIcon-Dmy668Nb.js";import"./Button-DiZyaEs6.js";import"./Checkbox-n-Mh-r5X.js";import"./index-Da3fr492.js";import"./index-BV9Egg7v.js";import"./index-DsabrO2q.js";import"./index-C8eZXtfe.js";import"./index-mvaf5M-o.js";import"./index-SlnE06X6.js";import"./useToggle-_pVJsEp8.js";import"./check-D6oyuQn0.js";import"./index-Quv3eMJB.js";import"./chevron-down-fsN6LWYX.js";import"./DatePicker-BqyPj660.js";const $={title:"In Review/Filter",component:t},a={render:function(r){const[o,l]=n.useState([]),[s,p]=n.useState(),d=i=>p(i),c=i=>{l(i)},m=n.useMemo(()=>[{id:"creating",label:"Creating",variant:"warning"},{id:"deleting",label:"Deleting",variant:"danger"},{id:"failed",label:"Failed",variant:"danger"},{id:"pending",label:"Pending",variant:"info"},{id:"ready",label:"Ready",variant:"success"},{id:"retrying",label:"Retrying",variant:"warning"}],[]);return e.jsx("div",{className:"max-w-[350px] flex flex-col gap-2",children:e.jsxs(t,{...r,children:[e.jsx(t.BadgeMultiSelect,{label:"Status",options:m,onApply:c}),e.jsx(t.DateFilterDropdown,{label:"Created",onApply:d}),e.jsx(t.ResetButton,{disabled:!s&&o.length===0})]})})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const k=["Filter"];export{a as Filter,k as __namedExportsOrder,$ as default};
