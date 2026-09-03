import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,t as i}from"./Filter-RzhOfRnR.js";var a,o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{a=t(),r(),o=n(),s={title:`In Review/Filter/Dark`,component:i},c={parameters:{theme:`dark`},render:function(e){let[t,n]=(0,a.useState)([]),[r,s]=(0,a.useState)([]),[c,l]=(0,a.useState)(),[u,d]=(0,a.useState)(),f=e=>d(e),p=e=>l(e),m=e=>{n(e)},h=e=>{s(e)},g=(0,a.useMemo)(()=>[{id:`infrastructure`,label:`Infrastructure`},{id:`networking`,label:`Networking`},{id:`security`,label:`Security`},{id:`monitoring`,label:`Monitoring`}],[]),_=(0,a.useMemo)(()=>[{id:`creating`,label:`Creating`,variant:`warning`},{id:`deleting`,label:`Deleting`,variant:`danger`},{id:`failed`,label:`Failed`,variant:`danger`},{id:`pending`,label:`Pending`,variant:`info`},{id:`ready`,label:`Ready`,variant:`success`},{id:`retrying`,label:`Retrying`,variant:`warning`}],[]);return(0,o.jsx)(`div`,{className:`flex flex-col gap-2`,children:(0,o.jsxs)(i,{...e,children:[(0,o.jsx)(i.BadgeMultiSelect,{label:`Status`,options:_,onApply:m}),(0,o.jsx)(i.TextMultiSelect,{label:`Category`,options:g,onApply:h}),(0,o.jsx)(i.DateFilterDropdown,{label:`Created`,onApply:p}),(0,o.jsx)(i.DateRangeFilterDropdown,{label:`Date Range`,onApply:f}),(0,o.jsx)(i.ResetButton,{disabled:!c&&!u&&t.length===0&&r.length===0})]})})}},l={parameters:{theme:`dark`},render:function(){let[e,t]=(0,a.useState)();return(0,o.jsxs)(`div`,{className:`flex flex-col gap-6 p-10`,children:[(0,o.jsx)(i,{children:(0,o.jsx)(i.CustomDateRangeFilterDropdown,{label:`Created`,labelTimePeriod:`Created`,revealCalendarOnCustom:!0,applyOnPresetSelect:!0,maxDate:new Date,onApply:t})}),(0,o.jsx)(`pre`,{className:`text-xs text-zinc-500 dark:text-zinc-400`,children:e?JSON.stringify({from:e.from?.toISOString(),to:e.to?.toISOString()},null,2):`no filter applied`})]})}},u={parameters:{theme:`dark`},render:function(){let[e,t]=(0,a.useState)();return(0,o.jsxs)(`div`,{className:`flex flex-col gap-6 p-10`,children:[(0,o.jsx)(i,{children:(0,o.jsx)(i.CustomDateRangeFilterDropdown,{label:`Created`,labelTimePeriod:`Created`,revealCalendarOnCustom:!0,maxDate:new Date,onApply:t})}),(0,o.jsx)(`pre`,{className:`text-xs text-zinc-500 dark:text-zinc-400`,children:e?JSON.stringify({from:e.from?.toISOString(),to:e.to?.toISOString()},null,2):`no filter applied`})]})}},d={parameters:{theme:`dark`},render:function(){let[e,t]=(0,a.useState)({from:new Date(2026,6,6),to:new Date(2026,7,4)});return(0,o.jsxs)(`div`,{className:`flex flex-col gap-6 p-10`,children:[(0,o.jsx)(i,{children:(0,o.jsx)(i.CustomDateRangeFilterDropdown,{label:`Created`,labelTimePeriod:`Created`,revealCalendarOnCustom:!0,applyOnPresetSelect:!0,appliedRangeDisplay:`split`,defaultRange:{from:new Date(2026,6,6),to:new Date(2026,7,4)},onApply:t})}),(0,o.jsx)(`pre`,{className:`text-xs text-zinc-500 dark:text-zinc-400`,children:e?JSON.stringify({from:e.from?.toISOString(),to:e.to?.toISOString()},null,2):`no filter applied`})]})}},f={parameters:{theme:`dark`},render:function(){let[e,t]=(0,a.useState)({}),n=e=>n=>{t(t=>({...t,[e]:n}))},r=Object.values(e).some(Boolean);return(0,o.jsxs)(`div`,{className:`flex flex-col gap-6 p-10`,children:[(0,o.jsxs)(i,{children:[(0,o.jsx)(i.CustomDateRangeFilterDropdown,{label:`Created`,labelTimePeriod:`Created`,revealCalendarOnCustom:!0,applyOnPresetSelect:!0,numberOfMonths:1,showOutsideDays:!0,appliedRangeDisplay:`split`,maxDate:new Date,onApply:n(`created`)}),(0,o.jsx)(i.CustomDateRangeFilterDropdown,{label:`Updated`,labelTimePeriod:`Updated`,revealCalendarOnCustom:!0,applyOnPresetSelect:!0,showCustomRange:!1,onApply:n(`updated`)}),(0,o.jsx)(i.CustomDateRangeFilterDropdown,{label:`Expires`,labelTimePeriod:`Expires`,revealCalendarOnCustom:!0,rollingPresets:[{label:`Past hour`,duration:`1h`},{label:`Past day`,duration:`1day`},{label:`Past week`,duration:`7days`},{label:`Past quarter`,duration:`3months`},{label:`Past year`,duration:`1year`}],labelCustomRange:`Pick dates`,onApply:n(`expires`)}),(0,o.jsx)(i.CustomDateRangeFilterDropdown,{label:`Deleted`,labelTimePeriod:`Deleted`,revealCalendarOnCustom:!0,applyOnPresetSelect:!0,navigationMode:`together`,dateDisplayFormat:`numeric`,onApply:n(`deleted`)}),(0,o.jsx)(i.ResetButton,{disabled:!r})]}),(0,o.jsx)(`pre`,{className:`text-xs text-zinc-500 dark:text-zinc-400`,children:r?JSON.stringify(Object.fromEntries(Object.entries(e).map(([e,t])=>[e,t?{from:t.from?.toISOString(),to:t.to?.toISOString()}:void 0])),null,2):`no filter applied`})]})}},p=[`Dark`,`CreatedDateRange`,`CreatedDateRangeExplicitApply`,`CreatedDateRangeSplitBadge`,`DateRangeVariations`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    theme: 'dark'
  },
  render: function CreatedDateRangeStory() {
    const [applied, setApplied] = useState<DateRangeWithTime | undefined>();
    return <div className="flex flex-col gap-6 p-10">
        <FilterComponent>
          <FilterComponent.CustomDateRangeFilterDropdown label="Created" labelTimePeriod="Created" revealCalendarOnCustom applyOnPresetSelect maxDate={new Date()} onApply={setApplied} />
        </FilterComponent>

        <pre className="text-xs text-zinc-500 dark:text-zinc-400">
          {applied ? JSON.stringify({
          from: applied.from?.toISOString(),
          to: applied.to?.toISOString()
        }, null, 2) : 'no filter applied'}
        </pre>
      </div>;
  }
}`,...l.parameters?.docs?.source},description:{story:`The "Created" filter from the Product Design System (Figma node 206-366):
the built-in rolling presets plus a custom range, applied as soon as a preset
is picked, with the design's Clear / Apply wording.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    theme: 'dark'
  },
  render: function CreatedDateRangeExplicitApplyStory() {
    const [applied, setApplied] = useState<DateRangeWithTime | undefined>();
    return <div className="flex flex-col gap-6 p-10">
        <FilterComponent>
          <FilterComponent.CustomDateRangeFilterDropdown label="Created" labelTimePeriod="Created" revealCalendarOnCustom maxDate={new Date()} onApply={setApplied} />
        </FilterComponent>

        <pre className="text-xs text-zinc-500 dark:text-zinc-400">
          {applied ? JSON.stringify({
          from: applied.from?.toISOString(),
          to: applied.to?.toISOString()
        }, null, 2) : 'no filter applied'}
        </pre>
      </div>;
  }
}`,...u.parameters?.docs?.source},description:{story:`The same filter without \`applyOnPresetSelect\`, where every choice is confirmed
by hand. Picking a preset leaves a pending selection on the bare list — the
calendar stays shut, since the preset resolves to a window — so apply has to
be reachable there or the choice could never be committed.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    theme: 'dark'
  },
  render: function CreatedDateRangeSplitBadgeStory() {
    const [applied, setApplied] = useState<DateRangeWithTime | undefined>({
      from: new Date(2026, 6, 6),
      to: new Date(2026, 7, 4)
    });
    return <div className="flex flex-col gap-6 p-10">
        <FilterComponent>
          <FilterComponent.CustomDateRangeFilterDropdown label="Created" labelTimePeriod="Created" revealCalendarOnCustom applyOnPresetSelect appliedRangeDisplay="split" defaultRange={{
          from: new Date(2026, 6, 6),
          to: new Date(2026, 7, 4)
        }} onApply={setApplied} />
        </FilterComponent>

        <pre className="text-xs text-zinc-500 dark:text-zinc-400">
          {applied ? JSON.stringify({
          from: applied.from?.toISOString(),
          to: applied.to?.toISOString()
        }, null, 2) : 'no filter applied'}
        </pre>
      </div>;
  }
}`,...d.parameters?.docs?.source},description:{story:`The trigger with a range already applied, as the Product Design System draws
it (Figma node 1564-10782): each end of the range in its own tag, joined by
"to". \`defaultRange\` counts as applied, so the tags show before anything is
picked.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    theme: 'dark'
  },
  render: function DateRangeVariationsStory() {
    const [applied, setApplied] = useState<Record<string, DateRangeWithTime | undefined>>({});
    const applyFor = (key: string) => {
      return (range?: DateRangeWithTime) => {
        setApplied(current => ({
          ...current,
          [key]: range
        }));
      };
    };
    const hasApplied = Object.values(applied).some(Boolean);
    return <div className="flex flex-col gap-6 p-10">
        <FilterComponent>
          <FilterComponent.CustomDateRangeFilterDropdown label="Created" labelTimePeriod="Created" revealCalendarOnCustom applyOnPresetSelect numberOfMonths={1} showOutsideDays appliedRangeDisplay="split" maxDate={new Date()} onApply={applyFor('created')} />

          <FilterComponent.CustomDateRangeFilterDropdown label="Updated" labelTimePeriod="Updated" revealCalendarOnCustom applyOnPresetSelect showCustomRange={false} onApply={applyFor('updated')} />

          <FilterComponent.CustomDateRangeFilterDropdown label="Expires" labelTimePeriod="Expires" revealCalendarOnCustom rollingPresets={[{
          label: 'Past hour',
          duration: '1h'
        }, {
          label: 'Past day',
          duration: '1day'
        }, {
          label: 'Past week',
          duration: '7days'
        }, {
          label: 'Past quarter',
          duration: '3months'
        }, {
          label: 'Past year',
          duration: '1year'
        }]} labelCustomRange="Pick dates" onApply={applyFor('expires')} />

          <FilterComponent.CustomDateRangeFilterDropdown label="Deleted" labelTimePeriod="Deleted" revealCalendarOnCustom applyOnPresetSelect navigationMode="together" dateDisplayFormat="numeric" onApply={applyFor('deleted')} />

          <FilterComponent.ResetButton disabled={!hasApplied} />
        </FilterComponent>

        <pre className="text-xs text-zinc-500 dark:text-zinc-400">
          {hasApplied ? JSON.stringify(Object.fromEntries(Object.entries(applied).map(([key, range]) => [key, range ? {
          from: range.from?.toISOString(),
          to: range.to?.toISOString()
        } : undefined])), null, 2) : 'no filter applied'}
        </pre>
      </div>;
  }
}`,...f.parameters?.docs?.source},description:{story:`Every shape the date range filter can take, side by side: the built-in
presets on a single-month calendar as the Product Design System draws it
(Figma node 2473-2654) with each applied end in its own badge, a presets-only filter with no custom range, one
confirmed by hand with its own rolling windows, and one whose two months move as a
pair and whose inputs read numerically.`,...f.parameters?.docs?.description}}}})))()}m();export{l as CreatedDateRange,u as CreatedDateRangeExplicitApply,d as CreatedDateRangeSplitBadge,c as Dark,f as DateRangeVariations,p as __namedExportsOrder,s as default};