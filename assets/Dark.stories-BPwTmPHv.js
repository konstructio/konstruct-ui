import{r as n,j as t}from"./iframe-RFUXcFU1.js";import{V as i,D as p,Q as w,a as P,E as A}from"./VirtualizedTable-CcLkWtc9.js";import{T as r}from"./Typography-CVd2-NB0.js";import{g as m}from"./pokemon.repository-CIwk2qVq.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-DxjmVpWu.js";import"./index-BIgQ6y5l.js";import"./index-1q7I8vAB.js";import"./index-BGK4KL-m.js";import"./index-liLHGAx1.js";import"./index-DHc_NMzY.js";import"./index-CFloAkMw.js";import"./chevron-right-DZ3NCKzy.js";import"./debounce-DdzKvR2M.js";import"./isObject-DcT2bIqL.js";import"./Button-CI2FwOyy.js";import"./Filter-D3-07d-7.js";import"./Badge-D6cx8P8Y.js";import"./Loader-SkDEt_Hi.js";import"./x-QIzpNpBh.js";import"./Checkbox-XVqTlsdu.js";import"./index-DIC2GfCC.js";import"./index-Csk6_OSh.js";import"./index-fAG7fmiz.js";import"./index-BfUIXumI.js";import"./useToggle-DpAoNMMY.js";import"./check-B2Zurhcn.js";import"./index-hF9rmkUV.js";import"./TimePicker-CW40X-4X.js";import"./DatePicker-BZET92YJ.js";import"./style-BPUgxc4R.js";import"./DateRangePicker-Br-9AtM7.js";import"./RadioGroup-DiDC013F.js";import"./Radio-BWLwq_Uj.js";import"./Input-vqSmHewy.js";import"./Warning-42Y0Tt-y.js";import"./proxy-DDynkGEN.js";import"./index-C_YClENi.js";import"./index-WBpF_g3n.js";import"./index-B4rZCs8t.js";import"./index-B-zOr-0t.js";import"./Loading-zzv5H3lb.js";import"./chevron-up-CeBY7FM5.js";const ht={title:"In Review/VirtualizedTable/Dark",component:i},v=new P,I=[{header:"Id",accessorKey:"id",meta:{headerClassName:"whitespace-nowrap w-0"}},{header:"Name",accessorKey:"name",cell:e=>t.jsx(i.TruncateText,{...e,value:`${e.getValue().charAt(0).toUpperCase()}${e.getValue().slice(1)}`})},{header:"Type",accessorKey:"type",cell:e=>t.jsx(i.TruncateText,{...e,value:`${e.getValue().charAt(0).toUpperCase()}${e.getValue().slice(1)}`})},{header:"Height",accessorKey:"height"},{header:"Weight",accessorKey:"weight"},{header:"Ability",accessorKey:"ability",cell:e=>t.jsx(i.TruncateText,{...e,value:`${e.getValue().charAt(0).toUpperCase()}${e.getValue().slice(1)}`})},{id:"actions",enableSorting:!1,enableResizing:!1,cell:e=>t.jsx(i.Actions,{...e,actions:[{label:t.jsxs("span",{className:"flex items-center gap-2",children:[t.jsx(A,{className:"w-4 h-4"}),"First Action"]}),onClick:a=>{console.log(`Viewing details for ${JSON.stringify(a)}`)},className:"text-slate-800"},{label:"Second Action",onClick:a=>{console.log(`Viewing details for ${JSON.stringify(a)}`)}}]}),header:()=>t.jsx("span",{className:"sr-only",children:"Action Buttons"}),meta:{headerClassName:"w-[92px]",className:"flex justify-center"}}],E={showFilter:!0,showResetButton:!0,showPagination:!0,isLoading:!1,ariaLabel:"List of pokemons",pageSizes:[5,10,20,30,50],filterActions:[{label:"Export",variant:"secondary",onClick:()=>{console.log("Export")}}],multiSelectFilter:[{key:"type",label:"Type",options:[{id:"grass",label:"Grass",variant:"success"},{id:"fire",label:"Fire",variant:"danger"},{id:"water",label:"Water",variant:"info"},{id:"bug",label:"Bug",variant:"warning"},{id:"normal",label:"Normal",variant:void 0}]}]},c={args:E,render:e=>{const a=n.useId(),[{data:o,totalItemsCount:g},b]=n.useState({data:[],totalItemsCount:0});n.useEffect(()=>{(async()=>{const s=await m({page:1,pageSize:p});b({data:s.results,totalItemsCount:s.totalItemsCount})})()},[]),n.useEffect(()=>(document.body.setAttribute("data-theme","dark"),document.body.classList.add("bg-metal-900"),()=>{document.body.removeAttribute("data-theme"),document.body.classList.remove("bg-metal-900")}),[]);const h=n.useCallback(async({page:l=1,pageSize:s=p,termOfSearch:y=void 0,type:f=void 0})=>{const d=await m({page:l,pageSize:s,termOfSearch:y,type:f});return await new Promise(x=>setTimeout(x,1e3)),{data:d.results,totalItemsCount:d.totalItemsCount}},[m]);return o.length===0?t.jsx("div",{children:"Loading..."}):t.jsx(w,{client:v,children:t.jsx(i,{...e,id:a,data:o,columns:I,showPagination:!0,fetchData:h,totalItems:g})})}},C=e=>e.map((a,o)=>({...a,meta:o%2===0?{expandedRow:t.jsxs("div",{className:"flex flex-col gap-2 py-2",children:[t.jsxs(r,{variant:"body3",className:"text-metal-400",children:["Details for ",a.name]}),t.jsxs("div",{className:"flex gap-4",children:[t.jsxs("div",{className:"flex flex-col gap-1",children:[t.jsx(r,{variant:"body3",className:"font-medium text-metal-300",children:"Type"}),t.jsx(r,{variant:"body2",children:a.type})]}),t.jsxs("div",{className:"flex flex-col gap-1",children:[t.jsx(r,{variant:"body3",className:"font-medium text-metal-300",children:"Ability"}),t.jsx(r,{variant:"body2",children:a.ability})]}),t.jsxs("div",{className:"flex flex-col gap-1",children:[t.jsx(r,{variant:"body3",className:"font-medium text-metal-300",children:"Height / Weight"}),t.jsxs(r,{variant:"body2",children:[a.height," / ",a.weight]})]})]})]})}:void 0})),u={args:{...E,enableExpandedRow:!0,ariaLabel:"List of pokemons with expandable rows"},render:e=>{const a=n.useId(),[{data:o,totalItemsCount:g},b]=n.useState({data:[],totalItemsCount:0});n.useEffect(()=>{(async()=>{const s=await m({page:1,pageSize:p});b({data:C(s.results),totalItemsCount:s.totalItemsCount})})()},[]),n.useEffect(()=>(document.body.setAttribute("data-theme","dark"),document.body.classList.add("bg-metal-900"),()=>{document.body.removeAttribute("data-theme"),document.body.classList.remove("bg-metal-900")}),[]);const h=n.useCallback(async({page:l=1,pageSize:s=p,termOfSearch:y=void 0,type:f=void 0})=>{const d=await m({page:l,pageSize:s,termOfSearch:y,type:f});return await new Promise(x=>setTimeout(x,500)),{data:C(d.results),totalItemsCount:d.totalItemsCount}},[]);return o.length===0?t.jsx("div",{children:"Loading..."}):t.jsx(w,{client:v,children:t.jsx(i,{...e,id:a,data:o,columns:I,showPagination:!0,fetchData:h,totalItems:g,enableExpandedRow:!0})})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
