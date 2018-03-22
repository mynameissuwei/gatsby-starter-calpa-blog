import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import './toc.scss';

const TableItem = ({ url, name }) => (
  <li>
    <Link
      href={url}
      to={url}
    >
      {name}
    </Link>
  </li>
);

TableItem.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const Table = ({ items }) => (
  <ul>
    {items.map(item => <TableItem url={`#${item}`} name={item} key={item} />)}
  </ul>
);

const TableOfContent = ({ toc }) => (
  <div
    className="col-lg-2 d-none d-lg-block order-11 toc-wrap"
  >
    <Table items={toc} />
  </div>
);

export default TableOfContent;
