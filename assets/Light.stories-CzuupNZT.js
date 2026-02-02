import{r as o,j as e}from"./iframe-Bn_zYVkQ.js";import{V as a,D as u,Q as C,a as y,E as w}from"./VirtualizedTable-Bk5nHkn0.js";import{A as b}from"./AlertDialog-CLnINBn5.js";import{C as v}from"./Checkbox-9G0rq1R8.js";import{T as j}from"./Typography-BK75nqwC.js";import{C as I}from"./check-1boxZDs4.js";import{g as i}from"./pokemon.repository-DRnipEC6.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-Nq0w9UEh.js";import"./index-B-7A89sm.js";import"./debounce-Dr2iNtXH.js";import"./isObject-BmMORa2_.js";import"./Button-1qVSaAO5.js";import"./index-C3wFPQlr.js";import"./index-aQzbjv51.js";import"./Filter-D0O_uCi5.js";import"./Badge-DnRIwH3a.js";import"./Loader-WLi4rQ97.js";import"./x-xtuj1Vio.js";import"./TimePicker-Bbj5jBVe.js";import"./DatePicker-BcmYM5CW.js";import"./style-1YjHF4jU.js";import"./chevron-right-BEKQEKzs.js";import"./DateRangePicker-DYhwpKCo.js";import"./RadioGroup-D5XVccgy.js";import"./Radio-BcSOuRyW.js";import"./Input-DOuHIFSP.js";import"./Warning-Cf3Crh7q.js";import"./index-DWQB616r.js";import"./index-B2rucInd.js";import"./index-FCfS518D.js";import"./index-BPquQhIf.js";import"./index-BZrJoUPC.js";import"./index-v9g7YqLf.js";import"./index-BdIZDC-Y.js";import"./index-CBa1Wc9B.js";import"./index-BSgp__eO.js";import"./index-B44331KA.js";import"./index-Bsgix1K4.js";import"./index-BCZA9o_0.js";import"./Combination-D9BhjQ-h.js";import"./index-D6mTTpc1.js";import"./useToggle-B6ckmTa_.js";import"./check-BHxD8Znu.js";import"./Loading-C6sYFc2R.js";import"./chevron-up-CkTKMyZ-.js";const we={title:"In Review/VirtualizedTable/Light",component:a},N=new y,T=[{header:"Id",accessorKey:"id",meta:{headerClassName:"whitespace-nowrap w-0"}},{header:"Name",accessorKey:"name",cell:t=>e.jsx(a.TruncateText,{...t,value:`${t.getValue().charAt(0).toUpperCase()}${t.getValue().slice(1)}`})},{header:"Type",accessorKey:"type",cell:t=>e.jsx(a.TruncateText,{...t,value:`${t.getValue().charAt(0).toUpperCase()}${t.getValue().slice(1)}`})},{header:"Height",accessorKey:"height"},{header:"Weight",accessorKey:"weight"},{header:"Ability",accessorKey:"ability",cell:t=>e.jsx(a.TruncateText,{...t,value:`${t.getValue().charAt(0).toUpperCase()}${t.getValue().slice(1)}`})},{id:"actions",enableSorting:!1,enableResizing:!1,cell:t=>e.jsx(a.Actions,{...t,actions:[{component:b,componentProps:{className:"w-full hover:no-underline hover:bg-gray-50 hover:text-slate-800 font-normal",buttonTriggerText:e.jsxs("span",{className:"text-blue-800 flex gap-2 w-full",children:[e.jsx(w,{className:"w-4 h-4"}),"First Action"]}),showCancelButton:!1,title:e.jsxs("div",{className:"flex flex-col gap-4 items-center justify-center",children:[e.jsx("span",{className:"p-3 rounded-full bg-green-600/15 w-12 h-12 flex items-center justify-center",children:e.jsx(I,{className:"text-green-600"})}),e.jsx(j,{className:"font-normal text-slate-700",children:"Cluster successfully deleted"})]}),isDescriptionChild:!0,description:e.jsxs("div",{className:"text-sm text-slate-800 flex flex-col gap-6",children:[e.jsxs("p",{className:"text-center",children:["When you close the Cluster details drawer you can view the logs in"," ",e.jsx("span",{className:"text-blue-600",children:"Cluster archives"}),"."]}),e.jsx(v,{defaultChecked:!0,label:"Don't show this message again"})]}),wrapperClassName:"max-w-[384px] gap-4",buttonConfirm:{text:"Got it!",className:"w-full mt-4"}},onClick:s=>{console.log(`Viewing details for ${JSON.stringify(s)}`)}},{label:"Second Action",onClick:s=>{console.log(`Viewing details for ${JSON.stringify(s)}`)}}]}),header:()=>e.jsx("span",{className:"sr-only",children:"Action Buttons"}),meta:{headerClassName:"w-[92px]",className:"flex justify-center"}}],P={showFilter:!0,showResetButton:!0,showPagination:!0,isLoading:!1,ariaLabel:"List of pokemons",pageSizes:[5,10,20,30,50],filterActions:[{label:"Export",variant:"secondary",onClick:()=>{console.log("Export")}}],multiSelectFilter:[{key:"type",label:"Type",options:[{id:"grass",label:"Grass",variant:"success"},{id:"fire",label:"Fire",variant:"danger"},{id:"water",label:"Water",variant:"info"},{id:"bug",label:"Bug",variant:"warning"},{id:"normal",label:"Normal",variant:void 0}]}]},r={args:P,render:t=>{const s=o.useId(),[{data:l,totalItemsCount:p},d]=o.useState({data:[],totalItemsCount:0});o.useEffect(()=>{(async()=>{const n=await i({page:1,pageSize:u});d({data:n.results,totalItemsCount:n.totalItemsCount})})()},[]);const g=o.useCallback(async({page:c=1,pageSize:n=u,termOfSearch:h=void 0,type:f=void 0})=>{const m=await i({page:c,pageSize:n,termOfSearch:h,type:f});return await new Promise(x=>setTimeout(x,1e3)),{data:m.results,totalItemsCount:m.totalItemsCount}},[i]);return l.length===0?e.jsx("div",{children:"Loading..."}):e.jsx(C,{client:N,children:e.jsx(a,{...t,id:s,data:l,columns:T,showPagination:!0,fetchData:g,totalItems:p})})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const be=["Light"];export{r as Light,be as __namedExportsOrder,we as default};
