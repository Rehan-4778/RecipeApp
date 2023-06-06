import React, { useState, useEffect, useContext } from "react";
import { ScrollView, View, Image, Alert } from "react-native";
import styles from "./RecipesStyles";
import RecipeCard from "./RecipeCard";
import Spinner from "../assets/Spinner.gif";
import uuid from "react-native-uuid";
import SlideUpPanel from "./SlideUpPanel";
import { Toast } from "toastify-react-native";
import UserContext from "../context/auth/UserContext";

const Recipes = (props) => {

  const { user, addNote, deleteNote } = useContext(UserContext);
  const { isLoading, setIsLoading } = props;
  const [isPanelVisible, setIsPanelVisible] = useState(false);

  const [note, setNote] = useState({
    id: "",
    text: "",
  });

  const [selectedRecipe, setSelectedRecipe] = useState({
    id: "",
    name: "",
  });

  const handleSaveNote = (noteText) => {

    if (noteText.trim() === "") {
      Toast.error("Please enter a note");
      return;
    }

    setIsPanelVisible(false);

    const newNote = {
      id: uuid.v4(),
      text: noteText,
      recipeId: selectedRecipe.id,
      recipeName: selectedRecipe.name,
    }

    try {
      addNote(newNote);
      setTimeout(() => {
        Toast.success("Note saved successfully");
      }, 500);
    }
    catch (error) {
      console.log(error);
    }

  }

  const handleDeleteNote = (noteId) => {

    Alert.alert(
      'Delete Note',
      'Are you sure you want to delete this note?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            try {
              deleteNote(noteId);
            }
            catch (error) {
              console.log(error);
            }
          }
        },
      ],
      {
        cancelable: true,
      },
    );

  };


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, [isLoading]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image source={Spinner} style={{ width: 100, height: 100 }} />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollableView}>
      {props.dishes.map((dish) => {
        if (props.tagValue === "All" || props.tagValue === dish.category) {
          return (
            <RecipeCard
              key={uuid.v4()}
              dish={dish}
              navigation={props.navigation}
              setIsPanelVisible={setIsPanelVisible}
              setSelectedRecipe={setSelectedRecipe}
              user={user}
              noteIcon={true}
            />
          );
        } else if (
          props.searchValue !== "" &&
          dish.name.toLowerCase().includes(props.searchValue.toLowerCase())
        ) {
          return (
            <RecipeCard
              key={uuid.v4()}
              dish={dish}
              navigation={props.navigation}
              setIsPanelVisible={setIsPanelVisible}
              setSelectedRecipe={setSelectedRecipe}
              user={user}
              noteIcon={true}
            />
          );
        }
      })}

      <SlideUpPanel
        visible={isPanelVisible}
        onDismiss={() => setIsPanelVisible(false)}
        handleSaveNote={handleSaveNote}
        selectedRecipeNotes={user.notes.filter(note => note.recipeId === selectedRecipe.id)}
        handleDeleteNote={handleDeleteNote}
      />

    </ScrollView>
  );
};

export default Recipes;
