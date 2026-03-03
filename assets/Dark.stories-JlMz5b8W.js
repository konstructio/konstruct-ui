import{r as s,j as e}from"./iframe-C9BKWzDJ.js";import{V as l,D as g,Q as C,a as P,E as j}from"./VirtualizedTable-CWw51_JU.js";import{B as k}from"./Button-D7PtIdYK.js";import{T as o}from"./Typography-DB78lGzo.js";import{g as p}from"./pokemon.repository-Bz-hnYx8.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-iXb1qCA9.js";import"./index-CGPp45Jz.js";import"./index-KEpzVDod.js";import"./index-Djxxrjvv.js";import"./index-CxHgSRhb.js";import"./index-Df-vjiGr.js";import"./index-Bpyo7kJQ.js";import"./chevron-right-DCaqjuuF.js";import"./debounce-s5GNfgjH.js";import"./isObject-CMeswo3O.js";import"./Filter-D_67l2A1.js";import"./Badge-DCHUPER-.js";import"./Loader-DURDrt8B.js";import"./x-CPOWiWSk.js";import"./Checkbox-tMYtFlrt.js";import"./index-DSajD14I.js";import"./index-DNnLzc-n.js";import"./index-BsrSTvnG.js";import"./index-CGcBcZw7.js";import"./useToggle-DoXOUzlQ.js";import"./check-Dn4_Af1V.js";import"./index-DC4_f3fh.js";import"./TimePicker-Dk35FpMp.js";import"./DatePicker-B15I3_80.js";import"./style-6DP2EV20.js";import"./DateRangePicker-CxFvrkJY.js";import"./RadioGroup-CADR4oPn.js";import"./Radio-B6irywho.js";import"./Input-jHdWUpAQ.js";import"./Warning-5TQH2Ugh.js";import"./proxy-DyCg3bmp.js";import"./index-BIAPq49s.js";import"./index-DEkGRS-R.js";import"./index-B1KcgWqR.js";import"./index-CDv11NUc.js";import"./Loading-Bv5bHxss.js";import"./chevron-up-Dyhteoot.js";const Ce={title:"In Review/VirtualizedTable/Dark",component:l},E=new P,I=[{header:"Id",accessorKey:"id",meta:{headerClassName:"whitespace-nowrap w-0"}},{header:"Name",accessorKey:"name",cell:a=>e.jsx(l.TruncateText,{...a,value:`${a.getValue().charAt(0).toUpperCase()}${a.getValue().slice(1)}`})},{header:"Type",accessorKey:"type",cell:a=>e.jsx(l.TruncateText,{...a,value:`${a.getValue().charAt(0).toUpperCase()}${a.getValue().slice(1)}`})},{header:"Height",accessorKey:"height"},{header:"Weight",accessorKey:"weight"},{header:"Ability",accessorKey:"ability",cell:a=>e.jsx(l.TruncateText,{...a,value:`${a.getValue().charAt(0).toUpperCase()}${a.getValue().slice(1)}`})},{id:"actions",enableSorting:!1,enableResizing:!1,cell:a=>e.jsx(l.Actions,{...a,actions:[{label:e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx(j,{className:"w-4 h-4"}),"First Action"]}),onClick:n=>{console.log(`Viewing details for ${JSON.stringify(n)}`)},className:"text-slate-800"},{label:"Second Action",onClick:n=>{console.log(`Viewing details for ${JSON.stringify(n)}`)}}]}),header:()=>e.jsx("span",{className:"sr-only",children:"Action Buttons"}),meta:{headerClassName:"w-[92px]",className:"flex justify-center"}}],T={showFilter:!0,showResetButton:!0,showPagination:!0,isLoading:!1,ariaLabel:"List of pokemons",pageSizes:[5,10,20,30,50],filterActions:[{label:"Export",variant:"secondary",onClick:()=>{console.log("Export")}}],filters:[{key:"type",label:"Type",options:[{id:"grass",label:"Grass",variant:"success"},{id:"fire",label:"Fire",variant:"danger"},{id:"water",label:"Water",variant:"info"},{id:"bug",label:"Bug",variant:"warning"},{id:"normal",label:"Normal",variant:void 0}]},{key:"created",type:"date",label:"Created"}]},f={args:T,render:a=>{const n=s.useId(),[{data:c,totalItemsCount:y},m]=s.useState({data:[],totalItemsCount:0});s.useEffect(()=>{(async()=>{const i=await p({page:1,pageSize:g});m({data:i.results,totalItemsCount:i.totalItemsCount})})()},[]),s.useEffect(()=>(document.body.setAttribute("data-theme","dark"),document.body.classList.add("bg-metal-900"),()=>{document.body.removeAttribute("data-theme"),document.body.classList.remove("bg-metal-900")}),[]);const h=s.useCallback(async({page:u=1,pageSize:i=g,termOfSearch:b=void 0,type:t=void 0})=>{const r=await p({page:u,pageSize:i,termOfSearch:b,type:t});return await new Promise(d=>setTimeout(d,1e3)),{data:r.results,totalItemsCount:r.totalItemsCount}},[p]);return c.length===0?e.jsx("div",{children:"Loading..."}):e.jsx(C,{client:E,children:e.jsx(l,{...a,id:n,data:c,columns:I,showPagination:!0,fetchData:h,totalItems:y})})}},N=a=>a.map(n=>({...n,meta:{expandedRow:e.jsxs("div",{className:"flex flex-col gap-2 py-2",children:[e.jsxs(o,{variant:"body3",className:"text-metal-400",children:["Details for ",n.name]}),e.jsxs("div",{className:"flex gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(o,{variant:"body3",className:"font-medium text-metal-300",children:"Type"}),e.jsx(o,{variant:"body2",children:n.type})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(o,{variant:"body3",className:"font-medium text-metal-300",children:"Ability"}),e.jsx(o,{variant:"body2",children:n.ability})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(o,{variant:"body3",className:"font-medium text-metal-300",children:"Height / Weight"}),e.jsxs(o,{variant:"body2",children:[n.height," / ",n.weight]})]})]})]})}})),x={args:{...T,enableExpandedRow:!0,ariaLabel:"List of pokemons with expandable rows"},render:a=>{const n=s.useId(),[{data:c,totalItemsCount:y},m]=s.useState({data:[],totalItemsCount:0});s.useEffect(()=>{(async()=>{const i=await p({page:1,pageSize:g});m({data:N(i.results),totalItemsCount:i.totalItemsCount})})()},[]),s.useEffect(()=>(document.body.setAttribute("data-theme","dark"),document.body.classList.add("bg-metal-900"),()=>{document.body.removeAttribute("data-theme"),document.body.classList.remove("bg-metal-900")}),[]);const h=s.useCallback(async({page:u=1,pageSize:i=g,termOfSearch:b=void 0,type:t=void 0})=>{const r=await p({page:u,pageSize:i,termOfSearch:b,type:t});return await new Promise(d=>setTimeout(d,500)),{data:N(r.results),totalItemsCount:r.totalItemsCount}},[]);return c.length===0?e.jsx("div",{children:"Loading..."}):e.jsx(C,{client:E,children:e.jsx(l,{...a,enableHoverRow:!0,id:n,data:c,columns:I,showPagination:!0,fetchData:h,totalItems:y,enableExpandedRow:!0})})}},w="external-trigger-table",v={args:{...T,enableExpandedRow:!0,ariaLabel:"List of pokemons with external expand trigger"},render:a=>{const[{data:n,totalItemsCount:c},y]=s.useState({data:[],totalItemsCount:0}),[m,h]=s.useState({}),u=t=>{h(r=>{const d=!r[t];return d?l.Events.sendExpandRowEvent(w,t):l.Events.sendCollapseRowEvent(w,t),{...r,[t]:d}})};s.useEffect(()=>{(async()=>{const r=await p({page:1,pageSize:g});y({data:r.results,totalItemsCount:r.totalItemsCount})})()},[]),s.useEffect(()=>(document.body.setAttribute("data-theme","dark"),document.body.classList.add("bg-metal-900"),()=>{document.body.removeAttribute("data-theme"),document.body.classList.remove("bg-metal-900")}),[]);const i=s.useCallback(async({page:t=1,pageSize:r=g,termOfSearch:d=void 0,type:R=void 0})=>{const S=await p({page:t,pageSize:r,termOfSearch:d,type:R});return await new Promise(A=>setTimeout(A,500)),{data:S.results,totalItemsCount:S.totalItemsCount}},[]),b=[...I.filter(t=>t.id!=="actions"),{id:"select-action",enableSorting:!1,enableResizing:!1,cell:({row:t})=>e.jsx(k,{variant:m[t.id]?"primary":"secondary",appearance:"compact",onClick:()=>u(t.id),children:m[t.id]?"Remove":"Add"}),header:()=>e.jsx("span",{className:"sr-only",children:"Select"}),meta:{headerClassName:"w-[150px]",className:"flex justify-center h-12 items-center"}}];return n.length===0?e.jsx("div",{children:"Loading..."}):e.jsx(C,{client:E,children:e.jsx(l,{...a,enableHoverRow:!0,id:w,data:n,getRowId:t=>String(t.id),columns:b,showPagination:!0,fetchData:i,totalItems:c,enableExpandedRow:!0,keepExpandColumnVisible:m,renderExpandedRow:t=>e.jsxs("div",{className:"flex flex-col gap-2 py-2",children:[e.jsxs(o,{variant:"body3",className:"text-metal-400",children:["Configuration for ",t.name]}),e.jsxs("div",{className:"flex gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(o,{variant:"body3",className:"font-medium text-metal-300",children:"Type"}),e.jsx(o,{variant:"body2",children:t.type})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(o,{variant:"body3",className:"font-medium text-metal-300",children:"Ability"}),e.jsx(o,{variant:"body2",children:t.ability})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(o,{variant:"body3",className:"font-medium text-metal-300",children:"Height / Weight"}),e.jsxs(o,{variant:"body2",children:[t.height," /"," ",t.weight]})]})]})]})})})}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};const Ee=["Default","ExpandableRows","ExpandableRowsWithExternalTrigger"];export{f as Default,x as ExpandableRows,v as ExpandableRowsWithExternalTrigger,Ee as __namedExportsOrder,Ce as default};
