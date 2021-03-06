import ReflectionModel from '../models/ReflectionModelJSON';

const Reflection = {
  create(req, res) {
    if (!req.body.success && !req.body.lowPoint && !req.body.takeAway) {
      return res.status(400).json({
        status: 400,
        error: 'All fields are required',
      });
    }
    const reflection = ReflectionModel.create(req.body);
    return res.status(201).json({
      status: 201,
      reflection,
    });
  },

  getAll(req, res) {
    const reflections = ReflectionModel.findAll();
    return res.status(200).json({
      status: 200,
      reflections,
    });
  },

  getOne(req, res) {
    const reflection = ReflectionModel.findOne(req.params.id);
    if (!reflection) {
      return res.status(404).json({
        status: 404,
        error: 'reflection not found',
      });
    }
    return res.send(reflection);
  },

  update(req, res) {
    const reflection = ReflectionModel.findOne(req.params.id);
    if (!reflection) {
      return res.status(404).json({
        status: 404,
        error: 'reflection not found',
      });
    }
    const updatedReflection = ReflectionModel.update(req.params.id, req.body);
    return res.status(200).send(updatedReflection);
  },

  delete(req, res) {
    const reflection = ReflectionModel.findOne(req.params.id);
    if (!reflection) {
      return res.status(404).json({
        status: 404,
        error: 'reflection not found',
      });
    }
    const delRef = ReflectionModel.delete(req.params.id);
    return res.status(204).send(delRef);
  },
};

export default Reflection;
