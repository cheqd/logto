import { useFormContext, Controller } from 'react-hook-form';
import { Trans, useTranslation } from 'react-i18next';

import Card from '@/components/Card';
import CodeEditor from '@/components/CodeEditor';
import FormField from '@/components/FormField';
import TextLink from '@/components/TextLink';
import useDocumentationUrl from '@/hooks/use-documentation-url';

import type { SignInExperienceForm } from '../../types';
import * as tabsStyles from '../index.module.scss';
import * as brandingStyles from './index.module.scss';

const CustomCssForm = () => {
  const { t } = useTranslation(undefined, { keyPrefix: 'admin_console' });
  const { getDocumentationUrl } = useDocumentationUrl();
  const { control } = useFormContext<SignInExperienceForm>();

  return (
    <Card>
      <div className={tabsStyles.title}>{t('sign_in_exp.custom_css.title')}</div>
      <FormField
        title="sign_in_exp.custom_css.css_code_editor_title"
        tip={(closeTipHandler) => (
          <Trans
            components={{
              a: (
                <TextLink
                  // TODO: update the link when Custom CSS docs are ready
                  to={getDocumentationUrl('/docs/recipes/customize-sie/configure-branding')}
                  target="_blank"
                  onClick={closeTipHandler}
                />
              ),
            }}
          >
            {t('sign_in_exp.custom_css.css_code_editor_description', {
              link: t('sign_in_exp.custom_css.css_code_editor_description_link_content'),
            })}
          </Trans>
        )}
      >
        <Controller
          name="customCss"
          control={control}
          render={({ field: { onChange, value } }) => (
            <CodeEditor
              className={brandingStyles.customCssCodeEditor}
              language="scss"
              value={value ?? undefined}
              onChange={onChange}
            />
          )}
        />
      </FormField>
    </Card>
  );
};

export default CustomCssForm;
