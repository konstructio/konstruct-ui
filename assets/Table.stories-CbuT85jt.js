import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as d}from"./index-CnCxUiSm.js";import{a as m}from"./index-Bj7X0qp-.js";import{u as c}from"./theme.hook-gog7kSAh.js";import{I as j}from"./Input-DReMK8pG.js";import{T as l}from"./Typography-BhPkp4yD.js";import{r as w}from"./index-DUAV1Q2A.js";import"./index-ux_S9feM.js";const N=m(["table-auto","w-full","border-collapse","border-spacing-0","rounded","shadow-sm"],{variants:{theme:{kubefirst:"",colony:"",civo:""}},defaultVariants:{theme:"kubefirst"}}),C=m(["h-8","text-inherit","[&>td]:py-3","[&>td]:px-4","text-slate-700","hover:bg-zinc-100","hover:cursor-pointer"],{variants:{theme:{kubefirst:"",colony:"",civo:""},isSelected:{true:"bg-purple-50",false:""}}}),k=m(["h-[18px]","bg-slate-100","[&>tr>th]:py-3","[&>tr>th]:px-4","[&>tr>th]:uppercase","text-left"],{variants:{theme:{kubefirst:"",colony:"",civo:""}}}),S=m([],{variants:{theme:{kubefirst:"",colony:"",civo:""}}}),y=({children:a,className:s,theme:n,...t})=>{const{theme:r}=c();return e.jsx("thead",{className:d(k({className:s,theme:n??r})),...t,children:a})};y.__docgenInfo={description:"",methods:[],displayName:"Head",composes:["PropsWithChildren","VariantProps"]};const x=({children:a,className:s,theme:n,width:t,isSelected:r,onSelect:g,...T})=>{const{theme:v}=c();return e.jsx("tr",{style:{width:t},onClick:g,className:d(C({className:s,theme:n??v,isSelected:r})),...T,children:a})};x.__docgenInfo={description:"",methods:[],displayName:"Row",props:{width:{required:!1,tsType:{name:"string"},description:""},isSelected:{required:!1,tsType:{name:"boolean"},description:""},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}},composes:["PropsWithChildren","VariantProps"]};const b=({...a})=>e.jsx("div",{className:"flex px-4 py-6 rounded-t",children:e.jsx(j,{className:"!w-1/3",...a})});b.__docgenInfo={description:"",methods:[],displayName:"Filter",props:{placeholder:{required:!1,tsType:{name:"string"},description:""}},composes:["PropsWithChildren"]};const f=({children:a,className:s,theme:n,...t})=>{const{theme:r}=c();return e.jsx("tbody",{className:d(S({className:s,theme:n??r})),...t,children:a})};f.__docgenInfo={description:"",methods:[],displayName:"Body",composes:["PropsWithChildren","VariantProps"]};const o=({children:a,className:s,theme:n,...t})=>{const{theme:r}=c();return e.jsx("table",{className:d(N({className:s,theme:n??r})),...t,children:a})};o.Head=y;o.Row=x;o.Filter=b;o.Body=f;o.__docgenInfo={description:"",methods:[{name:"Head",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  theme,
  ...delegated
}`,optional:!1,type:null}],returns:null},{name:"Row",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  theme,
  width,
  isSelected,
  onSelect,
  ...delegated
}`,optional:!1,type:null}],returns:null},{name:"Filter",docblock:null,modifiers:["static"],params:[{name:"{ ...delegated }: FilterProps",optional:!1,type:{name:"FilterProps",alias:"FilterProps"}}],returns:null},{name:"Body",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  theme,
  ...delegated
}`,optional:!1,type:null}],returns:null}],displayName:"Table"};const D={title:"In Review/Table",component:o},F=[{name:"John Doe",age:30,email:"john.doe@example.com"},{name:"Jane Doe",age:25,email:"jane.doe@example.com"}],i={render:()=>{const[a,s]=w.useState(""),n=F.filter(t=>t.name.toLowerCase().includes(a.toLowerCase()));return e.jsxs("div",{className:"w-full kubefirst-table",children:[e.jsx(o.Filter,{placeholder:"Search",value:a,onChange:t=>s(t.target.value)}),e.jsxs(o,{className:"",children:[e.jsx(o.Head,{children:e.jsxs(o.Row,{width:"100px",children:[e.jsx("th",{className:"w-[100px]",children:e.jsx(l,{variant:"labelMedium",className:"text-slate-500",children:"Name"})}),e.jsx("th",{children:e.jsx(l,{variant:"labelMedium",className:"text-slate-500",children:"Age"})}),e.jsx("th",{children:e.jsx(l,{variant:"labelMedium",className:"text-slate-500",children:"Email"})})]})}),e.jsx(o.Body,{children:n.map(t=>e.jsxs(o.Row,{onSelect:()=>console.log("selected",t),children:[e.jsx("td",{children:e.jsx(l,{variant:"body2",children:t.name})}),e.jsx("td",{children:e.jsx(l,{variant:"body2",children:"30"})}),e.jsx("td",{children:e.jsx(l,{variant:"body2",children:"john.doe@example.com"})})]},t.name))})]})]})}};var p,h,u;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const [filter, setFilter] = useState('');
    const filteredData = data.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));
    return <div className="w-full kubefirst-table">
        <TableComponent.Filter placeholder="Search" value={filter} onChange={e => setFilter(e.target.value)} />

        <TableComponent className="">
          <TableComponent.Head>
            <TableComponent.Row width="100px">
              <th className="w-[100px]">
                <Typography variant="labelMedium" className="text-slate-500">
                  Name
                </Typography>
              </th>
              <th>
                <Typography variant="labelMedium" className="text-slate-500">
                  Age
                </Typography>
              </th>
              <th>
                <Typography variant="labelMedium" className="text-slate-500">
                  Email
                </Typography>
              </th>
            </TableComponent.Row>
          </TableComponent.Head>
          <TableComponent.Body>
            {filteredData.map(item => <TableComponent.Row key={item.name} onSelect={() => console.log('selected', item)}>
                <td>
                  <Typography variant="body2">{item.name}</Typography>
                </td>
                <td>
                  <Typography variant="body2">30</Typography>
                </td>
                <td>
                  <Typography variant="body2">john.doe@example.com</Typography>
                </td>
              </TableComponent.Row>)}
          </TableComponent.Body>
        </TableComponent>
      </div>;
  }
} satisfies Story`,...(u=(h=i.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};const E=["Table"];export{i as Table,E as __namedExportsOrder,D as default};
