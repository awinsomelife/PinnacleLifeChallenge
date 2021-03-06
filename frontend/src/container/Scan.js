import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import {processBarcode, startScanning} from '../actions/index'
import Spinner from '../components/LoadingBox'
import Scanner from '../components/Scanner'
import Product from '../components/Product'
import './Scan.css'


class Scan extends Component {

  constructor(props){
    super(props);
    this._onBarcodeDetect = this._onBarcodeDetect.bind(this)
  }

  _onBarcodeDetect(barcode){
    this.props.process(barcode)
  }
 
  render() {
    
    let componentRendered = 
      <Fragment>
        <div className='divMargin'>
          <button 
            type="button" 
            onClick={this.props.startScanning}
            className="btn btn-primary btn-md btn-block btn-scan">{'Start Scanning'}</button>
        </div>
      </Fragment>

    if(this.props.invalid){
      componentRendered =
      <Fragment>
        <div className='divMargin'>
          <div className='invalid'>
            <h1>Invalid Barcode!</h1>
          </div>
          <button 
            type="button" 
            onClick={this.props.startScanning}
            className="btn btn-primary btn-md btn-block btn-scan">
              {'Try Again'}</button>
        </div>
      </Fragment>
    } else if(this.props.noApi){
      componentRendered =
      <Fragment>
        <div className='divMargin'>
          <div className='invalid'>
            <h1>You need an API key to run this App.</h1>
          </div>
          <button 
            type="button" 
            onClick={this.props.startScanning}
            className="btn btn-primary btn-md btn-block btn-scan">
              {'Try Again'}</button>
        </div>
      </Fragment>
    }


    if(this.props.scan){
      componentRendered = <div className="scannerCam">
          <Scanner onBarcodeDetect={this._onBarcodeDetect} 
          noCamera={()=>console.log('there was no camera')} />
      </div>
    }
    if(this.props.spinner){
      componentRendered = <Spinner />
    }
    if(this.props.productScanned != null){
      if(this.props.scan) {
        componentRendered = <div className="scannerCam">
            <Scanner 
              onBarcodeDetect={this._onBarcodeDetect} 
              />
          </div>
      } else {
        componentRendered = <Product 
                              item={this.props.productScanned}
                              click={this.props.startScanning}/>
      }
    }


    return (
      <Fragment>
        <div className="scannerContainer"> 
          {componentRendered}
        </div>
      </Fragment>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    productScanned: state.scanned.productScanned,
    spinner: state.scanned.spinner,
    scan: state.scanned.startScanning,
    invalid: state.scanned.invalidBarcode,
    noApi: state.scanned.noApi
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    process: (barcode) => { dispatch(processBarcode(barcode)) },
    startScanning: () => {dispatch(startScanning())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scan)
