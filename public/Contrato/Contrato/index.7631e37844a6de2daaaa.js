(self["webpackChunkv7"] = self["webpackChunkv7"] || []).push([["index"],{

/***/ 1851:
/*!**************************************************!*\
  !*** ./src/components/contrato/comp_contrato.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COMP_contrato": () => (/* binding */ COMP_contrato)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 7294);
/* harmony import */ var _services_process__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/process */ 6488);
/* harmony import */ var _model_documents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/documents */ 8192);
/* harmony import */ var _model_Key__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/Key */ 6961);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap */ 682);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap */ 3279);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-bootstrap */ 4051);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-bootstrap */ 1555);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-bootstrap */ 6968);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-bootstrap */ 2090);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-bootstrap */ 1911);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-bootstrap */ 5005);
/* harmony import */ var _styles_leters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/leters */ 1100);
/* harmony import */ var _styles_bottom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/bottom */ 8025);
/* harmony import */ var pdf_viewer_reactjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! pdf-viewer-reactjs */ 2894);
/* harmony import */ var pdf_viewer_reactjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(pdf_viewer_reactjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_canvas_draw__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-canvas-draw */ 4291);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ 3935);
/* harmony import */ var _json_proxy_config_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../json/proxy.config.json */ 109);
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../styles/styles.css */ 4441);












class COMP_contrato extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      Doc: [],
      init: true,
      message: 'Cargando..',
      PagareB64: null,
      ContratoB64: null,
      realizoFirma: false
    };
  }

  componentDidMount() {
    _model_documents__WEBPACK_IMPORTED_MODULE_2__.Documents_.KeyOrigen = _model_Key__WEBPACK_IMPORTED_MODULE_3__.Key.KeyOrigen;
    (0,_services_process__WEBPACK_IMPORTED_MODULE_1__.Process)(_model_documents__WEBPACK_IMPORTED_MODULE_2__.Documents_, 'Firma/Zenziya/ConsultaContrato').then(x => {
      this.setState({
        Doc: x
      });
      react_dom__WEBPACK_IMPORTED_MODULE_8__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((pdf_viewer_reactjs__WEBPACK_IMPORTED_MODULE_6___default()), {
        document: {
          base64: x[0]['PagareB64']
        }
      }), document.getElementById("Pagare"));
      react_dom__WEBPACK_IMPORTED_MODULE_8__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((pdf_viewer_reactjs__WEBPACK_IMPORTED_MODULE_6___default()), {
        document: {
          base64: x[0]['ContratoB64']
        }
      }), document.getElementById("Contrato"));
      this.setState({
        init: false
      });
    });
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__.default, {
      show: this.state.init,
      centered: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__.default.Body, {
      style: (0,_styles_leters__WEBPACK_IMPORTED_MODULE_4__.label_)(2, 0),
      className: "p-5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__.default, {
      animation: "grow",
      className: "p-3"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "pl-2"
    }, " ", this.state.message, " "))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__.default, {
      className: "hide-on-landscape"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__.default, {
      xs: 12,
      className: "pt-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      style: (0,_styles_leters__WEBPACK_IMPORTED_MODULE_4__.label_)(2, 0, '2em')
    }, "Documentos"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__.default, {
      className: "pt-2 pb-5",
      defaultActiveKey: "2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__.default.Toggle, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_17__.default.Header,
      eventKey: "2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      style: (0,_styles_leters__WEBPACK_IMPORTED_MODULE_4__.label_)(0, 0, '1em')
    }, "1. Firma en el recuadro. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "2. Presiona \"Confirmar Firma\"")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__.default.Collapse, {
      eventKey: "2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__.default.Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__.default, {
      xs: 12
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_18__.default, {
      style: (0,_styles_bottom__WEBPACK_IMPORTED_MODULE_5__.Btn_)(2),
      className: "float-right p-2 btn-block",
      onClick: this.sendsignature = async e => {
        e.preventDefault();

        if (!this.state.realizoFirma) {
          alert("Para continuar, debes ingresar tu firma en el recuadro blanco que está debajo del botón.");
        } else {
          this.saveableCanvas.getSaveData();
          _model_documents__WEBPACK_IMPORTED_MODULE_2__.Documents_.FirmaB64 = this.saveableCanvas.canvasContainer.children[1].toDataURL().split(',')[1];
          await (0,_services_process__WEBPACK_IMPORTED_MODULE_1__.Process)(_model_documents__WEBPACK_IMPORTED_MODULE_2__.Documents_, 'Firma/Zenziya/EnvioFirma');
          react_dom__WEBPACK_IMPORTED_MODULE_8__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__.default, {
            show: true
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__.default.Body, {
            className: "bg-dark"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__.default, {
            className: "p-3 text-center"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__.default, {
            xs: 12,
            className: "p-5"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
            src: `${_json_proxy_config_json__WEBPACK_IMPORTED_MODULE_9__.PRD.assets}ico.svg`
          })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__.default, {
            xs: 12
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
            style: (0,_styles_leters__WEBPACK_IMPORTED_MODULE_4__.label_)(3, 0, '1em')
          }, "Gracias hemos recibido los datos sastifactoriamente!!"))))), document.getElementById("success"));
        }
      }
    }, "Confirmar Firma")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__.default, {
      xs: 12
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__.default, {
      xs: 12,
      className: "shadow p-3 mb-5 bg-white rounded w-100"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_canvas_draw__WEBPACK_IMPORTED_MODULE_7__.default, {
      onChange: () => {
        this.setState({
          realizoFirma: true
        });
      },
      hideGrid: true,
      canvasWidth: '100%',
      canvasHeight: 300,
      brushRadius: 0.5,
      loadTimeOffset: 5,
      lazyRadius: 0,
      ref: canvasDraw => this.saveableCanvas = canvasDraw
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__.default, {
      xs: 12,
      className: "text-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      id: "success"
    })))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__.default.Toggle, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_17__.default.Header,
      eventKey: "0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      style: (0,_styles_leters__WEBPACK_IMPORTED_MODULE_4__.label_)(0, 0, '1em')
    }, "Pagar\xE9")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__.default.Collapse, {
      eventKey: "0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__.default.Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      id: "Pagare"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__.default.Toggle, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_17__.default.Header,
      eventKey: "1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      style: (0,_styles_leters__WEBPACK_IMPORTED_MODULE_4__.label_)(0, 0, '1em')
    }, "Contrato")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__.default.Collapse, {
      eventKey: "1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__.default.Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      id: "Contrato"
    })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__.default, null)));
  }

}

/***/ }),

/***/ 1685:
/*!**********************************************!*\
  !*** ./src/components/footer/comp_footer.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COMP_Footer": () => (/* binding */ COMP_Footer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 7294);
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/colors */ 6031);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ 682);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ 4051);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ 1555);
/* harmony import */ var _json_proxy_config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../json/proxy.config.json */ 109);
/* harmony import */ var _styles_leters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/leters */ 1100);
/* harmony import */ var _model_device__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/device */ 8904);






