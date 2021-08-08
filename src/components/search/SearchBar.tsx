import React from "react";
import { View, TextInput } from 'react-native'
import { BLACK_COLOR } from "../../styles/Colors";
import { SearchIcon } from "../visuals/icons/Icons";
import { styles } from "./SearchBar.style";

interface ISearchBar {
  searchValue: string,
  setSearchValue: (newValue: string) => void,
  onSearchSubmit?: () => void,

}

const SearchBar: React.FC<ISearchBar> = (props) => {
  const { searchValue, setSearchValue, onSearchSubmit } = props
  return (
    <View style={styles.backgroundStyle}>
      <SearchIcon color={BLACK_COLOR} size={30} style={styles.iconStyle} />
      <TextInput
        placeholder={"Search"}
        style={styles.inputStyle}
        value={searchValue}
        onChangeText={(newValue) => setSearchValue(newValue)}
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={() => onSearchSubmit ? onSearchSubmit() : null}
      />
    </View>
  );
}

export default SearchBar;