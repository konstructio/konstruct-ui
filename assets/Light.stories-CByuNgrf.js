import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{t as n}from"./react-C184PLS3.js";import{t as r}from"./jsx-runtime-De-1JGbp.js";import{n as i,t as a}from"./Filter-DkKBgukd.js";var o,s,c,l,u;e((()=>{o=t(n(),1),i(),s=r(),c={title:`In Review/Filter/Light`,component:a},l={render:function(e){let[t,n]=(0,o.useState)([]),[r,i]=(0,o.useState)([]),[c,l]=(0,o.useState)(),[u,d]=(0,o.useState)(),f=e=>d(e),p=e=>l(e),m=e=>{n(e)},h=e=>{i(e)},g=(0,o.useMemo)(()=>[{id:`infrastructure`,label:`Infrastructure`},{id:`networking`,label:`Networking`},{id:`security`,label:`Security`},{id:`monitoring`,label:`Monitoring`}],[]),_=(0,o.useMemo)(()=>[{id:`creating`,label:`Creating`,variant:`warning`},{id:`deleting`,label:`Deleting`,variant:`danger`},{id:`failed`,label:`Failed`,variant:`danger`},{id:`pending`,label:`Pending`,variant:`info`},{id:`ready`,label:`Ready`,variant:`success`},{id:`retrying`,label:`Retrying`,variant:`warning`}],[]);return(0,s.jsx)(`div`,{className:`flex flex-col gap-2`,children:(0,s.jsxs)(a,{...e,children:[(0,s.jsx)(a.BadgeMultiSelect,{label:`Status`,options:_,onApply:m}),(0,s.jsx)(a.TextMultiSelect,{label:`Category`,options:g,onApply:h}),(0,s.jsx)(a.DateFilterDropdown,{label:`Created`,onApply:p}),(0,s.jsx)(a.DateRangeFilterDropdown,{label:`Date Range`,onApply:f}),(0,s.jsx)(a.ResetButton,{disabled:!u&&!c&&t.length===0&&r.length===0})]})})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u=[`Light`]}))();export{l as Light,u as __namedExportsOrder,c as default};