class COMP_Footer extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        backgroundColor: _styles_colors__WEBPACK_IMPORTED_MODULE_1__.colors[8]
      },
      className: "pt-5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      fluid: true,
      className: "pt-5 pb-5"
    }, _model_device__WEBPACK_IMPORTED_MODULE_4__.device.device.type === "desktop" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
      className: "pt-5 pb-5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
      xs: 0,
      className: "text-center my-auto"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: "/."
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: `${_json_proxy_config_json__WEBPACK_IMPORTED_MODULE_2__.PRD.assets}efectivoya__.svg`,
      className: "img img-fluid"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
      xs: 0
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
      xs: 12
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: `${_json_proxy_config_json__WEBPACK_IMPORTED_MODULE_2__.PRD.land}#Requisito`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      style: (0,_styles_leters__WEBPACK_IMPORTED_MODULE_3__.label_)(0, 0, '16px'),
      className: "font-weight-bold"
    }, "Ayuda"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
      xs: 12
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: `${_json_proxy_config_json__WEBPACK_IMPORTED_MODULE_2__.PRD.land}#Ayuda`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      style: (0,_styles_leters__WEBPACK_IMPORTED_MODULE_3__.label_)(0, 0, '10px')
    }, "Preguntas frecuentes"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
      xs: 12
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: `${_json_proxy_config_json__WEBPACK_IMPORTED_MODULE_2__.PRD.land}#Cuota`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      style: (0,_styles_leters__WEBPACK_IMPORTED_MODULE_3__.label_)(0, 0, '10px')
    }, "\xBFC\xF3mo pago mi cuota?"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
      xs: 12
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: `${_json_proxy_config_json__WEBPACK_IMPORTED_MODULE_2__.PRD.land}#Requisito`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      style: (0,_styles_leters__WEBPACK_IMPORTED_MODULE_3__.label_)(0, 0, '10px')
    }, "Requisitos")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
      xs: 0
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
      xs: 12
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      style: (0,_styles_leters__WEBPACK_IMPORTED_MODULE_3__.label_)(0, 0, '16px'),
      className: "font-weight-bold"
    }, "Empresa")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
      xs: 12
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: `${_json_proxy_config_json__WEBPACK_IMPORTED_MODULE_2__.PRD.land}#Quienes`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      style: (0,_styles_leters__WEBPACK_IMPORTED_MODULE_3__.label_)(0, 0, '10px')
    }, "Qui\xE9nes somos")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
      xs: _model_device__WEBPACK_IMPORTED_MODULE_4__.device.device.type === "desktop" ? 0 : 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
      xs: 12
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: "#"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      style: (0,_styles_leters__WEBPACK_IMPORTED_MODULE_3__.label_)(0, 0, '16px'),
      className: "font-weight-bold"
    }, "Contacto"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
      xs: 12
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: "mailto:info@efectivoya.do"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      style: (0,_styles_leters__WEBPACK_IMPORTED_MODULE_3__.label_)(0, 0, '10px')
    }, "info@efectivoya.do"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", {
      className: "pt-3"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
      className: "text-center mt-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
      xs: 4
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      style: (0,_styles_leters__WEBPACK_IMPORTED_MODULE_3__.label_)(1, 0, '14px')
    }, "\xA9\uFE0F C.E.D. S.R.L / Todos los derechos reservados")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
      xs: 2
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: `${_json_proxy_config_json__WEBPACK_IMPORTED_MODULE_2__.PRD.land}Privacidad`
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("u", {
      style: (0,_styles_leters__WEBPACK_IMPORTED_MODULE_3__.label_)(0, 0, '12px')
    }, "Privacidad"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
      xs: 2
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: `${_json_proxy_config_json__WEBPACK_IMPORTED_MODULE_2__.PRD.land}Consentimiento`
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("u", {
      style: (0,_styles_leters__WEBPACK_IMPORTED_MODULE_3__.label_)(0, 0, '12px')
    }, "Consentimiento Informado"), " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
      xs: 2
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: `${_json_proxy_config_json__WEBPACK_IMPORTED_MODULE_2__.PRD.land}TYC`
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("u", {
      style: (0,_styles_leters__WEBPACK_IMPORTED_MODULE_3__.label_)(0, 0, '12px')
    }, "T\xE9rminos y condiciones"), " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
      xs: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      className: "p-2",
      href: "https://www.facebook.com/Efectivo-Ya-RD-118939926624833"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: `${_json_proxy_config_json__WEBPACK_IMPORTED_MODULE_2__.PRD.assets}facebook.svg`,
      className: "img img-fluid",
      style: {
        width: '1.5em'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      className: "p-2",
      href: "https://www.instagram.com/efectivoya_rd/"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: `${_json_proxy_config_json__WEBPACK_IMPORTED_MODULE_2__.PRD.assets}instagram.svg`,
      className: "img img-fluid",
      style: {
        width: '1.5em'
      }
    }))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
      xs: 12,
      className: "p-5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: "/."
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: `${_json_proxy_config_json__WEBPACK_IMPORTED_MODULE_2__.PRD.assets}efectivoya_.svg`,
      className: "img img-fluid"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
      xs: 12,
      className: "pl-5 pb-3 pt-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
      xs: 12
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      style: (0,_styles_leters__WEBPACK_IMPORTED_MODULE_3__.label_)(0, 0, '16px'),
      className: "font-weight-bold"
    }, "Empresa")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
      xs: 12
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: `${_json_proxy_config_json__WEBPACK_IMPORTED_MODULE_2__.PRD.land}#Quienes`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      style: (0,_styles_leters__WEBPACK_IMPORTED_MODULE_3__.label_)(0, 0, '10px')
    }, "Qui\xE9nes somos"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
      xs: 12,
      className: "pl-5 pb-3 pt-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
      xs: 12
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      style: (0,_styles_leters__WEBPACK_IMPORTED_MODULE_3__.label_)(0, 0, '16px'),
      className: "font-weight-bold"
    }, "Ayuda")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
      xs: 12
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: `${_json_proxy_config_json__WEBPACK_IMPORTED_MODULE_2__.PRD.land}#Ayuda`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      style: (0,_styles_leters__WEBPACK_IMPORTED_MODULE_3__.label_)(0, 0, '10px')
    }, "Preguntas frecuentes"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
      xs: 12
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: `${_json_proxy_config_json__WEBPACK_IMPORTED_MODULE_2__.PRD.land}#Cuota`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      style: (0,_styles_leters__WEBPACK_IMPORTED_MODULE_3__.label_)(0, 0, '10px')
    }, "\xBFC\xF3mo pago mi cuota?"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
      xs: 12
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: `${_json_proxy_config_json__WEBPACK_IMPORTED_MODULE_2__.PRD.land}#Requisito`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      style: (0,_styles_leters__WEBPACK_IMPORTED_MODULE_3__.label_)(0, 0, '10px')
    }, "Requisitos"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
      xs: 12,
      className: "pl-5 pb-3 pt-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
      xs: 12
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      style: (0,_styles_leters__WEBPACK_IMPORTED_MODULE_3__.label_)(0, 0, '16px'),
      className: "font-weight-bold"
    }, "Contacto")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
      xs: 12
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: "mailto:info@efectivoya.do"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      style: (0,_styles_leters__WEBPACK_IMPORTED_MODULE_3__.label_)(0, 0, '10px')
    }, "info@efectivoya.do"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
      xs: 12,
      className: "pt-5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
      xs: 12,
      className: "pl-4 pt-5 pb-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      className: "p-4",
      href: "https://www.facebook.com/Efectivo-Ya-RD-118939926624833"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: `${_json_proxy_config_json__WEBPACK_IMPORTED_MODULE_2__.PRD.assets}facebook.svg`,
      className: "img img-fluid",
      style: {
        width: '30px'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      className: "p-4",
      href: "https://www.instagram.com/efectivoya_rd/"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: `${_json_proxy_config_json__WEBPACK_IMPORTED_MODULE_2__.PRD.assets}instagram.svg`,
      className: "img img-fluid",
      style: {
        width: '30px'
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
      xs: 12,
      className: "pl-5 pt-4"
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: `${_json_proxy_config_json__WEBPACK_IMPORTED_MODULE_2__.PRD.land}Privacidad`
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("u", {
      style: (0,_styles_leters__WEBPACK_IMPORTED_MODULE_3__.label_)(0, 0, '12px')
    }, "Privacidad"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
      xs: 12,
      className: "pl-5 pt-2"
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: `${_json_proxy_config_json__WEBPACK_IMPORTED_MODULE_2__.PRD.land}TYC`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("u", {
      style: (0,_styles_leters__WEBPACK_IMPORTED_MODULE_3__.label_)(0, 0, '12px')
    }, "T\xE9rminos y condiciones"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
      xs: 12,
      className: "pl-5 pt-2"
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: `${_json_proxy_config_json__WEBPACK_IMPORTED_MODULE_2__.PRD.land}Privacidad`
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("u", {
      style: (0,_styles_leters__WEBPACK_IMPORTED_MODULE_3__.label_)(0, 0, '12px')
    }, "Consentimiento Informado"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
      xs: 12,
      className: "pl-5 pt-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      style: (0,_styles_leters__WEBPACK_IMPORTED_MODULE_3__.label_)(1, 0, '12px')
    }, "\xA9\uFE0F C.E.D. S.R.L / Todos los derechos reservados")))))));
  }

}

/***/ }),

/***/ 8257:
/*!*********************************************!*\
  !*** ./src/components/header/Nav/Burger.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 7294);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ 1893);
/* harmony import */ var _RigthNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RigthNav */ 9967);
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/colors */ 6031);




const StyledBurger = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div`
  width: 2rem;
  height: 2rem;
  position: relative;
  right: 20px;
  top : 0.2rem;
  z-index: 20;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 1.5rem;
    height: 0.25rem;
    background-color: ${({
  open
}) => open ? _styles_colors__WEBPACK_IMPORTED_MODULE_2__.colors[3] : _styles_colors__WEBPACK_IMPORTED_MODULE_2__.colors[3]};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({
  open
}) => open ? 'rotate(51deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({
  open
}) => open ? 'rotate(-51deg)' : 'rotate(0)'};

    }
  }
`;

const Burger = () => {
  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledBurger, {
    open: open,
    onClick: () => setOpen(!open)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_RigthNav__WEBPACK_IMPORTED_MODULE_1__.default, {
    open: open
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Burger);

/***/ }),

/***/ 9967:
/*!***********************************************!*\
  !*** ./src/components/header/Nav/RigthNav.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 7294);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ 1893);
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/colors */ 6031);
/* harmony import */ var _styles_leters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/leters */ 1100);
/* harmony import */ var _json_proxy_config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../json/proxy.config.json */ 109);





const Ul = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.ul`
  display: inline-block;
	width:30px;
	height: 20px;
	position: relative;
	z-index: 2;

  list-style: none;
  display: relative;
  flex-flow: row nowrap;
  
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: ${_styles_colors__WEBPACK_IMPORTED_MODULE_1__.colors[0]} ;
    position: fixed;
    transform: ${({
  open
}) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({
  open
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Ul, {
    open: open
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    style: (0,_styles_leters__WEBPACK_IMPORTED_MODULE_2__.label_)(3, 0),
    href: `${_json_proxy_config_json__WEBPACK_IMPORTED_MODULE_3__.PRD.land}#Ayuda`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: `${_json_proxy_config_json__WEBPACK_IMPORTED_MODULE_3__.PRD.assets}pf.svg`,
    className: "img img-fluid pr-3"
  }), "Preguntas frecuentes")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    style: (0,_styles_leters__WEBPACK_IMPORTED_MODULE_2__.label_)(3, 0),
    href: `${_json_proxy_config_json__WEBPACK_IMPORTED_MODULE_3__.PRD.land}#Cuota`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: `${_json_proxy_config_json__WEBPACK_IMPORTED_MODULE_3__.PRD.assets}cc.svg`,
    className: "img img-fluid pr-3"
  }), "Pagar cuota")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    style: (0,_styles_leters__WEBPACK_IMPORTED_MODULE_2__.label_)(3, 0),
    href: `${_json_proxy_config_json__WEBPACK_IMPORTED_MODULE_3__.PRD.land}#Quienes`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: `${_json_proxy_config_json__WEBPACK_IMPORTED_MODULE_3__.PRD.assets}cp.svg`,
    className: "img img-fluid pr-3"
  }), "\xBFQuienes somos?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    style: (0,_styles_leters__WEBPACK_IMPORTED_MODULE_2__.label_)(3, 0),
    href: `${_json_proxy_config_json__WEBPACK_IMPORTED_MODULE_3__.PRD.land}#Requisito`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: `${_json_proxy_config_json__WEBPACK_IMPORTED_MODULE_3__.PRD.assets}rq.svg`,
    className: "img img-fluid pr-3"
  }), "Requisitos")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RightNav);

/***/ }),

