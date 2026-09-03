import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{i as r,n as i,r as a,t as o}from"./Select-CAaVbYwL.js";import{n as s,t as c}from"./Button-DBH2wbJQ.js";import{n as l,t as u}from"./Drawer-DS2QJ_4N.js";import{n as d,t as f}from"./Modal-B9Q7ibkt.js";import{n as p,t as m}from"./pokemon.repository-L228hEnR.js";var h,g,_,v,y,b,x;function S(){return(S=e((()=>{r(),h=t(),s(),l(),d(),p(),i(),g=n(),_={title:`In Review/Select/Light`,component:o},v={args:{options:[{label:`Talos`,subLabel:`A modern OS for Kubernetes`,value:`talos`,leftIcon:(0,g.jsx)(`img`,{src:`./talos.svg`,alt:`Talos Logo`})},{label:`K3S`,subLabel:`Lightweight Kubernetes`,value:`k3s`,leftIcon:(0,g.jsx)(`img`,{src:`./k3s.svg`,alt:`K3S Logo`})}],required:!1,labelClassName:``,isLoading:!1,name:`select`},render:function(e){let[t,n]=(0,h.useState)(`talos`),[r,i]=(0,h.useState)(`talos`),[s,c]=(0,h.useState)(),[l,u]=(0,h.useState)(),[d,f]=(0,h.useState)(),[p,_]=(0,h.useState)(),[v,y]=(0,h.useState)(),[b,x]=(0,h.useState)(),[S,C]=(0,h.useState)([]);return(0,h.useEffect)(()=>{(async()=>{let e=await m({page:1,pageSize:10});C(e.results.map(({id:e,name:t})=>({value:e.toString(),label:`${t.charAt(0).toLocaleUpperCase()+t.slice(1)}`})))})()},[]),(0,g.jsx)(`div`,{className:`flex flex-col gap-6`,children:(0,g.jsxs)(`div`,{className:`max-w-87.5 flex flex-col gap-6`,children:[(0,g.jsx)(o,{label:`Searchable select with Kubefirst theme`,onChange:({target:{value:e}})=>n(e),value:t,searchable:!0,theme:`kubefirst`,...e}),(0,g.jsx)(o,{label:`Searchable select with Civo theme`,onChange:({target:{value:e}})=>i(e),value:r,searchable:!0,inputMode:`text`,highlightSearch:!0,...e}),(0,g.jsx)(o,{label:`Select with Civo theme`,onChange:({target:{value:e}})=>c(e),value:s,searchable:!1,...e}),(0,g.jsx)(o,{label:`Select with no options text`,searchable:!1,noOptionsText:`No cloud account exists`,...e,options:[],additionalOptions:[(0,g.jsxs)(`button`,{children:[(0,g.jsx)(a,{}),` New Cloud Account`]})]}),(0,g.jsx)(o,{...e,label:`Select infinity scroll without search`,onChange:({target:{value:e}})=>u(e),value:l,searchable:!1,isInfiniteScrollEnabled:!0,onFetchMoreOptions:async({page:e,pageSize:t,termOfSearch:n})=>{let{results:r,totalItemsCount:i}=await m({page:e,pageSize:t,termOfSearch:n});return{data:r.map(({id:e,name:t})=>({value:e.toString(),label:`${t.charAt(0).toLocaleUpperCase()+t.slice(1)}`})),hasMore:e<=Math.ceil(i/t)}},options:S}),(0,g.jsx)(o,{...e,label:`Select infinity scroll with search`,onChange:({target:{value:e}})=>f(e),value:d,searchable:!0,isInfiniteScrollEnabled:!0,highlightSearch:!0,onFetchMoreOptions:async({page:e,pageSize:t,termOfSearch:n})=>{let{results:r,totalItemsCount:i}=await m({page:e,pageSize:t,termOfSearch:n});return{data:r.map(({id:e,name:t})=>({value:e.toString(),label:`${t.charAt(0).toLocaleUpperCase()+t.slice(1)}`})),hasMore:e<=Math.ceil(i/t)}},options:S}),(0,g.jsx)(o,{label:`Searchable select with Kubefirst theme`,onChange:({target:{value:e}})=>_(e),value:p,searchable:!0,theme:`kubefirst`,...e}),(0,g.jsx)(o,{label:`Searchable select with Civo theme`,onChange:({target:{value:e}})=>y(e),value:v,searchable:!0,showSearchIcon:!0,inputMode:`text`,highlightSearch:!0,additionalOptions:[(0,g.jsxs)(`button`,{children:[(0,g.jsx)(a,{}),` New Team`]})],...e}),(0,g.jsx)(o,{...e,label:`Select with no options text`,onChange:({target:{value:e}})=>x(e),value:b,searchable:!1,noOptionsText:`No options`,options:[]})]})})}},y={render:function(){let[e,t]=(0,h.useState)(!1),[n,r]=(0,h.useState)();return(0,g.jsxs)(`div`,{children:[(0,g.jsx)(c,{onClick:()=>t(!0),children:`Open Modal with select`}),(0,g.jsx)(f,{isOpen:e,onClose:()=>t(!1),className:`min-h-25`,children:(0,g.jsx)(f.Body,{children:(0,g.jsx)(`div`,{className:`p-6`,children:(0,g.jsx)(o,{label:`Choose your distribution`,options:[{label:`Talos`,value:`talos`,leftIcon:(0,g.jsx)(`img`,{src:`./talos.svg`,alt:`Talos Logo`})},{label:`K3S`,value:`k3s`,leftIcon:(0,g.jsx)(`img`,{src:`./k3s.svg`,alt:`K3S Logo`})}],placeholder:`Select an option...`,onChange:({target:{value:e}})=>{console.log(`value`,e),r(e)},value:n,theme:`kubefirst`,name:`modal-select`})})})})]})}},b={parameters:{docs:{description:{story:"`isPortal` renders the options in a portal positioned with Radix Popover, so the list is never clipped by `overflow` containers such as drawers, modals or table cells. `onValueChange` receives the selected value directly, without the event wrapper."}}},render:function(){let[e,t]=(0,h.useState)(!1),[n,r]=(0,h.useState)();return(0,g.jsxs)(`div`,{children:[(0,g.jsx)(c,{onClick:()=>t(!0),children:`Open Drawer with select`}),(0,g.jsx)(u,{isOpen:e,onClose:()=>t(!1),children:(0,g.jsx)(u.Body,{children:(0,g.jsx)(`div`,{className:`p-6`,children:(0,g.jsx)(o,{isPortal:!0,label:`Choose your distribution`,options:[{label:`Talos`,value:`talos`,leftIcon:(0,g.jsx)(`img`,{src:`./talos.svg`,alt:`Talos Logo`})},{label:`K3S`,value:`k3s`,leftIcon:(0,g.jsx)(`img`,{src:`./k3s.svg`,alt:`K3S Logo`})}],placeholder:`Select an option...`,value:n,onValueChange:r,name:`drawer-select`})})})})]})}},x=[`Light`,`selectInModal`,`selectInDrawerPortal`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '\`isPortal\` renders the options in a portal positioned with Radix Popover, so the list is never clipped by \`overflow\` containers such as drawers, modals or table cells. \`onValueChange\` receives the selected value directly, without the event wrapper.'
      }
    }
  },
  render: function selectInDrawerPortalStory() {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState<string>();
    return <div>
        <Button onClick={() => setIsOpen(true)}>Open Drawer with select</Button>

        <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <Drawer.Body>
            <div className="p-6">
              <SelectComponent isPortal label="Choose your distribution" options={[{
              label: 'Talos',
              value: 'talos',
              leftIcon: <img src="./talos.svg" alt="Talos Logo" />
            }, {
              label: 'K3S',
              value: 'k3s',
              leftIcon: <img src="./k3s.svg" alt="K3S Logo" />
            }]} placeholder="Select an option..." value={value} onValueChange={setValue} name="drawer-select" />
            </div>
          </Drawer.Body>
        </Drawer>
      </div>;
  }
} satisfies Story`,...b.parameters?.docs?.source}}}})))()}S();export{v as Light,x as __namedExportsOrder,_ as default,b as selectInDrawerPortal,y as selectInModal};