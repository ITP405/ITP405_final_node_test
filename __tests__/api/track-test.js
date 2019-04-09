const frisby = require('frisby');
const{Joi} = frisby;
// const Joi = frisby.Joi;

it('should return a status of 404 when the track does not exist',()=>{
  return frisby
    .get('http://localhost:8000/api/tracks/-1')
    .expect('status', 404);
});
it('should return a status of 200 when the track is updated successfully',()=>{
  return frisby
    .patch('http://localhost:8000/api/tracks/5',{
      name: 'ITP',
      milliseconds: "1",
      unitPrice: "1"
    })
    .expect('status', 200)
});
it('should return a status of 422 when the track has validation errors',()=>{
  return frisby
    .patch('http://localhost:8000/api/tracks/5',{
      name: "",
      milliseconds: "a",
      unitPrice: "b"
    })
    .expect('status', 422);
});
//
// it('should return a status of 422',()=>{
//   return frisby
//     .patch('http://localhost:8000/api/tracks/5'),{
//     name: "",
//     milliseconds: "a",
//     unitPrice: "b"
//   })
//   .expect('status', 422);
// });