/***/ 9618:
/*!**********************************************!*\
  !*** ./src/components/header/comp_header.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COMP_Header": () => (/* binding */ COMP_Header)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 7294);
/* harmony import */ var _services_process__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/process */ 6488);
/* harmony import */ var _model_Key__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/Key */ 6961);
/* harmony import */ var _json_proxy_config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../json/proxy.config.json */ 109);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ 682);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ 4051);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ 1555);
/* harmony import */ var _styles_leters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/leters */ 1100);
/* harmony import */ var _model_device__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/device */ 8904);
/* harmony import */ var _Nav_Burger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Nav/Burger */ 8257);
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../styles/styles.css */ 4441);









class COMP_Header extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      h: [],
      c: [],
      st: true
    };
  }

  async componentDidMount() {
    this.setState({
      h: await (0,_services_process__WEBPACK_IMPORTED_MODULE_1__.Process)(_model_Key__WEBPACK_IMPORTED_MODULE_2__.Key, 'Header/Consulta')
    });
    this.setState({
      c: await (0,_services_process__WEBPACK_IMPORTED_MODULE_1__.Process)(_model_Key__WEBPACK_IMPORTED_MODULE_2__.Key, 'Carrusel/Consulta')
    });
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "header",
      style: {
        backgroundImage: `url(${_json_proxy_config_json__WEBPACK_IMPORTED_MODULE_3__.PRD.assets}/bk_0.svg)`,
        backgroundSize: 'cover ',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.default, {
      fluid: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.default, {
      className: "my-auto shadow p-3 mb-4 rounded my-auto"
    }, _model_device__WEBPACK_IMPORTED_MODULE_5__.device.device.type === "desktop" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: "/."
    }, this.state.h.map(x => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
        src: `${_json_proxy_config_json__WEBPACK_IMPORTED_MODULE_3__.PRD.assets}${x.Contenido}`,
        style: {
          width: 'calc(25% - 1em)'
        }
      });
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.default, {
      className: "ml-auto"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.default, {
      className: "justify-content-end"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.default, {
      xs: 3
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: `${_json_proxy_config_json__WEBPACK_IMPORTED_MODULE_3__.PRD.land}#Cuota`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      style: (0,_styles_leters__WEBPACK_IMPORTED_MODULE_4__.label_)(3, 0)
    }, "Pagar cuota"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.default, {
      xs: 3
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: `${_json_proxy_config_json__WEBPACK_IMPORTED_MODULE_3__.PRD.land}#Requisito`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      style: (0,_styles_leters__WEBPACK_IMPORTED_MODULE_4__.label_)(3, 0)
    }, "Requisitos"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.default, {
      xs: 3
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: `${_json_proxy_config_json__WEBPACK_IMPORTED_MODULE_3__.PRD.land}#Ayuda`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      style: (0,_styles_leters__WEBPACK_IMPORTED_MODULE_4__.label_)(3, 0)
    }, "Ayuda")))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.default, {
      className: "p-2"
    }, this.state.h.map(x => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
        src: `${_json_proxy_config_json__WEBPACK_IMPORTED_MODULE_3__.PRD.assets}${x.Contenido}`,
        style: {
          width: '195px'
        }
      });
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.default, {
      xs: 1,
      className: "ml-auto my-auto"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Nav_Burger__WEBPACK_IMPORTED_MODULE_6__.default, null)))))));
  }

}

/***/ }),

/***/ 5579:
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 7294);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ 3935);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ 4039);
/* harmony import */ var _layout_Contratos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/Contratos */ 5502);




react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_layout_Contratos__WEBPACK_IMPORTED_MODULE_3__.Vw_Contratos, null)), document.getElementById("z"));

/***/ }),

/***/ 5502:
/*!*********************************!*\
  !*** ./src/layout/Contratos.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Vw_Contratos": () => (/* binding */ Vw_Contratos)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 7294);
/* harmony import */ var _components_header_comp_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header/comp_header */ 9618);
/* harmony import */ var _components_contrato_comp_contrato__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/contrato/comp_contrato */ 1851);
/* harmony import */ var _components_footer_comp_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/footer/comp_footer */ 1685);




class Vw_Contratos extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_header_comp_header__WEBPACK_IMPORTED_MODULE_1__.COMP_Header, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_contrato_comp_contrato__WEBPACK_IMPORTED_MODULE_2__.COMP_contrato, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_footer_comp_footer__WEBPACK_IMPORTED_MODULE_3__.COMP_Footer, null));
  }

}

/***/ }),

/***/ 6961:
/*!**************************!*\
  !*** ./src/model/Key.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Key": () => (/* binding */ Key)
/* harmony export */ });
const Key = {
  KeyOrigen: "DO000001000001000001000001000001",
  Estado: 1
};

/***/ }),

/***/ 4637:
/*!*****************************!*\
  !*** ./src/model/client.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "client": () => (/* binding */ client)
/* harmony export */ });
const client = {
  Name: null,
  DocumentNumber: null,
  Valid: false,
  KeyOrigen: null
};

/***/ }),

/***/ 8904:
/*!*****************************!*\
  !*** ./src/model/device.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "device": () => (/* binding */ device),
/* harmony export */   "device_m": () => (/* binding */ device_m)
/* harmony export */ });
/* harmony import */ var device_detector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! device-detector-js */ 3494);
/* harmony import */ var device_detector_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(device_detector_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Key__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Key */ 6961);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client */ 4637);



const deviceDetector = new (device_detector_js__WEBPACK_IMPORTED_MODULE_0___default())();
const userAgent = window.navigator.userAgent;
const device = deviceDetector.parse(userAgent);
const device_m = {
  KeyOrigen: _Key__WEBPACK_IMPORTED_MODULE_1__.Key.KeyOrigen,
  mp_Identification: null,
  client_engine: device.client.engine,
  client_engineVersion: device.client.engineVersion,
  client_name: device.client.name,
  client_type: device.client.type,
  client_version: device.client.version,
  device_brand: device.device.brand,
  device_model: device.device.model,
  device_type: device.device.type,
  os_name: device.os.name,
  os_platform: device.os.platform,
  os_version: device.os.version
};

/***/ }),

/***/ 8192:
/*!********************************!*\
  !*** ./src/model/documents.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Documents_": () => (/* binding */ Documents_)
/* harmony export */ });
const Documents_ = {
  KeyOrigen: null,
  Id: new URLSearchParams(window.location.search).get("D") || new URLSearchParams(window.location.search).get("d"),
  FirmaB64: null
};

/***/ }),

/***/ 6488:
/*!*********************************!*\
  !*** ./src/services/process.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Process": () => (/* binding */ Process),
/* harmony export */   "Data": () => (/* binding */ Data)
/* harmony export */ });
/* harmony import */ var _json_proxy_config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../json/proxy.config.json */ 109);


const axios = __webpack_require__(/*! axios */ 9669);

const Process = async (B, M) => {
  const resp = await axios({
    method: 'post',
    port: _json_proxy_config_json__WEBPACK_IMPORTED_MODULE_0__.PRD.port,
    url: `${_json_proxy_config_json__WEBPACK_IMPORTED_MODULE_0__.PRD.BaseUri}${_json_proxy_config_json__WEBPACK_IMPORTED_MODULE_0__.PRD.Prefix}`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': _json_proxy_config_json__WEBPACK_IMPORTED_MODULE_0__.PRD.Autorization,
      'amb': _json_proxy_config_json__WEBPACK_IMPORTED_MODULE_0__.PRD.Amb,
      'method': M
    },
    data: JSON.stringify(B)
  });
  return resp.data;
  await axios({
    method: 'post',
    port: _json_proxy_config_json__WEBPACK_IMPORTED_MODULE_0__.PRD.port,
    url: `${_json_proxy_config_json__WEBPACK_IMPORTED_MODULE_0__.PRD.BaseUri}${_json_proxy_config_json__WEBPACK_IMPORTED_MODULE_0__.PRD.Prefix}`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': _json_proxy_config_json__WEBPACK_IMPORTED_MODULE_0__.PRD.Autorization,
      'amb': _json_proxy_config_json__WEBPACK_IMPORTED_MODULE_0__.PRD.Amb,
      'method': 'Auditoria'
    },
    data: JSON.stringify({
      Metodo: M,
      Request: `${_json_proxy_config_json__WEBPACK_IMPORTED_MODULE_0__.PRD.BaseUri}${_json_proxy_config_json__WEBPACK_IMPORTED_MODULE_0__.PRD.Prefix}`,
      KeyOrigen: Key.KeyOrigen,
      Parametros: JSON.stringify(B),
      Respuesta: JSON.stringify(resp.data),
      Code_Status: resp.status
    })
  });
};
const Data = async B => {
  const resp = await axios({
    method: 'post',
    url: `${_json_proxy_config_json__WEBPACK_IMPORTED_MODULE_0__.Dat.BaseUri}${_json_proxy_config_json__WEBPACK_IMPORTED_MODULE_0__.Dat.Prefix}`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': _json_proxy_config_json__WEBPACK_IMPORTED_MODULE_0__.Dat.Autorization,
      'amb': _json_proxy_config_json__WEBPACK_IMPORTED_MODULE_0__.Dat.Amb
    },
    data: JSON.stringify(B)
  });
  return resp.data;
};

/***/ }),

/***/ 8025:
/*!******************************!*\
  !*** ./src/styles/bottom.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Btn_": () => (/* binding */ Btn_)
/* harmony export */ });
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors */ 6031);

const Btn_ = (Arrcolor, ArrBcolor, ArrFcolor, Wd) => {
  return {
    backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__.colors[Arrcolor],
    borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__.colors[ArrBcolor],
    color: _colors__WEBPACK_IMPORTED_MODULE_0__.colors[ArrFcolor],
    width: Wd,
    margin: 'auto',
    padding: '0.8em'
  };
};

/***/ }),

/***/ 6031:
/*!******************************!*\
  !*** ./src/styles/colors.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "colors": () => (/* binding */ colors)
