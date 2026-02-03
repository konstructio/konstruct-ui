import{r as o,j as e}from"./iframe-CYvr-DNT.js";import{V as a,D as u,Q as C,a as y,E as w}from"./VirtualizedTable-lAZ18yTt.js";import{A as b}from"./AlertDialog-CjhAa2FG.js";import{C as v}from"./Checkbox-BL93BWoI.js";import{T as j}from"./Typography-DGsQkGV-.js";import{C as I}from"./check-C9AxCPV_.js";import{g as i}from"./pokemon.repository-C3llx-qw.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-Bg_aPHFQ.js";import"./index-B-7A89sm.js";import"./debounce-Pgcr4YGM.js";import"./isObject-D7YZ1v_L.js";import"./Button-BscITthV.js";import"./index-Cs63iYK6.js";import"./index-Bk2x6q9r.js";import"./Filter-Bw68uwZU.js";import"./Badge-C4Vqes0j.js";import"./Loader-UK7JRX3A.js";import"./x-DkY44w4V.js";import"./TimePicker-BvYqVpvz.js";import"./DatePicker-Bu2Z5dXU.js";import"./style-DhfiSkjW.js";import"./chevron-right-Hz6mjwkA.js";import"./DateRangePicker-DhSbxznz.js";import"./RadioGroup-TgVEDs1m.js";import"./Radio-CX4U3jyB.js";import"./Input-pC8_2qEP.js";import"./Warning-BMsvqDn2.js";import"./index-Ch8ux4gY.js";import"./index-C9cxtWaz.js";import"./index-BJuqEouu.js";import"./index-BzdkCSAX.js";import"./index-DL4nLMzl.js";import"./index-C6PXjNej.js";import"./index-DKZZeUgM.js";import"./index-BAMJ4xHS.js";import"./index-Ca1YmGZ8.js";import"./index-D8kkWhKd.js";import"./index-DKDpeX9y.js";import"./index-Ml5--ITj.js";import"./Combination-LnV8A-Ch.js";import"./index-C8qjT7c-.js";import"./useToggle-BFMWtIuo.js";import"./check-lmVysPvF.js";import"./Loading-rnYkjTV6.js";import"./chevron-up-OqF-rems.js";const we={title:"In Review/VirtualizedTable/Light",component:a},N=new y,T=[{header:"Id",accessorKey:"id",meta:{headerClassName:"whitespace-nowrap w-0"}},{header:"Name",accessorKey:"name",cell:t=>e.jsx(a.TruncateText,{...t,value:`${t.getValue().charAt(0).toUpperCase()}${t.getValue().slice(1)}`})},{header:"Type",accessorKey:"type",cell:t=>e.jsx(a.TruncateText,{...t,value:`${t.getValue().charAt(0).toUpperCase()}${t.getValue().slice(1)}`})},{header:"Height",accessorKey:"height"},{header:"Weight",accessorKey:"weight"},{header:"Ability",accessorKey:"ability",cell:t=>e.jsx(a.TruncateText,{...t,value:`${t.getValue().charAt(0).toUpperCase()}${t.getValue().slice(1)}`})},{id:"actions",enableSorting:!1,enableResizing:!1,cell:t=>e.jsx(a.Actions,{...t,actions:[{component:b,componentProps:{className:"w-full hover:no-underline hover:bg-gray-50 hover:text-slate-800 font-normal",buttonTriggerText:e.jsxs("span",{className:"text-blue-800 flex gap-2 w-full",children:[e.jsx(w,{className:"w-4 h-4"}),"First Action"]}),showCancelButton:!1,title:e.jsxs("div",{className:"flex flex-col gap-4 items-center justify-center",children:[e.jsx("span",{className:"p-3 rounded-full bg-green-600/15 w-12 h-12 flex items-center justify-center",children:e.jsx(I,{className:"text-green-600"})}),e.jsx(j,{className:"font-normal text-slate-700",children:"Cluster successfully deleted"})]}),isDescriptionChild:!0,description:e.jsxs("div",{className:"text-sm text-slate-800 flex flex-col gap-6",children:[e.jsxs("p",{className:"text-center",children:["When you close the Cluster details drawer you can view the logs in"," ",e.jsx("span",{className:"text-blue-600",children:"Cluster archives"}),"."]}),e.jsx(v,{defaultChecked:!0,label:"Don't show this message again"})]}),wrapperClassName:"max-w-[384px] gap-4",buttonConfirm:{text:"Got it!",className:"w-full mt-4"}},onClick:s=>{console.log(`Viewing details for ${JSON.stringify(s)}`)}},{label:"Second Action",onClick:s=>{console.log(`Viewing details for ${JSON.stringify(s)}`)}}]}),header:()=>e.jsx("span",{className:"sr-only",children:"Action Buttons"}),meta:{headerClassName:"w-[92px]",className:"flex justify-center"}}],P={showFilter:!0,showResetButton:!0,showPagination:!0,isLoading:!1,ariaLabel:"List of pokemons",pageSizes:[5,10,20,30,50],filterActions:[{label:"Export",variant:"secondary",onClick:()=>{console.log("Export")}}],multiSelectFilter:[{key:"type",label:"Type",options:[{id:"grass",label:"Grass",variant:"success"},{id:"fire",label:"Fire",variant:"danger"},{id:"water",label:"Water",variant:"info"},{id:"bug",label:"Bug",variant:"warning"},{id:"normal",label:"Normal",variant:void 0}]}]},r={args:P,render:t=>{const s=o.useId(),[{data:l,totalItemsCount:p},d]=o.useState({data:[],totalItemsCount:0});o.useEffect(()=>{(async()=>{const n=await i({page:1,pageSize:u});d({data:n.results,totalItemsCount:n.totalItemsCount})})()},[]);const g=o.useCallback(async({page:c=1,pageSize:n=u,termOfSearch:h=void 0,type:f=void 0})=>{const m=await i({page:c,pageSize:n,termOfSearch:h,type:f});return await new Promise(x=>setTimeout(x,1e3)),{data:m.results,totalItemsCount:m.totalItemsCount}},[i]);return l.length===0?e.jsx("div",{children:"Loading..."}):e.jsx(C,{client:N,children:e.jsx(a,{...t,id:s,data:l,columns:T,showPagination:!0,fetchData:g,totalItems:p})})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
