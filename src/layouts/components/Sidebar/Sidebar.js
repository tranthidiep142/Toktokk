import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import config from '~/config';
import Footer from './Footer';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <div className={cx('title')}>MENU</div>

                <MenuItem title="Home" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Cartoon"
                    to={config.routes.cartoon}
                    icon={<LiveIcon />}
                    activeIcon={<LiveActiveIcon />}
                />
                <MenuItem
                    title="Programming knowledge"
                    to={config.routes.program}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem
                    title="Beauty"
                    to={config.routes.beauty}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
            </Menu>

            <Menu>
                <div className={cx('title')}>LIBRARY</div>

                <MenuItem
                    title="Recent"
                    to={config.routes.recent}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                />
                <MenuItem
                    title="Favourites"
                    to={config.routes.favourites}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem
                    title="Saved"
                    to={config.routes.saved}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem
                    title="My videos"
                    to={config.routes.mine}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
            </Menu>

            <SuggestedAccounts label="Suggested accounts" />
            <SuggestedAccounts label="Following accounts" />

            <Footer />
        </aside>
    );
}

export default Sidebar;
