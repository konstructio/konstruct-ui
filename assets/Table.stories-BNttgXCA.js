import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{o as n,t as r}from"./iframe-Y1_HDYN6.js";import{n as i,t as a}from"./Typography-BSEqZTC0.js";import{n as o,t as s}from"./Button-6ZrpsF73.js";import{n as c,t as l}from"./Table-i3lohPKc.js";var u,d,f,p,m,h;e((()=>{c(),i(),u=t(n(),1),o(),d=r(),f={title:`In Review/Table`,component:l},p=[{name:`John Doe`,age:30,email:`john.doe@example.com`},{name:`Jane Doe`,age:25,email:`jane.doe@example.com`}],m={render:function(){let[e,t]=(0,u.useState)(``),n=p.filter(t=>t.name.toLowerCase().includes(e.toLowerCase()));return(0,d.jsxs)(`div`,{className:`w-full kubefirst-table`,children:[(0,d.jsx)(l.Filter,{placeholder:`Search`,value:e,onChange:e=>t(e.target.value),children:(0,d.jsx)(s,{variant:`primary`,children:`Add cloud account`})}),(0,d.jsxs)(l,{className:``,children:[(0,d.jsx)(l.Head,{children:(0,d.jsxs)(l.Row,{width:`100px`,children:[(0,d.jsx)(`th`,{className:`w-[100px]`,children:(0,d.jsx)(a,{variant:`labelMedium`,className:`text-slate-500`,children:`Name`})}),(0,d.jsx)(`th`,{children:(0,d.jsx)(a,{variant:`labelMedium`,className:`text-slate-500`,children:`Age`})}),(0,d.jsx)(`th`,{children:(0,d.jsx)(a,{variant:`labelMedium`,className:`text-slate-500`,children:`Email`})})]})}),(0,d.jsx)(l.Body,{children:n.map(e=>(0,d.jsxs)(l.Row,{children:[(0,d.jsx)(`td`,{children:(0,d.jsx)(a,{variant:`body2`,children:e.name})}),(0,d.jsx)(`td`,{children:(0,d.jsx)(a,{variant:`body2`,children:`30`})}),(0,d.jsx)(`td`,{children:(0,d.jsx)(a,{variant:`body2`,children:`john.doe@example.com`})})]},e.name))})]})]})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...m.parameters?.docs?.source}}},h=[`Table`]}))();export{m as Table,h as __namedExportsOrder,f as default};