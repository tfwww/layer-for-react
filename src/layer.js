import React, { Component } from 'react'
import './layer.css'

class Layer extends Component {
    componentDidMount() {
        const time = this.props.time
        this.close(time)
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

export default Layer;