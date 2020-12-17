import React from "react";
import { Title, Text, T } from "react-native-paper";
import { View, StyleSheet, SafeAreaView, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { FontAwesome, AntDesign } from "@expo/vector-icons";

import { Button, Header } from "react-native-elements";
import { AuthContext } from "../providers/AuthProvider";
import HeaderHome from "./../components/Header";

const ProfileScreen = (props) => {
  return (
    <AuthContext.Consumer>
      {(auth) => (
        <SafeAreaView style={styles.container}>
          <HeaderHome
            DrawerFunction={() => {
              props.navigation.toggleDrawer();
            }}
          />

          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <View style={{ marginLeft: 20 }}>
                <Title
                  style={[
                    styles.title,
                    {
                      marginTop: 50,

                      marginBottom: 5,
                    },
                  ]}
                >
                  {auth.CurrentUser.displayName}
                </Title>
              </View>
            </View>
          </View>

          <View style={styles.userInfoSection}>
            <View style={styles.row}>
              <FontAwesome name="birthday-cake" size={24} color="#777777" />
              <Text style={{ color: "#777777", marginLeft: 20, fontSize: 20 }}>
                {" "}
                Born on 22 July, 1997{" "}
              </Text>
            </View>

            <View style={styles.row}>
              <Icon name="map-marker-radius" color="#777777" size={30} />
              <Text style={{ color: "#777777", marginLeft: 20, fontSize: 20 }}>
                Dhaka, Bangladesh
              </Text>
            </View>
            <View style={styles.row}>
              <Icon name="phone" color="#777777" size={30} />
              <Text style={{ color: "#777777", marginLeft: 20, fontSize: 20 }}>
                01923-789900
              </Text>
            </View>
            <View style={styles.row}>
              <Icon name="email" color="#777777" size={30} />
              <Text style={{ color: "#777777", marginLeft: 20, fontSize: 20 }}>
                {auth.CurrentUser.email}
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              flex: 1,
              justifyContent: "center",
              paddingTop: 100,
            }}
          ></View>
        </SafeAreaView>
      )}
    </AuthContext.Consumer>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    color: "blue",
    marginTop: 5,
    textAlign: "left",
    paddingLeft: 30,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
});

export default ProfileScreen;
