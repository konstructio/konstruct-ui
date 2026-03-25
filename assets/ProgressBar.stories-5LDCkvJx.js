import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{o as n,t as r}from"./iframe-BhrQdzJp.js";import{n as i,t as a}from"./Typography-CPsEMThR.js";import{n as o,t as s}from"./ProgressBar-Btbsgl9x.js";var c,l,u,d,f;e((()=>{c=t(n(),1),i(),o(),l=r(),u={title:`In Review/ProgressBar/Light`,component:s},d={render:function(){let[e,t]=(0,c.useState)(130);(0,c.useEffect)(()=>{let e=setInterval(()=>{t(e=>e>=500?0:e+1)},100);return()=>clearInterval(e)},[]);let n=Math.round(e/500*100);return(0,l.jsxs)(`div`,{className:`max-w-75 flex flex-col gap-6`,children:[(0,l.jsx)(s,{percent:26,status:`success`,leftContent:(0,l.jsxs)(a,{variant:`body3`,component:`span`,className:`text-metal-800`,children:[`26`,(0,l.jsx)(a,{variant:`body3`,component:`span`,className:`text-metal-600`,children:`%`})]}),rightContent:(0,l.jsxs)(a,{variant:`body3`,component:`span`,className:`text-metal-800`,children:[`130/500`,(0,l.jsxs)(a,{variant:`body3`,component:`span`,className:`text-metal-600`,children:[` `,`GB`]})]})}),(0,l.jsx)(s,{percent:75,status:`warning`,leftContent:(0,l.jsxs)(a,{variant:`body3`,component:`span`,className:`text-metal-800`,children:[`75`,(0,l.jsx)(a,{variant:`body3`,component:`span`,className:`text-metal-600`,children:`%`})]}),rightContent:(0,l.jsxs)(a,{variant:`body3`,component:`span`,className:`text-metal-800`,children:[`375/500`,(0,l.jsxs)(a,{variant:`body3`,component:`span`,className:`text-metal-600`,children:[` `,`GB`]})]})}),(0,l.jsx)(s,{percent:95,status:`error`,leftContent:(0,l.jsxs)(a,{variant:`body3`,component:`span`,className:`text-metal-800`,children:[`95`,(0,l.jsx)(a,{variant:`body3`,component:`span`,className:`text-metal-600`,children:`%`})]}),rightContent:(0,l.jsxs)(a,{variant:`body3`,component:`span`,className:`text-metal-800`,children:[`475/500`,(0,l.jsxs)(a,{variant:`body3`,component:`span`,className:`text-metal-600`,children:[` `,`GB`]})]})}),(0,l.jsx)(s,{percent:n,status:n>=90?`error`:n>=70?`warning`:`success`,leftContent:(0,l.jsxs)(a,{variant:`body3`,component:`span`,className:`text-metal-800`,children:[n,(0,l.jsx)(a,{variant:`body3`,component:`span`,className:`text-metal-600`,children:`%`})]}),rightContent:(0,l.jsxs)(a,{variant:`body3`,component:`span`,className:`text-metal-800`,children:[e,`/`,500,(0,l.jsxs)(a,{variant:`body3`,component:`span`,className:`text-metal-600`,children:[` `,`GB`]})]})})]})}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function LightStory() {
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
        <ProgressBar percent={26} status="success" leftContent={<Typography variant="body3" component="span" className="text-metal-800">
              26
              <Typography variant="body3" component="span" className="text-metal-600">
                %
              </Typography>
            </Typography>} rightContent={<Typography variant="body3" component="span" className="text-metal-800">
              130/500
              <Typography variant="body3" component="span" className="text-metal-600">
                {' '}
                GB
              </Typography>
            </Typography>} />

        <ProgressBar percent={75} status="warning" leftContent={<Typography variant="body3" component="span" className="text-metal-800">
              75
              <Typography variant="body3" component="span" className="text-metal-600">
                %
              </Typography>
            </Typography>} rightContent={<Typography variant="body3" component="span" className="text-metal-800">
              375/500
              <Typography variant="body3" component="span" className="text-metal-600">
                {' '}
                GB
              </Typography>
            </Typography>} />

        <ProgressBar percent={95} status="error" leftContent={<Typography variant="body3" component="span" className="text-metal-800">
              95
              <Typography variant="body3" component="span" className="text-metal-600">
                %
              </Typography>
            </Typography>} rightContent={<Typography variant="body3" component="span" className="text-metal-800">
              475/500
              <Typography variant="body3" component="span" className="text-metal-600">
                {' '}
                GB
              </Typography>
            </Typography>} />

        <ProgressBar percent={animatedPercent} status={animatedPercent >= 90 ? 'error' : animatedPercent >= 70 ? 'warning' : 'success'} leftContent={<Typography variant="body3" component="span" className="text-metal-800">
              {animatedPercent}
              <Typography variant="body3" component="span" className="text-metal-600">
                %
              </Typography>
            </Typography>} rightContent={<Typography variant="body3" component="span" className="text-metal-800">
              {current}/{total}
              <Typography variant="body3" component="span" className="text-metal-600">
                {' '}
                GB
              </Typography>
            </Typography>} />
      </div>;
  }
}`,...d.parameters?.docs?.source}}},f=[`Light`]}))();export{d as Light,f as __namedExportsOrder,u as default};