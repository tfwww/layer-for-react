import React from 'react'
import ReactDOM from 'react-dom'
import Layer from '../../src/Layer'

const test = () => {
    console.log('on cancel')
}

const confirm = () => {
    console.log('on confirm')
}

const close = () => {
    console.log('on close')
}

ReactDOM.render((
        <Layer type={1}
            title={'标题'}
            content={'我是内容'}
            time={5000}
            text={'abc'}
            btns={['1', '2']}
            onCancel={() => test()}
            onConfirm={() => confirm()}
            onClose={() => close()}
        />
    ),
    document.getElementById('app')
)