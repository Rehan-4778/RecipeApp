import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Settings from "../screens/Settings";
import Favourite from "../screens/Favourite";
import { StyleSheet, View, Image, Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons/faHeart";
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import { faCog } from "@fortawesome/free-solid-svg-icons/faCog";

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 15,
          left: 15,
          right: 15,
          borderRadius: 15,
          elevation: 0,
          backgroundColor: "#ffffff",
          height: 70,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <FontAwesomeIcon
                icon={faHome}
                size={25}
                color={focused ? "rgb(247, 124, 67)" : "#748c94"}
              />

              <Text
                style={{
                  color: focused ? "rgb(247, 124, 67)" : "#748c94",
                  fontSize: 12,
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Favorite"
        component={Favourite}
        options={{
          headerStyle: {
            backgroundColor: "rgb(247, 124, 67)",
            shadowColor: "#ffffff",
            elevation: 0,
          },
          headerTintColor: "#ffffff",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <FontAwesomeIcon
                icon={focused ? faHeart : faHeartRegular}
                size={25}
                color={focused ? "rgb(247, 124, 67)" : "#748c94"}
              />

              <Text
                style={{
                  color: focused ? "rgb(247, 124, 67)" : "#748c94",
                  fontSize: 12,
                }}
              >
                Favorite
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          headerStyle: {
            backgroundColor: "rgb(247, 124, 67)",
            shadowColor: "#ffffff",
            elevation: 0,
          },
          headerTintColor: "#ffffff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <FontAwesomeIcon
                icon={faCog}
                size={25}
                color={focused ? "rgb(247, 124, 67)" : "#748c94"}
              />
              <Text
                style={{
                  color: focused ? "rgb(247, 124, 67)" : "#748c94",
                  fontSize: 12,
                }}
              >
                Settings
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 4,
  },
});

export default Tabs;
