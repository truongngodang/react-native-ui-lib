import {Navigation} from 'react-native-navigation';
import AvatarsScreen from './AvatarsScreen';
import ActionBarScreen from './ActionBarScreen';
import AnimatedImageScreen from './AnimatedImageScreen';
import ButtonsScreen from './ButtonsScreen';
import BadgesScreen from './BadgesScreen';
import CardsScreen from './CardsScreen';
import ConnectionStatusBarScreen from './ConnectionStatusBarScreen';
import FormScreen from './FormScreen';
import InputsScreen from './InputsScreen';
import PageControlScreen from './PageControlScreen';
import NotificationsScreen from './NotificationsScreen';
import TabBarScreen from './TabBarScreen';

Navigation.registerComponent('unicorn.components.AvatarsScreen', () => AvatarsScreen);
Navigation.registerComponent('unicorn.components.ActionBarScreen', () => ActionBarScreen);
Navigation.registerComponent('unicorn.components.AnimatedImageScreen', () => AnimatedImageScreen);
Navigation.registerComponent('unicorn.components.ButtonsScreen', () => ButtonsScreen);
Navigation.registerComponent('unicorn.components.BadgesScreen', () => BadgesScreen);
Navigation.registerComponent('unicorn.components.CardsScreen', () => CardsScreen);
Navigation.registerComponent('unicorn.components.ConnectionStatusBar', () => ConnectionStatusBarScreen);
Navigation.registerComponent('unicorn.components.FormScreen', () => FormScreen);
Navigation.registerComponent('unicorn.components.InputsScreen', () => InputsScreen);
Navigation.registerComponent('unicorn.components.PageControlScreen', () => PageControlScreen);
Navigation.registerComponent('unicorn.components.NotificationsScreen', () => NotificationsScreen);
Navigation.registerComponent('unicorn.components.TabBarScreen', () => TabBarScreen);
