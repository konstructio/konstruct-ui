import{r as o,j as e}from"./iframe-RFUXcFU1.js";import{V as i,D as p,Q as b,a as E,E as N}from"./VirtualizedTable-CcLkWtc9.js";import{A as P}from"./AlertDialog-BcZPfKrc.js";import{C as D}from"./Checkbox-XVqTlsdu.js";import{T as s}from"./Typography-CVd2-NB0.js";import{C as S}from"./check-CNKZsA5v.js";import{g as m}from"./pokemon.repository-CIwk2qVq.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-DxjmVpWu.js";import"./index-BIgQ6y5l.js";import"./index-1q7I8vAB.js";import"./index-BGK4KL-m.js";import"./index-liLHGAx1.js";import"./index-DHc_NMzY.js";import"./index-CFloAkMw.js";import"./chevron-right-DZ3NCKzy.js";import"./debounce-DdzKvR2M.js";import"./isObject-DcT2bIqL.js";import"./Button-CI2FwOyy.js";import"./Filter-D3-07d-7.js";import"./Badge-D6cx8P8Y.js";import"./Loader-SkDEt_Hi.js";import"./x-QIzpNpBh.js";import"./TimePicker-CW40X-4X.js";import"./DatePicker-BZET92YJ.js";import"./style-BPUgxc4R.js";import"./DateRangePicker-Br-9AtM7.js";import"./RadioGroup-DiDC013F.js";import"./Radio-BWLwq_Uj.js";import"./Input-vqSmHewy.js";import"./Warning-42Y0Tt-y.js";import"./index-hF9rmkUV.js";import"./proxy-DDynkGEN.js";import"./index-C_YClENi.js";import"./index-DIC2GfCC.js";import"./index-WBpF_g3n.js";import"./index-B4rZCs8t.js";import"./index-B-zOr-0t.js";import"./index-fAG7fmiz.js";import"./index-BfUIXumI.js";import"./index-DOaO2IdY.js";import"./index-Pg7IPXrk.js";import"./Combination-DGMYMVtd.js";import"./index-Csk6_OSh.js";import"./useToggle-DpAoNMMY.js";import"./check-B2Zurhcn.js";import"./Loading-zzv5H3lb.js";import"./chevron-up-CeBY7FM5.js";const je={title:"In Review/VirtualizedTable/Light",component:i},v=new E,I=[{header:"Id",accessorKey:"id",meta:{headerClassName:"whitespace-nowrap w-0"}},{header:"Name",accessorKey:"name",cell:t=>e.jsx(i.TruncateText,{...t,value:`${t.getValue().charAt(0).toUpperCase()}${t.getValue().slice(1)}`})},{header:"Type",accessorKey:"type",cell:t=>e.jsx(i.TruncateText,{...t,value:`${t.getValue().charAt(0).toUpperCase()}${t.getValue().slice(1)}`})},{header:"Height",accessorKey:"height"},{header:"Weight",accessorKey:"weight"},{header:"Ability",accessorKey:"ability",cell:t=>e.jsx(i.TruncateText,{...t,value:`${t.getValue().charAt(0).toUpperCase()}${t.getValue().slice(1)}`})},{id:"actions",enableSorting:!1,enableResizing:!1,cell:t=>e.jsx(i.Actions,{...t,actions:[{component:P,componentProps:{className:"w-full hover:no-underline hover:bg-gray-50 hover:text-slate-800 font-normal",buttonTriggerText:e.jsxs("span",{className:"text-blue-800 flex gap-2 w-full",children:[e.jsx(N,{className:"w-4 h-4"}),"First Action"]}),showCancelButton:!1,title:e.jsxs("div",{className:"flex flex-col gap-4 items-center justify-center",children:[e.jsx("span",{className:"p-3 rounded-full bg-green-600/15 w-12 h-12 flex items-center justify-center",children:e.jsx(S,{className:"text-green-600"})}),e.jsx(s,{className:"font-normal text-slate-700",children:"Cluster successfully deleted"})]}),isDescriptionChild:!0,description:e.jsxs("div",{className:"text-sm text-slate-800 flex flex-col gap-6",children:[e.jsxs("p",{className:"text-center",children:["When you close the Cluster details drawer you can view the logs in"," ",e.jsx("span",{className:"text-blue-600",children:"Cluster archives"}),"."]}),e.jsx(D,{defaultChecked:!0,label:"Don't show this message again"})]}),wrapperClassName:"max-w-[384px] gap-4",buttonConfirm:{text:"Got it!",className:"w-full mt-4"}},onClick:a=>{console.log(`Viewing details for ${JSON.stringify(a)}`)}},{label:"Second Action",onClick:a=>{console.log(`Viewing details for ${JSON.stringify(a)}`)}}]}),header:()=>e.jsx("span",{className:"sr-only",children:"Action Buttons"}),meta:{headerClassName:"w-[92px]",className:"flex justify-center"}}],j={showFilter:!0,showResetButton:!0,showPagination:!0,isLoading:!1,ariaLabel:"List of pokemons",pageSizes:[5,10,20,30,50],filterActions:[{label:"Export",variant:"secondary",onClick:()=>{console.log("Export")}}],multiSelectFilter:[{key:"type",label:"Type",options:[{id:"grass",label:"Grass",variant:"success"},{id:"fire",label:"Fire",variant:"danger"},{id:"water",label:"Water",variant:"info"},{id:"bug",label:"Bug",variant:"warning"},{id:"normal",label:"Normal",variant:void 0}]}]},d={args:j,render:t=>{const a=o.useId(),[{data:r,totalItemsCount:g},h]=o.useState({data:[],totalItemsCount:0});o.useEffect(()=>{(async()=>{const n=await m({page:1,pageSize:p});h({data:n.results,totalItemsCount:n.totalItemsCount})})()},[]);const x=o.useCallback(async({page:l=1,pageSize:n=p,termOfSearch:f=void 0,type:C=void 0})=>{const c=await m({page:l,pageSize:n,termOfSearch:f,type:C});return await new Promise(y=>setTimeout(y,1e3)),{data:c.results,totalItemsCount:c.totalItemsCount}},[m]);return r.length===0?e.jsx("div",{children:"Loading..."}):e.jsx(b,{client:v,children:e.jsx(i,{...t,id:a,data:r,columns:I,showPagination:!0,fetchData:x,totalItems:g})})}},w=t=>t.map((a,r)=>({...a,meta:r%2===0?{expandedRow:e.jsxs("div",{className:"flex flex-col gap-2 py-2",children:[e.jsxs(s,{variant:"body3",className:"text-gray-500",children:["Details for ",a.name]}),e.jsxs("div",{className:"flex gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(s,{variant:"body3",className:"font-medium text-gray-700",children:"Type"}),e.jsx(s,{variant:"body2",children:a.type})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(s,{variant:"body3",className:"font-medium text-gray-700",children:"Ability"}),e.jsx(s,{variant:"body2",children:a.ability})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(s,{variant:"body3",className:"font-medium text-gray-700",children:"Height / Weight"}),e.jsxs(s,{variant:"body2",children:[a.height," / ",a.weight]})]})]})]})}:void 0})),u={args:{...j,enableExpandedRow:!0,ariaLabel:"List of pokemons with expandable rows"},render:t=>{const a=o.useId(),[{data:r,totalItemsCount:g},h]=o.useState({data:[],totalItemsCount:0});o.useEffect(()=>{(async()=>{const n=await m({page:1,pageSize:p});h({data:w(n.results),totalItemsCount:n.totalItemsCount})})()},[]);const x=o.useCallback(async({page:l=1,pageSize:n=p,termOfSearch:f=void 0,type:C=void 0})=>{const c=await m({page:l,pageSize:n,termOfSearch:f,type:C});return await new Promise(y=>setTimeout(y,500)),{data:w(c.results),totalItemsCount:c.totalItemsCount}},[]);return r.length===0?e.jsx("div",{children:"Loading..."}):e.jsx(b,{client:v,children:e.jsx(i,{...t,id:a,data:r,columns:I,showPagination:!0,fetchData:x,totalItems:g,enableExpandedRow:!0})})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const Ee=["Default","ExpandableRows"];export{d as Default,u as ExpandableRows,Ee as __namedExportsOrder,je as default};
