import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as i,a as d}from"./index-C5MVsT28.js";import{I as g}from"./Input-vEf1DRJ1.js";import{T as l}from"./Typography-CFiEocFm.js";import{r as T}from"./index-CDlOlYQx.js";import{B as j}from"./Button-jk7H83-s.js";import"./index-_3p-ol44.js";import"./index-8pt59J0f.js";const v=i(["table-auto","w-full","border-collapse","border-spacing-0","rounded","shadow-sm"]),w=i(["h-8","text-inherit","[&>td]:py-3","[&>td]:px-4","text-slate-700","hover:bg-zinc-100","hover:cursor-pointer"],{variants:{isSelected:{true:"bg-purple-50",false:""}}}),N=i(["h-[18px]","bg-slate-100","[&>tr>th]:py-3","[&>tr>th]:px-4","[&>tr>th]:uppercase","text-left"]),C=i([]),h=({children:a,className:s,...r})=>e.jsx("tbody",{className:d(C({className:s})),...r,children:a});h.__docgenInfo={description:"",methods:[],displayName:"Body",composes:["PropsWithChildren","VariantProps"]};const u=({children:a,...s})=>e.jsxs("div",{className:"flex px-4 py-6 rounded-t",children:[e.jsx(g,{className:"!w-1/3",...s}),e.jsx("div",{className:"w-1/4 flex justify-end",children:a})]});u.__docgenInfo={description:"",methods:[],displayName:"Filter",props:{placeholder:{required:!1,tsType:{name:"string"},description:""}},composes:["PropsWithChildren"]};const y=({children:a,className:s,...r})=>e.jsx("thead",{className:d(N({className:s})),...r,children:a});y.__docgenInfo={description:"",methods:[],displayName:"Head",composes:["PropsWithChildren","VariantProps"]};const x=({children:a,className:s,width:r,isSelected:o,onSelect:b,...f})=>e.jsx("tr",{style:{width:r},onClick:b,className:d(w({className:s,isSelected:o})),...f,children:a});x.__docgenInfo={description:"",methods:[],displayName:"Row",props:{width:{required:!1,tsType:{name:"string"},description:""},isSelected:{required:!1,tsType:{name:"boolean"},description:""},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}},composes:["PropsWithChildren","VariantProps"]};const t=({children:a,className:s,theme:r,...o})=>e.jsx("table",{className:d(v({className:s})),"data-theme":r,...o,children:a});t.Body=h;t.Filter=u;t.Head=y;t.Row=x;t.__docgenInfo={description:"",methods:[{name:"Body",docblock:null,modifiers:["static"],params:[{name:"{ children, className, ...delegated }",optional:!1,type:null}],returns:null},{name:"Filter",docblock:null,modifiers:["static"],params:[{name:"{ children, ...delegated }",optional:!1,type:null}],returns:null},{name:"Head",docblock:null,modifiers:["static"],params:[{name:"{ children, className, ...delegated }",optional:!1,type:null}],returns:null},{name:"Row",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  width,
  isSelected,
  onSelect,
  ...delegated
}`,optional:!1,type:null}],returns:null}],displayName:"Table"};const V={title:"In Review/Table",component:t},R=[{name:"John Doe",age:30,email:"john.doe@example.com"},{name:"Jane Doe",age:25,email:"jane.doe@example.com"}],n={render:()=>{const[a,s]=T.useState(""),r=R.filter(o=>o.name.toLowerCase().includes(a.toLowerCase()));return e.jsxs("div",{className:"w-full kubefirst-table",children:[e.jsx(t.Filter,{placeholder:"Search",value:a,onChange:o=>s(o.target.value),children:e.jsx(j,{variant:"primary",children:"Add cloud account"})}),e.jsxs(t,{className:"",children:[e.jsx(t.Head,{children:e.jsxs(t.Row,{width:"100px",children:[e.jsx("th",{className:"w-[100px]",children:e.jsx(l,{variant:"labelMedium",className:"text-slate-500",children:"Name"})}),e.jsx("th",{children:e.jsx(l,{variant:"labelMedium",className:"text-slate-500",children:"Age"})}),e.jsx("th",{children:e.jsx(l,{variant:"labelMedium",className:"text-slate-500",children:"Email"})})]})}),e.jsx(t.Body,{children:r.map(o=>e.jsxs(t.Row,{children:[e.jsx("td",{children:e.jsx(l,{variant:"body2",children:o.name})}),e.jsx("td",{children:e.jsx(l,{variant:"body2",children:"30"})}),e.jsx("td",{children:e.jsx(l,{variant:"body2",children:"john.doe@example.com"})})]},o.name))})]})]})}};var c,p,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const [filter, setFilter] = useState('');
    const filteredData = data.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));
    return <div className="w-full kubefirst-table">
        <TableComponent.Filter placeholder="Search" value={filter} onChange={e => setFilter(e.target.value)}>
          <Button variant="primary">Add cloud account</Button>
        </TableComponent.Filter>

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
            {filteredData.map(item => <TableComponent.Row key={item.name}>
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
} satisfies Story`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const M=["Table"];export{n as Table,M as __namedExportsOrder,V as default};
