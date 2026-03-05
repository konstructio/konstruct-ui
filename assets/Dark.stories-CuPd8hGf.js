import{r as a,j as t}from"./iframe-B7-hRxyW.js";import{S as l,g as p,D as T}from"./pokemon.repository-9K6nmoyi.js";import{P as m}from"./plus-DXFHPukn.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CwGTy2we.js";import"./useToggle-CpEoT3PI.js";import"./Loader-DYL8iwub.js";import"./Typography-B4ouqvmC.js";import"./debounce-vz3c6vXV.js";import"./isObject-PMFVEVow.js";import"./Loading-BGI4fhDj.js";import"./createLucideIcon-CdjmRGOT.js";import"./index-B9RXIhwP.js";import"./index-DLVMC7Ux.js";import"./chevron-up-CzhTMzzC.js";const W={title:"In Review/Select/Dark",component:l},i={parameters:{theme:"dark"},args:{options:[{label:"Talos",subLabel:"A modern OS for Kubernetes",value:"talos",leftIcon:t.jsx("img",{src:"./talos.svg",alt:"Talos Logo"})},{label:"K3S",subLabel:"Lightweight Kubernetes",value:"k3s",leftIcon:t.jsx("img",{src:"./k3s.svg",alt:"K3S Logo"})}],required:!1,labelClassName:"",isLoading:!1,name:"select"},render:function(o){const[b,v]=a.useState("talos"),[S,f]=a.useState("talos"),[d,x]=a.useState(),[C,w]=a.useState(),[I,L]=a.useState(),[k,V]=a.useState(),[O,j]=a.useState(),[y,M]=a.useState(),[N,A]=a.useState(),E=[{groupLabel:"Asia Pacific",options:[{value:"mum1",label:"Mumbai (mum1)",leftIcon:"🇮🇳"}]},{groupLabel:"Europe",options:[{value:"fra1",label:"Frankfurt (fra1)",leftIcon:"🇩🇪"},{value:"lon1",label:"London (lon1)",leftIcon:"🇬🇧"}]},{groupLabel:"North America",options:[{value:"nyc1",label:"New York City (nyc1)",leftIcon:"🇺🇸"},{value:"phx1",label:"Phoenix (phx1)",leftIcon:"🇺🇸"}]}],[g,P]=a.useState([]);return a.useEffect(()=>{(async()=>{const s=await p({page:1,pageSize:T});P(s.results.map(({id:r,name:n})=>({value:r.toString(),label:`${n.charAt(0).toLocaleUpperCase()+n.slice(1)}`})))})()},[]),t.jsx("div",{className:"flex flex-col gap-6",children:t.jsxs("div",{className:"max-w-87.5 flex flex-col gap-6",children:[t.jsx(l,{label:"Searchable select with Kubefirst theme",onChange:({target:{value:e}})=>v(e),value:b,searchable:!0,theme:"kubefirst",...o}),t.jsx(l,{label:"Searchable select with Civo theme",onChange:({target:{value:e}})=>f(e),value:S,searchable:!0,inputMode:"text",highlightSearch:!0,...o}),t.jsx(l,{label:"Select with Civo theme",onChange:({target:{value:e}})=>x(e),value:d,searchable:!1,...o}),t.jsx(l,{label:"Select with no options text",searchable:!1,noOptionsText:"No cloud account exists",...o,options:[],additionalOptions:[t.jsxs("button",{children:[t.jsx(m,{})," New Cloud Account"]},"add-new-account")]}),t.jsx(l,{...o,label:"Select infinity scroll without search",onChange:({target:{value:e}})=>w(e),value:C,searchable:!1,isInfiniteScrollEnabled:!0,onFetchMoreOptions:async({page:e,pageSize:s,termOfSearch:r})=>{const{results:n,totalItemsCount:c}=await p({page:e,pageSize:s,termOfSearch:r});return{data:n.map(({id:h,name:u})=>({value:h.toString(),label:`${u.charAt(0).toLocaleUpperCase()+u.slice(1)}`})),hasMore:e<=Math.ceil(c/s)}},options:g}),t.jsx(l,{...o,label:"Select infinity scroll with search",onChange:({target:{value:e}})=>L(e),value:I,searchable:!0,isInfiniteScrollEnabled:!0,highlightSearch:!0,onFetchMoreOptions:async({page:e,pageSize:s,termOfSearch:r})=>{const{results:n,totalItemsCount:c}=await p({page:e,pageSize:s,termOfSearch:r});return{data:n.map(({id:h,name:u})=>({value:h.toString(),label:`${u.charAt(0).toLocaleUpperCase()+u.slice(1)}`})),hasMore:e<=Math.ceil(c/s)}},options:g}),t.jsx(l,{label:"Searchable select with Kubefirst theme",onChange:({target:{value:e}})=>V(e),value:k,searchable:!0,theme:"kubefirst",...o}),t.jsx(l,{label:"Searchable select with Civo theme",onChange:({target:{value:e}})=>j(e),value:O,searchable:!0,showSearchIcon:!0,inputMode:"text",highlightSearch:!0,additionalOptions:[t.jsxs("button",{children:[t.jsx(m,{})," New Team"]})],...o}),t.jsx(l,{...o,label:"Select with no options text",onChange:({target:{value:e}})=>M(e),value:y,searchable:!1,noOptionsText:"No options",options:[]}),t.jsx(l,{label:"Select with grouped options",onChange:({target:{value:e}})=>A(e),value:N,searchable:!0,options:E})]})})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
        }) => setValue9(value)} value={value9} searchable options={groupedRegions} />
        </div>
      </div>;
  }
} satisfies Story`,...i.parameters?.docs?.source}}};const X=["Dark"];export{i as Dark,X as __namedExportsOrder,W as default};
