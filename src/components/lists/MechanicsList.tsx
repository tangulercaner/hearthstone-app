import React, { useCallback } from "react";
import { View, FlatList } from "react-native";
import MechanicView from "../mechanic_view/MechanicView";

interface IMechanicsList {
  mechanicsData: string[],
  style?: Object
}

const MechanicList: React.FC<IMechanicsList> = (props) => {

  const { mechanicsData, style } = props

  const renderMechanic = useCallback(({ item, index }) => {
    return (
      <MechanicView key={index} name={item} />
    );
  }, [])

  return (
    <View style={{}}>
      <FlatList
        data={mechanicsData}
        renderItem={renderMechanic}
        keyExtractor={(mechanics) => mechanics}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style}
        columnWrapperStyle={{ justifyContent: "space-around" }}
        ItemSeparatorComponent={() => <View style={{ margin: 10 }} />}
        numColumns={3}
      />
    </View>
  );
}


export default MechanicList;

