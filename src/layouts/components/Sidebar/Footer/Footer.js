// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('footer')}>
            <div className={cx('footer-section')}>
                <span className={cx('item')}>Home</span>
                <span className={cx('item')}>About</span>
                <span className={cx('item')}>Contact</span>
                <span className={cx('item')}>Creators</span>
                <span className={cx('item')}>Developers</span>
                <span className={cx('item')}>Press</span>
            </div>

            <div className={cx('footer-section')}>
                <span className={cx('item')}>Terms</span>
                <span className={cx('item')}>Privacy</span>
                <span className={cx('item')}>Policy</span>
                <span className={cx('item')}>Copyright</span>
            </div>
            <div className={cx('footer-section')}>
                <span className={cx('item')}>Toktok 2023 - Giao tiep nguoi may</span>
            </div>
        </div>
    );
}

// Menu.propTypes = {
//     children: PropTypes.node.isRequired,
// };

export default Footer;
