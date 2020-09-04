import React, { useState, useEffect } from "react"
import { WingBlank, Carousel } from 'antd-mobile';

const demo2:React.FC = (props)=>{

    const [data, setData] = useState(['1', '2', '3'])
    const [imgHeight, setImgHeight] = useState("176")
    let stm;

    useEffect(()=>{
        clearTimeout(stm)
        stm = setTimeout(() => {
            setData(['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI']);
        }, 100);

        return ()=>{
            clearTimeout(stm)
        }
    }, [])

    return <div>
        <WingBlank>
        <Carousel
          autoplay={false}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: imgHeight }}
            >
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  setImgHeight("auto")
                //   this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
    </div>
}

export default demo2