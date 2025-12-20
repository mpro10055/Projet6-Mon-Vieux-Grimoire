const Thing = require('../modeles/Thing');

exports.createThing = (req, res, next) => {
  const thing = new Thing({
    id: { type: String, required: true },
userId: { type: String, required: true },
title: { type: String, required: true },
author: { type: String, required: true },
ImageUrl: { type: String, required: true },
year: { type: Number, required: true },
genre: { type: String, required: true },
ratings: { type: [Number], required: true}
  });
  thing.save().then(
    () => {
      res.status(201).json({
        message: 'Post saved successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getOneThing = (req, res, next) => {
  Thing.findOne({
    _id: req.params.id
  }).then(
    (thing) => {
      res.status(200).json(thing);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.modifyThing = (req, res, next) => {
  const thing = new Thing({
    id: { type: String, required: true },
userId: { type: String, required: true },
title: { type: String, required: true },
author: { type: String, required: true },
ImageUrl: { type: String, required: true },
year: { type: Number, required: true },
genre: { type: String, required: true },
ratings: { type: [Number], required: true}
  });
  Thing.updateOne({_id: req.params.id}, thing).then(
    () => {
      res.status(201).json({
        message: 'Thing updated successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.deleteThing = (req, res, next) => {
  Thing.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'Deleted!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getAllStuff = (req, res, next) => {
  Thing.find().then(
    (things) => {
      res.status(200).json(things);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};