import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { DoctorHome } from "../DoctorHome/DoctorHome"
import Profile from "../Profile/Profile"

import { FontAwesome6, FontAwesome5 } from "@expo/vector-icons"

import { ContentIcon, TextIcon } from "./style"

const BottomTab = createBottomTabNavigator();

export const Main = () => {
    return (
        <BottomTab.Navigator
            initialRouteName="DoctorHome"
            screenOptions={({ route }) => ({
                tabBarStyle: { backgroundColor: "#FFFFFF", height: 60 },
                tabBarActiveBackgroundColor: "transparent",
                tabBarShowLabel: false,
                headerShown: false,

                tabBarIcon: ({ focused }) => {
                    if (route.name === "DoctorHome") {
                        return (
                            <ContentIcon
                                tabBarActiveBackgroundColor={focused ? "#ECF2FF" : "transparent"}
                            >
                                <FontAwesome6 name="calendar-check" size={20} color={focused ? "#607EC5" : "#434B59"} />
                                {focused &&
                                    <TextIcon style={{paddingLeft: 3}}>Agenda</TextIcon>   
                                }
                            </ContentIcon>
                        )
                    } else {
                        return (
                            <ContentIcon
                                tabBarActiveBackgroundColor={focused ? "#ECF2FF" : "transparent"}
                            >
                                <FontAwesome5 name="user-circle" size={22} color={focused ? "#607EC5" : "#434B59"} />
                                {focused &&
                                    <TextIcon>Perfil</TextIcon>   
                                }
                            </ContentIcon>
                        )
                    }
                }
            })}
        >
            <BottomTab.Screen
                name="DoctorHome"
                component={DoctorHome}
            />

            <BottomTab.Screen
                name="Profile"
                component={Profile}
                options={{ headerShown: false }}
            />
        </BottomTab.Navigator>
    )
}