import{r as o,j as e}from"./iframe-CssV7JZu.js";import{V as r,D as p,Q as b,a as E,E as N}from"./VirtualizedTable-BlmxsQRU.js";import{A as P}from"./AlertDialog-981SYh4S.js";import{C as D}from"./Checkbox-Dsdti6Te.js";import{T as s}from"./Typography-CEu00F3Q.js";import{C as S}from"./check-CKTQcEb0.js";import{g as m}from"./pokemon.repository-kDiHDKsw.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-XfZyPLiz.js";import"./index-CGPp45Jz.js";import"./index-B2gpOC--.js";import"./index-DZGTwPZs.js";import"./index-DUF8VvX7.js";import"./index-yAfA1QZT.js";import"./index-TeGc_hon.js";import"./chevron-right-C2iT4n4C.js";import"./debounce-9J5zH9lj.js";import"./isObject-CK0-rR5Q.js";import"./Button-apk4umXX.js";import"./Filter-SpJu4GWY.js";import"./Badge-owhEqyir.js";import"./Loader-c5voPfCx.js";import"./x-UOh0OWSc.js";import"./TimePicker-CK1pYjVr.js";import"./DatePicker-D6bLBTjL.js";import"./style-ZIThleI_.js";import"./DateRangePicker-Due5F9uv.js";import"./RadioGroup-CR6Kx6UF.js";import"./Radio-U91_fZY2.js";import"./Input-C_8y-m9s.js";import"./Warning-BUoECZOo.js";import"./index-NIzNdihP.js";import"./proxy-BKFOMweW.js";import"./index-CxR1g4xc.js";import"./index-CEoRzofj.js";import"./index-TeoQ5JjS.js";import"./index-Bk83ofrY.js";import"./index-CiFw68OK.js";import"./index-BMyYsFzy.js";import"./index-BMjKlocg.js";import"./index-C-Oa6112.js";import"./index-C_hFILXr.js";import"./Combination-BrHzyKwT.js";import"./index-C4I0eWcx.js";import"./useToggle-SNx89UJr.js";import"./check-CS9p8RHz.js";import"./Loading-0r-V7fUV.js";import"./chevron-up-C0Ns93TM.js";const je={title:"In Review/VirtualizedTable/Light",component:r},v=new E,I=[{header:"Id",accessorKey:"id",meta:{headerClassName:"whitespace-nowrap w-0"}},{header:"Name",accessorKey:"name",cell:t=>e.jsx(r.TruncateText,{...t,value:`${t.getValue().charAt(0).toUpperCase()}${t.getValue().slice(1)}`})},{header:"Type",accessorKey:"type",cell:t=>e.jsx(r.TruncateText,{...t,value:`${t.getValue().charAt(0).toUpperCase()}${t.getValue().slice(1)}`})},{header:"Height",accessorKey:"height"},{header:"Weight",accessorKey:"weight"},{header:"Ability",accessorKey:"ability",cell:t=>e.jsx(r.TruncateText,{...t,value:`${t.getValue().charAt(0).toUpperCase()}${t.getValue().slice(1)}`})},{id:"actions",enableSorting:!1,enableResizing:!1,cell:t=>e.jsx(r.Actions,{...t,actions:[{component:P,componentProps:{className:"w-full hover:no-underline hover:bg-gray-50 hover:text-slate-800 font-normal",buttonTriggerText:e.jsxs("span",{className:"text-blue-800 flex gap-2 w-full",children:[e.jsx(N,{className:"w-4 h-4"}),"First Action"]}),showCancelButton:!1,title:e.jsxs("div",{className:"flex flex-col gap-4 items-center justify-center",children:[e.jsx("span",{className:"p-3 rounded-full bg-green-600/15 w-12 h-12 flex items-center justify-center",children:e.jsx(S,{className:"text-green-600"})}),e.jsx(s,{className:"font-normal text-slate-700",children:"Cluster successfully deleted"})]}),isDescriptionChild:!0,description:e.jsxs("div",{className:"text-sm text-slate-800 flex flex-col gap-6",children:[e.jsxs("p",{className:"text-center",children:["When you close the Cluster details drawer you can view the logs in"," ",e.jsx("span",{className:"text-blue-600",children:"Cluster archives"}),"."]}),e.jsx(D,{defaultChecked:!0,label:"Don't show this message again"})]}),wrapperClassName:"max-w-[384px] gap-4",buttonConfirm:{text:"Got it!",className:"w-full mt-4"}},onClick:a=>{console.log(`Viewing details for ${JSON.stringify(a)}`)}},{label:"Second Action",onClick:a=>{console.log(`Viewing details for ${JSON.stringify(a)}`)}}]}),header:()=>e.jsx("span",{className:"sr-only",children:"Action Buttons"}),meta:{headerClassName:"w-[92px]",className:"flex justify-center"}}],j={showFilter:!0,showResetButton:!0,showPagination:!0,isLoading:!1,ariaLabel:"List of pokemons",pageSizes:[5,10,20,30,50],filterActions:[{label:"Export",variant:"secondary",onClick:()=>{console.log("Export")}}],multiSelectFilter:[{key:"type",label:"Type",options:[{id:"grass",label:"Grass",variant:"success"},{id:"fire",label:"Fire",variant:"danger"},{id:"water",label:"Water",variant:"info"},{id:"bug",label:"Bug",variant:"warning"},{id:"normal",label:"Normal",variant:void 0}]}]},d={args:j,render:t=>{const a=o.useId(),[{data:i,totalItemsCount:g},h]=o.useState({data:[],totalItemsCount:0});o.useEffect(()=>{(async()=>{const n=await m({page:1,pageSize:p});h({data:n.results,totalItemsCount:n.totalItemsCount})})()},[]);const x=o.useCallback(async({page:l=1,pageSize:n=p,termOfSearch:f=void 0,type:C=void 0})=>{const c=await m({page:l,pageSize:n,termOfSearch:f,type:C});return await new Promise(y=>setTimeout(y,1e3)),{data:c.results,totalItemsCount:c.totalItemsCount}},[m]);return i.length===0?e.jsx("div",{children:"Loading..."}):e.jsx(b,{client:v,children:e.jsx(r,{...t,id:a,data:i,columns:I,showPagination:!0,fetchData:x,totalItems:g})})}},w=t=>t.map(a=>({...a,meta:{expandedRow:e.jsxs("div",{className:"flex flex-col gap-2 py-2",children:[e.jsxs(s,{variant:"body3",className:"text-gray-500",children:["Details for ",a.name]}),e.jsxs("div",{className:"flex gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(s,{variant:"body3",className:"font-medium text-gray-700",children:"Type"}),e.jsx(s,{variant:"body2",children:a.type})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(s,{variant:"body3",className:"font-medium text-gray-700",children:"Ability"}),e.jsx(s,{variant:"body2",children:a.ability})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(s,{variant:"body3",className:"font-medium text-gray-700",children:"Height / Weight"}),e.jsxs(s,{variant:"body2",children:[a.height," / ",a.weight]})]})]})]})}})),u={args:{...j,enableExpandedRow:!0,ariaLabel:"List of pokemons with expandable rows"},render:t=>{const a=o.useId(),[{data:i,totalItemsCount:g},h]=o.useState({data:[],totalItemsCount:0});o.useEffect(()=>{(async()=>{const n=await m({page:1,pageSize:p});h({data:w(n.results),totalItemsCount:n.totalItemsCount})})()},[]);const x=o.useCallback(async({page:l=1,pageSize:n=p,termOfSearch:f=void 0,type:C=void 0})=>{const c=await m({page:l,pageSize:n,termOfSearch:f,type:C});return await new Promise(y=>setTimeout(y,500)),{data:w(c.results),totalItemsCount:c.totalItemsCount}},[]);return i.length===0?e.jsx("div",{children:"Loading..."}):e.jsx(b,{client:v,children:e.jsx(r,{...t,enableHoverRow:!0,id:a,data:i,columns:I,showPagination:!0,fetchData:x,totalItems:g,enableExpandedRow:!0})})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const Ee=["Default","ExpandableRows"];export{d as Default,u as ExpandableRows,Ee as __namedExportsOrder,je as default};
