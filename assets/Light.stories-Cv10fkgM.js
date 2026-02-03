import{j as e,r as a}from"./iframe-Bp60l9al.js";import{B as A}from"./Button-D4_1USlM.js";import{M as f}from"./Modal-CXdhbCOu.js";import{S as l,g as b,D as P}from"./pokemon.repository-BNHWNQkJ.js";import{P as C}from"./plus-00AcGNAj.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DnqQ_iXf.js";import"./index-BTTMSvRg.js";import"./index-B-7A89sm.js";import"./index-JTgYP6w4.js";import"./index-CRUFEqe3.js";import"./index-CRmdLx0M.js";import"./Combination-Bg0ws_ea.js";import"./x-DrpkZSMN.js";import"./index-9yVhKgGp.js";import"./useToggle-Blrvcrxi.js";import"./Loader-BEaIynbA.js";import"./Typography-B_faiLY2.js";import"./debounce-CSPtUN8m.js";import"./isObject-JCTm3-12.js";import"./Loading-Nph5f8Tb.js";import"./createLucideIcon-CjYg5P9h.js";import"./chevron-up-DHB3K7Lt.js";const ne={title:"In Review/Select/Light",component:l},h={args:{options:[{label:"Talos",subLabel:"A modern OS for Kubernetes",value:"talos",leftIcon:e.jsx("img",{src:"./talos.svg",alt:"Talos Logo"})},{label:"K3S",subLabel:"Lightweight Kubernetes",value:"k3s",leftIcon:e.jsx("img",{src:"./k3s.svg",alt:"K3S Logo"})}],required:!1,labelClassName:"",isLoading:!1,name:"select"},render:function(s){const[u,m]=a.useState("talos"),[g,c]=a.useState("talos"),[w,I]=a.useState(),[O,L]=a.useState(),[M,j]=a.useState(),[k,V]=a.useState(),[y,N]=a.useState(),[T,K]=a.useState(),[d,E]=a.useState([]);return a.useEffect(()=>{(async()=>{const o=await b({page:1,pageSize:P});E(o.results.map(({id:r,name:n})=>({value:r.toString(),label:`${n.charAt(0).toLocaleUpperCase()+n.slice(1)}`})))})()},[]),e.jsx("div",{className:"flex flex-col gap-6",children:e.jsxs("div",{className:"max-w-87.5 flex flex-col gap-6",children:[e.jsx(l,{label:"Searchable select with Kubefirst theme",onChange:({target:{value:t}})=>m(t),value:u,searchable:!0,theme:"kubefirst",...s}),e.jsx(l,{label:"Searchable select with Civo theme",onChange:({target:{value:t}})=>c(t),value:g,searchable:!0,inputMode:"text",highlightSearch:!0,...s}),e.jsx(l,{label:"select with Civo theme",onChange:({target:{value:t}})=>I(t),value:w,searchable:!1,...s}),e.jsx(l,{label:"select with no options text",searchable:!1,noOptionsText:"No cloud account exists",...s,options:[],additionalOptions:[e.jsxs("button",{children:[e.jsx(C,{})," New Cloud Account"]})]}),e.jsx(l,{...s,label:"select infinity scroll without search",onChange:({target:{value:t}})=>L(t),value:O,searchable:!1,isInfiniteScrollEnabled:!0,onFetchMoreOptions:async({page:t,pageSize:o,termOfSearch:r})=>{const{results:n,totalItemsCount:v}=await b({page:t,pageSize:o,termOfSearch:r});return{data:n.map(({id:S,name:i})=>({value:S.toString(),label:`${i.charAt(0).toLocaleUpperCase()+i.slice(1)}`})),hasMore:t<=Math.ceil(v/o)}},options:d}),e.jsx(l,{...s,label:"select infinity scroll with search",onChange:({target:{value:t}})=>j(t),value:M,searchable:!0,isInfiniteScrollEnabled:!0,highlightSearch:!0,onFetchMoreOptions:async({page:t,pageSize:o,termOfSearch:r})=>{const{results:n,totalItemsCount:v}=await b({page:t,pageSize:o,termOfSearch:r});return{data:n.map(({id:S,name:i})=>({value:S.toString(),label:`${i.charAt(0).toLocaleUpperCase()+i.slice(1)}`})),hasMore:t<=Math.ceil(v/o)}},options:d}),e.jsx(l,{label:"Searchable select with Kubefirst theme",onChange:({target:{value:t}})=>V(t),value:k,searchable:!0,theme:"kubefirst",...s}),e.jsx(l,{label:"Searchable select with Civo theme",onChange:({target:{value:t}})=>N(t),value:y,searchable:!0,showSearchIcon:!0,inputMode:"text",highlightSearch:!0,additionalOptions:[e.jsxs("button",{children:[e.jsx(C,{})," New Team"]})],...s}),e.jsx(l,{...s,label:"select with no options text",onChange:({target:{value:t}})=>K(t),value:T,searchable:!1,noOptionsText:"No options",options:[]})]})})}},p={render:function(){const[s,u]=a.useState(!1),[m,g]=a.useState();return e.jsxs("div",{children:[e.jsx(A,{onClick:()=>u(!0),children:"Open Modal with select"}),e.jsx(f,{isOpen:s,onClose:()=>u(!1),className:"min-h-25",children:e.jsx(f.Body,{children:e.jsx("div",{className:"p-6",children:e.jsx(l,{label:"Choose your distribution",options:[{label:"Talos",value:"talos",leftIcon:e.jsx("img",{src:"./talos.svg",alt:"Talos Logo"})},{label:"K3S",value:"k3s",leftIcon:e.jsx("img",{src:"./k3s.svg",alt:"K3S Logo"})}],placeholder:"Select an option...",onChange:({target:{value:c}})=>{console.log("value",c),g(c)},value:m,theme:"kubefirst",name:"modal-select"})})})})]})}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...p.parameters?.docs?.source}}};const re=["Light","selectInModal"];export{h as Light,re as __namedExportsOrder,ne as default,p as selectInModal};
