//import liraries
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {screensStyle} from '../../styles/screensStyle';
import {useDispatch, useSelector} from 'react-redux';
import {getCharacterList} from '../../store/actions/charactersActions';
import Spinner from '../../components/uı/spinner';
import CharacterCard from '../../components/characters/characterCard';

// create a component
const Chaaracters = () => {
  const {characterList, pending} = useSelector(state => state.characters);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCharacterList());
  }, []);

  return (
    <View style={screensStyle.container}>
      {pending ? (
        <Spinner />
      ) : (
        <FlatList
          data={characterList}
          renderItem={({item}) => <CharacterCard item={item}/>}
        />
      )}
    </View>
  );
};

export default Chaaracters;
