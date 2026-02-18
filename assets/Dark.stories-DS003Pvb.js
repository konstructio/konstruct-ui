import{r as n,j as e}from"./iframe-B0ykOvC4.js";import{V as r,D as p,Q as C,a as P,E as A}from"./VirtualizedTable-E_JZ1ZnR.js";import{T as o}from"./Typography-B12U-GCI.js";import{g as m}from"./pokemon.repository-CCcMbQ6l.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-DTaVOwjc.js";import"./index-BIgQ6y5l.js";import"./index-BIElfuaO.js";import"./index-BvXeOUv6.js";import"./index-CBUw3gf_.js";import"./index-Dt_7K3_P.js";import"./index-Qi49gsqp.js";import"./chevron-right-d40jRypO.js";import"./debounce-BOC82T0c.js";import"./isObject-CLmpobET.js";import"./Button-DKwRI_Ni.js";import"./Filter-CoEQJJze.js";import"./Badge-pP4g0MtT.js";import"./Loader-DHgAVRtX.js";import"./x-nQBw8omO.js";import"./Checkbox-Xn4qFmdp.js";import"./index-4GeOFifu.js";import"./index-ClOyIQu9.js";import"./index-DglKKbRM.js";import"./index-BW2IeJSN.js";import"./useToggle-DoGEYRn2.js";import"./check-wrDHast8.js";import"./index-DWDo_day.js";import"./TimePicker-7OjFUYpG.js";import"./DatePicker-Cp1629e0.js";import"./style-DaYB41-P.js";import"./DateRangePicker-CqUznJq0.js";import"./RadioGroup-EQBCpc8O.js";import"./Radio-DC9Bb5qu.js";import"./Input-c3fuW2sE.js";import"./Warning-D74Ptsuc.js";import"./proxy-DOkuszPo.js";import"./index-rb1Biydk.js";import"./index-DZW7LMgM.js";import"./index-CJJkQu7k.js";import"./index-DDXukzp4.js";import"./Loading-BqsihyZ6.js";import"./chevron-up-BTvNMcqn.js";const he={title:"In Review/VirtualizedTable/Dark",component:r},v=new P,I=[{header:"Id",accessorKey:"id",meta:{headerClassName:"whitespace-nowrap w-0"}},{header:"Name",accessorKey:"name",cell:t=>e.jsx(r.TruncateText,{...t,value:`${t.getValue().charAt(0).toUpperCase()}${t.getValue().slice(1)}`})},{header:"Type",accessorKey:"type",cell:t=>e.jsx(r.TruncateText,{...t,value:`${t.getValue().charAt(0).toUpperCase()}${t.getValue().slice(1)}`})},{header:"Height",accessorKey:"height"},{header:"Weight",accessorKey:"weight"},{header:"Ability",accessorKey:"ability",cell:t=>e.jsx(r.TruncateText,{...t,value:`${t.getValue().charAt(0).toUpperCase()}${t.getValue().slice(1)}`})},{id:"actions",enableSorting:!1,enableResizing:!1,cell:t=>e.jsx(r.Actions,{...t,actions:[{label:e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx(A,{className:"w-4 h-4"}),"First Action"]}),onClick:a=>{console.log(`Viewing details for ${JSON.stringify(a)}`)},className:"text-slate-800"},{label:"Second Action",onClick:a=>{console.log(`Viewing details for ${JSON.stringify(a)}`)}}]}),header:()=>e.jsx("span",{className:"sr-only",children:"Action Buttons"}),meta:{headerClassName:"w-[92px]",className:"flex justify-center"}}],E={showFilter:!0,showResetButton:!0,showPagination:!0,isLoading:!1,ariaLabel:"List of pokemons",pageSizes:[5,10,20,30,50],filterActions:[{label:"Export",variant:"secondary",onClick:()=>{console.log("Export")}}],multiSelectFilter:[{key:"type",label:"Type",options:[{id:"grass",label:"Grass",variant:"success"},{id:"fire",label:"Fire",variant:"danger"},{id:"water",label:"Water",variant:"info"},{id:"bug",label:"Bug",variant:"warning"},{id:"normal",label:"Normal",variant:void 0}]}]},c={args:E,render:t=>{const a=n.useId(),[{data:i,totalItemsCount:g},b]=n.useState({data:[],totalItemsCount:0});n.useEffect(()=>{(async()=>{const s=await m({page:1,pageSize:p});b({data:s.results,totalItemsCount:s.totalItemsCount})})()},[]),n.useEffect(()=>(document.body.setAttribute("data-theme","dark"),document.body.classList.add("bg-metal-900"),()=>{document.body.removeAttribute("data-theme"),document.body.classList.remove("bg-metal-900")}),[]);const h=n.useCallback(async({page:l=1,pageSize:s=p,termOfSearch:y=void 0,type:f=void 0})=>{const d=await m({page:l,pageSize:s,termOfSearch:y,type:f});return await new Promise(x=>setTimeout(x,1e3)),{data:d.results,totalItemsCount:d.totalItemsCount}},[m]);return i.length===0?e.jsx("div",{children:"Loading..."}):e.jsx(C,{client:v,children:e.jsx(r,{...t,id:a,data:i,columns:I,showPagination:!0,fetchData:h,totalItems:g})})}},w=t=>t.map(a=>({...a,meta:{expandedRow:e.jsxs("div",{className:"flex flex-col gap-2 py-2",children:[e.jsxs(o,{variant:"body3",className:"text-metal-400",children:["Details for ",a.name]}),e.jsxs("div",{className:"flex gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(o,{variant:"body3",className:"font-medium text-metal-300",children:"Type"}),e.jsx(o,{variant:"body2",children:a.type})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(o,{variant:"body3",className:"font-medium text-metal-300",children:"Ability"}),e.jsx(o,{variant:"body2",children:a.ability})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(o,{variant:"body3",className:"font-medium text-metal-300",children:"Height / Weight"}),e.jsxs(o,{variant:"body2",children:[a.height," / ",a.weight]})]})]})]})}})),u={args:{...E,enableExpandedRow:!0,ariaLabel:"List of pokemons with expandable rows"},render:t=>{const a=n.useId(),[{data:i,totalItemsCount:g},b]=n.useState({data:[],totalItemsCount:0});n.useEffect(()=>{(async()=>{const s=await m({page:1,pageSize:p});b({data:w(s.results),totalItemsCount:s.totalItemsCount})})()},[]),n.useEffect(()=>(document.body.setAttribute("data-theme","dark"),document.body.classList.add("bg-metal-900"),()=>{document.body.removeAttribute("data-theme"),document.body.classList.remove("bg-metal-900")}),[]);const h=n.useCallback(async({page:l=1,pageSize:s=p,termOfSearch:y=void 0,type:f=void 0})=>{const d=await m({page:l,pageSize:s,termOfSearch:y,type:f});return await new Promise(x=>setTimeout(x,500)),{data:w(d.results),totalItemsCount:d.totalItemsCount}},[]);return i.length===0?e.jsx("div",{children:"Loading..."}):e.jsx(C,{client:v,children:e.jsx(r,{...t,enableHoverRow:!0,id:a,data:i,columns:I,showPagination:!0,fetchData:h,totalItems:g,enableExpandedRow:!0})})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const ye=["Default","ExpandableRows"];export{c as Default,u as ExpandableRows,ye as __namedExportsOrder,he as default};
