import styles from './Profile.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Profile() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('heading')}>
                <img className={cx('cover')} src="/imgs/coverAvatar.svg" alt="cover"></img>
                <img className={cx('avatar')} src="/imgs/diepluc.jpg" alt="avatar"></img>
                <p className={cx('userName')}>Diep Luc</p>
                <p className={cx('desc')}>142 Followers | 40 Following | 4 videos</p>
            </div>

            <div className={cx('nav')}>
                <span>My videos</span>
                <span>My privates</span>
                <span className={cx('saved-nav')}>Saved</span>
            </div>

            <div className={cx('videos')}>
                <a href="/saved">
                    <img className={cx('video')} src="/imgs/savedCover.svg" alt="programCover img"></img>
                </a>
                <a href="/saved">
                    <img className={cx('video')} src="/imgs/programCover.svg" alt="programCover img"></img>
                </a>
                {/* <a href="/saved">
                    <img className={cx('video')} src="/imgs/studyCover.svg" alt="studyCover img"></img>
                </a> */}
                <a href="/saved">
                    <img className={cx('video')} src="/imgs/travelCover.svg" alt="travelCover img"></img>
                </a>
                <input className={cx('video')} type="text" placeholder="+ADD"></input>
            </div>
        </div>
    );
}

export default Profile;
