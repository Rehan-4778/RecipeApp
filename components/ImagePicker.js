import React, { useState, useEffect } from "react";
import {
  Image,
  View,
  StyleSheet,
  Pressable,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faFileArrowUp } from "@fortawesome/free-solid-svg-icons/faFileArrowUp";


import * as FileSystem from "expo-file-system";
import { FontAwesome } from "@expo/vector-icons";
export default function ImagePickerExample(props) {
  const { isProfileImage } = props;
  const fileName = "myImage.jpg";
  const imagePath = `${FileSystem.documentDirectory}${fileName}`;
  const [image, setImage] = useState(null);
  useEffect(() => {
    const checkFileExists = async () => {
      try {
        const fileInfo = await FileSystem.getInfoAsync(imagePath);
        fileInfo.exists ? setImage(imagePath) : setImage(null);
      } catch (error) {
        console.error(error);
      }
    };
    checkFileExists();
  }, []);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      const imageUri = result.assets[0].uri;
      const fileName = "myImage.jpg";
      const fileUri = FileSystem.documentDirectory + fileName;

      await FileSystem.copyAsync({
        from: imageUri,
        to: fileUri,
      });
    }
  };

  return (
    <View style={styles.container}>
      {image ? (
        <Image source={{ uri: image }} style={styles.image} />
      ) : (
        <Image style={styles.image} source={require("../assets/avatar.jpg")} />
      )}
      {
        props.showIcon && (
          <Pressable
            onPress={pickImage}
            style={isProfileImage ? styles.settingsIcon : styles.icon_container}
          >
            <FontAwesomeIcon icon={faFileArrowUp} size={25} color="rgb(247, 124, 67)" />
          </Pressable>
        )
      }
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 1.5,
    borderColor: "rgb(247, 124, 67)",
  },
  container: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  icon_container: {
    position: "absolute",
    bottom: -4,
    right: 2,
  },
  settingsIcon: {
    position: "absolute",
    bottom: -4,
    right: 130,
  },
  icon: {
    width: 30,
    height: 30,
  },
});
