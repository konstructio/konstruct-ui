import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as n}from"./iframe-elLdMA5z.js";import{F as t}from"./Filter-DVVl4NTg.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bn42e07n.js";import"./Badge-BywUfewL.js";import"./loader-BEHMS8yK.js";import"./index-Dmq92ssy.js";import"./index-CR0TtsAh.js";import"./createLucideIcon-BJ6xdeDW.js";import"./Button-BaAkx7iC.js";import"./Checkbox-Q04U2b3m.js";import"./index-C5wDu_Xt.js";import"./index-Yj0sG3gd.js";import"./index-mLMovrq5.js";import"./index-D4jXhsWK.js";import"./index-Ci7ObkoQ.js";import"./index-D_T43Uau.js";import"./useToggle-BRyLypMy.js";import"./check-CA2KURng.js";import"./index-CUkUBS_8.js";import"./chevron-down-D2kFZymH.js";import"./DatePicker-Lwtrh6lN.js";const $={title:"In Review/Filter",component:t},a={render:function(r){const[o,l]=n.useState([]),[s,p]=n.useState(),d=i=>p(i),c=i=>{l(i)},m=n.useMemo(()=>[{id:"creating",label:"Creating",variant:"warning"},{id:"deleting",label:"Deleting",variant:"danger"},{id:"failed",label:"Failed",variant:"danger"},{id:"pending",label:"Pending",variant:"info"},{id:"ready",label:"Ready",variant:"success"},{id:"retrying",label:"Retrying",variant:"warning"}],[]);return e.jsx("div",{className:"max-w-[350px] flex flex-col gap-2",children:e.jsxs(t,{...r,children:[e.jsx(t.BadgeMultiSelect,{label:"Status",options:m,onApply:c}),e.jsx(t.DateFilterDropdown,{label:"Created",onApply:d}),e.jsx(t.ResetButton,{disabled:!s&&o.length===0})]})})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
