import{r as i,j as e}from"./iframe-DzCElVTB.js";import{L as ae}from"./Loader-D_TQ7JsG.js";import{P as se}from"./PhotoLibrary-Kh5UU7NY.js";import{W as le}from"./Warning-B7zpCILh.js";import{B as L}from"./Button-Br17MK3Z.js";import{a as I,c as F}from"./index-B-7A89sm.js";import{X as O}from"./x-B-Ry5TE4.js";import{T as r}from"./Typography-CJxmGzaW.js";import"./preload-helper-PPVm8Dsz.js";import"./index-unz-5YXc.js";import"./index-CXkHpK-W.js";import"./createLucideIcon-FeJNRDec.js";var t=(a=>(a.Default="default",a.Uploading="uploading",a.Complete="complete",a.Error="error",a))(t||{});const ie=I(["flex","flex-col","gap-2","w-full"],{variants:{status:{default:"",uploading:"",complete:"",error:""}},defaultVariants:{status:"default"}}),re=I(["flex","gap-2","h-15","items-center","w-full"],{variants:{status:{default:"",uploading:"",complete:"",error:""}},defaultVariants:{status:"default"}}),oe=I(["flex","gap-4","grow","h-full","items-center","px-4","py-2","rounded","border","bg-white","border-gray-300","dark:bg-metal-800","dark:border-metal-700","kubefirst-dark:bg-slate-800","kubefirst-dark:border-slate-600"],{variants:{status:{default:"",uploading:"",complete:"",error:["border-red-600","dark:border-red-500","kubefirst-dark:border-red-500"]}},defaultVariants:{status:"default"}}),ne=I(["flex","gap-1","items-center","text-sm","font-medium","leading-5","text-slate-500","dark:text-slate-50","kubefirst-dark:text-slate-50"]),de=I(["text-xs","leading-5","text-slate-600","dark:text-slate-200","kubefirst-dark:text-slate-200"],{variants:{status:{default:"",uploading:"",complete:"",error:["text-red-700","dark:text-red-400","kubefirst-dark:text-red-500"]}},defaultVariants:{status:"default"}}),o=({className:a,error:v,fileName:n,fileSize:y,fileUrl:p,helperText:w="Logo should be 32 x 32 pixels with transparent background (larger images will be downscaled proportionally to fit). Accepted file type is SVG, PNG, JPEG. Max file size is 5MB.",isRequired:b=!1,label:u="Item logo",labelClassName:N,name:z,onChange:f,onRemove:S,status:x=t.Default,theme:g,uploadButtonText:C="Upload logo",accept:j="image/svg+xml,image/png,image/jpeg,image/jpg",maxSize:V=5*1024*1024})=>{const s=i.useId(),h=i.useRef(null),d=i.useRef(null),[E,U]=i.useState(x),[$,A]=i.useState(p),[W,K]=i.useState(n),[Y,J]=i.useState(y);i.useEffect(()=>()=>{d.current&&clearTimeout(d.current)},[]);const l=x!==t.Default?x:E,D=p??$,k=n??W,M=y??Y,B=!!v||l===t.Error,X=c=>{const m=c.target.files?.[0];if(!m)return;if(!j.split(",").map(T=>T.trim()).some(T=>{if(T.includes("*")){const te=T.split("/")[0];return m.type.startsWith(te)}return m.type===T})){U(t.Error),f?.(c);return}if(m.size>V){U(t.Error),f?.(c);return}U(t.Uploading),K(m.name),J(Z(m.size));const q=new FileReader;q.onloadend=()=>{A(q.result),d.current=setTimeout(()=>{U(t.Complete)},500)},q.readAsDataURL(m),f?.(c)},_=()=>{d.current&&(clearTimeout(d.current),d.current=null),A(void 0),K(void 0),J(void 0),U(t.Default),h.current&&(h.current.value=""),S?.()},Q=()=>{h.current?.click()},Z=c=>{if(c===0)return"0 Bytes";const m=1024,H=["Bytes","KB","MB","GB"],P=Math.floor(Math.log(c)/Math.log(m));return`${parseFloat((c/Math.pow(m,P)).toFixed(2))}${H[P]}`},ee=v||(B?"Invalid file format. Accepted file type is SVG, PNG, JPEG. Max file size is 5MB.":w||"Logo should be 32 x 32 pixels with transparent background (larger images will be downscaled proportionally to fit). Accepted file type is SVG, PNG, JPEG. Max file size is 5MB.");return e.jsxs("div",{className:F(ie({status:l,className:a})),"data-theme":g,children:[u&&e.jsxs("label",{htmlFor:s,className:F(ne({className:N}),"cursor-pointer"),children:[u,b&&e.jsx("span",{className:"text-red-600 dark:text-red-500 text-xs mt-0.5",children:"*"})]}),e.jsxs("div",{className:F(re({status:l})),children:[e.jsxs("div",{className:F(oe({status:l}),{"justify-between":B,"justify-start":!B}),children:[l===t.Uploading&&e.jsxs(e.Fragment,{children:[e.jsx(ae,{size:20,className:"shrink-0 animate-spin text-metal-400"}),k&&e.jsxs("div",{className:"flex flex-col items-start min-w-0 flex-1",children:[e.jsx("p",{className:"text-sm leading-5 truncate w-full text-slate-800 dark:text-metal-50",children:k}),M&&e.jsx("p",{className:"text-xs leading-4 text-slate-600 dark:text-metal-300 tracking-[0.15px]",children:M})]})]}),l===t.Complete&&D&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-8 h-8 shrink-0 relative",children:e.jsx("img",{src:D,alt:k||"Uploaded image",className:"w-full h-full object-contain"})}),k&&e.jsxs("div",{className:"flex flex-col items-start min-w-0 flex-1",children:[e.jsx("p",{className:"text-sm leading-5 truncate w-full text-slate-800 dark:text-slate-50 kubefirst-dark:text-slate-50",children:k}),M&&e.jsx("p",{className:"text-xs leading-4 text-slate-600 dark:text-slate-400 kubefirst-dark:text-slate-400 tracking-[0.15px]",children:M})]})]}),(l===t.Default||l===t.Error&&!D)&&e.jsx("div",{className:"w-8 h-8 shrink-0 flex items-center justify-center",children:e.jsx(se,{className:"w-8 h-8 text-slate-400 dark:text-slate-500 kubefirst-dark:text-slate-500"})}),B&&e.jsx("div",{className:"shrink-0",children:e.jsx(le,{className:"w-5 h-5 text-red-700 dark:text-red-500 kubefirst-dark:text-red-500"})})]}),(l===t.Default||l===t.Error)&&e.jsx(L,{variant:"secondary",onClick:Q,theme:g,className:"h-10 px-4 py-2 shrink-0",children:C}),l===t.Uploading&&e.jsx(L,{variant:"secondary",shape:"circle",size:"medium",onClick:_,theme:g,className:"shrink-0","aria-label":"Cancel upload",children:e.jsx(O,{className:"w-6 h-6"})}),l===t.Complete&&e.jsx(L,{variant:"secondary",shape:"circle",size:"medium",onClick:_,theme:g,className:"shrink-0","aria-label":"Remove file",children:e.jsx(O,{className:"w-6 h-6"})})]}),e.jsxs("div",{className:"flex w-full gap-2",children:[e.jsx("div",{className:"flex-1 min-w-0",children:e.jsx("p",{className:F(de({status:l})),children:ee})}),(l===t.Default||l===t.Error)&&e.jsx("div",{className:"shrink-0 w-29"}),l===t.Uploading&&e.jsx("div",{className:"shrink-0 w-10"})]}),e.jsx("input",{ref:h,id:s,type:"file",name:z,accept:j,onChange:X,className:"hidden","aria-label":typeof u=="string"?u:"File upload"})]})};o.displayName="KonstructImageUpload";o.__docgenInfo={description:`A file input component for uploading images with preview and validation.
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

@see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-imageupload--docs Storybook}`,methods:[],displayName:"KonstructImageUpload",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes"},error:{required:!1,tsType:{name:"string"},description:"Error message to display"},fileName:{required:!1,tsType:{name:"string"},description:"Name of the uploaded file"},fileSize:{required:!1,tsType:{name:"string"},description:"Formatted size of the uploaded file"},fileUrl:{required:!1,tsType:{name:"string"},description:"URL or data URL of the uploaded file for preview"},helperText:{required:!1,tsType:{name:"string"},description:"Helper text displayed below the input",defaultValue:{value:"'Logo should be 32 x 32 pixels with transparent background (larger images will be downscaled proportionally to fit). Accepted file type is SVG, PNG, JPEG. Max file size is 5MB.'",computed:!1}},isRequired:{required:!1,tsType:{name:"boolean"},description:"Whether the field is required",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:"Label displayed above the input",defaultValue:{value:"'Item logo'",computed:!1}},labelClassName:{required:!1,tsType:{name:"string"},description:"Additional CSS classes for the label"},name:{required:!1,tsType:{name:"string"},description:"Form field name"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"event"}],return:{name:"void"}}},description:"Callback fired when a file is selected"},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the uploaded file is removed"},status:{required:!1,tsType:{name:"ImageUploadStatus"},description:"Current upload status",defaultValue:{value:"ImageUploadStatus.Default",computed:!0}},theme:{required:!1,tsType:{name:"Theme"},description:"Theme override for this component"},uploadButtonText:{required:!1,tsType:{name:"string"},description:"Text displayed on the upload button",defaultValue:{value:"'Upload logo'",computed:!1}},accept:{required:!1,tsType:{name:"string"},description:"Accepted file MIME types (comma-separated)",defaultValue:{value:"'image/svg+xml,image/png,image/jpeg,image/jpg'",computed:!1}},maxSize:{required:!1,tsType:{name:"number"},description:"Maximum file size in bytes",defaultValue:{value:"5 * 1024 * 1024",computed:!1}}},composes:["Omit"]};const je={title:"In Review/ImageUpload",component:o},R={args:{label:"Item logo",isRequired:!0,uploadButtonText:"Upload logo"},render:a=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-125 flex flex-col gap-8",children:e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{children:[e.jsx(r,{variant:"body2",className:"mb-2 text-slate-600",children:"Default State"}),e.jsx(o,{...a,status:t.Default})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"body2",className:"mb-2 text-slate-600",children:"Uploading State"}),e.jsx(o,{...a,status:t.Uploading,fileName:"metaphor_logo.svg",fileSize:"27.33KB"})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"body2",className:"mb-2 text-slate-600",children:"Complete State"}),e.jsx(o,{...a,status:t.Complete,fileName:"metaphor_logo.svg",fileSize:"27.33KB",fileUrl:"https://placehold.co/32"})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"body2",className:"mb-2 text-slate-600",children:"Error State"}),e.jsx(o,{...a,status:t.Error,error:"Invalid file format. Accepted file type is SVG, PNG, JPEG. Max file size is 5MB."})]})]})}),e.jsx("div",{className:"w-125 mt-10 bg-slate-950 p-4 rounded-sm",children:e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{children:[e.jsx(r,{variant:"body2",className:"mb-2 text-slate-200",children:"Default State"}),e.jsx(o,{...a,status:t.Default,theme:"dark"})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"body2",className:"mb-2 text-slate-200",children:"Uploading State"}),e.jsx(o,{...a,status:t.Uploading,fileName:"metaphor_logo.svg",fileSize:"27.33KB",theme:"dark"})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"body2",className:"mb-2 text-slate-200",children:"Complete State"}),e.jsx(o,{...a,status:t.Complete,fileName:"metaphor_logo.svg",fileSize:"27.33KB",fileUrl:"https://placehold.co/32",theme:"dark"})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"body2",className:"mb-2 text-slate-200",children:"Error State"}),e.jsx(o,{...a,status:t.Error,error:"Invalid file format. Accepted file type is SVG, PNG, JPEG. Max file size is 5MB.",theme:"dark"})]})]})})]})},G={args:{label:"Company Logo",isRequired:!0,uploadButtonText:"Upload logo",helperText:"Logo should be 32 x 32 pixels with transparent background (larger images will be downscaled proportionally to fit). Accepted file type is SVG, PNG, JPEG. Max file size is 5MB."},render:function(v){const[n,y]=i.useState(void 0),[p,w]=i.useState(void 0),[b,u]=i.useState(void 0),[N,z]=i.useState(void 0),[f,S]=i.useState(t.Default),[x,g]=i.useState(void 0),C=V=>{const s=V.target.files?.[0];if(!s)return;console.log("File selected:",{name:s.name,size:s.size,type:s.type,lastModified:s.lastModified,file:s}),g(void 0),S(t.Uploading),y(s),u(s.name);const h=(s.size/1024).toFixed(2);z(`${h}KB`);const d=new FileReader;d.onloadend=()=>{setTimeout(()=>{const E=d.result;w(E),S(t.Complete),console.log("File uploaded successfully:",{file:s,dataUrl:E,fileName:s.name,fileSize:s.size})},500)},d.readAsDataURL(s)},j=()=>{console.log("File removed"),y(void 0),w(void 0),u(void 0),z(void 0),S(t.Default),g(void 0)};return e.jsxs("div",{className:"w-150 flex flex-col gap-8",children:[e.jsxs("div",{children:[e.jsx(r,{variant:"h6",className:"mb-4",theme:"kubefirst",children:"Interactive ImageUpload - Light Mode"}),e.jsx(o,{...v,status:f,fileUrl:p,fileName:b,fileSize:N,error:x,onChange:C,onRemove:j})]}),e.jsxs("div",{className:"bg-slate-950 p-6 rounded-sm",children:[e.jsx(r,{variant:"h6",className:"mb-4 text-slate-50",children:"Interactive ImageUpload - Dark Mode"}),e.jsx(o,{...v,theme:"dark",status:f,fileUrl:p,fileName:b,fileSize:N,error:x,onChange:C,onRemove:j})]}),e.jsxs("div",{className:"mt-4 p-4 bg-slate-100 dark:bg-slate-800 rounded",children:[e.jsx(r,{variant:"body2",className:"mb-2 font-semibold",children:"Current State:"}),e.jsx("pre",{className:"text-xs text-slate-700 dark:text-slate-300 overflow-auto max-h-64",children:JSON.stringify({status:f,file:n?{name:n.name,size:n.size,type:n.type,lastModified:new Date(n.lastModified).toISOString()}:null,fileName:b,fileSize:N,fileUrl:p?`${p.substring(0,50)}...`:null,hasFile:!!n},null,2)}),n&&e.jsxs("div",{className:"mt-4 pt-4 border-t border-slate-300 dark:border-slate-600",children:[e.jsx(r,{variant:"body2",className:"mb-2 font-semibold",children:"File Object Available:"}),e.jsxs(r,{variant:"body2",className:"text-xs text-slate-600 dark:text-slate-400",children:["You can access the File object in your code via the onChange handler.",e.jsx("br",{}),"Check the browser console for detailed file information."]})]})]})]})}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}};const Ue=["ImageUpload","Interactive"];export{R as ImageUpload,G as Interactive,Ue as __namedExportsOrder,je as default};
