import styles from './Card.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Card = ({
    image,
    title,
    description,
    children,
    className,
    style,
    variant = 'default', // ví dụ: 'default', 'feature', 'program', 'partner'
    ...props
}) => {
    return (
        <div className={cx('card', variant, className)} style={style} {...props}>
            {image && <img src={image} alt={title} className={cx('image')} />}
            <div className={cx('content')}>
                {title && <h3 className={cx('title')}>{title}</h3>}
                {description && <p className={cx('description')}>{description}</p>}
                {children}
            </div>
        </div>
    );
};

export default Card;
