import{r as o,j as t}from"./iframe-CYvr-DNT.js";import{V as a,D as u,Q as f,a as C,E as w}from"./VirtualizedTable-lAZ18yTt.js";import{g as i}from"./pokemon.repository-C3llx-qw.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-Bg_aPHFQ.js";import"./index-B-7A89sm.js";import"./debounce-Pgcr4YGM.js";import"./isObject-D7YZ1v_L.js";import"./Button-BscITthV.js";import"./index-Cs63iYK6.js";import"./index-Bk2x6q9r.js";import"./Filter-Bw68uwZU.js";import"./Badge-C4Vqes0j.js";import"./Loader-UK7JRX3A.js";import"./x-DkY44w4V.js";import"./Checkbox-BL93BWoI.js";import"./index-BJuqEouu.js";import"./index-BzdkCSAX.js";import"./index-DL4nLMzl.js";import"./index-C8qjT7c-.js";import"./index-Ca1YmGZ8.js";import"./index-D8kkWhKd.js";import"./useToggle-BFMWtIuo.js";import"./check-lmVysPvF.js";import"./index-Ch8ux4gY.js";import"./TimePicker-BvYqVpvz.js";import"./Typography-DGsQkGV-.js";import"./DatePicker-Bu2Z5dXU.js";import"./style-DhfiSkjW.js";import"./chevron-right-Hz6mjwkA.js";import"./DateRangePicker-DhSbxznz.js";import"./RadioGroup-TgVEDs1m.js";import"./Radio-CX4U3jyB.js";import"./Input-pC8_2qEP.js";import"./Warning-BMsvqDn2.js";import"./index-C9cxtWaz.js";import"./index-C6PXjNej.js";import"./index-DKZZeUgM.js";import"./index-BAMJ4xHS.js";import"./Loading-rnYkjTV6.js";import"./chevron-up-OqF-rems.js";const ue={title:"In Review/VirtualizedTable/Dark",component:a},v=new C,x=[{header:"Id",accessorKey:"id",meta:{headerClassName:"whitespace-nowrap w-0"}},{header:"Name",accessorKey:"name",cell:e=>t.jsx(a.TruncateText,{...e,value:`${e.getValue().charAt(0).toUpperCase()}${e.getValue().slice(1)}`})},{header:"Type",accessorKey:"type",cell:e=>t.jsx(a.TruncateText,{...e,value:`${e.getValue().charAt(0).toUpperCase()}${e.getValue().slice(1)}`})},{header:"Height",accessorKey:"height"},{header:"Weight",accessorKey:"weight"},{header:"Ability",accessorKey:"ability",cell:e=>t.jsx(a.TruncateText,{...e,value:`${e.getValue().charAt(0).toUpperCase()}${e.getValue().slice(1)}`})},{id:"actions",enableSorting:!1,enableResizing:!1,cell:e=>t.jsx(a.Actions,{...e,actions:[{label:t.jsxs("span",{className:"flex items-center gap-2",children:[t.jsx(w,{className:"w-4 h-4"}),"First Action"]}),onClick:n=>{console.log(`Viewing details for ${JSON.stringify(n)}`)},className:"text-slate-800"},{label:"Second Action",onClick:n=>{console.log(`Viewing details for ${JSON.stringify(n)}`)}}]}),header:()=>t.jsx("span",{className:"sr-only",children:"Action Buttons"}),meta:{headerClassName:"w-[92px]",className:"flex justify-center"}}],I={showFilter:!0,showResetButton:!0,showPagination:!0,isLoading:!1,ariaLabel:"List of pokemons",pageSizes:[5,10,20,30,50],filterActions:[{label:"Export",variant:"secondary",onClick:()=>{console.log("Export")}}],multiSelectFilter:[{key:"type",label:"Type",options:[{id:"grass",label:"Grass",variant:"success"},{id:"fire",label:"Fire",variant:"danger"},{id:"water",label:"Water",variant:"info"},{id:"bug",label:"Bug",variant:"warning"},{id:"normal",label:"Normal",variant:void 0}]}]},r={args:I,render:e=>{const n=o.useId(),[{data:l,totalItemsCount:d},p]=o.useState({data:[],totalItemsCount:0});o.useEffect(()=>{(async()=>{const s=await i({page:1,pageSize:u});p({data:s.results,totalItemsCount:s.totalItemsCount})})()},[]),o.useEffect(()=>(document.body.setAttribute("data-theme","dark"),document.body.classList.add("bg-metal-900"),()=>{document.body.removeAttribute("data-theme"),document.body.classList.remove("bg-metal-900")}),[]);const g=o.useCallback(async({page:m=1,pageSize:s=u,termOfSearch:y=void 0,type:h=void 0})=>{const c=await i({page:m,pageSize:s,termOfSearch:y,type:h});return await new Promise(b=>setTimeout(b,1e3)),{data:c.results,totalItemsCount:c.totalItemsCount}},[i]);return l.length===0?t.jsx("div",{children:"Loading..."}):t.jsx(f,{client:v,children:t.jsx(a,{...e,id:n,data:l,columns:x,showPagination:!0,fetchData:g,totalItems:d})})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const de=["Dark"];export{r as Dark,de as __namedExportsOrder,ue as default};
