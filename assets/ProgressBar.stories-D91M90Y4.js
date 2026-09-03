import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,t as i}from"./Typography-Dr4qxqZo.js";import{n as a,t as o}from"./ProgressBar-BkhxECiB.js";var s,c,l,u,d;function f(){return(f=e((()=>{s=t(),r(),a(),c=n(),l={title:`In Review/ProgressBar/Light`,component:o},u={render:function(){let[e,t]=(0,s.useState)(130);(0,s.useEffect)(()=>{let e=setInterval(()=>{t(e=>e>=500?0:e+1)},100);return()=>clearInterval(e)},[]);let n=Math.round(e/500*100);return(0,c.jsxs)(`div`,{className:`max-w-75 flex flex-col gap-6`,children:[(0,c.jsx)(o,{percent:26,status:`success`,leftContent:(0,c.jsxs)(i,{variant:`body3`,component:`span`,className:`text-metal-800`,children:[`26`,(0,c.jsx)(i,{variant:`body3`,component:`span`,className:`text-metal-600`,children:`%`})]}),rightContent:(0,c.jsxs)(i,{variant:`body3`,component:`span`,className:`text-metal-800`,children:[`130/500`,(0,c.jsxs)(i,{variant:`body3`,component:`span`,className:`text-metal-600`,children:[` `,`GB`]})]})}),(0,c.jsx)(o,{percent:75,status:`warning`,leftContent:(0,c.jsxs)(i,{variant:`body3`,component:`span`,className:`text-metal-800`,children:[`75`,(0,c.jsx)(i,{variant:`body3`,component:`span`,className:`text-metal-600`,children:`%`})]}),rightContent:(0,c.jsxs)(i,{variant:`body3`,component:`span`,className:`text-metal-800`,children:[`375/500`,(0,c.jsxs)(i,{variant:`body3`,component:`span`,className:`text-metal-600`,children:[` `,`GB`]})]})}),(0,c.jsx)(o,{percent:95,status:`error`,leftContent:(0,c.jsxs)(i,{variant:`body3`,component:`span`,className:`text-metal-800`,children:[`95`,(0,c.jsx)(i,{variant:`body3`,component:`span`,className:`text-metal-600`,children:`%`})]}),rightContent:(0,c.jsxs)(i,{variant:`body3`,component:`span`,className:`text-metal-800`,children:[`475/500`,(0,c.jsxs)(i,{variant:`body3`,component:`span`,className:`text-metal-600`,children:[` `,`GB`]})]})}),(0,c.jsx)(o,{percent:n,status:n>=90?`error`:n>=70?`warning`:`success`,leftContent:(0,c.jsxs)(i,{variant:`body3`,component:`span`,className:`text-metal-800`,children:[n,(0,c.jsx)(i,{variant:`body3`,component:`span`,className:`text-metal-600`,children:`%`})]}),rightContent:(0,c.jsxs)(i,{variant:`body3`,component:`span`,className:`text-metal-800`,children:[e,`/`,500,(0,c.jsxs)(i,{variant:`body3`,component:`span`,className:`text-metal-600`,children:[` `,`GB`]})]})})]})}},d=[`Light`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}}})))()}f();export{u as Light,d as __namedExportsOrder,l as default};