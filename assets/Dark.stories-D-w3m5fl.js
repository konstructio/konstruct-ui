import{r as n,j as t}from"./iframe-CyFn_Qhx.js";import{V as r,D as p,Q as w,a as P,E as A}from"./VirtualizedTable-DZptPwWe.js";import{T as o}from"./Typography-Bxe8aBKv.js";import{g as m}from"./pokemon.repository-CYZlg8Ye.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-HlI3zuae.js";import"./index-BIgQ6y5l.js";import"./index-D13P2BFz.js";import"./index-Cll_EaMR.js";import"./index-7WZiwmbk.js";import"./index-DhmxNnKf.js";import"./index-B3EGCS26.js";import"./chevron-right-DsTyX_8j.js";import"./debounce-KqoZQGet.js";import"./isObject-_yShL5Qg.js";import"./Button-CWxRp1ae.js";import"./Filter-CH5xGZVf.js";import"./Badge-D2fYr5gX.js";import"./Loader-CbnHvqZg.js";import"./x-CmGmrN9T.js";import"./Checkbox-qX7vx926.js";import"./index-DbkhKSB9.js";import"./index-CkEnChaw.js";import"./index-C39ePfpB.js";import"./index-C8cOalJx.js";import"./useToggle-DsKf2gm8.js";import"./check-BVYe35_B.js";import"./index-Cu9JQmlv.js";import"./TimePicker-XrLjbM77.js";import"./DatePicker-NBerZoiB.js";import"./style-hT0dLx4H.js";import"./DateRangePicker-D9MwtM12.js";import"./RadioGroup-DeU9NL8z.js";import"./Radio-DR-9wiv-.js";import"./Input-zDCUXe_T.js";import"./Warning-D0OtOMmk.js";import"./proxy-DT40K5MH.js";import"./index-BxDcZY8p.js";import"./index-vys1cHcN.js";import"./index-DJ7fpUiF.js";import"./index-RmDiyWCZ.js";import"./Loading-Csv5SoNn.js";import"./chevron-up-DJP4i9ZE.js";const ht={title:"In Review/VirtualizedTable/Dark",component:r},v=new P,I=[{header:"Id",accessorKey:"id",meta:{headerClassName:"whitespace-nowrap w-0"}},{header:"Name",accessorKey:"name",cell:e=>t.jsx(r.TruncateText,{...e,value:`${e.getValue().charAt(0).toUpperCase()}${e.getValue().slice(1)}`})},{header:"Type",accessorKey:"type",cell:e=>t.jsx(r.TruncateText,{...e,value:`${e.getValue().charAt(0).toUpperCase()}${e.getValue().slice(1)}`})},{header:"Height",accessorKey:"height"},{header:"Weight",accessorKey:"weight"},{header:"Ability",accessorKey:"ability",cell:e=>t.jsx(r.TruncateText,{...e,value:`${e.getValue().charAt(0).toUpperCase()}${e.getValue().slice(1)}`})},{id:"actions",enableSorting:!1,enableResizing:!1,cell:e=>t.jsx(r.Actions,{...e,actions:[{label:t.jsxs("span",{className:"flex items-center gap-2",children:[t.jsx(A,{className:"w-4 h-4"}),"First Action"]}),onClick:a=>{console.log(`Viewing details for ${JSON.stringify(a)}`)},className:"text-slate-800"},{label:"Second Action",onClick:a=>{console.log(`Viewing details for ${JSON.stringify(a)}`)}}]}),header:()=>t.jsx("span",{className:"sr-only",children:"Action Buttons"}),meta:{headerClassName:"w-[92px]",className:"flex justify-center"}}],E={showFilter:!0,showResetButton:!0,showPagination:!0,isLoading:!1,ariaLabel:"List of pokemons",pageSizes:[5,10,20,30,50],filterActions:[{label:"Export",variant:"secondary",onClick:()=>{console.log("Export")}}],multiSelectFilter:[{key:"type",label:"Type",options:[{id:"grass",label:"Grass",variant:"success"},{id:"fire",label:"Fire",variant:"danger"},{id:"water",label:"Water",variant:"info"},{id:"bug",label:"Bug",variant:"warning"},{id:"normal",label:"Normal",variant:void 0}]}]},c={args:E,render:e=>{const a=n.useId(),[{data:i,totalItemsCount:g},b]=n.useState({data:[],totalItemsCount:0});n.useEffect(()=>{(async()=>{const s=await m({page:1,pageSize:p});b({data:s.results,totalItemsCount:s.totalItemsCount})})()},[]),n.useEffect(()=>(document.body.setAttribute("data-theme","dark"),document.body.classList.add("bg-metal-900"),()=>{document.body.removeAttribute("data-theme"),document.body.classList.remove("bg-metal-900")}),[]);const h=n.useCallback(async({page:l=1,pageSize:s=p,termOfSearch:y=void 0,type:f=void 0})=>{const d=await m({page:l,pageSize:s,termOfSearch:y,type:f});return await new Promise(x=>setTimeout(x,1e3)),{data:d.results,totalItemsCount:d.totalItemsCount}},[m]);return i.length===0?t.jsx("div",{children:"Loading..."}):t.jsx(w,{client:v,children:t.jsx(r,{...e,id:a,data:i,columns:I,showPagination:!0,fetchData:h,totalItems:g})})}},C=e=>e.map(a=>({...a,meta:{expandedRow:t.jsxs("div",{className:"flex flex-col gap-2 py-2",children:[t.jsxs(o,{variant:"body3",className:"text-metal-400",children:["Details for ",a.name]}),t.jsxs("div",{className:"flex gap-4",children:[t.jsxs("div",{className:"flex flex-col gap-1",children:[t.jsx(o,{variant:"body3",className:"font-medium text-metal-300",children:"Type"}),t.jsx(o,{variant:"body2",children:a.type})]}),t.jsxs("div",{className:"flex flex-col gap-1",children:[t.jsx(o,{variant:"body3",className:"font-medium text-metal-300",children:"Ability"}),t.jsx(o,{variant:"body2",children:a.ability})]}),t.jsxs("div",{className:"flex flex-col gap-1",children:[t.jsx(o,{variant:"body3",className:"font-medium text-metal-300",children:"Height / Weight"}),t.jsxs(o,{variant:"body2",children:[a.height," / ",a.weight]})]})]})]})}})),u={args:{...E,enableExpandedRow:!0,ariaLabel:"List of pokemons with expandable rows"},render:e=>{const a=n.useId(),[{data:i,totalItemsCount:g},b]=n.useState({data:[],totalItemsCount:0});n.useEffect(()=>{(async()=>{const s=await m({page:1,pageSize:p});b({data:C(s.results),totalItemsCount:s.totalItemsCount})})()},[]),n.useEffect(()=>(document.body.setAttribute("data-theme","dark"),document.body.classList.add("bg-metal-900"),()=>{document.body.removeAttribute("data-theme"),document.body.classList.remove("bg-metal-900")}),[]);const h=n.useCallback(async({page:l=1,pageSize:s=p,termOfSearch:y=void 0,type:f=void 0})=>{const d=await m({page:l,pageSize:s,termOfSearch:y,type:f});return await new Promise(x=>setTimeout(x,500)),{data:C(d.results),totalItemsCount:d.totalItemsCount}},[]);return i.length===0?t.jsx("div",{children:"Loading..."}):t.jsx(w,{client:v,children:t.jsx(r,{...e,id:a,data:i,columns:I,showPagination:!0,fetchData:h,totalItems:g,enableExpandedRow:!0})})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
        <VirtualizedTableComponent<PokemonWithMeta> {...storyArgs} id={id} data={data} columns={columns as ColumnDef<PokemonWithMeta>[]} showPagination={true} fetchData={getNewData} totalItems={totalItemsCount} enableExpandedRow />
      </QueryClientProvider>;
  }
}`,...u.parameters?.docs?.source}}};const yt=["Default","ExpandableRows"];export{c as Default,u as ExpandableRows,yt as __namedExportsOrder,ht as default};
