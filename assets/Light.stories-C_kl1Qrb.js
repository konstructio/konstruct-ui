import{r as o,j as e}from"./iframe-BXO_EhpM.js";import{V as a,D as u,Q as C,a as y,E as w}from"./VirtualizedTable-C9gw-ouP.js";import{A as b}from"./AlertDialog-B26oIB-f.js";import{C as v}from"./Checkbox-DKg1EpNg.js";import{T as j}from"./Typography-Bc3KsAQu.js";import{C as I}from"./check-DUkP-dZI.js";import{g as i}from"./pokemon.repository-BN-rLQLv.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-BvIK0-7g.js";import"./index-BIgQ6y5l.js";import"./debounce-DPBAvr5C.js";import"./isObject-nsYsjzPG.js";import"./Button-BR0-snVO.js";import"./index-CxlmtjIK.js";import"./index-D_E6ICQ7.js";import"./Filter-CCTTkMED.js";import"./Badge-Bi8xE0_V.js";import"./Loader-Bu_oHQo7.js";import"./x-ht38r2Si.js";import"./TimePicker-UIyAM6wF.js";import"./DatePicker-DfQccgoi.js";import"./style-BBFTxbZY.js";import"./chevron-right-BbFQLuUX.js";import"./DateRangePicker-C_Nolzgq.js";import"./RadioGroup-BbQfmraC.js";import"./Radio-C7_Aj0ZM.js";import"./Input-DOIuvlYX.js";import"./Warning-BMg_Tjff.js";import"./index-jSjLyp38.js";import"./proxy-ClNoopVP.js";import"./index-BvfLEAS3.js";import"./index-CcJZc0wx.js";import"./index-vvKf7FSZ.js";import"./index-CUjo4IK2.js";import"./index-Bb9TVV8M.js";import"./index-D1mHuaMe.js";import"./index-CRnhzV4_.js";import"./index-dPD-S0LF.js";import"./index-DyYn48wP.js";import"./index-xV3Pa9b1.js";import"./index-2xhGqCgO.js";import"./Combination-7vFo2g7-.js";import"./index-Bn_ZaH7x.js";import"./useToggle-BldnEv0p.js";import"./check-DSFAKICc.js";import"./Loading-BCTJK2O0.js";import"./chevron-up-9raJW-XM.js";const be={title:"In Review/VirtualizedTable/Light",component:a},N=new y,T=[{header:"Id",accessorKey:"id",meta:{headerClassName:"whitespace-nowrap w-0"}},{header:"Name",accessorKey:"name",cell:t=>e.jsx(a.TruncateText,{...t,value:`${t.getValue().charAt(0).toUpperCase()}${t.getValue().slice(1)}`})},{header:"Type",accessorKey:"type",cell:t=>e.jsx(a.TruncateText,{...t,value:`${t.getValue().charAt(0).toUpperCase()}${t.getValue().slice(1)}`})},{header:"Height",accessorKey:"height"},{header:"Weight",accessorKey:"weight"},{header:"Ability",accessorKey:"ability",cell:t=>e.jsx(a.TruncateText,{...t,value:`${t.getValue().charAt(0).toUpperCase()}${t.getValue().slice(1)}`})},{id:"actions",enableSorting:!1,enableResizing:!1,cell:t=>e.jsx(a.Actions,{...t,actions:[{component:b,componentProps:{className:"w-full hover:no-underline hover:bg-gray-50 hover:text-slate-800 font-normal",buttonTriggerText:e.jsxs("span",{className:"text-blue-800 flex gap-2 w-full",children:[e.jsx(w,{className:"w-4 h-4"}),"First Action"]}),showCancelButton:!1,title:e.jsxs("div",{className:"flex flex-col gap-4 items-center justify-center",children:[e.jsx("span",{className:"p-3 rounded-full bg-green-600/15 w-12 h-12 flex items-center justify-center",children:e.jsx(I,{className:"text-green-600"})}),e.jsx(j,{className:"font-normal text-slate-700",children:"Cluster successfully deleted"})]}),isDescriptionChild:!0,description:e.jsxs("div",{className:"text-sm text-slate-800 flex flex-col gap-6",children:[e.jsxs("p",{className:"text-center",children:["When you close the Cluster details drawer you can view the logs in"," ",e.jsx("span",{className:"text-blue-600",children:"Cluster archives"}),"."]}),e.jsx(v,{defaultChecked:!0,label:"Don't show this message again"})]}),wrapperClassName:"max-w-[384px] gap-4",buttonConfirm:{text:"Got it!",className:"w-full mt-4"}},onClick:s=>{console.log(`Viewing details for ${JSON.stringify(s)}`)}},{label:"Second Action",onClick:s=>{console.log(`Viewing details for ${JSON.stringify(s)}`)}}]}),header:()=>e.jsx("span",{className:"sr-only",children:"Action Buttons"}),meta:{headerClassName:"w-[92px]",className:"flex justify-center"}}],P={showFilter:!0,showResetButton:!0,showPagination:!0,isLoading:!1,ariaLabel:"List of pokemons",pageSizes:[5,10,20,30,50],filterActions:[{label:"Export",variant:"secondary",onClick:()=>{console.log("Export")}}],multiSelectFilter:[{key:"type",label:"Type",options:[{id:"grass",label:"Grass",variant:"success"},{id:"fire",label:"Fire",variant:"danger"},{id:"water",label:"Water",variant:"info"},{id:"bug",label:"Bug",variant:"warning"},{id:"normal",label:"Normal",variant:void 0}]}]},r={args:P,render:t=>{const s=o.useId(),[{data:l,totalItemsCount:p},d]=o.useState({data:[],totalItemsCount:0});o.useEffect(()=>{(async()=>{const n=await i({page:1,pageSize:u});d({data:n.results,totalItemsCount:n.totalItemsCount})})()},[]);const g=o.useCallback(async({page:c=1,pageSize:n=u,termOfSearch:h=void 0,type:f=void 0})=>{const m=await i({page:c,pageSize:n,termOfSearch:h,type:f});return await new Promise(x=>setTimeout(x,1e3)),{data:m.results,totalItemsCount:m.totalItemsCount}},[i]);return l.length===0?e.jsx("div",{children:"Loading..."}):e.jsx(C,{client:N,children:e.jsx(a,{...t,id:s,data:l,columns:T,showPagination:!0,fetchData:g,totalItems:p})})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const ve=["Light"];export{r as Light,ve as __namedExportsOrder,be as default};
