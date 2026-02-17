import{r as n,j as e}from"./iframe-RFUXcFU1.js";import{F as t}from"./Filter-D3-07d-7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BIgQ6y5l.js";import"./Badge-D6cx8P8Y.js";import"./Loader-SkDEt_Hi.js";import"./index-DHc_NMzY.js";import"./index-CFloAkMw.js";import"./x-QIzpNpBh.js";import"./createLucideIcon-DxjmVpWu.js";import"./Button-CI2FwOyy.js";import"./Checkbox-XVqTlsdu.js";import"./index-DIC2GfCC.js";import"./index-BGK4KL-m.js";import"./index-liLHGAx1.js";import"./index-Csk6_OSh.js";import"./index-fAG7fmiz.js";import"./index-BfUIXumI.js";import"./useToggle-DpAoNMMY.js";import"./check-B2Zurhcn.js";import"./index-hF9rmkUV.js";import"./TimePicker-CW40X-4X.js";import"./Typography-CVd2-NB0.js";import"./DatePicker-BZET92YJ.js";import"./style-BPUgxc4R.js";import"./chevron-right-DZ3NCKzy.js";import"./isObject-DcT2bIqL.js";import"./DateRangePicker-Br-9AtM7.js";import"./RadioGroup-DiDC013F.js";import"./Radio-BWLwq_Uj.js";import"./Input-vqSmHewy.js";import"./Warning-42Y0Tt-y.js";import"./proxy-DDynkGEN.js";const X={title:"In Review/Filter/Light",component:t},i={render:function(o){const[r,l]=n.useState([]),[p,s]=n.useState(),[d,g]=n.useState(),m=a=>g(a),c=a=>s(a),u=a=>{l(a)},D=n.useMemo(()=>[{id:"creating",label:"Creating",variant:"warning"},{id:"deleting",label:"Deleting",variant:"danger"},{id:"failed",label:"Failed",variant:"danger"},{id:"pending",label:"Pending",variant:"info"},{id:"ready",label:"Ready",variant:"success"},{id:"retrying",label:"Retrying",variant:"warning"}],[]);return e.jsx("div",{className:"flex flex-col gap-2",children:e.jsxs(t,{...o,children:[e.jsx(t.BadgeMultiSelect,{label:"Status",options:D,onApply:u}),e.jsx(t.DateFilterDropdown,{label:"Created",onApply:c}),e.jsx(t.DateRangeFilterDropdown,{label:"Date Range",onApply:m}),e.jsx(t.ResetButton,{disabled:!d&&!p&&r.length===0})]})})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function FilterStory(args) {
    const [selectedStatus, setSelectedStatus] = useState<Option[]>([]);
    const [date, setDate] = useState<Date | undefined>();
    const [dateRange, setDateRange] = useState<DateRangeWithTime | undefined>();
    const onApplyDateRange = (range?: DateRangeWithTime) => setDateRange(range);
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

          <FilterComponent.DateRangeFilterDropdown label="Date Range" onApply={onApplyDateRange} />

          <FilterComponent.ResetButton disabled={!dateRange && !date && selectedStatus.length === 0} />
        </FilterComponent>
      </div>;
  }
}`,...i.parameters?.docs?.source}}};const Y=["Light"];export{i as Light,Y as __namedExportsOrder,X as default};
