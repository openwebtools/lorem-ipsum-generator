import React, { useState } from 'react';
import { PageHeader, Row, Col, Input, Divider, Button } from 'antd';
import CSS from 'csstype';
import { InputNumber } from 'antd';
import { Select } from 'antd';
import CopyIcon from './copyIcon';
import { CopyOutlined } from '@ant-design/icons';

const { Option } = Select;

const headerStyle: CSS.Properties = {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column'
};

const root: CSS.Properties = {
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '10px'
};

const copyButtonContainer: CSS.Properties = {
    position: 'absolute',
    bottom: '16px',
    right: '16px'
};

const copyButton: CSS.Properties = {
    boxShadow: 'rgba(0, 0, 0, 0.30) 0px 2px 8px'
};


const AppToolbar = (props: any) => {
    const [number, setNumber] = useState(5);
    const [type, setType] = useState('paragraph');
    return (
        <div style={root}>
            <PageHeader title='Lorem Ipsum Generator' style={headerStyle}>
                <Input.Group compact size="large">
                    <InputNumber min={1} max={1000} defaultValue={number} onChange={setNumber} />
                    <Select defaultValue={type} style={{ width: 120 }} onChange={(value) => setType(value)}>
                        <Option value="paragraph">Paragraphs</Option>
                        <Option value="statement">Statements</Option>
                        <Option value="word">Words</Option>
                    </Select>
                    <Button type="primary" shape="round">
                        Go
                    </Button>
                </Input.Group>
            </PageHeader>
            <Col xs={12} sm={0} style={copyButtonContainer}>
                <Button type='primary' shape='circle' size='large' style={copyButton} icon={<CopyOutlined />}>
                    
                </Button>
            </Col>
        </div>
    );
}

export default AppToolbar;