import React, { useContext } from "react";
import styles from "./RecipeCardStyles";
import { ImageBackground, Text, View, Pressable, Image } from "react-native";
import DishContext from "../context/dishes/DishContext";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import formatTime from "../utils/formatTime";
import { Toast } from "toastify-react-native";
import UserContext from "../context/auth/UserContext";
import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons/faHeart";

const RecipeCard = (props) => {
  const date = new Date(props.dish.time);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const recipieTime = formatTime(hours, minutes, seconds);

  const { user, addFavorite, deleteFavorite } = useContext(UserContext);

  const handleFavorite = (dishId) => {
    try {
      const isFavorite = user.favoriteRecipes.includes(dishId);
      if (!isFavorite) {
        addFavorite(dishId);
        Toast.success("Recipe added to favorites");
      } else {
        Toast.warn("Recipe already in favorites");
      }
    }
    catch (error) {
      console.log(error);
    }
  };

  const handleDeleteFavorite = (dishId) => {

    try {
      deleteFavorite(dishId);
      Toast.success("Recipe removed from favorites");
    }
    catch (error) {
      console.log(error);
    }

  };

  return (
    <View
      style={styles.card}
      onTouchEnd={() =>
        props.navigation.navigate("RecipeDetail", {
          dishId: props.dish.id,
          dishName: props.dish.name,
          dishIngredients: props.dish.ingredients,
          dishTime: props.dish.time,
          dishImage: props.dish.image,
          dishVideo: props.dish.video,
          dishDescription: props.dish.description,
          dishPreparationSteps: props.dish.preparationSteps,
        })
      }
    >
      <ImageBackground
        source={{ uri: props.dish.image }}
        style={styles.image}
        imageStyle={{
          borderRadius: 15,
          resizeMode: "cover",
          paddingHorizontal: 20,
        }}
      >
        <LinearGradient
          colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.01)", "rgba(0,0,0,0.4)"]}
          style={styles.gradient}
        />

        <View style={styles.iconsGroup}>

          {props.user.favoriteRecipes.includes(props.dish.id) ? (
            <Pressable style={styles.favorite}
              onTouchEnd={(e) => {
                handleDeleteFavorite(props.dish.id)
                e.stopPropagation();
              }}
            >
              <FontAwesomeIcon
                icon={faHeart}
                style={styles.favoriteIcon}
                size={20}
                color="#FF0000"
              />
            </Pressable>
          ) : (
            <Pressable style={styles.favorite}
              onTouchEnd={(e) => {
                handleFavorite(props.dish.id)
                e.stopPropagation();
              }}
            >
              <FontAwesomeIcon
                icon={faHeartRegular}
                style={styles.favoriteIcon}
                size={20}
              />
            </Pressable>
          )}

          {
            props.noteIcon &&
            <Pressable
              style={styles.note}
              onTouchEnd={(e) => {
                props.setSelectedRecipe({
                  id: props.dish.id,
                  name: props.dish.name,
                })
                props.setIsPanelVisible(true);
                e.stopPropagation();
              }}
            >
              <Image source={require('../assets/icons/addnote3.png')} style={styles.noteIcon} />
            </Pressable>
          }

        </View>


        <View style={styles.recipeDetails}>
          <Text style={styles.recipeName}>{props.dish.name}</Text>

        </View>
      </ImageBackground>
    </View>
  );
};

export default RecipeCard;
