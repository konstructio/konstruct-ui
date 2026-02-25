import{r as p,j as t}from"./iframe-DzqcIqyR.js";import{T as a}from"./Typography-A9RCCnP7.js";import{P as e}from"./ProgressBar-CER1Ny-T.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CGPp45Jz.js";const v={title:"In Review/ProgressBar/Dark",component:e},r={parameters:{theme:"dark"},render:function(){const[s,c]=p.useState(130);p.useEffect(()=>{const m=setInterval(()=>{c(o=>o>=500?0:o+1)},100);return()=>clearInterval(m)},[]);const n=Math.round(s/500*100);return t.jsxs("div",{className:"max-w-75 flex flex-col gap-6",children:[t.jsx(e,{percent:26,status:"success",leftContent:t.jsxs(a,{variant:"body3",component:"span",className:"text-metal-50",children:["26",t.jsx(a,{variant:"body3",component:"span",className:"text-metal-400",children:"%"})]}),rightContent:t.jsxs(a,{variant:"body3",component:"span",className:"text-metal-50",children:["130/500",t.jsxs(a,{variant:"body3",component:"span",className:"text-metal-400",children:[" ","GB"]})]})}),t.jsx(e,{percent:75,status:"warning",leftContent:t.jsxs(a,{variant:"body3",component:"span",className:"text-metal-50",children:["75",t.jsx(a,{variant:"body3",component:"span",className:"text-metal-400",children:"%"})]}),rightContent:t.jsxs(a,{variant:"body3",component:"span",className:"text-metal-50",children:["375/500",t.jsxs(a,{variant:"body3",component:"span",className:"text-metal-400",children:[" ","GB"]})]})}),t.jsx(e,{percent:95,status:"error",leftContent:t.jsxs(a,{variant:"body3",component:"span",className:"text-metal-50",children:["95",t.jsx(a,{variant:"body3",component:"span",className:"text-metal-400",children:"%"})]}),rightContent:t.jsxs(a,{variant:"body3",component:"span",className:"text-metal-50",children:["475/500",t.jsxs(a,{variant:"body3",component:"span",className:"text-metal-400",children:[" ","GB"]})]})}),t.jsx(e,{percent:n,status:n>=90?"error":n>=70?"warning":"success",leftContent:t.jsxs(a,{variant:"body3",component:"span",className:"text-metal-50",children:[n,t.jsx(a,{variant:"body3",component:"span",className:"text-metal-400",children:"%"})]}),rightContent:t.jsxs(a,{variant:"body3",component:"span",className:"text-metal-50",children:[s,"/",500,t.jsxs(a,{variant:"body3",component:"span",className:"text-metal-400",children:[" ","GB"]})]})})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    theme: 'dark'
  },
  render: function AllVariantsStory() {
    const total = 500;
    const [current, setCurrent] = useState(130);
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrent(prev => {
          if (prev >= total) return 0;
          return prev + 1;
        });
      }, 100);
      return () => clearInterval(interval);
    }, []);
    const animatedPercent = Math.round(current / total * 100);
    return <div className="max-w-75 flex flex-col gap-6">
        <ProgressBar percent={26} status="success" leftContent={<Typography variant="body3" component="span" className="text-metal-50">
              26
              <Typography variant="body3" component="span" className="text-metal-400">
                %
              </Typography>
            </Typography>} rightContent={<Typography variant="body3" component="span" className="text-metal-50">
              130/500
              <Typography variant="body3" component="span" className="text-metal-400">
                {' '}
                GB
              </Typography>
            </Typography>} />

        <ProgressBar percent={75} status="warning" leftContent={<Typography variant="body3" component="span" className="text-metal-50">
              75
              <Typography variant="body3" component="span" className="text-metal-400">
                %
              </Typography>
            </Typography>} rightContent={<Typography variant="body3" component="span" className="text-metal-50">
              375/500
              <Typography variant="body3" component="span" className="text-metal-400">
                {' '}
                GB
              </Typography>
            </Typography>} />

        <ProgressBar percent={95} status="error" leftContent={<Typography variant="body3" component="span" className="text-metal-50">
              95
              <Typography variant="body3" component="span" className="text-metal-400">
                %
              </Typography>
            </Typography>} rightContent={<Typography variant="body3" component="span" className="text-metal-50">
              475/500
              <Typography variant="body3" component="span" className="text-metal-400">
                {' '}
                GB
              </Typography>
            </Typography>} />

        <ProgressBar percent={animatedPercent} status={animatedPercent >= 90 ? 'error' : animatedPercent >= 70 ? 'warning' : 'success'} leftContent={<Typography variant="body3" component="span" className="text-metal-50">
              {animatedPercent}
              <Typography variant="body3" component="span" className="text-metal-400">
                %
              </Typography>
            </Typography>} rightContent={<Typography variant="body3" component="span" className="text-metal-50">
              {current}/{total}
              <Typography variant="body3" component="span" className="text-metal-400">
                {' '}
                GB
              </Typography>
            </Typography>} />
      </div>;
  }
}`,...r.parameters?.docs?.source}}};const u=["Dark"];export{r as Dark,u as __namedExportsOrder,v as default};
