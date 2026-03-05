import{r as s,j as e}from"./iframe-DFGxwtFi.js";import{V as l,D as g,Q as C,a as P,E as A}from"./VirtualizedTable-BMK95vnR.js";import{B as k}from"./Button-DcgrzgJi.js";import{T as o}from"./Typography-DpIZzhjb.js";import{g as p}from"./pokemon.repository-DPqGE3OS.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-Dk9OOj-Q.js";import"./index-CwGTy2we.js";import"./index-CcuKm8EH.js";import"./index-DSVbO4Nd.js";import"./index-C2scD4Uf.js";import"./index-BzLJMWKD.js";import"./index-D7rxaWYY.js";import"./chevron-right-CCo-ax2l.js";import"./debounce-8FbgOM0R.js";import"./isObject-CYr3HWaF.js";import"./Filter-DsiBteaq.js";import"./Badge-CzCMY4V4.js";import"./Loader-BP-1LtGP.js";import"./x-B2n8DMeX.js";import"./Checkbox-DcHVD2SW.js";import"./index-C4VgHwgy.js";import"./index-D3ipkmNH.js";import"./index-DkXV7EFN.js";import"./index-CfysTgji.js";import"./useToggle-CKjzvMxF.js";import"./check-BL8ZfIfT.js";import"./index-CM7janpZ.js";import"./TimePicker-BRssJoWO.js";import"./DatePicker-BgFJLGJM.js";import"./style-Or5ngKa8.js";import"./DateRangePicker-DBJQWWZU.js";import"./RadioGroup-DI6qa9Y6.js";import"./Radio-Jb9bmy4y.js";import"./Input-B-p_lZFz.js";import"./Warning-CoNc0Q_3.js";import"./proxy-DLlrn3Ot.js";import"./index-CES_YLHF.js";import"./index-DiWfPCL0.js";import"./index-YBkXnx_m.js";import"./index-D2ZKLX4e.js";import"./Loading-DcKH6YDr.js";import"./chevron-up-6VeVBBxs.js";const Ce={title:"In Review/VirtualizedTable/Dark",component:l},E=new P,I=[{header:"Id",accessorKey:"id",meta:{headerClassName:"whitespace-nowrap w-0"}},{header:"Name",accessorKey:"name",cell:a=>e.jsx(l.TruncateText,{...a,value:`${a.getValue().charAt(0).toUpperCase()}${a.getValue().slice(1)}`})},{header:"Type",accessorKey:"type",cell:a=>e.jsx(l.TruncateText,{...a,value:`${a.getValue().charAt(0).toUpperCase()}${a.getValue().slice(1)}`})},{header:"Height",accessorKey:"height"},{header:"Weight",accessorKey:"weight"},{header:"Ability",accessorKey:"ability",cell:a=>e.jsx(l.TruncateText,{...a,value:`${a.getValue().charAt(0).toUpperCase()}${a.getValue().slice(1)}`})},{id:"actions",enableSorting:!1,enableResizing:!1,cell:a=>e.jsx(l.Actions,{...a,actions:[{label:e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx(A,{className:"w-4 h-4"}),"First Action"]}),onClick:n=>{console.log(`Viewing details for ${JSON.stringify(n)}`)},className:"text-slate-800"},{label:"Second Action",onClick:n=>{console.log(`Viewing details for ${JSON.stringify(n)}`)}}]}),header:()=>e.jsx("span",{className:"sr-only",children:"Action Buttons"}),meta:{headerClassName:"w-[92px]",className:"flex justify-center"}}],T={showFilter:!0,showResetButton:!0,showPagination:!0,isLoading:!1,ariaLabel:"List of pokemons",pageSizes:[5,10,20,30,50],filters:[{key:"type",label:"Type",options:[{id:"grass",label:"Grass",variant:"success"},{id:"fire",label:"Fire",variant:"danger"},{id:"water",label:"Water",variant:"info"},{id:"bug",label:"Bug",variant:"warning"},{id:"normal",label:"Normal",variant:void 0}]},{type:"action",label:"Export",variant:"secondary",onClick:()=>{console.log("Export")}},{key:"created",type:"date",label:"Created"},{key:"time",type:"time",label:"Time",showTimePicker:!1,presets:[{label:"Last 15 mins",value:new Date(Date.now()-900*1e3)},{label:"Last 30 mins",value:new Date(Date.now()-1800*1e3)},{label:"Last 1 hour",value:new Date(Date.now()-3600*1e3)},{label:"Last 6 hours",value:new Date(Date.now()-360*60*1e3)}]}]},f={args:T,render:a=>{const n=s.useId(),[{data:c,totalItemsCount:y},m]=s.useState({data:[],totalItemsCount:0});s.useEffect(()=>{(async()=>{const i=await p({page:1,pageSize:g});m({data:i.results,totalItemsCount:i.totalItemsCount})})()},[]),s.useEffect(()=>(document.body.setAttribute("data-theme","dark"),document.body.classList.add("bg-metal-900"),()=>{document.body.removeAttribute("data-theme"),document.body.classList.remove("bg-metal-900")}),[]);const h=s.useCallback(async({page:u=1,pageSize:i=g,termOfSearch:b=void 0,type:t=void 0})=>{const r=await p({page:u,pageSize:i,termOfSearch:b,type:t});return await new Promise(d=>setTimeout(d,1e3)),{data:r.results,totalItemsCount:r.totalItemsCount}},[p]);return c.length===0?e.jsx("div",{children:"Loading..."}):e.jsx(C,{client:E,children:e.jsx(l,{...a,id:n,data:c,columns:I,showPagination:!0,fetchData:h,totalItems:y})})}},N=a=>a.map(n=>({...n,meta:{expandedRow:e.jsxs("div",{className:"flex flex-col gap-2 py-2",children:[e.jsxs(o,{variant:"body3",className:"text-metal-400",children:["Details for ",n.name]}),e.jsxs("div",{className:"flex gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(o,{variant:"body3",className:"font-medium text-metal-300",children:"Type"}),e.jsx(o,{variant:"body2",children:n.type})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(o,{variant:"body3",className:"font-medium text-metal-300",children:"Ability"}),e.jsx(o,{variant:"body2",children:n.ability})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(o,{variant:"body3",className:"font-medium text-metal-300",children:"Height / Weight"}),e.jsxs(o,{variant:"body2",children:[n.height," / ",n.weight]})]})]})]})}})),x={args:{...T,enableExpandedRow:!0,ariaLabel:"List of pokemons with expandable rows"},render:a=>{const n=s.useId(),[{data:c,totalItemsCount:y},m]=s.useState({data:[],totalItemsCount:0});s.useEffect(()=>{(async()=>{const i=await p({page:1,pageSize:g});m({data:N(i.results),totalItemsCount:i.totalItemsCount})})()},[]),s.useEffect(()=>(document.body.setAttribute("data-theme","dark"),document.body.classList.add("bg-metal-900"),()=>{document.body.removeAttribute("data-theme"),document.body.classList.remove("bg-metal-900")}),[]);const h=s.useCallback(async({page:u=1,pageSize:i=g,termOfSearch:b=void 0,type:t=void 0})=>{const r=await p({page:u,pageSize:i,termOfSearch:b,type:t});return await new Promise(d=>setTimeout(d,500)),{data:N(r.results),totalItemsCount:r.totalItemsCount}},[]);return c.length===0?e.jsx("div",{children:"Loading..."}):e.jsx(C,{client:E,children:e.jsx(l,{...a,enableHoverRow:!0,id:n,data:c,columns:I,showPagination:!0,fetchData:h,totalItems:y,enableExpandedRow:!0})})}},v="external-trigger-table",w={args:{...T,enableExpandedRow:!0,ariaLabel:"List of pokemons with external expand trigger"},render:a=>{const[{data:n,totalItemsCount:c},y]=s.useState({data:[],totalItemsCount:0}),[m,h]=s.useState({}),u=t=>{h(r=>{const d=!r[t];return d?l.Events.sendExpandRowEvent(v,t):l.Events.sendCollapseRowEvent(v,t),{...r,[t]:d}})};s.useEffect(()=>{(async()=>{const r=await p({page:1,pageSize:g});y({data:r.results,totalItemsCount:r.totalItemsCount})})()},[]),s.useEffect(()=>(document.body.setAttribute("data-theme","dark"),document.body.classList.add("bg-metal-900"),()=>{document.body.removeAttribute("data-theme"),document.body.classList.remove("bg-metal-900")}),[]);const i=s.useCallback(async({page:t=1,pageSize:r=g,termOfSearch:d=void 0,type:R=void 0})=>{const S=await p({page:t,pageSize:r,termOfSearch:d,type:R});return await new Promise(D=>setTimeout(D,500)),{data:S.results,totalItemsCount:S.totalItemsCount}},[]),b=[...I.filter(t=>t.id!=="actions"),{id:"select-action",enableSorting:!1,enableResizing:!1,cell:({row:t})=>e.jsx(k,{variant:m[t.id]?"primary":"secondary",appearance:"compact",onClick:()=>u(t.id),children:m[t.id]?"Remove":"Add"}),header:()=>e.jsx("span",{className:"sr-only",children:"Select"}),meta:{headerClassName:"w-[150px]",className:"flex justify-center h-12 items-center"}}];return n.length===0?e.jsx("div",{children:"Loading..."}):e.jsx(C,{client:E,children:e.jsx(l,{...a,enableHoverRow:!0,id:v,data:n,getRowId:t=>String(t.id),columns:b,showPagination:!0,fetchData:i,totalItems:c,enableExpandedRow:!0,keepExpandColumnVisible:m,renderExpandedRow:t=>e.jsxs("div",{className:"flex flex-col gap-2 py-2",children:[e.jsxs(o,{variant:"body3",className:"text-metal-400",children:["Configuration for ",t.name]}),e.jsxs("div",{className:"flex gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(o,{variant:"body3",className:"font-medium text-metal-300",children:"Type"}),e.jsx(o,{variant:"body2",children:t.type})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(o,{variant:"body3",className:"font-medium text-metal-300",children:"Ability"}),e.jsx(o,{variant:"body2",children:t.ability})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(o,{variant:"body3",className:"font-medium text-metal-300",children:"Height / Weight"}),e.jsxs(o,{variant:"body2",children:[t.height," /"," ",t.weight]})]})]})]})})})}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args,
  render: args => {
    const id = useId();
    const [{
      data,
      totalItemsCount
    }, setData] = useState<{
      data: Pokemon[];
      totalItemsCount: number;
    }>({
      data: [],
      totalItemsCount: 0
    });
    useEffect(() => {
      const init = async () => {
        const result = await getPokemons({
          page: 1,
          pageSize: DEFAULT_PAGE_SIZE
        });
        setData({
          data: result.results,
          totalItemsCount: result.totalItemsCount
        });
      };
      init();
    }, []);
    useEffect(() => {
      document.body.setAttribute('data-theme', 'dark');
      document.body.classList.add('bg-metal-900');
      return () => {
        document.body.removeAttribute('data-theme');
        document.body.classList.remove('bg-metal-900');
      };
    }, []);
    const getNewData = useCallback(async ({
      page = 1,
      pageSize = DEFAULT_PAGE_SIZE,
      termOfSearch = undefined,
      type = undefined
    }: PokemonResponse) => {
      const result = await getPokemons({
        page,
        pageSize,
        termOfSearch,
        type
      });
      await new Promise(resolve => setTimeout(resolve, 1000));
      return {
        data: result.results,
        totalItemsCount: result.totalItemsCount
      };
    }, [getPokemons]);
    if (data.length === 0) {
      return <div>Loading...</div>;
    }
    return <QueryClientProvider client={queryClient}>
        <VirtualizedTableComponent<Pokemon> {...args} id={id} data={data} columns={columns} showPagination={true} fetchData={getNewData} totalItems={totalItemsCount} />
      </QueryClientProvider>;
  }
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    ...args,
    enableExpandedRow: true,
    ariaLabel: 'List of pokemons with expandable rows'
  },
  render: storyArgs => {
    const id = useId();
    const [{
      data,
      totalItemsCount
    }, setData] = useState<{
      data: PokemonWithMeta[];
      totalItemsCount: number;
    }>({
      data: [],
      totalItemsCount: 0
    });
    useEffect(() => {
      const init = async () => {
        const result = await getPokemons({
          page: 1,
          pageSize: DEFAULT_PAGE_SIZE
        });
        setData({
          data: addExpandedContent(result.results),
          totalItemsCount: result.totalItemsCount
        });
      };
      init();
    }, []);
    useEffect(() => {
      document.body.setAttribute('data-theme', 'dark');
      document.body.classList.add('bg-metal-900');
      return () => {
        document.body.removeAttribute('data-theme');
        document.body.classList.remove('bg-metal-900');
      };
    }, []);
    const getNewData = useCallback(async ({
      page = 1,
      pageSize = DEFAULT_PAGE_SIZE,
      termOfSearch = undefined,
      type = undefined
    }: PokemonResponse) => {
      const result = await getPokemons({
        page,
        pageSize,
        termOfSearch,
        type
      });
      await new Promise(resolve => setTimeout(resolve, 500));
      return {
        data: addExpandedContent(result.results),
        totalItemsCount: result.totalItemsCount
      };
    }, []);
    if (data.length === 0) {
      return <div>Loading...</div>;
    }
    return <QueryClientProvider client={queryClient}>
        <VirtualizedTableComponent<PokemonWithMeta> {...storyArgs} enableHoverRow id={id} data={data} columns={columns as ColumnDef<PokemonWithMeta>[]} showPagination={true} fetchData={getNewData} totalItems={totalItemsCount} enableExpandedRow />
      </QueryClientProvider>;
  }
}`,...x.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    ...args,
    enableExpandedRow: true,
    ariaLabel: 'List of pokemons with external expand trigger'
  },
  render: storyArgs => {
    const [{
      data,
      totalItemsCount
    }, setData] = useState<{
      data: Pokemon[];
      totalItemsCount: number;
    }>({
      data: [],
      totalItemsCount: 0
    });
    const [selectedRows, setSelectedRows] = useState<Record<string, boolean>>({});
    const handleToggleSelect = (rowId: string) => {
      setSelectedRows(prev => {
        const isSelected = !prev[rowId];
        if (isSelected) {
          VirtualizedTableComponent.Events.sendExpandRowEvent(EXTERNAL_TRIGGER_TABLE_ID, rowId);
        } else {
          VirtualizedTableComponent.Events.sendCollapseRowEvent(EXTERNAL_TRIGGER_TABLE_ID, rowId);
        }
        return {
          ...prev,
          [rowId]: isSelected
        };
      });
    };
    useEffect(() => {
      const init = async () => {
        const result = await getPokemons({
          page: 1,
          pageSize: DEFAULT_PAGE_SIZE
        });
        setData({
          data: result.results,
          totalItemsCount: result.totalItemsCount
        });
      };
      init();
    }, []);
    useEffect(() => {
      document.body.setAttribute('data-theme', 'dark');
      document.body.classList.add('bg-metal-900');
      return () => {
        document.body.removeAttribute('data-theme');
        document.body.classList.remove('bg-metal-900');
      };
    }, []);
    const getNewData = useCallback(async ({
      page = 1,
      pageSize = DEFAULT_PAGE_SIZE,
      termOfSearch = undefined,
      type = undefined
    }: PokemonResponse) => {
      const result = await getPokemons({
        page,
        pageSize,
        termOfSearch,
        type
      });
      await new Promise(resolve => setTimeout(resolve, 500));
      return {
        data: result.results,
        totalItemsCount: result.totalItemsCount
      };
    }, []);
    const columnsWithSelectButton: ColumnDef<Pokemon>[] = [...columns.filter(col => col.id !== 'actions'), {
      id: 'select-action',
      enableSorting: false,
      enableResizing: false,
      cell: ({
        row
      }) => <Button variant={selectedRows[row.id] ? 'primary' : 'secondary'} appearance="compact" onClick={() => handleToggleSelect(row.id)}>
            {selectedRows[row.id] ? 'Remove' : 'Add'}
          </Button>,
      header: () => <span className="sr-only">Select</span>,
      meta: {
        headerClassName: 'w-[150px]',
        className: 'flex justify-center h-12 items-center'
      }
    }];
    if (data.length === 0) {
      return <div>Loading...</div>;
    }
    return <QueryClientProvider client={queryClient}>
        <VirtualizedTableComponent<Pokemon> {...storyArgs} enableHoverRow id={EXTERNAL_TRIGGER_TABLE_ID} data={data} getRowId={row => String(row.id)} columns={columnsWithSelectButton} showPagination={true} fetchData={getNewData} totalItems={totalItemsCount} enableExpandedRow keepExpandColumnVisible={selectedRows} renderExpandedRow={rowData => <div className="flex flex-col gap-2 py-2">
              <Typography variant="body3" className="text-metal-400">
                Configuration for {(rowData as Pokemon).name}
              </Typography>
              <div className="flex gap-4">
                <div className="flex flex-col gap-1">
                  <Typography variant="body3" className="font-medium text-metal-300">
                    Type
                  </Typography>
                  <Typography variant="body2">
                    {(rowData as Pokemon).type}
                  </Typography>
                </div>
                <div className="flex flex-col gap-1">
                  <Typography variant="body3" className="font-medium text-metal-300">
                    Ability
                  </Typography>
                  <Typography variant="body2">
                    {(rowData as Pokemon).ability}
                  </Typography>
                </div>
                <div className="flex flex-col gap-1">
                  <Typography variant="body3" className="font-medium text-metal-300">
                    Height / Weight
                  </Typography>
                  <Typography variant="body2">
                    {(rowData as Pokemon).height} /{' '}
                    {(rowData as Pokemon).weight}
                  </Typography>
                </div>
              </div>
            </div>} />
      </QueryClientProvider>;
  }
}`,...w.parameters?.docs?.source}}};const Ee=["Default","ExpandableRows","ExpandableRowsWithExternalTrigger"];export{f as Default,x as ExpandableRows,w as ExpandableRowsWithExternalTrigger,Ee as __namedExportsOrder,Ce as default};
