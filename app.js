const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
// const Artist = require('./models/artist');
// const Playlist = require('./models/playlist');
// const Album = require('./models/album');
const Track = require('./models/track');
// const {Op} = Sequelize;
const app = express();
app.use(bodyParser.json());

let check  =6 ;

// Artist.hasMany(Album,{
//   foreignKey: 'ArtistId'
// });
//
// Album.belongsTo(Artist,{
//   foreignKey: 'ArtistId'
// });
//
// Playlist.belongsToMany(Track, {
//   through: 'playlist_track',
//   foreignKey: 'PlaylistId',
//   timestamps: false

app.get('/api/tracks/:id', function(request, response){
  let { id } = request.params;
  Track.findByPk(id,{
  }).then((track)=>{
    if (track){
      response.json(track);
    }else{
      response.status(404).send();
    }
  });
});
app.patch('/api/tracks/:id', function(request, response){
  let { id } = request.params;
  // console.log(id)

 Track.findByPk(id).then((track)=>{
    if (track){
    }else{
      return Promise.reject();
    }
  }).then(()=>{
    Track.update({
      name: request.body.name,
      milliseconds: request.body.milliseconds,
      unitPrice: request.body.unitPrice},
      {
        where:{ id : request.params.id }
    }).then(()=>{
        response.status(200).send();
    },(validation)=>{
        response.status(422).json({
          errors: validation.errors.map((error)=>{
            return {
              attribute:error.path,
              message: error.message
            }
          })
        })
    });

  },()=>{
      response.status(404).send();
  });


});


app.listen(8000);
