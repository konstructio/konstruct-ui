import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-D9T3pWpr.js";import{t as r}from"./jsx-runtime-BPpv9Zq8.js";import{n as i,t as a}from"./Typography-C2z_awef.js";import{S as o,t as s,u as c}from"./lucide-react-BBNbICxp.js";import{n as l,t as u}from"./Checkbox-EBjCxftF.js";import{n as d,t as f}from"./AlertDialog-Y_0GBd_N.js";import{c as p,i as m,n as h,o as g,r as _,t as v}from"./VirtualizedTable-DiVtpieQ.js";import{n as y,t as b}from"./mocks-CO4A2VkM.js";var x,S,C,w,T,E,D,O,k,A,j,M,N,P;t((()=>{_(),s(),x=e(n(),1),d(),l(),i(),b(),p(),h(),S=r(),C={title:`In Review/VirtualizedTable/Light`,component:v},w=new g,T=[{header:`Id`,accessorKey:`id`,meta:{headerClassName:`whitespace-nowrap w-0`}},{header:`Name`,accessorKey:`name`,cell:e=>(0,S.jsx)(v.TruncateText,{...e,value:`${e.getValue().charAt(0).toUpperCase()}${e.getValue().slice(1)}`})},{header:`Type`,accessorKey:`type`,cell:e=>(0,S.jsx)(v.TruncateText,{...e,value:`${e.getValue().charAt(0).toUpperCase()}${e.getValue().slice(1)}`})},{header:`Height`,accessorKey:`height`},{header:`Weight`,accessorKey:`weight`},{header:`Ability`,accessorKey:`ability`,cell:e=>(0,S.jsx)(v.TruncateText,{...e,value:`${e.getValue().charAt(0).toUpperCase()}${e.getValue().slice(1)}`})},{id:`actions`,enableSorting:!1,enableResizing:!1,cell:e=>(0,S.jsx)(v.Actions,{...e,actions:[{component:f,componentProps:{className:`w-full hover:no-underline hover:bg-gray-50 hover:text-slate-800 font-normal`,buttonTriggerText:(0,S.jsxs)(`span`,{className:`text-blue-800 flex gap-2 w-full`,children:[(0,S.jsx)(c,{className:`w-4 h-4`}),`First Action`]}),showCancelButton:!1,title:(0,S.jsxs)(`div`,{className:`flex flex-col gap-4 items-center justify-center`,children:[(0,S.jsx)(`span`,{className:`p-3 rounded-full bg-green-600/15 w-12 h-12 flex items-center justify-center`,children:(0,S.jsx)(o,{className:`text-green-600`})}),(0,S.jsx)(a,{className:`font-normal text-slate-700`,children:`Cluster successfully deleted`})]}),isDescriptionChild:!0,description:(0,S.jsxs)(`div`,{className:`text-sm text-slate-800 flex flex-col gap-6`,children:[(0,S.jsxs)(`p`,{className:`text-center`,children:[`When you close the Cluster details drawer you can view the logs in`,` `,(0,S.jsx)(`span`,{className:`text-blue-600`,children:`Cluster archives`}),`.`]}),(0,S.jsx)(u,{defaultChecked:!0,label:`Don't show this message again`})]}),wrapperClassName:`max-w-[384px] gap-4`,buttonConfirm:{text:`Got it!`,className:`w-full mt-4`}},onClick:e=>{console.log(`Viewing details for ${JSON.stringify(e)}`)}},{label:`Second Action`,onClick:e=>{console.log(`Viewing details for ${JSON.stringify(e)}`)}}]}),header:()=>(0,S.jsx)(`span`,{className:`sr-only`,children:`Action Buttons`}),meta:{headerClassName:`w-[92px]`,className:`flex justify-center`}}],E={showFilter:!0,showResetButton:!0,showPagination:!0,isLoading:!1,ariaLabel:`List of pokemons`,pageSizes:[5,10,20,30,50],filters:[{key:`type`,label:`Type`,options:[{id:`grass`,label:`Grass`,variant:`success`},{id:`fire`,label:`Fire`,variant:`danger`},{id:`water`,label:`Water`,variant:`info`},{id:`bug`,label:`Bug`,variant:`warning`},{id:`normal`,label:`Normal`,variant:void 0}]},{type:`action`,label:`Export`,variant:`secondary`,onClick:()=>{console.log(`Export`)}},{key:`created`,type:`date`,label:`Created`},{key:`time`,type:`time`,label:`Time`,presets:[{label:`Last 15 mins`,value:new Date(Date.now()-900*1e3)},{label:`Last 30 mins`,value:new Date(Date.now()-1800*1e3)},{label:`Last 1 hour`,value:new Date(Date.now()-3600*1e3)},{label:`Last 6 hours`,value:new Date(Date.now()-360*60*1e3)}]},{type:`action`,label:`Delete Selected`,variant:`danger`,disabled:!0,onClick:()=>{console.log(`Delete`)}}]},D={args:E,render:e=>{let t=(0,x.useId)(),[{data:n,totalItemsCount:r},i]=(0,x.useState)({data:[],totalItemsCount:0});(0,x.useEffect)(()=>{(async()=>{let e=await y({page:1,pageSize:10});i({data:e.results,totalItemsCount:e.totalItemsCount})})()},[]);let a=(0,x.useCallback)(async({page:e=1,pageSize:t=10,termOfSearch:n=void 0,type:r=void 0})=>{let i=await y({page:e,pageSize:t,termOfSearch:n,type:r});return await new Promise(e=>setTimeout(e,1e3)),{data:i.results,totalItemsCount:i.totalItemsCount}},[y]);return n.length===0?(0,S.jsx)(`div`,{children:`Loading...`}):(0,S.jsx)(m,{client:w,children:(0,S.jsx)(v,{...e,id:t,data:n,columns:T,showPagination:!0,fetchData:a,totalItems:r})})}},O={render:()=>{let e=(0,x.useId)(),[t,n]=(0,x.useState)([]);return(0,x.useEffect)(()=>{(async()=>{let e=await y({page:1,pageSize:5});n(e.results)})()},[]),(0,S.jsx)(m,{client:w,children:(0,S.jsx)(v,{id:e,ariaLabel:`List of pokemons`,classNameWrapperTable:`overflow-visible`,data:t,columns:T,showPagination:!0,totalItems:t.length})})}},k=e=>e.map(e=>({...e,meta:{expandedRow:(0,S.jsxs)(`div`,{className:`flex flex-col gap-2 py-2`,children:[(0,S.jsxs)(a,{variant:`body3`,className:`text-gray-500`,children:[`Details for `,e.name]}),(0,S.jsxs)(`div`,{className:`flex gap-4`,children:[(0,S.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,S.jsx)(a,{variant:`body3`,className:`font-medium text-gray-700`,children:`Type`}),(0,S.jsx)(a,{variant:`body2`,children:e.type})]}),(0,S.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,S.jsx)(a,{variant:`body3`,className:`font-medium text-gray-700`,children:`Ability`}),(0,S.jsx)(a,{variant:`body2`,children:e.ability})]}),(0,S.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,S.jsx)(a,{variant:`body3`,className:`font-medium text-gray-700`,children:`Height / Weight`}),(0,S.jsxs)(a,{variant:`body2`,children:[e.height,` / `,e.weight]})]})]})]})}})),A={args:{...E,enableExpandedRow:!0,ariaLabel:`List of pokemons with expandable rows`},render:e=>{let t=(0,x.useId)(),[{data:n,totalItemsCount:r},i]=(0,x.useState)({data:[],totalItemsCount:0});(0,x.useEffect)(()=>{(async()=>{let e=await y({page:1,pageSize:10});i({data:k(e.results),totalItemsCount:e.totalItemsCount})})()},[]);let a=(0,x.useCallback)(async({page:e=1,pageSize:t=10,termOfSearch:n=void 0,type:r=void 0})=>{let i=await y({page:e,pageSize:t,termOfSearch:n,type:r});return await new Promise(e=>setTimeout(e,500)),{data:k(i.results),totalItemsCount:i.totalItemsCount}},[]);return n.length===0?(0,S.jsx)(`div`,{children:`Loading...`}):(0,S.jsx)(m,{client:w,children:(0,S.jsx)(v,{...e,enableHoverRow:!0,id:t,data:n,columns:T,showPagination:!0,fetchData:a,totalItems:r,enableExpandedRow:!0})})}},j={render:()=>{let e=(0,x.useId)(),[t,n]=(0,x.useState)([]);return(0,x.useEffect)(()=>{(async()=>{let e=await y({page:1,pageSize:10});n(e.results)})()},[]),(0,S.jsx)(m,{client:w,children:(0,S.jsx)(v,{id:e,ariaLabel:`List of pokemons`,data:t,columns:T,headerContent:(0,S.jsxs)(`div`,{className:`flex w-full items-center justify-between`,children:[(0,S.jsx)(`span`,{children:`Usage for billing period 1 - 31 March 2026`}),(0,S.jsx)(`span`,{className:`font-semibold`,children:`$0.00`})]})})})}},M={parameters:{docs:{description:{story:"With React Query default retry (3 attempts) the errorState appears after retries are exhausted; pass `queryOptions={{ retry: false }}` to show it immediately. A background refetch failure keeps the current rows visible."}}},render:()=>{let e=(0,x.useId)(),t=(0,x.useCallback)(async()=>{throw await new Promise(e=>setTimeout(e,800)),Error(`Failed to load pokemons`)},[]);return(0,S.jsx)(m,{client:w,children:(0,S.jsx)(v,{id:e,ariaLabel:`List of pokemons`,data:[],columns:T,fetchData:t,queryOptions:{retry:!1},errorState:e=>(0,S.jsxs)(`div`,{className:`flex flex-col items-center gap-2 py-12`,children:[(0,S.jsx)(a,{variant:`body2`,className:`font-medium`,children:`Something went wrong`}),(0,S.jsx)(a,{variant:`body3`,className:`text-gray-500`,children:e.message})]})})})}},N={parameters:{docs:{description:{story:`The scroll container (classNameScrollContainer) wraps the table and the pagination bar so both scroll together; the filter row stays fixed to the container width. Filter dropdowns always render in a portal, and the page-size dropdown does so automatically when classNameScrollContainer is set, so the overflow container never clips them.`}}},render:()=>{let e=(0,x.useId)(),[{data:t,totalItemsCount:n},r]=(0,x.useState)({data:[],totalItemsCount:0});(0,x.useEffect)(()=>{(async()=>{let e=await y({page:1,pageSize:10});r({data:e.results,totalItemsCount:e.totalItemsCount})})()},[]);let i=(0,x.useCallback)(async({page:e=1,pageSize:t=10,termOfSearch:n=void 0,type:r=void 0})=>{let i=await y({page:e,pageSize:t,termOfSearch:n,type:r});return await new Promise(e=>setTimeout(e,500)),{data:i.results,totalItemsCount:i.totalItemsCount}},[]);return t.length===0?(0,S.jsx)(`div`,{children:`Loading...`}):(0,S.jsx)(m,{client:w,children:(0,S.jsx)(`div`,{className:`max-w-3xl`,children:(0,S.jsx)(v,{id:e,ariaLabel:`List of pokemons`,data:t,columns:T,classNameTable:`min-w-[1200px]`,classNameScrollContainer:`overflow-x-auto contain-inline-size`,showPagination:!0,pageSizes:[5,10,20,30,50],showFilter:!0,showFilterInput:!0,showResetButton:!0,filterSearchPlaceholder:`Search pokemons...`,filters:E.filters,fetchData:i,totalItems:n})})})}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
    return <QueryClientProvider client={queryClient}>
        <VirtualizedTableComponent<Pokemon> id={id} ariaLabel="List of pokemons" classNameWrapperTable="overflow-visible" data={pokemons} columns={columns} showPagination={true} totalItems={pokemons.length} />
      </QueryClientProvider>;
  }
}`,...O.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const id = useId();
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
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
    const fetchWithError = useCallback(async () => {
      await new Promise(resolve => setTimeout(resolve, 800));
      throw new Error('Failed to load pokemons');
    }, []);
    return <QueryClientProvider client={queryClient}>
        <VirtualizedTableComponent<Pokemon> id={id} ariaLabel="List of pokemons" data={[]} columns={columns} fetchData={fetchWithError} queryOptions={{
        retry: false
      }} errorState={error => <div className="flex flex-col items-center gap-2 py-12">
              <Typography variant="body2" className="font-medium">
                Something went wrong
              </Typography>
              <Typography variant="body3" className="text-gray-500">
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
          <VirtualizedTableComponent<Pokemon> id={id} ariaLabel="List of pokemons" data={data} columns={columns} classNameTable="min-w-[1200px]" classNameScrollContainer="overflow-x-auto contain-inline-size" showPagination={true} pageSizes={[5, 10, 20, 30, 50]} showFilter showFilterInput showResetButton filterSearchPlaceholder="Search pokemons..." filters={args.filters} fetchData={getNewData} totalItems={totalItemsCount} />
        </div>
      </QueryClientProvider>;
  }
}`,...N.parameters?.docs?.source}}},P=[`Default`,`PaginationWithFewItems`,`ExpandableRows`,`HeaderContent`,`ErrorState`,`HorizontalScrollWithFilters`]}))();export{D as Default,M as ErrorState,A as ExpandableRows,j as HeaderContent,N as HorizontalScrollWithFilters,O as PaginationWithFewItems,P as __namedExportsOrder,C as default};