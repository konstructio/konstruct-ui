import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,t as i}from"./Typography-Dr4qxqZo.js";import{n as a,t as o}from"./check-C99kvo8k.js";import{a as s,c,i as l,l as u,n as d,o as f,r as p,s as m,t as h}from"./VirtualizedTable-vkfIru0o.js";import{n as g,t as _}from"./Checkbox-CgXEBpW7.js";import{n as v,t as y}from"./AlertDialog-Cy5mn1x0.js";import{n as b,t as x}from"./Button-DBH2wbJQ.js";import{n as S,t as C}from"./pokemon.repository-L228hEnR.js";var w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z;function B(){return(B=e((()=>{l(),f(),a(),u(),w=t(),v(),b(),g(),r(),S(),m(),d(),T=n(),E={title:`In Review/VirtualizedTable/Light`,component:h},D=new p,O=(e=!1)=>[{header:`Id`,accessorKey:`id`,meta:{headerClassName:`whitespace-nowrap w-0`}},{header:`Name`,accessorKey:`name`,cell:e=>(0,T.jsx)(h.TruncateText,{...e,value:`${e.getValue().charAt(0).toUpperCase()}${e.getValue().slice(1)}`})},{header:`Type`,accessorKey:`type`,cell:e=>(0,T.jsx)(h.TruncateText,{...e,value:`${e.getValue().charAt(0).toUpperCase()}${e.getValue().slice(1)}`})},{header:`Height`,accessorKey:`height`},{header:`Weight`,accessorKey:`weight`},{header:`Ability`,accessorKey:`ability`,cell:e=>(0,T.jsx)(h.TruncateText,{...e,value:`${e.getValue().charAt(0).toUpperCase()}${e.getValue().slice(1)}`})},{id:`actions`,enableSorting:!1,enableResizing:!1,cell:t=>(0,T.jsx)(h.Actions,{...t,isPortal:e,actions:[{component:y,componentProps:{className:`w-full hover:no-underline hover:bg-gray-50 hover:text-slate-800 font-normal`,buttonTriggerText:(0,T.jsxs)(`span`,{className:`text-blue-800 flex gap-2 w-full`,children:[(0,T.jsx)(c,{className:`w-4 h-4`}),`First Action`]}),showCancelButton:!1,title:(0,T.jsxs)(`div`,{className:`flex flex-col gap-4 items-center justify-center`,children:[(0,T.jsx)(`span`,{className:`p-3 rounded-full bg-green-600/15 w-12 h-12 flex items-center justify-center`,children:(0,T.jsx)(o,{className:`text-green-600`})}),(0,T.jsx)(i,{className:`font-normal text-slate-700`,children:`Cluster successfully deleted`})]}),isDescriptionChild:!0,description:(0,T.jsxs)(`div`,{className:`text-sm text-slate-800 flex flex-col gap-6`,children:[(0,T.jsxs)(`p`,{className:`text-center`,children:[`When you close the Cluster details drawer you can view the logs in`,` `,(0,T.jsx)(`span`,{className:`text-blue-600`,children:`Cluster archives`}),`.`]}),(0,T.jsx)(_,{defaultChecked:!0,label:`Don't show this message again`})]}),wrapperClassName:`max-w-96 gap-4`,buttonConfirm:{text:`Got it!`,className:`w-full mt-4`}},onClick:e=>{console.log(`Viewing details for ${JSON.stringify(e)}`)}},{label:`Second Action`,onClick:e=>{console.log(`Viewing details for ${JSON.stringify(e)}`)}}]}),header:()=>(0,T.jsx)(`span`,{className:`sr-only`,children:`Action Buttons`}),meta:{headerClassName:`w-23`,className:`flex justify-center`}}],k=O(),A={showFilter:!0,showResetButton:!0,showPagination:!0,isLoading:!1,ariaLabel:`List of pokemons`,pageSizes:[5,10,20,30,50],filters:[{key:`type`,label:`Type`,options:[{id:`grass`,label:`Grass`,variant:`success`},{id:`fire`,label:`Fire`,variant:`danger`},{id:`water`,label:`Water`,variant:`info`},{id:`bug`,label:`Bug`,variant:`warning`},{id:`normal`,label:`Normal`,variant:void 0}]},{type:`action`,label:`Export`,variant:`secondary`,onClick:()=>{console.log(`Export`)}},{key:`created`,type:`date`,label:`Created`},{key:`time`,type:`time`,label:`Time`,presets:[{label:`Last 15 mins`,value:new Date(Date.now()-9e5)},{label:`Last 30 mins`,value:new Date(Date.now()-18e5)},{label:`Last 1 hour`,value:new Date(Date.now()-36e5)},{label:`Last 6 hours`,value:new Date(Date.now()-216e5)}]},{type:`action`,label:`Delete Selected`,variant:`danger`,disabled:!0,onClick:()=>{console.log(`Delete`)}}]},j={args:A,render:e=>{let t=(0,w.useId)(),[{data:n,totalItemsCount:r},i]=(0,w.useState)({data:[],totalItemsCount:0});(0,w.useEffect)(()=>{(async()=>{let e=await C({page:1,pageSize:10});i({data:e.results,totalItemsCount:e.totalItemsCount})})()},[]);let a=(0,w.useCallback)(async({page:e=1,pageSize:t=10,termOfSearch:n=void 0,type:r=void 0})=>{let i=await C({page:e,pageSize:t,termOfSearch:n,type:r});return await new Promise(e=>setTimeout(e,1e3)),{data:i.results,totalItemsCount:i.totalItemsCount}},[C]);return n.length===0?(0,T.jsx)(`div`,{children:`Loading...`}):(0,T.jsx)(s,{client:D,children:(0,T.jsx)(h,{...e,id:t,data:n,columns:k,showPagination:!0,fetchData:a,totalItems:r})})}},M={render:()=>{let e=(0,w.useId)(),[t,n]=(0,w.useState)([]);return(0,w.useEffect)(()=>{(async()=>{let e=await C({page:1,pageSize:5});n(e.results)})()},[]),(0,T.jsx)(s,{client:D,children:(0,T.jsx)(h,{id:e,ariaLabel:`List of pokemons`,classNameWrapperTable:`overflow-visible`,data:t,columns:k,showPagination:!0,totalItems:t.length})})}},N=e=>e.map(e=>({...e,meta:{expandedRow:(0,T.jsxs)(`div`,{className:`flex flex-col gap-2 py-2`,children:[(0,T.jsxs)(i,{variant:`body3`,className:`text-gray-500`,children:[`Details for `,e.name]}),(0,T.jsxs)(`div`,{className:`flex gap-4`,children:[(0,T.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,T.jsx)(i,{variant:`body3`,className:`font-medium text-gray-700`,children:`Type`}),(0,T.jsx)(i,{variant:`body2`,children:e.type})]}),(0,T.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,T.jsx)(i,{variant:`body3`,className:`font-medium text-gray-700`,children:`Ability`}),(0,T.jsx)(i,{variant:`body2`,children:e.ability})]}),(0,T.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,T.jsx)(i,{variant:`body3`,className:`font-medium text-gray-700`,children:`Height / Weight`}),(0,T.jsxs)(i,{variant:`body2`,children:[e.height,` / `,e.weight]})]})]})]})}})),P={args:{...A,enableExpandedRow:!0,ariaLabel:`List of pokemons with expandable rows`},render:e=>{let t=(0,w.useId)(),[{data:n,totalItemsCount:r},i]=(0,w.useState)({data:[],totalItemsCount:0});(0,w.useEffect)(()=>{(async()=>{let e=await C({page:1,pageSize:10});i({data:N(e.results),totalItemsCount:e.totalItemsCount})})()},[]);let a=(0,w.useCallback)(async({page:e=1,pageSize:t=10,termOfSearch:n=void 0,type:r=void 0})=>{let i=await C({page:e,pageSize:t,termOfSearch:n,type:r});return await new Promise(e=>setTimeout(e,500)),{data:N(i.results),totalItemsCount:i.totalItemsCount}},[]);return n.length===0?(0,T.jsx)(`div`,{children:`Loading...`}):(0,T.jsx)(s,{client:D,children:(0,T.jsx)(h,{...e,enableHoverRow:!0,id:t,data:n,columns:k,showPagination:!0,fetchData:a,totalItems:r,enableExpandedRow:!0})})}},F={render:()=>{let e=(0,w.useId)(),[t,n]=(0,w.useState)([]);return(0,w.useEffect)(()=>{(async()=>{let e=await C({page:1,pageSize:10});n(e.results)})()},[]),(0,T.jsx)(s,{client:D,children:(0,T.jsx)(h,{id:e,ariaLabel:`List of pokemons`,data:t,columns:k,headerContent:(0,T.jsxs)(`div`,{className:`flex w-full items-center justify-between`,children:[(0,T.jsx)(`span`,{children:`Usage for billing period 1 - 31 March 2026`}),(0,T.jsx)(`span`,{className:`font-semibold`,children:`$0.00`})]})})})}},I={parameters:{docs:{description:{story:"With React Query default retry (3 attempts) the errorState appears after retries are exhausted; pass `queryOptions={{ retry: false }}` to show it immediately. A background refetch failure keeps the current rows visible."}}},render:()=>{let e=(0,w.useId)(),t=(0,w.useCallback)(async()=>{throw await new Promise(e=>setTimeout(e,800)),Error(`Failed to load pokemons`)},[]);return(0,T.jsx)(s,{client:D,children:(0,T.jsx)(h,{id:e,ariaLabel:`List of pokemons`,data:[],columns:k,fetchData:t,queryOptions:{retry:!1},errorState:e=>(0,T.jsxs)(`div`,{className:`flex flex-col items-center gap-2 py-12`,children:[(0,T.jsx)(i,{variant:`body2`,className:`font-medium`,children:`Something went wrong`}),(0,T.jsx)(i,{variant:`body3`,className:`text-gray-500`,children:e.message})]})})})}},L={parameters:{docs:{description:{story:"The scroll container (classNameScrollContainer) wraps the table and the pagination bar so both scroll together; the filter row stays fixed to the container width. Filter dropdowns always render in a portal, and the page-size dropdown does so automatically when classNameScrollContainer is set, so the overflow container never clips them. Row actions opt in with `isPortal` so the menu floats above the scroll container instead of being clipped by it."}}},render:()=>{let e=(0,w.useId)(),[{data:t,totalItemsCount:n},r]=(0,w.useState)({data:[],totalItemsCount:0});(0,w.useEffect)(()=>{(async()=>{let e=await C({page:1,pageSize:10});r({data:e.results,totalItemsCount:e.totalItemsCount})})()},[]);let i=(0,w.useCallback)(async({page:e=1,pageSize:t=10,termOfSearch:n=void 0,type:r=void 0})=>{let i=await C({page:e,pageSize:t,termOfSearch:n,type:r});return await new Promise(e=>setTimeout(e,500)),{data:i.results,totalItemsCount:i.totalItemsCount}},[]);return t.length===0?(0,T.jsx)(`div`,{children:`Loading...`}):(0,T.jsx)(s,{client:D,children:(0,T.jsx)(`div`,{className:`max-w-3xl`,children:(0,T.jsx)(h,{id:e,ariaLabel:`List of pokemons`,data:t,columns:O(!0),classNameTable:`min-w-300`,classNameScrollContainer:`overflow-x-auto contain-inline-size`,showPagination:!0,pageSizes:[5,10,20,30,50],showFilter:!0,showFilterInput:!0,showResetButton:!0,filterSearchPlaceholder:`Search pokemons...`,filters:A.filters,fetchData:i,totalItems:n})})})}},R={render:()=>{let e=(0,w.useId)(),t=(0,w.useCallback)(async({page:e=1,pageSize:t=10,termOfSearch:n=void 0})=>{let r=await C({page:e,pageSize:t,termOfSearch:n});return await new Promise(e=>{setTimeout(e,1e3)}),{data:r.results,totalItemsCount:r.totalItemsCount}},[]);return(0,T.jsx)(s,{client:D,children:(0,T.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,T.jsx)(`div`,{className:`flex justify-end`,children:(0,T.jsx)(x,{onClick:()=>{h.Events.sendRefreshEvent(e)},children:`Refresh`})}),(0,T.jsx)(h,{id:e,ariaLabel:`Manual refresh table`,columns:k,data:[],showPagination:!0,fetchData:t,totalItems:0})]})})}},z=[`Default`,`PaginationWithFewItems`,`ExpandableRows`,`HeaderContent`,`ErrorState`,`HorizontalScrollWithFilters`,`ManualRefresh`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'The scroll container (classNameScrollContainer) wraps the table and the pagination bar so both scroll together; the filter row stays fixed to the container width. Filter dropdowns always render in a portal, and the page-size dropdown does so automatically when classNameScrollContainer is set, so the overflow container never clips them. Row actions opt in with \`isPortal\` so the menu floats above the scroll container instead of being clipped by it.'
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
          <VirtualizedTableComponent<Pokemon> id={id} ariaLabel="List of pokemons" data={data} columns={getColumns(true)} classNameTable="min-w-300" classNameScrollContainer="overflow-x-auto contain-inline-size" showPagination={true} pageSizes={[5, 10, 20, 30, 50]} showFilter showFilterInput showResetButton filterSearchPlaceholder="Search pokemons..." filters={args.filters} fetchData={getNewData} totalItems={totalItemsCount} />
        </div>
      </QueryClientProvider>;
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
    const id = useId();
    const getNewData = useCallback(async ({
      page = 1,
      pageSize = DEFAULT_PAGE_SIZE,
      termOfSearch = undefined
    }: PokemonResponse) => {
      const result = await getPokemons({
        page,
        pageSize,
        termOfSearch
      });
      await new Promise(resolve => {
        setTimeout(resolve, 1000);
      });
      return {
        data: result.results,
        totalItemsCount: result.totalItemsCount
      };
    }, []);
    return <QueryClientProvider client={queryClient}>
        <div className="flex flex-col gap-4">
          <div className="flex justify-end">
            <Button onClick={() => {
            VirtualizedTableComponent.Events.sendRefreshEvent(id);
          }}>
              Refresh
            </Button>
          </div>

          <VirtualizedTableComponent<Pokemon> id={id} ariaLabel="Manual refresh table" columns={columns} data={[]} showPagination={true} fetchData={getNewData} totalItems={0} />
        </div>
      </QueryClientProvider>;
  }
}`,...R.parameters?.docs?.source}}}})))()}B();export{j as Default,I as ErrorState,P as ExpandableRows,F as HeaderContent,L as HorizontalScrollWithFilters,R as ManualRefresh,M as PaginationWithFewItems,z as __namedExportsOrder,E as default};