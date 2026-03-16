import{r as s,j as e}from"./iframe-DLrn8Gk9.js";import{V as l,D as g,Q as C,a as P,E as A}from"./VirtualizedTable-shkBpJ0b.js";import{B as k}from"./Button-CIavAXKE.js";import{T as o}from"./Typography-CHpAwWZY.js";import{g as p}from"./pokemon.repository-CXRwXuEl.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-B_E_E462.js";import"./index-CwGTy2we.js";import"./index-DFrv0GJx.js";import"./index-BfndZXuq.js";import"./index-8qrDTiGs.js";import"./index-y1nNICkM.js";import"./index-CPvO_3XD.js";import"./chevron-right-CXZRSvYZ.js";import"./compiler-runtime-DxXHijtq.js";import"./debounce-QIpfilki.js";import"./isObject-CRGnl22A.js";import"./Filter-DkVcyH3w.js";import"./Badge-BO9G0W8a.js";import"./Loader-Baw2dVMg.js";import"./x-D3mwUgyG.js";import"./Checkbox-BWZlyzoZ.js";import"./index-QG5MEqND.js";import"./index-CRB1R8uy.js";import"./index-BvLyimqJ.js";import"./index-B2f5QKQL.js";import"./useToggle-RMYwN_Za.js";import"./check-DB3q0YIm.js";import"./index-CE1qPSkB.js";import"./TimePicker-C1BWp3V7.js";import"./DatePicker-DwS3ZOSZ.js";import"./style-DmPN67Hs.js";import"./DateRangePicker-BcajfZSC.js";import"./RadioGroup-BvArb0rV.js";import"./Radio-Bpj8wjdA.js";import"./Input-D9j3-C_C.js";import"./Warning-dqZmWUD1.js";import"./proxy-yAJNhRAm.js";import"./Tooltip-DNf-ulOd.js";import"./index-DU3n5AK5.js";import"./index-yRV-2iis.js";import"./index-BDfI96nn.js";import"./index-CkdhHSWL.js";import"./Loading-Du8vJpMB.js";import"./chevron-up-Caeu08PX.js";const Ie={title:"In Review/VirtualizedTable/Dark",component:l},E=new P,I=[{header:"Id",accessorKey:"id",meta:{headerClassName:"whitespace-nowrap w-0"}},{header:"Name",accessorKey:"name",cell:a=>e.jsx(l.TruncateText,{...a,value:`${a.getValue().charAt(0).toUpperCase()}${a.getValue().slice(1)}`})},{header:"Type",accessorKey:"type",cell:a=>e.jsx(l.TruncateText,{...a,value:`${a.getValue().charAt(0).toUpperCase()}${a.getValue().slice(1)}`})},{header:"Height",accessorKey:"height"},{header:"Weight",accessorKey:"weight"},{header:"Ability",accessorKey:"ability",cell:a=>e.jsx(l.TruncateText,{...a,value:`${a.getValue().charAt(0).toUpperCase()}${a.getValue().slice(1)}`})},{id:"actions",enableSorting:!1,enableResizing:!1,cell:a=>e.jsx(l.Actions,{...a,actions:[{label:e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx(A,{className:"w-4 h-4"}),"First Action"]}),onClick:n=>{console.log(`Viewing details for ${JSON.stringify(n)}`)},className:"text-slate-800"},{label:"Second Action",onClick:n=>{console.log(`Viewing details for ${JSON.stringify(n)}`)}}]}),header:()=>e.jsx("span",{className:"sr-only",children:"Action Buttons"}),meta:{headerClassName:"w-[92px]",className:"flex justify-center"}}],T={showFilter:!0,showResetButton:!0,showPagination:!0,isLoading:!1,ariaLabel:"List of pokemons",pageSizes:[5,10,20,30,50],filters:[{key:"type",label:"Type",options:[{id:"grass",label:"Grass",variant:"success"},{id:"fire",label:"Fire",variant:"danger"},{id:"water",label:"Water",variant:"info"},{id:"bug",label:"Bug",variant:"warning"},{id:"normal",label:"Normal",variant:void 0}]},{type:"action",label:"Export",variant:"secondary",onClick:()=>{console.log("Export")}},{key:"created",type:"date",label:"Created"},{key:"time",type:"time",label:"Time",showTimePicker:!1,presets:[{label:"Last 15 mins",value:new Date(Date.now()-900*1e3)},{label:"Last 30 mins",value:new Date(Date.now()-1800*1e3)},{label:"Last 1 hour",value:new Date(Date.now()-3600*1e3)},{label:"Last 6 hours",value:new Date(Date.now()-360*60*1e3)}]}]},f={args:T,render:a=>{const n=s.useId(),[{data:c,totalItemsCount:y},m]=s.useState({data:[],totalItemsCount:0});s.useEffect(()=>{(async()=>{const i=await p({page:1,pageSize:g});m({data:i.results,totalItemsCount:i.totalItemsCount})})()},[]),s.useEffect(()=>(document.body.setAttribute("data-theme","dark"),document.body.classList.add("bg-metal-900"),()=>{document.body.removeAttribute("data-theme"),document.body.classList.remove("bg-metal-900")}),[]);const h=s.useCallback(async({page:u=1,pageSize:i=g,termOfSearch:b=void 0,type:t=void 0})=>{const r=await p({page:u,pageSize:i,termOfSearch:b,type:t});return await new Promise(d=>setTimeout(d,1e3)),{data:r.results,totalItemsCount:r.totalItemsCount}},[p]);return c.length===0?e.jsx("div",{children:"Loading..."}):e.jsx(C,{client:E,children:e.jsx(l,{...a,id:n,data:c,columns:I,showPagination:!0,fetchData:h,totalItems:y})})}},N=a=>a.map(n=>({...n,meta:{expandedRow:e.jsxs("div",{className:"flex flex-col gap-2 py-2",children:[e.jsxs(o,{variant:"body3",className:"text-metal-400",children:["Details for ",n.name]}),e.jsxs("div",{className:"flex gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(o,{variant:"body3",className:"font-medium text-metal-300",children:"Type"}),e.jsx(o,{variant:"body2",children:n.type})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(o,{variant:"body3",className:"font-medium text-metal-300",children:"Ability"}),e.jsx(o,{variant:"body2",children:n.ability})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(o,{variant:"body3",className:"font-medium text-metal-300",children:"Height / Weight"}),e.jsxs(o,{variant:"body2",children:[n.height," / ",n.weight]})]})]})]})}})),x={args:{...T,enableExpandedRow:!0,ariaLabel:"List of pokemons with expandable rows"},render:a=>{const n=s.useId(),[{data:c,totalItemsCount:y},m]=s.useState({data:[],totalItemsCount:0});s.useEffect(()=>{(async()=>{const i=await p({page:1,pageSize:g});m({data:N(i.results),totalItemsCount:i.totalItemsCount})})()},[]),s.useEffect(()=>(document.body.setAttribute("data-theme","dark"),document.body.classList.add("bg-metal-900"),()=>{document.body.removeAttribute("data-theme"),document.body.classList.remove("bg-metal-900")}),[]);const h=s.useCallback(async({page:u=1,pageSize:i=g,termOfSearch:b=void 0,type:t=void 0})=>{const r=await p({page:u,pageSize:i,termOfSearch:b,type:t});return await new Promise(d=>setTimeout(d,500)),{data:N(r.results),totalItemsCount:r.totalItemsCount}},[]);return c.length===0?e.jsx("div",{children:"Loading..."}):e.jsx(C,{client:E,children:e.jsx(l,{...a,enableHoverRow:!0,id:n,data:c,columns:I,showPagination:!0,fetchData:h,totalItems:y,enableExpandedRow:!0})})}},v="external-trigger-table",w={args:{...T,enableExpandedRow:!0,ariaLabel:"List of pokemons with external expand trigger"},render:a=>{const[{data:n,totalItemsCount:c},y]=s.useState({data:[],totalItemsCount:0}),[m,h]=s.useState({}),u=t=>{h(r=>{const d=!r[t];return d?l.Events.sendExpandRowEvent(v,t):l.Events.sendCollapseRowEvent(v,t),{...r,[t]:d}})};s.useEffect(()=>{(async()=>{const r=await p({page:1,pageSize:g});y({data:r.results,totalItemsCount:r.totalItemsCount})})()},[]),s.useEffect(()=>(document.body.setAttribute("data-theme","dark"),document.body.classList.add("bg-metal-900"),()=>{document.body.removeAttribute("data-theme"),document.body.classList.remove("bg-metal-900")}),[]);const i=s.useCallback(async({page:t=1,pageSize:r=g,termOfSearch:d=void 0,type:R=void 0})=>{const S=await p({page:t,pageSize:r,termOfSearch:d,type:R});return await new Promise(D=>setTimeout(D,500)),{data:S.results,totalItemsCount:S.totalItemsCount}},[]),b=[...I.filter(t=>t.id!=="actions"),{id:"select-action",enableSorting:!1,enableResizing:!1,cell:({row:t})=>e.jsx(k,{variant:m[t.id]?"primary":"secondary",appearance:"compact",onClick:()=>u(t.id),children:m[t.id]?"Remove":"Add"}),header:()=>e.jsx("span",{className:"sr-only",children:"Select"}),meta:{headerClassName:"w-[150px]",className:"flex justify-center h-12 items-center"}}];return n.length===0?e.jsx("div",{children:"Loading..."}):e.jsx(C,{client:E,children:e.jsx(l,{...a,enableHoverRow:!0,id:v,data:n,getRowId:t=>String(t.id),columns:b,showPagination:!0,fetchData:i,totalItems:c,enableExpandedRow:!0,keepExpandColumnVisible:m,renderExpandedRow:t=>e.jsxs("div",{className:"flex flex-col gap-2 py-2",children:[e.jsxs(o,{variant:"body3",className:"text-metal-400",children:["Configuration for ",t.name]}),e.jsxs("div",{className:"flex gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(o,{variant:"body3",className:"font-medium text-metal-300",children:"Type"}),e.jsx(o,{variant:"body2",children:t.type})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(o,{variant:"body3",className:"font-medium text-metal-300",children:"Ability"}),e.jsx(o,{variant:"body2",children:t.ability})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(o,{variant:"body3",className:"font-medium text-metal-300",children:"Height / Weight"}),e.jsxs(o,{variant:"body2",children:[t.height," /"," ",t.weight]})]})]})]})})})}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};const Te=["Default","ExpandableRows","ExpandableRowsWithExternalTrigger"];export{f as Default,x as ExpandableRows,w as ExpandableRowsWithExternalTrigger,Te as __namedExportsOrder,Ie as default};
