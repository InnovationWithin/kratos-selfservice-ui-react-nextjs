import {
  Card,
  LinkButton,
  typographyH2Styles,
  typographyLinkStyles
} from '@ory/themes'
import cn from 'classnames'
import styled from 'styled-components'

export const MarginCard = styled(Card)`
  margin-top: 70px;
  margin-bottom: 18px;
  border-radius: 10px;
  border: 1px solid var(--gray6);
  border-top: 5px solid #021B79;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 7px 13px -3px, rgba(0, 0, 0, 0.1) 0px -3px 0px inset;
  background-color: var(--gray2) !important;
`

export const ActionCard = styled(Card)`
  margin-bottom: 18px;
  border-radius: 10px;
  border: 1px solid var(--gray7);
  background-color: var(--gray2) !important;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 7px 13px -3px, rgba(0, 0, 0, 0.05) 0px -3px 0px inset;
`

export const CenterLink = styled.a`
  ${typographyH2Styles};
  ${typographyLinkStyles};
  text-align: center;
  font-size: 15px;
  color: var(--gray12);

  &:focus, &:active, &:visited {
    color: var(--gray11);
  }

  &:hover {
    color: var(--gray11);
  }


`

export const TextLeftButton = styled(LinkButton)`
  box-sizing: border-box;

  & .linkButton {
    box-sizing: border-box;
  }

  & a {
    &:hover,
    &,
    &:active,
    &:focus,
    &:visited {
      text-align: left;
    }
  }
`

export interface DocsButtonProps {
  title: string
  href?: string
  onClick?: () => void
  testid: string
  disabled?: boolean
  unresponsive?: boolean
}

export const DocsButton = ({
  title,
  href,
  onClick,
  testid,
  disabled,
  unresponsive
}: DocsButtonProps) => (
  <div className={cn('col-xs-4', { 'col-md-12': !unresponsive })}>
    <div className="box">
      <TextLeftButton
        onClick={onClick}
        disabled={disabled}
        data-testid={testid}
        href={href}
      >
        {title}
      </TextLeftButton>
    </div>
  </div>
)
