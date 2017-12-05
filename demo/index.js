import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactSwipes from '../src/index';

class Page extends Component {

    render() {

        // swipes 的配置
        let opt = {
            distance: 230, // 每次移动的距离，卡片的真实宽度，需要计算
            currentPoint: 1,// 初始位置，默认从0即第一个元素开始
            autoPlay: true,
            swTouchend: (ev) => {
                let data = {
                    moved: ev.moved,
                    originalPoint: ev.originalPoint,
                    newPoint: ev.newPoint,
                    cancelled: ev.cancelled,
                }
                console.log(data);
                // this.setState({
                //     curCard: ev.newPoint
                // })
            }
        }

        return (
            <section>
                <h3>distance</h3>
                <div className="viewport">
                    <div className="flipsnap">
                        <ReactSwipes className="card-slide" options={opt}>
                            {
                                [1,2,3,4,5].map((val, index) => <div className="item" key={index}>{val}</div>)
                            }
                        </ReactSwipes>

                    </div>
                </div>
            </section>
        );
    }
}

ReactDOM.render(
    <Page />,
    document.getElementById('app')
);
