import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,t as i}from"./Loader-yZhDQ_yw.js";import{n as a,t as o}from"./PhotoLibrary-BJXFm60r.js";import{n as s,t as c}from"./Warning-CI1c_Ho-.js";import{r as l,t as u}from"./utils-BC5-UmL9.js";import{n as d,t as f}from"./dist-DJsSzQxH.js";import{n as p,t as m}from"./Typography-BJCVf6qf.js";import{n as h,t as g}from"./x-i7QAllnh.js";import{n as _,t as v}from"./Button-B0XrGfcK.js";var y;function b(){return(b=e((()=>{y=function(e){return e.Default=`default`,e.Uploading=`uploading`,e.Complete=`complete`,e.Error=`error`,e}({})})))()}var x,S,C,w,T;function E(){return(E=e((()=>{d(),x=f([`flex`,`flex-col`,`gap-2`,`w-full`],{variants:{status:{default:``,uploading:``,complete:``,error:``}},defaultVariants:{status:`default`}}),S=f([`flex`,`gap-2`,`h-15`,`items-center`,`w-full`],{variants:{status:{default:``,uploading:``,complete:``,error:``}},defaultVariants:{status:`default`}}),C=f([`flex`,`gap-4`,`grow`,`h-full`,`items-center`,`px-4`,`py-2`,`rounded`,`border`,`bg-white`,`border-gray-300`,`dark:bg-metal-800`,`dark:border-metal-700`,`kubefirst-dark:bg-slate-800`,`kubefirst-dark:border-slate-600`],{variants:{status:{default:``,uploading:``,complete:``,error:[`border-red-600`,`dark:border-red-500`,`kubefirst-dark:border-red-500`]}},defaultVariants:{status:`default`}}),w=f([`flex`,`gap-1`,`items-center`,`text-sm`,`font-medium`,`leading-5`,`text-slate-500`,`dark:text-slate-50`,`kubefirst-dark:text-slate-50`]),T=f([`text-xs`,`leading-5`,`text-slate-600`,`dark:text-slate-200`,`kubefirst-dark:text-slate-200`],{variants:{status:{default:``,uploading:``,complete:``,error:[`text-red-700`,`dark:text-red-400`,`kubefirst-dark:text-red-500`]}},defaultVariants:{status:`default`}})})))()}var D,O,k;function A(){return(A=e((()=>{D=t(),h(),r(),a(),_(),s(),l(),b(),E(),O=n(),k=({className:e,error:t,fileName:n,fileSize:r,fileUrl:a,helperText:s=`Logo should be 32 x 32 pixels with transparent background (larger images will be downscaled proportionally to fit). Accepted file type is SVG, PNG, JPEG. Max file size is 5MB.`,isRequired:l=!1,label:d=`Item logo`,labelClassName:f,labelWrapperClassName:p,name:m,onChange:h,onRemove:_,status:b=y.Default,theme:E,uploadButtonText:k=`Upload logo`,accept:A=`image/svg+xml,image/png,image/jpeg,image/jpg`,maxSize:j=5242880})=>{let M=(0,D.useId)(),N=(0,D.useRef)(null),P=(0,D.useRef)(null),[F,I]=(0,D.useState)(b),[L,R]=(0,D.useState)(a),[z,B]=(0,D.useState)(n),[V,H]=(0,D.useState)(r);(0,D.useEffect)(()=>()=>{P.current&&clearTimeout(P.current)},[]);let U=b===y.Default?F:b,W=a??L,G=n??z,K=r??V,q=!!t||U===y.Error,J=e=>{let t=e.target.files?.[0];if(!t)return;if(!A.split(`,`).map(e=>e.trim()).some(e=>{if(e.includes(`*`)){let n=e.split(`/`)[0];return t.type.startsWith(n)}return t.type===e})){I(y.Error),h?.(e);return}if(t.size>j){I(y.Error),h?.(e);return}I(y.Uploading),B(t.name),H(Z(t.size));let n=new FileReader;n.onloadend=()=>{R(n.result),P.current=setTimeout(()=>{I(y.Complete)},500)},n.readAsDataURL(t),h?.(e)},Y=()=>{P.current&&=(clearTimeout(P.current),null),R(void 0),B(void 0),H(void 0),I(y.Default),N.current&&(N.current.value=``),_?.()},X=()=>{N.current?.click()},Z=e=>{if(e===0)return`0 Bytes`;let t=1024,n=[`Bytes`,`KB`,`MB`,`GB`],r=Math.floor(Math.log(e)/Math.log(t));return`${parseFloat((e/t**r).toFixed(2))}${n[r]}`},Q=t||(q?`Invalid file format. Accepted file type is SVG, PNG, JPEG. Max file size is 5MB.`:s||`Logo should be 32 x 32 pixels with transparent background (larger images will be downscaled proportionally to fit). Accepted file type is SVG, PNG, JPEG. Max file size is 5MB.`);return(0,O.jsxs)(`div`,{className:u(x({status:U,className:e})),"data-theme":E,children:[d&&(0,O.jsx)(`div`,{className:u(p),children:(0,O.jsxs)(`label`,{htmlFor:M,className:u(w({className:f}),`cursor-pointer`),children:[d,l&&(0,O.jsx)(`span`,{className:`text-red-600 dark:text-red-500 text-xs mt-0.5`,children:`*`})]})}),(0,O.jsxs)(`div`,{className:u(S({status:U})),children:[(0,O.jsxs)(`div`,{className:u(C({status:U}),{"justify-between":q,"justify-start":!q}),children:[U===y.Uploading&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(i,{size:20,className:`shrink-0 animate-spin text-metal-400`}),G&&(0,O.jsxs)(`div`,{className:`flex flex-col items-start min-w-0 flex-1`,children:[(0,O.jsx)(`p`,{className:`text-sm leading-5 truncate w-full text-slate-800 dark:text-metal-50`,children:G}),K&&(0,O.jsx)(`p`,{className:`text-xs leading-4 text-slate-600 dark:text-metal-300 tracking-[0.15px]`,children:K})]})]}),U===y.Complete&&W&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(`div`,{className:`w-8 h-8 shrink-0 relative`,children:(0,O.jsx)(`img`,{src:W,alt:G||`Uploaded image`,className:`w-full h-full object-contain`})}),G&&(0,O.jsxs)(`div`,{className:`flex flex-col items-start min-w-0 flex-1`,children:[(0,O.jsx)(`p`,{className:`text-sm leading-5 truncate w-full text-slate-800 dark:text-slate-50 kubefirst-dark:text-slate-50`,children:G}),K&&(0,O.jsx)(`p`,{className:`text-xs leading-4 text-slate-600 dark:text-slate-400 kubefirst-dark:text-slate-400 tracking-[0.15px]`,children:K})]})]}),(U===y.Default||U===y.Error&&!W)&&(0,O.jsx)(`div`,{className:`w-8 h-8 shrink-0 flex items-center justify-center`,children:(0,O.jsx)(o,{className:`w-8 h-8 text-slate-400 dark:text-slate-500 kubefirst-dark:text-slate-500`})}),q&&(0,O.jsx)(`div`,{className:`shrink-0`,children:(0,O.jsx)(c,{className:`w-5 h-5 text-red-700 dark:text-red-500 kubefirst-dark:text-red-500`})})]}),(U===y.Default||U===y.Error)&&(0,O.jsx)(v,{variant:`secondary`,onClick:X,theme:E,className:`h-10 px-4 py-2 shrink-0`,children:k}),U===y.Uploading&&(0,O.jsx)(v,{variant:`secondary`,shape:`circle`,size:`medium`,onClick:Y,theme:E,className:`shrink-0`,"aria-label":`Cancel upload`,children:(0,O.jsx)(g,{className:`w-6 h-6`})}),U===y.Complete&&(0,O.jsx)(v,{variant:`secondary`,shape:`circle`,size:`medium`,onClick:Y,theme:E,className:`shrink-0`,"aria-label":`Remove file`,children:(0,O.jsx)(g,{className:`w-6 h-6`})})]}),Q&&(0,O.jsxs)(`div`,{className:`flex w-full gap-2`,children:[(0,O.jsx)(`div`,{className:`flex-1 min-w-0`,children:(0,O.jsx)(`p`,{className:u(T({status:U})),children:Q})}),(U===y.Default||U===y.Error)&&(0,O.jsx)(`div`,{className:`shrink-0 w-29`}),U===y.Uploading&&(0,O.jsx)(`div`,{className:`shrink-0 w-10`})]}),(0,O.jsx)(`input`,{ref:N,id:M,type:`file`,name:m,accept:A,onChange:J,className:`hidden`,"aria-label":typeof d==`string`?d:`File upload`})]})},k.displayName=`KonstructImageUpload`,k.__docgenInfo={description:`A file input component for uploading images with preview and validation.
Supports drag states, file type validation, size limits, and upload progress.

@example
\`\`\`tsx
<ImageUpload
  label="Profile Picture"
  name="avatar"
  accept="image/png,image/jpeg"
  maxSize={5 * 1024 * 1024}
  uploadButtonText="Choose image"
  onChange={(e) => console.log(e.target.files?.[0])}
  onRemove={() => setAvatar(null)}
/>
\`\`\`

@see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-imageupload--docs Storybook}`,methods:[],displayName:`KonstructImageUpload`,props:{className:{required:!1,tsType:{name:`string`},description:`Additional CSS classes`},error:{required:!1,tsType:{name:`string`},description:`Error message to display`},fileName:{required:!1,tsType:{name:`string`},description:`Name of the uploaded file`},fileSize:{required:!1,tsType:{name:`string`},description:`Formatted size of the uploaded file`},fileUrl:{required:!1,tsType:{name:`string`},description:`URL or data URL of the uploaded file for preview`},helperText:{required:!1,tsType:{name:`string`},description:`Helper text displayed below the input`,defaultValue:{value:`'Logo should be 32 x 32 pixels with transparent background (larger images will be downscaled proportionally to fit). Accepted file type is SVG, PNG, JPEG. Max file size is 5MB.'`,computed:!1}},isRequired:{required:!1,tsType:{name:`boolean`},description:`Whether the field is required`,defaultValue:{value:`false`,computed:!1}},label:{required:!1,tsType:{name:`union`,raw:`string | ReactNode`,elements:[{name:`string`},{name:`ReactNode`}]},description:`Label displayed above the input`,defaultValue:{value:`'Item logo'`,computed:!1}},labelClassName:{required:!1,tsType:{name:`string`},description:`Additional CSS classes for the label`},labelWrapperClassName:{required:!1,tsType:{name:`string`},description:`Additional CSS classes for the label wrapper`},name:{required:!1,tsType:{name:`string`},description:`Form field name`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(event: ChangeEvent<HTMLInputElement>) => void`,signature:{arguments:[{type:{name:`ChangeEvent`,elements:[{name:`HTMLInputElement`}],raw:`ChangeEvent<HTMLInputElement>`},name:`event`}],return:{name:`void`}}},description:`Callback fired when a file is selected`},onRemove:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Callback fired when the uploaded file is removed`},status:{required:!1,tsType:{name:`ImageUploadStatus`},description:`Current upload status`,defaultValue:{value:`ImageUploadStatus.Default`,computed:!0}},theme:{required:!1,tsType:{name:`Theme`},description:`Theme override for this component`},uploadButtonText:{required:!1,tsType:{name:`string`},description:`Text displayed on the upload button`,defaultValue:{value:`'Upload logo'`,computed:!1}},accept:{required:!1,tsType:{name:`string`},description:`Accepted file MIME types (comma-separated)`,defaultValue:{value:`'image/svg+xml,image/png,image/jpeg,image/jpg'`,computed:!1}},maxSize:{required:!1,tsType:{name:`number`},description:`Maximum file size in bytes`,defaultValue:{value:`5 * 1024 * 1024`,computed:!1}}},composes:[`Omit`]}})))()}var j,M,N,P,F,I;function L(){return(L=e((()=>{j=t(),A(),b(),p(),M=n(),N={title:`In Review/ImageUpload`,component:k},P={args:{label:`Item logo`,isRequired:!0,uploadButtonText:`Upload logo`},render:e=>(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`div`,{className:`w-125 flex flex-col gap-8`,children:(0,M.jsxs)(`div`,{className:`flex flex-col gap-6`,children:[(0,M.jsxs)(`div`,{children:[(0,M.jsx)(m,{variant:`body2`,className:`mb-2 text-slate-600`,children:`Default State`}),(0,M.jsx)(k,{...e,status:y.Default})]}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(m,{variant:`body2`,className:`mb-2 text-slate-600`,children:`Uploading State`}),(0,M.jsx)(k,{...e,status:y.Uploading,fileName:`metaphor_logo.svg`,fileSize:`27.33KB`})]}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(m,{variant:`body2`,className:`mb-2 text-slate-600`,children:`Complete State`}),(0,M.jsx)(k,{...e,status:y.Complete,fileName:`metaphor_logo.svg`,fileSize:`27.33KB`,fileUrl:`https://placehold.co/32`})]}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(m,{variant:`body2`,className:`mb-2 text-slate-600`,children:`Error State`}),(0,M.jsx)(k,{...e,status:y.Error,error:`Invalid file format. Accepted file type is SVG, PNG, JPEG. Max file size is 5MB.`})]})]})}),(0,M.jsx)(`div`,{className:`w-125 mt-10 bg-slate-950 p-4 rounded-sm`,children:(0,M.jsxs)(`div`,{className:`flex flex-col gap-6`,children:[(0,M.jsxs)(`div`,{children:[(0,M.jsx)(m,{variant:`body2`,className:`mb-2 text-slate-200`,children:`Default State`}),(0,M.jsx)(k,{...e,status:y.Default,theme:`dark`})]}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(m,{variant:`body2`,className:`mb-2 text-slate-200`,children:`Uploading State`}),(0,M.jsx)(k,{...e,status:y.Uploading,fileName:`metaphor_logo.svg`,fileSize:`27.33KB`,theme:`dark`})]}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(m,{variant:`body2`,className:`mb-2 text-slate-200`,children:`Complete State`}),(0,M.jsx)(k,{...e,status:y.Complete,fileName:`metaphor_logo.svg`,fileSize:`27.33KB`,fileUrl:`https://placehold.co/32`,theme:`dark`})]}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(m,{variant:`body2`,className:`mb-2 text-slate-200`,children:`Error State`}),(0,M.jsx)(k,{...e,status:y.Error,error:`Invalid file format. Accepted file type is SVG, PNG, JPEG. Max file size is 5MB.`,theme:`dark`})]})]})})]})},F={args:{label:`Company Logo`,isRequired:!0,uploadButtonText:`Upload logo`,helperText:`Logo should be 32 x 32 pixels with transparent background (larger images will be downscaled proportionally to fit). Accepted file type is SVG, PNG, JPEG. Max file size is 5MB.`},render:function(e){let[t,n]=(0,j.useState)(void 0),[r,i]=(0,j.useState)(void 0),[a,o]=(0,j.useState)(void 0),[s,c]=(0,j.useState)(void 0),[l,u]=(0,j.useState)(y.Default),[d,f]=(0,j.useState)(void 0),p=e=>{let t=e.target.files?.[0];if(!t)return;console.log(`File selected:`,{name:t.name,size:t.size,type:t.type,lastModified:t.lastModified,file:t}),f(void 0),u(y.Uploading),n(t),o(t.name);let r=(t.size/1024).toFixed(2);c(`${r}KB`);let a=new FileReader;a.onloadend=()=>{setTimeout(()=>{let e=a.result;i(e),u(y.Complete),console.log(`File uploaded successfully:`,{file:t,dataUrl:e,fileName:t.name,fileSize:t.size})},500)},a.readAsDataURL(t)},h=()=>{console.log(`File removed`),n(void 0),i(void 0),o(void 0),c(void 0),u(y.Default),f(void 0)};return(0,M.jsxs)(`div`,{className:`w-150 flex flex-col gap-8`,children:[(0,M.jsxs)(`div`,{children:[(0,M.jsx)(m,{variant:`h6`,className:`mb-4`,theme:`kubefirst`,children:`Interactive ImageUpload - Light Mode`}),(0,M.jsx)(k,{...e,status:l,fileUrl:r,fileName:a,fileSize:s,error:d,onChange:p,onRemove:h})]}),(0,M.jsxs)(`div`,{className:`bg-slate-950 p-6 rounded-sm`,children:[(0,M.jsx)(m,{variant:`h6`,className:`mb-4 text-slate-50`,children:`Interactive ImageUpload - Dark Mode`}),(0,M.jsx)(k,{...e,theme:`dark`,status:l,fileUrl:r,fileName:a,fileSize:s,error:d,onChange:p,onRemove:h})]}),(0,M.jsxs)(`div`,{className:`mt-4 p-4 bg-slate-100 dark:bg-slate-800 rounded`,children:[(0,M.jsx)(m,{variant:`body2`,className:`mb-2 font-semibold`,children:`Current State:`}),(0,M.jsx)(`pre`,{className:`text-xs text-slate-700 dark:text-slate-300 overflow-auto max-h-64`,children:JSON.stringify({status:l,file:t?{name:t.name,size:t.size,type:t.type,lastModified:new Date(t.lastModified).toISOString()}:null,fileName:a,fileSize:s,fileUrl:r?`${r.substring(0,50)}...`:null,hasFile:!!t},null,2)}),t&&(0,M.jsxs)(`div`,{className:`mt-4 pt-4 border-t border-slate-300 dark:border-slate-600`,children:[(0,M.jsx)(m,{variant:`body2`,className:`mb-2 font-semibold`,children:`File Object Available:`}),(0,M.jsxs)(m,{variant:`body2`,className:`text-xs text-slate-600 dark:text-slate-400`,children:[`You can access the File object in your code via the onChange handler.`,(0,M.jsx)(`br`,{}),`Check the browser console for detailed file information.`]})]})]})]})}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Item logo',
    isRequired: true,
    uploadButtonText: 'Upload logo'
  },
  render: args => <>
      <div className="w-125 flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <div>
            <Typography variant="body2" className="mb-2 text-slate-600">
              Default State
            </Typography>
            <ImageUploadComponent {...args} status={ImageUploadStatus.Default} />
          </div>

          <div>
            <Typography variant="body2" className="mb-2 text-slate-600">
              Uploading State
            </Typography>
            <ImageUploadComponent {...args} status={ImageUploadStatus.Uploading} fileName="metaphor_logo.svg" fileSize="27.33KB" />
          </div>

          <div>
            <Typography variant="body2" className="mb-2 text-slate-600">
              Complete State
            </Typography>
            <ImageUploadComponent {...args} status={ImageUploadStatus.Complete} fileName="metaphor_logo.svg" fileSize="27.33KB" fileUrl="https://placehold.co/32" />
          </div>

          <div>
            <Typography variant="body2" className="mb-2 text-slate-600">
              Error State
            </Typography>
            <ImageUploadComponent {...args} status={ImageUploadStatus.Error} error="Invalid file format. Accepted file type is SVG, PNG, JPEG. Max file size is 5MB." />
          </div>
        </div>
      </div>

      <div className="w-125 mt-10 bg-slate-950 p-4 rounded-sm">
        <div className="flex flex-col gap-6">
          <div>
            <Typography variant="body2" className="mb-2 text-slate-200">
              Default State
            </Typography>
            <ImageUploadComponent {...args} status={ImageUploadStatus.Default} theme="dark" />
          </div>

          <div>
            <Typography variant="body2" className="mb-2 text-slate-200">
              Uploading State
            </Typography>
            <ImageUploadComponent {...args} status={ImageUploadStatus.Uploading} fileName="metaphor_logo.svg" fileSize="27.33KB" theme="dark" />
          </div>

          <div>
            <Typography variant="body2" className="mb-2 text-slate-200">
              Complete State
            </Typography>
            <ImageUploadComponent {...args} status={ImageUploadStatus.Complete} fileName="metaphor_logo.svg" fileSize="27.33KB" fileUrl="https://placehold.co/32" theme="dark" />
          </div>

          <div>
            <Typography variant="body2" className="mb-2 text-slate-200">
              Error State
            </Typography>
            <ImageUploadComponent {...args} status={ImageUploadStatus.Error} error="Invalid file format. Accepted file type is SVG, PNG, JPEG. Max file size is 5MB." theme="dark" />
          </div>
        </div>
      </div>
    </>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Company Logo',
    isRequired: true,
    uploadButtonText: 'Upload logo',
    helperText: 'Logo should be 32 x 32 pixels with transparent background (larger images will be downscaled proportionally to fit). Accepted file type is SVG, PNG, JPEG. Max file size is 5MB.'
  },
  render: function InteractiveStory(args) {
    const [file, setFile] = useState<File | undefined>(undefined);
    const [fileUrl, setFileUrl] = useState<string | undefined>(undefined);
    const [fileName, setFileName] = useState<string | undefined>(undefined);
    const [fileSize, setFileSize] = useState<string | undefined>(undefined);
    const [status, setStatus] = useState<ImageUploadStatus>(ImageUploadStatus.Default);
    const [error, setError] = useState<string | undefined>(undefined);
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFile = event.target.files?.[0];
      if (!selectedFile) return;
      console.log('File selected:', {
        name: selectedFile.name,
        size: selectedFile.size,
        type: selectedFile.type,
        lastModified: selectedFile.lastModified,
        file: selectedFile
      });
      setError(undefined);
      setStatus(ImageUploadStatus.Uploading);
      setFile(selectedFile);
      setFileName(selectedFile.name);
      const sizeInKB = (selectedFile.size / 1024).toFixed(2);
      setFileSize(\`\${sizeInKB}KB\`);
      const reader = new FileReader();
      reader.onloadend = () => {
        setTimeout(() => {
          const dataUrl = reader.result as string;
          setFileUrl(dataUrl);
          setStatus(ImageUploadStatus.Complete);
          console.log('File uploaded successfully:', {
            file: selectedFile,
            dataUrl,
            fileName: selectedFile.name,
            fileSize: selectedFile.size
          });
        }, 500);
      };
      reader.readAsDataURL(selectedFile);
    };
    const handleRemove = () => {
      console.log('File removed');
      setFile(undefined);
      setFileUrl(undefined);
      setFileName(undefined);
      setFileSize(undefined);
      setStatus(ImageUploadStatus.Default);
      setError(undefined);
    };
    return <div className="w-150 flex flex-col gap-8">
        <div>
          <Typography variant="h6" className="mb-4" theme="kubefirst">
            Interactive ImageUpload - Light Mode
          </Typography>
          <ImageUploadComponent {...args} status={status} fileUrl={fileUrl} fileName={fileName} fileSize={fileSize} error={error} onChange={handleFileChange} onRemove={handleRemove} />
        </div>

        <div className="bg-slate-950 p-6 rounded-sm">
          <Typography variant="h6" className="mb-4 text-slate-50">
            Interactive ImageUpload - Dark Mode
          </Typography>
          <ImageUploadComponent {...args} theme="dark" status={status} fileUrl={fileUrl} fileName={fileName} fileSize={fileSize} error={error} onChange={handleFileChange} onRemove={handleRemove} />
        </div>

        <div className="mt-4 p-4 bg-slate-100 dark:bg-slate-800 rounded">
          <Typography variant="body2" className="mb-2 font-semibold">
            Current State:
          </Typography>
          <pre className="text-xs text-slate-700 dark:text-slate-300 overflow-auto max-h-64">
            {JSON.stringify({
            status,
            file: file ? {
              name: file.name,
              size: file.size,
              type: file.type,
              lastModified: new Date(file.lastModified).toISOString()
            } : null,
            fileName,
            fileSize,
            fileUrl: fileUrl ? \`\${fileUrl.substring(0, 50)}...\` : null,
            hasFile: !!file
          }, null, 2)}
          </pre>
          {file && <div className="mt-4 pt-4 border-t border-slate-300 dark:border-slate-600">
              <Typography variant="body2" className="mb-2 font-semibold">
                File Object Available:
              </Typography>
              <Typography variant="body2" className="text-xs text-slate-600 dark:text-slate-400">
                You can access the File object in your code via the onChange
                handler.
                <br />
                Check the browser console for detailed file information.
              </Typography>
            </div>}
        </div>
      </div>;
  }
}`,...F.parameters?.docs?.source}}},I=[`ImageUpload`,`Interactive`]})))()}L();export{P as ImageUpload,F as Interactive,I as __namedExportsOrder,N as default};