// @flow
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    marginTop: 25,
    height: '100%',
    width: '100%',
  },
  input: {
    height: 32,
    width: 200,
    borderWidth: 1,
    borderColor: '#333',
    paddingHorizontal: 4,
  },
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navButton: {
    borderWidth: 1,
    borderColor: '#333',
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#212121',
    borderRadius: 2,
    marginTop: 20,
  },
  navButtonText: {
    color: '#FFF',
  },
  searchScene: {
    width: '100%',
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  backButton: {
    borderWidth: 1,
    borderColor: '#333',
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: '#0000CC',
    borderRadius: 2,
    marginTop: 8,
    width: 120,
    marginHorizontal: 'auto',
  },
  searchInput: {
    flex: 2,
    height: 32,
    width: 200,
    borderWidth: 1,
    borderColor: '#333',
    paddingHorizontal: 4,
    marginHorizontal: 2,
  },
  searchBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#333',
    paddingHorizontal: 6,
    paddingVertical: 2,
    backgroundColor: '#CC0000',
    borderRadius: 3,
  },
  imagesContainer: {
    display: 'flex',
    width: '100%',
    backgroundColor: '#CCC',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  imageBox: {
    width: 125,
    height: 125,
  },
  starred: {
    position: 'absolute',
    backgroundColor: '#0000CC',
    borderRadius: 3,
    width: 10,
    height: 10,
    bottom: 4,
    right: 6,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageBlock: {
    width: '100%',
    flexDirection: 'row',
  },

  favoriteScene: {
    width: '100%',
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
