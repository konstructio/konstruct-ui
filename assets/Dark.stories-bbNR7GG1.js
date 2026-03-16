import{r as n,j as t}from"./iframe-DLrn8Gk9.js";import{F as a}from"./Filter-DkVcyH3w.js";import"./preload-helper-PPVm8Dsz.js";import"./compiler-runtime-DxXHijtq.js";import"./index-CwGTy2we.js";import"./Badge-BO9G0W8a.js";import"./Loader-Baw2dVMg.js";import"./index-y1nNICkM.js";import"./index-CPvO_3XD.js";import"./x-D3mwUgyG.js";import"./createLucideIcon-B_E_E462.js";import"./Button-CIavAXKE.js";import"./Checkbox-BWZlyzoZ.js";import"./index-QG5MEqND.js";import"./index-BfndZXuq.js";import"./index-8qrDTiGs.js";import"./index-CRB1R8uy.js";import"./index-BvLyimqJ.js";import"./index-B2f5QKQL.js";import"./useToggle-RMYwN_Za.js";import"./check-DB3q0YIm.js";import"./index-CE1qPSkB.js";import"./TimePicker-C1BWp3V7.js";import"./Typography-CHpAwWZY.js";import"./DatePicker-DwS3ZOSZ.js";import"./style-DmPN67Hs.js";import"./chevron-right-CXZRSvYZ.js";import"./isObject-CRGnl22A.js";import"./DateRangePicker-BcajfZSC.js";import"./RadioGroup-BvArb0rV.js";import"./Radio-Bpj8wjdA.js";import"./Input-D9j3-C_C.js";import"./Warning-dqZmWUD1.js";import"./proxy-yAJNhRAm.js";const te={title:"In Review/Filter/Dark",component:a},o={parameters:{theme:"dark"},render:function(r){const[i,l]=n.useState([]),[s,p]=n.useState([]),[d,c]=n.useState(),[g,m]=n.useState(),u=e=>m(e),y=e=>c(e),D=e=>{l(e)},S=e=>{p(e)},b=n.useMemo(()=>[{id:"infrastructure",label:"Infrastructure"},{id:"networking",label:"Networking"},{id:"security",label:"Security"},{id:"monitoring",label:"Monitoring"}],[]),R=n.useMemo(()=>[{id:"creating",label:"Creating",variant:"warning"},{id:"deleting",label:"Deleting",variant:"danger"},{id:"failed",label:"Failed",variant:"danger"},{id:"pending",label:"Pending",variant:"info"},{id:"ready",label:"Ready",variant:"success"},{id:"retrying",label:"Retrying",variant:"warning"}],[]);return t.jsx("div",{className:"flex flex-col gap-2",children:t.jsxs(a,{...r,children:[t.jsx(a.BadgeMultiSelect,{label:"Status",options:R,onApply:D}),t.jsx(a.TextMultiSelect,{label:"Category",options:b,onApply:S}),t.jsx(a.DateFilterDropdown,{label:"Created",onApply:y}),t.jsx(a.DateRangeFilterDropdown,{label:"Date Range",onApply:u}),t.jsx(a.ResetButton,{disabled:!d&&!g&&i.length===0&&s.length===0})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    theme: 'dark'
  },
  render: function FilterStory(args) {
    const [selectedStatus, setSelectedStatus] = useState<Option[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<Option[]>([]);
    const [date, setDate] = useState<Date | undefined>();
    const [dateRange, setDateRange] = useState<DateRangeWithTime | undefined>();
    const onApplyDateRange = (range?: DateRangeWithTime) => setDateRange(range);
    const onApplyDate = (date?: Date) => setDate(date);
    const onApplyBadge = (selectedOptions: Option[]) => {
      setSelectedStatus(selectedOptions);
    };
    const onApplyText = (selectedOptions: Option[]) => {
      setSelectedCategory(selectedOptions);
    };
    const categoryOptions = useMemo<Option[]>(() => [{
      id: 'infrastructure',
      label: 'Infrastructure'
    }, {
      id: 'networking',
      label: 'Networking'
    }, {
      id: 'security',
      label: 'Security'
    }, {
      id: 'monitoring',
      label: 'Monitoring'
    }], []);
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

          <FilterComponent.TextMultiSelect label="Category" options={categoryOptions} onApply={onApplyText} />

          <FilterComponent.DateFilterDropdown label="Created" onApply={onApplyDate} />

          <FilterComponent.DateRangeFilterDropdown label="Date Range" onApply={onApplyDateRange} />

          <FilterComponent.ResetButton disabled={!date && !dateRange && selectedStatus.length === 0 && selectedCategory.length === 0} />
        </FilterComponent>
      </div>;
  }
}`,...o.parameters?.docs?.source}}};const ae=["Dark"];export{o as Dark,ae as __namedExportsOrder,te as default};
