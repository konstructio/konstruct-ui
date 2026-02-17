import{j as e,r as a}from"./iframe-RFUXcFU1.js";import{B as A}from"./Button-CI2FwOyy.js";import{M as f}from"./Modal-CfNmbGJG.js";import{S as s,g as b,D as P}from"./pokemon.repository-CIwk2qVq.js";import{P as C}from"./plus-Bmn1y8iM.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DHc_NMzY.js";import"./index-CFloAkMw.js";import"./index-BIgQ6y5l.js";import"./index-BGK4KL-m.js";import"./index-liLHGAx1.js";import"./index-1q7I8vAB.js";import"./Combination-DGMYMVtd.js";import"./x-BmSvVOY4.js";import"./index-hF9rmkUV.js";import"./useToggle-DpAoNMMY.js";import"./Loader-SkDEt_Hi.js";import"./Typography-CVd2-NB0.js";import"./debounce-DdzKvR2M.js";import"./isObject-DcT2bIqL.js";import"./Loading-zzv5H3lb.js";import"./createLucideIcon-DxjmVpWu.js";import"./chevron-up-CeBY7FM5.js";const ne={title:"In Review/Select/Light",component:s},h={args:{options:[{label:"Talos",subLabel:"A modern OS for Kubernetes",value:"talos",leftIcon:e.jsx("img",{src:"./talos.svg",alt:"Talos Logo"})},{label:"K3S",subLabel:"Lightweight Kubernetes",value:"k3s",leftIcon:e.jsx("img",{src:"./k3s.svg",alt:"K3S Logo"})}],required:!1,labelClassName:"",isLoading:!1,name:"select"},render:function(l){const[u,m]=a.useState("talos"),[g,c]=a.useState("talos"),[w,I]=a.useState(),[O,L]=a.useState(),[M,j]=a.useState(),[k,V]=a.useState(),[y,N]=a.useState(),[T,K]=a.useState(),[d,E]=a.useState([]);return a.useEffect(()=>{(async()=>{const o=await b({page:1,pageSize:P});E(o.results.map(({id:r,name:n})=>({value:r.toString(),label:`${n.charAt(0).toLocaleUpperCase()+n.slice(1)}`})))})()},[]),e.jsx("div",{className:"flex flex-col gap-6",children:e.jsxs("div",{className:"max-w-87.5 flex flex-col gap-6",children:[e.jsx(s,{label:"Searchable select with Kubefirst theme",onChange:({target:{value:t}})=>m(t),value:u,searchable:!0,theme:"kubefirst",...l}),e.jsx(s,{label:"Searchable select with Civo theme",onChange:({target:{value:t}})=>c(t),value:g,searchable:!0,inputMode:"text",highlightSearch:!0,...l}),e.jsx(s,{label:"Select with Civo theme",onChange:({target:{value:t}})=>I(t),value:w,searchable:!1,...l}),e.jsx(s,{label:"Select with no options text",searchable:!1,noOptionsText:"No cloud account exists",...l,options:[],additionalOptions:[e.jsxs("button",{children:[e.jsx(C,{})," New Cloud Account"]})]}),e.jsx(s,{...l,label:"Select infinity scroll without search",onChange:({target:{value:t}})=>L(t),value:O,searchable:!1,isInfiniteScrollEnabled:!0,onFetchMoreOptions:async({page:t,pageSize:o,termOfSearch:r})=>{const{results:n,totalItemsCount:S}=await b({page:t,pageSize:o,termOfSearch:r});return{data:n.map(({id:v,name:i})=>({value:v.toString(),label:`${i.charAt(0).toLocaleUpperCase()+i.slice(1)}`})),hasMore:t<=Math.ceil(S/o)}},options:d}),e.jsx(s,{...l,label:"Select infinity scroll with search",onChange:({target:{value:t}})=>j(t),value:M,searchable:!0,isInfiniteScrollEnabled:!0,highlightSearch:!0,onFetchMoreOptions:async({page:t,pageSize:o,termOfSearch:r})=>{const{results:n,totalItemsCount:S}=await b({page:t,pageSize:o,termOfSearch:r});return{data:n.map(({id:v,name:i})=>({value:v.toString(),label:`${i.charAt(0).toLocaleUpperCase()+i.slice(1)}`})),hasMore:t<=Math.ceil(S/o)}},options:d}),e.jsx(s,{label:"Searchable select with Kubefirst theme",onChange:({target:{value:t}})=>V(t),value:k,searchable:!0,theme:"kubefirst",...l}),e.jsx(s,{label:"Searchable select with Civo theme",onChange:({target:{value:t}})=>N(t),value:y,searchable:!0,showSearchIcon:!0,inputMode:"text",highlightSearch:!0,additionalOptions:[e.jsxs("button",{children:[e.jsx(C,{})," New Team"]})],...l}),e.jsx(s,{...l,label:"Select with no options text",onChange:({target:{value:t}})=>K(t),value:T,searchable:!1,noOptionsText:"No options",options:[]})]})})}},p={render:function(){const[l,u]=a.useState(!1),[m,g]=a.useState();return e.jsxs("div",{children:[e.jsx(A,{onClick:()=>u(!0),children:"Open Modal with select"}),e.jsx(f,{isOpen:l,onClose:()=>u(!1),className:"min-h-25",children:e.jsx(f.Body,{children:e.jsx("div",{className:"p-6",children:e.jsx(s,{label:"Choose your distribution",options:[{label:"Talos",value:"talos",leftIcon:e.jsx("img",{src:"./talos.svg",alt:"Talos Logo"})},{label:"K3S",value:"k3s",leftIcon:e.jsx("img",{src:"./k3s.svg",alt:"K3S Logo"})}],placeholder:"Select an option...",onChange:({target:{value:c}})=>{console.log("value",c),g(c)},value:m,theme:"kubefirst",name:"modal-select"})})})})]})}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
