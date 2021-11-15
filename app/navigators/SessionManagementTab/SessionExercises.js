import React from "react";
import {View, FlatList} from "react-native";
import {ExerciseCard} from "../../components";
import {useExerciseContext} from "../../shared/contexts/ExerciseContext";
function SessionExercises() {
  const {privateExercises} = useExerciseContext();

  const renderItem = ({item, index}) => (
    <ExerciseCard data={item} screen="session" />
  );

  return (
    <View style={{flex: 1, backgroundColor: "white"}}>
      <FlatList
        data={privateExercises}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default SessionExercises;
