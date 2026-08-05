import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{i as r,n as i,r as a,t as o}from"./Select-Bgs3nhJG.js";import{n as s,t as c}from"./Button-B0XrGfcK.js";import{n as l,t as u}from"./Modal-DnKq2ddg.js";import{n as d,t as f}from"./pokemon.repository-CixV0LTo.js";var p,m,h,g,_,v;function y(){return(y=e((()=>{r(),p=t(),s(),l(),d(),i(),m=n(),h={title:`In Review/Select/Light`,component:o},g={args:{options:[{label:`Talos`,subLabel:`A modern OS for Kubernetes`,value:`talos`,leftIcon:(0,m.jsx)(`img`,{src:`./talos.svg`,alt:`Talos Logo`})},{label:`K3S`,subLabel:`Lightweight Kubernetes`,value:`k3s`,leftIcon:(0,m.jsx)(`img`,{src:`./k3s.svg`,alt:`K3S Logo`})}],required:!1,labelClassName:``,isLoading:!1,name:`select`},render:function(e){let[t,n]=(0,p.useState)(`talos`),[r,i]=(0,p.useState)(`talos`),[s,c]=(0,p.useState)(),[l,u]=(0,p.useState)(),[d,h]=(0,p.useState)(),[g,_]=(0,p.useState)(),[v,y]=(0,p.useState)(),[b,x]=(0,p.useState)(),[S,C]=(0,p.useState)([]);return(0,p.useEffect)(()=>{(async()=>{let e=await f({page:1,pageSize:10});C(e.results.map(({id:e,name:t})=>({value:e.toString(),label:`${t.charAt(0).toLocaleUpperCase()+t.slice(1)}`})))})()},[]),(0,m.jsx)(`div`,{className:`flex flex-col gap-6`,children:(0,m.jsxs)(`div`,{className:`max-w-87.5 flex flex-col gap-6`,children:[(0,m.jsx)(o,{label:`Searchable select with Kubefirst theme`,onChange:({target:{value:e}})=>n(e),value:t,searchable:!0,theme:`kubefirst`,...e}),(0,m.jsx)(o,{label:`Searchable select with Civo theme`,onChange:({target:{value:e}})=>i(e),value:r,searchable:!0,inputMode:`text`,highlightSearch:!0,...e}),(0,m.jsx)(o,{label:`Select with Civo theme`,onChange:({target:{value:e}})=>c(e),value:s,searchable:!1,...e}),(0,m.jsx)(o,{label:`Select with no options text`,searchable:!1,noOptionsText:`No cloud account exists`,...e,options:[],additionalOptions:[(0,m.jsxs)(`button`,{children:[(0,m.jsx)(a,{}),` New Cloud Account`]})]}),(0,m.jsx)(o,{...e,label:`Select infinity scroll without search`,onChange:({target:{value:e}})=>u(e),value:l,searchable:!1,isInfiniteScrollEnabled:!0,onFetchMoreOptions:async({page:e,pageSize:t,termOfSearch:n})=>{let{results:r,totalItemsCount:i}=await f({page:e,pageSize:t,termOfSearch:n});return{data:r.map(({id:e,name:t})=>({value:e.toString(),label:`${t.charAt(0).toLocaleUpperCase()+t.slice(1)}`})),hasMore:e<=Math.ceil(i/t)}},options:S}),(0,m.jsx)(o,{...e,label:`Select infinity scroll with search`,onChange:({target:{value:e}})=>h(e),value:d,searchable:!0,isInfiniteScrollEnabled:!0,highlightSearch:!0,onFetchMoreOptions:async({page:e,pageSize:t,termOfSearch:n})=>{let{results:r,totalItemsCount:i}=await f({page:e,pageSize:t,termOfSearch:n});return{data:r.map(({id:e,name:t})=>({value:e.toString(),label:`${t.charAt(0).toLocaleUpperCase()+t.slice(1)}`})),hasMore:e<=Math.ceil(i/t)}},options:S}),(0,m.jsx)(o,{label:`Searchable select with Kubefirst theme`,onChange:({target:{value:e}})=>_(e),value:g,searchable:!0,theme:`kubefirst`,...e}),(0,m.jsx)(o,{label:`Searchable select with Civo theme`,onChange:({target:{value:e}})=>y(e),value:v,searchable:!0,showSearchIcon:!0,inputMode:`text`,highlightSearch:!0,additionalOptions:[(0,m.jsxs)(`button`,{children:[(0,m.jsx)(a,{}),` New Team`]})],...e}),(0,m.jsx)(o,{...e,label:`Select with no options text`,onChange:({target:{value:e}})=>x(e),value:b,searchable:!1,noOptionsText:`No options`,options:[]})]})})}},_={render:function(){let[e,t]=(0,p.useState)(!1),[n,r]=(0,p.useState)();return(0,m.jsxs)(`div`,{children:[(0,m.jsx)(c,{onClick:()=>t(!0),children:`Open Modal with select`}),(0,m.jsx)(u,{isOpen:e,onClose:()=>t(!1),className:`min-h-25`,children:(0,m.jsx)(u.Body,{children:(0,m.jsx)(`div`,{className:`p-6`,children:(0,m.jsx)(o,{label:`Choose your distribution`,options:[{label:`Talos`,value:`talos`,leftIcon:(0,m.jsx)(`img`,{src:`./talos.svg`,alt:`Talos Logo`})},{label:`K3S`,value:`k3s`,leftIcon:(0,m.jsx)(`img`,{src:`./k3s.svg`,alt:`K3S Logo`})}],placeholder:`Select an option...`,onChange:({target:{value:e}})=>{console.log(`value`,e),r(e)},value:n,theme:`kubefirst`,name:`modal-select`})})})})]})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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

          <SelectComponent label="Select with Civo theme" onChange={({
          target: {
            value
          }
        }) => setValue3(value)} value={value3} searchable={false} {...args} />

          <SelectComponent label="Select with no options text" searchable={false} noOptionsText="No cloud account exists" {...args} options={[]} additionalOptions={[<button>
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
        </div>
      </div>;
  }
} satisfies Story`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function selectInModalStory() {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState<string>();
    return <div>
        <Button onClick={() => setIsOpen(true)}>Open Modal with select</Button>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} className="min-h-25">
          <Modal.Body>
            <div className="p-6">
              <SelectComponent label="Choose your distribution" options={[{
              label: 'Talos',
              value: 'talos',
              leftIcon: <img src="./talos.svg" alt="Talos Logo" />
            }, {
              label: 'K3S',
              value: 'k3s',
              leftIcon: <img src="./k3s.svg" alt="K3S Logo" />
            }]} placeholder="Select an option..." onChange={({
              target: {
                value
              }
            }) => {
              console.log('value', value);
              setValue(value);
            }} value={value} theme="kubefirst" name="modal-select" />
            </div>
          </Modal.Body>
        </Modal>
      </div>;
  }
} satisfies Story`,..._.parameters?.docs?.source}}},v=[`Light`,`selectInModal`]})))()}y();export{g as Light,v as __namedExportsOrder,h as default,_ as selectInModal};