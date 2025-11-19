import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as t}from"./iframe-DGsOyjfs.js";import{B as E}from"./Button-CW4Lebrn.js";import{M as w}from"./Modal-CC3GWEAb.js";import{D as s,g as b,a as A}from"./Dropdown-Be5obM8G.js";import{c as P}from"./createLucideIcon-DhHNfHch.js";import"./preload-helper-PPVm8Dsz.js";import"./index-hdN2mqaY.js";import"./index-CQjkwWPk.js";import"./index-Bn42e07n.js";import"./index-CeY8k699.js";import"./index-BGESzGcM.js";import"./index-Cq_u4VUZ.js";import"./Combination-CDJR9JNu.js";import"./x-DdE8rAi9.js";import"./index-D8tQV33T.js";import"./useToggle-IFe470FF.js";import"./Loading-CG4RfZTe.js";import"./Typography-BJJrFUK7.js";import"./debounce-BT-C_Ana.js";const U=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],f=P("plus",U),le={title:"In Review/Dropdown",component:s},p={args:{options:[{label:"Talos",subLabel:"A modern OS for Kubernetes",value:"talos",leftIcon:e.jsx("img",{src:"./talos.svg",alt:"Talos Logo"})},{label:"K3S",subLabel:"Lightweight Kubernetes",value:"k3s",leftIcon:e.jsx("img",{src:"./k3s.svg",alt:"K3S Logo"})}],placeholder:"Select an option...",required:!1,labelClassName:"",isLoading:!1,name:"dropdown"},render:function(o){const[u,d]=t.useState("talos"),[m,c]=t.useState(),[C,k]=t.useState(),[I,D]=t.useState(),[M,j]=t.useState(),[L,V]=t.useState(),[O,y]=t.useState(),[N,K]=t.useState(),[S,T]=t.useState([]);return t.useEffect(()=>{(async()=>{const l=await b({page:1,pageSize:A});T(l.results.map(({id:n,name:r})=>({value:n.toString(),label:`${r.charAt(0).toLocaleUpperCase()+r.slice(1)}`})))})()},[]),e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"max-w-[350px] flex flex-col gap-6 p-6",children:[e.jsx(s,{label:"Searchable dropdown with Kubefirst theme",onChange:({target:{value:a}})=>d(a),value:u,searchable:!0,theme:"kubefirst",...o}),e.jsx(s,{label:"Searchable dropdown with Civo theme",onChange:({target:{value:a}})=>c(a),value:m,searchable:!0,showSearchIcon:!0,inputMode:"text",highlightSearch:!0,additionalOptions:[e.jsxs("button",{className:"text-blue-600 dark:text-aurora-500",children:[e.jsx(f,{})," New Team"]})],...o}),e.jsx(s,{label:"Dropdown with Civo theme",onChange:({target:{value:a}})=>k(a),value:C,searchable:!1,...o}),e.jsx(s,{...o,label:"Dropdown infinity scroll without search",onChange:({target:{value:a}})=>D(a),value:I,searchable:!1,isInfiniteScrollEnabled:!0,onFetchMoreOptions:async({page:a,pageSize:l,termOfSearch:n})=>{const{results:r,totalItemsCount:g}=await b({page:a,pageSize:l,termOfSearch:n});return{data:r.map(({id:v,name:i})=>({value:v.toString(),label:`${i.charAt(0).toLocaleUpperCase()+i.slice(1)}`})),hasMore:a<=Math.ceil(g/l)}},options:S}),e.jsx(s,{...o,label:"Dropdown infinity scroll with search",onChange:({target:{value:a}})=>j(a),value:M,searchable:!0,isInfiniteScrollEnabled:!0,highlightSearch:!0,onFetchMoreOptions:async({page:a,pageSize:l,termOfSearch:n})=>{const{results:r,totalItemsCount:g}=await b({page:a,pageSize:l,termOfSearch:n});return{data:r.map(({id:v,name:i})=>({value:v.toString(),label:`${i.charAt(0).toLocaleUpperCase()+i.slice(1)}`})),hasMore:a<=Math.ceil(g/l)}},options:S})]}),e.jsxs("div",{className:"max-w-[350px] flex flex-col gap-6 p-6 bg-slate-800 rounded-sm","data-theme":"dark",children:[e.jsx(s,{label:"Searchable dropdown with Kubefirst theme",onChange:({target:{value:a}})=>V(a),value:L,searchable:!0,theme:"kubefirst",...o}),e.jsx(s,{label:"Searchable dropdown with Civo theme",onChange:({target:{value:a}})=>y(a),value:O,searchable:!0,showSearchIcon:!0,inputMode:"text",highlightSearch:!0,additionalOptions:[e.jsxs("button",{className:"text-blue-600 dark:text-aurora-500",children:[e.jsx(f,{})," New Team"]})],...o}),e.jsx(s,{label:"Dropdown with Civo theme",onChange:({target:{value:a}})=>K(a),value:N,searchable:!1,...o})]})]})}},h={render:function(){const[o,u]=t.useState(!1),[d,m]=t.useState();return e.jsxs("div",{children:[e.jsx(E,{onClick:()=>u(!0),theme:"kubefirst",children:"Open Modal with Dropdown"}),e.jsx(w,{isOpen:o,onClose:()=>u(!1),theme:"kubefirst",className:"min-h-[100px]",children:e.jsx(w.Body,{children:e.jsx("div",{className:"p-6",children:e.jsx(s,{label:"Choose your distribution",options:[{label:"Talos",value:"talos",leftIcon:e.jsx("img",{src:"./talos.svg",alt:"Talos Logo"})},{label:"K3S",value:"k3s",leftIcon:e.jsx("img",{src:"./k3s.svg",alt:"K3S Logo"})}],placeholder:"Select an option...",onChange:({target:{value:c}})=>{console.log("value",c),m(c)},value:d,theme:"kubefirst",name:"modal-dropdown"})})})})]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...h.parameters?.docs?.source}}};const re=["Dropdown","DropdownInModal"];export{p as Dropdown,h as DropdownInModal,re as __namedExportsOrder,le as default};
