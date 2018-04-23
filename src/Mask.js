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
            }, 3000);
        }
    }
    render() {
        const text = 'test'

        return (
            <div className="notic-layer">
                <div className="table-cell">
                    <span>{this.props.text}</span>
                </div>
            </div>
        )
    }
}

export default Mask;