import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import config from '~/config';
import Vid from './Vid/Vid';
// import useScript from '../../hooks/useScript';

const cx = classNames.bind(styles);

function Video({ videosInfo }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('videos')}>
                {videosInfo.map((info, index) => (
                    <Vid
                        key={index}
                        to={config.routes.home}
                        videoImg={info.videoImg}
                        src={info.src}
                        title={info.title}
                        hashtag={info.hashtag}
                        views={info.views}
                        time={info.time}
                        creatorImg={info.creatorImg}
                        creatorName={info.creatorName}
                    />
                ))}
            </div>
        </div>
    );
}

export default Video;
