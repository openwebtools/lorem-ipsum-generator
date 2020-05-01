import React, { useState } from 'react';
import { PageHeader, Col, Input, Button, message } from 'antd';
import CSS from 'csstype';
import { InputNumber } from 'antd';
import { Select } from 'antd';
import CopyOutlined from '@ant-design/icons/CopyOutlined';

const { Option } = Select;

const headerStyle: CSS.Properties = {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    padding: '12px 18px'
};

const root: CSS.Properties = {
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '10px'
};

const copyButtonMobContainer: CSS.Properties = {
    position: 'fixed',
    bottom: '16px',
    right: '16px',
    zIndex: 999
};

const copyButtonMob: CSS.Properties = {
    boxShadow: 'rgba(0, 0, 0, 0.30) 0px 2px 8px'
};

const copyButton: CSS.Properties = {
    marginTop: '20px'
};


const AppToolbar = (props: any) => {
    const [number, setNumber] = useState(5);
    const [type, setType] = useState('paragraph');

    const showGeneratedMsg = () => {
        message.success('Successfully generated!')
    };

    const showCopiedMsg = () => {
        message.success('Result copied!')
    };

    
    return (
        <div style={root}>
            <PageHeader title='Lorem Ipsum Generator' style={headerStyle}>
                <Input.Group compact size='large'>
                    <InputNumber min={1} max={1000} defaultValue={number} onChange={setNumber} size='large'/>
                    <Select defaultValue={type} style={{ width: 130 }} onChange={(value) => setType(value)} size='large'>
                        <Option value='paragraph'>Paragraphs</Option>
                        <Option value='statement'>Statements</Option>
                        <Option value='word'>Words</Option>
                    </Select>
                    <Button type='primary' shape='round' size='large' onClick={showGeneratedMsg}>
                        Go
                    </Button>
                </Input.Group>
                
                <Col xs={0} sm={24} style={copyButton}>
                    <Button type='primary' icon={<CopyOutlined />} size='large' danger block onClick={showCopiedMsg}>
                        Copy
                    </Button>
                </Col>
                
            </PageHeader>
            <Col xs={12} sm={0} style={copyButtonMobContainer}>
                <Button type='primary' shape='round' size='large' style={copyButtonMob} icon={<CopyOutlined />} danger onClick={showCopiedMsg}>
                    Copy
                </Button>
            </Col>
        </div>
    );
}

export default AppToolbar;