/* harmony export */ });
const colors = ['#000064', '#C4C4C4', '#6C63FF', '#FFFFFF', '#455A64', '#EB1B1B', '#8FD83A', 'red', '#F5F5F5', '#83969E', '#0ad3fc'];

/***/ }),

/***/ 1100:
/*!******************************!*\
  !*** ./src/styles/leters.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FontFamily": () => (/* binding */ FontFamily),
/* harmony export */   "label_": () => (/* binding */ label_)
/* harmony export */ });
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors */ 6031);

const FontFamily = ["Poppins"];
const label_ = (Arrcolor, ArrFont, FontSize, FontAling) => {
  return {
    color: _colors__WEBPACK_IMPORTED_MODULE_0__.colors[Arrcolor],
    fontSize: FontSize,
    textAlign: FontAling,
    fontFamily: FontFamily[ArrFont]
  };
};

/***/ }),

/***/ 8772:
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ 4015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@media only screen and (orientation: landscape) {\r\n    .header, .hide-on-landscape {\r\n        display: none;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AAAA;IACI;QACI,aAAa;IACjB;AACJ","sourcesContent":["@media only screen and (orientation: landscape) {\r\n    .header, .hide-on-landscape {\r\n        display: none;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 4441:
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ 8772);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ 109:
/*!************************************!*\
  !*** ./src/json/proxy.config.json ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"PRD":{"port":"3001","Autorization":"6gwxuxQk/hjbv8gipjU5bTw18rP2OkzCaiQyLwD7HJQ=","BaseUri":"https://backend-master-page.azurewebsites.net/","Prefix":"api","Version":"1.0","Amb":"PRD","assets":"https://efectivoya.do/assets/","land":"http://efectivoya.do/"}}');

/***/ }),

/***/ 3414:
/*!************************!*\
  !*** canvas (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 172:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 2001:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 3779:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 6558:
/*!*********************!*\
  !*** url (ignored) ***!
  \*********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 2258:
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors","shared"], () => (__webpack_exec__(5579)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92Ny8uL3NyYy9jb21wb25lbnRzL2NvbnRyYXRvL2NvbXBfY29udHJhdG8uanMiLCJ3ZWJwYWNrOi8vdjcvLi9zcmMvY29tcG9uZW50cy9mb290ZXIvY29tcF9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vdjcvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvTmF2L0J1cmdlci5qcyIsIndlYnBhY2s6Ly92Ny8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9OYXYvUmlndGhOYXYuanMiLCJ3ZWJwYWNrOi8vdjcvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvY29tcF9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdjcvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdjcvLi9zcmMvbGF5b3V0L0NvbnRyYXRvcy5qcyIsIndlYnBhY2s6Ly92Ny8uL3NyYy9tb2RlbC9LZXkuanMiLCJ3ZWJwYWNrOi8vdjcvLi9zcmMvbW9kZWwvY2xpZW50LmpzIiwid2VicGFjazovL3Y3Ly4vc3JjL21vZGVsL2RldmljZS5qcyIsIndlYnBhY2s6Ly92Ny8uL3NyYy9tb2RlbC9kb2N1bWVudHMuanMiLCJ3ZWJwYWNrOi8vdjcvLi9zcmMvc2VydmljZXMvcHJvY2Vzcy5qcyIsIndlYnBhY2s6Ly92Ny8uL3NyYy9zdHlsZXMvYm90dG9tLmpzIiwid2VicGFjazovL3Y3Ly4vc3JjL3N0eWxlcy9jb2xvcnMuanMiLCJ3ZWJwYWNrOi8vdjcvLi9zcmMvc3R5bGVzL2xldGVycy5qcyIsIndlYnBhY2s6Ly92Ny8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly92Ny8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcz9lNDViIiwid2VicGFjazovL3Y3L2lnbm9yZWR8QzpcXGdpdC1henVyZVxcTGFuZGluZyUyME1hc3RlciUyMFBhZ2VcXENvbnRyYXRvXFxub2RlX21vZHVsZXNcXHBkZmpzLWRpc3RcXGJ1aWxkfGNhbnZhcyIsIndlYnBhY2s6Ly92Ny9pZ25vcmVkfEM6XFxnaXQtYXp1cmVcXExhbmRpbmclMjBNYXN0ZXIlMjBQYWdlXFxDb250cmF0b1xcbm9kZV9tb2R1bGVzXFxwZGZqcy1kaXN0XFxidWlsZHxmcyIsIndlYnBhY2s6Ly92Ny9pZ25vcmVkfEM6XFxnaXQtYXp1cmVcXExhbmRpbmclMjBNYXN0ZXIlMjBQYWdlXFxDb250cmF0b1xcbm9kZV9tb2R1bGVzXFxwZGZqcy1kaXN0XFxidWlsZHxodHRwIiwid2VicGFjazovL3Y3L2lnbm9yZWR8QzpcXGdpdC1henVyZVxcTGFuZGluZyUyME1hc3RlciUyMFBhZ2VcXENvbnRyYXRvXFxub2RlX21vZHVsZXNcXHBkZmpzLWRpc3RcXGJ1aWxkfGh0dHBzIiwid2VicGFjazovL3Y3L2lnbm9yZWR8QzpcXGdpdC1henVyZVxcTGFuZGluZyUyME1hc3RlciUyMFBhZ2VcXENvbnRyYXRvXFxub2RlX21vZHVsZXNcXHBkZmpzLWRpc3RcXGJ1aWxkfHVybCIsIndlYnBhY2s6Ly92Ny9pZ25vcmVkfEM6XFxnaXQtYXp1cmVcXExhbmRpbmclMjBNYXN0ZXIlMjBQYWdlXFxDb250cmF0b1xcbm9kZV9tb2R1bGVzXFxwZGZqcy1kaXN0XFxidWlsZHx6bGliIl0sIm5hbWVzIjpbIkNPTVBfY29udHJhdG8iLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJEb2MiLCJpbml0IiwibWVzc2FnZSIsIlBhZ2FyZUI2NCIsIkNvbnRyYXRvQjY0IiwicmVhbGl6b0Zpcm1hIiwiY29tcG9uZW50RGlkTW91bnQiLCJEb2N1bWVudHNfIiwiS2V5IiwiUHJvY2VzcyIsInRoZW4iLCJ4Iiwic2V0U3RhdGUiLCJSZWFjdERPTSIsImJhc2U2NCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiLCJsYWJlbF8iLCJDYXJkIiwiQnRuXyIsInNlbmRzaWduYXR1cmUiLCJlIiwicHJldmVudERlZmF1bHQiLCJhbGVydCIsInNhdmVhYmxlQ2FudmFzIiwiZ2V0U2F2ZURhdGEiLCJjYW52YXNDb250YWluZXIiLCJjaGlsZHJlbiIsInRvRGF0YVVSTCIsInNwbGl0IiwiUFJEIiwiY2FudmFzRHJhdyIsIkNPTVBfRm9vdGVyIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3JzIiwiZGV2aWNlIiwid2lkdGgiLCJTdHlsZWRCdXJnZXIiLCJzdHlsZWQiLCJvcGVuIiwiQnVyZ2VyIiwic2V0T3BlbiIsInVzZVN0YXRlIiwiVWwiLCJSaWdodE5hdiIsIkNPTVBfSGVhZGVyIiwiaCIsImMiLCJzdCIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZFJlcGVhdCIsIm1hcCIsIkNvbnRlbmlkbyIsIlJlYWN0RG9tIiwiVndfQ29udHJhdG9zIiwiS2V5T3JpZ2VuIiwiRXN0YWRvIiwiY2xpZW50IiwiTmFtZSIsIkRvY3VtZW50TnVtYmVyIiwiVmFsaWQiLCJkZXZpY2VEZXRlY3RvciIsIkRldmljZURldGVjdG9yIiwidXNlckFnZW50Iiwid2luZG93IiwibmF2aWdhdG9yIiwicGFyc2UiLCJkZXZpY2VfbSIsIm1wX0lkZW50aWZpY2F0aW9uIiwiY2xpZW50X2VuZ2luZSIsImVuZ2luZSIsImNsaWVudF9lbmdpbmVWZXJzaW9uIiwiZW5naW5lVmVyc2lvbiIsImNsaWVudF9uYW1lIiwibmFtZSIsImNsaWVudF90eXBlIiwidHlwZSIsImNsaWVudF92ZXJzaW9uIiwidmVyc2lvbiIsImRldmljZV9icmFuZCIsImJyYW5kIiwiZGV2aWNlX21vZGVsIiwibW9kZWwiLCJkZXZpY2VfdHlwZSIsIm9zX25hbWUiLCJvcyIsIm9zX3BsYXRmb3JtIiwicGxhdGZvcm0iLCJvc192ZXJzaW9uIiwiSWQiLCJVUkxTZWFyY2hQYXJhbXMiLCJsb2NhdGlvbiIsInNlYXJjaCIsImdldCIsIkZpcm1hQjY0IiwiYXhpb3MiLCJyZXF1aXJlIiwiQiIsIk0iLCJyZXNwIiwibWV0aG9kIiwicG9ydCIsInVybCIsImhlYWRlcnMiLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsIk1ldG9kbyIsIlJlcXVlc3QiLCJQYXJhbWV0cm9zIiwiUmVzcHVlc3RhIiwiQ29kZV9TdGF0dXMiLCJzdGF0dXMiLCJEYXRhIiwiRGF0IiwiQW1iIiwiQXJyY29sb3IiLCJBcnJCY29sb3IiLCJBcnJGY29sb3IiLCJXZCIsImJvcmRlckNvbG9yIiwiY29sb3IiLCJtYXJnaW4iLCJwYWRkaW5nIiwiRm9udEZhbWlseSIsIkFyckZvbnQiLCJGb250U2l6ZSIsIkZvbnRBbGluZyIsImZvbnRTaXplIiwidGV4dEFsaWduIiwiZm9udEZhbWlseSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR08sTUFBTUEsYUFBTixTQUE0QkMsNENBQTVCLENBQXNDO0FBRXpDQyxhQUFXLENBQUNDLEtBQUQsRUFBTztBQUNkLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQVk7QUFDUkMsU0FBRyxFQUFlLEVBRFY7QUFFUkMsVUFBSSxFQUFjLElBRlY7QUFHUkMsYUFBTyxFQUFXLFlBSFY7QUFJUkMsZUFBUyxFQUFTLElBSlY7QUFLUkMsaUJBQVcsRUFBTyxJQUxWO0FBTVJDLGtCQUFZLEVBQU07QUFOVixLQUFaO0FBUUg7O0FBRURDLG1CQUFpQixHQUFFO0FBRVhDLHNFQUFBLEdBQXVCQyxxREFBdkI7QUFFQUMsOERBQU8sQ0FBRUYsd0RBQUYsRUFBZSxnQ0FBZixDQUFQLENBQXdERyxJQUF4RCxDQUNJQyxDQUFDLElBQUc7QUFDQSxXQUFLQyxRQUFMLENBQWM7QUFBRVosV0FBRyxFQUFHVztBQUFSLE9BQWQ7QUFDQUUsbURBQUEsZUFBaUIsaURBQUMsMkRBQUQ7QUFBVyxnQkFBUSxFQUFFO0FBQUVDLGdCQUFNLEVBQUVILENBQUMsQ0FBQyxDQUFELENBQUQsQ0FBSyxXQUFMO0FBQVY7QUFBckIsUUFBakIsRUFBMEVJLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixRQUF4QixDQUExRTtBQUNB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QUFVLEVBQUdOLFVBQVUsQ0FBQ0MsT0FBRDtBQUpyQixHQUFOO0FBTUgsQ0FQTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTFA7QUFDeUg7QUFDN0I7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLDJGQUEyRixxQ0FBcUMsMEJBQTBCLFNBQVMsS0FBSyxPQUFPLHdGQUF3RixLQUFLLFVBQVUsTUFBTSwwRUFBMEUscUNBQXFDLDBCQUEwQixTQUFTLEtBQUssbUJBQW1CO0FBQ3RjO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQcUQ7QUFDNUYsWUFBMkY7O0FBRTNGOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSwwR0FBRyxDQUFDLG9GQUFPOzs7O0FBSXhCLGlFQUFlLDJGQUFjLE1BQU0sRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWm5DLGU7Ozs7Ozs7Ozs7QUNBQSxlOzs7Ozs7Ozs7O0FDQUEsZTs7Ozs7Ozs7OztBQ0FBLGU7Ozs7Ozs7Ozs7QUNBQSxlOzs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiIuL0NvbnRyYXRvL2luZGV4Ljc2MzFlMzc4NDRhNmRlMmRhYWFhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0ICwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgUHJvY2VzcyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3Byb2Nlc3MnXHJcbmltcG9ydCB7RG9jdW1lbnRzX30gZnJvbSAnLi4vLi4vbW9kZWwvZG9jdW1lbnRzJ1xyXG5pbXBvcnQge0tleX0gZnJvbSAnLi4vLi4vbW9kZWwvS2V5J1xyXG5pbXBvcnQge1JvdyxDb2wsQWNjb3JkaW9uLENhcmQsQ29udGFpbmVyLCBCdXR0b24sIE1vZGFsICwgU3Bpbm5lciB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuaW1wb3J0IHtsYWJlbF99IGZyb20gJy4uLy4uL3N0eWxlcy9sZXRlcnMnXHJcbmltcG9ydCB7QnRuX30gZnJvbSAnLi4vLi4vc3R5bGVzL2JvdHRvbSdcclxuaW1wb3J0IFBERlZpZXdlciAgZnJvbSAncGRmLXZpZXdlci1yZWFjdGpzJ1xyXG5pbXBvcnQgQ2FudmFEcmF3IGZyb20gJ3JlYWN0LWNhbnZhcy1kcmF3J1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xyXG5pbXBvcnQge1BSRH0gZnJvbSAnLi4vLi4vanNvbi9wcm94eS5jb25maWcuanNvbidcclxuaW1wb3J0ICcuLi8uLi9zdHlsZXMvc3R5bGVzLmNzcydcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ09NUF9jb250cmF0byBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPXtcclxuICAgICAgICAgICAgRG9jICAgICAgICAgICAgIDogW10gLFxyXG4gICAgICAgICAgICBpbml0ICAgICAgICAgICAgOiB0cnVlLFxyXG4gICAgICAgICAgICBtZXNzYWdlICAgICAgICAgOiAnQ2FyZ2FuZG8uLicsXHJcbiAgICAgICAgICAgIFBhZ2FyZUI2NCAgICAgICA6IG51bGwsXHJcbiAgICAgICAgICAgIENvbnRyYXRvQjY0ICAgICA6IG51bGwsXHJcbiAgICAgICAgICAgIHJlYWxpem9GaXJtYSAgICA6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcblxyXG4gICAgICAgICAgICBEb2N1bWVudHNfLktleU9yaWdlbiA9IEtleS5LZXlPcmlnZW47XHJcblxyXG4gICAgICAgICAgICBQcm9jZXNzKCBEb2N1bWVudHNfICwgJ0Zpcm1hL1plbnppeWEvQ29uc3VsdGFDb250cmF0bycpLnRoZW4oXHJcbiAgICAgICAgICAgICAgICB4PT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBEb2MgOiB4IH0pXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3RET00ucmVuZGVyKCA8UERGVmlld2VyIGRvY3VtZW50PXt7IGJhc2U2NDogeFswXVsnUGFnYXJlQjY0J10gIH19Lz4gLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlBhZ2FyZVwiKSApXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3RET00ucmVuZGVyKCA8UERGVmlld2VyIGRvY3VtZW50PXt7IGJhc2U2NDogeFswXVsnQ29udHJhdG9CNjQnXSAgfX0vPiAsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiQ29udHJhdG9cIikgKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2luaXQ6ZmFsc2V9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgICAgICA8TW9kYWwgc2hvdz17dGhpcy5zdGF0ZS5pbml0fSBjZW50ZXJlZCA+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsLkJvZHkgc3R5bGU9e2xhYmVsXygyLDApfSBjbGFzc05hbWU9XCJwLTVcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGlubmVyIGFuaW1hdGlvbj1cImdyb3dcIiBjbGFzc05hbWU9XCJwLTNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJwbC0yXCIgPiB7dGhpcy5zdGF0ZS5tZXNzYWdlfSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTW9kYWwuQm9keT5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cImhpZGUtb24tbGFuZHNjYXBlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IGNsYXNzTmFtZT1cInB0LTJcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17bGFiZWxfKDIsMCwnMmVtJyl9ID5Eb2N1bWVudG9zPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICA8QWNjb3JkaW9uICBjbGFzc05hbWU9XCJwdC0yIHBiLTVcIiBkZWZhdWx0QWN0aXZlS2V5PVwiMlwiID5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uVG9nZ2xlIGFzPXtDYXJkLkhlYWRlcn0gZXZlbnRLZXk9XCIyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17bGFiZWxfKDAsMCwnMWVtJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxLiBGaXJtYSBlbiBlbCByZWN1YWRyby4gPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIuIFByZXNpb25hIFwiQ29uZmlybWFyIEZpcm1hXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24uVG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uQ29sbGFwc2UgZXZlbnRLZXk9XCIyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc3R5bGU9e0J0bl8oMil9IGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0IHAtMiBidG4tYmxvY2tcIiBvbkNsaWNrID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VuZHNpZ25hdHVyZSA9ICBhc3luYyAoZSkgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCF0aGlzLnN0YXRlLnJlYWxpem9GaXJtYSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJQYXJhIGNvbnRpbnVhciwgZGViZXMgaW5ncmVzYXIgdHUgZmlybWEgZW4gZWwgcmVjdWFkcm8gYmxhbmNvIHF1ZSBlc3TDoSBkZWJham8gZGVsIGJvdMOzbi5cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmVhYmxlQ2FudmFzLmdldFNhdmVEYXRhKCkgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEb2N1bWVudHNfLkZpcm1hQjY0ID0gdGhpcy5zYXZlYWJsZUNhbnZhcy5jYW52YXNDb250YWluZXIuY2hpbGRyZW5bMV0udG9EYXRhVVJMKCkuc3BsaXQoJywnKVsxXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBQcm9jZXNzKERvY3VtZW50c18sJ0Zpcm1hL1plbnppeWEvRW52aW9GaXJtYScpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdERPTS5yZW5kZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vZGFsIHNob3c9e3RydWV9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vZGFsLkJvZHkgY2xhc3NOYW1lPVwiYmctZGFya1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwicC0zIHRleHQtY2VudGVyXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBjbGFzc05hbWU9XCJwLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake1BSRC5hc3NldHN9aWNvLnN2Z2B9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17bGFiZWxfKDMsMCwnMWVtJyl9ID5HcmFjaWFzIGhlbW9zIHJlY2liaWRvIGxvcyBkYXRvcyBzYXN0aWZhY3RvcmlhbWVudGUhITwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01vZGFsLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbD4gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VjY2Vzc1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlybWFyIEZpcm1hXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IGNsYXNzTmFtZT1cInNoYWRvdyBwLTMgbWItNSBiZy13aGl0ZSByb3VuZGVkIHctMTAwXCIgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYW52YURyYXdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICgpID0+IHt0aGlzLnNldFN0YXRlKHtyZWFsaXpvRmlybWE6IHRydWV9KX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZUdyaWQgPSB7dHJ1ZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FudmFzV2lkdGggPSB7JzEwMCUnfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW52YXNIZWlnaHQgPSB7MzAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJydXNoUmFkaXVzID17MC41fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRUaW1lT2Zmc2V0PXs1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhenlSYWRpdXM9ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtjYW52YXNEcmF3ID0+ICh0aGlzLnNhdmVhYmxlQ2FudmFzID0gY2FudmFzRHJhdyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInN1Y2Nlc3NcIiA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uLkNvbGxhcHNlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uLlRvZ2dsZSBhcz17Q2FyZC5IZWFkZXJ9IGV2ZW50S2V5PVwiMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXtsYWJlbF8oMCwwLCcxZW0nKX0gPlBhZ2Fyw6k8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbi5Ub2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbi5Db2xsYXBzZSBldmVudEtleT1cIjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIlBhZ2FyZVwiIC8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uLkNvbGxhcHNlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uVG9nZ2xlIGFzPXtDYXJkLkhlYWRlcn0gZXZlbnRLZXk9XCIxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e2xhYmVsXygwLDAsJzFlbScpfSA+Q29udHJhdG88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbi5Ub2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbi5Db2xsYXBzZSBldmVudEtleT1cIjFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIkNvbnRyYXRvXCIgLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24uQ29sbGFwc2U+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgPC9BY2NvcmRpb24+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuXHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSIsImltcG9ydCBSZWFjdCAseyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtjb2xvcnN9IGZyb20gJy4uLy4uL3N0eWxlcy9jb2xvcnMnXHJcbmltcG9ydCB7Q29udGFpbmVyLFJvdyxDb2x9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuaW1wb3J0IHtQUkR9IGZyb20gJy4uLy4uL2pzb24vcHJveHkuY29uZmlnLmpzb24nXHJcbmltcG9ydCB7bGFiZWxffSBmcm9tICcuLi8uLi9zdHlsZXMvbGV0ZXJzJ1xyXG5cclxuXHJcbmltcG9ydCB7ZGV2aWNlfSBmcm9tICcuLi8uLi9tb2RlbC9kZXZpY2UnXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENPTVBfRm9vdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOmNvbG9yc1s4XSB9fSBjbGFzc05hbWU9XCJwdC01XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb250YWluZXIgZmx1aWQgY2xhc3NOYW1lPVwicHQtNSBwYi01XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGV2aWNlLmRldmljZS50eXBlID09PSBcImRlc2t0b3BcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJwdC01IHBiLTVcIiA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezB9IGNsYXNzTmFtZSA9XCJ0ZXh0LWNlbnRlciBteS1hdXRvXCIgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi8uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake1BSRC5hc3NldHN9ZWZlY3Rpdm95YV9fLnN2Z2B9IGNsYXNzTmFtZT1cImltZyBpbWctZmx1aWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezB9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YCR7UFJELmxhbmR9I1JlcXVpc2l0b2B9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e2xhYmVsXygwLDAsJzE2cHgnKX0gY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZFwiID5BeXVkYTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YCR7UFJELmxhbmR9I0F5dWRhYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17bGFiZWxfKDAsMCwnMTBweCcpfSA+UHJlZ3VudGFzIGZyZWN1ZW50ZXM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2Ake1BSRC5sYW5kfSNDdW90YWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e2xhYmVsXygwLDAsJzEwcHgnKX0gPsK/Q8OzbW8gcGFnbyBtaSBjdW90YT88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YCR7UFJELmxhbmR9I1JlcXVpc2l0b2B9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17bGFiZWxfKDAsMCwnMTBweCcpfSA+UmVxdWlzaXRvczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezB9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXtsYWJlbF8oMCwwLCcxNnB4Jyl9IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGRcIiA+RW1wcmVzYTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YCR7UFJELmxhbmR9I1F1aWVuZXNgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXtsYWJlbF8oMCwwLCcxMHB4Jyl9ID5RdWnDqW5lcyBzb21vczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9e2RldmljZS5kZXZpY2UudHlwZSA9PT0gXCJkZXNrdG9wXCIgPyAwIDogNiB9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17bGFiZWxfKDAsMCwnMTZweCcpfSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkXCIgPkNvbnRhY3RvPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+PC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86aW5mb0BlZmVjdGl2b3lhLmRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17bGFiZWxfKDAsMCwnMTBweCcpfSA+aW5mb0BlZmVjdGl2b3lhLmRvPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJwdC0zXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC00XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e2xhYmVsXygxLDAsJzE0cHgnKX0+wqnvuI8gQy5FLkQuIFMuUi5MIC8gVG9kb3MgbG9zIGRlcmVjaG9zIHJlc2VydmFkb3M8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsyfT4gPGEgaHJlZj17YCR7UFJELmxhbmR9UHJpdmFjaWRhZGB9PiA8dSBzdHlsZT17bGFiZWxfKDAsMCwnMTJweCcpfSA+UHJpdmFjaWRhZDwvdT48L2E+PC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17Mn0+IDxhIGhyZWY9e2Ake1BSRC5sYW5kfUNvbnNlbnRpbWllbnRvYH0+IDx1IHN0eWxlPXtsYWJlbF8oMCwwLCcxMnB4Jyl9ID5Db25zZW50aW1pZW50byBJbmZvcm1hZG88L3U+IDwvYT48L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsyfT4gPGEgaHJlZj17YCR7UFJELmxhbmR9VFlDYH0+IDx1IHN0eWxlPXtsYWJlbF8oMCwwLCcxMnB4Jyl9ID5Uw6lybWlub3MgeSBjb25kaWNpb25lczwvdT4gPC9hPjwvQ29sPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsyfSA+IFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInAtMlwiIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vRWZlY3Rpdm8tWWEtUkQtMTE4OTM5OTI2NjI0ODMzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7UFJELmFzc2V0c31mYWNlYm9vay5zdmdgfSBjbGFzc05hbWU9XCJpbWcgaW1nLWZsdWlkXCIgc3R5bGU9e3t3aWR0aDonMS41ZW0nfX0gLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInAtMlwiIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2VmZWN0aXZveWFfcmQvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHtQUkQuYXNzZXRzfWluc3RhZ3JhbS5zdmdgfSBjbGFzc05hbWU9XCJpbWcgaW1nLWZsdWlkXCIgc3R5bGU9e3t3aWR0aDonMS41ZW0nfX0gLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IGNsYXNzTmFtZT1cInAtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiLy5cIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7UFJELmFzc2V0c31lZmVjdGl2b3lhXy5zdmdgfSBjbGFzc05hbWU9XCJpbWcgaW1nLWZsdWlkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0gY2xhc3NOYW1lPVwicGwtNSBwYi0zIHB0LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e2xhYmVsXygwLDAsJzE2cHgnKX0gY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZFwiID5FbXByZXNhPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YCR7UFJELmxhbmR9I1F1aWVuZXNgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXtsYWJlbF8oMCwwLCcxMHB4Jyl9ID5RdWnDqW5lcyBzb21vczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IGNsYXNzTmFtZT1cInBsLTUgcGItMyBwdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXtsYWJlbF8oMCwwLCcxNnB4Jyl9IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGRcIiA+QXl1ZGE8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YCR7UFJELmxhbmR9I0F5dWRhYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17bGFiZWxfKDAsMCwnMTBweCcpfSA+UHJlZ3VudGFzIGZyZWN1ZW50ZXM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2Ake1BSRC5sYW5kfSNDdW90YWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e2xhYmVsXygwLDAsJzEwcHgnKX0gPsK/Q8OzbW8gcGFnbyBtaSBjdW90YT88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YCR7UFJELmxhbmR9I1JlcXVpc2l0b2B9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17bGFiZWxfKDAsMCwnMTBweCcpfSA+UmVxdWlzaXRvczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IGNsYXNzTmFtZT1cInBsLTUgcGItMyBwdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXtsYWJlbF8oMCwwLCcxNnB4Jyl9IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGRcIiA+Q29udGFjdG88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzppbmZvQGVmZWN0aXZveWEuZG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXtsYWJlbF8oMCwwLCcxMHB4Jyl9ID5pbmZvQGVmZWN0aXZveWEuZG88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0gY2xhc3NOYW1lPVwicHQtNVwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IGNsYXNzTmFtZT1cInBsLTQgcHQtNSBwYi0zXCIgPiBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInAtNFwiIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vRWZlY3Rpdm8tWWEtUkQtMTE4OTM5OTI2NjI0ODMzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7UFJELmFzc2V0c31mYWNlYm9vay5zdmdgfSBjbGFzc05hbWU9XCJpbWcgaW1nLWZsdWlkXCIgc3R5bGU9e3t3aWR0aDonMzBweCd9fSAvPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicC00XCIgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vZWZlY3Rpdm95YV9yZC9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake1BSRC5hc3NldHN9aW5zdGFncmFtLnN2Z2B9IGNsYXNzTmFtZT1cImltZyBpbWctZmx1aWRcIiBzdHlsZT17e3dpZHRoOiczMHB4J319IC8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBjbGFzc05hbWU9XCJwbC01IHB0LTRcIj4gPGEgaHJlZj17YCR7UFJELmxhbmR9UHJpdmFjaWRhZGB9ID4gPHUgc3R5bGU9e2xhYmVsXygwLDAsJzEycHgnKX0gPlByaXZhY2lkYWQ8L3U+PC9hPjwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBjbGFzc05hbWU9XCJwbC01IHB0LTJcIj4gPGEgaHJlZj17YCR7UFJELmxhbmR9VFlDYH0+PHUgc3R5bGU9e2xhYmVsXygwLDAsJzEycHgnKX0gPlTDqXJtaW5vcyB5IGNvbmRpY2lvbmVzPC91PjwvYT48L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0gY2xhc3NOYW1lPVwicGwtNSBwdC0yXCI+IDxhIGhyZWY9e2Ake1BSRC5sYW5kfVByaXZhY2lkYWRgfT4gPHUgc3R5bGU9e2xhYmVsXygwLDAsJzEycHgnKX0gPkNvbnNlbnRpbWllbnRvIEluZm9ybWFkbzwvdT48L2E+PC9Db2w+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSAgY2xhc3NOYW1lPVwicGwtNSBwdC00XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e2xhYmVsXygxLDAsJzEycHgnKX0+wqnvuI8gQy5FLkQuIFMuUi5MIC8gVG9kb3MgbG9zIGRlcmVjaG9zIHJlc2VydmFkb3M8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IFJpZ2h0TmF2IGZyb20gJy4vUmlndGhOYXYnO1xyXG5pbXBvcnQge2NvbG9yc30gZnJvbSAnLi4vLi4vLi4vc3R5bGVzL2NvbG9ycydcclxuXHJcbmNvbnN0IFN0eWxlZEJ1cmdlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDJyZW07XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICByaWdodDogMjBweDtcclxuICB0b3AgOiAwLjJyZW07XHJcbiAgei1pbmRleDogMjA7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcclxuICB9XHJcbiAgZGl2IHtcclxuICAgIHdpZHRoOiAxLjVyZW07XHJcbiAgICBoZWlnaHQ6IDAuMjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IG9wZW4gfSkgPT4gb3BlbiA/IGNvbG9yc1szXSA6IGNvbG9yc1szXSB9O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDFweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcclxuICAgICY6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgdHJhbnNmb3JtOiAkeyh7IG9wZW4gfSkgPT4gb3BlbiA/ICdyb3RhdGUoNTFkZWcpJyA6ICdyb3RhdGUoMCknfTtcclxuICAgIH1cclxuICAgICY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgdHJhbnNmb3JtOiAkeyh7IG9wZW4gfSkgPT4gb3BlbiA/ICdyb3RhdGUoLTUxZGVnKScgOiAncm90YXRlKDApJ307XHJcblxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEJ1cmdlciA9ICgpID0+IHtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFN0eWxlZEJ1cmdlciBvcGVuPXtvcGVufSBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKCFvcGVuKX0+XHJcbiAgICAgICAgPGRpdiAvPlxyXG4gICAgICAgIDxkaXYgLz5cclxuICAgICAgPC9TdHlsZWRCdXJnZXI+XHJcbiAgICAgIDxSaWdodE5hdiBvcGVuPXtvcGVufS8+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1cmdlciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQge2NvbG9yc30gZnJvbSAnLi4vLi4vLi4vc3R5bGVzL2NvbG9ycydcclxuaW1wb3J0IHtsYWJlbF99IGZyb20gJy4uLy4uLy4uL3N0eWxlcy9sZXRlcnMnXHJcbmltcG9ydCB7UFJEfSBmcm9tICcuLi8uLi8uLi9qc29uL3Byb3h5LmNvbmZpZy5qc29uJ1xyXG5cclxuXHJcblxyXG5jb25zdCBVbCA9IHN0eWxlZC51bGBcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0d2lkdGg6MzBweDtcclxuXHRoZWlnaHQ6IDIwcHg7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHotaW5kZXg6IDI7XHJcblxyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgZGlzcGxheTogcmVsYXRpdmU7XHJcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xyXG4gIFxyXG4gIGxpIHtcclxuICAgIHBhZGRpbmc6IDE4cHggMTBweDtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yc1swXX0gO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdHJhbnNmb3JtOiAkeyh7IG9wZW4gfSkgPT4gb3BlbiA/ICd0cmFuc2xhdGVYKDApJyA6ICd0cmFuc2xhdGVYKDEwMCUpJ307XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMy41cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICBsaSB7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFJpZ2h0TmF2ID0gKHsgb3BlbiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxVbCBvcGVuPXtvcGVufT5cclxuICAgICAgPGE+PC9hPlxyXG4gICAgXHJcbiAgICAgIDxsaT5cclxuICAgICAgICA8YSBzdHlsZT17bGFiZWxfKDMsMCl9IGhyZWY9e2Ake1BSRC5sYW5kfSNBeXVkYWB9ID5cclxuICAgICAgICAgIDxpbWcgc3JjPXtgJHtQUkQuYXNzZXRzfXBmLnN2Z2B9IGNsYXNzTmFtZT1cImltZyBpbWctZmx1aWQgcHItM1wiICAvPlxyXG4gICAgICAgICAgUHJlZ3VudGFzIGZyZWN1ZW50ZXNcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgPC9saT5cclxuICAgICAgXHJcbiAgICAgIDxsaT5cclxuICAgICAgICA8YSBzdHlsZT17bGFiZWxfKDMsMCl9IGhyZWY9e2Ake1BSRC5sYW5kfSNDdW90YWB9PlxyXG4gICAgICAgICAgPGltZyBzcmM9e2Ake1BSRC5hc3NldHN9Y2Muc3ZnYH0gY2xhc3NOYW1lPVwiaW1nIGltZy1mbHVpZCBwci0zXCIgIC8+XHJcbiAgICAgICAgICBQYWdhciBjdW90YTwvYT5cclxuICAgICAgPC9saT5cclxuICAgICAgXHJcbiAgICAgIDxsaT5cclxuICAgICAgICA8YSBzdHlsZT17bGFiZWxfKDMsMCl9IGhyZWY9e2Ake1BSRC5sYW5kfSNRdWllbmVzYH0gPlxyXG4gICAgICAgICAgPGltZyBzcmM9e2Ake1BSRC5hc3NldHN9Y3Auc3ZnYH0gY2xhc3NOYW1lPVwiaW1nIGltZy1mbHVpZCBwci0zXCIgIC8+XHJcbiAgICAgICAgICDCv1F1aWVuZXMgc29tb3M/PC9hPlxyXG4gICAgICA8L2xpPlxyXG4gICAgICBcclxuICAgICAgPGxpPlxyXG4gICAgICAgIDxhIHN0eWxlPXtsYWJlbF8oMywwKX0gaHJlZj17YCR7UFJELmxhbmR9I1JlcXVpc2l0b2B9PlxyXG4gICAgICAgICAgPGltZyBzcmM9e2Ake1BSRC5hc3NldHN9cnEuc3ZnYH0gY2xhc3NOYW1lPVwiaW1nIGltZy1mbHVpZCBwci0zXCIgIC8+XHJcbiAgICAgICAgICBSZXF1aXNpdG9zPC9hPlxyXG4gICAgICA8L2xpPlxyXG4gICAgICBcclxuICAgIDwvVWw+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSaWdodE5hdiIsImltcG9ydCBSZWFjdCAsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFByb2Nlc3MgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wcm9jZXNzJ1xyXG5pbXBvcnQge0tleX0gZnJvbSAnLi4vLi4vbW9kZWwvS2V5J1xyXG5pbXBvcnQge1BSRH0gZnJvbSAnLi4vLi4vanNvbi9wcm94eS5jb25maWcuanNvbidcclxuaW1wb3J0IHsgUm93ICwgQ29udGFpbmVyICwgQ29sICwgQ2Fyb3VzZWwgLCBOYXZiYXIsIE5hdn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5pbXBvcnQge2xhYmVsX30gZnJvbSAnLi4vLi4vc3R5bGVzL2xldGVycydcclxuaW1wb3J0IHtkZXZpY2V9IGZyb20gJy4uLy4uL21vZGVsL2RldmljZSdcclxuaW1wb3J0IEJ1cmdlciBmcm9tICcuL05hdi9CdXJnZXInXHJcbmltcG9ydCAnLi8uLi8uLi9zdHlsZXMvc3R5bGVzLmNzcydcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ09NUF9IZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBoIDogW10gLFxyXG4gICAgICAgICAgICBjIDogW10gLFxyXG4gICAgICAgICAgICBzdCA6IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aCA6IGF3YWl0IFByb2Nlc3MoS2V5LCdIZWFkZXIvQ29uc3VsdGEnKSB9KVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2MgOiBhd2FpdCBQcm9jZXNzKEtleSwnQ2FycnVzZWwvQ29uc3VsdGEnKSB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2UgICAgIDogYHVybCgke1BSRC5hc3NldHN9L2JrXzAuc3ZnKWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXIgJywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ3RvcCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgXHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyIGZsdWlkPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cIm15LWF1dG8gc2hhZG93IHAtMyBtYi00IHJvdW5kZWQgbXktYXV0b1wiID4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHtkZXZpY2UuZGV2aWNlLnR5cGUgPT09IFwiZGVza3RvcFwiIFxyXG4gICAgICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiLy5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaC5tYXAoeCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oPGltZyBzcmM9e2Ake1BSRC5hc3NldHN9JHt4LkNvbnRlbmlkb31gfSBzdHlsZT17e3dpZHRoOidjYWxjKDI1JSAtIDFlbSknfX0gLz4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwibWwtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1lbmRcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXszfSA+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2Ake1BSRC5sYW5kfSNDdW90YWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e2xhYmVsXygzLDApfT5QYWdhciBjdW90YTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17M30gPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgJHtQUkQubGFuZH0jUmVxdWlzaXRvYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17bGFiZWxfKDMsMCl9PlJlcXVpc2l0b3M8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezN9ID4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YCR7UFJELmxhbmR9I0F5dWRhYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17bGFiZWxfKDMsMCl9PkF5dWRhPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJwLTJcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmgubWFwKHggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKDxpbWcgc3JjPXtgJHtQUkQuYXNzZXRzfSR7eC5Db250ZW5pZG99YH0gc3R5bGU9e3t3aWR0aDonMTk1cHgnfX0gLz4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxfSBjbGFzc05hbWU9XCJtbC1hdXRvIG15LWF1dG9cIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXJnZXIvPiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPiAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuXHJcbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSIsImltcG9ydCBSZWFjdCAsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUmVhY3REb20gZnJvbSAncmVhY3QtZG9tJ1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XHJcbmltcG9ydCB7VndfQ29udHJhdG9zfSBmcm9tICcuL2xheW91dC9Db250cmF0b3MnXHJcblxyXG5cclxuXHJcblxyXG5SZWFjdERvbS5yZW5kZXIoPGRpdj5cclxuICAgIDxWd19Db250cmF0b3MvPlxyXG48L2Rpdj4sZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ6XCIpKTsiLCJpbXBvcnQgUmVhY3QgLCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtDT01QX0hlYWRlcn0gZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXIvY29tcF9oZWFkZXInXHJcbmltcG9ydCB7Q09NUF9jb250cmF0b30gZnJvbSAnLi4vY29tcG9uZW50cy9jb250cmF0by9jb21wX2NvbnRyYXRvJ1xyXG5pbXBvcnQge0NPTVBfRm9vdGVyfSBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3Rlci9jb21wX2Zvb3RlcidcclxuXHJcbmV4cG9ydCBjbGFzcyBWd19Db250cmF0b3MgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuXHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPENPTVBfSGVhZGVyLz5cclxuICAgICAgICAgICAgICAgIDxDT01QX2NvbnRyYXRvLz5cclxuICAgICAgICAgICAgICAgIDxDT01QX0Zvb3Rlci8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSIsImV4cG9ydCBjb25zdCBLZXkgPSB7XHJcbiAgICBLZXlPcmlnZW4gOiBcIkRPMDAwMDAxMDAwMDAxMDAwMDAxMDAwMDAxMDAwMDAxXCIsXHJcbiAgICBFc3RhZG8gOiAxXHJcbn0iLCJleHBvcnQgY29uc3QgY2xpZW50ID0ge1xyXG4gICAgTmFtZSA6IG51bGwsXHJcbiAgICBEb2N1bWVudE51bWJlciA6IG51bGwsXHJcbiAgICBWYWxpZCA6IGZhbHNlICxcclxuICAgIEtleU9yaWdlbiA6IG51bGxcclxufSAiLCJpbXBvcnQgRGV2aWNlRGV0ZWN0b3IgZnJvbSBcImRldmljZS1kZXRlY3Rvci1qc1wiO1xyXG5pbXBvcnQge0tleX0gZnJvbSAnLi9LZXknXHJcbmltcG9ydCB7Y2xpZW50fSBmcm9tICcuL2NsaWVudCdcclxuXHJcbmNvbnN0IGRldmljZURldGVjdG9yID0gbmV3IERldmljZURldGVjdG9yKCk7XHJcbmNvbnN0IHVzZXJBZ2VudCA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xyXG5leHBvcnQgY29uc3QgZGV2aWNlID0gZGV2aWNlRGV0ZWN0b3IucGFyc2UodXNlckFnZW50KTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGRldmljZV9tID0ge1xyXG4gICAgS2V5T3JpZ2VuIDogS2V5LktleU9yaWdlbiAsXHJcbiAgICBtcF9JZGVudGlmaWNhdGlvbiA6IG51bGwgLFxyXG4gICAgY2xpZW50X2VuZ2luZTogZGV2aWNlLmNsaWVudC5lbmdpbmUsXHJcbiAgICBjbGllbnRfZW5naW5lVmVyc2lvbjogZGV2aWNlLmNsaWVudC5lbmdpbmVWZXJzaW9uLFxyXG4gICAgY2xpZW50X25hbWU6ZGV2aWNlLmNsaWVudC5uYW1lLFxyXG4gICAgY2xpZW50X3R5cGU6ZGV2aWNlLmNsaWVudC50eXBlLFxyXG4gICAgY2xpZW50X3ZlcnNpb246ZGV2aWNlLmNsaWVudC52ZXJzaW9uLFxyXG4gICAgZGV2aWNlX2JyYW5kOmRldmljZS5kZXZpY2UuYnJhbmQsXHJcbiAgICBkZXZpY2VfbW9kZWw6ZGV2aWNlLmRldmljZS5tb2RlbCxcclxuICAgIGRldmljZV90eXBlOmRldmljZS5kZXZpY2UudHlwZSwgXHJcbiAgICBvc19uYW1lOmRldmljZS5vcy5uYW1lLFxyXG4gICAgb3NfcGxhdGZvcm06ZGV2aWNlLm9zLnBsYXRmb3JtLFxyXG4gICAgb3NfdmVyc2lvbjpkZXZpY2Uub3MudmVyc2lvbiwgIFxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBEb2N1bWVudHNfID17XHJcbiAgICBLZXlPcmlnZW4gOiBudWxsICxcclxuICAgIElkIDogbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKS5nZXQoXCJEXCIpIHx8IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCkuZ2V0KFwiZFwiKSxcclxuICAgIEZpcm1hQjY0IDogbnVsbFxyXG59XHJcbiIsImltcG9ydCB7UFJELERhdH0gZnJvbSAnLi4vanNvbi9wcm94eS5jb25maWcuanNvbidcclxuY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBQcm9jZXNzID0gYXN5bmMgKEIsTSkgPT5cclxueyAgIFxyXG4gICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgICAgICBwb3J0IDogUFJELnBvcnQsXHJcbiAgICAgICAgICAgIHVybDogYCR7UFJELkJhc2VVcml9JHtQUkQuUHJlZml4fWAsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IFBSRC5BdXRvcml6YXRpb24sXHJcbiAgICAgICAgICAgICAgICAnYW1iJzpQUkQuQW1iLFxyXG4gICAgICAgICAgICAgICAgJ21ldGhvZCc6IE0gfSwgXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShCKSBcclxuICAgICAgICAgICAgfSk7ICAgXHJcblx0XHRcdFxyXG5cdFx0XHQgICBcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3AuZGF0YVxyXG5cclxuICAgICAgICBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgICAgICBwb3J0IDogUFJELnBvcnQsXHJcbiAgICAgICAgICAgIHVybDogYCR7UFJELkJhc2VVcml9JHtQUkQuUHJlZml4fWAsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IFBSRC5BdXRvcml6YXRpb24sXHJcbiAgICAgICAgICAgICAgICAnYW1iJzpQUkQuQW1iLFxyXG4gICAgICAgICAgICAgICAgJ21ldGhvZCc6ICdBdWRpdG9yaWEnIH0sIFxyXG4gICAgICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWV0b2RvIDogTSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZXF1ZXN0IDogYCR7UFJELkJhc2VVcml9JHtQUkQuUHJlZml4fWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBLZXlPcmlnZW4gOiAgS2V5LktleU9yaWdlbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhcmFtZXRyb3MgOiBKU09OLnN0cmluZ2lmeShCKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlc3B1ZXN0YSAgOiBKU09OLnN0cmluZ2lmeShyZXNwLmRhdGEpICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvZGVfU3RhdHVzIDogcmVzcC5zdGF0dXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkgXHJcbiAgICAgICAgICAgIH0pO1xyXG59IFxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBEYXRhID0gYXN5bmMgKEIpID0+XHJcbntcclxuICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICAgICAgdXJsOiBgJHtEYXQuQmFzZVVyaX0ke0RhdC5QcmVmaXh9YCxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogRGF0LkF1dG9yaXphdGlvbixcclxuICAgICAgICAgICAgICAgICdhbWInOkRhdC5BbWJcclxuICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShCKSBcclxuICAgICAgICAgICAgfSk7ICAgXHJcblxyXG4gICAgICAgIHJldHVybiByZXNwLmRhdGFcclxufSAiLCJpbXBvcnQge2NvbG9yc30gZnJvbSAnLi9jb2xvcnMnXHJcblxyXG5leHBvcnQgY29uc3QgQnRuXyA9IChBcnJjb2xvcixBcnJCY29sb3IsQXJyRmNvbG9yLFdkKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvciA6IGNvbG9yc1tBcnJjb2xvcl0sXHJcbiAgICAgICAgYm9yZGVyQ29sb3IgOiBjb2xvcnNbQXJyQmNvbG9yXSxcclxuICAgICAgICBjb2xvcjogY29sb3JzW0FyckZjb2xvcl0sXHJcbiAgICAgICAgd2lkdGggOiBXZCxcclxuICAgICAgICBtYXJnaW4gOiAnYXV0bycsXHJcbiAgICAgICAgcGFkZGluZyA6ICcwLjhlbSdcclxuICAgIH1cclxufSIsImV4cG9ydCBjb25zdCBjb2xvcnMgPSBbICBcclxuICAgICcjMDAwMDY0JyAsIFxyXG4gICAgJyNDNEM0QzQnLCBcclxuICAgICcjNkM2M0ZGJyAsIFxyXG4gICAgJyNGRkZGRkYnICwgXHJcbiAgICAnIzQ1NUE2NCcgLCBcclxuICAgICcjRUIxQjFCJyAsXHJcbiAgICAnIzhGRDgzQScgLCBcclxuICAgICdyZWQnICwgXHJcbiAgICAnI0Y1RjVGNScgLCBcclxuICAgICcjODM5NjlFJyAsXHJcbiAgICAnIzBhZDNmYycgXSBcclxuXHJcbiAgXHJcbiIsIlxyXG5pbXBvcnQge2NvbG9yc30gZnJvbSAnLi9jb2xvcnMnXHJcblxyXG5leHBvcnQgY29uc3QgRm9udEZhbWlseSA9IFtcIlBvcHBpbnNcIl1cclxuXHJcbmV4cG9ydCBjb25zdCBsYWJlbF8gPSAoQXJyY29sb3IsIEFyckZvbnQgLCBGb250U2l6ZSwgRm9udEFsaW5nICApID0+IHtcclxuICAgIHJldHVybntcclxuICAgICAgICBjb2xvciA6IGNvbG9yc1tBcnJjb2xvcl0sXHJcbiAgICAgICAgZm9udFNpemUgOiBGb250U2l6ZSxcclxuICAgICAgICB0ZXh0QWxpZ24gOiBGb250QWxpbmcsXHJcbiAgICAgICAgZm9udEZhbWlseSA6IEZvbnRGYW1pbHlbQXJyRm9udF0gXHJcbiAgICB9XHJcbn0iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcXHJcXG4gICAgLmhlYWRlciwgLmhpZGUtb24tbGFuZHNjYXBlIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xcclxcbiAgICAuaGVhZGVyLCAuaGlkZS1vbi1sYW5kc2NhcGUge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==