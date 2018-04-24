# react-layer

A layer system for React.

## 使用方法
``` javascript
import React from 'react'
import ReactDOM from 'react-dom'
import Layer from 'Layer'

const confirm = () => {
    console.log('on confirm')
}

const close = () => {
    console.log('on close')
}

ReactDOM.render((
        <Layer type={1}
            title={'我是标题'}
            content={'我是内容'}
            time={5000}
            text={'abc'}
            btns={btns}
        />
    ),
    document.getElementById('app')
)
```


