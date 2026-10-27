import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./react-BlIEEezU.js";import{t as n}from"./jsx-runtime-BB9-612F.js";import{n as r,t as i}from"./Profile-DeTDPzPl.js";import{i as a,t as o}from"./utils-DWfjJEhS.js";import{n as s,t as c}from"./dist-BIkUQYOj.js";var l;function u(){return(u=e((()=>{s(),l=c([`inline-flex`,`shrink-0`,`items-center`,`justify-center`,`overflow-hidden`,`rounded-full`,`bg-sky-400/15`,`font-medium`,`uppercase`,`text-sky-600`,`select-none`,`dark:text-sky-400`],{variants:{size:{sm:[`size-7`,`text-[10px]`],md:[`size-10`,`text-sm`],lg:[`size-14`,`text-lg`]}},defaultVariants:{size:`md`}})})))()}var d,f,p,m,h;function g(){return(g=e((()=>{d=t(),f=`https://gravatar.com/avatar`,p=e=>Array.from(new Uint8Array(e)).map(e=>e.toString(16).padStart(2,`0`)).join(``),m=async(e,t)=>{let n=globalThis.crypto?.subtle;if(!n)return null;let r=new TextEncoder().encode(e.trim().toLowerCase()),i=p(await n.digest(`SHA-256`,r));return`${f}/${i}?d=404&s=${t}`},h=(e,t)=>{let[n,r]=(0,d.useState)(null);return(0,d.useEffect)(()=>{if(!e){r(null);return}let n=!1;return m(e,t).then(e=>{n||r(e)}),()=>{n=!0}},[e,t]),n}})))()}var _,v,y,b;function x(){return(x=e((()=>{_=t(),r(),a(),u(),g(),v=n(),y={sm:28,md:40,lg:56},b=({alt:e,className:t,email:n,fallback:r,icon:a,size:s=`md`,src:c,theme:u})=>{let d=h(c?void 0:n,y[s??`md`]*2),f=c??d,[p,m]=(0,_.useState)(null),g=!!f&&p!==f;return(0,v.jsx)(`span`,{role:`img`,"aria-label":e,"data-theme":u,className:o(l({size:s}),t),children:g?(0,v.jsx)(`img`,{src:f,alt:``,className:`size-full object-cover`,onError:()=>{m(f)}}):r?(0,v.jsx)(`span`,{"aria-hidden":`true`,children:r}):a??(0,v.jsx)(i,{"aria-hidden":`true`,className:`size-1/2`})})},b.displayName=`KonstructAvatar`,b.__docgenInfo={description:`A round avatar that shows an image, falls back to a Gravatar looked up by
email, then to initials, then to an icon.

