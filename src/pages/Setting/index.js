import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Setting.module.scss';

const cx = classNames.bind(styles);

function Setting() {
    const [clicked, setClicked] = useState([]);
    const handleChangeColor = (index) => {
        setClicked((prevClicked) => {
            const newClicked = [...prevClicked];
            newClicked[index] = !newClicked[index];
            return newClicked;
        });
    };

    const [activeIndex, setActiveIndex] = useState(-1);
    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? -1 : index);
    };

    const items = [
        {
            title: 'Manage account',
            content: ['Dark background', 'Allow notifications', 'Private account', 'Connect friends on Facebook'],
            class: 'first',
        },
        {
            title: 'Manage interesting topics',
            content: [
                'Program knowledge',
                'Cartoon',
                'Beauty',
                'Music',
                'Football',
                'Design',
                'News of day',
                'Review Koria film',
                'Soft skill',
                'Mukbag',
                'Cover dance',
                'Gameshow',
                'Cooking study',
            ],
            class: 'second',
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <div className={cx('item')}>
                <div className={cx('title')}>Manage account</div>
            </div>

            {items.map((item, index) => (
                <div key={index} className={cx('item')}>
                    <div className={cx('title')} onClick={() => handleClick(index)}>
                        {item.title}
                        <img src="/imgs/downIcon.svg" alt="down icon"></img>
                    </div>
                    {index === activeIndex && (
                        <ul className={cx('childs', item.class)}>
                            {item.content.map((content, i) => (
                                <li
                                    key={i.id}
                                    className={cx('child', { clickable: true, clicked: clicked[i] || false })}
                                    onClick={() => handleChangeColor(i)}
                                >
                                    {content}
                                    <label className={cx('switch')}>
                                        <input type="checkbox"></input>
                                        <span className={cx('slider', 'round')}></span>
                                    </label>
                                </li>
                            ))}
                            <input className={cx('child')} type="text" placeholder="+ ADD"></input>
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Setting;
