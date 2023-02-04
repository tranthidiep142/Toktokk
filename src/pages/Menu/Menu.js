import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { ContentItem } from './Content';
import config from '~/config';
// import useScript from '../../hooks/useScript';

const cx = classNames.bind(styles);

function Menu({ videosInfo }) {
    // useScript('https://use.typekit.net/foobar.js');

    return (
        <div className={cx('wrapper')}>
            <div className={cx('videos')}>
                {videosInfo.map((info, index) => (
                    <ContentItem
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

export default Menu;
