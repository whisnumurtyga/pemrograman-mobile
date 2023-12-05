import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesome5 } from '@expo/vector-icons';
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config"
import { AboutScreen, ProfileScreen, TaskCompletedScreen, TaskScreen } from './screens';
import { store } from './redux/store';
import { Provider } from 'react-redux';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Task') {
            iconName = 'tasks';
          } else if (route.name === 'Completed') {
            iconName = 'clipboard-check';
          } else if (route.name === 'About') {
            iconName = 'exclamation-circle';
          }
          return (
            <FontAwesome5
              name={iconName}
              size={size}
              color={focused ? 'navy' : color}
            />
          );
        },
        tabBarIconStyle: { marginTop: 10 },
        tabBarLabel: ({ children, color, focused }) => {
          return (
            <Text style={{ marginBottom: 10, color: focused ? 'navy' : color }}>
              {children}
            </Text>
          );
        },
        tabBarStyle: {
          height: 70,
          borderTopWidth: 0,
        },
      })}
    >
      <Tab.Screen
        name="Task"
        component={TaskScreen}
        options={{ title: 'All Task', unmountOnBlur: true }}
      />
      <Tab.Screen
        name="Completed"
        component={TaskCompletedScreen}
        options={{ unmountOnBlur: true }}
      />
      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{ unmountOnBlur: true }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <GluestackUIProvider config={config}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="BottomNavigator"
              component={BottomNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={ProfileScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </GluestackUIProvider>
    </Provider>
  );
};

export default App;
