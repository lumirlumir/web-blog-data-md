import 'github-markdown-css/github-markdown.css';

import styles from './Body.module.scss';

export default function Body({ children }) {
  return <body className={`markdown-body ${styles.body}`}>{children}</body>;
}
