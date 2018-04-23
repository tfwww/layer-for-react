import React, { Component } from 'react'
import './layer.css'

class Mask extends Component {
    componentDidMount() {
        const close = this.props.autoClose
        this.close(close)
    }

    close(config) {
        const layer = document.querySelector('.notic-layer')
        if (config) {
            setTimeout(() => {
                layer.style.display = 'none'
            }, 1000);
        }
    }
    render() {
        const text = 'test'
        const style = {
            display: '',
            animationDuration: '100ms'
        }

        return (
            <div className="notic-layer" style={style}>
                <div className="table-cell">
                    <span>{text}</span>
                </div>
            </div>
        )
    }
}

export default Mask;