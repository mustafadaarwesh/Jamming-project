import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import TrackList from '../TrackList/TrackList';


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      SearchResults : [{
        name: 'name1', artist: 'artist1', album: 'album1', id: '1'
      }, {
        name: 'name2', artist: 'artist2', album: 'album2', id: '2'
      }],
      PlaylistName: 'List of Playlist',
      PlaylistTracks: [{PlaylistName: 'name1', PlaylistArtist: 'artist1', PlaylistAlbum: 'album1', id: '1'}]
  }
}

  render (){
    return (
      <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
   <SearchBar />
    <div className="App-playlist">
    <SearchResults SearchResults={this.state.SearchResults}/>
    <Playlist PlaylistName={this.state.PlaylistName} PlaylistTracks={this.state.PlaylistTracks}/>
    </div>
  </div>
</div>
    )
  }
  }
export default App;