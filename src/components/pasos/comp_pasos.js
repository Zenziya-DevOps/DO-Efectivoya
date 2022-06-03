import React , {Component} from 'react'
import {label_} from '../../styles/leters'
import {Container,Row, Col} from 'react-bootstrap'
import {device} from '../../model/device'
import * as constant from '../../constants'
const assets = process.env.REACT_APP_ASSETS

export class COMP_Pasos extends Component {

    render(){
        return(
            <>
            <div
            style={{
                backgroundImage     : `url(${assets}/bk_2.svg)`,
                backgroundSize: 'contain , cover', 
                backgroundPosition: 'bottom',
                backgroundRepeat: 'no-repeat',
                }}
             >
                <Container fluid className="pt-3 pb-3" >
                    <Row>
                        
                        <Col xs={device.device.type === "desktop" ? 12 : 0 } className="pt-3 pb-1 text-center">
                            <label className="font-weight-bold" style={label_(0,0,'30px',null,'136.7%')} >Tu préstamo en 3 pasos:</label>
                            <p className="font-weight-normal" style={label_(0,0,'17px')} >Una vez aprobado sigue los pasos en el chat y listo! </p>
                        </Col>

                        <Col xs={12} className="pt-5 pb-2" >
                            <Row className="pb-5" >
                        {
                            constant.pasosCredito.map(x=> 
                                {
                                    return(
                                            <Col xs={device.device.type === "desktop" ? 0 : 12 } className="pt-2 pb-2 text-center">
                                                <Col xs={12} >
                                                    <img src={`${assets}${x.Source}`} className="img img-fluid" style={{height:'45px'}}  />
                                                </Col>
                                                <Col xs={12} className="pt-2">
                                                    <p className="font-weight-bold" style={label_(1,0,'18px')} >{x.Header}</p>
                                                    <p className="font-weight-normal" style={label_(1,0,'16px')} >
                                                        <label className="col-10">
                                                            {x.Contenido}
                                                        </label>
                                                    </p>
                                                </Col>
                                            </Col>
                                    )
                                })
                        }
                            </Row>
                        </Col>

                    </Row>
                    
                    <Row id="youtubeVideo" className="pt-3">
                        <Col xs={12} className="mb-4 text-center d-none d-md-block">
                            <iframe src="https://www.youtube.com/embed/ys3fqp4n92A" width="640" height="360" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                        </Col>
                        <Col xs={12} className="mb-4 text-center d-block d-md-none">
                            <iframe src="https://www.youtube.com/embed/ys3fqp4n92A" width="328px" height="185px" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                        </Col>
                    </Row>
                </Container>
            </div>
                
            </>
        )
    }
}