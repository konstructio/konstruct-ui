import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-D9T3pWpr.js";import{t as r}from"./jsx-runtime-BPpv9Zq8.js";import{n as i,t as a}from"./Typography-BiqKngpX.js";import{t as o,u as s}from"./lucide-react-BBNbICxp.js";import{n as c,t as l}from"./Button-DDFBSSkt.js";import{c as u,i as d,n as f,o as p,r as m,t as h}from"./VirtualizedTable-DGdlX26p.js";import{n as g,t as _}from"./mocks-CO4A2VkM.js";var v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P;t((()=>{m(),o(),v=e(n(),1),c(),i(),_(),u(),f(),y=r(),b={title:`In Review/VirtualizedTable/Dark`,component:h},x=new p,S=[{header:`Id`,accessorKey:`id`,meta:{headerClassName:`whitespace-nowrap w-0`}},{header:`Name`,accessorKey:`name`,cell:e=>(0,y.jsx)(h.TruncateText,{...e,value:`${e.getValue().charAt(0).toUpperCase()}${e.getValue().slice(1)}`})},{header:`Type`,accessorKey:`type`,cell:e=>(0,y.jsx)(h.TruncateText,{...e,value:`${e.getValue().charAt(0).toUpperCase()}${e.getValue().slice(1)}`})},{header:`Height`,accessorKey:`height`},{header:`Weight`,accessorKey:`weight`},{header:`Ability`,accessorKey:`ability`,cell:e=>(0,y.jsx)(h.TruncateText,{...e,value:`${e.getValue().charAt(0).toUpperCase()}${e.getValue().slice(1)}`})},{id:`actions`,enableSorting:!1,enableResizing:!1,cell:e=>(0,y.jsx)(h.Actions,{...e,actions:[{label:(0,y.jsxs)(`span`,{className:`flex items-center gap-2`,children:[(0,y.jsx)(s,{className:`w-4 h-4`}),`First Action`]}),onClick:e=>{console.log(`Viewing details for ${JSON.stringify(e)}`)},className:`text-slate-800`},{label:`Second Action`,onClick:e=>{console.log(`Viewing details for ${JSON.stringify(e)}`)}}]}),header:()=>(0,y.jsx)(`span`,{className:`sr-only`,children:`Action Buttons`}),meta:{headerClassName:`w-23`,className:`flex justify-center`}}],C={showFilter:!0,showResetButton:!0,showPagination:!0,isLoading:!1,ariaLabel:`List of pokemons`,pageSizes:[5,10,20,30,50],filters:[{key:`type`,label:`Type`,options:[{id:`grass`,label:`Grass`,variant:`success`},{id:`fire`,label:`Fire`,variant:`danger`},{id:`water`,label:`Water`,variant:`info`},{id:`bug`,label:`Bug`,variant:`warning`},{id:`normal`,label:`Normal`,variant:void 0}]},{type:`action`,label:`Export`,variant:`secondary`,onClick:()=>{console.log(`Export`)}},{key:`created`,type:`date`,label:`Created`},{key:`time`,type:`time`,label:`Time`,showTimePicker:!1,presets:[{label:`Last 15 mins`,value:new Date(Date.now()-900*1e3)},{label:`Last 30 mins`,value:new Date(Date.now()-1800*1e3)},{label:`Last 1 hour`,value:new Date(Date.now()-3600*1e3)},{label:`Last 6 hours`,value:new Date(Date.now()-360*60*1e3)}]}]},w={args:C,render:e=>{let t=(0,v.useId)(),[{data:n,totalItemsCount:r},i]=(0,v.useState)({data:[],totalItemsCount:0});(0,v.useEffect)(()=>{(async()=>{let e=await g({page:1,pageSize:10});i({data:e.results,totalItemsCount:e.totalItemsCount})})()},[]),(0,v.useEffect)(()=>(document.body.setAttribute(`data-theme`,`dark`),document.body.classList.add(`bg-metal-900`),()=>{document.body.removeAttribute(`data-theme`),document.body.classList.remove(`bg-metal-900`)}),[]);let a=(0,v.useCallback)(async({page:e=1,pageSize:t=10,termOfSearch:n=void 0,type:r=void 0})=>{let i=await g({page:e,pageSize:t,termOfSearch:n,type:r});return await new Promise(e=>setTimeout(e,1e3)),{data:i.results,totalItemsCount:i.totalItemsCount}},[g]);return n.length===0?(0,y.jsx)(`div`,{children:`Loading...`}):(0,y.jsx)(d,{client:x,children:(0,y.jsx)(h,{...e,id:t,data:n,columns:S,showPagination:!0,fetchData:a,totalItems:r})})}},T={render:()=>{let e=(0,v.useId)(),[t,n]=(0,v.useState)([]);return(0,v.useEffect)(()=>{(async()=>{let e=await g({page:1,pageSize:5});n(e.results)})()},[]),(0,v.useEffect)(()=>(document.body.setAttribute(`data-theme`,`dark`),document.body.classList.add(`bg-metal-900`),()=>{document.body.removeAttribute(`data-theme`),document.body.classList.remove(`bg-metal-900`)}),[]),(0,y.jsx)(d,{client:x,children:(0,y.jsx)(h,{id:e,ariaLabel:`List of pokemons`,classNameWrapperTable:`overflow-visible`,data:t,columns:S,showPagination:!0,totalItems:t.length})})}},E=e=>e.map(e=>({...e,meta:{expandedRow:(0,y.jsxs)(`div`,{className:`flex flex-col gap-2 py-2`,children:[(0,y.jsxs)(a,{variant:`body3`,className:`text-metal-400`,children:[`Details for `,e.name]}),(0,y.jsxs)(`div`,{className:`flex gap-4`,children:[(0,y.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,y.jsx)(a,{variant:`body3`,className:`font-medium text-metal-300`,children:`Type`}),(0,y.jsx)(a,{variant:`body2`,children:e.type})]}),(0,y.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,y.jsx)(a,{variant:`body3`,className:`font-medium text-metal-300`,children:`Ability`}),(0,y.jsx)(a,{variant:`body2`,children:e.ability})]}),(0,y.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,y.jsx)(a,{variant:`body3`,className:`font-medium text-metal-300`,children:`Height / Weight`}),(0,y.jsxs)(a,{variant:`body2`,children:[e.height,` / `,e.weight]})]})]})]})}})),D={args:{...C,enableExpandedRow:!0,ariaLabel:`List of pokemons with expandable rows`},render:e=>{let t=(0,v.useId)(),[{data:n,totalItemsCount:r},i]=(0,v.useState)({data:[],totalItemsCount:0});(0,v.useEffect)(()=>{(async()=>{let e=await g({page:1,pageSize:10});i({data:E(e.results),totalItemsCount:e.totalItemsCount})})()},[]),(0,v.useEffect)(()=>(document.body.setAttribute(`data-theme`,`dark`),document.body.classList.add(`bg-metal-900`),()=>{document.body.removeAttribute(`data-theme`),document.body.classList.remove(`bg-metal-900`)}),[]);let a=(0,v.useCallback)(async({page:e=1,pageSize:t=10,termOfSearch:n=void 0,type:r=void 0})=>{let i=await g({page:e,pageSize:t,termOfSearch:n,type:r});return await new Promise(e=>setTimeout(e,500)),{data:E(i.results),totalItemsCount:i.totalItemsCount}},[]);return n.length===0?(0,y.jsx)(`div`,{children:`Loading...`}):(0,y.jsx)(d,{client:x,children:(0,y.jsx)(h,{...e,enableHoverRow:!0,id:t,data:n,columns:S,showPagination:!0,fetchData:a,totalItems:r,enableExpandedRow:!0})})}},O=`external-trigger-table`,k={args:{...C,enableExpandedRow:!0,ariaLabel:`List of pokemons with external expand trigger`},render:e=>{let[{data:t,totalItemsCount:n},r]=(0,v.useState)({data:[],totalItemsCount:0}),[i,o]=(0,v.useState)({}),s=e=>{o(t=>{let n=!t[e];return n?h.Events.sendExpandRowEvent(O,e):h.Events.sendCollapseRowEvent(O,e),{...t,[e]:n}})};(0,v.useEffect)(()=>{(async()=>{let e=await g({page:1,pageSize:10});r({data:e.results,totalItemsCount:e.totalItemsCount})})()},[]),(0,v.useEffect)(()=>(document.body.setAttribute(`data-theme`,`dark`),document.body.classList.add(`bg-metal-900`),()=>{document.body.removeAttribute(`data-theme`),document.body.classList.remove(`bg-metal-900`)}),[]);let c=(0,v.useCallback)(async({page:e=1,pageSize:t=10,termOfSearch:n=void 0,type:r=void 0})=>{let i=await g({page:e,pageSize:t,termOfSearch:n,type:r});return await new Promise(e=>setTimeout(e,500)),{data:i.results,totalItemsCount:i.totalItemsCount}},[]),u=[...S.filter(e=>e.id!==`actions`),{id:`select-action`,enableSorting:!1,enableResizing:!1,cell:({row:e})=>(0,y.jsx)(l,{variant:i[e.id]?`primary`:`secondary`,appearance:`compact`,onClick:()=>s(e.id),children:i[e.id]?`Remove`:`Add`}),header:()=>(0,y.jsx)(`span`,{className:`sr-only`,children:`Select`}),meta:{headerClassName:`w-37.5`,className:`flex justify-center h-12 items-center`}}];return t.length===0?(0,y.jsx)(`div`,{children:`Loading...`}):(0,y.jsx)(d,{client:x,children:(0,y.jsx)(h,{...e,enableHoverRow:!0,id:O,data:t,getRowId:e=>String(e.id),columns:u,showPagination:!0,fetchData:c,totalItems:n,enableExpandedRow:!0,keepExpandColumnVisible:i,renderExpandedRow:e=>(0,y.jsxs)(`div`,{className:`flex flex-col gap-2 py-2`,children:[(0,y.jsxs)(a,{variant:`body3`,className:`text-metal-400`,children:[`Configuration for `,e.name]}),(0,y.jsxs)(`div`,{className:`flex gap-4`,children:[(0,y.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,y.jsx)(a,{variant:`body3`,className:`font-medium text-metal-300`,children:`Type`}),(0,y.jsx)(a,{variant:`body2`,children:e.type})]}),(0,y.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,y.jsx)(a,{variant:`body3`,className:`font-medium text-metal-300`,children:`Ability`}),(0,y.jsx)(a,{variant:`body2`,children:e.ability})]}),(0,y.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,y.jsx)(a,{variant:`body3`,className:`font-medium text-metal-300`,children:`Height / Weight`}),(0,y.jsxs)(a,{variant:`body2`,children:[e.height,` /`,` `,e.weight]})]})]})]})})})}},A=()=>{(0,v.useEffect)(()=>(document.body.setAttribute(`data-theme`,`dark`),document.body.classList.add(`bg-metal-900`),()=>{document.body.removeAttribute(`data-theme`),document.body.classList.remove(`bg-metal-900`)}),[])},j={render:()=>{let e=(0,v.useId)(),[t,n]=(0,v.useState)([]);return A(),(0,v.useEffect)(()=>{(async()=>{let e=await g({page:1,pageSize:10});n(e.results)})()},[]),(0,y.jsx)(d,{client:x,children:(0,y.jsx)(h,{id:e,ariaLabel:`List of pokemons`,data:t,columns:S,headerContent:(0,y.jsxs)(`div`,{className:`flex w-full items-center justify-between`,children:[(0,y.jsx)(`span`,{children:`Usage for billing period 1 - 31 March 2026`}),(0,y.jsx)(`span`,{className:`font-semibold`,children:`$0.00`})]})})})}},M={parameters:{docs:{description:{story:"With React Query default retry (3 attempts) the errorState appears after retries are exhausted; pass `queryOptions={{ retry: false }}` to show it immediately. A background refetch failure keeps the current rows visible."}}},render:()=>{let e=(0,v.useId)();A();let t=(0,v.useCallback)(async()=>{throw await new Promise(e=>setTimeout(e,800)),Error(`Failed to load pokemons`)},[]);return(0,y.jsx)(d,{client:x,children:(0,y.jsx)(h,{id:e,ariaLabel:`List of pokemons`,data:[],columns:S,fetchData:t,queryOptions:{retry:!1},errorState:e=>(0,y.jsxs)(`div`,{className:`flex flex-col items-center gap-2 py-12`,children:[(0,y.jsx)(a,{variant:`body2`,className:`font-medium dark:text-metal-50`,children:`Something went wrong`}),(0,y.jsx)(a,{variant:`body3`,className:`text-gray-500 dark:text-metal-400`,children:e.message})]})})})}},N={parameters:{docs:{description:{story:`The scroll container (classNameScrollContainer) wraps the table and the pagination bar so both scroll together; the filter row stays fixed to the container width. Filter dropdowns always render in a portal, and the page-size dropdown does so automatically when classNameScrollContainer is set, so the overflow container never clips them.`}}},render:()=>{let e=(0,v.useId)(),[{data:t,totalItemsCount:n},r]=(0,v.useState)({data:[],totalItemsCount:0});A(),(0,v.useEffect)(()=>{(async()=>{let e=await g({page:1,pageSize:10});r({data:e.results,totalItemsCount:e.totalItemsCount})})()},[]);let i=(0,v.useCallback)(async({page:e=1,pageSize:t=10,termOfSearch:n=void 0,type:r=void 0})=>{let i=await g({page:e,pageSize:t,termOfSearch:n,type:r});return await new Promise(e=>setTimeout(e,500)),{data:i.results,totalItemsCount:i.totalItemsCount}},[]);return t.length===0?(0,y.jsx)(`div`,{children:`Loading...`}):(0,y.jsx)(d,{client:x,children:(0,y.jsx)(`div`,{className:`max-w-3xl`,children:(0,y.jsx)(h,{id:e,ariaLabel:`List of pokemons`,data:t,columns:S,classNameTable:`min-w-300`,classNameScrollContainer:`overflow-x-auto contain-inline-size`,showPagination:!0,pageSizes:[5,10,20,30,50],showFilter:!0,showFilterInput:!0,showResetButton:!0,filterSearchPlaceholder:`Search pokemons...`,filters:C.filters,fetchData:i,totalItems:n})})})}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const id = useId();
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    useEffect(() => {
      const init = async () => {
        const result = await getPokemons({
          page: 1,
          pageSize: 5
        });
        setPokemons(result.results);
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
    return <QueryClientProvider client={queryClient}>
        <VirtualizedTableComponent<Pokemon> id={id} ariaLabel="List of pokemons" classNameWrapperTable="overflow-visible" data={pokemons} columns={columns} showPagination={true} totalItems={pokemons.length} />
      </QueryClientProvider>;
  }
}`,...T.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
        headerClassName: 'w-37.5',
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
}`,...k.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const id = useId();
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    useDarkTheme();
    useEffect(() => {
      const init = async () => {
        const result = await getPokemons({
          page: 1,
          pageSize: DEFAULT_PAGE_SIZE
        });
        setPokemons(result.results);
      };
      init();
    }, []);
    return <QueryClientProvider client={queryClient}>
        <VirtualizedTableComponent<Pokemon> id={id} ariaLabel="List of pokemons" data={pokemons} columns={columns} headerContent={<div className="flex w-full items-center justify-between">
              <span>Usage for billing period 1 - 31 March 2026</span>
              <span className="font-semibold">$0.00</span>
            </div>} />
      </QueryClientProvider>;
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'With React Query default retry (3 attempts) the errorState appears after retries are exhausted; pass \`queryOptions={{ retry: false }}\` to show it immediately. A background refetch failure keeps the current rows visible.'
      }
    }
  },
  render: () => {
    const id = useId();
    useDarkTheme();
    const fetchWithError = useCallback(async () => {
      await new Promise(resolve => setTimeout(resolve, 800));
      throw new Error('Failed to load pokemons');
    }, []);
    return <QueryClientProvider client={queryClient}>
        <VirtualizedTableComponent<Pokemon> id={id} ariaLabel="List of pokemons" data={[]} columns={columns} fetchData={fetchWithError} queryOptions={{
        retry: false
      }} errorState={error => <div className="flex flex-col items-center gap-2 py-12">
              <Typography variant="body2" className="font-medium dark:text-metal-50">
                Something went wrong
              </Typography>
              <Typography variant="body3" className="text-gray-500 dark:text-metal-400">
                {error.message}
              </Typography>
            </div>} />
      </QueryClientProvider>;
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'The scroll container (classNameScrollContainer) wraps the table and the pagination bar so both scroll together; the filter row stays fixed to the container width. Filter dropdowns always render in a portal, and the page-size dropdown does so automatically when classNameScrollContainer is set, so the overflow container never clips them.'
      }
    }
  },
  render: () => {
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
    useDarkTheme();
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
    if (data.length === 0) {
      return <div>Loading...</div>;
    }
    return <QueryClientProvider client={queryClient}>
        <div className="max-w-3xl">
          <VirtualizedTableComponent<Pokemon> id={id} ariaLabel="List of pokemons" data={data} columns={columns} classNameTable="min-w-300" classNameScrollContainer="overflow-x-auto contain-inline-size" showPagination={true} pageSizes={[5, 10, 20, 30, 50]} showFilter showFilterInput showResetButton filterSearchPlaceholder="Search pokemons..." filters={args.filters} fetchData={getNewData} totalItems={totalItemsCount} />
        </div>
      </QueryClientProvider>;
  }
}`,...N.parameters?.docs?.source}}},P=[`Default`,`PaginationWithFewItems`,`ExpandableRows`,`ExpandableRowsWithExternalTrigger`,`HeaderContent`,`ErrorState`,`HorizontalScrollWithFilters`]}))();export{w as Default,M as ErrorState,D as ExpandableRows,k as ExpandableRowsWithExternalTrigger,j as HeaderContent,N as HorizontalScrollWithFilters,T as PaginationWithFewItems,P as __namedExportsOrder,b as default};