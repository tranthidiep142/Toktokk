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
        {
            title: 'Privacy',
            content: [
                'Private account',
                'Connect friends on Facebook',
                'Connect friends on Instagram',
                'Connect friends on Zalo',
            ],
            class: 'first',
        },
        {
            title: 'Security',
            content: ['Sign in', 'Password', 'Friends'],
            class: 'third',
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <div className={cx('heading')}>Setting</div>
            <div className={cx('item')}>
                <p className={cx('desc')}>Auto forward video</p>
                <label className={cx('switch')}>
                    <input type="checkbox"></input>
                    <span className={cx('slider', 'round')}></span>
                </label>
            </div>
            <div className={cx('item')}>
                <p className={cx('desc')}>Allow notification</p>
                <label className={cx('switch')}>
                    <input type="checkbox"></input>
                    <span className={cx('slider', 'round')}></span>
                </label>
            </div>
            <div className={cx('item')}>
                <p className={cx('desc')}>Dark mode</p>
                <label className={cx('switch')}>
                    <input type="checkbox"></input>
                    <span className={cx('slider', 'round')}></span>
                </label>
            </div>

            {items.map((item, index) => (
                <div key={index}>
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
                            <input className={cx('child')} type="text" placeholder="+ Add"></input>
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Setting;
