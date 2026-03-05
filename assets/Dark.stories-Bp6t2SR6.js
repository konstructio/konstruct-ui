import{r as n,j as t}from"./iframe-BcKbv-lX.js";import{F as a}from"./Filter-BHus4tcJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CwGTy2we.js";import"./Badge-C6VoFdbq.js";import"./Loader-DJSJ4DTF.js";import"./index-CUevI2Uh.js";import"./index-_mlK3XjR.js";import"./x-D1Vqa06C.js";import"./createLucideIcon-DOAqVwip.js";import"./Button-BQqMbhet.js";import"./Checkbox-DZhKDN9X.js";import"./index-Diut3bYb.js";import"./index-BhKwNEBV.js";import"./index-AsspV1sp.js";import"./index-B5AE2Z7D.js";import"./index-bz3Cl1Vw.js";import"./index-Dx3LBVP8.js";import"./useToggle-CijGalz1.js";import"./check-BLf5ix9e.js";import"./index-lLLj1k7t.js";import"./TimePicker-_QjUSBcG.js";import"./Typography-iicAGQNS.js";import"./DatePicker-C-BjkxGH.js";import"./style-BuSbffoa.js";import"./chevron-right-Bs45-xTx.js";import"./isObject-CTqCex2p.js";import"./DateRangePicker-DcbKYG9g.js";import"./RadioGroup-BvyBWAAy.js";import"./Radio-CzWSZET8.js";import"./Input-D9t9aiRd.js";import"./Warning-CudTNWFw.js";import"./proxy-C_d8N2sM.js";const ee={title:"In Review/Filter/Dark",component:a},o={parameters:{theme:"dark"},render:function(r){const[i,l]=n.useState([]),[s,p]=n.useState([]),[d,c]=n.useState(),[g,m]=n.useState(),u=e=>m(e),y=e=>c(e),D=e=>{l(e)},S=e=>{p(e)},b=n.useMemo(()=>[{id:"infrastructure",label:"Infrastructure"},{id:"networking",label:"Networking"},{id:"security",label:"Security"},{id:"monitoring",label:"Monitoring"}],[]),R=n.useMemo(()=>[{id:"creating",label:"Creating",variant:"warning"},{id:"deleting",label:"Deleting",variant:"danger"},{id:"failed",label:"Failed",variant:"danger"},{id:"pending",label:"Pending",variant:"info"},{id:"ready",label:"Ready",variant:"success"},{id:"retrying",label:"Retrying",variant:"warning"}],[]);return t.jsx("div",{className:"flex flex-col gap-2",children:t.jsxs(a,{...r,children:[t.jsx(a.BadgeMultiSelect,{label:"Status",options:R,onApply:D}),t.jsx(a.TextMultiSelect,{label:"Category",options:b,onApply:S}),t.jsx(a.DateFilterDropdown,{label:"Created",onApply:y}),t.jsx(a.DateRangeFilterDropdown,{label:"Date Range",onApply:u}),t.jsx(a.ResetButton,{disabled:!d&&!g&&i.length===0&&s.length===0})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const te=["Dark"];export{o as Dark,te as __namedExportsOrder,ee as default};
