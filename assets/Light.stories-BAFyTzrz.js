import{r as o,j as e}from"./iframe-DFGxwtFi.js";import{V as r,D as p,Q as b,a as j,E}from"./VirtualizedTable-BMK95vnR.js";import{A as N}from"./AlertDialog-DvzZr2Ji.js";import{C as P}from"./Checkbox-DcHVD2SW.js";import{T as s}from"./Typography-DpIZzhjb.js";import{C as S}from"./check-Czm2lrkT.js";import{g as d}from"./pokemon.repository-DPqGE3OS.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-Dk9OOj-Q.js";import"./index-CwGTy2we.js";import"./index-CcuKm8EH.js";import"./index-DSVbO4Nd.js";import"./index-C2scD4Uf.js";import"./index-BzLJMWKD.js";import"./index-D7rxaWYY.js";import"./chevron-right-CCo-ax2l.js";import"./debounce-8FbgOM0R.js";import"./isObject-CYr3HWaF.js";import"./Button-DcgrzgJi.js";import"./Filter-DsiBteaq.js";import"./Badge-CzCMY4V4.js";import"./Loader-BP-1LtGP.js";import"./x-B2n8DMeX.js";import"./TimePicker-BRssJoWO.js";import"./DatePicker-BgFJLGJM.js";import"./style-Or5ngKa8.js";import"./DateRangePicker-DBJQWWZU.js";import"./RadioGroup-DI6qa9Y6.js";import"./Radio-Jb9bmy4y.js";import"./Input-B-p_lZFz.js";import"./Warning-CoNc0Q_3.js";import"./index-CM7janpZ.js";import"./proxy-DLlrn3Ot.js";import"./index-CES_YLHF.js";import"./index-C4VgHwgy.js";import"./index-DiWfPCL0.js";import"./index-YBkXnx_m.js";import"./index-D2ZKLX4e.js";import"./index-DkXV7EFN.js";import"./index-CfysTgji.js";import"./index-Dfzl7JI6.js";import"./index-BuX5bglL.js";import"./Combination-DE27a3kI.js";import"./index-D3ipkmNH.js";import"./useToggle-CKjzvMxF.js";import"./check-BL8ZfIfT.js";import"./Loading-DcKH6YDr.js";import"./chevron-up-6VeVBBxs.js";const De={title:"In Review/VirtualizedTable/Light",component:r},v=new j,I=[{header:"Id",accessorKey:"id",meta:{headerClassName:"whitespace-nowrap w-0"}},{header:"Name",accessorKey:"name",cell:t=>e.jsx(r.TruncateText,{...t,value:`${t.getValue().charAt(0).toUpperCase()}${t.getValue().slice(1)}`})},{header:"Type",accessorKey:"type",cell:t=>e.jsx(r.TruncateText,{...t,value:`${t.getValue().charAt(0).toUpperCase()}${t.getValue().slice(1)}`})},{header:"Height",accessorKey:"height"},{header:"Weight",accessorKey:"weight"},{header:"Ability",accessorKey:"ability",cell:t=>e.jsx(r.TruncateText,{...t,value:`${t.getValue().charAt(0).toUpperCase()}${t.getValue().slice(1)}`})},{id:"actions",enableSorting:!1,enableResizing:!1,cell:t=>e.jsx(r.Actions,{...t,actions:[{component:N,componentProps:{className:"w-full hover:no-underline hover:bg-gray-50 hover:text-slate-800 font-normal",buttonTriggerText:e.jsxs("span",{className:"text-blue-800 flex gap-2 w-full",children:[e.jsx(E,{className:"w-4 h-4"}),"First Action"]}),showCancelButton:!1,title:e.jsxs("div",{className:"flex flex-col gap-4 items-center justify-center",children:[e.jsx("span",{className:"p-3 rounded-full bg-green-600/15 w-12 h-12 flex items-center justify-center",children:e.jsx(S,{className:"text-green-600"})}),e.jsx(s,{className:"font-normal text-slate-700",children:"Cluster successfully deleted"})]}),isDescriptionChild:!0,description:e.jsxs("div",{className:"text-sm text-slate-800 flex flex-col gap-6",children:[e.jsxs("p",{className:"text-center",children:["When you close the Cluster details drawer you can view the logs in"," ",e.jsx("span",{className:"text-blue-600",children:"Cluster archives"}),"."]}),e.jsx(P,{defaultChecked:!0,label:"Don't show this message again"})]}),wrapperClassName:"max-w-[384px] gap-4",buttonConfirm:{text:"Got it!",className:"w-full mt-4"}},onClick:a=>{console.log(`Viewing details for ${JSON.stringify(a)}`)}},{label:"Second Action",onClick:a=>{console.log(`Viewing details for ${JSON.stringify(a)}`)}}]}),header:()=>e.jsx("span",{className:"sr-only",children:"Action Buttons"}),meta:{headerClassName:"w-[92px]",className:"flex justify-center"}}],D={showFilter:!0,showResetButton:!0,showPagination:!0,isLoading:!1,ariaLabel:"List of pokemons",pageSizes:[5,10,20,30,50],filters:[{key:"type",label:"Type",options:[{id:"grass",label:"Grass",variant:"success"},{id:"fire",label:"Fire",variant:"danger"},{id:"water",label:"Water",variant:"info"},{id:"bug",label:"Bug",variant:"warning"},{id:"normal",label:"Normal",variant:void 0}]},{type:"action",label:"Export",variant:"secondary",onClick:()=>{console.log("Export")}},{key:"created",type:"date",label:"Created"},{key:"time",type:"time",label:"Time",presets:[{label:"Last 15 mins",value:new Date(Date.now()-900*1e3)},{label:"Last 30 mins",value:new Date(Date.now()-1800*1e3)},{label:"Last 1 hour",value:new Date(Date.now()-3600*1e3)},{label:"Last 6 hours",value:new Date(Date.now()-360*60*1e3)}]},{type:"action",label:"Delete Selected",variant:"danger",disabled:!0,onClick:()=>{console.log("Delete")}}]},m={args:D,render:t=>{const a=o.useId(),[{data:i,totalItemsCount:g},h]=o.useState({data:[],totalItemsCount:0});o.useEffect(()=>{(async()=>{const n=await d({page:1,pageSize:p});h({data:n.results,totalItemsCount:n.totalItemsCount})})()},[]);const x=o.useCallback(async({page:l=1,pageSize:n=p,termOfSearch:f=void 0,type:w=void 0})=>{const c=await d({page:l,pageSize:n,termOfSearch:f,type:w});return await new Promise(y=>setTimeout(y,1e3)),{data:c.results,totalItemsCount:c.totalItemsCount}},[d]);return i.length===0?e.jsx("div",{children:"Loading..."}):e.jsx(b,{client:v,children:e.jsx(r,{...t,id:a,data:i,columns:I,showPagination:!0,fetchData:x,totalItems:g})})}},C=t=>t.map(a=>({...a,meta:{expandedRow:e.jsxs("div",{className:"flex flex-col gap-2 py-2",children:[e.jsxs(s,{variant:"body3",className:"text-gray-500",children:["Details for ",a.name]}),e.jsxs("div",{className:"flex gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(s,{variant:"body3",className:"font-medium text-gray-700",children:"Type"}),e.jsx(s,{variant:"body2",children:a.type})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(s,{variant:"body3",className:"font-medium text-gray-700",children:"Ability"}),e.jsx(s,{variant:"body2",children:a.ability})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(s,{variant:"body3",className:"font-medium text-gray-700",children:"Height / Weight"}),e.jsxs(s,{variant:"body2",children:[a.height," / ",a.weight]})]})]})]})}})),u={args:{...D,enableExpandedRow:!0,ariaLabel:"List of pokemons with expandable rows"},render:t=>{const a=o.useId(),[{data:i,totalItemsCount:g},h]=o.useState({data:[],totalItemsCount:0});o.useEffect(()=>{(async()=>{const n=await d({page:1,pageSize:p});h({data:C(n.results),totalItemsCount:n.totalItemsCount})})()},[]);const x=o.useCallback(async({page:l=1,pageSize:n=p,termOfSearch:f=void 0,type:w=void 0})=>{const c=await d({page:l,pageSize:n,termOfSearch:f,type:w});return await new Promise(y=>setTimeout(y,500)),{data:C(c.results),totalItemsCount:c.totalItemsCount}},[]);return i.length===0?e.jsx("div",{children:"Loading..."}):e.jsx(b,{client:v,children:e.jsx(r,{...t,enableHoverRow:!0,id:a,data:i,columns:I,showPagination:!0,fetchData:x,totalItems:g,enableExpandedRow:!0})})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
