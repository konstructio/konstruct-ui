import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./jsx-runtime-De-1JGbp.js";import{a as n,n as r,r as i,t as a}from"./dist-CeciwoH6.js";import{n as o,t as s}from"./Input-DBSnsZ1F.js";var c,l,u,d,f=e((()=>{r(),c=a([`table-auto`,`w-full`,`border-collapse`,`border-spacing-0`,`rounded`]),l=a([`h-8`,`text-inherit`,`[&>td]:py-3`,`[&>td]:px-4`,`text-slate-700`,`hover:bg-zinc-100`,`hover:cursor-pointer`],{variants:{isSelected:{true:`bg-purple-50`,false:``}}}),u=a([`h-[18px]`,`bg-slate-100`,`[&>tr>th]:py-3`,`[&>tr>th]:px-4`,`[&>tr>th]:uppercase`,`text-left`]),d=a([])})),p,m,h=e((()=>{n(),f(),p=t(),m=({children:e,className:t,...n})=>(0,p.jsx)(`tbody`,{className:i(d({className:t})),...n,children:e}),m.__docgenInfo={description:``,methods:[],displayName:`Body`,composes:[`PropsWithChildren`,`VariantProps`]}})),g,_,v=e((()=>{o(),g=t(),_=({children:e,...t})=>(0,g.jsxs)(`div`,{className:`flex px-4 py-6 rounded-t`,children:[(0,g.jsx)(s,{className:`!w-1/3`,...t}),(0,g.jsx)(`div`,{className:`w-1/4 flex justify-end`,children:e})]}),_.__docgenInfo={description:``,methods:[],displayName:`Filter`,props:{placeholder:{required:!1,tsType:{name:`string`},description:`Placeholder text for the filter input`}},composes:[`PropsWithChildren`]}})),y,b,x=e((()=>{n(),f(),y=t(),b=({children:e,className:t,...n})=>(0,y.jsx)(`thead`,{className:i(u({className:t})),...n,children:e}),b.__docgenInfo={description:``,methods:[],displayName:`Head`,composes:[`PropsWithChildren`,`VariantProps`]}})),S,C,w=e((()=>{n(),f(),S=t(),C=({children:e,className:t,width:n,isSelected:r,onSelect:a,...o})=>(0,S.jsx)(`tr`,{style:{width:n},onClick:a,className:i(l({className:t,isSelected:r})),...o,children:e}),C.__docgenInfo={description:``,methods:[],displayName:`Row`,props:{width:{required:!1,tsType:{name:`string`},description:`Width of the row`},isSelected:{required:!1,tsType:{name:`boolean`},description:`Whether the row is selected`},onSelect:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Callback when row is selected`}},composes:[`PropsWithChildren`,`VariantProps`]}})),T=e((()=>{h(),v(),x(),w()})),E,D,O=e((()=>{n(),f(),T(),E=t(),D=({children:e,className:t,theme:n,...r})=>(0,E.jsx)(`table`,{className:i(c({className:t})),"data-theme":n,...r,children:e}),D.Body=m,D.Filter=_,D.Head=b,D.Row=C,D.__docgenInfo={description:`A composable table component with Head, Body, Row, and Filter sub-components.
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
}`,optional:!1,type:null}],returns:null}],displayName:`Table`}}));export{O as n,D as t};