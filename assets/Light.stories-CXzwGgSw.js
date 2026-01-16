import{r as o,j as t}from"./iframe-BP6xk-sd.js";import{V as a,D as u,Q as f,a as w,E as x}from"./VirtualizedTable-CcEnuB3-.js";import{g as i}from"./pokemon.repository-CiDK1yFe.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-BvJQt3eP.js";import"./index-B-7A89sm.js";import"./debounce-C7F5N9Sc.js";import"./Button-66KUfeYz.js";import"./index-0zgbZz4U.js";import"./index-CL5I2TJl.js";import"./Filter-DRm3rXLk.js";import"./Badge-BYeJ0N0p.js";import"./loader-CGryCB2D.js";import"./x-DoM9r-Ep.js";import"./Checkbox-1PzDT9ji.js";import"./index-B8ykCEHl.js";import"./index-CNmNVVh_.js";import"./index-NUtwVNq_.js";import"./index-BFNe1SIl.js";import"./index-37Tcys3K.js";import"./index-DuM2WOkk.js";import"./useToggle-B9QzNAUl.js";import"./check-UpI97qn4.js";import"./index-BD8_zldL.js";import"./chevron-down-CXMmdtVv.js";import"./DatePicker-Bo9ENp8b.js";import"./chevron-right-BQMJ7Tjx.js";import"./Input-D4xwC9-h.js";import"./Warning-B-1pL9Jf.js";import"./Typography-baU5Ymfp.js";import"./index-BVCgtC6U.js";import"./index-DmRZJKJL.js";import"./index-DH1rrwaD.js";import"./index-eS6e07lR.js";import"./Loading-Ceg0YBU6.js";import"./chevron-up-C7RxTQ_p.js";const re={title:"In Review/VirtualizedTable/Light",component:a},I=new w,b=[{header:"Id",accessorKey:"id",meta:{headerClassName:"whitespace-nowrap w-0"}},{header:"Name",accessorKey:"name",cell:e=>t.jsx(a.TruncateText,{...e,value:`${e.getValue().charAt(0).toUpperCase()}${e.getValue().slice(1)}`})},{header:"Type",accessorKey:"type",cell:e=>t.jsx(a.TruncateText,{...e,value:`${e.getValue().charAt(0).toUpperCase()}${e.getValue().slice(1)}`})},{header:"Height",accessorKey:"height"},{header:"Weight",accessorKey:"weight"},{header:"Ability",accessorKey:"ability",cell:e=>t.jsx(a.TruncateText,{...e,value:`${e.getValue().charAt(0).toUpperCase()}${e.getValue().slice(1)}`})},{id:"actions",enableSorting:!1,enableResizing:!1,cell:e=>t.jsx(a.Actions,{...e,actions:[{label:t.jsxs("span",{className:"text-blue-800 flex items-center gap-2",children:[t.jsx(x,{className:"w-4 h-4"}),"First Action"]}),onClick:n=>{console.log(`Viewing details for ${JSON.stringify(n)}`)},className:"text-slate-800"},{label:"Second Action",onClick:n=>{console.log(`Viewing details for ${JSON.stringify(n)}`)}}]}),header:()=>t.jsx("span",{className:"sr-only",children:"Action Buttons"}),meta:{headerClassName:"w-[92px]",className:"flex justify-center"}}],v={showFilter:!0,showResetButton:!0,showPagination:!0,isLoading:!1,ariaLabel:"List of pokemons",pageSizes:[5,10,20,30,50],filterActions:[{label:"Export",variant:"secondary",onClick:()=>{console.log("Export")}}],multiSelectFilter:[{key:"type",label:"Type",options:[{id:"grass",label:"Grass",variant:"success"},{id:"fire",label:"Fire",variant:"danger"},{id:"water",label:"Water",variant:"info"},{id:"bug",label:"Bug",variant:"warning"},{id:"normal",label:"Normal",variant:void 0}]}]},r={args:v,render:e=>{const n=o.useId(),[{data:l,totalItemsCount:d},p]=o.useState({data:[],totalItemsCount:0});o.useEffect(()=>{(async()=>{const s=await i({page:1,pageSize:u});p({data:s.results,totalItemsCount:s.totalItemsCount})})()},[]);const g=o.useCallback(async({page:c=1,pageSize:s=u,termOfSearch:h=void 0,type:y=void 0})=>{const m=await i({page:c,pageSize:s,termOfSearch:h,type:y});return await new Promise(C=>setTimeout(C,1e3)),{data:m.results,totalItemsCount:m.totalItemsCount}},[i]);return l.length===0?t.jsx("div",{children:"Loading..."}):t.jsx(f,{client:I,children:t.jsx(a,{...e,id:n,data:l,columns:b,showPagination:!0,fetchData:g,totalItems:d})})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
