import React, { useState, useEffect, useCallback } from "react";
import logo from './logo.svg';
import 'antd/dist/antd.dark.less';
import './assets/css/bulma.min.css';
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import CreateBuilding from "./components/createBuilding";
import './App.css';
import { Button, message, Steps,Tabs, Form,
  Input,  Col, Row,DatePicker,Tooltip, Card,Select,Upload,Modal,Segmented,Space,Radio} from 'antd';

function App() {
  const [building, setBuilding] = useState(false);
  const closeBuilding = () => {
    setBuilding(false)
  }
  return (
    <section className="hero bg-color is-fullheight">
    <div class="area" >
                <ul class="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                </ul>
        </div >
    <div className="hero-head">
      <header className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item">
              <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo"/>
            </a>
          </div>
          <div id="navbarMenuHeroC" className="navbar-menu">
            <div className="navbar-end">
              <a className="navbar-item is-active">
                Home
              </a>
              <div class="dropdown is-hoverable">
  <div class="dropdown-trigger navbar-item">
    <span class="" aria-haspopup="true" aria-controls="dropdown-menu4">
      <span>Create</span>
      <span class="icon is-small">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </span>
  </div>
  <div class="dropdown-menu" id="dropdown-menu4" role="menu">
    <div class="dropdown-content">
      <div class="dropdown-item" onClick={()=>{setBuilding(true)}}>
      <a className="navbar-item">
        Building
      </a>
      </div>
      <div class="dropdown-item">
      <a className="navbar-item">
        Condo
      </a>
      </div>
      <div class="dropdown-item">
      <a className="navbar-item">
        Land
      </a>
      </div>
      <div class="dropdown-item">
      <a className="navbar-item">
        Portfolio
      </a>
      </div>
      <div class="dropdown-item">
      <a className="navbar-item">
        Business
      </a>
      </div>
    </div>
  </div>
</div>
              <a className="navbar-item">
                Create
              </a>
              <a className="navbar-item">
                My NFT
              </a>
              <a className="navbar-item">
                Contact us
              </a>
              <span className="navbar-item">
                <button class="button is-success">Connect Wallet</button>
              </span>
            </div>
          </div>
        </div>
      </header>
    </div>

    <div className="hero-body">
      <div className="container has-text-centered">

    <div className="columns">
    <div className="column">
    <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
    </figure>
  </div>
  <div class="card-content">

    <div class="content info">
    <Form.Item className="extra-marginBottom-0" style={{paddingBottom:'1em',marginBottom:'0 !important'}}>

<span style={{display:'flex',flexDirection:'row',alignItems: 'center',minWidth:'100%',marginRight:'1em'}}>
<label style={{marginRight:'0.5em'}}>ID:</label>
<Input value={'AAAAAAAAAAAAAAAAAA'} disabled placeholder="AAAAAAAAAAAAAAAAAA"/>
</span>

    </Form.Item>
    <Form.Item className="extra-marginBottom-0" style={{paddingBottom:'1em',marginBottom:'0 !important'}}>

<span style={{display:'flex',flexDirection:'row',alignItems: 'center',minWidth:'100%',marginRight:'1em'}}>
<label style={{marginRight:'0.5em'}}>Name:</label>
<Input value={'AAAAAAAAAAAAAAAAAA'} disabled placeholder="AAAAAAAAAAAAAAAAAA"/>
</span>

    </Form.Item>
    <Form.Item className="extra-marginBottom-0" style={{paddingBottom:'1em',marginBottom:'0 !important'}}>

<span style={{display:'flex',flexDirection:'row',alignItems: 'center',minWidth:'100%',marginRight:'1em'}}>
<label style={{marginRight:'0.5em'}}>Owner:</label>
<Input value={'AAAAAAAAAAAAAAAAAA'} disabled placeholder="AAAAAAAAAAAAAAAAAA"/>
</span>

    </Form.Item>
    <Form.Item className="extra-marginBottom-0" style={{paddingBottom:'1em',marginBottom:'0 !important'}}>

<span style={{display:'flex',flexDirection:'row',alignItems: 'center',minWidth:'100%',marginRight:'1em'}}>
<label style={{marginRight:'0.5em'}}>Type:</label>
<Input value={'AAAAAAAAAAAAAAAAAA'} disabled placeholder="AAAAAAAAAAAAAAAAAA"/>
</span>

    </Form.Item>
    <Form.Item className="extra-marginBottom-0" style={{paddingBottom:'1em',marginBottom:'0 !important'}}>

<span style={{display:'flex',flexDirection:'row',alignItems: 'center',minWidth:'100%',marginRight:'1em'}}>
<label style={{marginRight:'0.5em'}}>Price:</label>
<Input prefix={'$'} value={'4.56M'} disabled placeholder="AAAAAAAAAAAAAAAAAA"/>
</span>

    </Form.Item>
    <span style={{display:'flex',flexDirection:'row',alignItems: 'center',minWidth:'100%',marginRight:'1em'}}>
    <Button style={{marginRight:'1em',backgroundColor:'#131111'}} type="dashed" onClick={() => {}} block icon={<>< />}>
    Details
    </Button>
    <Button style={{marginRight:'1em',backgroundColor:'#131111'}} type="dashed" onClick={() => {}} block icon={<>< />}>
    Purchase
    </Button>
    </span>



             </div>
             </div>
             </div>
             </div>
             <div className="column">
             <div class="card">
           <div class="card-image">
             <figure class="image is-4by3">
               <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
             </figure>
           </div>
           <div class="card-content">

             <div class="content info">
             <Form.Item className="extra-marginBottom-0" style={{paddingBottom:'1em',marginBottom:'0 !important'}}>

         <span style={{display:'flex',flexDirection:'row',alignItems: 'center',minWidth:'100%',marginRight:'1em'}}>
         <label style={{marginRight:'0.5em'}}>ID:</label>
         <Input value={'AAAAAAAAAAAAAAAAAA'} disabled placeholder="AAAAAAAAAAAAAAAAAA"/>
         </span>

             </Form.Item>
             <Form.Item className="extra-marginBottom-0" style={{paddingBottom:'1em',marginBottom:'0 !important'}}>

         <span style={{display:'flex',flexDirection:'row',alignItems: 'center',minWidth:'100%',marginRight:'1em'}}>
         <label style={{marginRight:'0.5em'}}>Name:</label>
         <Input value={'AAAAAAAAAAAAAAAAAA'} disabled placeholder="AAAAAAAAAAAAAAAAAA"/>
         </span>

             </Form.Item>
             <Form.Item className="extra-marginBottom-0" style={{paddingBottom:'1em',marginBottom:'0 !important'}}>

         <span style={{display:'flex',flexDirection:'row',alignItems: 'center',minWidth:'100%',marginRight:'1em'}}>
         <label style={{marginRight:'0.5em'}}>Owner:</label>
         <Input value={'AAAAAAAAAAAAAAAAAA'} disabled placeholder="AAAAAAAAAAAAAAAAAA"/>
         </span>

             </Form.Item>
             <Form.Item className="extra-marginBottom-0" style={{paddingBottom:'1em',marginBottom:'0 !important'}}>

         <span style={{display:'flex',flexDirection:'row',alignItems: 'center',minWidth:'100%',marginRight:'1em'}}>
         <label style={{marginRight:'0.5em'}}>Type:</label>
         <Input value={'AAAAAAAAAAAAAAAAAA'} disabled placeholder="AAAAAAAAAAAAAAAAAA"/>
         </span>

             </Form.Item>
             <Form.Item className="extra-marginBottom-0" style={{paddingBottom:'1em',marginBottom:'0 !important'}}>

         <span style={{display:'flex',flexDirection:'row',alignItems: 'center',minWidth:'100%',marginRight:'1em'}}>
         <label style={{marginRight:'0.5em'}}>Price:</label>
         <Input prefix={'$'} value={'4.56M'} disabled placeholder="AAAAAAAAAAAAAAAAAA"/>
         </span>

             </Form.Item>
             <span style={{display:'flex',flexDirection:'row',alignItems: 'center',minWidth:'100%',marginRight:'1em'}}>
             <Button style={{marginRight:'1em',backgroundColor:'#131111'}} type="dashed" onClick={() => {}} block icon={<>< />}>
             Details
             </Button>
             <Button style={{marginRight:'1em',backgroundColor:'#131111'}} type="dashed" onClick={() => {}} block icon={<>< />}>
             Purchase
             </Button>
             </span>



                      </div>
                      </div>
                      </div>
                      </div>
    <div className="column">
    <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
    </figure>
  </div>
  <div class="card-content">

    <div class="content info">
    <Form.Item className="extra-marginBottom-0" style={{paddingBottom:'1em',marginBottom:'0 !important'}}>

<span style={{display:'flex',flexDirection:'row',alignItems: 'center',minWidth:'100%',marginRight:'1em'}}>
<label style={{marginRight:'0.5em'}}>ID:</label>
<Input value={'AAAAAAAAAAAAAAAAAA'} disabled placeholder="AAAAAAAAAAAAAAAAAA"/>
</span>

    </Form.Item>
    <Form.Item className="extra-marginBottom-0" style={{paddingBottom:'1em',marginBottom:'0 !important'}}>

<span style={{display:'flex',flexDirection:'row',alignItems: 'center',minWidth:'100%',marginRight:'1em'}}>
<label style={{marginRight:'0.5em'}}>Name:</label>
<Input value={'AAAAAAAAAAAAAAAAAA'} disabled placeholder="AAAAAAAAAAAAAAAAAA"/>
</span>

    </Form.Item>
    <Form.Item className="extra-marginBottom-0" style={{paddingBottom:'1em',marginBottom:'0 !important'}}>

<span style={{display:'flex',flexDirection:'row',alignItems: 'center',minWidth:'100%',marginRight:'1em'}}>
<label style={{marginRight:'0.5em'}}>Owner:</label>
<Input value={'AAAAAAAAAAAAAAAAAA'} disabled placeholder="AAAAAAAAAAAAAAAAAA"/>
</span>

    </Form.Item>
    <Form.Item className="extra-marginBottom-0" style={{paddingBottom:'1em',marginBottom:'0 !important'}}>

<span style={{display:'flex',flexDirection:'row',alignItems: 'center',minWidth:'100%',marginRight:'1em'}}>
<label style={{marginRight:'0.5em'}}>Type:</label>
<Input value={'AAAAAAAAAAAAAAAAAA'} disabled placeholder="AAAAAAAAAAAAAAAAAA"/>
</span>

    </Form.Item>
    <Form.Item className="extra-marginBottom-0" style={{paddingBottom:'1em',marginBottom:'0 !important'}}>

<span style={{display:'flex',flexDirection:'row',alignItems: 'center',minWidth:'100%',marginRight:'1em'}}>
<label style={{marginRight:'0.5em'}}>Price:</label>
<Input prefix={'$'} value={'4.56M'} disabled placeholder="AAAAAAAAAAAAAAAAAA"/>
</span>

    </Form.Item>
    <span style={{display:'flex',flexDirection:'row',alignItems: 'center',minWidth:'100%',marginRight:'1em'}}>
    <Button style={{marginRight:'1em',backgroundColor:'#131111'}} type="dashed" onClick={() => {}} block icon={<>< />}>
    Details
    </Button>
    <Button style={{marginRight:'1em',backgroundColor:'#131111'}} type="dashed" onClick={() => {}} block icon={<>< />}>
    Purchase
    </Button>
    </span>



             </div>
             </div>
             </div>
             </div>
    <div className="column">
    <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
    </figure>
  </div>
  <div class="card-content">

    <div class="content info">
    <Form.Item className="extra-marginBottom-0" style={{paddingBottom:'1em',marginBottom:'0 !important'}}>

<span style={{display:'flex',flexDirection:'row',alignItems: 'center',minWidth:'100%',marginRight:'1em'}}>
<label style={{marginRight:'0.5em'}}>ID:</label>
<Input value={'AAAAAAAAAAAAAAAAAA'} disabled placeholder="AAAAAAAAAAAAAAAAAA"/>
</span>

    </Form.Item>
    <Form.Item className="extra-marginBottom-0" style={{paddingBottom:'1em',marginBottom:'0 !important'}}>

<span style={{display:'flex',flexDirection:'row',alignItems: 'center',minWidth:'100%',marginRight:'1em'}}>
<label style={{marginRight:'0.5em'}}>Name:</label>
<Input value={'AAAAAAAAAAAAAAAAAA'} disabled placeholder="AAAAAAAAAAAAAAAAAA"/>
</span>

    </Form.Item>
    <Form.Item className="extra-marginBottom-0" style={{paddingBottom:'1em',marginBottom:'0 !important'}}>

<span style={{display:'flex',flexDirection:'row',alignItems: 'center',minWidth:'100%',marginRight:'1em'}}>
<label style={{marginRight:'0.5em'}}>Owner:</label>
<Input value={'AAAAAAAAAAAAAAAAAA'} disabled placeholder="AAAAAAAAAAAAAAAAAA"/>
</span>

    </Form.Item>
    <Form.Item className="extra-marginBottom-0" style={{paddingBottom:'1em',marginBottom:'0 !important'}}>

<span style={{display:'flex',flexDirection:'row',alignItems: 'center',minWidth:'100%',marginRight:'1em'}}>
<label style={{marginRight:'0.5em'}}>Type:</label>
<Input value={'AAAAAAAAAAAAAAAAAA'} disabled placeholder="AAAAAAAAAAAAAAAAAA"/>
</span>

    </Form.Item>
    <Form.Item className="extra-marginBottom-0" style={{paddingBottom:'1em',marginBottom:'0 !important'}}>

<span style={{display:'flex',flexDirection:'row',alignItems: 'center',minWidth:'100%',marginRight:'1em'}}>
<label style={{marginRight:'0.5em'}}>Price:</label>
<Input prefix={'$'} value={'4.56M'} disabled placeholder="AAAAAAAAAAAAAAAAAA"/>
</span>

    </Form.Item>
    <span style={{display:'flex',flexDirection:'row',alignItems: 'center',minWidth:'100%',marginRight:'1em'}}>
    <Button style={{marginRight:'1em',backgroundColor:'#131111'}} type="dashed" onClick={() => {}} block icon={<>< />}>
    Details
    </Button>
    <Button style={{marginRight:'1em',backgroundColor:'#131111'}} type="dashed" onClick={() => {}} block icon={<>< />}>
    Purchase
    </Button>
    </span>



             </div>
             </div>
             </div>
             </div>
             </div>
             </div>
             </div>

             <div className="hero-foot">

             </div>
             <Rodal
             className="custom-modal"
             visible={building}
             animation="flip"
             closeOnEsc={true}
             closeMaskOnClick={true}
             onClose={closeBuilding}
             >
             <div className="modal-header">Create Building NFT listing</div>
             <div className="modal-body">
             <CreateBuilding/>
             </div>
             </Rodal>
                <label class="label">Type:</label>

  </section>
  );
}

export default App;
