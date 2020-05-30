import React, {useState} from 'react';
import {TextInput} from 'react-native';
import liveSearchStyle from './LiveSearch.style';

const LiveSearch = (props) => {
  const {setRestaurantSearch} = props;
  const [searchResult, setSearchResult] = useState(null);
  return (
    <TextInput
      style={liveSearchStyle.liveSearchInput}
      placeholder="Find Restaurant"
      onChangeText={(search) => {
        setRestaurantSearch(search);
        setSearchResult(search);
      }}
      value={searchResult}
    />
  );
};

export default LiveSearch;
