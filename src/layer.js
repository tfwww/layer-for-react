import React, { Component } from 'react'
import './layer.css'

const log = console.log.bind(console)

const Dialog = () => {
    const style = {
        backgroundColor: '#8DCE16',
        color: '#fff',
    }
    return (
        <div id="layui-m-layer35" className="layui-m-layer layui-m-layer0" index="35">
            <div className="layui-m-layershade"></div>
            <div className="layui-m-layermain">
                <div className="layui-m-layersection">
                    <div className="layui-m-layerchild layui-m-anim-up">
                        <h3 style={style}>我是标题</h3>
                        <div className="layui-m-layercont">展现的是全部结构</div>
                        <div className="layui-m-layerbtn">
                            <span no="" type="0">取消</span>
                            <span yes="" type="1">确认</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

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
    componentDidMount() {
        const time = this.props.time
        // this.close(time)
        this.type()
    }

    type() {
        const type = this.props.type
        if (type === 0) {

        }
    }
    close(time) {
        const layer = document.querySelector('.notic-layer')
        if (time) {
            setTimeout(() => {
                layer.style.display = 'none'
            }, time);
        }
    }
    render() {
        return (
            this.props.type === 0 && <Tips {...this.props} />
            // <Dialog />
        )
    }
}

export default Layer;