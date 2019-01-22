import { HtmlContentProps, ContentProps } from 'components';

export type PageTemplateProps = {
  title: string;
  content: string;
  contentComponent?:
    | React.ComponentClass<HtmlContentProps, {}>
    | React.FunctionComponent<HtmlContentProps>
    | React.ComponentClass<ContentProps, {}>
    | React.FunctionComponent<ContentProps>
    | undefined;
};