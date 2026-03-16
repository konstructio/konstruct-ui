import{j as n,r as j}from"./iframe-DLrn8Gk9.js";import{c as h}from"./compiler-runtime-DxXHijtq.js";import{a as b,c as f}from"./index-CwGTy2we.js";import{I as N}from"./Input-D9j3-C_C.js";import{T as p}from"./Typography-CHpAwWZY.js";import{B as v}from"./Button-CIavAXKE.js";import"./preload-helper-PPVm8Dsz.js";import"./Warning-dqZmWUD1.js";import"./index-CE1qPSkB.js";import"./index-y1nNICkM.js";import"./index-CPvO_3XD.js";const C=b(["table-auto","w-full","border-collapse","border-spacing-0","rounded"]),R=b(["h-8","text-inherit","[&>td]:py-3","[&>td]:px-4","text-slate-700","hover:bg-zinc-100","hover:cursor-pointer"],{variants:{isSelected:{true:"bg-purple-50",false:""}}}),S=b(["h-[18px]","bg-slate-100","[&>tr>th]:py-3","[&>tr>th]:px-4","[&>tr>th]:uppercase","text-left"]),k=b([]),x=r=>{const e=h.c(10);let a,l,t;e[0]!==r?({children:a,className:l,...t}=r,e[0]=r,e[1]=a,e[2]=l,e[3]=t):(a=e[1],l=e[2],t=e[3]);let s;e[4]!==l?(s=f(k({className:l})),e[4]=l,e[5]=s):s=e[5];let o;return e[6]!==a||e[7]!==t||e[8]!==s?(o=n.jsx("tbody",{className:s,...t,children:a}),e[6]=a,e[7]=t,e[8]=s,e[9]=o):o=e[9],o};x.__docgenInfo={description:"",methods:[],displayName:"Body",composes:["PropsWithChildren","VariantProps"]};const T=r=>{const e=h.c(10);let a,l;e[0]!==r?({children:a,...l}=r,e[0]=r,e[1]=a,e[2]=l):(a=e[1],l=e[2]);let t;e[3]!==l?(t=n.jsx(N,{className:"!w-1/3",...l}),e[3]=l,e[4]=t):t=e[4];let s;e[5]!==a?(s=n.jsx("div",{className:"w-1/4 flex justify-end",children:a}),e[5]=a,e[6]=s):s=e[6];let o;return e[7]!==t||e[8]!==s?(o=n.jsxs("div",{className:"flex px-4 py-6 rounded-t",children:[t,s]}),e[7]=t,e[8]=s,e[9]=o):o=e[9],o};T.__docgenInfo={description:"",methods:[],displayName:"Filter",props:{placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text for the filter input"}},composes:["PropsWithChildren"]};const g=r=>{const e=h.c(10);let a,l,t;e[0]!==r?({children:a,className:l,...t}=r,e[0]=r,e[1]=a,e[2]=l,e[3]=t):(a=e[1],l=e[2],t=e[3]);let s;e[4]!==l?(s=f(S({className:l})),e[4]=l,e[5]=s):s=e[5];let o;return e[6]!==a||e[7]!==t||e[8]!==s?(o=n.jsx("thead",{className:s,...t,children:a}),e[6]=a,e[7]=t,e[8]=s,e[9]=o):o=e[9],o};g.__docgenInfo={description:"",methods:[],displayName:"Head",composes:["PropsWithChildren","VariantProps"]};const w=r=>{const e=h.c(18);let a,l,t,s,o,d;e[0]!==r?({children:a,className:l,width:d,isSelected:s,onSelect:o,...t}=r,e[0]=r,e[1]=a,e[2]=l,e[3]=t,e[4]=s,e[5]=o,e[6]=d):(a=e[1],l=e[2],t=e[3],s=e[4],o=e[5],d=e[6]);let c;e[7]!==d?(c={width:d},e[7]=d,e[8]=c):c=e[8];let m;e[9]!==l||e[10]!==s?(m=f(R({className:l,isSelected:s})),e[9]=l,e[10]=s,e[11]=m):m=e[11];let u;return e[12]!==a||e[13]!==t||e[14]!==o||e[15]!==c||e[16]!==m?(u=n.jsx("tr",{style:c,onClick:o,className:m,...t,children:a}),e[12]=a,e[13]=t,e[14]=o,e[15]=c,e[16]=m,e[17]=u):u=e[17],u};w.__docgenInfo={description:"",methods:[],displayName:"Row",props:{width:{required:!1,tsType:{name:"string"},description:"Width of the row"},isSelected:{required:!1,tsType:{name:"boolean"},description:"Whether the row is selected"},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when row is selected"}},composes:["PropsWithChildren","VariantProps"]};const i=r=>{const e=h.c(12);let a,l,t,s;e[0]!==r?({children:a,className:l,theme:s,...t}=r,e[0]=r,e[1]=a,e[2]=l,e[3]=t,e[4]=s):(a=e[1],l=e[2],t=e[3],s=e[4]);let o;e[5]!==l?(o=f(C({className:l})),e[5]=l,e[6]=o):o=e[6];let d;return e[7]!==a||e[8]!==t||e[9]!==o||e[10]!==s?(d=n.jsx("table",{className:o,"data-theme":s,...t,children:a}),e[7]=a,e[8]=t,e[9]=o,e[10]=s,e[11]=d):d=e[11],d};i.Body=x;i.Filter=T;i.Head=g;i.Row=w;i.__docgenInfo={description:`A composable table component with Head, Body, Row, and Filter sub-components.
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
}`,optional:!1,type:null}],returns:null}],displayName:"Table"};const D={title:"In Review/Table",component:i},B=[{name:"John Doe",age:30,email:"john.doe@example.com"},{name:"Jane Doe",age:25,email:"jane.doe@example.com"}],y={render:function(){const[e,a]=j.useState(""),l=B.filter(t=>t.name.toLowerCase().includes(e.toLowerCase()));return n.jsxs("div",{className:"w-full kubefirst-table",children:[n.jsx(i.Filter,{placeholder:"Search",value:e,onChange:t=>a(t.target.value),children:n.jsx(v,{variant:"primary",children:"Add cloud account"})}),n.jsxs(i,{className:"",children:[n.jsx(i.Head,{children:n.jsxs(i.Row,{width:"100px",children:[n.jsx("th",{className:"w-[100px]",children:n.jsx(p,{variant:"labelMedium",className:"text-slate-500",children:"Name"})}),n.jsx("th",{children:n.jsx(p,{variant:"labelMedium",className:"text-slate-500",children:"Age"})}),n.jsx("th",{children:n.jsx(p,{variant:"labelMedium",className:"text-slate-500",children:"Email"})})]})}),n.jsx(i.Body,{children:l.map(t=>n.jsxs(i.Row,{children:[n.jsx("td",{children:n.jsx(p,{variant:"body2",children:t.name})}),n.jsx("td",{children:n.jsx(p,{variant:"body2",children:"30"})}),n.jsx("td",{children:n.jsx(p,{variant:"body2",children:"john.doe@example.com"})})]},t.name))})]})]})}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...y.parameters?.docs?.source}}};const q=["Table"];export{y as Table,q as __namedExportsOrder,D as default};
