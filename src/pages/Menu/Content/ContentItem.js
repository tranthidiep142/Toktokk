import classNames from 'classnames/bind';
import styles from './Content.module.scss';
// import useScript from '../../../hooks/useScript';
// import React, { useEffect } from 'react';
import React, { useState } from 'react';

const cx = classNames.bind(styles);

function ContentItem({ videoImg, src, title, hashtag, views, time, creatorImg, creatorName }) {
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
                    <video className={cx('video')} width="234" height="416" autoPlay controls>
                        <source src={src} type="video/mp4"></source>
                    </video>
                )}
            </div>
            <div className={cx('title')} title={title}>
                {title}
            </div>
            <div className={cx('hashtag')}>{hashtag}</div>
            <div className={cx('info')}>
                <div className={cx('creator')}>
                    <img className={cx('creator-img')} src={creatorImg} alt="creator img" />
                    <span className={cx('creator-name')}>{creatorName}</span>
                </div>
                <div className={cx('desc')}>
                    <span title={time}>{views}</span>
                </div>
            </div>
        </div>
    );
}

export default ContentItem;
