import React from 'react';
import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';
import { Divider } from 'antd';
import { Button } from 'antd';
import { Space } from 'antd';
import { Carousel } from 'antd';
import { Image } from 'antd';
import { Result } from 'antd';
import { Col, Row, Statistic } from 'antd';
import CountUp from 'react-countup';

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

    const formatter = (value: number) => <CountUp end={value} separator="," />;


    return <>


        {/*设置组件间距*/}
        <Space direction="vertical" size="middle" style={{display: 'flex'}}>
            <Carousel autoplay>
                <div style={contentStyle}>
                    <Image
                        preview={false}
                        width="100%"
                        height="200px"
                        src="src/assets/pexels-rick-otten-983988.jpg"
                    />
                </div>
                <div style={contentStyle}>
                    <Image
                        preview={false}
                        width="100%"
                        height="200px"
                        src="src/assets/4-1P209100R2.jpeg"
                    />
                </div>
                <div style={contentStyle}>
                    <Image
                        preview={false}
                        width="100%"
                        height="200px"
                        src="src/assets/WechatIMG3.jpeg"
                    />
                </div>
            </Carousel>

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

            {/*<br/>*/}
            {/*<Divider plain>我是一条分割线</Divider>*/}

            <div>
                <Row gutter={16}>
                    <Col span={12}>
                        <Statistic title="Active Users" value={11280000000093} formatter={formatter} />
                    </Col>
                    <Col span={12}>
                        <Statistic title="Account Balance (CNY)" value={20012089000003} precision={2} formatter={formatter} />
                    </Col>
                </Row>
            </div>

            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                // extra={<Button type="primary">Back Home</Button>}
            />

        </Space>
    </>

};

export default UploadApp;
