import{j as t,r as a}from"./iframe-Bp60l9al.js";import{S as s,g as p,D as y}from"./pokemon.repository-BNHWNQkJ.js";import{P as g}from"./plus-00AcGNAj.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B-7A89sm.js";import"./useToggle-Blrvcrxi.js";import"./Loader-BEaIynbA.js";import"./Typography-B_faiLY2.js";import"./index-DnqQ_iXf.js";import"./index-BTTMSvRg.js";import"./debounce-CSPtUN8m.js";import"./isObject-JCTm3-12.js";import"./Loading-Nph5f8Tb.js";import"./createLucideIcon-CjYg5P9h.js";import"./chevron-up-DHB3K7Lt.js";const J={title:"In Review/Select/Dark",component:s},u={parameters:{theme:"dark"},args:{options:[{label:"Talos",subLabel:"A modern OS for Kubernetes",value:"talos",leftIcon:t.jsx("img",{src:"./talos.svg",alt:"Talos Logo"})},{label:"K3S",subLabel:"Lightweight Kubernetes",value:"k3s",leftIcon:t.jsx("img",{src:"./k3s.svg",alt:"K3S Logo"})}],required:!1,labelClassName:"",isLoading:!1,name:"select"},render:function(l){const[b,v]=a.useState("talos"),[S,f]=a.useState("talos"),[d,C]=a.useState(),[x,w]=a.useState(),[k,V]=a.useState(),[L,I]=a.useState(),[O,j]=a.useState(),[M,N]=a.useState(),[m,T]=a.useState([]);return a.useEffect(()=>{(async()=>{const o=await p({page:1,pageSize:y});T(o.results.map(({id:r,name:n})=>({value:r.toString(),label:`${n.charAt(0).toLocaleUpperCase()+n.slice(1)}`})))})()},[]),t.jsx("div",{className:"flex flex-col gap-6",children:t.jsxs("div",{className:"max-w-87.5 flex flex-col gap-6",children:[t.jsx(s,{label:"Searchable select with Kubefirst theme",onChange:({target:{value:e}})=>v(e),value:b,searchable:!0,theme:"kubefirst",...l}),t.jsx(s,{label:"Searchable select with Civo theme",onChange:({target:{value:e}})=>f(e),value:S,searchable:!0,inputMode:"text",highlightSearch:!0,...l}),t.jsx(s,{label:"select with Civo theme",onChange:({target:{value:e}})=>C(e),value:d,searchable:!1,...l}),t.jsx(s,{label:"select with no options text",searchable:!1,noOptionsText:"No cloud account exists",...l,options:[],additionalOptions:[t.jsxs("button",{children:[t.jsx(g,{})," New Cloud Account"]})]}),t.jsx(s,{...l,label:"select infinity scroll without search",onChange:({target:{value:e}})=>w(e),value:x,searchable:!1,isInfiniteScrollEnabled:!0,onFetchMoreOptions:async({page:e,pageSize:o,termOfSearch:r})=>{const{results:n,totalItemsCount:c}=await p({page:e,pageSize:o,termOfSearch:r});return{data:n.map(({id:h,name:i})=>({value:h.toString(),label:`${i.charAt(0).toLocaleUpperCase()+i.slice(1)}`})),hasMore:e<=Math.ceil(c/o)}},options:m}),t.jsx(s,{...l,label:"select infinity scroll with search",onChange:({target:{value:e}})=>V(e),value:k,searchable:!0,isInfiniteScrollEnabled:!0,highlightSearch:!0,onFetchMoreOptions:async({page:e,pageSize:o,termOfSearch:r})=>{const{results:n,totalItemsCount:c}=await p({page:e,pageSize:o,termOfSearch:r});return{data:n.map(({id:h,name:i})=>({value:h.toString(),label:`${i.charAt(0).toLocaleUpperCase()+i.slice(1)}`})),hasMore:e<=Math.ceil(c/o)}},options:m}),t.jsx(s,{label:"Searchable select with Kubefirst theme",onChange:({target:{value:e}})=>I(e),value:L,searchable:!0,theme:"kubefirst",...l}),t.jsx(s,{label:"Searchable select with Civo theme",onChange:({target:{value:e}})=>j(e),value:O,searchable:!0,showSearchIcon:!0,inputMode:"text",highlightSearch:!0,additionalOptions:[t.jsxs("button",{children:[t.jsx(g,{})," New Team"]})],...l}),t.jsx(s,{...l,label:"select with no options text",onChange:({target:{value:e}})=>N(e),value:M,searchable:!1,noOptionsText:"No options",options:[]})]})})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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

          <SelectComponent label="select with Civo theme" onChange={({
          target: {
            value
          }
        }) => setValue3(value)} value={value3} searchable={false} {...args} />

          <SelectComponent label="select with no options text" searchable={false} noOptionsText="No cloud account exists" {...args} options={[]} additionalOptions={[<button>
                <Plus /> New Cloud Account
              </button>]} />

          <SelectComponent {...args} label="select infinity scroll without search" onChange={({
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

          <SelectComponent {...args} label="select infinity scroll with search" onChange={({
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

          <SelectComponent {...args} label="select with no options text" onChange={({
          target: {
            value
          }
        }) => setValue8(value)} value={value8} searchable={false} noOptionsText="No options" options={[]} />
        </div>
      </div>;
  }
} satisfies Story`,...u.parameters?.docs?.source}}};const Q=["Dark"];export{u as Dark,Q as __namedExportsOrder,J as default};
