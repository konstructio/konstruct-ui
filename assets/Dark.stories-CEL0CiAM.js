import{r as o,j as t}from"./iframe-CXfe2m7b.js";import{V as a,D as u,Q as f,a as C,E as w}from"./VirtualizedTable-Mvcccz6Y.js";import{g as i}from"./pokemon.repository-CD1zqxO9.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-DP3qgoNS.js";import"./index-B-7A89sm.js";import"./debounce-D1EVd7f4.js";import"./isObject-B7Tw1xv1.js";import"./Button-C-iR94TL.js";import"./index-CT5XcF7v.js";import"./index-HWT8ds2M.js";import"./Filter-iHX-vxXP.js";import"./Badge-CWlqdd1_.js";import"./Loader-BK45g57-.js";import"./x-D8JCEUqZ.js";import"./Checkbox-CPz-UUAn.js";import"./index-CTPiofXa.js";import"./index-B0Yk7S0c.js";import"./index-CATosLJL.js";import"./index-1zbkfSG9.js";import"./index-2k6Os8Nw.js";import"./index--vbQmb1t.js";import"./useToggle-BQQfcmhV.js";import"./check-GGgQh86i.js";import"./index-DpMUpOLZ.js";import"./TimePicker-JYTxX5uM.js";import"./Typography-CXZPBEcx.js";import"./DatePicker-CLdAPsgA.js";import"./style-B03omc7W.js";import"./chevron-right-Bx83USUn.js";import"./DateRangePicker-CL5MH0jq.js";import"./RadioGroup-Biyp_fZL.js";import"./Radio-CG3JwMVx.js";import"./Input-Vd5ZMRBq.js";import"./Warning-QrQhKoqr.js";import"./proxy-DDpiuYQ4.js";import"./index-vysaVsyF.js";import"./index-Dp1SmX06.js";import"./index-DM7GoA6a.js";import"./index-C4epgsVY.js";import"./Loading-C6-cuz77.js";import"./chevron-up-CXS7qRLw.js";const de={title:"In Review/VirtualizedTable/Dark",component:a},v=new C,x=[{header:"Id",accessorKey:"id",meta:{headerClassName:"whitespace-nowrap w-0"}},{header:"Name",accessorKey:"name",cell:e=>t.jsx(a.TruncateText,{...e,value:`${e.getValue().charAt(0).toUpperCase()}${e.getValue().slice(1)}`})},{header:"Type",accessorKey:"type",cell:e=>t.jsx(a.TruncateText,{...e,value:`${e.getValue().charAt(0).toUpperCase()}${e.getValue().slice(1)}`})},{header:"Height",accessorKey:"height"},{header:"Weight",accessorKey:"weight"},{header:"Ability",accessorKey:"ability",cell:e=>t.jsx(a.TruncateText,{...e,value:`${e.getValue().charAt(0).toUpperCase()}${e.getValue().slice(1)}`})},{id:"actions",enableSorting:!1,enableResizing:!1,cell:e=>t.jsx(a.Actions,{...e,actions:[{label:t.jsxs("span",{className:"flex items-center gap-2",children:[t.jsx(w,{className:"w-4 h-4"}),"First Action"]}),onClick:n=>{console.log(`Viewing details for ${JSON.stringify(n)}`)},className:"text-slate-800"},{label:"Second Action",onClick:n=>{console.log(`Viewing details for ${JSON.stringify(n)}`)}}]}),header:()=>t.jsx("span",{className:"sr-only",children:"Action Buttons"}),meta:{headerClassName:"w-[92px]",className:"flex justify-center"}}],I={showFilter:!0,showResetButton:!0,showPagination:!0,isLoading:!1,ariaLabel:"List of pokemons",pageSizes:[5,10,20,30,50],filterActions:[{label:"Export",variant:"secondary",onClick:()=>{console.log("Export")}}],multiSelectFilter:[{key:"type",label:"Type",options:[{id:"grass",label:"Grass",variant:"success"},{id:"fire",label:"Fire",variant:"danger"},{id:"water",label:"Water",variant:"info"},{id:"bug",label:"Bug",variant:"warning"},{id:"normal",label:"Normal",variant:void 0}]}]},r={args:I,render:e=>{const n=o.useId(),[{data:l,totalItemsCount:d},p]=o.useState({data:[],totalItemsCount:0});o.useEffect(()=>{(async()=>{const s=await i({page:1,pageSize:u});p({data:s.results,totalItemsCount:s.totalItemsCount})})()},[]),o.useEffect(()=>(document.body.setAttribute("data-theme","dark"),document.body.classList.add("bg-metal-900"),()=>{document.body.removeAttribute("data-theme"),document.body.classList.remove("bg-metal-900")}),[]);const g=o.useCallback(async({page:m=1,pageSize:s=u,termOfSearch:y=void 0,type:h=void 0})=>{const c=await i({page:m,pageSize:s,termOfSearch:y,type:h});return await new Promise(b=>setTimeout(b,1e3)),{data:c.results,totalItemsCount:c.totalItemsCount}},[i]);return l.length===0?t.jsx("div",{children:"Loading..."}):t.jsx(f,{client:v,children:t.jsx(a,{...e,id:n,data:l,columns:x,showPagination:!0,fetchData:g,totalItems:d})})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const pe=["Dark"];export{r as Dark,pe as __namedExportsOrder,de as default};
