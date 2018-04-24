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

const Loading = () => {
    return (
        <div className="layui-m-layer layui-m-layer2">
            <div className="layui-m-layershade"></div>
            <div className="layui-m-layermain">
                <div className="layui-m-layersection">
                    <div className="layui-m-layerchild  layui-m-anim-scale">
                        <div className="layui-m-layercont"><i></i><i className="layui-m-layerload"></i><i></i>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
class Layer extends Component {
    constructor(props) {
        super(props)
        this.btnAction = this.btnAction.bind(this)
        this.clickShade = this.clickShade.bind(this)
    }
    componentDidMount() {
        const time = this.props.time
        const type = this.props.type
        if (type === 0) {
            this.delayClose(time)
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

    btnAction(fn) {
        fn && typeof fn === "function" && fn()
        this.close()
    }
    // 点击遮罩层，关闭弹框
    clickShade() {
        this.close()
    }
    renderBtnGroup() {
        const btns = this.props.btns
        const list = btns.map((btn, inx) => {
            return (
                <span key={inx} no="" type="0" onClick={() => this.btnAction(btn.action)}>{btn.title}</span>
            )
        })
        return (
            <div className="layui-m-layerbtn">
                {list}
            </div>
        )
    }

    renderDailog() {
        const style = {
            backgroundColor: '#8DCE16',
            color: '#fff',
        }
        return (
            <div className="layui-m-layer layui-m-layer0" id="wm-layer">
                <div className="layui-m-layershade" onClick={this.clickShade}></div>
                <div className="layui-m-layermain">
                    <div className="layui-m-layersection">
                        <div className="layui-m-layerchild layui-m-anim-up">
                            {
                                this.props.title && <h3 style={style}>{this.props.title}</h3>
                            }
                            <div className="layui-m-layercont">{this.props.content}</div>
                            {
                                this.props.btns && this.renderBtnGroup()
                            }
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
                {this.props.type === 2 && <Loading />}
            </div>
        )
    }
}

export default Layer;