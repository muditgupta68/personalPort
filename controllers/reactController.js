const ReactModel = require("../schema/projectSchema");

exports.getProjects = async(req, res) => {
  try {
    const data = await ReactModel.find({});
    res.status(200).json({ projects: data });
  } catch (error) {
    console.log(error);
  }
};

exports.addProjects = async(req, res) => {
  try {
    const data = req.body;
    if (!data) {
      res.status(400).json({ err: "Data is invalid" });
    }
    const newReactProject = await new ReactModel(data);
    await newReactProject.save();
    res.status(200).json({ msg: "SUCCESS" });
  } catch (error) {
    res.status(400).json({ err: error });
  }
};
