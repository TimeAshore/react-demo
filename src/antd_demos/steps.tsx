import React, { useState } from 'react';
import { Button, message, Steps, theme } from 'antd';

const steps = [
    {
        title: 'CLI',
        content: 'TypeScript 与 JavaScript 有着不同寻常的关系。\nTypeScript 提供了 JavaScript 的所有功能，并在这些功能之上添加了一层： TypeScript 的类型系统。',
    },
    {
        title: 'Init',
        content: (
            <>
                例如，JavaScript 提供了诸如 string 和 number 这样的原始类型，但它不检查你在赋值时与类型是否匹配。TypeScript 提供了这样的功能。
                <br/>
                这意味着你现有的运行良好的 JavaScript 代码也是 TypeScript 代码。TypeScript 的主要好处是，它可以检查代码中的意外行为，从而降低出现错误的机会。
                <br/>
                本教程提供 TypeScript 的简要概述，重点介绍其类型系统。

                <a href="http://localhost:8080" target="_blank">Link</a>
            </>
        )
    },
    {
        title: 'Get Secret Key',
        content: 'TypeScript 可以识别 JavaScript 语言，在许多情况下可以推断类型。例如，在创建变量并将其赋值给特定值时， TypeScript 将使用该值作为其类型。',
    },
    {
        title: 'Deploy',
        content: '你可能已经在 Visual Studio Code 中编写了 JavaScript，并已使用了编辑器的自动补全功能。Visual Studio Code 使用了 TypeScript 的引擎，以便更容易地处理 JavaScript。',
    },
];

const StepsApp: React.FC = () => {
    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const items = steps.map((item) => ({ key: item.title, title: item.title }));

    const contentStyle: React.CSSProperties = {
        height: '260px',
        lineHeight: '2',
        textAlign: 'center',
        color: token.colorTextTertiary,
        backgroundColor: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: `1px dashed ${token.colorBorder}`,
        marginTop: 16,
        whiteSpace: 'pre-wrap',
        overflow: 'auto',  // 滚动条
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    return (
        <>
            <Steps current={current} items={items} />
            <div style={contentStyle}>{steps[current].content}</div>
            <div style={{ marginTop: 24 }}>
                {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                        Next
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
                        Done
                    </Button>
                )}
                {current > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                        Previous
                    </Button>
                )}
            </div>
        </>
    );
};

export default StepsApp;