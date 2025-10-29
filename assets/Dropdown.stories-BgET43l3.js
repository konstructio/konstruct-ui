import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./iframe-D0GbDv6F.js";import{B as C}from"./Button-DeX6v_l5.js";import{M as c}from"./Modal-Cax3YvXm.js";import{D as l}from"./Dropdown-BD2TPDLi.js";import{c as k}from"./createLucideIcon-DWiMvzQh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B2huQ943.js";import"./index-CJCZd66Q.js";import"./index-3nzyV2Zy.js";import"./index-BgfNZhqk.js";import"./index-CUHL5eQf.js";import"./index-CvkD-f_G.js";import"./Combination-CwYu8lsF.js";import"./x-Dll7QgMi.js";import"./index-Dctw71vb.js";import"./useToggle-O-iCvuQo.js";import"./Loading-ByNWJ3_u.js";import"./Typography-BnkYNUNR.js";/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],p=k("plus",j),F={title:"In Review/Dropdown",component:l},n={args:{options:[{label:"Talos",subLabel:"A modern OS for Kubernetes",value:"talos",leftIcon:e.jsx("img",{src:"./talos.svg",alt:"Talos Logo"})},{label:"K3S",subLabel:"Lightweight Kubernetes",value:"k3s",leftIcon:e.jsx("img",{src:"./k3s.svg",alt:"K3S Logo"})}],placeholder:"Select an option...",required:!1,labelClassName:"",isLoading:!1,name:"dropdown"},render:function(t){const[s,i]=o.useState(),[d,r]=o.useState(),[m,v]=o.useState(),[g,b]=o.useState(),[w,x]=o.useState(),[f,S]=o.useState();return e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"max-w-[350px] flex flex-col gap-6 p-6",children:[e.jsx(l,{label:"Searchable dropdown with Kubefirst theme",onChange:({target:{value:a}})=>i(a),value:s,searchable:!0,theme:"kubefirst",...t}),e.jsx(l,{label:"Searchable dropdown with Civo theme",onChange:({target:{value:a}})=>r(a),value:d,searchable:!0,showSearchIcon:!0,inputMode:"text",highlightSearch:!0,additionalOptions:[e.jsxs("button",{className:"text-blue-600 dark:text-aurora-500",children:[e.jsx(p,{})," New Team"]})],...t}),e.jsx(l,{label:"Dropdown with Civo theme",onChange:({target:{value:a}})=>v(a),value:m,searchable:!1,...t})]}),e.jsxs("div",{className:"max-w-[350px] flex flex-col gap-6 p-6 bg-slate-800 rounded-sm","data-theme":"dark",children:[e.jsx(l,{label:"Searchable dropdown with Kubefirst theme",onChange:({target:{value:a}})=>b(a),value:g,searchable:!0,theme:"kubefirst",...t}),e.jsx(l,{label:"Searchable dropdown with Civo theme",onChange:({target:{value:a}})=>x(a),value:w,searchable:!0,showSearchIcon:!0,inputMode:"text",highlightSearch:!0,additionalOptions:[e.jsxs("button",{className:"text-blue-600 dark:text-aurora-500",children:[e.jsx(p,{})," New Team"]})],...t}),e.jsx(l,{label:"Dropdown with Civo theme",onChange:({target:{value:a}})=>S(a),value:f,searchable:!1,...t})]})]})}},u={render:function(){const[t,s]=o.useState(!1),[i,d]=o.useState();return e.jsxs("div",{children:[e.jsx(C,{onClick:()=>s(!0),theme:"kubefirst",children:"Open Modal with Dropdown"}),e.jsx(c,{isOpen:t,onClose:()=>s(!1),theme:"kubefirst",className:"min-h-[100px]",children:e.jsx(c.Body,{children:e.jsx("div",{className:"p-6",children:e.jsx(l,{label:"Choose your distribution",options:[{label:"Talos",value:"talos",leftIcon:e.jsx("img",{src:"./talos.svg",alt:"Talos Logo"})},{label:"K3S",value:"k3s",leftIcon:e.jsx("img",{src:"./k3s.svg",alt:"K3S Logo"})}],placeholder:"Select an option...",onChange:({target:{value:r}})=>{console.log("value",r),d(r)},value:i,theme:"kubefirst",name:"modal-dropdown"})})})})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
