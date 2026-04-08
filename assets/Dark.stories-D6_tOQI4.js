import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{t as n}from"./react-C184PLS3.js";import{t as r}from"./jsx-runtime-De-1JGbp.js";import{i,t as a}from"./lucide-react-dJcmTnvZ.js";import{n as o,r as s,t as c}from"./Select-CeQA9yCF.js";import{n as l,t as u}from"./mocks-DHzHRLkP.js";var d,f,p,m,h;e((()=>{a(),d=t(n(),1),u(),s(),o(),f=r(),p={title:`In Review/Select/Dark`,component:c},m={parameters:{theme:`dark`},args:{options:[{label:`Talos`,subLabel:`A modern OS for Kubernetes`,value:`talos`,leftIcon:(0,f.jsx)(`img`,{src:`./talos.svg`,alt:`Talos Logo`})},{label:`K3S`,subLabel:`Lightweight Kubernetes`,value:`k3s`,leftIcon:(0,f.jsx)(`img`,{src:`./k3s.svg`,alt:`K3S Logo`})}],required:!1,labelClassName:``,isLoading:!1,name:`select`},render:function(e){let[t,n]=(0,d.useState)(`talos`),[r,a]=(0,d.useState)(`talos`),[o,s]=(0,d.useState)(),[u,p]=(0,d.useState)(),[m,h]=(0,d.useState)(),[g,_]=(0,d.useState)(),[v,y]=(0,d.useState)(),[b,x]=(0,d.useState)(),[S,C]=(0,d.useState)(),w=[{groupLabel:`Asia Pacific`,options:[{value:`mum1`,label:`Mumbai (mum1)`,leftIcon:`🇮🇳`}]},{groupLabel:`Europe`,options:[{value:`fra1`,label:`Frankfurt (fra1)`,leftIcon:`🇩🇪`},{value:`lon1`,label:`London (lon1)`,leftIcon:`🇬🇧`}]},{groupLabel:`North America`,options:[{value:`nyc1`,label:`New York City (nyc1)`,leftIcon:`🇺🇸`},{value:`phx1`,label:`Phoenix (phx1)`,leftIcon:`🇺🇸`}]}],[T,E]=(0,d.useState)([]);return(0,d.useEffect)(()=>{(async()=>{E((await l({page:1,pageSize:10})).results.map(({id:e,name:t})=>({value:e.toString(),label:`${t.charAt(0).toLocaleUpperCase()+t.slice(1)}`})))})()},[]),(0,f.jsx)(`div`,{className:`flex flex-col gap-6`,children:(0,f.jsxs)(`div`,{className:`max-w-87.5 flex flex-col gap-6`,children:[(0,f.jsx)(c,{label:`Searchable select with Kubefirst theme`,onChange:({target:{value:e}})=>n(e),value:t,searchable:!0,theme:`kubefirst`,...e}),(0,f.jsx)(c,{label:`Searchable select with Civo theme`,onChange:({target:{value:e}})=>a(e),value:r,searchable:!0,inputMode:`text`,highlightSearch:!0,...e}),(0,f.jsx)(c,{label:`Select with Civo theme`,onChange:({target:{value:e}})=>s(e),value:o,searchable:!1,...e}),(0,f.jsx)(c,{label:`Select with no options text`,searchable:!1,noOptionsText:`No cloud account exists`,...e,options:[],additionalOptions:[(0,f.jsxs)(`button`,{children:[(0,f.jsx)(i,{}),` New Cloud Account`]},`add-new-account`)]}),(0,f.jsx)(c,{...e,label:`Select infinity scroll without search`,onChange:({target:{value:e}})=>p(e),value:u,searchable:!1,isInfiniteScrollEnabled:!0,onFetchMoreOptions:async({page:e,pageSize:t,termOfSearch:n})=>{let{results:r,totalItemsCount:i}=await l({page:e,pageSize:t,termOfSearch:n});return{data:r.map(({id:e,name:t})=>({value:e.toString(),label:`${t.charAt(0).toLocaleUpperCase()+t.slice(1)}`})),hasMore:e<=Math.ceil(i/t)}},options:T}),(0,f.jsx)(c,{...e,label:`Select infinity scroll with search`,onChange:({target:{value:e}})=>h(e),value:m,searchable:!0,isInfiniteScrollEnabled:!0,highlightSearch:!0,onFetchMoreOptions:async({page:e,pageSize:t,termOfSearch:n})=>{let{results:r,totalItemsCount:i}=await l({page:e,pageSize:t,termOfSearch:n});return{data:r.map(({id:e,name:t})=>({value:e.toString(),label:`${t.charAt(0).toLocaleUpperCase()+t.slice(1)}`})),hasMore:e<=Math.ceil(i/t)}},options:T}),(0,f.jsx)(c,{label:`Searchable select with Kubefirst theme`,onChange:({target:{value:e}})=>_(e),value:g,searchable:!0,theme:`kubefirst`,...e}),(0,f.jsx)(c,{label:`Searchable select with Civo theme`,onChange:({target:{value:e}})=>y(e),value:v,searchable:!0,showSearchIcon:!0,inputMode:`text`,highlightSearch:!0,additionalOptions:[(0,f.jsxs)(`button`,{children:[(0,f.jsx)(i,{}),` New Team`]})],...e}),(0,f.jsx)(c,{...e,label:`Select with no options text`,onChange:({target:{value:e}})=>x(e),value:b,searchable:!1,noOptionsText:`No options`,options:[]}),(0,f.jsx)(c,{label:`Select with grouped options`,onChange:({target:{value:e}})=>C(e),value:S,searchable:!0,options:w,visibleItems:8})]})})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    theme: 'dark'
  },
  args: {
    options: [{
      label: 'Talos',
      subLabel: 'A modern OS for Kubernetes',
      value: 'talos',
      leftIcon: <img src="./talos.svg" alt="Talos Logo" />
    }, {
      label: 'K3S',
      subLabel: 'Lightweight Kubernetes',
      value: 'k3s',
      leftIcon: <img src="./k3s.svg" alt="K3S Logo" />
    }],
    required: false,
    labelClassName: '',
    isLoading: false,
    name: 'select'
  },
  render: function SelectStory(args) {
    const [value1, setValue1] = useState<string>('talos');
    const [value2, setValue2] = useState<string>('talos');
    const [value3, setValue3] = useState<string>();
    const [value4, setValue4] = useState<string>();
    const [value5, setValue5] = useState<string>();
    const [value6, setValue6] = useState<string>();
    const [value7, setValue7] = useState<string>();
    const [value8, setValue8] = useState<string>();
    const [value9, setValue9] = useState<string>();
    const groupedRegions: OptionGroup[] = [{
      groupLabel: 'Asia Pacific',
      options: [{
        value: 'mum1',
        label: 'Mumbai (mum1)',
        leftIcon: '🇮🇳'
      }]
    }, {
      groupLabel: 'Europe',
      options: [{
        value: 'fra1',
        label: 'Frankfurt (fra1)',
        leftIcon: '🇩🇪'
      }, {
        value: 'lon1',
        label: 'London (lon1)',
        leftIcon: '🇬🇧'
      }]
    }, {
      groupLabel: 'North America',
      options: [{
        value: 'nyc1',
        label: 'New York City (nyc1)',
        leftIcon: '🇺🇸'
      }, {
        value: 'phx1',
        label: 'Phoenix (phx1)',
        leftIcon: '🇺🇸'
      }]
    }];
    const [pokemons, setPokemons] = useState<Option[]>([]);
    useEffect(() => {
      const init = async () => {
        const result = await getPokemons({
          page: 1,
          pageSize: DEFAULT_LIST_SIZE
        });
        setPokemons(result.results.map(({
          id,
          name
        }) => ({
          value: id.toString(),
          label: \`\${name.charAt(0).toLocaleUpperCase() + name.slice(1)}\`
        })));
      };
      init();
    }, []);
    return <div className="flex flex-col gap-6">
        <div className="max-w-87.5 flex flex-col gap-6">
          <SelectComponent label="Searchable select with Kubefirst theme" onChange={({
          target: {
            value
          }
        }) => setValue1(value)} value={value1} searchable={true} theme="kubefirst" {...args} />

          <SelectComponent label="Searchable select with Civo theme" onChange={({
          target: {
            value
          }
        }) => setValue2(value)} value={value2} searchable={true} inputMode="text" highlightSearch={true} {...args} />

          <SelectComponent label="Select with Civo theme" onChange={({
          target: {
            value
          }
        }) => setValue3(value)} value={value3} searchable={false} {...args} />

          <SelectComponent label="Select with no options text" searchable={false} noOptionsText="No cloud account exists" {...args} options={[]} additionalOptions={[<button key="add-new-account">
                <Plus /> New Cloud Account
              </button>]} />

          <SelectComponent {...args} label="Select infinity scroll without search" onChange={({
          target: {
            value
          }
        }) => setValue4(value)} value={value4} searchable={false} isInfiniteScrollEnabled={true} onFetchMoreOptions={async ({
          page,
          pageSize,
          termOfSearch
        }) => {
          const {
            results,
            totalItemsCount
          } = await getPokemons({
            page,
            pageSize,
            termOfSearch
          });
          return {
            data: results.map(({
              id,
              name
            }) => ({
              value: id.toString(),
              label: \`\${name.charAt(0).toLocaleUpperCase() + name.slice(1)}\`
            })),
            hasMore: page <= Math.ceil(totalItemsCount / pageSize)
          };
        }} options={pokemons} />

          <SelectComponent {...args} label="Select infinity scroll with search" onChange={({
          target: {
            value
          }
        }) => setValue5(value)} value={value5} searchable={true} isInfiniteScrollEnabled={true} highlightSearch onFetchMoreOptions={async ({
          page,
          pageSize,
          termOfSearch
        }) => {
          const {
            results,
            totalItemsCount
          } = await getPokemons({
            page,
            pageSize,
            termOfSearch
          });
          return {
            data: results.map(({
              id,
              name
            }) => ({
              value: id.toString(),
              label: \`\${name.charAt(0).toLocaleUpperCase() + name.slice(1)}\`
            })),
            hasMore: page <= Math.ceil(totalItemsCount / pageSize)
          };
        }} options={pokemons} />

          <SelectComponent label="Searchable select with Kubefirst theme" onChange={({
          target: {
            value
          }
        }) => setValue6(value)} value={value6} searchable={true} theme="kubefirst" {...args} />

          <SelectComponent label="Searchable select with Civo theme" onChange={({
          target: {
            value
          }
        }) => setValue7(value)} value={value7} searchable={true} showSearchIcon={true} inputMode="text" highlightSearch={true} additionalOptions={[<button>
                <Plus /> New Team
              </button>]} {...args} />

          <SelectComponent {...args} label="Select with no options text" onChange={({
          target: {
            value
          }
        }) => setValue8(value)} value={value8} searchable={false} noOptionsText="No options" options={[]} />

          <SelectComponent label="Select with grouped options" onChange={({
          target: {
            value
          }
        }) => setValue9(value)} value={value9} searchable options={groupedRegions} visibleItems={8} />
        </div>
      </div>;
  }
} satisfies Story`,...m.parameters?.docs?.source}}},h=[`Dark`]}))();export{m as Dark,h as __namedExportsOrder,p as default};