import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as o}from"./iframe-d5463F2f.js";import{B as E}from"./Button-72TPwAFk.js";import{M as C}from"./Modal-DOoBhOFo.js";import{D as s,g as b,a as A}from"./Dropdown-BSoHYCuZ.js";import{c as P}from"./createLucideIcon-DtHmXWle.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Co5HJdXs.js";import"./index-CRttB-dH.js";import"./index-Bn42e07n.js";import"./index-BiHl9U7D.js";import"./index-P4VcHoeJ.js";import"./index-ClrxwnnV.js";import"./Combination-D8QZ32tO.js";import"./x-B146wZ0S.js";import"./index-B_SU4PP-.js";import"./useToggle-CKE7iGx3.js";import"./loader-BC2PuREG.js";import"./Typography-B0NnVuoh.js";import"./debounce-Cnrw9YhL.js";import"./Loading-BC_HwAih.js";import"./chevron-up-DuVRlcZY.js";const U=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],w=P("plus",U),re={title:"In Review/Dropdown",component:s},p={args:{options:[{label:"Talos",subLabel:"A modern OS for Kubernetes",value:"talos",leftIcon:e.jsx("img",{src:"./talos.svg",alt:"Talos Logo"})},{label:"K3S",subLabel:"Lightweight Kubernetes",value:"k3s",leftIcon:e.jsx("img",{src:"./k3s.svg",alt:"K3S Logo"})}],placeholder:"Select an option...",required:!1,labelClassName:"",isLoading:!1,name:"dropdown"},render:function(a){const[u,d]=o.useState("talos"),[m,c]=o.useState(),[D,I]=o.useState(),[O,j]=o.useState(),[M,N]=o.useState(),[V,L]=o.useState(),[y,T]=o.useState(),[S,f]=o.useState(),[x,K]=o.useState([]);return o.useEffect(()=>{(async()=>{const l=await b({page:1,pageSize:A});K(l.results.map(({id:r,name:n})=>({value:r.toString(),label:`${n.charAt(0).toLocaleUpperCase()+n.slice(1)}`})))})()},[]),e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"max-w-[350px] flex flex-col gap-6 p-6",children:[e.jsx(s,{label:"Searchable dropdown with Kubefirst theme",onChange:({target:{value:t}})=>d(t),value:u,searchable:!0,theme:"kubefirst",...a}),e.jsx(s,{label:"Searchable dropdown with Civo theme",onChange:({target:{value:t}})=>c(t),value:m,searchable:!0,showSearchIcon:!0,inputMode:"text",highlightSearch:!0,additionalOptions:[e.jsxs("button",{className:"text-blue-600 dark:text-aurora-500",children:[e.jsx(w,{})," New Team"]})],...a}),e.jsx(s,{label:"Dropdown with Civo theme",onChange:({target:{value:t}})=>I(t),value:D,searchable:!1,...a}),e.jsx(s,{label:"Dropdown with no options text",searchable:!1,noOptionsText:"No cloud account exists",...a,options:[],additionalOptions:[e.jsxs("button",{className:"text-blue-600 dark:text-aurora-500",children:[e.jsx(w,{})," New Cloud Account"]})]}),e.jsx(s,{...a,label:"Dropdown infinity scroll without search",onChange:({target:{value:t}})=>j(t),value:O,searchable:!1,isInfiniteScrollEnabled:!0,onFetchMoreOptions:async({page:t,pageSize:l,termOfSearch:r})=>{const{results:n,totalItemsCount:g}=await b({page:t,pageSize:l,termOfSearch:r});return{data:n.map(({id:v,name:i})=>({value:v.toString(),label:`${i.charAt(0).toLocaleUpperCase()+i.slice(1)}`})),hasMore:t<=Math.ceil(g/l)}},options:x}),e.jsx(s,{...a,label:"Dropdown infinity scroll with search",onChange:({target:{value:t}})=>N(t),value:M,searchable:!0,isInfiniteScrollEnabled:!0,highlightSearch:!0,onFetchMoreOptions:async({page:t,pageSize:l,termOfSearch:r})=>{const{results:n,totalItemsCount:g}=await b({page:t,pageSize:l,termOfSearch:r});return{data:n.map(({id:v,name:i})=>({value:v.toString(),label:`${i.charAt(0).toLocaleUpperCase()+i.slice(1)}`})),hasMore:t<=Math.ceil(g/l)}},options:x})]}),e.jsxs("div",{className:"max-w-[350px] flex flex-col gap-6 p-6 bg-slate-800 rounded-sm","data-theme":"dark",children:[e.jsx(s,{label:"Searchable dropdown with Kubefirst theme",onChange:({target:{value:t}})=>L(t),value:V,searchable:!0,theme:"kubefirst",...a}),e.jsx(s,{label:"Searchable dropdown with Civo theme",onChange:({target:{value:t}})=>T(t),value:y,searchable:!0,showSearchIcon:!0,inputMode:"text",highlightSearch:!0,additionalOptions:[e.jsxs("button",{className:"text-blue-600 dark:text-aurora-500",children:[e.jsx(w,{})," New Team"]})],...a}),e.jsx(s,{label:"Dropdown with Civo theme",onChange:({target:{value:t}})=>f(t),value:S,searchable:!1,...a}),e.jsx(s,{...a,label:"Dropdown with no options text",onChange:({target:{value:t}})=>f(t),value:S,searchable:!1,noOptionsText:"No options",options:[]})]})]})}},h={render:function(){const[a,u]=o.useState(!1),[d,m]=o.useState();return e.jsxs("div",{children:[e.jsx(E,{onClick:()=>u(!0),theme:"kubefirst",children:"Open Modal with Dropdown"}),e.jsx(C,{isOpen:a,onClose:()=>u(!1),theme:"kubefirst",className:"min-h-[100px]",children:e.jsx(C.Body,{children:e.jsx("div",{className:"p-6",children:e.jsx(s,{label:"Choose your distribution",options:[{label:"Talos",value:"talos",leftIcon:e.jsx("img",{src:"./talos.svg",alt:"Talos Logo"})},{label:"K3S",value:"k3s",leftIcon:e.jsx("img",{src:"./k3s.svg",alt:"K3S Logo"})}],placeholder:"Select an option...",onChange:({target:{value:c}})=>{console.log("value",c),m(c)},value:d,theme:"kubefirst",name:"modal-dropdown"})})})})]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
    placeholder: 'Select an option...',
    required: false,
    labelClassName: '',
    isLoading: false,
    name: 'dropdown'
  },
  render: function DropdownStory(args) {
    const [value1, setValue1] = useState<string>('talos');
    const [value2, setValue2] = useState<string>();
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
        <div className="max-w-[350px] flex flex-col gap-6 p-6">
          <DropdownComponent label="Searchable dropdown with Kubefirst theme" onChange={({
          target: {
            value
          }
        }) => setValue1(value)} value={value1} searchable={true} theme="kubefirst" {...args} />

          <DropdownComponent label="Searchable dropdown with Civo theme" onChange={({
          target: {
            value
          }
        }) => setValue2(value)} value={value2} searchable={true} showSearchIcon={true} inputMode="text" highlightSearch={true} additionalOptions={[<button className="text-blue-600 dark:text-aurora-500">
                <Plus /> New Team
              </button>]} {...args} />

          <DropdownComponent label="Dropdown with Civo theme" onChange={({
          target: {
            value
          }
        }) => setValue3(value)} value={value3} searchable={false} {...args} />

          <DropdownComponent label="Dropdown with no options text" searchable={false} noOptionsText="No cloud account exists" {...args} options={[]} additionalOptions={[<button className="text-blue-600 dark:text-aurora-500">
                <Plus /> New Cloud Account
              </button>]} />

          <DropdownComponent {...args} label="Dropdown infinity scroll without search" onChange={({
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

          <DropdownComponent {...args} label="Dropdown infinity scroll with search" onChange={({
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
        </div>

        <div className="max-w-[350px] flex flex-col gap-6 p-6 bg-slate-800 rounded-sm" data-theme="dark">
          <DropdownComponent label="Searchable dropdown with Kubefirst theme" onChange={({
          target: {
            value
          }
        }) => setValue6(value)} value={value6} searchable={true} theme="kubefirst" {...args} />

          <DropdownComponent label="Searchable dropdown with Civo theme" onChange={({
          target: {
            value
          }
        }) => setValue7(value)} value={value7} searchable={true} showSearchIcon={true} inputMode="text" highlightSearch={true} additionalOptions={[<button className="text-blue-600 dark:text-aurora-500">
                <Plus /> New Team
              </button>]} {...args} />

          <DropdownComponent label="Dropdown with Civo theme" onChange={({
          target: {
            value
          }
        }) => setValue8(value)} value={value8} searchable={false} {...args} />

          <DropdownComponent {...args} label="Dropdown with no options text" onChange={({
          target: {
            value
          }
        }) => setValue8(value)} value={value8} searchable={false} noOptionsText="No options" options={[]} />
        </div>
      </div>;
  }
} satisfies Story`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function DropdownInModalStory() {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState<string>();
    return <div>
        <Button onClick={() => setIsOpen(true)} theme="kubefirst">
          Open Modal with Dropdown
        </Button>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} theme="kubefirst" className="min-h-[100px]">
          <Modal.Body>
            <div className="p-6">
              <DropdownComponent label="Choose your distribution" options={[{
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
            }} value={value} theme="kubefirst" name="modal-dropdown" />
            </div>
          </Modal.Body>
        </Modal>
      </div>;
  }
} satisfies Story`,...h.parameters?.docs?.source}}};const ie=["Dropdown","DropdownInModal"];export{p as Dropdown,h as DropdownInModal,ie as __namedExportsOrder,re as default};
