import{r as i,j as e}from"./iframe-DzqcIqyR.js";import{L as se}from"./Loader-BObM8lmG.js";import{P as le}from"./PhotoLibrary-CAu3MZrS.js";import{W as ie}from"./Warning-DbY5aqkH.js";import{B as L}from"./Button-CzXoaHXK.js";import{a as F,c as v}from"./index-CGPp45Jz.js";import{X as O}from"./x-DMb9O_Hn.js";import{T as r}from"./Typography-A9RCCnP7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BeGbFKQs.js";import"./index-OJi8xCWq.js";import"./createLucideIcon-va641UPV.js";var t=(a=>(a.Default="default",a.Uploading="uploading",a.Complete="complete",a.Error="error",a))(t||{});const re=F(["flex","flex-col","gap-2","w-full"],{variants:{status:{default:"",uploading:"",complete:"",error:""}},defaultVariants:{status:"default"}}),oe=F(["flex","gap-2","h-15","items-center","w-full"],{variants:{status:{default:"",uploading:"",complete:"",error:""}},defaultVariants:{status:"default"}}),ne=F(["flex","gap-4","grow","h-full","items-center","px-4","py-2","rounded","border","bg-white","border-gray-300","dark:bg-metal-800","dark:border-metal-700","kubefirst-dark:bg-slate-800","kubefirst-dark:border-slate-600"],{variants:{status:{default:"",uploading:"",complete:"",error:["border-red-600","dark:border-red-500","kubefirst-dark:border-red-500"]}},defaultVariants:{status:"default"}}),de=F(["flex","gap-1","items-center","text-sm","font-medium","leading-5","text-slate-500","dark:text-slate-50","kubefirst-dark:text-slate-50"]),me=F(["text-xs","leading-5","text-slate-600","dark:text-slate-200","kubefirst-dark:text-slate-200"],{variants:{status:{default:"",uploading:"",complete:"",error:["text-red-700","dark:text-red-400","kubefirst-dark:text-red-500"]}},defaultVariants:{status:"default"}}),o=({className:a,error:y,fileName:n,fileSize:b,fileUrl:u,helperText:I="Logo should be 32 x 32 pixels with transparent background (larger images will be downscaled proportionally to fit). Accepted file type is SVG, PNG, JPEG. Max file size is 5MB.",isRequired:N=!1,label:f="Item logo",labelClassName:S,labelWrapperClassName:w,name:j,onChange:g,onRemove:z,status:h=t.Default,theme:x,uploadButtonText:C="Upload logo",accept:E="image/svg+xml,image/png,image/jpeg,image/jpg",maxSize:l=5*1024*1024})=>{const M=i.useId(),c=i.useRef(null),m=i.useRef(null),[$,U]=i.useState(h),[W,A]=i.useState(u),[Y,K]=i.useState(n),[X,J]=i.useState(b);i.useEffect(()=>()=>{m.current&&clearTimeout(m.current)},[]);const s=h!==t.Default?h:$,D=u??W,k=n??Y,B=b??X,R=!!y||s===t.Error,Q=p=>{const d=p.target.files?.[0];if(!d)return;if(!E.split(",").map(T=>T.trim()).some(T=>{if(T.includes("*")){const ae=T.split("/")[0];return d.type.startsWith(ae)}return d.type===T})){U(t.Error),g?.(p);return}if(d.size>l){U(t.Error),g?.(p);return}U(t.Uploading),K(d.name),J(ee(d.size));const P=new FileReader;P.onloadend=()=>{A(P.result),m.current=setTimeout(()=>{U(t.Complete)},500)},P.readAsDataURL(d),g?.(p)},_=()=>{m.current&&(clearTimeout(m.current),m.current=null),A(void 0),K(void 0),J(void 0),U(t.Default),c.current&&(c.current.value=""),z?.()},Z=()=>{c.current?.click()},ee=p=>{if(p===0)return"0 Bytes";const d=1024,H=["Bytes","KB","MB","GB"],q=Math.floor(Math.log(p)/Math.log(d));return`${parseFloat((p/Math.pow(d,q)).toFixed(2))}${H[q]}`},te=y||(R?"Invalid file format. Accepted file type is SVG, PNG, JPEG. Max file size is 5MB.":I||"Logo should be 32 x 32 pixels with transparent background (larger images will be downscaled proportionally to fit). Accepted file type is SVG, PNG, JPEG. Max file size is 5MB.");return e.jsxs("div",{className:v(re({status:s,className:a})),"data-theme":x,children:[f&&e.jsx("div",{className:v(w),children:e.jsxs("label",{htmlFor:M,className:v(de({className:S}),"cursor-pointer"),children:[f,N&&e.jsx("span",{className:"text-red-600 dark:text-red-500 text-xs mt-0.5",children:"*"})]})}),e.jsxs("div",{className:v(oe({status:s})),children:[e.jsxs("div",{className:v(ne({status:s}),{"justify-between":R,"justify-start":!R}),children:[s===t.Uploading&&e.jsxs(e.Fragment,{children:[e.jsx(se,{size:20,className:"shrink-0 animate-spin text-metal-400"}),k&&e.jsxs("div",{className:"flex flex-col items-start min-w-0 flex-1",children:[e.jsx("p",{className:"text-sm leading-5 truncate w-full text-slate-800 dark:text-metal-50",children:k}),B&&e.jsx("p",{className:"text-xs leading-4 text-slate-600 dark:text-metal-300 tracking-[0.15px]",children:B})]})]}),s===t.Complete&&D&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-8 h-8 shrink-0 relative",children:e.jsx("img",{src:D,alt:k||"Uploaded image",className:"w-full h-full object-contain"})}),k&&e.jsxs("div",{className:"flex flex-col items-start min-w-0 flex-1",children:[e.jsx("p",{className:"text-sm leading-5 truncate w-full text-slate-800 dark:text-slate-50 kubefirst-dark:text-slate-50",children:k}),B&&e.jsx("p",{className:"text-xs leading-4 text-slate-600 dark:text-slate-400 kubefirst-dark:text-slate-400 tracking-[0.15px]",children:B})]})]}),(s===t.Default||s===t.Error&&!D)&&e.jsx("div",{className:"w-8 h-8 shrink-0 flex items-center justify-center",children:e.jsx(le,{className:"w-8 h-8 text-slate-400 dark:text-slate-500 kubefirst-dark:text-slate-500"})}),R&&e.jsx("div",{className:"shrink-0",children:e.jsx(ie,{className:"w-5 h-5 text-red-700 dark:text-red-500 kubefirst-dark:text-red-500"})})]}),(s===t.Default||s===t.Error)&&e.jsx(L,{variant:"secondary",onClick:Z,theme:x,className:"h-10 px-4 py-2 shrink-0",children:C}),s===t.Uploading&&e.jsx(L,{variant:"secondary",shape:"circle",size:"medium",onClick:_,theme:x,className:"shrink-0","aria-label":"Cancel upload",children:e.jsx(O,{className:"w-6 h-6"})}),s===t.Complete&&e.jsx(L,{variant:"secondary",shape:"circle",size:"medium",onClick:_,theme:x,className:"shrink-0","aria-label":"Remove file",children:e.jsx(O,{className:"w-6 h-6"})})]}),e.jsxs("div",{className:"flex w-full gap-2",children:[e.jsx("div",{className:"flex-1 min-w-0",children:e.jsx("p",{className:v(me({status:s})),children:te})}),(s===t.Default||s===t.Error)&&e.jsx("div",{className:"shrink-0 w-29"}),s===t.Uploading&&e.jsx("div",{className:"shrink-0 w-10"})]}),e.jsx("input",{ref:c,id:M,type:"file",name:j,accept:E,onChange:Q,className:"hidden","aria-label":typeof f=="string"?f:"File upload"})]})};o.displayName="KonstructImageUpload";o.__docgenInfo={description:`A file input component for uploading images with preview and validation.
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

@see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-imageupload--docs Storybook}`,methods:[],displayName:"KonstructImageUpload",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes"},error:{required:!1,tsType:{name:"string"},description:"Error message to display"},fileName:{required:!1,tsType:{name:"string"},description:"Name of the uploaded file"},fileSize:{required:!1,tsType:{name:"string"},description:"Formatted size of the uploaded file"},fileUrl:{required:!1,tsType:{name:"string"},description:"URL or data URL of the uploaded file for preview"},helperText:{required:!1,tsType:{name:"string"},description:"Helper text displayed below the input",defaultValue:{value:"'Logo should be 32 x 32 pixels with transparent background (larger images will be downscaled proportionally to fit). Accepted file type is SVG, PNG, JPEG. Max file size is 5MB.'",computed:!1}},isRequired:{required:!1,tsType:{name:"boolean"},description:"Whether the field is required",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:"Label displayed above the input",defaultValue:{value:"'Item logo'",computed:!1}},labelClassName:{required:!1,tsType:{name:"string"},description:"Additional CSS classes for the label"},labelWrapperClassName:{required:!1,tsType:{name:"string"},description:"Additional CSS classes for the label wrapper"},name:{required:!1,tsType:{name:"string"},description:"Form field name"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"event"}],return:{name:"void"}}},description:"Callback fired when a file is selected"},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the uploaded file is removed"},status:{required:!1,tsType:{name:"ImageUploadStatus"},description:"Current upload status",defaultValue:{value:"ImageUploadStatus.Default",computed:!0}},theme:{required:!1,tsType:{name:"Theme"},description:"Theme override for this component"},uploadButtonText:{required:!1,tsType:{name:"string"},description:"Text displayed on the upload button",defaultValue:{value:"'Upload logo'",computed:!1}},accept:{required:!1,tsType:{name:"string"},description:"Accepted file MIME types (comma-separated)",defaultValue:{value:"'image/svg+xml,image/png,image/jpeg,image/jpg'",computed:!1}},maxSize:{required:!1,tsType:{name:"number"},description:"Maximum file size in bytes",defaultValue:{value:"5 * 1024 * 1024",computed:!1}}},composes:["Omit"]};const Ue={title:"In Review/ImageUpload",component:o},G={args:{label:"Item logo",isRequired:!0,uploadButtonText:"Upload logo"},render:a=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-125 flex flex-col gap-8",children:e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{children:[e.jsx(r,{variant:"body2",className:"mb-2 text-slate-600",children:"Default State"}),e.jsx(o,{...a,status:t.Default})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"body2",className:"mb-2 text-slate-600",children:"Uploading State"}),e.jsx(o,{...a,status:t.Uploading,fileName:"metaphor_logo.svg",fileSize:"27.33KB"})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"body2",className:"mb-2 text-slate-600",children:"Complete State"}),e.jsx(o,{...a,status:t.Complete,fileName:"metaphor_logo.svg",fileSize:"27.33KB",fileUrl:"https://placehold.co/32"})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"body2",className:"mb-2 text-slate-600",children:"Error State"}),e.jsx(o,{...a,status:t.Error,error:"Invalid file format. Accepted file type is SVG, PNG, JPEG. Max file size is 5MB."})]})]})}),e.jsx("div",{className:"w-125 mt-10 bg-slate-950 p-4 rounded-sm",children:e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{children:[e.jsx(r,{variant:"body2",className:"mb-2 text-slate-200",children:"Default State"}),e.jsx(o,{...a,status:t.Default,theme:"dark"})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"body2",className:"mb-2 text-slate-200",children:"Uploading State"}),e.jsx(o,{...a,status:t.Uploading,fileName:"metaphor_logo.svg",fileSize:"27.33KB",theme:"dark"})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"body2",className:"mb-2 text-slate-200",children:"Complete State"}),e.jsx(o,{...a,status:t.Complete,fileName:"metaphor_logo.svg",fileSize:"27.33KB",fileUrl:"https://placehold.co/32",theme:"dark"})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"body2",className:"mb-2 text-slate-200",children:"Error State"}),e.jsx(o,{...a,status:t.Error,error:"Invalid file format. Accepted file type is SVG, PNG, JPEG. Max file size is 5MB.",theme:"dark"})]})]})})]})},V={args:{label:"Company Logo",isRequired:!0,uploadButtonText:"Upload logo",helperText:"Logo should be 32 x 32 pixels with transparent background (larger images will be downscaled proportionally to fit). Accepted file type is SVG, PNG, JPEG. Max file size is 5MB."},render:function(y){const[n,b]=i.useState(void 0),[u,I]=i.useState(void 0),[N,f]=i.useState(void 0),[S,w]=i.useState(void 0),[j,g]=i.useState(t.Default),[z,h]=i.useState(void 0),x=E=>{const l=E.target.files?.[0];if(!l)return;console.log("File selected:",{name:l.name,size:l.size,type:l.type,lastModified:l.lastModified,file:l}),h(void 0),g(t.Uploading),b(l),f(l.name);const M=(l.size/1024).toFixed(2);w(`${M}KB`);const c=new FileReader;c.onloadend=()=>{setTimeout(()=>{const m=c.result;I(m),g(t.Complete),console.log("File uploaded successfully:",{file:l,dataUrl:m,fileName:l.name,fileSize:l.size})},500)},c.readAsDataURL(l)},C=()=>{console.log("File removed"),b(void 0),I(void 0),f(void 0),w(void 0),g(t.Default),h(void 0)};return e.jsxs("div",{className:"w-150 flex flex-col gap-8",children:[e.jsxs("div",{children:[e.jsx(r,{variant:"h6",className:"mb-4",theme:"kubefirst",children:"Interactive ImageUpload - Light Mode"}),e.jsx(o,{...y,status:j,fileUrl:u,fileName:N,fileSize:S,error:z,onChange:x,onRemove:C})]}),e.jsxs("div",{className:"bg-slate-950 p-6 rounded-sm",children:[e.jsx(r,{variant:"h6",className:"mb-4 text-slate-50",children:"Interactive ImageUpload - Dark Mode"}),e.jsx(o,{...y,theme:"dark",status:j,fileUrl:u,fileName:N,fileSize:S,error:z,onChange:x,onRemove:C})]}),e.jsxs("div",{className:"mt-4 p-4 bg-slate-100 dark:bg-slate-800 rounded",children:[e.jsx(r,{variant:"body2",className:"mb-2 font-semibold",children:"Current State:"}),e.jsx("pre",{className:"text-xs text-slate-700 dark:text-slate-300 overflow-auto max-h-64",children:JSON.stringify({status:j,file:n?{name:n.name,size:n.size,type:n.type,lastModified:new Date(n.lastModified).toISOString()}:null,fileName:N,fileSize:S,fileUrl:u?`${u.substring(0,50)}...`:null,hasFile:!!n},null,2)}),n&&e.jsxs("div",{className:"mt-4 pt-4 border-t border-slate-300 dark:border-slate-600",children:[e.jsx(r,{variant:"body2",className:"mb-2 font-semibold",children:"File Object Available:"}),e.jsxs(r,{variant:"body2",className:"text-xs text-slate-600 dark:text-slate-400",children:["You can access the File object in your code via the onChange handler.",e.jsx("br",{}),"Check the browser console for detailed file information."]})]})]})]})}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}};const ke=["ImageUpload","Interactive"];export{G as ImageUpload,V as Interactive,ke as __namedExportsOrder,Ue as default};
