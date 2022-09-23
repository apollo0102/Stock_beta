import React, { useState, useEffect, useCallback } from "react";
import { InfoCircleOutlined,FileDoneOutlined,PlusOutlined } from '@ant-design/icons';



import { Button, message, Steps,Tabs, Form,
  Input,  Col, Row,DatePicker,Tooltip, Select,Upload,Modal,Segmented} from 'antd';
  const { Dragger } = Upload;
  const { TextArea } = Input;
  const { Option } = Select;
  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => resolve(reader.result);

      reader.onerror = (error) => reject(error);
    });
 const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },

    },
    wrapperCol: {
      xs: {
        span: 24,
      },

    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        offset: 0,
      },
      sm: {

        offset: 8,
      },
    },
  };
const { Step } = Steps;
const steps = [
  {
    title: 'Listing',
    content: 'First-content',
  },
  {
    title: 'Sale',
    content: 'Second-content',
  },
  {
    title: 'Documents',
    content: 'Last-content',
  },
  {
    title: 'Photos',
    content: 'Last-content',
  },
  {
    title: 'Property',
    content: 'Last-content',
  },
  {
    title: 'Secure Information',
    content: 'Last-content',
  },
  {
    title: 'Financials',
    content: 'Last-content',
  },
  {
    title: 'Highlights',
    content: 'Last-content',
  },
  {
    title: 'Contacts',
    content: 'Last-content',
  },
];
function CreateBuilding() {
  const [current, setCurrent] = useState(0);
  const [commision, setCommision] = useState('');
  const [previewOpen, setPreviewOpen] = useState(false);
 const [previewImage, setPreviewImage] = useState('');
 const [previewTitle, setPreviewTitle] = useState('');
 const [secondaryType, setSecondaryType] = useState(false);
 const [marketAs, setMarketAs] = useState(false);
 const [fileList, setFileList] = useState([

 ]);

 const handleCancel = () => setPreviewOpen(false);

 const handlePreview = async (file) => {
   if (!file.url && !file.preview) {
     file.preview = await getBase64(file.originFileObj);
   }

   setPreviewImage(file.url || file.preview);
   setPreviewOpen(true);
   setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
 };

 const handleChangeUpload = ({ fileList: newFileList }) => setFileList(newFileList);
  const [procurement, setProcurement] = useState('');
  const [price, setPrice] = useState('');
  const [grm, setGrm] = useState('');
  const [saleCondition, setSaleCondition] = useState(false);
  const [capRate, setCapRate] = useState('');
  const [noi, setNoi] = useState('');
  const [expiration, setExpiration] = useState('');
  const [dateOpen, setDateOpen] = useState(false);
 const [form] = Form.useForm();
 const [buildingStatus, setBuildingStatus] = useState(false);
 const onFinish = (values) => {
  console.log('Received values of form: ', values);
};
const onChange = (date, dateString) => {
  console.log(date, dateString);
  setExpiration(date)
  setDateOpen(false)
};
const [fields, setFields] = useState([
  {
    name: ['saleType'],
    value: 'Investment',
  },
  {
    name: ['propertyType'],
    value: 'Office',
  },
]);
const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',

  onChange(info) {
    const { status } = info.file;

    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }

    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },

  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};
   const next = () => {
     setCurrent(current + 1);
   };

   const prev = () => {
     setCurrent(current - 1);
   };

   const ContentTabs = (tab) => {
     switch (tab) {
  case "Listing":
    return <>
<div className="columns">
    <div className="column">
    <Form.Item className="right-extra" name="name" extra="Will not be published." label="Commission">
       <Input value={commision} onChange={setCommision} prefix="%" />
     </Form.Item>
  </div>
    <div className="column">
     <Form.Item className="right-extra" name="procurement" extra="Will not be published." label="Procurement Fee">
        <Input value={procurement} onChange={setProcurement} prefix="%" />
      </Form.Item>
  </div>
<div className="column">
      <Form.Item className="right-extra"  extra="Will not be published." label="Listing Expiration">
            <DatePicker value={expiration} onClick={()=>{
              setDateOpen(!dateOpen)
            }} autoFocus={true}  open={dateOpen} onChange={onChange} />
       </Form.Item>
      </div>
  </div>
    </>;
    case "Sale":
      return <>
  <div className="columns margin-bottom-0">
      <div className="column">
      <Form.Item className="right-extra"  name="saleType"  label="Sale Type">
         <Input  disabled />
       </Form.Item>
    </div>
      <div className="column">
       <Form.Item className="right-extra"  label="Price">
          <Input value={price} onChange={(e)=>{
              if(!isNaN(parseInt(e.target.value)) || e.target.value == ''){setPrice(e.target.value)};
          }} prefix="$" />
        </Form.Item>
    </div>
  <div className="column is-flex">
        <Form.Item className="right-extra"  label="GRM">
        <Input value={grm} onChange={(e)=>{
            if(!isNaN(parseInt(e.target.value)) || e.target.value == ''){setGrm(e.target.value)};
        }} placeholder="0.00" />
         </Form.Item>
         <Form.Item className="right-extra"  label="Cap Rate">
         <Input value={capRate} onChange={(e)=>{
             if(!isNaN(parseInt(e.target.value)) || e.target.value == ''){setCapRate(e.target.value)}
         }} prefix="%"      suffix={
        <Tooltip title="Cap Rate is the income rate of return for a total property that reflects the relationship between one year's net operating income expectancy and the total price or value. It is calculated by dividing the net operating income by the sale price or value.">
          <InfoCircleOutlined
            style={{
              color: '#8758ff',
            }}
          />
        </Tooltip>
      } />
          </Form.Item>
        </div>
        <div className="column">
        <Form.Item className="right-extra"  label="NOI">
        <Input value={noi} onChange={(e)=>{
            if(!isNaN(parseInt(e.target.value)) || e.target.value == ''){setNoi(e.target.value)};
        }} prefix="$"      suffix={
       <Tooltip title="Net Operating Income (NOI) is the actual or anticipated rental income remaining after all operating expenses are deducted from effective gross income, but before debt service and capital expenditures are deducted.">
         <InfoCircleOutlined
           style={{
             color: '#8758ff',
           }}
         />
       </Tooltip>
     } />
         </Form.Item>
              </div>
    </div>
<div className="columns margin-bottom-0 margin-top-0">
<div className="column">
<Form.Item className="right-extra"   label="Sale Conditions">
<Select
  mode="multiple"
  allowClear
  style={{
    width: '100%',
  }}
  open={saleCondition}
  onClick={(e) =>{ if('ant-select-item-option-content' !==e.target.className){ setSaleCondition(!saleCondition);}console.log(e.target.className)}}
  placeholder="Please select"

  showArrow={true}
  defaultValue={['Sale Leaseback','Build to Suit']}
>
{['Sale Leaseback','Build to Suit','Building in Shell Condition','1031 Exchange','Ground Lease (Leased Fee)','Bulk/Portfolio Sale','Deferred Maintenance','Distress Sale','Groud Kease (Leasehold)','High Vacancy Property','Lease Option','Redevelopment Project','REO Sale','Short Sale'].map((_,i)=><Option key={i}>{_}</Option>)}
</Select>
 </Form.Item>
</div>
</div>
<div className="columns margin-top-0">
<div className="column">
<Form.Item className="right-extra"  name="SaleNotes" label="Sale Notes">
<TextArea
  showCount
  maxLength={7000}
  style={{
    height: 120,
    minHeight:120
  }}
  childrenStyle={{
      minHeight:120
  }}
  placeholder="e.g. Prime investment opportunity. This triple-net leased retail showroom..."
/>
 </Form.Item>
</div>
</div>

      </>;
    case "Documents":
        return <>
        <Dragger {...props}>
    <p className="ant-upload-drag-icon">
      <FileDoneOutlined />
    </p>
    <p className="ant-upload-text">Brochures & Other Documents</p>
    <p className="ant-upload-hint">
      Click or drag file to this area to upload.
    </p>
  </Dragger>
        </>
        case "Photos":
            return <>
            <Form.Item className="removebg"  label="Property Photos, Floor Plans, & Videos">
            <Upload
           action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
           listType="picture-card"
           fileList={fileList}
           onPreview={handlePreview}
           onChange={handleChangeUpload}
         >
           {fileList.length >= 8 ? null : uploadButton}
         </Upload>
   </Form.Item>
         <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>

           <img
             alt="example"
             style={{
               width: '100%',
             }}
             src={previewImage}
           />
         </Modal>

            </>
            case "Property":
                return <>
                <div className="columns margin-bottom-0">
                    <div className="column">
                    <Form.Item className="right-extra"  name="propertyType"  label="Property Type">
                       <Input  disabled />
                     </Form.Item>
                  </div>
                    <div className="column">
                     <Form.Item className="right-extra" name="secondaryType" label="Secondary Type">
                     <Select

open={secondaryType}
onClick={()=>{setSecondaryType(!secondaryType)}}
>
{["Industrial Live/Work Unit",'Loft/Creative Space','Medical','Office/Residential','Telecom Hotel/Data Hosting'].map((_, i)=>  <Option key={i} value={_}>{_}</Option>)}
</Select>
                      </Form.Item>
                  </div>
                  </div>
                  <div className="columns margin-bottom-0 margin-top-0">
                      <div className="column">
                       <Form.Item className="right-extra" name="margetAs" label="Also Market As (Select Up to 3 Property Types)">
                       <Select
                         mode="multiple"
                         allowClear
                         style={{
                           width: '100%',
                         }}
                         open={marketAs}
                         onClick={(e) =>{ if('ant-select-item-option-content' !==e.target.className){ setMarketAs(!marketAs);}console.log(e.target.className)}}
                         placeholder="Please select"

                         showArrow={true}
                         defaultValue={[]}
                       >
                       {['Office - Loft/Creative Spance','Office - Medical','Office - Office Live/Work Unit','Office - Office/Residential','Office - Telecom Hotel/Data Hosting','Industrial - Distribution','Industrial - Food Processing','Industrial - Manufacturing','Industrial - Refrigeration/Cold Storage','Industrial - Service','Industrial - Showroom','Industrial - Telecom Hotel/Data Hosting','Industrial - Truck Terminal','Industrial - Warehouse','Retail - Auto Dealership','Retail -Auto Repair','Retail - Bank','Retail - Bar/Nightclub','Retail - Bowling Alley','Retail - Convenience Store','Retail - Day Care Center','Retail - Department Store','Retail - Drug Store','Retail - Fast Food','Retail - Freestanding','Retail - Funeral Home','Retail - Garden Center','Retail - Health Club','Retail - Movie Theatre','Retail - Restaurant','Retail - Service Station','Retail - Storefront','Retail - Storefront Retail/Office','Retail - Storefront Retail/Residential','Retail - Supermarket','Retail - Truck Stop','Retail - Veterinarian/Kennel','Flex - Light Distribution','Flex - Light Manufacturing','Flex - R&D','Flex - Showroom','Flex - Telecom Hotel/Data Hosting'].map((_,i)=><Option key={i}>{_}</Option>)}
                       </Select>
                        </Form.Item>
                    </div>
                    </div>
                    <div className="columns margin-bottom-0 margin-top-0">
                        <div className="column">
                         <Form.Item         rules={[
          {
            required: true,
            message: 'Please select building status!',
          },
        ]} className="right-extra" name="buildingStatus" label="Building Status">
                         <Select

                           style={{
                             width: '100%',
                           }}

                         >
                         {['Existing','Under Renovation'].map((_,i)=><Option key={i}>{_}</Option>)}
                         </Select>
                          </Form.Item>
                      </div>

                          <div className="column">
                          <Form.Item  rules={[
           {
             required: true,
             message: 'Please input RBA!',
           },
         ]}  className="right-extra"  name="RBA" label="RBA">
                          <Input     suffix={
                         <Tooltip title="Rentable Building Area (RBA) includes the usable area and its associated share of the common areas. Typically rents are based on this area. It is the space the tenant will occupy in addition to the associated common areas of the building such as the lobby, hallways, bathrooms, equipment rooms, etc.">
                           <InfoCircleOutlined
                             style={{
                               color: '#8758ff',
                             }}
                           />
                         </Tooltip>
                       } />
                           </Form.Item>

                        </div>
                        <div className="column">
                        <Form.Item  rules={[
         {
           required: true,
           message: 'Please input floors!',
         },
       ]}  className="right-extra"  name="Floors" label="Floors">
                        <Input  />
                         </Form.Item>

                      </div>
                      <div className="column">
                      <Form.Item  rules={[
       {
         required: true,
         message: 'Please input typical floor square foot mesure!',
       },
     ]}  className="right-extra"  name="TypicalFloor" label="Typical Floor">
                      <Input suffix="SF" />
                       </Form.Item>

                    </div>
                      </div>
                      <div className="columns margin-bottom-0 margin-top-0">
                          <div className="column">
                          <Form.Item  rules={[
           {
             required: true,
             message: 'Please input year built!',
           },
         ]}  className="right-extra"  name="YearBuilt" label="Year built">
                          <Input />
                           </Form.Item>
                          </div>
                          <div className="column">
                          <Form.Item className="removebg2"  name="Tenancy" label="Tenancy">
                    <Segmented options={['Multi', 'Single']} />
                           </Form.Item>
                          </div>



                            <div className="column">
                            <Form.Item className="removebg2"  name="Class" label="Class">
                      <Segmented options={['A', 'B','C']} />
                             </Form.Item>
                            </div>
                            <div className="column">
                            <Form.Item  name="Construction" label="Construction">
                            <Select

                              style={{
                                width: '100%',
                              }}

                            >
                            {['Masonry','Metal','Reinforced Concrete','Steel','Wood Frame'].map((_,i)=><Option key={i}>{_}</Option>)}
                            </Select>
                             </Form.Item>
                            </div>

                              </div>
                              <div className="columns margin-bottom-0 margin-top-0">
                                  <div className="column">
                                    <Form.Item  name="Sprinklers" label="Sprinklers">
                              <Select
                  suffixIcon={ <Tooltip title="This indicates whether the building has a sprinkler system and if so, what type: Wetsystems have pipes that are fully charged with water. Drysystems indicate that water is not in the pipes; a shut-off valve with a pump regulator controls the water pressure. If a fire starts and at a certain temperature, the solder melts away and releases water into the pipes. ESFR (Early Suppression Fast Response)systems will concentrate releasing water only where it senses a fire.">
                     <InfoCircleOutlined
                       style={{
                         color: '#8758ff',
                       }}
                     />
                   </Tooltip>}
                                style={{
                                  width: '100%',
                                }}

                              >
                              {['Masonry','Metal','Reinforced Concrete','Steel','Wood Frame'].map((_,i)=><Option key={i}>{_}</Option>)}
                              </Select>
                              </div>

                                </div>
                </>
  default:
    return <></>;
}
   }
   const selectAfter = (
     <Select defaultValue=".com" className="select-after">
       <Option value=".com">.com</Option>
       <Option value=".jp">.jp</Option>
       <Option value=".cn">.cn</Option>
       <Option value=".org">.org</Option>
     </Select>
   );
  return (
    <div className="step-container">
    <Form
  {...formItemLayout}
  form={form}
  fields={fields}
  layout="vertical"
  name="buliding"
  onFinish={onFinish}
  scrollToFirstError
>
    <Tabs
         defaultActiveKey="1"
         tabPosition={'top'}
         style={{
           maxWidth:'100%'
         }}
         onTabClick={(e)=>{
           setCurrent(e)
         }}
         activeKey={current}
         items={steps.map((_, i) => {
           return {
             label: `${_.title}`,
             key: i,
             children: ContentTabs(_.title),
           };
         })}
       />
       </Form>
      <div className="steps-action">
      {current > 0 && (
        <Button
          style={{
            margin: '0 8px 0 0',
          }}
          onClick={() => prev()}
        >
          Previous
        </Button>
      )}
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
      </div>
    </div>
  );
}

export default CreateBuilding;
