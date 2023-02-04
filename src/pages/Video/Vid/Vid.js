import classNames from 'classnames/bind';
import styles from './Vid.module.scss';
import React, { useState } from 'react';

const cx = classNames.bind(styles);

function Vid({ videoImg, src, title, hashtag, views, time, creatorImg, creatorName }) {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className={cx('wrapper')} onMouseEnter={() => setIsPlaying(true)} onMouseLeave={() => setIsPlaying(false)}>
            <div
                className={cx('video-container')}
                style={{
                    backgroundImage: `url(${videoImg})`,
                }}
            >
                {isPlaying && (
                    <video className={cx('video')} width="351" height="624" autoPlay controls>
                        <source src={src} type="video/mp4"></source>
                    </video>
                )}
            </div>
            <div className={cx('info-container')}>
                <div className={cx('creator')}>
                    <div className={cx('creator-info')}>
                        <img className={cx('creator-img')} src={creatorImg} alt="creator img" />
                        <span className={cx('creator-name')}>{creatorName}</span>
                    </div>
                    <btn className={cx('btn')}>Follow</btn>
                </div>
                <div className={cx('info')}>
                    <div className={cx('title')} title={title}>
                        {title}
                    </div>
                    <div className={cx('hashtag')}>{hashtag}</div>
                    <div className={cx('desc')}>
                        <span>{views}</span>
                        <span>{time}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Vid;