@example
\`\`\`tsx
<Avatar alt="Ada Lovelace" email="ada@example.com" fallback="AL" />
<Avatar alt="Ada Lovelace" src="/ada.png" size="lg" />
\`\`\``,methods:[],displayName:`KonstructAvatar`,props:{alt:{required:!0,tsType:{name:`string`},description:`Accessible name of the avatar, e.g. the person's name`},className:{required:!1,tsType:{name:`string`},description:`Additional CSS classes`},email:{required:!1,tsType:{name:`string`},description:"Email used to look up a Gravatar when `src` is not provided; missing avatars fall back to `fallback`"},fallback:{required:!1,tsType:{name:`string`},description:`Initials shown when there is no image`},icon:{required:!1,tsType:{name:`ReactNode`},description:`Icon shown when there is neither an image nor initials`},src:{required:!1,tsType:{name:`string`},description:"Image URL; takes precedence over `email`"},theme:{required:!1,tsType:{name:`Theme`},description:`Theme override for this component`},size:{defaultValue:{value:`'md'`,computed:!1},required:!1}},composes:[`VariantProps`]}})))()}var S,C,w;function T(){return(T=e((()=>{a(),x(),u(),S=n(),C=5,w=({className:e,emptyLabel:t=`No members yet`,items:n,label:r=e=>`${e} members`,max:i=C,overflowLabel:a=e=>`${e} more members`,size:s=`sm`,theme:c})=>{if(n.length===0)return(0,S.jsx)(`span`,{role:`img`,"aria-label":t,"data-theme":c,className:o(l({size:s}),`border border-dashed border-metal-500 bg-metal-300/15 text-metal-400`,e),children:`?`});let u=n.slice(0,i),d=n.length-u.length;return(0,S.jsxs)(`ul`,{"aria-label":r(n.length),"data-theme":c,className:o(`flex list-none items-center p-0`,e),children:[u.map((e,t)=>(0,S.jsx)(`li`,{className:o(`relative flex`,t>0&&`-ml-2`),style:{zIndex:u.length-t},children:(0,S.jsx)(b,{...e,size:s,className:o(`border-2 border-white dark:border-metal-800`,e.className)})},e.id)),d>0?(0,S.jsx)(`li`,{className:`relative -ml-2 flex`,children:(0,S.jsxs)(`span`,{role:`img`,"aria-label":a(d),className:o(l({size:s}),`border-2 border-white bg-gray-200 text-gray-600 dark:border-metal-800 dark:bg-metal-700 dark:text-metal-300`),children:[`+`,d]})}):null]})},w.displayName=`KonstructAvatarGroup`,w.__docgenInfo={description:`A stack of overlapping avatars that collapses the ones beyond \`max\` into a
"+N" bubble.

@example
\`\`\`tsx
<AvatarGroup
  items={members.map((member) => ({ id: member.id, alt: member.name, email: member.email, fallback: member.initials }))}
  max={4}
/>
\`\`\``,methods:[],displayName:`KonstructAvatarGroup`,props:{className:{required:!1,tsType:{name:`string`},description:`Additional CSS classes for the list`},emptyLabel:{required:!1,tsType:{name:`string`},description:`Text shown when there are no items; renders a dashed placeholder`,defaultValue:{value:`'No members yet'`,computed:!1}},items:{required:!0,tsType:{name:`Array`,elements:[{name:`intersection`,raw:`Omit<AvatarProps, 'size' | 'theme'> & {
  id: string | number;
}`,elements:[{name:`Omit`,elements:[{name:`AvatarProps`},{name:`union`,raw:`'size' | 'theme'`,elements:[{name:`literal`,value:`'size'`},{name:`literal`,value:`'theme'`}]}],raw:`Omit<AvatarProps, 'size' | 'theme'>`},{name:`signature`,type:`object`,raw:`{
  id: string | number;
}`,signature:{properties:[{key:`id`,value:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}],required:!0}}]}}]}],raw:`AvatarGroupItem[]`},description:`Avatars to display`},label:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(count: number) => string`,signature:{arguments:[{type:{name:`number`},name:`count`}],return:{name:`string`}}},description:`Accessible name of the list; receives the total count`,defaultValue:{value:"(count) => `${count} members`",computed:!1}},max:{required:!1,tsType:{name:`number`},description:`Maximum avatars shown before collapsing the rest into a "+N" bubble`,defaultValue:{value:`5`,computed:!1}},overflowLabel:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(hiddenCount: number) => string`,signature:{arguments:[{type:{name:`number`},name:`hiddenCount`}],return:{name:`string`}}},description:`Accessible name of the "+N" bubble; receives the hidden count`,defaultValue:{value:"(hiddenCount) => `${hiddenCount} more members`",computed:!1}},size:{defaultValue:{value:`'sm'`,computed:!1},required:!1}}}})))()}var E,D,O,k;function A(){return(A=e((()=>{T(),x(),E=n(),D={title:`In Review/Avatar`,component:b},O={parameters:{docs:{description:{story:'Image → Gravatar by email → initials → icon. Teams, dashboard-manager and settings each reimplemented the Gravatar lookup and the fallback chain. `AvatarGroup` stacks avatars and collapses the rest into a "+N" bubble.'}}},render:()=>(0,E.jsxs)(`div`,{className:`flex flex-col gap-6`,children:[(0,E.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,E.jsx)(b,{alt:`Ada Lovelace`,src:`./talos.svg`,size:`sm`}),(0,E.jsx)(b,{alt:`Grace Hopper`,fallback:`GH`}),(0,E.jsx)(b,{alt:`Katherine Johnson`,email:`katherine@example.com`,fallback:`KJ`,size:`lg`}),(0,E.jsx)(b,{alt:`Unknown member`,size:`lg`})]}),(0,E.jsx)(w,{max:3,items:[{id:1,alt:`Ada Lovelace`,fallback:`AL`},{id:2,alt:`Grace Hopper`,fallback:`GH`},{id:3,alt:`Katherine Johnson`,fallback:`KJ`},{id:4,alt:`Margaret Hamilton`,fallback:`MH`},{id:5,alt:`Radia Perlman`,fallback:`RP`}]}),(0,E.jsx)(w,{items:[]})]})},k=[`Avatar`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Image → Gravatar by email → initials → icon. Teams, dashboard-manager and settings each reimplemented the Gravatar lookup and the fallback chain. \`AvatarGroup\` stacks avatars and collapses the rest into a "+N" bubble.'
      }
    }
  },
  render: () => <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <AvatarComponent alt="Ada Lovelace" src="./talos.svg" size="sm" />
        <AvatarComponent alt="Grace Hopper" fallback="GH" />
        <AvatarComponent alt="Katherine Johnson" email="katherine@example.com" fallback="KJ" size="lg" />
        <AvatarComponent alt="Unknown member" size="lg" />
      </div>

      <AvatarGroup max={3} items={[{
      id: 1,
      alt: 'Ada Lovelace',
      fallback: 'AL'
    }, {
      id: 2,
      alt: 'Grace Hopper',
      fallback: 'GH'
    }, {
      id: 3,
      alt: 'Katherine Johnson',
      fallback: 'KJ'
    }, {
      id: 4,
      alt: 'Margaret Hamilton',
      fallback: 'MH'
    }, {
      id: 5,
      alt: 'Radia Perlman',
      fallback: 'RP'
    }]} />

      <AvatarGroup items={[]} />
    </div>
}`,...O.parameters?.docs?.source}}}})))()}A();export{O as Avatar,k as __namedExportsOrder,D as default};