import{r as s,j as e}from"./iframe-DzqcIqyR.js";import{V as d,D as g,Q as C,a as P,E as j,s as k,b as D}from"./VirtualizedTable-ZIlXe1K_.js";import{B as L}from"./Button-CzXoaHXK.js";import{T as o}from"./Typography-A9RCCnP7.js";import{g as p}from"./pokemon.repository-CbucLb0G.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-va641UPV.js";import"./index-CGPp45Jz.js";import"./index-CZxVwbWr.js";import"./index-DH9Ltsjp.js";import"./index-ClGMKl8Z.js";import"./index-BeGbFKQs.js";import"./index-OJi8xCWq.js";import"./chevron-right-BVkJw_-A.js";import"./debounce-Q0uzp3z7.js";import"./isObject-Ba4KqRG3.js";import"./Filter-B6wb9G1j.js";import"./Badge-Dux8j1r7.js";import"./Loader-BObM8lmG.js";import"./x-DMb9O_Hn.js";import"./Checkbox-S4nDa27r.js";import"./index-C4DQ2ouy.js";import"./index-Be2LMdCn.js";import"./index-B2sNscpS.js";import"./index-QMtm4YCj.js";import"./useToggle-CoCjW6GV.js";import"./check-CmBhLzNn.js";import"./index-Bc1wOnN3.js";import"./TimePicker-DyAoiBJW.js";import"./DatePicker-B3jrh6if.js";import"./style-Db9eJAfs.js";import"./DateRangePicker-D0dfpumh.js";import"./RadioGroup-j1B1VJKY.js";import"./Radio-BOHyZF0L.js";import"./Input-krVlyctV.js";import"./Warning-DbY5aqkH.js";import"./proxy-Debh4QnL.js";import"./index-Rc7rEKZC.js";import"./index-msTI1f5w.js";import"./index-DQ7zAPKz.js";import"./index-B-jL0zt0.js";import"./Loading-5YQIjlDh.js";import"./chevron-up-9zzpSm-_.js";const Ie={title:"In Review/VirtualizedTable/Dark",component:d},E=new P,I=[{header:"Id",accessorKey:"id",meta:{headerClassName:"whitespace-nowrap w-0"}},{header:"Name",accessorKey:"name",cell:a=>e.jsx(d.TruncateText,{...a,value:`${a.getValue().charAt(0).toUpperCase()}${a.getValue().slice(1)}`})},{header:"Type",accessorKey:"type",cell:a=>e.jsx(d.TruncateText,{...a,value:`${a.getValue().charAt(0).toUpperCase()}${a.getValue().slice(1)}`})},{header:"Height",accessorKey:"height"},{header:"Weight",accessorKey:"weight"},{header:"Ability",accessorKey:"ability",cell:a=>e.jsx(d.TruncateText,{...a,value:`${a.getValue().charAt(0).toUpperCase()}${a.getValue().slice(1)}`})},{id:"actions",enableSorting:!1,enableResizing:!1,cell:a=>e.jsx(d.Actions,{...a,actions:[{label:e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx(j,{className:"w-4 h-4"}),"First Action"]}),onClick:n=>{console.log(`Viewing details for ${JSON.stringify(n)}`)},className:"text-slate-800"},{label:"Second Action",onClick:n=>{console.log(`Viewing details for ${JSON.stringify(n)}`)}}]}),header:()=>e.jsx("span",{className:"sr-only",children:"Action Buttons"}),meta:{headerClassName:"w-[92px]",className:"flex justify-center"}}],T={showFilter:!0,showResetButton:!0,showPagination:!0,isLoading:!1,ariaLabel:"List of pokemons",pageSizes:[5,10,20,30,50],filterActions:[{label:"Export",variant:"secondary",onClick:()=>{console.log("Export")}}],multiSelectFilter:[{key:"type",label:"Type",options:[{id:"grass",label:"Grass",variant:"success"},{id:"fire",label:"Fire",variant:"danger"},{id:"water",label:"Water",variant:"info"},{id:"bug",label:"Bug",variant:"warning"},{id:"normal",label:"Normal",variant:void 0}]}]},x={args:T,render:a=>{const n=s.useId(),[{data:c,totalItemsCount:y},m]=s.useState({data:[],totalItemsCount:0});s.useEffect(()=>{(async()=>{const i=await p({page:1,pageSize:g});m({data:i.results,totalItemsCount:i.totalItemsCount})})()},[]),s.useEffect(()=>(document.body.setAttribute("data-theme","dark"),document.body.classList.add("bg-metal-900"),()=>{document.body.removeAttribute("data-theme"),document.body.classList.remove("bg-metal-900")}),[]);const h=s.useCallback(async({page:u=1,pageSize:i=g,termOfSearch:b=void 0,type:t=void 0})=>{const r=await p({page:u,pageSize:i,termOfSearch:b,type:t});return await new Promise(l=>setTimeout(l,1e3)),{data:r.results,totalItemsCount:r.totalItemsCount}},[p]);return c.length===0?e.jsx("div",{children:"Loading..."}):e.jsx(C,{client:E,children:e.jsx(d,{...a,id:n,data:c,columns:I,showPagination:!0,fetchData:h,totalItems:y})})}},N=a=>a.map(n=>({...n,meta:{expandedRow:e.jsxs("div",{className:"flex flex-col gap-2 py-2",children:[e.jsxs(o,{variant:"body3",className:"text-metal-400",children:["Details for ",n.name]}),e.jsxs("div",{className:"flex gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(o,{variant:"body3",className:"font-medium text-metal-300",children:"Type"}),e.jsx(o,{variant:"body2",children:n.type})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(o,{variant:"body3",className:"font-medium text-metal-300",children:"Ability"}),e.jsx(o,{variant:"body2",children:n.ability})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(o,{variant:"body3",className:"font-medium text-metal-300",children:"Height / Weight"}),e.jsxs(o,{variant:"body2",children:[n.height," / ",n.weight]})]})]})]})}})),f={args:{...T,enableExpandedRow:!0,ariaLabel:"List of pokemons with expandable rows"},render:a=>{const n=s.useId(),[{data:c,totalItemsCount:y},m]=s.useState({data:[],totalItemsCount:0});s.useEffect(()=>{(async()=>{const i=await p({page:1,pageSize:g});m({data:N(i.results),totalItemsCount:i.totalItemsCount})})()},[]),s.useEffect(()=>(document.body.setAttribute("data-theme","dark"),document.body.classList.add("bg-metal-900"),()=>{document.body.removeAttribute("data-theme"),document.body.classList.remove("bg-metal-900")}),[]);const h=s.useCallback(async({page:u=1,pageSize:i=g,termOfSearch:b=void 0,type:t=void 0})=>{const r=await p({page:u,pageSize:i,termOfSearch:b,type:t});return await new Promise(l=>setTimeout(l,500)),{data:N(r.results),totalItemsCount:r.totalItemsCount}},[]);return c.length===0?e.jsx("div",{children:"Loading..."}):e.jsx(C,{client:E,children:e.jsx(d,{...a,enableHoverRow:!0,id:n,data:c,columns:I,showPagination:!0,fetchData:h,totalItems:y,enableExpandedRow:!0})})}},w="external-trigger-table",v={args:{...T,enableExpandedRow:!0,ariaLabel:"List of pokemons with external expand trigger"},render:a=>{const[{data:n,totalItemsCount:c},y]=s.useState({data:[],totalItemsCount:0}),[m,h]=s.useState({}),u=t=>{h(r=>{const l=!r[t];return l?k(w,t):D(w,t),{...r,[t]:l}})};s.useEffect(()=>{(async()=>{const r=await p({page:1,pageSize:g});y({data:r.results,totalItemsCount:r.totalItemsCount})})()},[]),s.useEffect(()=>(document.body.setAttribute("data-theme","dark"),document.body.classList.add("bg-metal-900"),()=>{document.body.removeAttribute("data-theme"),document.body.classList.remove("bg-metal-900")}),[]);const i=s.useCallback(async({page:t=1,pageSize:r=g,termOfSearch:l=void 0,type:R=void 0})=>{const S=await p({page:t,pageSize:r,termOfSearch:l,type:R});return await new Promise(A=>setTimeout(A,500)),{data:S.results,totalItemsCount:S.totalItemsCount}},[]),b=[...I.filter(t=>t.id!=="actions"),{id:"select-action",enableSorting:!1,enableResizing:!1,cell:({row:t})=>e.jsx(L,{variant:m[t.id]?"primary":"secondary",appearance:"compact",onClick:()=>u(t.id),children:m[t.id]?"Remove":"Add"}),header:()=>e.jsx("span",{className:"sr-only",children:"Select"}),meta:{headerClassName:"w-[150px]",className:"flex justify-center h-12 items-center"}}];return n.length===0?e.jsx("div",{children:"Loading..."}):e.jsx(C,{client:E,children:e.jsx(d,{...a,enableHoverRow:!0,id:w,data:n,getRowId:t=>String(t.id),columns:b,showPagination:!0,fetchData:i,totalItems:c,enableExpandedRow:!0,keepExpandColumnVisible:m,renderExpandedRow:t=>e.jsxs("div",{className:"flex flex-col gap-2 py-2",children:[e.jsxs(o,{variant:"body3",className:"text-metal-400",children:["Configuration for ",t.name]}),e.jsxs("div",{className:"flex gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(o,{variant:"body3",className:"font-medium text-metal-300",children:"Type"}),e.jsx(o,{variant:"body2",children:t.type})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(o,{variant:"body3",className:"font-medium text-metal-300",children:"Ability"}),e.jsx(o,{variant:"body2",children:t.ability})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(o,{variant:"body3",className:"font-medium text-metal-300",children:"Height / Weight"}),e.jsxs(o,{variant:"body2",children:[t.height," /"," ",t.weight]})]})]})]})})})}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
        <VirtualizedTableComponent<PokemonWithMeta> {...storyArgs} enableHoverRow id={id} data={data} columns={columns as ColumnDef<PokemonWithMeta>[]} showPagination={true} fetchData={getNewData} totalItems={totalItemsCount} enableExpandedRow />
      </QueryClientProvider>;
  }
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    ...args,
    enableExpandedRow: true,
    ariaLabel: 'List of pokemons with external expand trigger'
  },
  render: storyArgs => {
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
    const [selectedRows, setSelectedRows] = useState<Record<string, boolean>>({});
    const handleToggleSelect = (rowId: string) => {
      setSelectedRows(prev => {
        const isSelected = !prev[rowId];
        if (isSelected) {
          sendExpandRowEvent(EXTERNAL_TRIGGER_TABLE_ID, rowId);
        } else {
          sendCollapseRowEvent(EXTERNAL_TRIGGER_TABLE_ID, rowId);
        }
        return {
          ...prev,
          [rowId]: isSelected
        };
      });
    };
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
      await new Promise(resolve => setTimeout(resolve, 500));
      return {
        data: result.results,
        totalItemsCount: result.totalItemsCount
      };
    }, []);
    const columnsWithSelectButton: ColumnDef<Pokemon>[] = [...columns.filter(col => col.id !== 'actions'), {
      id: 'select-action',
      enableSorting: false,
      enableResizing: false,
      cell: ({
        row
      }) => <Button variant={selectedRows[row.id] ? 'primary' : 'secondary'} appearance="compact" onClick={() => handleToggleSelect(row.id)}>
            {selectedRows[row.id] ? 'Remove' : 'Add'}
          </Button>,
      header: () => <span className="sr-only">Select</span>,
      meta: {
        headerClassName: 'w-[150px]',
        className: 'flex justify-center h-12 items-center'
      }
    }];
    if (data.length === 0) {
      return <div>Loading...</div>;
    }
    return <QueryClientProvider client={queryClient}>
        <VirtualizedTableComponent<Pokemon> {...storyArgs} enableHoverRow id={EXTERNAL_TRIGGER_TABLE_ID} data={data} getRowId={row => String(row.id)} columns={columnsWithSelectButton} showPagination={true} fetchData={getNewData} totalItems={totalItemsCount} enableExpandedRow keepExpandColumnVisible={selectedRows} renderExpandedRow={rowData => <div className="flex flex-col gap-2 py-2">
              <Typography variant="body3" className="text-metal-400">
                Configuration for {(rowData as Pokemon).name}
              </Typography>
              <div className="flex gap-4">
                <div className="flex flex-col gap-1">
                  <Typography variant="body3" className="font-medium text-metal-300">
                    Type
                  </Typography>
                  <Typography variant="body2">
                    {(rowData as Pokemon).type}
                  </Typography>
                </div>
                <div className="flex flex-col gap-1">
                  <Typography variant="body3" className="font-medium text-metal-300">
                    Ability
                  </Typography>
                  <Typography variant="body2">
                    {(rowData as Pokemon).ability}
                  </Typography>
                </div>
                <div className="flex flex-col gap-1">
                  <Typography variant="body3" className="font-medium text-metal-300">
                    Height / Weight
                  </Typography>
                  <Typography variant="body2">
                    {(rowData as Pokemon).height} /{' '}
                    {(rowData as Pokemon).weight}
                  </Typography>
                </div>
              </div>
            </div>} />
      </QueryClientProvider>;
  }
}`,...v.parameters?.docs?.source}}};const Te=["Default","ExpandableRows","ExpandableRowsWithExternalTrigger"];export{x as Default,f as ExpandableRows,v as ExpandableRowsWithExternalTrigger,Te as __namedExportsOrder,Ie as default};
