import React from 'react';
import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';
import { Divider } from 'antd';
import { Button, Flex } from 'antd';
import { Space } from 'antd';
import { Carousel } from 'antd';
import { Image } from 'antd';
import { Result } from 'antd';
import { Alert } from 'antd';
import Marquee from 'react-fast-marquee';
// import { Col, Row, Statistic } from 'antd';
// import CountUp from 'react-countup';
import axios from 'axios';


const { Dragger } = Upload;

const props: UploadProps = {
    name: 'file',
    multiple: true,
    action: 'http://127.0.0.1:5000/upload',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};


const UploadApp: React.FC = () => {

    const contentStyle: React.CSSProperties = {
        height: '20%',
        width: '100%',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };

    // const formatter = (value: number) => <CountUp end={value} separator="," />;


    function ping(): void {
        console.log('call ping')

        axios.get(`${process.env.VITE_BackendAddress}/dtazure/ping`)
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => {
                console.error('Error ping:', error);
            });
    }

    function redisWrite(): void {
        console.log('call redis')

        // 获取当前时间
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth() + 1;
        const day = now.getDate();
        const hour = now.getHours();
        const mintue = now.getMinutes();
        const second = now.getSeconds();
        const current_time = `${year}-${month}-${day} ${hour}:${mintue}:${second}`

        axios.get(`${process.env.VITE_BackendAddress}/dtazure/write_to_redis/${current_time}`)
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => {
                console.error('Error write data to redis:', error);
            });
    }


    return <>
        {/*设置组件间距*/}
        <Space direction="vertical" size="middle" style={{display: 'flex'}}>
            <Alert
                banner
                message={
                    <Marquee pauseOnHover gradient={false}>
                        流年似水，岁月如歌，every moment is worth treasuring -- zdb
                    </Marquee>
                }
            />
            <Divider style={{  borderColor: '#7cb305' }}>This is a divider.</Divider>

            <Flex wrap gap="small" className="site-button-ghost-wrapper">
                <Button type="primary" onClick={() => ping()} ghost>
                    Ping test
                </Button>
                <Button type="primary" onClick={() => redisWrite()}  danger ghost>
                    Redis write
                </Button>
            </Flex>

            <Divider style={{  borderColor: '#7cb305' }}>This is a divider.</Divider>

            <Carousel autoplay>
                <div style={contentStyle}>
                    <Image
                        preview={false}
                        width="100%"
                        height="300px"
                        src="src/assets/pexels-rick-otten-983988.jpg"
                    />
                </div>
                <div style={contentStyle}>
                    <Image
                        preview={false}
                        width="100%"
                        height="300px"
                        src="src/assets/4-1P209100R2.jpeg"
                    />
                </div>
                <div style={contentStyle}>
                    <Image
                        preview={false}
                        width="100%"
                        height="300px"
                        src="src/assets/WechatIMG3.jpeg"
                    />
                </div>
            </Carousel>

            <Divider style={{  borderColor: '#7cb305' }}>This is a divider.</Divider>

            <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                    <InboxOutlined/>
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                    banned files.
                </p>
            </Dragger>

            <Divider style={{  borderColor: '#7cb305' }}>This is a divider.</Divider>

            {/*<div>*/}
            {/*    <Row gutter={16}>*/}
            {/*        <Col span={12}>*/}
            {/*            <Statistic title="Active Users" value={11280000000093} formatter={formatter} />*/}
            {/*        </Col>*/}
            {/*        <Col span={12}>*/}
            {/*            <Statistic title="Account Balance (CNY)" value={20012089000003} precision={2} formatter={formatter} />*/}
            {/*        </Col>*/}
            {/*    </Row>*/}
            {/*</div>*/}

            {/*<Divider style={{  borderColor: '#7cb305' }}>This is a divider.</Divider>*/}

            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                // extra={<Button type="primary">Back Home</Button>}
            />

            <Divider style={{  borderColor: '#7cb305' }}>END.</Divider>

        </Space>
    </>

};

export default UploadApp;
