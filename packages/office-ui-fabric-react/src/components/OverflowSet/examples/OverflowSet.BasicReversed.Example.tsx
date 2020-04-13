import * as React from 'react';
import { IconButton, IButtonStyles } from 'office-ui-fabric-react/lib/Button';
import { Link, ILinkStyles } from 'office-ui-fabric-react/lib/Link';
import { IOverflowSetItemProps, OverflowSet } from 'office-ui-fabric-react/lib/OverflowSet';

const noOp = () => undefined;

const linkStyles: Partial<ILinkStyles> = { root: { marginRight: 10 } };
const iconButtonStyles: Partial<IButtonStyles> = {
  root: {
    minWidth: 0,
    padding: '0 4px',
    alignSelf: 'stretch',
    height: 'auto',
  },
};

export class OverflowSetBasicReversedExample extends React.PureComponent {
  public render(): JSX.Element {
    return (
      <OverflowSet
        aria-label="Basic Menu Example"
        role="menubar"
        items={[
          {
            key: 'item3',
            name: 'Link 3',
            onClick: noOp,
          },
          {
            key: 'item2',
            name: 'Link 2',
            onClick: noOp,
          },
          {
            key: 'item1',
            name: 'Link 1',
            onClick: noOp,
          },
        ]}
        overflowItems={[
          {
            key: 'item4',
            name: 'Overflow Link 1',
            onClick: noOp,
          },
          {
            key: 'item5',
            name: 'Overflow Link 2',
            onClick: noOp,
          },
        ]}
        onRenderOverflowButton={this._onRenderOverflowButton}
        onRenderItem={this._onRenderItem}
        overflowSide={'start'}
      />
    );
  }

  private _onRenderItem = (item: IOverflowSetItemProps): JSX.Element => {
    return (
      <Link role="menuitem" styles={linkStyles} onClick={item.onClick}>
        {item.name}
      </Link>
    );
  };

  private _onRenderOverflowButton = (overflowItems: any[] | undefined): JSX.Element => {
    return (
      <IconButton
        role="menuitem"
        title="More options"
        styles={iconButtonStyles}
        menuIconProps={{ iconName: 'More' }}
        menuProps={{ items: overflowItems! }}
      />
    );
  };
}