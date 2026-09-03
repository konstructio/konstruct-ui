import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,t as i}from"./Typography-Dr4qxqZo.js";import{a,c as o,i as s,l as c,n as l,o as u,r as d,s as f,t as p}from"./VirtualizedTable-vkfIru0o.js";import{n as m,t as h}from"./Button-DBH2wbJQ.js";import{n as g,t as _}from"./pokemon.repository-L228hEnR.js";var v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L;function R(){return(R=e((()=>{s(),u(),c(),v=t(),m(),r(),g(),f(),l(),y=n(),b={title:`In Review/VirtualizedTable/Dark`,component:p},x=new d,S=[`created`,`updated`,`expires`,`deleted`],C=(()=>{let e=new Date;return new Date(e.getFullYear(),e.getMonth(),e.getDate())})(),w=[{header:`Id`,accessorKey:`id`,meta:{headerClassName:`whitespace-nowrap w-0`}},{header:`Name`,accessorKey:`name`,cell:e=>(0,y.jsx)(p.TruncateText,{...e,value:`${e.getValue().charAt(0).toUpperCase()}${e.getValue().slice(1)}`})},{header:`Type`,accessorKey:`type`,cell:e=>(0,y.jsx)(p.TruncateText,{...e,value:`${e.getValue().charAt(0).toUpperCase()}${e.getValue().slice(1)}`})},{header:`Height`,accessorKey:`height`},{header:`Weight`,accessorKey:`weight`},{header:`Ability`,accessorKey:`ability`,cell:e=>(0,y.jsx)(p.TruncateText,{...e,value:`${e.getValue().charAt(0).toUpperCase()}${e.getValue().slice(1)}`})},{id:`actions`,enableSorting:!1,enableResizing:!1,cell:e=>(0,y.jsx)(p.Actions,{...e,actions:[{label:(0,y.jsxs)(`span`,{className:`flex items-center gap-2`,children:[(0,y.jsx)(o,{className:`w-4 h-4`}),`First Action`]}),onClick:e=>{console.log(`Viewing details for ${JSON.stringify(e)}`)},className:`text-slate-800`},{label:`Second Action`,onClick:e=>{console.log(`Viewing details for ${JSON.stringify(e)}`)}}]}),header:()=>(0,y.jsx)(`span`,{className:`sr-only`,children:`Action Buttons`}),meta:{headerClassName:`w-23`,className:`flex justify-center`}}],T={showFilter:!0,showResetButton:!0,showPagination:!0,isLoading:!1,ariaLabel:`List of pokemons`,pageSizes:[5,10,20,30,50],filters:[{key:`type`,label:`Type`,options:[{id:`grass`,label:`Grass`,variant:`success`},{id:`fire`,label:`Fire`,variant:`danger`},{id:`water`,label:`Water`,variant:`info`},{id:`bug`,label:`Bug`,variant:`warning`},{id:`normal`,label:`Normal`,variant:void 0}]},{type:`action`,label:`Export`,variant:`secondary`,onClick:()=>{console.log(`Export`)}},{key:`created`,type:`date`,label:`Created`},{key:`time`,type:`time`,label:`Time`,showTimePicker:!1,presets:[{label:`Last 15 mins`,value:new Date(Date.now()-9e5)},{label:`Last 30 mins`,value:new Date(Date.now()-18e5)},{label:`Last 1 hour`,value:new Date(Date.now()-36e5)},{label:`Last 6 hours`,value:new Date(Date.now()-216e5)}]}]},E={args:T,render:e=>{let t=(0,v.useId)(),[{data:n,totalItemsCount:r},i]=(0,v.useState)({data:[],totalItemsCount:0});(0,v.useEffect)(()=>{(async()=>{let e=await _({page:1,pageSize:10});i({data:e.results,totalItemsCount:e.totalItemsCount})})()},[]),(0,v.useEffect)(()=>(document.body.setAttribute(`data-theme`,`dark`),document.body.classList.add(`bg-metal-900`),()=>{document.body.removeAttribute(`data-theme`),document.body.classList.remove(`bg-metal-900`)}),[]);let o=(0,v.useCallback)(async({page:e=1,pageSize:t=10,termOfSearch:n=void 0,type:r=void 0})=>{let i=await _({page:e,pageSize:t,termOfSearch:n,type:r});return await new Promise(e=>setTimeout(e,1e3)),{data:i.results,totalItemsCount:i.totalItemsCount}},[_]);return n.length===0?(0,y.jsx)(`div`,{children:`Loading...`}):(0,y.jsx)(a,{client:x,children:(0,y.jsx)(p,{...e,id:t,data:n,columns:w,showPagination:!0,fetchData:o,totalItems:r})})}},D={render:()=>{let e=(0,v.useId)(),[t,n]=(0,v.useState)([]);return(0,v.useEffect)(()=>{(async()=>{let e=await _({page:1,pageSize:5});n(e.results)})()},[]),(0,v.useEffect)(()=>(document.body.setAttribute(`data-theme`,`dark`),document.body.classList.add(`bg-metal-900`),()=>{document.body.removeAttribute(`data-theme`),document.body.classList.remove(`bg-metal-900`)}),[]),(0,y.jsx)(a,{client:x,children:(0,y.jsx)(p,{id:e,ariaLabel:`List of pokemons`,classNameWrapperTable:`overflow-visible`,data:t,columns:w,showPagination:!0,totalItems:t.length})})}},O=e=>e.map(e=>({...e,meta:{expandedRow:(0,y.jsxs)(`div`,{className:`flex flex-col gap-2 py-2`,children:[(0,y.jsxs)(i,{variant:`body3`,className:`text-metal-400`,children:[`Details for `,e.name]}),(0,y.jsxs)(`div`,{className:`flex gap-4`,children:[(0,y.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,y.jsx)(i,{variant:`body3`,className:`font-medium text-metal-300`,children:`Type`}),(0,y.jsx)(i,{variant:`body2`,children:e.type})]}),(0,y.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,y.jsx)(i,{variant:`body3`,className:`font-medium text-metal-300`,children:`Ability`}),(0,y.jsx)(i,{variant:`body2`,children:e.ability})]}),(0,y.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,y.jsx)(i,{variant:`body3`,className:`font-medium text-metal-300`,children:`Height / Weight`}),(0,y.jsxs)(i,{variant:`body2`,children:[e.height,` / `,e.weight]})]})]})]})}})),k={args:{...T,enableExpandedRow:!0,ariaLabel:`List of pokemons with expandable rows`},render:e=>{let t=(0,v.useId)(),[{data:n,totalItemsCount:r},i]=(0,v.useState)({data:[],totalItemsCount:0});(0,v.useEffect)(()=>{(async()=>{let e=await _({page:1,pageSize:10});i({data:O(e.results),totalItemsCount:e.totalItemsCount})})()},[]),(0,v.useEffect)(()=>(document.body.setAttribute(`data-theme`,`dark`),document.body.classList.add(`bg-metal-900`),()=>{document.body.removeAttribute(`data-theme`),document.body.classList.remove(`bg-metal-900`)}),[]);let o=(0,v.useCallback)(async({page:e=1,pageSize:t=10,termOfSearch:n=void 0,type:r=void 0})=>{let i=await _({page:e,pageSize:t,termOfSearch:n,type:r});return await new Promise(e=>setTimeout(e,500)),{data:O(i.results),totalItemsCount:i.totalItemsCount}},[]);return n.length===0?(0,y.jsx)(`div`,{children:`Loading...`}):(0,y.jsx)(a,{client:x,children:(0,y.jsx)(p,{...e,enableHoverRow:!0,id:t,data:n,columns:w,showPagination:!0,fetchData:o,totalItems:r,enableExpandedRow:!0})})}},A=`external-trigger-table`,j={args:{...T,enableExpandedRow:!0,ariaLabel:`List of pokemons with external expand trigger`},render:e=>{let[{data:t,totalItemsCount:n},r]=(0,v.useState)({data:[],totalItemsCount:0}),[o,s]=(0,v.useState)({}),c=e=>{s(t=>{let n=!t[e];return n?p.Events.sendExpandRowEvent(A,e):p.Events.sendCollapseRowEvent(A,e),{...t,[e]:n}})};(0,v.useEffect)(()=>{(async()=>{let e=await _({page:1,pageSize:10});r({data:e.results,totalItemsCount:e.totalItemsCount})})()},[]),(0,v.useEffect)(()=>(document.body.setAttribute(`data-theme`,`dark`),document.body.classList.add(`bg-metal-900`),()=>{document.body.removeAttribute(`data-theme`),document.body.classList.remove(`bg-metal-900`)}),[]);let l=(0,v.useCallback)(async({page:e=1,pageSize:t=10,termOfSearch:n=void 0,type:r=void 0})=>{let i=await _({page:e,pageSize:t,termOfSearch:n,type:r});return await new Promise(e=>setTimeout(e,500)),{data:i.results,totalItemsCount:i.totalItemsCount}},[]),u=[...w.filter(e=>e.id!==`actions`),{id:`select-action`,enableSorting:!1,enableResizing:!1,cell:({row:e})=>(0,y.jsx)(h,{variant:o[e.id]?`primary`:`secondary`,appearance:`compact`,onClick:()=>c(e.id),children:o[e.id]?`Remove`:`Add`}),header:()=>(0,y.jsx)(`span`,{className:`sr-only`,children:`Select`}),meta:{headerClassName:`w-37.5`,className:`flex justify-center h-12 items-center`}}];return t.length===0?(0,y.jsx)(`div`,{children:`Loading...`}):(0,y.jsx)(a,{client:x,children:(0,y.jsx)(p,{...e,enableHoverRow:!0,id:A,data:t,getRowId:e=>String(e.id),columns:u,showPagination:!0,fetchData:l,totalItems:n,enableExpandedRow:!0,keepExpandColumnVisible:o,renderExpandedRow:e=>(0,y.jsxs)(`div`,{className:`flex flex-col gap-2 py-2`,children:[(0,y.jsxs)(i,{variant:`body3`,className:`text-metal-400`,children:[`Configuration for `,e.name]}),(0,y.jsxs)(`div`,{className:`flex gap-4`,children:[(0,y.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,y.jsx)(i,{variant:`body3`,className:`font-medium text-metal-300`,children:`Type`}),(0,y.jsx)(i,{variant:`body2`,children:e.type})]}),(0,y.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,y.jsx)(i,{variant:`body3`,className:`font-medium text-metal-300`,children:`Ability`}),(0,y.jsx)(i,{variant:`body2`,children:e.ability})]}),(0,y.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,y.jsx)(i,{variant:`body3`,className:`font-medium text-metal-300`,children:`Height / Weight`}),(0,y.jsxs)(i,{variant:`body2`,children:[e.height,` /`,` `,e.weight]})]})]})]})})})}},M=()=>{(0,v.useEffect)(()=>(document.body.setAttribute(`data-theme`,`dark`),document.body.classList.add(`bg-metal-900`),()=>{document.body.removeAttribute(`data-theme`),document.body.classList.remove(`bg-metal-900`)}),[])},N={render:()=>{let e=(0,v.useId)(),[t,n]=(0,v.useState)([]);return M(),(0,v.useEffect)(()=>{(async()=>{let e=await _({page:1,pageSize:10});n(e.results)})()},[]),(0,y.jsx)(a,{client:x,children:(0,y.jsx)(p,{id:e,ariaLabel:`List of pokemons`,data:t,columns:w,headerContent:(0,y.jsxs)(`div`,{className:`flex w-full items-center justify-between`,children:[(0,y.jsx)(`span`,{children:`Usage for billing period 1 - 31 March 2026`}),(0,y.jsx)(`span`,{className:`font-semibold`,children:`$0.00`})]})})})}},P={parameters:{docs:{description:{story:"With React Query default retry (3 attempts) the errorState appears after retries are exhausted; pass `queryOptions={{ retry: false }}` to show it immediately. A background refetch failure keeps the current rows visible."}}},render:()=>{let e=(0,v.useId)();M();let t=(0,v.useCallback)(async()=>{throw await new Promise(e=>setTimeout(e,800)),Error(`Failed to load pokemons`)},[]);return(0,y.jsx)(a,{client:x,children:(0,y.jsx)(p,{id:e,ariaLabel:`List of pokemons`,data:[],columns:w,fetchData:t,queryOptions:{retry:!1},errorState:e=>(0,y.jsxs)(`div`,{className:`flex flex-col items-center gap-2 py-12`,children:[(0,y.jsx)(i,{variant:`body2`,className:`font-medium dark:text-metal-50`,children:`Something went wrong`}),(0,y.jsx)(i,{variant:`body3`,className:`text-gray-500 dark:text-metal-400`,children:e.message})]})})})}},F={parameters:{docs:{description:{story:`The scroll container (classNameScrollContainer) wraps the table and the pagination bar so both scroll together; the filter row stays fixed to the container width. Filter dropdowns always render in a portal, and the page-size dropdown does so automatically when classNameScrollContainer is set, so the overflow container never clips them.`}}},render:()=>{let e=(0,v.useId)(),[{data:t,totalItemsCount:n},r]=(0,v.useState)({data:[],totalItemsCount:0});M(),(0,v.useEffect)(()=>{(async()=>{let e=await _({page:1,pageSize:10});r({data:e.results,totalItemsCount:e.totalItemsCount})})()},[]);let i=(0,v.useCallback)(async({page:e=1,pageSize:t=10,termOfSearch:n=void 0,type:r=void 0})=>{let i=await _({page:e,pageSize:t,termOfSearch:n,type:r});return await new Promise(e=>setTimeout(e,500)),{data:i.results,totalItemsCount:i.totalItemsCount}},[]);return t.length===0?(0,y.jsx)(`div`,{children:`Loading...`}):(0,y.jsx)(a,{client:x,children:(0,y.jsx)(`div`,{className:`max-w-3xl`,children:(0,y.jsx)(p,{id:e,ariaLabel:`List of pokemons`,data:t,columns:w,classNameTable:`min-w-300`,classNameScrollContainer:`overflow-x-auto contain-inline-size`,showPagination:!0,pageSizes:[5,10,20,30,50],showFilter:!0,showFilterInput:!0,showResetButton:!0,filterSearchPlaceholder:`Search pokemons...`,filters:T.filters,fetchData:i,totalItems:n})})})}},I={render:()=>{let e=(0,v.useId)(),t=864e5,n=(0,v.useCallback)(e=>{let n=(n,r)=>new Date(C.getTime()-e*r%n*t);return{created:n(49,1),updated:n(13,3),expires:n(120,7),deleted:n(400,11)}},[t]),r=(0,v.useMemo)(()=>[...w.filter(e=>e.id!==`actions`),...S.map(e=>({header:`${e.charAt(0).toUpperCase()}${e.slice(1)}`,accessorKey:e,cell:({row:t})=>t.original[e].toLocaleDateString(`en-GB`,{day:`numeric`,month:`short`,year:`numeric`})}))],[]),i=(0,v.useCallback)(async e=>{let{page:t=1,pageSize:r=10,termOfSearch:i}=e,{results:a}=await _({page:1,pageSize:1e3,termOfSearch:i}),o=a.map(e=>({...e,...n(e.id)}));S.forEach(t=>{let n=e[t];if(n?.from){let e=new Date(n.from);o=o.filter(n=>n[t]>=e)}if(n?.to){let e=new Date(n.to);o=o.filter(n=>n[t]<=e)}});let s=(Number(t)-1)*Number(r);return{data:o.slice(s,s+Number(r)),totalItemsCount:o.length}},[n]);return(0,v.useEffect)(()=>(document.body.setAttribute(`data-theme`,`dark`),document.body.classList.add(`bg-metal-900`),()=>{document.body.removeAttribute(`data-theme`),document.body.classList.remove(`bg-metal-900`)}),[]),(0,y.jsx)(a,{client:x,children:(0,y.jsx)(p,{id:e,data:[],columns:r,fetchData:i,showPagination:!0,totalItems:0,pageSizes:[10,20,50],showFilter:!0,showResetButton:!0,ariaLabel:`List of pokemons`,filters:[{key:`created`,type:`customDateRange`,label:`Created`,labelTimePeriod:`Created`,revealCalendarOnCustom:!0,applyOnPresetSelect:!0,numberOfMonths:1,showOutsideDays:!0,appliedRangeDisplay:`split`,maxDate:C},{key:`updated`,type:`customDateRange`,label:`Updated`,labelTimePeriod:`Updated`,revealCalendarOnCustom:!0,applyOnPresetSelect:!0,showCustomRange:!1},{key:`expires`,type:`customDateRange`,label:`Expires`,labelTimePeriod:`Expires`,revealCalendarOnCustom:!0,labelCustomRange:`Pick dates`,rollingPresets:[{label:`Past hour`,duration:`1h`},{label:`Past day`,duration:`1day`},{label:`Past week`,duration:`7days`},{label:`Past quarter`,duration:`3months`},{label:`Past year`,duration:`1year`}]},{key:`deleted`,type:`customDateRange`,label:`Deleted`,labelTimePeriod:`Deleted`,revealCalendarOnCustom:!0,applyOnPresetSelect:!0,navigationMode:`together`,dateDisplayFormat:`numeric`}]})})}},L=[`Default`,`PaginationWithFewItems`,`ExpandableRows`,`ExpandableRowsWithExternalTrigger`,`HeaderContent`,`ErrorState`,`HorizontalScrollWithFilters`,`CreatedDateRangeFilter`],E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    const id = useId();
    const DAY_MS = 24 * 60 * 60 * 1000;

    // The pokemon fixture carries no dates, so the story gives each row four —
    // spread deterministically over different spans, so the same id always
    // lands on the same days and every preset has something to cut.
    const datesOf = useCallback((pokemonId: number): Record<DateField, Date> => {
      const daysAgo = (span: number, salt: number) => new Date(startOfToday.getTime() - pokemonId * salt % span * DAY_MS);
      return {
        created: daysAgo(49, 1),
        updated: daysAgo(13, 3),
        expires: daysAgo(120, 7),
        deleted: daysAgo(400, 11)
      };
    }, [DAY_MS]);
    const columnsWithDates: ColumnDef<PokemonWithDates>[] = useMemo(() => [...(columns as ColumnDef<PokemonWithDates>[]).filter(column => column.id !== 'actions'), ...DATE_FIELDS.map<ColumnDef<PokemonWithDates>>(field => ({
      header: \`\${field.charAt(0).toUpperCase()}\${field.slice(1)}\`,
      accessorKey: field,
      cell: ({
        row
      }) => row.original[field].toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      })
    }))], []);
    const fetchData = useCallback(async (params: Record<string, unknown>) => {
      const {
        page = 1,
        pageSize = DEFAULT_PAGE_SIZE,
        termOfSearch
      } = params;
      const {
        results
      } = await getPokemons({
        page: 1,
        pageSize: 1000,
        termOfSearch: termOfSearch as string | undefined
      });
      let rows: PokemonWithDates[] = results.map(pokemon => ({
        ...pokemon,
        ...datesOf(pokemon.id)
      }));
      DATE_FIELDS.forEach(field => {
        const window = params[field] as {
          from?: string;
          to?: string;
        } | undefined;
        if (window?.from) {
          const from = new Date(window.from);
          rows = rows.filter(row => row[field] >= from);
        }
        if (window?.to) {
          const to = new Date(window.to);
          rows = rows.filter(row => row[field] <= to);
        }
      });
      const start = (Number(page) - 1) * Number(pageSize);
      return {
        data: rows.slice(start, start + Number(pageSize)),
        totalItemsCount: rows.length
      };
    }, [datesOf]);
    useEffect(() => {
      document.body.setAttribute('data-theme', 'dark');
      document.body.classList.add('bg-metal-900');
      return () => {
        document.body.removeAttribute('data-theme');
        document.body.classList.remove('bg-metal-900');
      };
    }, []);
    return <QueryClientProvider client={queryClient}>
        <VirtualizedTableComponent<PokemonWithDates> id={id} data={[]} columns={columnsWithDates} fetchData={fetchData} showPagination totalItems={0} pageSizes={[10, 20, 50]} showFilter showResetButton ariaLabel="List of pokemons" filters={[{
        key: 'created',
        type: 'customDateRange',
        label: 'Created',
        labelTimePeriod: 'Created',
        revealCalendarOnCustom: true,
        applyOnPresetSelect: true,
        numberOfMonths: 1,
        showOutsideDays: true,
        appliedRangeDisplay: 'split',
        maxDate: startOfToday
      }, {
        key: 'updated',
        type: 'customDateRange',
        label: 'Updated',
        labelTimePeriod: 'Updated',
        revealCalendarOnCustom: true,
        applyOnPresetSelect: true,
        showCustomRange: false
      }, {
        key: 'expires',
        type: 'customDateRange',
        label: 'Expires',
        labelTimePeriod: 'Expires',
        revealCalendarOnCustom: true,
        labelCustomRange: 'Pick dates',
        rollingPresets: [{
          label: 'Past hour',
          duration: '1h'
        }, {
          label: 'Past day',
          duration: '1day'
        }, {
          label: 'Past week',
          duration: '7days'
        }, {
          label: 'Past quarter',
          duration: '3months'
        }, {
          label: 'Past year',
          duration: '1year'
        }]
      }, {
        key: 'deleted',
        type: 'customDateRange',
        label: 'Deleted',
        labelTimePeriod: 'Deleted',
        revealCalendarOnCustom: true,
        applyOnPresetSelect: true,
        navigationMode: 'together',
        dateDisplayFormat: 'numeric'
      }]} />
      </QueryClientProvider>;
  }
}`,...I.parameters?.docs?.source},description:{story:`The date range filters from the Product Design System rendered in the table's
own filter row, one per synthetic date column, each in a different shape:
"Created" on a single-month calendar with each applied end in its own badge,
"Updated" with presets only, "Expires" with its own rolling windows confirmed
by hand, and "Deleted" moving both months as a pair with numeric inputs.

The table reloads through \`fetchData\`, which receives every applied window
under its filter's key, so picking a preset visibly narrows the rows.`,...I.parameters?.docs?.description}}}})))()}R();export{I as CreatedDateRangeFilter,E as Default,P as ErrorState,k as ExpandableRows,j as ExpandableRowsWithExternalTrigger,N as HeaderContent,F as HorizontalScrollWithFilters,D as PaginationWithFewItems,L as __namedExportsOrder,b as default};