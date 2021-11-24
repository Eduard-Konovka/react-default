import PropTypes from 'prop-types';
import s from './Container.module.css';

export default function Container({ title, children }) {
  return (
    <div className={s.container}>
      {title && <h1 className={s.title}>{title}</h1>}
      {children}
    </div>
  );
}

Container.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
