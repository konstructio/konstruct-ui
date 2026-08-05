import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,t as i}from"./Filter-GDUDHJTu.js";var a,o,s,c,l;function u(){return(u=e((()=>{a=t(),r(),o=n(),s={title:`In Review/Filter/Light`,component:i},c={render:function(e){let[t,n]=(0,a.useState)([]),[r,s]=(0,a.useState)([]),[c,l]=(0,a.useState)(),[u,d]=(0,a.useState)(),f=e=>d(e),p=e=>l(e),m=e=>{n(e)},h=e=>{s(e)},g=(0,a.useMemo)(()=>[{id:`infrastructure`,label:`Infrastructure`},{id:`networking`,label:`Networking`},{id:`security`,label:`Security`},{id:`monitoring`,label:`Monitoring`}],[]),_=(0,a.useMemo)(()=>[{id:`creating`,label:`Creating`,variant:`warning`},{id:`deleting`,label:`Deleting`,variant:`danger`},{id:`failed`,label:`Failed`,variant:`danger`},{id:`pending`,label:`Pending`,variant:`info`},{id:`ready`,label:`Ready`,variant:`success`},{id:`retrying`,label:`Retrying`,variant:`warning`}],[]);return(0,o.jsx)(`div`,{className:`flex flex-col gap-2`,children:(0,o.jsxs)(i,{...e,children:[(0,o.jsx)(i.BadgeMultiSelect,{label:`Status`,options:_,onApply:m}),(0,o.jsx)(i.TextMultiSelect,{label:`Category`,options:g,onApply:h}),(0,o.jsx)(i.DateFilterDropdown,{label:`Created`,onApply:p}),(0,o.jsx)(i.DateRangeFilterDropdown,{label:`Date Range`,onApply:f}),(0,o.jsx)(i.ResetButton,{disabled:!u&&!c&&t.length===0&&r.length===0})]})})}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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

          <FilterComponent.ResetButton disabled={!dateRange && !date && selectedStatus.length === 0 && selectedCategory.length === 0} />
        </FilterComponent>
      </div>;
  }
}`,...c.parameters?.docs?.source}}},l=[`Light`]})))()}u();export{c as Light,l as __namedExportsOrder,s as default};