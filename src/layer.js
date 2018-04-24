import React, { Component } from 'react'
import './layer.css'

const log = console.log.bind(console)

const Tips = (props) => {
    return (
         <div className="notic-layer">
            <div className="table-cell">
                <span>{props.text}</span>
            </div>
        </div>
    )
}

class Layer extends Component {
    constructor(props) {
        super(props)
        this.cancel = this.cancel.bind(this)
        this.confirm = this.confirm.bind(this)
    }
    componentDidMount() {
        const time = this.props.time
        const type = this.props.type
        if (type === 0) {
            this.delayClose(time)
        }

        this.type()
    }

    type() {
        const type = this.props.type
        if (type === 0) {

        }
    }

    delayClose(time) {
        const layer = document.querySelector('.notic-layer')
        if (time) {
            setTimeout(() => {
                layer.style.display = 'none'
            }, time);
        }
    }

    close() {
        const layer = document.getElementById('wm-layer')
        layer.style.display = 'none'
    }

    cancel() {
        this.props.onCancel()
        this.close()
    }

    confirm() {
        this.props.onConfirm()
        this.close()
    }

    renderDailog() {
        const style = {
            backgroundColor: '#8DCE16',
            color: '#fff',
        }
        return (
            <div className="layui-m-layer layui-m-layer0" id="wm-layer">
                <div className="layui-m-layershade"></div>
                <div className="layui-m-layermain">
                    <div className="layui-m-layersection">
                        <div className="layui-m-layerchild layui-m-anim-up">
                            <h3 style={style}>{this.props.title}</h3>
                            <div className="layui-m-layercont">{this.props.content}</div>
                            <div className="layui-m-layerbtn">
                                <span no="" type="0" onClick={this.cancel}>取消</span>
                                <span yes="" type="1" onClick={this.confirm}>确认</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    render() {
        return (
            <div>
                {this.props.type === 0 && <Tips {...this.props} />}
                {this.props.type === 1 && this.renderDailog()}
            </div>
        )
    }
}

export default Layer;