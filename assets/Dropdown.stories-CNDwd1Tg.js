import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./iframe-RSsA-um9.js";import{B as C}from"./Button-DI-40OQK.js";import{M as h}from"./Modal-c1rDHVAt.js";import{D as s}from"./Dropdown-CyNFChXw.js";import{c as k}from"./createLucideIcon-DEYGOoMW.js";import"./preload-helper-PPVm8Dsz.js";import"./index-K7wJstiN.js";import"./index-CJCZd66Q.js";import"./index-TvSTGJfr.js";import"./index-CY7Ep7Ez.js";import"./index-DvlFaMF3.js";import"./index-DJGDnqvi.js";import"./Combination-PS90H8yH.js";import"./x-BHI3e03Z.js";import"./index-BtOEbObm.js";import"./useToggle-D-Asn5do.js";import"./Loading-Cr605phe.js";import"./Typography-DabUm2rC.js";/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],p=k("plus",j),F={title:"In Review/Dropdown",component:s},n={args:{options:[{label:"Talos",subLabel:"A modern OS for Kubernetes",value:"talos",leftIcon:e.jsx("img",{src:"./talos.svg",alt:"Talos Logo"})},{label:"K3S",subLabel:"Lightweight Kubernetes",value:"k3s",leftIcon:e.jsx("img",{src:"./k3s.svg",alt:"K3S Logo"})}],placeholder:"Select an option...",required:!1,labelClassName:"",isLoading:!1,name:"dropdown",onSearchChange:i=>{console.log("searchTerm",i)}},render:function(t){const[l,c]=o.useState(),[d,r]=o.useState(),[m,g]=o.useState(),[v,b]=o.useState(),[w,x]=o.useState(),[f,S]=o.useState();return e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"max-w-[350px] flex flex-col gap-6 p-6",children:[e.jsx(s,{label:"Searchable dropdown with Kubefirst theme",onChange:({target:{value:a}})=>c(a),value:l,searchable:!0,theme:"kubefirst",...t}),e.jsx(s,{label:"Searchable dropdown with Civo theme",onChange:({target:{value:a}})=>r(a),value:d,searchable:!0,showSearchIcon:!0,inputMode:"text",highlightSearch:!0,additionalOptions:[e.jsxs("button",{className:"text-blue-600 dark:text-aurora-500",children:[e.jsx(p,{})," New Team"]})],...t}),e.jsx(s,{label:"Dropdown with Civo theme",onChange:({target:{value:a}})=>g(a),value:m,searchable:!1,...t})]}),e.jsxs("div",{className:"max-w-[350px] flex flex-col gap-6 p-6 bg-slate-800 rounded-sm","data-theme":"dark",children:[e.jsx(s,{label:"Searchable dropdown with Kubefirst theme",onChange:({target:{value:a}})=>b(a),value:v,searchable:!0,theme:"kubefirst",...t}),e.jsx(s,{label:"Searchable dropdown with Civo theme",onChange:({target:{value:a}})=>x(a),value:w,searchable:!0,showSearchIcon:!0,inputMode:"text",highlightSearch:!0,additionalOptions:[e.jsxs("button",{className:"text-blue-600 dark:text-aurora-500",children:[e.jsx(p,{})," New Team"]})],...t}),e.jsx(s,{label:"Dropdown with Civo theme",onChange:({target:{value:a}})=>S(a),value:f,searchable:!1,...t})]})]})}},u={render:function(){const[t,l]=o.useState(!1),[c,d]=o.useState();return e.jsxs("div",{children:[e.jsx(C,{onClick:()=>l(!0),theme:"kubefirst",children:"Open Modal with Dropdown"}),e.jsx(h,{isOpen:t,onClose:()=>l(!1),theme:"kubefirst",className:"min-h-[100px]",children:e.jsx(h.Body,{children:e.jsx("div",{className:"p-6",children:e.jsx(s,{label:"Choose your distribution",options:[{label:"Talos",value:"talos",leftIcon:e.jsx("img",{src:"./talos.svg",alt:"Talos Logo"})},{label:"K3S",value:"k3s",leftIcon:e.jsx("img",{src:"./k3s.svg",alt:"K3S Logo"})}],placeholder:"Select an option...",onChange:({target:{value:r}})=>{console.log("value",r),d(r)},value:c,theme:"kubefirst",name:"modal-dropdown"})})})})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
    name: 'dropdown',
    onSearchChange: (searchTerm: string) => {
      console.log('searchTerm', searchTerm);
    }
  },
  render: function DropdownStory(args) {
    const [value1, setValue1] = useState<string>();
    const [value2, setValue2] = useState<string>();
    const [value3, setValue3] = useState<string>();
    const [value4, setValue4] = useState<string>();
    const [value5, setValue5] = useState<string>();
    const [value6, setValue6] = useState<string>();
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
        </div>

        <div className="max-w-[350px] flex flex-col gap-6 p-6 bg-slate-800 rounded-sm" data-theme="dark">
          <DropdownComponent label="Searchable dropdown with Kubefirst theme" onChange={({
          target: {
            value
          }
        }) => setValue4(value)} value={value4} searchable={true} theme="kubefirst" {...args} />

          <DropdownComponent label="Searchable dropdown with Civo theme" onChange={({
          target: {
            value
          }
        }) => setValue5(value)} value={value5} searchable={true} showSearchIcon={true} inputMode="text" highlightSearch={true} additionalOptions={[<button className="text-blue-600 dark:text-aurora-500">
                <Plus /> New Team
              </button>]} {...args} />

          <DropdownComponent label="Dropdown with Civo theme" onChange={({
          target: {
            value
          }
        }) => setValue6(value)} value={value6} searchable={false} {...args} />
        </div>
      </div>;
  }
} satisfies Story`,...n.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...u.parameters?.docs?.source}}};const G=["Dropdown","DropdownInModal"];export{n as Dropdown,u as DropdownInModal,G as __namedExportsOrder,F as default};
