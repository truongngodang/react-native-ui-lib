import PropTypes from 'prop-types';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Constants} from '../../helpers';
import Assets from '../../assets';
import {Colors, Typography} from '../../style';
import {BaseComponent} from '../../commons';
import View from '../../components/view';
import Button from '../../components/button';
import Text from '../../components/text';


const DEFAULT_BUTTON_PROPS = {
  color: Colors.blue30,
};

/**
 * @description: Modal.TopBar, inner component for configuring the Modal component's title, buttons and statusBar
 * @example: https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/ModalScreen.js
 */
export default class TopBar extends BaseComponent {
  static displayName = 'Modal.TopBar';
  static propTypes = {
    /**
     * title to display in the center of the top bar
     */
    title: PropTypes.string,
    /**
     * title custom style
     */
    titleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
    /**
     * done action props (Button props)
     */
    doneButtonProps: PropTypes.shape(Button.propTypes),
    /**
     * done action label
     */
    doneLabel: PropTypes.string,
    /**
     * done action icon
     */
    doneIcon: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    /**
     * done action callback
     */
    onDone: PropTypes.func,
    /**
     * cancel action props (Button props)
     */
    cancelButtonProps: PropTypes.shape(Button.propTypes),
    /**
     * cancel action label
     */
    cancelLabel: PropTypes.string,
    /**
     * cancel action icon
     */
    cancelIcon: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    /**
     * cancel action callback
     */
    onCancel: PropTypes.func,
    /**
     * whether to include status bar or not (height claculations)
     */
    includeStatusBar: PropTypes.bool
  };

  static defaultProps = {
    doneLabel: 'Save',
    cancelIcon: Assets.icons.x,
    doneButtonProps: {},
    cancelButtonProps: {},
    includeStatusBar: Constants.isIOS
  };

  generateStyles() {
    this.styles = createStyles(this.props);
  }

  renderTopBarButton({onPress, label, icon, buttonProps}) {
    if (onPress && (label || icon)) {
      const {iconStyle, labelStyle, ...otherButtonProps} = buttonProps;

      return (
        <Button
          link
          onPress={onPress}
          label={label}
          labelStyle={[this.styles.actionLabel, labelStyle]}
          iconSource={icon}
          iconStyle={[this.styles.icon, iconStyle]}
          {...DEFAULT_BUTTON_PROPS}
          {...otherButtonProps}
          hitSlop={{top: 10, bottom: 10, left: 20, right: 20}}
        />
      );
    }
  }

  renderDone() {
    const {doneButtonProps, doneLabel, doneIcon, onDone} = this.props;
    return this.renderTopBarButton({
      onPress: onDone, label: doneLabel, icon: doneIcon, buttonProps: {style: {paddingRight: 16}, ...doneButtonProps},
    });
  }

  renderCancel() {
    const {cancelButtonProps, cancelLabel, cancelIcon, onCancel} = this.props;
    return this.renderTopBarButton({
      onPress: onCancel, label: cancelLabel, icon: cancelIcon, buttonProps: {style: {paddingLeft: 16}, ...cancelButtonProps},
    });
  }

  render() {
    const {title, titleStyle, includeStatusBar} = this.props;

    return (
      <View row spread centerV style={[this.styles.container, includeStatusBar && {marginTop: Constants.statusBarHeight}]}>
        {this.renderCancel()}
        <Text numberOfLines={1} text70 style={[this.styles.title, titleStyle]}>{title}</Text>
        {this.renderDone()}
      </View>
    );
  }
}

function createStyles() {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      height: 32 + Constants.statusBarHeight
    },
    title: {
      fontWeight: '500'
    },
    actionLabel: {
      ...Typography.text70
    },
    icon: {
      tintColor: Colors.dark10,
      marginBottom: 2
    },
  });
}
