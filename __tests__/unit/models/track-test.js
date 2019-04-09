const {expect} = require('chai');
const frisby = require('frisby');
const{Joi} = frisby;
const Track = require('./../../../models/track')

describe('track',()=>{
  describe('milliseconds', ()=>{
    it('should only contain numbers', async ()=>{
      try {
        let track = new Track({milliseconds: 'a'});
        await track.validate();
      } catch (error) {
        expect(error.errors[0].message).to.equal('Milliseconds is not numeric');
      } finally {

      }
    });
    it('should only contain numbers', async ()=>{
      try {
        let track = new Track({milliseconds: '1'});
        await track.validate();
        expect('jsonTypes', 'tracks',{
          milliseconds: Joi.number().required()
        });
        expect("Milliseconds is not numeric").to.equal('Milliseconds is not numeric');
      } catch (error) {
        expect(error.errors[0].message).to.equal('Milliseconds is not numeric');
      } finally {

      }
    });
  });
});
