import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,t as i}from"./Input-BG3aeJZF.js";import{i as a,t as o}from"./utils-0TJZseot.js";import{n as s,t as c}from"./dist-qtULYLvt.js";import{n as l,t as u}from"./Typography-Dr4qxqZo.js";import{n as d,t as f}from"./Button-DBH2wbJQ.js";var p,m,h,g;function _(){return(_=e((()=>{s(),p=c([`table-auto`,`w-full`,`border-collapse`,`border-spacing-0`,`rounded`]),m=c([`h-8`,`text-inherit`,`[&>td]:py-3`,`[&>td]:px-4`,`text-slate-700`,`hover:bg-zinc-100`,`hover:cursor-pointer`],{variants:{isSelected:{true:`bg-purple-50`,false:``}}}),h=c([`h-4.5`,`bg-slate-100`,`[&>tr>th]:py-3`,`[&>tr>th]:px-4`,`[&>tr>th]:uppercase`,`text-left`]),g=c([])})))()}var v,y;function b(){return(b=e((()=>{a(),_(),v=n(),y=({children:e,className:t,...n})=>(0,v.jsx)(`tbody`,{className:o(g({className:t})),...n,children:e}),y.__docgenInfo={description:``,methods:[],displayName:`Body`,composes:[`PropsWithChildren`,`VariantProps`]}})))()}var x,S;function C(){return(C=e((()=>{r(),x=n(),S=({children:e,...t})=>(0,x.jsxs)(`div`,{className:`flex px-4 py-6 rounded-t`,children:[(0,x.jsx)(i,{className:`!w-1/3`,...t}),(0,x.jsx)(`div`,{className:`w-1/4 flex justify-end`,children:e})]}),S.__docgenInfo={description:``,methods:[],displayName:`Filter`,props:{placeholder:{required:!1,tsType:{name:`string`},description:`Placeholder text for the filter input`}},composes:[`PropsWithChildren`]}})))()}var w,T;function E(){return(E=e((()=>{a(),_(),w=n(),T=({children:e,className:t,...n})=>(0,w.jsx)(`thead`,{className:o(h({className:t})),...n,children:e}),T.__docgenInfo={description:``,methods:[],displayName:`Head`,composes:[`PropsWithChildren`,`VariantProps`]}})))()}var D,O;function k(){return(k=e((()=>{a(),_(),D=n(),O=({children:e,className:t,width:n,isSelected:r,onSelect:i,...a})=>(0,D.jsx)(`tr`,{style:{width:n},onClick:i,className:o(m({className:t,isSelected:r})),...a,children:e}),O.__docgenInfo={description:``,methods:[],displayName:`Row`,props:{width:{required:!1,tsType:{name:`string`},description:`Width of the row`},isSelected:{required:!1,tsType:{name:`boolean`},description:`Whether the row is selected`},onSelect:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Callback when row is selected`}},composes:[`PropsWithChildren`,`VariantProps`]}})))()}var A,j;function M(){return(M=e((()=>{a(),_(),b(),C(),E(),k(),A=n(),j=({children:e,className:t,theme:n,...r})=>(0,A.jsx)(`table`,{className:o(p({className:t})),"data-theme":n,...r,children:e}),j.Body=y,j.Filter=S,j.Head=T,j.Row=O,j.__docgenInfo={description:`A composable table component with Head, Body, Row, and Filter sub-components.
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

@see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-table--docs Storybook}`,methods:[{name:`Body`,docblock:null,modifiers:[`static`],params:[{name:`{ children, className, ...delegated }`,optional:!1,type:null}],returns:null},{name:`Filter`,docblock:null,modifiers:[`static`],params:[{name:`{ children, ...delegated }`,optional:!1,type:null}],returns:null},{name:`Head`,docblock:null,modifiers:[`static`],params:[{name:`{ children, className, ...delegated }`,optional:!1,type:null}],returns:null},{name:`Row`,docblock:null,modifiers:[`static`],params:[{name:`{
  children,
  className,
  width,
  isSelected,
  onSelect,
  ...delegated
}`,optional:!1,type:null}],returns:null}],displayName:`Table`}})))()}var N,P,F,I,L,R;function z(){return(z=e((()=>{M(),l(),N=t(),d(),P=n(),F={title:`In Review/Table`,component:j},I=[{name:`John Doe`,age:30,email:`john.doe@example.com`},{name:`Jane Doe`,age:25,email:`jane.doe@example.com`}],L={render:function(){let[e,t]=(0,N.useState)(``),n=I.filter(t=>t.name.toLowerCase().includes(e.toLowerCase()));return(0,P.jsxs)(`div`,{className:`w-full kubefirst-table`,children:[(0,P.jsx)(j.Filter,{placeholder:`Search`,value:e,onChange:e=>t(e.target.value),children:(0,P.jsx)(f,{variant:`primary`,children:`Add cloud account`})}),(0,P.jsxs)(j,{className:``,children:[(0,P.jsx)(j.Head,{children:(0,P.jsxs)(j.Row,{width:`100px`,children:[(0,P.jsx)(`th`,{className:`w-25`,children:(0,P.jsx)(u,{variant:`labelMedium`,className:`text-slate-500`,children:`Name`})}),(0,P.jsx)(`th`,{children:(0,P.jsx)(u,{variant:`labelMedium`,className:`text-slate-500`,children:`Age`})}),(0,P.jsx)(`th`,{children:(0,P.jsx)(u,{variant:`labelMedium`,className:`text-slate-500`,children:`Email`})})]})}),(0,P.jsx)(j.Body,{children:n.map(e=>(0,P.jsxs)(j.Row,{children:[(0,P.jsx)(`td`,{children:(0,P.jsx)(u,{variant:`body2`,children:e.name})}),(0,P.jsx)(`td`,{children:(0,P.jsx)(u,{variant:`body2`,children:`30`})}),(0,P.jsx)(`td`,{children:(0,P.jsx)(u,{variant:`body2`,children:`john.doe@example.com`})})]},e.name))})]})]})}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
              <th className="w-25">
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
} satisfies Story`,...L.parameters?.docs?.source}}},R=[`Table`]})))()}z();export{L as Table,R as __namedExportsOrder,F as default};