import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./react-BWPDF9mI.js";import{t as n}from"./jsx-runtime-BB9-612F.js";import{i as r,t as i}from"./utils-DWfjJEhS.js";import{n as a,t as o}from"./Typography-CB3S8lrT.js";import{n as s,t as c}from"./Button-1ow6AtAL.js";import{n as l,t as u}from"./Card-BGXm1bGM.js";import{c as d,d as f,n as p,o as m,r as h,t as g,u as _}from"./react-CTbV5jWx.js";var v,y;function b(){return(b=e((()=>{v={width:0,opacity:0},y={width:`auto`,opacity:1}})))()}var x,S;function C(){return(C=e((()=>{x=/\d/,S=e=>{let t=[...e],n=t.findIndex(e=>x.test(e)),r=n===-1?t.length:n;return t.map((e,n)=>({key:n<r?`prefix-${n}`:`from-end-${t.length-n}`,character:e}))}})))()}var w,T,E;function D(){return(D=e((()=>{g(),w=t(),b(),C(),T=n(),E=({disabled:e,durationSeconds:t,label:n,text:r})=>{let i=m(),a=e||!!i,o=(0,w.useMemo)(()=>S(r),[r]),s=(0,w.useMemo)(()=>({duration:t}),[t]);return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(`span`,{className:`sr-only`,children:n}),(0,T.jsx)(`span`,{"aria-hidden":`true`,className:`inline-flex`,children:(0,T.jsx)(f,{initial:!1,children:o.map(({key:e,character:t})=>(0,T.jsx)(p.span,{className:`inline-block overflow-hidden whitespace-pre`,initial:!a&&v,animate:y,exit:a?void 0:v,transition:s,children:t},e))})})]})},E.displayName=`KonstructAnimatedText`,E.__docgenInfo={description:``,methods:[],displayName:`KonstructAnimatedText`,props:{disabled:{required:!0,tsType:{name:`boolean`},description:``},durationSeconds:{required:!0,tsType:{name:`number`},description:``},label:{required:!0,tsType:{name:`string`},description:``},text:{required:!0,tsType:{name:`string`},description:``}}}})))()}var O,k,A;function j(){return(j=e((()=>{O=`easeOut`,k=.35,A={minimumFractionDigits:2,maximumFractionDigits:2}})))()}var M,N;function P(){return(P=e((()=>{g(),M=t(),N=(e,{delaySeconds:t,disabled:n,durationSeconds:r,easing:i,from:a,onCountEnd:o,onCountStart:s})=>{let[c,l]=(0,M.useState)(a??e),u=d(a??e),f=m(),p=(0,M.useRef)(s),g=(0,M.useRef)(o),v=n||!!f;return _(u,`change`,l),(0,M.useEffect)(()=>{p.current=s,g.current=o},[s,o]),(0,M.useEffect)(()=>{if(v){u.set(e);return}if(u.get()===e)return;let n=h(u,e,{duration:r,delay:t,ease:i,onPlay:()=>{p.current?.(e)},onComplete:()=>{g.current?.(e)}});return()=>{n.stop()}},[e,r,t,i,v,u]),c}})))()}var F,I;function L(){return(L=e((()=>{F=t(),j(),I=({currency:e,format:t,formatOptions:n,locale:r})=>(0,F.useMemo)(()=>{if(t)return t;let i=e?{style:`currency`,currency:e,currencyDisplay:`narrowSymbol`}:{};try{let e=new Intl.NumberFormat(r,{...i,...n});return t=>e.format(t)}catch{let t=new Intl.NumberFormat(r,A);return n=>[e,t.format(n)].filter(Boolean).join(` `)}},[t,r,e,n])})))()}var R,z,B;function V(){return(V=e((()=>{R=t(),r(),D(),j(),P(),L(),z=n(),B=(0,R.forwardRef)(({animateCharacters:e=!0,characterDurationSeconds:t=k,className:n,currency:r,delaySeconds:a=0,disabled:o=!1,durationSeconds:s=2,easing:c=O,formatOptions:l,from:u,label:d,locale:f,value:p,format:m,onCountEnd:h,onCountStart:g,..._},v)=>{let y=I({currency:r,format:m,formatOptions:l,locale:f}),b=N(p,{delaySeconds:a,disabled:o,durationSeconds:s,easing:c,from:u,onCountEnd:h,onCountStart:g});return(0,z.jsx)(`span`,{ref:v,className:i(`inline-flex`,n),..._,children:(0,z.jsx)(E,{text:y(b),label:d??y(p),disabled:o||!e,durationSeconds:t})})}),B.displayName=`KonstructAnimateCurrencyNumber`,B.__docgenInfo={description:`Counts up or down to each new \`value\`, formatted with \`Intl.NumberFormat\`
or a custom \`format\` function. Characters that appear or disappear (a new
digit, a thousands separator) slide in and out while the currency symbol
and the existing digits stay put. Screen readers get the target value only;
the counting text is hidden from them. Respects \`prefers-reduced-motion\`.
At rest it renders inline and inherits the surrounding typography.

@example
\`\`\`tsx
// Currency, counting to every new total
<AnimateCurrencyNumber value={total} locale="en-US" currency="USD" />

// Symbol after the number, as the locale places it
<AnimateCurrencyNumber value={9.5} locale="de-DE" currency="EUR" />

// Plain integer counted from zero on mount
<AnimateCurrencyNumber
  value={128}
  from={0}
  formatOptions={{ maximumFractionDigits: 0 }}
/>

// Custom format and callbacks
<AnimateCurrencyNumber
  value={nodes}
  format={(value) => \`\${Math.round(value)} nodes\`}
  onCountEnd={(target) => console.log('reached', target)}
/>
\`\`\`

@see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/in-review-animatecurrencynumber--docs Storybook}`,methods:[],displayName:`KonstructAnimateCurrencyNumber`,props:{animateCharacters:{required:!1,tsType:{name:`boolean`},description:`Animate each character in or out (width and opacity) when the formatted text gains or loses characters`,defaultValue:{value:`true`,computed:!1}},characterDurationSeconds:{required:!1,tsType:{name:`number`},description:`Duration in seconds of the per-character enter and exit animation`,defaultValue:{value:`0.35`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Additional CSS classes for the root element`},currency:{required:!1,tsType:{name:`string`},description:`ISO 4217 currency code; enables currency formatting with the narrow symbol. An invalid code is shown as plain text before the number`},delaySeconds:{required:!1,tsType:{name:`number`},description:`Delay in seconds before each count starts`,defaultValue:{value:`0`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:`Jump straight to every new value without counting or animating characters`,defaultValue:{value:`false`,computed:!1}},durationSeconds:{required:!1,tsType:{name:`number`},description:`Duration in seconds of the count from the current value to the new one`,defaultValue:{value:`2`,computed:!1}},easing:{required:!1,tsType:{name:`Easing`},description:"Motion easing of the count (e.g. `'easeOut'`, `'linear'` or a cubic-bezier array)",defaultValue:{value:`'easeOut'`,computed:!1}},formatOptions:{required:!1,tsType:{name:`Intl.NumberFormatOptions`},description:"Extra `Intl.NumberFormat` options, merged over the currency options"},from:{required:!1,tsType:{name:`number`},description:"Value to count from on mount; defaults to `value`, so the first render does not count"},label:{required:!1,tsType:{name:`string`},description:`Accessible text announced instead of the formatted target value`},locale:{required:!1,tsType:{name:`string`},description:"BCP 47 locale passed to `Intl.NumberFormat`; defaults to the runtime locale"},value:{required:!0,tsType:{name:`number`},description:`Number to display; every change counts from the value currently shown to this one`},format:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: number) => string`,signature:{arguments:[{type:{name:`number`},name:`value`}],return:{name:`string`}}},description:"Custom formatter for each intermediate value; takes precedence over `locale`, `currency` and `formatOptions`"},onCountEnd:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(target: number) => void`,signature:{arguments:[{type:{name:`number`},name:`target`}],return:{name:`void`}}},description:`Fired with the target value once a count has finished`},onCountStart:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(target: number) => void`,signature:{arguments:[{type:{name:`number`},name:`target`}],return:{name:`void`}}},description:`Fired with the target value when a count starts`}}}})))()}var H,U,W,G,K,q,J,Y,X,Z,Q,$,ee;function te(){return(te=e((()=>{H=t(),s(),l(),a(),V(),U=n(),W=3500,G=[{locale:`en-US`,currency:`USD`,caption:`en-US · USD`},{locale:`en-GB`,currency:`GBP`,caption:`en-GB · GBP`},{locale:`de-DE`,currency:`EUR`,caption:`de-DE · EUR (suffix)`},{locale:`fr-FR`,currency:`EUR`,caption:`fr-FR · EUR (suffix)`},{locale:`ja-JP`,currency:`JPY`,caption:`ja-JP · JPY (no decimals)`},{locale:`en-IN`,currency:`INR`,caption:`en-IN · INR (lakh grouping)`}],K=()=>Math.round(Math.random()*25e4)/100,q={title:`In Review/AnimateCurrencyNumber`,component:B,args:{value:1234.5,locale:`en-US`,currency:`USD`,durationSeconds:2,delaySeconds:0,easing:`easeOut`,disabled:!1,animateCharacters:!0,characterDurationSeconds:.35},argTypes:{value:{control:{type:`number`}},from:{control:{type:`number`}},locale:{control:{type:`text`}},currency:{control:{type:`text`}},label:{control:{type:`text`}},durationSeconds:{control:{type:`range`,min:0,max:5,step:.1}},delaySeconds:{control:{type:`range`,min:0,max:3,step:.1}},easing:{control:{type:`select`},options:[`linear`,`easeIn`,`easeOut`,`easeInOut`,`circOut`]},disabled:{control:{type:`boolean`}},animateCharacters:{control:{type:`boolean`}},characterDurationSeconds:{control:{type:`range`,min:0,max:2,step:.05}},formatOptions:{control:{type:`object`}},format:{control:!1},onCountStart:{action:`countStart`},onCountEnd:{action:`countEnd`}}},J={parameters:{docs:{description:{story:"Change `value` in the controls to count from the shown value to the new one. Characters that appear or disappear slide in and out; the currency symbol and existing digits stay in place. Screen readers only get the target value."}}},render:e=>(0,U.jsx)(o,{variant:`h4`,component:`p`,children:(0,U.jsx)(B,{...e})})},Y={parameters:{docs:{description:{story:"Currency formatting follows the locale: the symbol moves after the number in `de-DE` and `fr-FR`, and `JPY` has no decimals. Press the button to count every row to a new amount."}}},render:function(e){let[t,n]=(0,H.useState)(1234.5);return(0,U.jsxs)(u,{className:`flex flex-col gap-4 max-w-120`,children:[G.map(({locale:n,currency:r,caption:i})=>(0,U.jsxs)(`div`,{className:`flex items-baseline justify-between gap-4`,children:[(0,U.jsx)(o,{variant:`body2`,children:i}),(0,U.jsx)(o,{variant:`h6`,component:`span`,children:(0,U.jsx)(B,{...e,value:t,locale:n,currency:r})})]},i)),(0,U.jsx)(c,{variant:`secondary`,onClick:()=>{n(K())},children:`New amount`})]})}},X={args:{value:128,currency:void 0,formatOptions:{maximumFractionDigits:0}},parameters:{docs:{description:{story:"Without `currency` the value is a plain number; `formatOptions` rounds every intermediate value to an integer."}}},render:function(e){let[t,n]=(0,H.useState)(e.value);return(0,U.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,U.jsx)(c,{variant:`secondary`,onClick:()=>{n(e=>Math.max(0,e-25))},children:`−25`}),(0,U.jsx)(o,{variant:`h4`,component:`p`,children:(0,U.jsx)(B,{...e,value:t})}),(0,U.jsx)(c,{variant:`secondary`,onClick:()=>{n(e=>e+1e3)},children:`+1000`})]})}},Z={args:{value:4821.75,from:0},parameters:{docs:{description:{story:"`from` sets the value counted from on mount, so the number counts up as soon as it renders. Remount the story to replay it."}}},render:function(e){let[t,n]=(0,H.useState)(0);return(0,U.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,U.jsx)(o,{variant:`h4`,component:`p`,children:(0,U.jsx)(B,{...e},t)}),(0,U.jsx)(c,{variant:`secondary`,onClick:()=>{n(e=>e+1)},children:`Replay`})]})}},Q={args:{value:12,currency:void 0,format:e=>{let t=Math.round(e);return`${t} ${t===1?`node`:`nodes`}`}},parameters:{docs:{description:{story:"`format` receives every intermediate value and takes precedence over `locale`, `currency` and `formatOptions`."}}},render:function(e){let[t,n]=(0,H.useState)(e.value);return(0,U.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,U.jsx)(o,{variant:`h5`,component:`p`,children:(0,U.jsx)(B,{...e,value:t})}),(0,U.jsx)(c,{variant:`secondary`,onClick:()=>{n(Math.floor(Math.random()*200)+1)},children:`Scale`})]})}},$={args:{durationSeconds:1.5},parameters:{docs:{description:{story:`The value changes every ${W/1e3} s, like a polled balance, so the count and the digits sliding in and out can be watched.`}}},render:function(e){let[t,n]=(0,H.useState)(99.5);return(0,H.useEffect)(()=>{let e=setInterval(()=>{n(e=>e<1e3?K()*10:K()/10)},W);return()=>{clearInterval(e)}},[]),(0,U.jsxs)(u,{className:`flex flex-col gap-2 max-w-100`,children:[(0,U.jsx)(o,{variant:`labelLarge`,children:`This month`}),(0,U.jsx)(o,{variant:`h4`,component:`p`,children:(0,U.jsx)(B,{...e,value:t})}),(0,U.jsxs)(o,{variant:`body2`,children:[`Running total, inline with the text around it:`,` `,(0,U.jsx)(B,{...e,value:t,className:`font-semibold`}),` `,`so far.`]})]})}},ee=[`AnimateCurrencyNumber`,`Currencies`,`PlainInteger`,`CountFromZero`,`CustomFormat`,`Live`],J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Change \`value\` in the controls to count from the shown value to the new one. Characters that appear or disappear slide in and out; the currency symbol and existing digits stay in place. Screen readers only get the target value.'
      }
    }
  },
  render: args => <Typography variant="h4" component="p">
      <AnimateCurrencyNumberComponent {...args} />
    </Typography>
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Currency formatting follows the locale: the symbol moves after the number in \`de-DE\` and \`fr-FR\`, and \`JPY\` has no decimals. Press the button to count every row to a new amount.'
      }
    }
  },
  render: function CurrenciesStory(args) {
    const [amount, setAmount] = useState(1234.5);
    return <Card className="flex flex-col gap-4 max-w-120">
        {CURRENCIES.map(({
        locale,
        currency,
        caption
      }) => <div key={caption} className="flex items-baseline justify-between gap-4">
            <Typography variant="body2">{caption}</Typography>
            <Typography variant="h6" component="span">
              <AnimateCurrencyNumberComponent {...args} value={amount} locale={locale} currency={currency} />
            </Typography>
          </div>)}

        <Button variant="secondary" onClick={() => {
        setAmount(randomAmount());
      }}>
          New amount
        </Button>
      </Card>;
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    value: 128,
    currency: undefined,
    formatOptions: {
      maximumFractionDigits: 0
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Without \`currency\` the value is a plain number; \`formatOptions\` rounds every intermediate value to an integer.'
      }
    }
  },
  render: function PlainIntegerStory(args) {
    const [count, setCount] = useState(args.value);
    return <div className="flex items-center gap-4">
        <Button variant="secondary" onClick={() => {
        setCount(current => {
          return Math.max(0, current - 25);
        });
      }}>
          −25
        </Button>
        <Typography variant="h4" component="p">
          <AnimateCurrencyNumberComponent {...args} value={count} />
        </Typography>
        <Button variant="secondary" onClick={() => {
        setCount(current => {
          return current + 1000;
        });
      }}>
          +1000
        </Button>
      </div>;
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    value: 4821.75,
    from: 0
  },
  parameters: {
    docs: {
      description: {
        story: '\`from\` sets the value counted from on mount, so the number counts up as soon as it renders. Remount the story to replay it.'
      }
    }
  },
  render: function CountFromZeroStory(args) {
    const [mountKey, setMountKey] = useState(0);
    return <div className="flex items-center gap-4">
        <Typography variant="h4" component="p">
          <AnimateCurrencyNumberComponent key={mountKey} {...args} />
        </Typography>
        <Button variant="secondary" onClick={() => {
        setMountKey(current => {
          return current + 1;
        });
      }}>
          Replay
        </Button>
      </div>;
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    value: 12,
    currency: undefined,
    format: (value: number) => {
      const nodes = Math.round(value);
      return \`\${nodes} \${nodes === 1 ? 'node' : 'nodes'}\`;
    }
  },
  parameters: {
    docs: {
      description: {
        story: '\`format\` receives every intermediate value and takes precedence over \`locale\`, \`currency\` and \`formatOptions\`.'
      }
    }
  },
  render: function CustomFormatStory(args) {
    const [nodes, setNodes] = useState(args.value);
    return <div className="flex items-center gap-4">
        <Typography variant="h5" component="p">
          <AnimateCurrencyNumberComponent {...args} value={nodes} />
        </Typography>
        <Button variant="secondary" onClick={() => {
        setNodes(Math.floor(Math.random() * 200) + 1);
      }}>
          Scale
        </Button>
      </div>;
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    durationSeconds: 1.5
  },
  parameters: {
    docs: {
      description: {
        story: \`The value changes every \${LIVE_INTERVAL_MS / 1000} s, like a polled balance, so the count and the digits sliding in and out can be watched.\`
      }
    }
  },
  render: function LiveStory(args) {
    const [amount, setAmount] = useState(99.5);
    useEffect(() => {
      const interval = setInterval(() => {
        setAmount(current => {
          return current < 1000 ? randomAmount() * 10 : randomAmount() / 10;
        });
      }, LIVE_INTERVAL_MS);
      return () => {
        clearInterval(interval);
      };
    }, []);
    return <Card className="flex flex-col gap-2 max-w-100">
        <Typography variant="labelLarge">This month</Typography>
        <Typography variant="h4" component="p">
          <AnimateCurrencyNumberComponent {...args} value={amount} />
        </Typography>
        <Typography variant="body2">
          Running total, inline with the text around it:{' '}
          <AnimateCurrencyNumberComponent {...args} value={amount} className="font-semibold" />{' '}
          so far.
        </Typography>
      </Card>;
  }
}`,...$.parameters?.docs?.source}}}})))()}te();export{J as AnimateCurrencyNumber,Z as CountFromZero,Y as Currencies,Q as CustomFormat,$ as Live,X as PlainInteger,ee as __namedExportsOrder,q as default};