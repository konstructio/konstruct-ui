import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{i as r,t as i}from"./utils-Bwr2iEcD.js";import{n as a,t as o}from"./Badge-BnkTh7us.js";import{n as s,t as c}from"./Tooltip-B1nQ0NnW.js";var l,u,d,f,p;function m(){return(m=e((()=>{l=t(),u=null,d=()=>(u||=document.createElement(`canvas`)?.getContext(`2d`),u),f=e=>!e.fontSize||!e.fontFamily?``:`${e.fontStyle} ${e.fontWeight} ${e.fontSize} ${e.fontFamily}`,p=({containerRef:e,gapPx:t,horizontalPaddingPx:n,items:r,maxWidth:i,probeRef:a})=>{let[o,s]=(0,l.useState)(r.length);return(0,l.useLayoutEffect)(()=>{let o=a.current,c=e.current,l=d();if(i===void 0||!o||!c||!l||r.length===0){s(r.length);return}let u=()=>{let e=f(getComputedStyle(o));if(!e){s(r.length);return}l.font=e;let a=Math.min(c.offsetWidth||i,i),u=r.map(e=>l.measureText(e.label).width+n),d=l.measureText(`+${r.length}`).width+n;if(u.reduce((e,n,r)=>e+n+(r>0?t:0),0)<=a){s(r.length);return}let p=a-d-t,m=0,h=0;for(let e of u){let n=m+e+(h>0?t:0);if(n>p)break;m=n,h+=1}s(Math.max(1,h))};u();let p=!1,m=new ResizeObserver(u);return m.observe(c),document.fonts?.ready.then(()=>{p||u()}),()=>{p=!0,m.disconnect()}},[e,t,n,r,i,a]),o}})))()}var h,g,_,v,y,b,x;function S(){return(S=e((()=>{h=t(),r(),a(),s(),m(),g=n(),_=8,v=16,y=4,b=(e,t)=>{let n=[];for(let r=0;r<e.length;r+=t)n.push(e.slice(r,r+t));return n},x=({badgeClassName:e,className:t,items:n,itemsPerTooltipLine:r=y,maxVisible:a,maxWidth:s,overflowLabel:l=e=>`Show ${e} more`,renderOverflow:u,size:d,variant:f})=>{let m=(0,h.useRef)(null),x=(0,h.useRef)(null),S=p({containerRef:m,gapPx:_,horizontalPaddingPx:v,items:n,maxWidth:s,probeRef:x});if(n.length===0)return null;let C=Math.max(1,Math.min(S,a??n.length)),w=n.slice(0,C),T=n.slice(C);return(0,g.jsxs)(`div`,{ref:m,className:i(`relative min-w-0`,t),style:s===void 0?void 0:{maxWidth:s},children:[(0,g.jsx)(`span`,{ref:x,"aria-hidden":`true`,className:`invisible absolute text-xs leading-4`}),(0,g.jsxs)(`div`,{className:`flex items-center gap-2 overflow-hidden`,children:[w.map(t=>(0,g.jsx)(o,{label:t.label,leftIcon:t.leftIcon,size:d,variant:t.variant??f,className:i(`shrink-0 whitespace-nowrap`,e)},t.id)),T.length>0?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(`span`,{className:`sr-only`,children:n.map(e=>e.label).join(`, `)}),(0,g.jsx)(c,{className:`max-w-80 text-center`,content:u?.(T)??b(T,r).map(e=>(0,g.jsx)(`div`,{children:e.map(e=>e.label).join(`, `)},e[0].id)),children:(0,g.jsx)(`button`,{type:`button`,"aria-label":l(T.length),className:`shrink-0 cursor-pointer rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aurora-500`,children:(0,g.jsx)(o,{label:`+${T.length}`,size:d,variant:f,className:i(`shrink-0 whitespace-nowrap`,e)})})})]}):null]})]})},x.displayName=`KonstructBadgeGroup`,x.__docgenInfo={description:'Renders a row of badges and collapses the ones that do not fit into a\n"+N" badge whose tooltip lists the hidden labels. Limit by count with\n`maxVisible` or by available width with `maxWidth`.\n\n@example\n```tsx\n<BadgeGroup items={tags} maxVisible={3} />\n<BadgeGroup items={regions} maxWidth={240} variant="info" />\n```',methods:[],displayName:`KonstructBadgeGroup`,props:{badgeClassName:{required:!1,tsType:{name:`string`},description:`Additional CSS classes for each badge`},className:{required:!1,tsType:{name:`string`},description:`Additional CSS classes for the wrapper`},items:{required:!0,tsType:{name:`Array`,elements:[{name:`intersection`,raw:`Pick<BadgeProps, 'variant' | 'leftIcon'> & {
  id: string | number;
  label: string;
}`,elements:[{name:`Pick`,elements:[{name:`intersection`,raw:`VariantProps<typeof badgeVariants> & {
  /** Additional CSS classes */
  className?: string;
  /** Show dismiss button */
  dismissible?: true;
  /** Allow text selection (default: true) */
  isSelectable?: boolean;
  /** Badge text content */
  label: string;
  /** Icon displayed on the left */
  leftIcon?: ReactNode;
  /** Show loading spinner */
  loading?: boolean;
  /** Icon displayed on the right (when not dismissible) */
  rightIcon?: ReactNode;
  /** Click handler (makes badge interactive) */
  onClick?: VoidFunction;
  /** Callback when dismiss button clicked */
  onDismiss?: VoidFunction;
}`,elements:[{name:`VariantProps`,elements:[{name:`badgeVariants`}],raw:`VariantProps<typeof badgeVariants>`},{name:`signature`,type:`object`,raw:`{
  /** Additional CSS classes */
  className?: string;
  /** Show dismiss button */
  dismissible?: true;
  /** Allow text selection (default: true) */
  isSelectable?: boolean;
  /** Badge text content */
  label: string;
  /** Icon displayed on the left */
  leftIcon?: ReactNode;
  /** Show loading spinner */
  loading?: boolean;
  /** Icon displayed on the right (when not dismissible) */
  rightIcon?: ReactNode;
  /** Click handler (makes badge interactive) */
  onClick?: VoidFunction;
  /** Callback when dismiss button clicked */
  onDismiss?: VoidFunction;
}`,signature:{properties:[{key:`className`,value:{name:`string`,required:!1},description:`Additional CSS classes`},{key:`dismissible`,value:{name:`literal`,value:`true`,required:!1},description:`Show dismiss button`},{key:`isSelectable`,value:{name:`boolean`,required:!1},description:`Allow text selection (default: true)`},{key:`label`,value:{name:`string`,required:!0},description:`Badge text content`},{key:`leftIcon`,value:{name:`ReactNode`,required:!1},description:`Icon displayed on the left`},{key:`loading`,value:{name:`boolean`,required:!1},description:`Show loading spinner`},{key:`rightIcon`,value:{name:`ReactNode`,required:!1},description:`Icon displayed on the right (when not dismissible)`},{key:`onClick`,value:{name:`VoidFunction`,required:!1},description:`Click handler (makes badge interactive)`},{key:`onDismiss`,value:{name:`VoidFunction`,required:!1},description:`Callback when dismiss button clicked`}]}}]},{name:`union`,raw:`'variant' | 'leftIcon'`,elements:[{name:`literal`,value:`'variant'`},{name:`literal`,value:`'leftIcon'`}]}],raw:`Pick<BadgeProps, 'variant' | 'leftIcon'>`},{name:`signature`,type:`object`,raw:`{
  id: string | number;
  label: string;
}`,signature:{properties:[{key:`id`,value:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}],required:!0}},{key:`label`,value:{name:`string`,required:!0}}]}}]}],raw:`BadgeGroupItem[]`},description:`Badges to display`},itemsPerTooltipLine:{required:!1,tsType:{name:`number`},description:`Hidden labels per line inside the overflow tooltip`,defaultValue:{value:`4`,computed:!1}},maxWidth:{required:!1,tsType:{name:`number`},description:`Show as many badges as fit in this width (px); the rest collapse into the overflow badge`},maxVisible:{required:!1,tsType:{name:`number`},description:`Show at most this many badges; the rest collapse into the overflow badge`},overflowLabel:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(hiddenCount: number) => string`,signature:{arguments:[{type:{name:`number`},name:`hiddenCount`}],return:{name:`string`}}},description:`Accessible name of the overflow badge button`,defaultValue:{value:"(hiddenCount) => `Show ${hiddenCount} more`",computed:!1}},renderOverflow:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(hidden: BadgeGroupItem[]) => ReactNode`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`intersection`,raw:`Pick<BadgeProps, 'variant' | 'leftIcon'> & {
  id: string | number;
  label: string;
}`,elements:[{name:`Pick`,elements:[{name:`intersection`,raw:`VariantProps<typeof badgeVariants> & {
  /** Additional CSS classes */
  className?: string;
  /** Show dismiss button */
  dismissible?: true;
  /** Allow text selection (default: true) */
  isSelectable?: boolean;
  /** Badge text content */
  label: string;
  /** Icon displayed on the left */
  leftIcon?: ReactNode;
  /** Show loading spinner */
  loading?: boolean;
  /** Icon displayed on the right (when not dismissible) */
  rightIcon?: ReactNode;
  /** Click handler (makes badge interactive) */
  onClick?: VoidFunction;
  /** Callback when dismiss button clicked */
  onDismiss?: VoidFunction;
}`,elements:[{name:`VariantProps`,elements:[{name:`badgeVariants`}],raw:`VariantProps<typeof badgeVariants>`},{name:`signature`,type:`object`,raw:`{
  /** Additional CSS classes */
  className?: string;
  /** Show dismiss button */
  dismissible?: true;
  /** Allow text selection (default: true) */
  isSelectable?: boolean;
  /** Badge text content */
  label: string;
  /** Icon displayed on the left */
  leftIcon?: ReactNode;
  /** Show loading spinner */
  loading?: boolean;
  /** Icon displayed on the right (when not dismissible) */
  rightIcon?: ReactNode;
  /** Click handler (makes badge interactive) */
  onClick?: VoidFunction;
  /** Callback when dismiss button clicked */
  onDismiss?: VoidFunction;
}`,signature:{properties:[{key:`className`,value:{name:`string`,required:!1},description:`Additional CSS classes`},{key:`dismissible`,value:{name:`literal`,value:`true`,required:!1},description:`Show dismiss button`},{key:`isSelectable`,value:{name:`boolean`,required:!1},description:`Allow text selection (default: true)`},{key:`label`,value:{name:`string`,required:!0},description:`Badge text content`},{key:`leftIcon`,value:{name:`ReactNode`,required:!1},description:`Icon displayed on the left`},{key:`loading`,value:{name:`boolean`,required:!1},description:`Show loading spinner`},{key:`rightIcon`,value:{name:`ReactNode`,required:!1},description:`Icon displayed on the right (when not dismissible)`},{key:`onClick`,value:{name:`VoidFunction`,required:!1},description:`Click handler (makes badge interactive)`},{key:`onDismiss`,value:{name:`VoidFunction`,required:!1},description:`Callback when dismiss button clicked`}]}}]},{name:`union`,raw:`'variant' | 'leftIcon'`,elements:[{name:`literal`,value:`'variant'`},{name:`literal`,value:`'leftIcon'`}]}],raw:`Pick<BadgeProps, 'variant' | 'leftIcon'>`},{name:`signature`,type:`object`,raw:`{
  id: string | number;
  label: string;
}`,signature:{properties:[{key:`id`,value:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}],required:!0}},{key:`label`,value:{name:`string`,required:!0}}]}}]}],raw:`BadgeGroupItem[]`},name:`hidden`}],return:{name:`ReactNode`}}},description:`Custom overflow tooltip content; defaults to the hidden labels`}}}})))()}var C,w,T,E,D;function O(){return(O=e((()=>{S(),C=n(),w={title:`In Review/BadgeGroup`,component:x},T=[{id:1,label:`web`},{id:2,label:`database`},{id:3,label:`staging`},{id:4,label:`europe-west`},{id:5,label:`critical`},{id:6,label:`backup-daily`}],E={parameters:{docs:{description:{story:'A row of badges that collapses the ones that do not fit into a focusable "+N" badge whose tooltip lists the hidden labels; the full list is always available to screen readers. `maxVisible` limits by count (teams PermissionBadges) and `maxWidth` measures the labels to fit a column width (compute and vpc TagOverflowList).'}}},render:()=>(0,C.jsxs)(`div`,{className:`flex flex-col gap-6`,children:[(0,C.jsx)(x,{items:T,maxVisible:3}),(0,C.jsx)(x,{items:T,maxWidth:260,variant:`info`}),(0,C.jsx)(x,{items:T.slice(0,2),maxWidth:260})]})},D=[`BadgeGroup`],E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'A row of badges that collapses the ones that do not fit into a focusable "+N" badge whose tooltip lists the hidden labels; the full list is always available to screen readers. \`maxVisible\` limits by count (teams PermissionBadges) and \`maxWidth\` measures the labels to fit a column width (compute and vpc TagOverflowList).'
      }
    }
  },
  render: () => <div className="flex flex-col gap-6">
      <BadgeGroupComponent items={tags} maxVisible={3} />
      <BadgeGroupComponent items={tags} maxWidth={260} variant="info" />
      <BadgeGroupComponent items={tags.slice(0, 2)} maxWidth={260} />
    </div>
}`,...E.parameters?.docs?.source}}}})))()}O();export{E as BadgeGroup,D as __namedExportsOrder,w as default};