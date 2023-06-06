import React, { useContext } from "react";
import { Text, View, Pressable } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faKey } from "@fortawesome/free-solid-svg-icons";


import UserContext from "../context/auth/UserContext";
import styles from "./ProfileStyles";
import CountryPicker from "react-native-country-picker-modal";
import { setCountry } from "../middlewares/setCountry";
import ImagePicker from "../components/ImagePicker";
const Profile = ({ navigation }) => {
  const userContext = useContext(UserContext);
  const { user, setUser } = userContext;
  const handleCountryChange = async (country) => {
    const result = await setCountry({ id: user.id, country: country.cca2 });
    if (result) {
      setUser((prev) => {
        return { ...prev, country: country.cca2 };
      });
    }
  };
  return (
    <View>
      <View style={styles.container}>
        <View>
          <ImagePicker showIcon={true} />
        </View>
        <View style={styles.details}>
          <CountryPicker
            countryCode={user.country}
            withFlag
            withFilter
            withCountryNameButton
            withAlphaFilter
            onSelect={handleCountryChange}
          />
          <Text style={styles.text}> Name : {user.username}</Text>
          <Text style={styles.text}> Email : {user.email} </Text>
        </View>
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.resetButton,
          pressed && { backgroundColor: "rgb(247, 124, 67)" },
        ]}
        onPress={() => {
          navigation.navigate("ChangePassword");
        }}
        TouchableHighlight
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.buttonText}>Change Password</Text>
          <FontAwesomeIcon
            icon={faKey}
            size={16}
            color="white"
            style={{ marginLeft: 10 }}
          />
        </View>
      </Pressable>

    </View>
  );
};

export default Profile;
