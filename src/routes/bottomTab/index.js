import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ExploreStack, FavoriteStack, BookingStack, SettingsStack, ChatStack, RequestsStack, MyVehiclesStack} from '../stacks/main';
import {ROUTES} from '../../utils/constants';
import {
  CalendarActiveIcon,
  CalendarIcon,
  CarTabActiveIcon,
  CarTabIcon,
  ChatActiveIcon,
  ChatIcon,
  HeartActiveIcon,
  HeartIcon,
  RequestActiveIcon,
  RequestIcon,
  SearchActiveIcon,
  SearchIcon,
  SettingActiveIcon,
  SettingIcon,
} from '../../assets/icons';
import {COLORS, FONTS} from '../../utils/theme';
import {View} from 'react-native';
import {AppText} from '../../components';
import globalStyles from '../../../globalStyles';
import {useAccountType} from '../../hooks';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  const {isOwner, isRenter} = useAccountType();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: COLORS.primary, padding: 20, height: 70},
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      {isRenter ? (
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => <TabIcon Icon={focused ? SearchActiveIcon : SearchIcon} title={'Explore'} focused={focused} />,
          }}
          name={ROUTES.ExploreTab}
          component={ExploreStack}
        />
      ) : (
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => <TabIcon Icon={focused ? RequestActiveIcon : RequestIcon} title={'Requests'} focused={focused} />,
          }}
          name={ROUTES.RequestsTab}
          component={RequestsStack}
        />
      )}

      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => <TabIcon Icon={focused ? CalendarActiveIcon : CalendarIcon} title={'Bookings'} focused={focused} />,
        }}
        name={ROUTES.BookingTab}
        component={BookingStack}
      />
      {isRenter ? (
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => <TabIcon Icon={focused ? HeartActiveIcon : HeartIcon} title={'Favourites'} focused={focused} />,
          }}
          name={ROUTES.FavoriteTab}
          component={FavoriteStack}
        />
      ) : (
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => <TabIcon Icon={focused ? CarTabActiveIcon : CarTabIcon} title={'My Vehicles'} focused={focused} />,
          }}
          name={ROUTES.MyVehiclesTab}
          component={MyVehiclesStack}
        />
      )}
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => <TabIcon Icon={focused ? ChatActiveIcon : ChatIcon} title={'Chat'} focused={focused} />,
        }}
        name={ROUTES.ChatTab}
        component={ChatStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => <TabIcon Icon={focused ? SettingActiveIcon : SettingIcon} title={'Setting'} focused={focused} />,
        }}
        name={ROUTES.SettingsTab}
        component={SettingsStack}
      />
    </Tab.Navigator>
  );
};

const TabIcon = ({Icon, title, focused}) => {
  return (
    <View style={globalStyles.tabBarIconContainer}>
      <Icon height={22} width={22} />
      <AppText greyText fontSize={10} fontFamily={FONTS.semiBold} secondary={focused}>
        {title}
      </AppText>
    </View>
  );
};

export default BottomTab;
