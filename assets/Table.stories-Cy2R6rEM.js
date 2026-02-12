import{j as e,r as b}from"./iframe-CrqmAXTA.js";import{a as d,c}from"./index-B-7A89sm.js";import{I as x}from"./Input-AtgvYN56.js";import{T as l}from"./Typography-CSTWAyVB.js";import{B as f}from"./Button-D7geNf_l.js";import"./preload-helper-PPVm8Dsz.js";import"./Warning-Cg0C8SdD.js";import"./index-DoZvAR3P.js";import"./index-0erROcmX.js";import"./index-dDb3DRV8.js";const T=d(["table-auto","w-full","border-collapse","border-spacing-0","rounded"]),g=d(["h-8","text-inherit","[&>td]:py-3","[&>td]:px-4","text-slate-700","hover:bg-zinc-100","hover:cursor-pointer"],{variants:{isSelected:{true:"bg-purple-50",false:""}}}),w=d(["h-[18px]","bg-slate-100","[&>tr>th]:py-3","[&>tr>th]:px-4","[&>tr>th]:uppercase","text-left"]),j=d([]),p=({children:o,className:a,...n})=>e.jsx("tbody",{className:c(j({className:a})),...n,children:o});p.__docgenInfo={description:"",methods:[],displayName:"Body",composes:["PropsWithChildren","VariantProps"]};const m=({children:o,...a})=>e.jsxs("div",{className:"flex px-4 py-6 rounded-t",children:[e.jsx(x,{className:"!w-1/3",...a}),e.jsx("div",{className:"w-1/4 flex justify-end",children:o})]});m.__docgenInfo={description:"",methods:[],displayName:"Filter",props:{placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text for the filter input"}},composes:["PropsWithChildren"]};const h=({children:o,className:a,...n})=>e.jsx("thead",{className:c(w({className:a})),...n,children:o});h.__docgenInfo={description:"",methods:[],displayName:"Head",composes:["PropsWithChildren","VariantProps"]};const u=({children:o,className:a,width:n,isSelected:r,onSelect:s,...y})=>e.jsx("tr",{style:{width:n},onClick:s,className:c(g({className:a,isSelected:r})),...y,children:o});u.__docgenInfo={description:"",methods:[],displayName:"Row",props:{width:{required:!1,tsType:{name:"string"},description:"Width of the row"},isSelected:{required:!1,tsType:{name:"boolean"},description:"Whether the row is selected"},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when row is selected"}},composes:["PropsWithChildren","VariantProps"]};const t=({children:o,className:a,theme:n,...r})=>e.jsx("table",{className:c(T({className:a})),"data-theme":n,...r,children:o});t.Body=p;t.Filter=m;t.Head=h;t.Row=u;t.__docgenInfo={description:`A composable table component with Head, Body, Row, and Filter sub-components.
For large datasets, consider using VirtualizedTable instead.

@example
\`\`\`tsx
<Table>
  <Table.Filter placeholder="Search..." />
  <Table.Head>
    <Table.Row>
      <th>Name</th>
      <th>Email</th>
      <th>Role</th>
    </Table.Row>
  </Table.Head>
  <Table.Body>
    {users.map((user) => (
      <Table.Row key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.role}</td>
      </Table.Row>
    ))}
  </Table.Body>
</Table>
\`\`\`

@see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-table--docs Storybook}`,methods:[{name:"Body",docblock:null,modifiers:["static"],params:[{name:"{ children, className, ...delegated }",optional:!1,type:null}],returns:null},{name:"Filter",docblock:null,modifiers:["static"],params:[{name:"{ children, ...delegated }",optional:!1,type:null}],returns:null},{name:"Head",docblock:null,modifiers:["static"],params:[{name:"{ children, className, ...delegated }",optional:!1,type:null}],returns:null},{name:"Row",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  width,
  isSelected,
  onSelect,
  ...delegated
}`,optional:!1,type:null}],returns:null}],displayName:"Table"};const P={title:"In Review/Table",component:t},v=[{name:"John Doe",age:30,email:"john.doe@example.com"},{name:"Jane Doe",age:25,email:"jane.doe@example.com"}],i={render:function(){const[a,n]=b.useState(""),r=v.filter(s=>s.name.toLowerCase().includes(a.toLowerCase()));return e.jsxs("div",{className:"w-full kubefirst-table",children:[e.jsx(t.Filter,{placeholder:"Search",value:a,onChange:s=>n(s.target.value),children:e.jsx(f,{variant:"primary",children:"Add cloud account"})}),e.jsxs(t,{className:"",children:[e.jsx(t.Head,{children:e.jsxs(t.Row,{width:"100px",children:[e.jsx("th",{className:"w-[100px]",children:e.jsx(l,{variant:"labelMedium",className:"text-slate-500",children:"Name"})}),e.jsx("th",{children:e.jsx(l,{variant:"labelMedium",className:"text-slate-500",children:"Age"})}),e.jsx("th",{children:e.jsx(l,{variant:"labelMedium",className:"text-slate-500",children:"Email"})})]})}),e.jsx(t.Body,{children:r.map(s=>e.jsxs(t.Row,{children:[e.jsx("td",{children:e.jsx(l,{variant:"body2",children:s.name})}),e.jsx("td",{children:e.jsx(l,{variant:"body2",children:"30"})}),e.jsx("td",{children:e.jsx(l,{variant:"body2",children:"john.doe@example.com"})})]},s.name))})]})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function TableStory() {
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
} satisfies Story`,...i.parameters?.docs?.source}}};const V=["Table"];export{i as Table,V as __namedExportsOrder,P as default};
