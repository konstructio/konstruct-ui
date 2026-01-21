import{r as o,j as t}from"./iframe-BV61N9iv.js";import{V as a,D as u,Q as f,a as w,E as x}from"./VirtualizedTable-D7ijFdR9.js";import{g as i}from"./pokemon.repository--h-Akwt6.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-BtJATfwv.js";import"./index-B-7A89sm.js";import"./debounce-CYkg5HS0.js";import"./Button-DUbqm3K1.js";import"./index-DvOec0CH.js";import"./index-qNDKP_kg.js";import"./Filter-DZf_E4YZ.js";import"./Badge-kK8ZFl5p.js";import"./loader-DH19ZKWn.js";import"./x-DPOtP9lw.js";import"./Checkbox-G3lZSsbL.js";import"./index-BZ1GtygF.js";import"./index-Dt9fwwpA.js";import"./index-C9jgRrj1.js";import"./index-DRI_qBtl.js";import"./index-BR0NHxlJ.js";import"./index-SkMhvFgw.js";import"./useToggle-YfRRhnBG.js";import"./check-1jZG20uI.js";import"./index-DbSf99dR.js";import"./chevron-down-CGu3EDW7.js";import"./DatePicker-8SkJ06q3.js";import"./chevron-right-BswWVBfq.js";import"./Input-CJl5prqC.js";import"./Warning-CMkxSeIM.js";import"./Typography-sshlW9sh.js";import"./index-DaI6doqE.js";import"./index-CPZI9n05.js";import"./index-ho8boR9X.js";import"./index-55b_mxRV.js";import"./Loading-DIBxhk2t.js";import"./chevron-up-DLVkcrbB.js";const re={title:"In Review/VirtualizedTable/Light",component:a},I=new w,b=[{header:"Id",accessorKey:"id",meta:{headerClassName:"whitespace-nowrap w-0"}},{header:"Name",accessorKey:"name",cell:e=>t.jsx(a.TruncateText,{...e,value:`${e.getValue().charAt(0).toUpperCase()}${e.getValue().slice(1)}`})},{header:"Type",accessorKey:"type",cell:e=>t.jsx(a.TruncateText,{...e,value:`${e.getValue().charAt(0).toUpperCase()}${e.getValue().slice(1)}`})},{header:"Height",accessorKey:"height"},{header:"Weight",accessorKey:"weight"},{header:"Ability",accessorKey:"ability",cell:e=>t.jsx(a.TruncateText,{...e,value:`${e.getValue().charAt(0).toUpperCase()}${e.getValue().slice(1)}`})},{id:"actions",enableSorting:!1,enableResizing:!1,cell:e=>t.jsx(a.Actions,{...e,actions:[{label:t.jsxs("span",{className:"text-blue-800 flex items-center gap-2",children:[t.jsx(x,{className:"w-4 h-4"}),"First Action"]}),onClick:n=>{console.log(`Viewing details for ${JSON.stringify(n)}`)},className:"text-slate-800"},{label:"Second Action",onClick:n=>{console.log(`Viewing details for ${JSON.stringify(n)}`)}}]}),header:()=>t.jsx("span",{className:"sr-only",children:"Action Buttons"}),meta:{headerClassName:"w-[92px]",className:"flex justify-center"}}],v={showFilter:!0,showResetButton:!0,showPagination:!0,isLoading:!1,ariaLabel:"List of pokemons",pageSizes:[5,10,20,30,50],filterActions:[{label:"Export",variant:"secondary",onClick:()=>{console.log("Export")}}],multiSelectFilter:[{key:"type",label:"Type",options:[{id:"grass",label:"Grass",variant:"success"},{id:"fire",label:"Fire",variant:"danger"},{id:"water",label:"Water",variant:"info"},{id:"bug",label:"Bug",variant:"warning"},{id:"normal",label:"Normal",variant:void 0}]}]},r={args:v,render:e=>{const n=o.useId(),[{data:l,totalItemsCount:d},p]=o.useState({data:[],totalItemsCount:0});o.useEffect(()=>{(async()=>{const s=await i({page:1,pageSize:u});p({data:s.results,totalItemsCount:s.totalItemsCount})})()},[]);const g=o.useCallback(async({page:c=1,pageSize:s=u,termOfSearch:h=void 0,type:y=void 0})=>{const m=await i({page:c,pageSize:s,termOfSearch:h,type:y});return await new Promise(C=>setTimeout(C,1e3)),{data:m.results,totalItemsCount:m.totalItemsCount}},[i]);return l.length===0?t.jsx("div",{children:"Loading..."}):t.jsx(f,{client:I,children:t.jsx(a,{...e,id:n,data:l,columns:b,showPagination:!0,fetchData:g,totalItems:d})})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const ie=["Light"];export{r as Light,ie as __namedExportsOrder,re as default};
