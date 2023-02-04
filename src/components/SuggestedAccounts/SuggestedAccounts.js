import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>

            <AccountItem name="Nguyễn Thị Trà Giang" img="imgs/tragiang.jpeg" />
            <AccountItem name="Quách Bảo Ngọc" img="imgs/baongoc.jpeg" />
            <AccountItem name="Đào Võ Trường Giang" img="imgs/truonggiang.jpeg" />

            <p className={cx('more-btn')}>See all</p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
