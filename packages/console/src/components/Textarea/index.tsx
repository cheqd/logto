import classNames from 'classnames';
import type { ForwardedRef, HTMLProps } from 'react';
import { forwardRef } from 'react';

import * as styles from './index.module.scss';

type Props = HTMLProps<HTMLTextAreaElement> & {
  className?: string;
  hasError?: boolean;
};

const Textarea = (
  { className, hasError, ...rest }: Props,
  reference: ForwardedRef<HTMLTextAreaElement>
) => {
  return (
    <div className={classNames(styles.container, hasError && styles.error, className)}>
      <textarea {...rest} ref={reference} />
    </div>
  );
};

export default forwardRef(Textarea);
