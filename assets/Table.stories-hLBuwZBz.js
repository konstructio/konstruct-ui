import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as d,a as c}from"./index-CJCZd66Q.js";import{I as x}from"./Input-7UMfZrX0.js";import{T as n}from"./Typography-DURHYab6.js";import{r as b}from"./iframe-CDT3oZmd.js";import{B as f}from"./Button-BEqNGKkD.js";import"./index-BCOXMc4I.js";import"./preload-helper-PPVm8Dsz.js";import"./index-YvOyFk_h.js";const g=d(["table-auto","w-full","border-collapse","border-spacing-0","rounded"]),T=d(["h-8","text-inherit","[&>td]:py-3","[&>td]:px-4","text-slate-700","hover:bg-zinc-100","hover:cursor-pointer"],{variants:{isSelected:{true:"bg-purple-50",false:""}}}),j=d(["h-[18px]","bg-slate-100","[&>tr>th]:py-3","[&>tr>th]:px-4","[&>tr>th]:uppercase","text-left"]),v=d([]),p=({children:o,className:a,...s})=>e.jsx("tbody",{className:c(v({className:a})),...s,children:o});p.__docgenInfo={description:"",methods:[],displayName:"Body",composes:["PropsWithChildren","VariantProps"]};const m=({children:o,...a})=>e.jsxs("div",{className:"flex px-4 py-6 rounded-t",children:[e.jsx(x,{className:"!w-1/3",...a}),e.jsx("div",{className:"w-1/4 flex justify-end",children:o})]});m.__docgenInfo={description:"",methods:[],displayName:"Filter",props:{placeholder:{required:!1,tsType:{name:"string"},description:""}},composes:["PropsWithChildren"]};const h=({children:o,className:a,...s})=>e.jsx("thead",{className:c(j({className:a})),...s,children:o});h.__docgenInfo={description:"",methods:[],displayName:"Head",composes:["PropsWithChildren","VariantProps"]};const u=({children:o,className:a,width:s,isSelected:l,onSelect:r,...y})=>e.jsx("tr",{style:{width:s},onClick:r,className:c(T({className:a,isSelected:l})),...y,children:o});u.__docgenInfo={description:"",methods:[],displayName:"Row",props:{width:{required:!1,tsType:{name:"string"},description:""},isSelected:{required:!1,tsType:{name:"boolean"},description:""},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}},composes:["PropsWithChildren","VariantProps"]};const t=({children:o,className:a,theme:s,...l})=>e.jsx("table",{className:c(g({className:a})),"data-theme":s,...l,children:o});t.Body=p;t.Filter=m;t.Head=h;t.Row=u;t.__docgenInfo={description:"",methods:[{name:"Body",docblock:null,modifiers:["static"],params:[{name:"{ children, className, ...delegated }",optional:!1,type:null}],returns:null},{name:"Filter",docblock:null,modifiers:["static"],params:[{name:"{ children, ...delegated }",optional:!1,type:null}],returns:null},{name:"Head",docblock:null,modifiers:["static"],params:[{name:"{ children, className, ...delegated }",optional:!1,type:null}],returns:null},{name:"Row",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  width,
  isSelected,
  onSelect,
  ...delegated
}`,optional:!1,type:null}],returns:null}],displayName:"Table"};const H={title:"In Review/Table",component:t},N=[{name:"John Doe",age:30,email:"john.doe@example.com"},{name:"Jane Doe",age:25,email:"jane.doe@example.com"}],i={render:function(){const[a,s]=b.useState(""),l=N.filter(r=>r.name.toLowerCase().includes(a.toLowerCase()));return e.jsxs("div",{className:"w-full kubefirst-table",children:[e.jsx(t.Filter,{placeholder:"Search",value:a,onChange:r=>s(r.target.value),children:e.jsx(f,{variant:"primary",children:"Add cloud account"})}),e.jsxs(t,{className:"",children:[e.jsx(t.Head,{children:e.jsxs(t.Row,{width:"100px",children:[e.jsx("th",{className:"w-[100px]",children:e.jsx(n,{variant:"labelMedium",className:"text-slate-500",children:"Name"})}),e.jsx("th",{children:e.jsx(n,{variant:"labelMedium",className:"text-slate-500",children:"Age"})}),e.jsx("th",{children:e.jsx(n,{variant:"labelMedium",className:"text-slate-500",children:"Email"})})]})}),e.jsx(t.Body,{children:l.map(r=>e.jsxs(t.Row,{children:[e.jsx("td",{children:e.jsx(n,{variant:"body2",children:r.name})}),e.jsx("td",{children:e.jsx(n,{variant:"body2",children:"30"})}),e.jsx("td",{children:e.jsx(n,{variant:"body2",children:"john.doe@example.com"})})]},r.name))})]})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...i.parameters?.docs?.source}}};const P=["Table"];export{i as Table,P as __namedExportsOrder,H as default};
