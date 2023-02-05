import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Logout.module.scss';

const cx = classNames.bind(styles);

function Logout() {
    const [clicked, setClicked] = useState([]);
    const handleChangeColor = (index) => {
        setClicked((prevClicked) => {
            const newClicked = [...prevClicked];
            newClicked[index] = !newClicked[index];
            return newClicked;
        });
    };

    const items = [
        'Program knowledge',
        'Cartoon',
        'Beauty',
        'Music',
        'Football',
        'Design',
        'Study English',
        'Review book',
        'Business',
        'Financial freedom',
        'News of day',
        'Review Koria film',
        'Soft skill',
        'Trending',
        'Cover dance',
        'Gameshow',
        'Cooking study',
        'Program knowledge',
        'Cartoon',
        'Football',
        'Review Koria film',
        'News of day',
        'Review Koria film',
        'Soft skill',
        'Financial freedom',
        'Trending',
        'Cover dance',
        'Cooking study',
    ];

    return (
        <div className={cx('wrapper')}>
            <div className={cx('subheading')}>Let's choose</div>
            <div className={cx('heading')}>YOUR INTERESTING TOPICS</div>
            <div className={cx('heading-desc')}>For the best video recommendations</div>

            <ul className={cx('childs')}>
                {items.map((item, index) => (
                    <li
                        key={index}
                        className={cx('child', { clickable: true, clicked: clicked[index] || false })}
                        onClick={() => handleChangeColor(index)}
                    >
                        {item}
                    </li>
                ))}
                <input
                    className={cx('child')}
                    type="text"
                    placeholder="+ Add"
                    onClick={() => handleChangeColor()}
                ></input>
            </ul>

            <div className={cx('action')}>
                <button className={cx('child', 'skip')} onClick={() => handleChangeColor()}>
                    <a href="\">Skip</a>
                </button>
                <button className={cx('child', 'continue')} onClick={() => handleChangeColor()}>
                    <a href="\">Start</a>
                </button>
            </div>
        </div>
    );
}

export default Logout;
