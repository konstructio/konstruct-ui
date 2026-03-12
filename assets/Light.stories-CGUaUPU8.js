import{r as o,j as e}from"./iframe-Bx7A06S6.js";import{V as r,D as p,Q as b,a as j,E}from"./VirtualizedTable-B5UUCqLh.js";import{A as N}from"./AlertDialog-CFg3V1Us.js";import{C as P}from"./Checkbox-CqgTRR9N.js";import{T as s}from"./Typography-CVipnvyR.js";import{C as S}from"./check-DMnf7VXA.js";import{g as d}from"./pokemon.repository-CjHWdNnf.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-BUjuW9lK.js";import"./index-CwGTy2we.js";import"./index-C0p74kZS.js";import"./index-DUBB8pZe.js";import"./index-Da4694XD.js";import"./index-BvAy6IBt.js";import"./index-D1FIWJZM.js";import"./chevron-right-DzVzHSjJ.js";import"./debounce-DtGF3CwK.js";import"./isObject-CT5Z9LJi.js";import"./Button-43eHLI6h.js";import"./Filter-DkGUYnEa.js";import"./Badge-uutf6F8U.js";import"./Loader-DkRYb8L5.js";import"./x-CWM7iKI1.js";import"./TimePicker-hviDk6BJ.js";import"./DatePicker-By73t-DA.js";import"./style-lcDvV3Lr.js";import"./DateRangePicker-CWDxpiQV.js";import"./RadioGroup-BbFYg2We.js";import"./Radio-BYBR6r5v.js";import"./Input-CsAV1yfC.js";import"./Warning-CJT5tg2V.js";import"./index-1gMRQfLf.js";import"./proxy-L-cjAPQv.js";import"./Tooltip-Ds2SG2lL.js";import"./index-DF4Docbl.js";import"./index-DJyansmc.js";import"./index-tnfb2QiQ.js";import"./index-BaorlIEW.js";import"./index-DhvH3RNL.js";import"./index-BtcbTGcW.js";import"./index-D46p-S_A.js";import"./index-D6y4ETVR.js";import"./Combination-B7Vjl1fU.js";import"./index-8B2YTAQD.js";import"./useToggle-DYsG1k89.js";import"./check-D37yFGKk.js";import"./Loading-DrDJp8z3.js";import"./chevron-up-CxOXyMA9.js";const De={title:"In Review/VirtualizedTable/Light",component:r},v=new j,I=[{header:"Id",accessorKey:"id",meta:{headerClassName:"whitespace-nowrap w-0"}},{header:"Name",accessorKey:"name",cell:t=>e.jsx(r.TruncateText,{...t,value:`${t.getValue().charAt(0).toUpperCase()}${t.getValue().slice(1)}`})},{header:"Type",accessorKey:"type",cell:t=>e.jsx(r.TruncateText,{...t,value:`${t.getValue().charAt(0).toUpperCase()}${t.getValue().slice(1)}`})},{header:"Height",accessorKey:"height"},{header:"Weight",accessorKey:"weight"},{header:"Ability",accessorKey:"ability",cell:t=>e.jsx(r.TruncateText,{...t,value:`${t.getValue().charAt(0).toUpperCase()}${t.getValue().slice(1)}`})},{id:"actions",enableSorting:!1,enableResizing:!1,cell:t=>e.jsx(r.Actions,{...t,actions:[{component:N,componentProps:{className:"w-full hover:no-underline hover:bg-gray-50 hover:text-slate-800 font-normal",buttonTriggerText:e.jsxs("span",{className:"text-blue-800 flex gap-2 w-full",children:[e.jsx(E,{className:"w-4 h-4"}),"First Action"]}),showCancelButton:!1,title:e.jsxs("div",{className:"flex flex-col gap-4 items-center justify-center",children:[e.jsx("span",{className:"p-3 rounded-full bg-green-600/15 w-12 h-12 flex items-center justify-center",children:e.jsx(S,{className:"text-green-600"})}),e.jsx(s,{className:"font-normal text-slate-700",children:"Cluster successfully deleted"})]}),isDescriptionChild:!0,description:e.jsxs("div",{className:"text-sm text-slate-800 flex flex-col gap-6",children:[e.jsxs("p",{className:"text-center",children:["When you close the Cluster details drawer you can view the logs in"," ",e.jsx("span",{className:"text-blue-600",children:"Cluster archives"}),"."]}),e.jsx(P,{defaultChecked:!0,label:"Don't show this message again"})]}),wrapperClassName:"max-w-[384px] gap-4",buttonConfirm:{text:"Got it!",className:"w-full mt-4"}},onClick:a=>{console.log(`Viewing details for ${JSON.stringify(a)}`)}},{label:"Second Action",onClick:a=>{console.log(`Viewing details for ${JSON.stringify(a)}`)}}]}),header:()=>e.jsx("span",{className:"sr-only",children:"Action Buttons"}),meta:{headerClassName:"w-[92px]",className:"flex justify-center"}}],D={showFilter:!0,showResetButton:!0,showPagination:!0,isLoading:!1,ariaLabel:"List of pokemons",pageSizes:[5,10,20,30,50],filters:[{key:"type",label:"Type",options:[{id:"grass",label:"Grass",variant:"success"},{id:"fire",label:"Fire",variant:"danger"},{id:"water",label:"Water",variant:"info"},{id:"bug",label:"Bug",variant:"warning"},{id:"normal",label:"Normal",variant:void 0}]},{type:"action",label:"Export",variant:"secondary",onClick:()=>{console.log("Export")}},{key:"created",type:"date",label:"Created"},{key:"time",type:"time",label:"Time",presets:[{label:"Last 15 mins",value:new Date(Date.now()-900*1e3)},{label:"Last 30 mins",value:new Date(Date.now()-1800*1e3)},{label:"Last 1 hour",value:new Date(Date.now()-3600*1e3)},{label:"Last 6 hours",value:new Date(Date.now()-360*60*1e3)}]},{type:"action",label:"Delete Selected",variant:"danger",disabled:!0,onClick:()=>{console.log("Delete")}}]},m={args:D,render:t=>{const a=o.useId(),[{data:i,totalItemsCount:g},h]=o.useState({data:[],totalItemsCount:0});o.useEffect(()=>{(async()=>{const n=await d({page:1,pageSize:p});h({data:n.results,totalItemsCount:n.totalItemsCount})})()},[]);const x=o.useCallback(async({page:l=1,pageSize:n=p,termOfSearch:f=void 0,type:w=void 0})=>{const c=await d({page:l,pageSize:n,termOfSearch:f,type:w});return await new Promise(y=>setTimeout(y,1e3)),{data:c.results,totalItemsCount:c.totalItemsCount}},[d]);return i.length===0?e.jsx("div",{children:"Loading..."}):e.jsx(b,{client:v,children:e.jsx(r,{...t,id:a,data:i,columns:I,showPagination:!0,fetchData:x,totalItems:g})})}},C=t=>t.map(a=>({...a,meta:{expandedRow:e.jsxs("div",{className:"flex flex-col gap-2 py-2",children:[e.jsxs(s,{variant:"body3",className:"text-gray-500",children:["Details for ",a.name]}),e.jsxs("div",{className:"flex gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(s,{variant:"body3",className:"font-medium text-gray-700",children:"Type"}),e.jsx(s,{variant:"body2",children:a.type})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(s,{variant:"body3",className:"font-medium text-gray-700",children:"Ability"}),e.jsx(s,{variant:"body2",children:a.ability})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(s,{variant:"body3",className:"font-medium text-gray-700",children:"Height / Weight"}),e.jsxs(s,{variant:"body2",children:[a.height," / ",a.weight]})]})]})]})}})),u={args:{...D,enableExpandedRow:!0,ariaLabel:"List of pokemons with expandable rows"},render:t=>{const a=o.useId(),[{data:i,totalItemsCount:g},h]=o.useState({data:[],totalItemsCount:0});o.useEffect(()=>{(async()=>{const n=await d({page:1,pageSize:p});h({data:C(n.results),totalItemsCount:n.totalItemsCount})})()},[]);const x=o.useCallback(async({page:l=1,pageSize:n=p,termOfSearch:f=void 0,type:w=void 0})=>{const c=await d({page:l,pageSize:n,termOfSearch:f,type:w});return await new Promise(y=>setTimeout(y,500)),{data:C(c.results),totalItemsCount:c.totalItemsCount}},[]);return i.length===0?e.jsx("div",{children:"Loading..."}):e.jsx(b,{client:v,children:e.jsx(r,{...t,enableHoverRow:!0,id:a,data:i,columns:I,showPagination:!0,fetchData:x,totalItems:g,enableExpandedRow:!0})})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const je=["Default","ExpandableRows"];export{m as Default,u as ExpandableRows,je as __namedExportsOrder,De as default};
