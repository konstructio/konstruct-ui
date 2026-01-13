import{r as o,j as t}from"./iframe-DM-U7zlc.js";import{V as a,D as u,Q as f,a as w,E as x}from"./VirtualizedTable-CACgHaZo.js";import{g as i}from"./pokemon.repository-DbwuNpQ5.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-DDCKOj0e.js";import"./index-Bn42e07n.js";import"./debounce-XmOQar-T.js";import"./Button-BeuM06A6.js";import"./index-26-tmQnE.js";import"./index-Jx0j8AOA.js";import"./Filter-GrnGjZew.js";import"./Badge-DkIbCw9Y.js";import"./loader-D_xeEEKU.js";import"./x-C2dnpU5P.js";import"./Checkbox-DBj1RUuT.js";import"./index-D-bG0I7Z.js";import"./index-loobOMh0.js";import"./index-BW5l5oxW.js";import"./index-wCxUJ3Cv.js";import"./index-D14QYf6-.js";import"./index-CR-evOue.js";import"./useToggle-BmHF8z6i.js";import"./check-C17cDZIE.js";import"./index-BkpwSWGq.js";import"./chevron-down-BM03cgtr.js";import"./DatePicker-Bn25erUx.js";import"./chevron-right-BnDxS5gm.js";import"./Input-AGS-URA-.js";import"./Warning-CtQEZbqQ.js";import"./index-DA55L05y.js";import"./index-DDKPs5Yf.js";import"./index-C0FmoScI.js";import"./index-DuzQSWOL.js";import"./Typography-UsIfsFyK.js";import"./Loading-YCLS0JbF.js";import"./chevron-up-XvEikPHc.js";const re={title:"In Review/VirtualizedTable/Light",component:a},I=new w,b=[{header:"Id",accessorKey:"id",meta:{headerClassName:"w-12"}},{header:"Name",accessorKey:"name",cell:e=>t.jsx(a.TruncateText,{...e,value:`${e.getValue().charAt(0).toUpperCase()}${e.getValue().slice(1)}`})},{header:"Type",accessorKey:"type",cell:e=>t.jsx(a.TruncateText,{...e,value:`${e.getValue().charAt(0).toUpperCase()}${e.getValue().slice(1)}`})},{header:"Height",accessorKey:"height"},{header:"Weight",accessorKey:"weight"},{header:"Ability",accessorKey:"ability",cell:e=>t.jsx(a.TruncateText,{...e,value:`${e.getValue().charAt(0).toUpperCase()}${e.getValue().slice(1)}`})},{id:"actions",enableSorting:!1,enableResizing:!1,cell:e=>t.jsx(a.Actions,{...e,actions:[{label:t.jsxs("span",{className:"text-blue-800 flex items-center gap-2",children:[t.jsx(x,{className:"w-4 h-4"}),"First Action"]}),onClick:n=>{console.log(`Viewing details for ${JSON.stringify(n)}`)},className:"text-slate-800"},{label:"Second Action",onClick:n=>{console.log(`Viewing details for ${JSON.stringify(n)}`)}}]}),header:()=>t.jsx("span",{className:"sr-only",children:"Action Buttons"}),meta:{headerClassName:"w-[92px]",className:"flex justify-center"}}],v={showFilter:!0,showResetButton:!0,showPagination:!0,isLoading:!1,ariaLabel:"List of pokemons",pageSizes:[5,10,20,30,50],filterActions:[{label:"Export",variant:"secondary",onClick:()=>{console.log("Export")}}],multiSelectFilter:[{key:"type",label:"Type",options:[{id:"grass",label:"Grass",variant:"success"},{id:"fire",label:"Fire",variant:"danger"},{id:"water",label:"Water",variant:"info"},{id:"bug",label:"Bug",variant:"warning"},{id:"normal",label:"Normal",variant:void 0}]}]},r={args:v,render:e=>{const n=o.useId(),[{data:l,totalItemsCount:d},p]=o.useState({data:[],totalItemsCount:0});o.useEffect(()=>{(async()=>{const s=await i({page:1,pageSize:u});p({data:s.results,totalItemsCount:s.totalItemsCount})})()},[]);const g=o.useCallback(async({page:c=1,pageSize:s=u,termOfSearch:h=void 0,type:y=void 0})=>{const m=await i({page:c,pageSize:s,termOfSearch:h,type:y});return await new Promise(C=>setTimeout(C,1e3)),{data:m.results,totalItemsCount:m.totalItemsCount}},[i]);return l.length===0?t.jsx("div",{children:"Loading..."}):t.jsx(f,{client:I,children:t.jsx(a,{...e,id:n,data:l,columns:b,showPagination:!0,fetchData:g,totalItems:d})})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
