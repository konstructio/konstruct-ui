import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{o as n,t as r}from"./iframe-BhrQdzJp.js";import{n as i,t as a}from"./Typography-CPsEMThR.js";import{f as o,o as s,t as c}from"./lucide-react-CZOK0dPz.js";import{n as l,t as u}from"./Checkbox-G33I1t5C.js";import{n as d,t as f}from"./AlertDialog-Bf0Q9uSR.js";import{a as p,i as m,n as h,o as g,r as _,t as v}from"./VirtualizedTable-CvTUIgg_.js";import{n as y,t as b}from"./mocks-CFZhwlqh.js";var x,S,C,w,T,E,D,O,k,A;e((()=>{_(),c(),x=t(n(),1),d(),l(),i(),b(),g(),h(),S=r(),C={title:`In Review/VirtualizedTable/Light`,component:v},w=new p,T=[{header:`Id`,accessorKey:`id`,meta:{headerClassName:`whitespace-nowrap w-0`}},{header:`Name`,accessorKey:`name`,cell:e=>(0,S.jsx)(v.TruncateText,{...e,value:`${e.getValue().charAt(0).toUpperCase()}${e.getValue().slice(1)}`})},{header:`Type`,accessorKey:`type`,cell:e=>(0,S.jsx)(v.TruncateText,{...e,value:`${e.getValue().charAt(0).toUpperCase()}${e.getValue().slice(1)}`})},{header:`Height`,accessorKey:`height`},{header:`Weight`,accessorKey:`weight`},{header:`Ability`,accessorKey:`ability`,cell:e=>(0,S.jsx)(v.TruncateText,{...e,value:`${e.getValue().charAt(0).toUpperCase()}${e.getValue().slice(1)}`})},{id:`actions`,enableSorting:!1,enableResizing:!1,cell:e=>(0,S.jsx)(v.Actions,{...e,actions:[{component:f,componentProps:{className:`w-full hover:no-underline hover:bg-gray-50 hover:text-slate-800 font-normal`,buttonTriggerText:(0,S.jsxs)(`span`,{className:`text-blue-800 flex gap-2 w-full`,children:[(0,S.jsx)(s,{className:`w-4 h-4`}),`First Action`]}),showCancelButton:!1,title:(0,S.jsxs)(`div`,{className:`flex flex-col gap-4 items-center justify-center`,children:[(0,S.jsx)(`span`,{className:`p-3 rounded-full bg-green-600/15 w-12 h-12 flex items-center justify-center`,children:(0,S.jsx)(o,{className:`text-green-600`})}),(0,S.jsx)(a,{className:`font-normal text-slate-700`,children:`Cluster successfully deleted`})]}),isDescriptionChild:!0,description:(0,S.jsxs)(`div`,{className:`text-sm text-slate-800 flex flex-col gap-6`,children:[(0,S.jsxs)(`p`,{className:`text-center`,children:[`When you close the Cluster details drawer you can view the logs in`,` `,(0,S.jsx)(`span`,{className:`text-blue-600`,children:`Cluster archives`}),`.`]}),(0,S.jsx)(u,{defaultChecked:!0,label:`Don't show this message again`})]}),wrapperClassName:`max-w-[384px] gap-4`,buttonConfirm:{text:`Got it!`,className:`w-full mt-4`}},onClick:e=>{console.log(`Viewing details for ${JSON.stringify(e)}`)}},{label:`Second Action`,onClick:e=>{console.log(`Viewing details for ${JSON.stringify(e)}`)}}]}),header:()=>(0,S.jsx)(`span`,{className:`sr-only`,children:`Action Buttons`}),meta:{headerClassName:`w-[92px]`,className:`flex justify-center`}}],E={showFilter:!0,showResetButton:!0,showPagination:!0,isLoading:!1,ariaLabel:`List of pokemons`,pageSizes:[5,10,20,30,50],filters:[{key:`type`,label:`Type`,options:[{id:`grass`,label:`Grass`,variant:`success`},{id:`fire`,label:`Fire`,variant:`danger`},{id:`water`,label:`Water`,variant:`info`},{id:`bug`,label:`Bug`,variant:`warning`},{id:`normal`,label:`Normal`,variant:void 0}]},{type:`action`,label:`Export`,variant:`secondary`,onClick:()=>{console.log(`Export`)}},{key:`created`,type:`date`,label:`Created`},{key:`time`,type:`time`,label:`Time`,presets:[{label:`Last 15 mins`,value:new Date(Date.now()-900*1e3)},{label:`Last 30 mins`,value:new Date(Date.now()-1800*1e3)},{label:`Last 1 hour`,value:new Date(Date.now()-3600*1e3)},{label:`Last 6 hours`,value:new Date(Date.now()-360*60*1e3)}]},{type:`action`,label:`Delete Selected`,variant:`danger`,disabled:!0,onClick:()=>{console.log(`Delete`)}}]},D={args:E,render:e=>{let t=(0,x.useId)(),[{data:n,totalItemsCount:r},i]=(0,x.useState)({data:[],totalItemsCount:0});(0,x.useEffect)(()=>{(async()=>{let e=await y({page:1,pageSize:10});i({data:e.results,totalItemsCount:e.totalItemsCount})})()},[]);let a=(0,x.useCallback)(async({page:e=1,pageSize:t=10,termOfSearch:n=void 0,type:r=void 0})=>{let i=await y({page:e,pageSize:t,termOfSearch:n,type:r});return await new Promise(e=>setTimeout(e,1e3)),{data:i.results,totalItemsCount:i.totalItemsCount}},[y]);return n.length===0?(0,S.jsx)(`div`,{children:`Loading...`}):(0,S.jsx)(m,{client:w,children:(0,S.jsx)(v,{...e,id:t,data:n,columns:T,showPagination:!0,fetchData:a,totalItems:r})})}},O=e=>e.map(e=>({...e,meta:{expandedRow:(0,S.jsxs)(`div`,{className:`flex flex-col gap-2 py-2`,children:[(0,S.jsxs)(a,{variant:`body3`,className:`text-gray-500`,children:[`Details for `,e.name]}),(0,S.jsxs)(`div`,{className:`flex gap-4`,children:[(0,S.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,S.jsx)(a,{variant:`body3`,className:`font-medium text-gray-700`,children:`Type`}),(0,S.jsx)(a,{variant:`body2`,children:e.type})]}),(0,S.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,S.jsx)(a,{variant:`body3`,className:`font-medium text-gray-700`,children:`Ability`}),(0,S.jsx)(a,{variant:`body2`,children:e.ability})]}),(0,S.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,S.jsx)(a,{variant:`body3`,className:`font-medium text-gray-700`,children:`Height / Weight`}),(0,S.jsxs)(a,{variant:`body2`,children:[e.height,` / `,e.weight]})]})]})]})}})),k={args:{...E,enableExpandedRow:!0,ariaLabel:`List of pokemons with expandable rows`},render:e=>{let t=(0,x.useId)(),[{data:n,totalItemsCount:r},i]=(0,x.useState)({data:[],totalItemsCount:0});(0,x.useEffect)(()=>{(async()=>{let e=await y({page:1,pageSize:10});i({data:O(e.results),totalItemsCount:e.totalItemsCount})})()},[]);let a=(0,x.useCallback)(async({page:e=1,pageSize:t=10,termOfSearch:n=void 0,type:r=void 0})=>{let i=await y({page:e,pageSize:t,termOfSearch:n,type:r});return await new Promise(e=>setTimeout(e,500)),{data:O(i.results),totalItemsCount:i.totalItemsCount}},[]);return n.length===0?(0,S.jsx)(`div`,{children:`Loading...`}):(0,S.jsx)(m,{client:w,children:(0,S.jsx)(v,{...e,enableHoverRow:!0,id:t,data:n,columns:T,showPagination:!0,fetchData:a,totalItems:r,enableExpandedRow:!0})})}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A=[`Default`,`ExpandableRows`]}))();export{D as Default,k as ExpandableRows,A as __namedExportsOrder,C as default};