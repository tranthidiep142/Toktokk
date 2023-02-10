import classNames from 'classnames/bind';
import styles from './Vid.module.scss';
import React, { useState } from 'react';

const cx = classNames.bind(styles);

function Vid({ videoImg, src, title, hashtag, views, time, creatorImg, creatorName }) {
    const [reactSelected, setReactSelected] = useState(false);
    const handleReactClick = () => {
        setReactSelected(!reactSelected);
    };

    const [saveSelected, setSaveSelected] = useState(false);
    const handleSaveClick = () => {
        setSaveSelected(!saveSelected);
    };

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

                <div className={cx('video-icons')}>
                    <div className={cx('icon', 'react-icon')} onClick={handleReactClick}>
                        <img
                            src={reactSelected ? '/imgs/selectedIcon.svg' : '/imgs/defaultReactIcon.svg'}
                            alt="react icons"
                        />

                        <div className={cx('sub-react-icons')}>
                            <img className={cx('sub-icon')} src="/imgs/hahaIcon.svg" alt="react icons" />
                            <img className={cx('sub-icon')} src="/imgs/sadIcon.svg" alt="react icons" />
                            <img className={cx('sub-icon')} src="/imgs/angryIcon.svg" alt="react icons" />
                            {/* <img className={cx('sub-icon')} src="/imgs/defaultReactIcon.svg" alt="react icons" /> */}
                        </div>
                    </div>
                    <img className={cx('icon')} src="/imgs/cmtIcon.svg" alt="react icons" />

                    <div className={cx('icon', 'save-icon')} onClick={handleSaveClick}>
                        <img
                            src={saveSelected ? '/imgs/saveIcon.svg' : '/imgs/saveSelectedIcon.svg'}
                            alt="react icons"
                        />
                        <div className={cx('playlists')}>
                            <div className={cx('playlist-wrapper')}>
                                <img className={cx('playlist')} src="/imgs/studyPlaylist.svg" alt="studyPlaylist img" />
                                <span>Saved</span>
                            </div>

                            <div className={cx('playlist-wrapper')}>
                                <img
                                    className={cx('playlist')}
                                    src="/imgs/programPlaylist.svg"
                                    alt="programPlaylist img"
                                />
                                <span>Program</span>
                            </div>

                            <div className={cx('playlist-wrapper')}>
                                <img
                                    className={cx('playlist')}
                                    src="/imgs/travelPlaylist.svg"
                                    alt="travelPlaylist img"
                                />
                                <span>Travel</span>
                            </div>

                            {/* <img className={cx('playlist')} src="/imgs/programPlaylist.svg" alt="studyPlaylist img" />
                            <img className={cx('playlist')} src="/imgs/travelPlaylist.svg" alt="studyPlaylist img" /> */}
                            <input className={cx('addPlaylist')} type="text" placeholder="+ Add"></input>
                        </div>
                    </div>
                    <img className={cx('icon')} src="/imgs/shareIcon.svg" alt="react icons" />
                </div>
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
